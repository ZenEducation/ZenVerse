<script setup>
import { ref, reactive, computed } from 'vue';
import SectionMain from "@/components/Sections/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue"
import CardBox from "@/components/Cards/CardBox.vue";
import { mdiFileEdit } from "@mdi/js";
import PremFormField from "~~/components/Forms/FormField.vue";
import PremFormControl from "~~/components/Forms/FormControl.vue";


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

const messageText = ref("")
const previewText = ref("This is the preview Text")

const categoryText = ref("")

watch(messageText, (newVal) => {
    if (newVal) {
        previewText.value = newVal;
    } else {

        previewText.value = "This is the preview Text"
    }
})

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


const imageLink = ref("https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80")
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
    uploadedFile.value = null;
    uploadedFile.name = ''
};

const uploadedFile = ref(null)

const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};
const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        file.url = URL.createObjectURL(file);
        uploadedFile.value = file;
    }
};
const uploadFile = (event) => {
    event.preventDefault();

}



</script>

<template>
    <div>
        <NuxtLayout name="zen">
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

                    <div class="flex flex-col md:flex-row md:justify-between md:items-center my-5">
                        <PremFormField label="Type" class="flex justify-center items-center md:mb-0">
                            <PremFormField class="w-full md:w-96 md:ml-3">
                                <PremFormControl v-model="selectedOption" :options="typeVal" />
                            </PremFormField>
                        </PremFormField>
                        <PremFormField label="Status" class="flex justify-center items-center md:mb-0 md:ml-3">
                            <PremFormField class="w-full md:w-96 md:ml-3">
                                <PremFormControl :disabled="true" :modelValue="statusLabel" />
                            </PremFormField>
                        </PremFormField>
                        <PremFormField label="Role" class="flex justify-center items-center md:ml-3">
                            <PremFormField class="w-full md:w-56 md:ml-3">
                                <PremFormControl v-model="roleSelectedOption" :options="roleVal" />
                            </PremFormField>
                        </PremFormField>
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
                                <p class="text-center">{{ previewText }}</p>

                            </div>
                        </div>


                    </PremFormField>

                    <PremFormField label="Edit Content :" horizontal>
                        <PremFormField horizontal class="border border-black rounded-md p-4 flex flex-col ">

                            <div class="border mb-4 py-8 flex justify-center flex-col items-center">
                                <h1>Click to Upload any Image or Video Here</h1>

                                <form @submit="uploadFile">
                                    <input type="file" @change="handleFileChange" />

                                </form>

                            </div>

                            <PremFormControl type="textarea" v-model="messageText" placeholder="Enter Message" />
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



