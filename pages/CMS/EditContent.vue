<template>
    <div>
        <NuxtLayout name="cmslayout">
            <SectionMain>
                <SectionTitleLineWithButton :icon="mdiFileEdit" title="Edit Content" main>
                    <BaseButton label="Save" color="info" @click="saveReview" />
                </SectionTitleLineWithButton>
                <CardBox class="mb-6 g:mb-0 lg:col-span-2 xl:col-span-3" if-from @submit.prevent="submit">
                    <PremFormField label="Title" horizontal>
                        <PremFormField horizontal>
                            <PremFormControl placeholder="OG Title" v-model="titleText" />
                        </PremFormField>
                    </PremFormField>


                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
                        <div>
                            <label class="block mb-2">Type</label>
                            <div class="w-full">
                                <PremFormControl v-model="selectedOption" :options="typeVal" />
                            </div>
                        </div>
                        <div>
                            <label class="block mb-2">Status</label>
                            <div class="w-full">
                                <PremFormControl :disabled="true" :modelValue="statusLabel" />
                            </div>
                        </div>
                        <div>
                            <label class="block mb-2">Role</label>
                            <div class="w-full">
                                <PremFormControl v-model="roleSelectedOption" :options="roleVal" />
                            </div>
                        </div>
                    </div>
                    <PremFormField label="Category" horizontal>
                        <PremFormField horizontal>
                            <PremFormControl placeholder="OG Category" v-model="categoryText" />
                        </PremFormField>
                    </PremFormField>
                    <PremFormField label="Content : Preview" horizontal>
                        <div class="flex flex-col border border-black rounded-md p-4 justify-center items-center">

                            <div v-if="uploadedFile">
                                <img v-if="uploadedFile.type.startsWith('image/')" width="500" :src="uploadedFile.url"
                                    alt="Image" />
                                <video v-else-if="uploadedFile.type.startsWith('video/')" width="500"
                                    :src="uploadedFile.url" controls></video>
                            </div>
                            <img v-else src="../../images/download.png" alt="Image" />
                            <div>
                                <p class="text-center">{{ modelValue }}</p>
                            </div>
                        </div>
                    </PremFormField>

                    <PremFormField label="Edit Content :" horizontal>
                        <PremFormField horizontal class="border border-black rounded-md p-4 flex flex-col ">
                            <div class="border mb-4 py-8 flex justify-center flex-col items-center">
                                <h1>Click to Upload any Image or Video Here</h1>
                                <form @submit="uploadFile">
                                    <!-- <input type="file" @change="handleFileChange" /> -->
                                    <input type="file" @change="handleFileChange"
                                        accept=".jpg, .jpeg, .png, .gif, .tiff, .mp4, .avi, .mov, .webm">
                                </form>
                            </div>
                            <Editor v-model="modelValue" @input="previewText = $event" :getText="getPreviewText" />
                            <PremFormField label="URL:" horizontal>
                                <PremFormField horizontal>
                                    <PremFormControl v-model="myUrl" placeholder="Enter URL" />
                                </PremFormField>
                            </PremFormField>
                        </PremFormField>
                    </PremFormField>

                    <PremFormField label="Feedback: " horizontal>
                        <PremFormField horizontal>
                            <PremFormControl type="textarea" v-model="feedbackText" placeholder="Write Your Feedback" />
                        </PremFormField>
                    </PremFormField>
                    <div v-for="review in reviews" :key="review.date" class="flex items-center space-x-4">
                        <img src="../../images/pngwing.com.png" alt="Profile Picture" class="w-12 h-12 rounded-full">
                        <div>
                            <p class="font-bold">{{ review.name }}</p>
                            <p class="text-gray-500 text-sm">{{ formatDate(review.date) }}</p>
                            <p>{{ review.data }}</p>
                        </div>
                    </div>
                </CardBox>
            </SectionMain>
        </NuxtLayout>
    </div>
</template>
  
<script setup>
import { ref, reactive, computed, watch } from 'vue';
import SectionMain from "@/components/Sections/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue"
import CardBox from "@/components/Cards/CardBox.vue";
import { mdiFileEdit } from "@mdi/js";
import PremFormField from "~~/components/Forms/FormField.vue";
import PremFormControl from "~~/components/Forms/FormControl.vue";


import Editor from "@/components/CMS/Editor.vue";




const typeVal = reactive([
    { value: "", label: "Choose Type" },
    { value: "video", label: "Video" },
    { value: "graphic", label: "Graphic" },
    { value: "text", label: "Text" },
    { value: "acc", label: "ACC" },
    { value: "online", label: "Online" },
])

const roleVal = reactive([
    { value: "", label: "Select Value" },
    { value: "creator", label: "Creator" },
    { value: "editor", label: "Editor" },
])

const selectedOption = ref("")
const roleSelectedOption = ref("")

const statusLabel = computed(() => {
    if (roleSelectedOption.value === "creator") {
        return "Creator Approval Pending";
    } else if (roleSelectedOption.value === "editor") {
        return "Editor Approval Pending";
    }
    return "Select Role";
});

const categoryText = ref("")
const messageText = ref("")

watch(messageText, (newVal) => {
    if (newVal) {
        const parser = new DOMParser();
        const text = parser.parseFromString(newVal, "text/html").documentElement.textContent;
        previewText.value = text;
    } else {
        previewText.value = "This is the preview Text";
    }
});

const titleText = ref('');
const feedbackText = ref('');

const myUrl = ref('')

const myFile = ref(null)

const previewFileUrl = computed(() => {
    if (myFile.value) {
        return URL.createObjectURL(myFile.value);
    }
    return null;
});

console.log(myFile.value);
console.log(previewFileUrl);

const reviews = ref([]);

const saveReview = () => {
    const newReview = {
        name: "John Doe",
        data: feedbackText.value,
        date: new Date(),
    };

    reviews.value.push(newReview);

    // Reset form fields
    titleText.value = '';
    feedbackText.value = '';
    selectedOption.value = '';
    roleSelectedOption.value = '';
    categoryText.value = '';
    messageText.value = '';
    myUrl.value = '';

};

const uploadedFile = ref(null)

const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'tiff', 'mp4', 'avi', 'mov', 'webm'];

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const fileExtension = file.name.split('.').pop().toLowerCase();

        if (allowedExtensions.includes(fileExtension)) {
            file.url = URL.createObjectURL(file);
            uploadedFile.value = file;
        } else {
            alert('Invalid file format. Please select an image, video, gif, or tiff file.');

            event.target.value = '';
        }
    }
};
const uploadFile = (event) => {
    event.preventDefault();
}



</script>

