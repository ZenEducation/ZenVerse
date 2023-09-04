<template>
    <div>
        <NuxtLayout name="zen">
            <SectionMain>
                <SectionTitleLineWithButton :icon="mdiPencil" title="Edit Testimonials" main>
                    <div
                        class="ml-5 lg:flex flex-col resDis lg:order-1 lg:flex-row lg:items-end lg:justify-end items-center justify-center gap-3">
                        <div v-if="uploadingFile">
                            {{ status }}
                        </div>

                        <button class="bg-red-700 text-white w-24 h-10 rounded" @click="discardBtn">
                            Discard
                        </button>
                        <button class="bg-blue-600 text-white w-24 h-10 rounded" @click="publishBtn">
                            Publish
                        </button>
                        <button class="bg-blue-600 text-white w-24 h-10 rounded" @click="saveReview">
                            Save
                        </button>
                    </div>
                    <BaseButton label="Save" color="info" @click="saveReview" class="lg:hidden" />
                </SectionTitleLineWithButton>
                <CardBox class="mb-6 g:mb-0 lg:col-span-2 xl:col-span-3" if-from @submit.prevent="submit">
                    <PremFormField label="Title" horizontal>
                        <PremFormField horizontal>
                            <PremFormControl placeholder="Enter Student Name" v-model="titleText" required="true" />
                        </PremFormField>
                    </PremFormField>
                    <PremFormField label="Sub Title" horizontal>
                        <PremFormField horizontal>
                            <PremFormControl placeholder="Enter Sub Title" v-model="subtitleText" required="true" />
                        </PremFormField>
                    </PremFormField>
                    <PremFormField label="Youtube Link" horizontal>
                        <PremFormField horizontal>
                            <!-- <div class="flex flex-col">
                                <input type="text" placeholder="Click to Add URLs" class="w-full">

                            </div> -->
                            <div class="flex flex-col">
                                <input type="text" placeholder="Click to Add URLs" class="w-full" v-model="urlToAdd"
                                    @keydown.enter="addUrl" />
                                <div v-for="(url, index) in urls" :key="index" class="flex items-center">
                                    <span>{{ url }}</span>
                                    <button @click="removeUrl(index)" class="ml-2 text-red-500">Remove</button>
                                </div>
                            </div>
                        </PremFormField>
                    </PremFormField>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                        <div class="flex gap-3 items-center w-full">
                            <label class="block mb-2">Category</label>

                            <select name="category" id="category" required v-model="value">
                                <option v-for="option in categorySelect" :value="option.value" :key="option.value"> {{
                                    option.name }} </option>

                            </select>
                            <button v-on:click="handleCreateCategory" class="text-sm w-40 border-2 h-full  border-black">
                                Create Category
                            </button>
                        </div>

                    </div>
                    <div class="flex" v-if="showCreateCategory">
                        <input v-model="newType" placeholder="Enter Category" class="border border-gray-300 p-2 w-4/5"
                            type="text" />
                        <button @click="addNewType" class="bg-blue-500 text-white px-4 py-2 ml-2 w-1/6">
                            Add Category
                        </button>
                    </div>
                    <PremFormField label="Publish Date" horizontal>
                        <PremFormField horizontal>
                            <input type="date" name="publishDate" id="publishDate" v-model="publishDate" required />
                        </PremFormField>
                    </PremFormField>
                    <PremFormField label="Add Image" horizontal>
                        <div class="flex border border-black rounded-md p-4 justify-center items-center gap-4">

                            <div v-if="uploadedFile">
                                <img v-if="uploadedFile.file" width="500" :src="uploadedFile.file.url" alt="Image" />
                                <img v-else width="500" :src="SingleTestimonialImg" alt="Image" />
                            </div>

                            <img v-else src="@/images/download.png" alt="Image" />
                            <form>
                                <input type="file" @change="handleFileChange" accept=".jpg, .jpeg, .png" />

                            </form>
                        </div>
                    </PremFormField>
                    <PremFormField label="Content" horizontal>
                        <div class="rounded-md flex flex-col">
                            <div class="">
                                <ClientOnly placeholder="Loading...">
                                    <QuillEditor style="min-height: 30vh" theme="snow" :toolbar="toolbarOptions"
                                        content-type="html" v-model:content="editorContent" ref="quillEditorRef"
                                        @contentChanged="handleContentChanged" />

                                </ClientOnly>


                            </div>

                        </div>
                    </PremFormField>
                </CardBox>
                <div class="order-2 lg:hidden flex flex-col lg:flex-row items-center w-full lg:w-44 gap-3">
                    <button class="bg-green-700 text-white w-full h-10 rounded" @click="approveBtn">Approve</button>
                    <button class="bg-blue-600 text-white w-full h-10 rounded" @click="publishBtn">Publish</button>
                </div>
            </SectionMain>
        </NuxtLayout>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import SectionMain from "@/components/Sections/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import { mdiPencil } from "@mdi/js";
