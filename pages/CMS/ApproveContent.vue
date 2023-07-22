<template>
    <div>
        <NuxtLayout name="zen">
            <SectionMain>
                <SectionTitleLineWithButton :icon="mdiCheckDecagram" title="Approve Content" main>
                    <div
                        class="ml-5  lg:flex flex-col hidden  lg:order-1 lg:flex-row lg:items-end lg:justify-end items-center justify-center  gap-3">
                        <button class="bg-green-700 text-white w-24 h-10 rounded" @click="approveBtn">Approve</button>
                        <button class="bg-blue-600 text-white w-24 h-10 rounded" @click="publishBtn">Publish</button>
                        <BaseButton label="Save" color="info" @click="saveReview" />
                    </div>
                    <BaseButton label="Save" color="info" @click="saveReview" class="lg:hidden" />

                </SectionTitleLineWithButton>

                <div class="flex flex-col lg:order-last gap-5">
                    <CardBox class="mb-6 g:mb-0 lg:col-span-2 xl:col-span-3 order-1" if-from @submit.prevent="submit">
                        <!-- Title Field -->
                        <PremFormField label="Title" horizontal>
                            <PremFormField horizontal>
                                <PremFormControl placeholder="OG Title" :disabled="true" v-model="titleText" />
                            </PremFormField>
                        </PremFormField>

                        <!-- Type, Status, and Role Fields -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
                            <div>
                                <label class="block mb-2">Type</label>
                                <div class="w-full">
                                    <PremFormControl :disabled="true" v-model="selectedOption" :options="typeVal" />
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
                                    <PremFormControl :disabled="true" v-model="roleSelectedOption" :options="roleVal" />
                                </div>
                            </div>
                        </div>

                        <!-- Category Field -->
                        <PremFormField label="Category" horizontal>
                            <PremFormField horizontal>
                                <PremFormControl :disabled="true" placeholder="OG Category" v-model="categoryText" />
                            </PremFormField>
                        </PremFormField>

                        <!-- Content Preview -->
                        <PremFormField label="Content : Preview" horizontal>
                            <div class="flex flex-col border border-black rounded-md p-4 justify-center items-center">
                                <div v-if="uploadedFile">
                                    <img v-if="uploadedFile.type.startsWith('image/')" width="500" :src="uploadedFile.url"
                                        alt="Image" />
                                    <video v-else-if="uploadedFile.type.startsWith('video/')" width="500"
                                        :src="uploadedFile.url" controls></video>
                                </div>
                                <img src="../../images/download.png" alt="Image" />
                                <video width="500" class="mt-3" src="../../images/sampleVideo.webm" controls />
                                <div>
                                    <p class="text-center px-36 text-xl text-justify">{{ previewText }}</p>
                                </div>
                            </div>
                        </PremFormField>

                        <!-- Feedback Field -->
                        <PremFormField label="Feedback: " horizontal>
                            <PremFormField horizontal>
                                <PremFormControl type="textarea" v-model="feedbackText" placeholder="Write Your Feedback" />
                            </PremFormField>
                        </PremFormField>

                        <!-- Reviews -->
                        <div v-for="review in reviews" :key="review.date" class="flex items-center space-x-4">
                            <img src="../../images/pngwing.com.png" alt="Profile Picture" class="w-12 h-12 rounded-full" />
                            <div>
                                <p class="font-bold">{{ review.name }}</p>
                                <p class="text-gray-500 text-sm">{{ formatDate(review.date) }}</p>
                                <p>{{ review.data }}</p>
                            </div>
                        </div>
                    </CardBox>

                    <!-- Buttons -->
                    <div class="order-2 lg:hidden flex flex-col lg:flex-row items-center w-full lg:w-44 gap-3">
                        <button class="bg-green-700 text-white w-full h-10 rounded" @click="approveBtn">Approve</button>
                        <button class="bg-blue-600 text-white w-full h-10 rounded" @click="publishBtn">Publish</button>
                    </div>

                </div>


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
import { mdiCheckDecagram } from "@mdi/js";
import PremFormField from "~~/components/Forms/FormField.vue";
import PremFormControl from "~~/components/Forms/FormControl.vue";

const typeVal = reactive([
    { value: "", label: "" },

])

const roleVal = reactive([
    { value: "", label: "" },

])

const selectedOption = ref("")
const roleSelectedOption = ref("")

const statusLabel = ref("")

const approveBtn = () => {
    statusLabel.value = "Approved"
}

const publishBtn = () => {
    window.alert("Publish Button Pressed")
}

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
const previewText = ref("Embracing life's journey with open arms, immersing myself in unforgettable adventures and cherishing every moment of joy and growth. Grateful for the amazing people who fill my heart with love and inspiration. 🌟💕 #BlessedMoments @GratitudeFilledLife")

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


const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};





</script>




