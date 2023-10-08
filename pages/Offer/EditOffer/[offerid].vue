<template>
    <div>
        <NuxtLayout name="zen">
            <SectionMain>
                <SectionTitleLineWithButton :icon="mdiPencil" title="Create Offer Letter" main>
                    <div
                        class="ml-5 lg:flex flex-col resDis lg:order-1 lg:flex-row lg:items-end lg:justify-end items-center justify-center gap-3">
                        <div v-if="uploadingFile">
                            {{ status }}
                        </div>

                        <button class="bg-red-700 text-white w-24 h-10 rounded" @click="discardBtn">
                            Discard
                        </button>
                        <button class="bg-blue-600 text-white w-24 h-10 rounded" @click="saveReview">
                            Save
                        </button>
                        <button class="bg-blue-600 text-white w-24 h-10 rounded" @click="previewBtn">
                            Preview
                        </button>
                        <button class="bg-blue-600 text-white w-24 h-10 rounded" @click="sendBtn">
                            Send
                        </button>
                    </div>
                    <BaseButton label="Save" color="info" @click="saveReview" class="lg:hidden" />
                </SectionTitleLineWithButton>
                <CardBox class="mb-6 g:mb-0 lg:col-span-2 xl:col-span-3" if-from @submit.prevent="submit">
                    <PremFormField label="Name" horizontal>
                        <PremFormField horizontal>
                            <PremFormControl placeholder="Enter Employee Name" v-model="titleText" required="true" />
                        </PremFormField>
                    </PremFormField>
                    <PremFormField label="Designation" horizontal>
                        <PremFormField horizontal>
                            <PremFormControl placeholder="Enter Designation" v-model="subtitleText" required="true" />
                        </PremFormField>
                    </PremFormField>
                    <PremFormField label="Email" horizontal>
                        <PremFormField horizontal>
                            <PremFormControl placeholder="Enter Your Email" v-model="emailText" required="true"
                                type="email" />
                        </PremFormField>
                    </PremFormField>
                    <PremFormField label="Salary" horizontal>
                        <PremFormField horizontal>
                            <PremFormControl placeholder="Enter Salary" v-model="salaryText" required="true"
                                type="number" />
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

                            <input class="w-full" type="text" name="hourOrTask" id="hourOrTask" v-model="totalTaskHour"
                                :placeholder="value == 'Hour' ? 'Enter Total Hour' : value == 'Task' ? 'Enter Total Task' : 'Select Per Task or Per Hour'">

                        </div>

                    </div>



                    <PremFormField label="Additional Condition" horizontal>
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

                    <button class="bg-red-600 text-white w-full h-10 rounded" @click="publishBtn">Discard</button>
                    <button class="bg-blue-600 text-white w-full h-10 rounded" @click="publishBtn">Preview</button>
                    <button class="bg-blue-600 text-white w-full h-10 rounded" @click="publishBtn">Send</button>
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
import { DataStore } from "@aws-amplify/datastore"
import { OfferLater } from "@/src/models/index.js"
import { useRouter } from 'vue-router';
import { QuillEditor } from '@vueup/vue-quill'
import { Amplify, Auth } from 'aws-amplify'
import awsConfig from "@/src/aws-exports.js"

Amplify.configure(awsConfig)
Auth.configure(awsConfig)

const { offerid } = useRoute().params;
console.log(offerid)


const router = useRouter()




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
const salaryText = ref()
const emailText = ref('')
const totalTaskHour = ref('')
const uploadingFile = ref(false);
const status = ref("Uploading Data...")
const savedOfferLater = ref()
const isSended = ref()

const oldOfferNo = ref()



const categorySelect = ref([
    { name: "Select Category", value: "" },
    { name: "Per Task", value: "Task" },
    { name: "Per Hour", value: "Hour" },
]);


const previewBtn = async (e) => {
    e.preventDefault()
    alert("Preview")

};

onMounted(async () => {
    const offer = await DataStore.query(OfferLater, offerid)

    titleText.value = offer.Name
    subtitleText.value = offer.Designation
    salaryText.value = offer.Salary
    emailText.value = offer.Email
    value.value = offer.perTaskorHour.slice((offer.perTaskorHour.length - 4), offer.perTaskorHour.length)
    totalTaskHour.value = offer.perTaskorHour.slice(0, (offer.perTaskorHour.length - 4))
    editorContent.value = offer.AdditionalConditions
    oldOfferNo.value = offer.OfferLaterNo



});

const saveReview = async () => {
    if (confirm("Do You Want to Save This Testimonials") == true) {
        if (savedOfferLater.value) {

            const modelToDelete = await DataStore.query(OfferLater, savedOfferLater.value);
            DataStore.delete(modelToDelete);
        }


        status.value = "Saving Data..."


        console.log(typeof salaryText.value)

        const taskHour = totalTaskHour.value > 1 ? totalTaskHour.value + " " + value.value + "s" : totalTaskHour.value + " " + value.value
        const data = await DataStore.query(OfferLater);
        const dataLength = data.length + 1;
        console.log(dataLength);

        const newModel = await DataStore.save(
            new OfferLater({
                "OfferLaterNo": oldOfferNo.value,
                "Name": titleText.value,
                "Designation": subtitleText.value,
                "Salary": salaryText.value,
                "Email": emailText.value,
                "perTaskorHour": taskHour,
                "AdditionalConditions": editorContent.value,
                "isSended": false

            })
        );
        isSended.value = false
        savedOfferLater.value = newModel.id;
        console.log(savedOfferLater.value);

        uploadingFile.value = false;



    }
};


const discardBtn = () => {
    if (confirm("Do You Want to Discard This Blog") == true) {
        titleText.value = "";
        subtitleText.value = ""
        emailText.value = ""
        salaryText.value = ""
        value.value = "";
        totalTaskHour.value = ""
        editorContent.value = " ";
        localStorage.removeItem('formData');
        isSended.value = ""
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