import PremFormField from "~~/components/Forms/FormField.vue";
import PremFormControl from "~~/components/Forms/FormControl.vue";
import { Storage } from "aws-amplify"
import awsconfig from "@/src/aws-exports.js"
import { DataStore } from "@aws-amplify/datastore"
import { TestimonialData } from "@/src/models/index.js"
import { useRouter } from 'vue-router';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const router = useRouter()

const { testimonialid } = useRoute().params

console.log(testimonialid);

Storage.configure({
    region: awsconfig.aws_user_files_s3_bucket_region,
    bucket: awsconfig.aws_user_files_s3_bucket
})



const uploadedFile = ref(null);
const allowedExtensions = ["jpg", "jpeg", "png"];

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const fileExtension = file.name.split(".").pop().toLowerCase();
        if (allowedExtensions.includes(fileExtension)) {
            const fileKey = `images/${Date.now()}-${file.name}`;
            file.url = URL.createObjectURL(file);
            uploadedFile.value = { file, key: fileKey }; // Save the file and its key
        } else {
            alert("Invalid file format. Please select an image file only");
            event.target.value = "";
        }
    }
};


const editorContent = ref(' ');
const quillEditorRef = ref(null);
const toolbarOptions = [
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ header: 1 }, { header: 2 }],
    [{ color: [] }, { background: [] }],
    ["bold", "italic", "underline", "strike"],
    [{ script: "sub" }, { script: "super" }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["blockquote"],
    ["image", "video", "link"],
    ["code-block"],
    ["clean"],
];

const handleContentChanged = () => {
    editorContent.value = quillEditorRef.value?.getText();
}



const value = ref('');
const titleText = ref('');
const subtitleText = ref('');
const publishDate = ref('');
const showCreateCategory = ref(false);
const newType = ref('');
const uploadingFile = ref(false);
const status = ref("Uploading Data...")
const savedTestimonial = ref()
const urlToAdd = ref('');
const urls = ref([]);
const SingleTestimonial = ref([])
const SingleTestimonialImg = ref("")
const oldTestimonialNo = ref("")
const fileKey = ref("")

const addUrl = () => {
    if (urlToAdd.value.trim() !== '') {
        urls.value.push(urlToAdd.value);
        urlToAdd.value = '';
    }
    console.log(urls.value);
};

const removeUrl = (index) => {
    urls.value.splice(index, 1);
};



const categorySelect = ref([
    { name: "Select Category", value: "" },
    { name: "Category 1", value: "Category 1" },
    { name: "Category 2", value: "Category 2" },
    { name: "Category 3", value: "Category 3" },
    { name: "Category 4", value: "Category 4" },
    { name: "Category 5", value: "Category 5" },
    { name: "Category 6", value: "Category 6" }

]);

const addNewType = async () => {
    if (newType.value.trim()) {
        const newCategory = {
            name: newType.value,
            value: newType.value,
        };

        categorySelect.value.push(newCategory);
        newType.value = '';
        showCreateCategory.value = false;
    }
};

const handleCreateCategory = () => {
    showCreateCategory.value = !showCreateCategory.value;
};


