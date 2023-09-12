<template>
    <div>
        <NuxtLayout name="zen">
            <SectionMain>
                <SectionTitleLineWithButton :icon="mdiPencil" title="Create Testimonials" main>
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
                            
                            <div class="flex flex-col">
                                <div class="flex">
                                    <input type="text" placeholder="Click to Add URLs"
                                        class="w-full dark:bg-slate-800 rounded-[0.25rem] border border-slate-700"
                                        v-model="urlToAdd" />
                                    <button v-on:click="addUrl"
                                        class="w-24 ml-5 p-1 dark:bg-slate-800 dark:border dark:border-slate-700">Add
                                        URL</button>
                                </div>
                                <h4>https://youtu.be/<b class="text-red-700">8GmVNb_6Ckk</b> Please add only bold part of
                                    link</h4>
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

                            <select name="category" id="category"
                                class="dark:bg-slate-800 rounded-[0.25rem] border border-slate-700" required
                                v-model="value">
                                <option v-for="option in categorySelect" :value="option.value" :key="option.value"> {{
                                    option.name }} </option>

                            </select>
                            <button v-on:click="handleCreateCategory"
                                class="text-sm w-40 border-2 h-full  border-black dark:border-white">
                                Create Category
                            </button>
                        </div>

                    </div>
                    <div class="flex" v-if="showCreateCategory">
                        <input v-model="newType" placeholder="Enter Category"
                            class="p-2 w-4/5 dark:bg-slate-800 rounded-[0.25rem] border border-slate-700" type="text" />
                        <button @click="addNewType" class="bg-blue-500 text-white px-4 py-2 ml-2 w-1/6">
                            Add Category
                        </button>
                    </div>
                    <PremFormField label="Publish Date" horizontal>
                        <PremFormField horizontal>
                            <input type="date" class="dark:bg-slate-800 rounded-[0.25rem] border border-slate-700"
                                name="publishDate" id="publishDate" v-model="publishDate" required />
                        </PremFormField>
                    </PremFormField>
                    <PremFormField label="Add Image" horizontal>
                        <div
                            class="flex flexImage border border-black dark:border-slate-700 dark:bg-slate-800 rounded-md p-4 justify-center items-center gap-4">

                            <div v-if="uploadedFile">
                                <img v-if="uploadedFile.file" width="500" :src="uploadedFile.file.url" alt="Image" />
                            </div>

                            <img v-else src="@/images/download.png" alt="Image" />
                            <div class="flex justify-center">
                                <form>
                                    <input type="file" class=" w-[250px] " @change="handleFileChange"
                                        accept=".jpg, .jpeg, .png" />

                                </form>
                            </div>
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


const router = useRouter()

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
            if (savedTestimonial.value) {
                const modelToDelete = await DataStore.query(TestimonialData, savedTestimonial.value);
                DataStore.delete(modelToDelete);
            }

            try {
                if (uploadedFile.value && uploadedFile.value.file) {
                    uploadingFile.value = true;

                    fileKey.value = uploadedFile.value.key;
                    await Storage.put(fileKey.value, uploadedFile.value.file, {
                        contentType: uploadedFile.value.file.type,
                    });


                    const data = await DataStore.query(TestimonialData);
                    const dataLength = data.length + 1;
                    await DataStore.save(
                        new TestimonialData({
                            "testiminial_no": dataLength.toString(),
                            "student_name": titleText.value,
                            "sub_title": subtitleText.value,
                            "category": value.value,
                            "publishDate": publishDate.value,
                            "profilePicKey": fileKey.value,
                            "content": editorContent.value,
                            "isPublished": true,
                            "youtubeURL": urls.value.map(item => item)

                        })
                    );


                    window.alert("success")


                    titleText.value = "";
                    subtitleText.value = ""
                    value.value = "";
                    publishDate.value = "";
                    editorContent.value = " ";
                    uploadedFile.value = null;
                    savedTestimonial.value = ""
                    urls.value = []

                    localStorage.removeItem('formData');


                } else {
                    window.alert("No valid file selected for upload");
                }
            } catch (error) {
                console.log(error);
            } finally {
                uploadingFile.value = false;
                // router.push("/Testimonial/alltestimonial")
            }
        } else {
            window.alert("Fill All Fields Properly")
        }

    }
};

onMounted(() => {
    const formData = JSON.parse(localStorage.getItem('formData'));

    if (formData) {
        savedTestimonial.value = formData.id
        titleText.value = formData.titleText;
        subtitleText.value = formData.sub_title
        // value.value = formData.value;
        categorySelect.value.push({ name: formData.value, value: formData.value })
        value.value = formData.value
        publishDate.value = formData.publishDate;
        editorContent.value = formData.editorContent;
        uploadedFile.value = formData.uploadedFile;
        urls.value = formData.urlArray || [];

        console.log(urls.value);
    }



});

const saveReview = async () => {
    if (confirm("Do You Want to Save This Testimonials") == true) {
        if (savedTestimonial.value) {

            const modelToDelete = await DataStore.query(TestimonialData, savedTestimonial.value);
            DataStore.delete(modelToDelete);
        }


        status.value = "Saving Data..."
        uploadingFile.value = true;

        if (uploadedFile.value) {
            fileKey.value = uploadedFile.value.key;
            await Storage.put(fileKey.value, uploadedFile.value.file, {
                contentType: uploadedFile.value.file.type,
            });
        }



        const data = await DataStore.query(TestimonialData);
        const dataLength = data.length + 1;
        console.log(dataLength);

        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1; // Note: Month is zero-based, so we add 1.
        const day = today.getDate();

        const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

        const newModel = await DataStore.save(
            new TestimonialData({
                "testiminial_no": dataLength.toString(),
                "student_name": titleText.value,
                "sub_title": subtitleText.value,
                "category": value.value,
                "publishDate": publishDate.value ?? new Date(formattedDate),
                "profilePicKey": fileKey.value ?? "",
                "content": editorContent.value,
                "isPublished": false,
                "youtubeURL": urls.value.map((item) => item)

            })
        );
        savedTestimonial.value = newModel.id;
        console.log(savedTestimonial.value);
        const formData = {
            id: savedTestimonial.value,
            titleText: titleText.value,
            sub_title: subtitleText.value,
            value: value.value,
            publishDate: publishDate.value,
            editorContent: editorContent.value,
            uploadedFile: uploadedFile.value.file ?? null,
            urlArray: urls.value.map(item => item),
        };
        localStorage.setItem('formData', JSON.stringify(formData));

        uploadingFile.value = false;



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
import '@vueup/vue-quill/dist/vue-quill.snow.css';


</script>

  
<style>
@media screen and (max-width: 1024px) {
    .resDis {
        display: none;
    }

    .flexImage {
        flex-direction: column;

    }




}
</style>