const publishBtn = async () => {

    if (confirm("Do You Want to Publish This Blog") == true) {
        if (titleText.value && subtitleText.value && value.value && publishDate.value && uploadedFile.value && editorContent.value) {
            status.value = "Publishing Blog..."


            try {
                uploadingFile.value = true;

                if (uploadedFile.value) {
                    fileKey.value = uploadedFile.value.key;
                    await Storage.put(fileKey.value, uploadedFile.value.file, {
                        contentType: "image/*",
                    });

                }



                await DataStore.save(
                    new TestimonialData({
                        "testiminial_no": oldTestimonialNo.value,
                        "student_name": titleText.value,
                        "sub_title": subtitleText.value,
                        "category": value.value,
                        "publishDate": publishDate.value,
                        "profilePicKey": fileKey.value ?? SingleTestimonial.value.profilePicKey,
                        "content": editorContent.value,
                        "isPublished": true,
                        "youtubeURL": urls.value.map(item => item)

                    })
                );

                if (savedTestimonial.value) {

                    const modelToDelete = await DataStore.query(TestimonialData, savedTestimonial.value);
                    DataStore.delete(modelToDelete);
                } else {

                    const modelToDelete = await DataStore.query(TestimonialData, SingleTestimonial.value.id);
                    DataStore.delete(modelToDelete);
                }


                window.alert("success")


                titleText.value = "";
                subtitleText.value = ""
                value.value = "";
                publishDate.value = "";
                editorContent.value = " ";
                uploadedFile.value = null;
                savedTestimonial.value = ""
                urls.value = []

            } catch (error) {
                console.log(error);
            } finally {
                uploadingFile.value = false;
                router.push("/Testimonial/alltestimonial")
            }
        } else {
            window.alert("Fill All Fields Properly")
        }

    }
};

onMounted(async () => {
    try {
        const Testimonial = await DataStore.query(TestimonialData, testimonialid);

        SingleTestimonial.value = Testimonial
        console.log(SingleTestimonial.value);

        SingleTestimonialImg.value = await Storage.get(SingleTestimonial.value.profilePicKey)

        console.log(SingleTestimonialImg.value);
        const { student_name, sub_title, category, content, testiminial_no, youtubeURL } = SingleTestimonial.value
        titleText.value = student_name
        subtitleText.value = sub_title
        value.value = category
        console.log(value.value);
        editorContent.value = content
        publishDate.value = SingleTestimonial.value.publishDate
        oldTestimonialNo.value = testiminial_no
        urls.value = youtubeURL
        uploadedFile.value = SingleTestimonialImg.value

    } catch (err) {
        console.error(err);
    }



});

console.log(value.value);

const saveReview = async () => {
    if (confirm("Do You Want to Save This Testimonials") == true) {
        try {
            status.value = "Saving Data..."
            uploadingFile.value = true;


            if (uploadedFile.value) {
                fileKey.value = uploadedFile.value.key;
                await Storage.put(fileKey.value, uploadedFile.value.file, {
                    contentType: "image/*",
                });

            }



            const data = await DataStore.query(TestimonialData);
            const dataLength = data.length + 1;
            console.log(dataLength);

            const newModel = await DataStore.save(
                new TestimonialData({
                    "testiminial_no": oldTestimonialNo.value,
                    "student_name": titleText.value,
                    "sub_title": subtitleText.value,
                    "category": value.value,
                    "publishDate": publishDate.value,
                    "profilePicKey": fileKey.value ?? SingleTestimonial.value.profilePicKey,
                    "content": editorContent.value,
                    "isPublished": false,
                    "youtubeURL": urls.value.map((item) => item)

                })
            );
            if (savedTestimonial.value) {

                const modelToDelete = await DataStore.query(TestimonialData, savedTestimonial.value);
                DataStore.delete(modelToDelete);
            } else {

                const modelToDelete = await DataStore.query(TestimonialData, SingleTestimonial.value.id);
                DataStore.delete(modelToDelete);
            }
            savedTestimonial.value = newModel.id;
            console.log(savedTestimonial.value);

            alert("Saved Successfully")
            uploadingFile.value = false;

            router.push("/Testimonial/alltestimonial")
        } catch (error) {
            console.error(error);
        }





    }
};


const discardBtn = () => {
    if (confirm("Do You Want to Discard This Blog") == true) {
        titleText.value = "";
        value.value = "";
        subtitleText.value = "";
        publishDate.value = "";
        editorContent.value = " ";
        uploadedFile.value = null;
        urls.value = []
        localStorage.removeItem('formData');
    }

};


</script>

  
<style>
@media screen and (max-width: 1024px) {
    .resDis {
        display: none;
    }
}
</style>
