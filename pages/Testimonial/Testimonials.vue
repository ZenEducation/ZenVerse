<template>
    <div>
        <NuxtLayout name="zen">
            <SectionMain>
                <SectionTitleLineWithButton :icon="mdiPost" title="Testimonials" main>
                    <div
                        class="ml-5 lg:flex flex-col resDis lg:order-1 lg:flex-row lg:items-end lg:justify-end items-center justify-center gap-3">
                    </div>
                    <BaseButton label="Save" color="info" @click="saveReview" class="lg:hidden" />
                </SectionTitleLineWithButton>
                <CardBox v-for="(testimonial, index) in displayedTestimonials" :key="index"
                    class=" h-fit mb-6 g:mb-0 lg:col-span-2 xl:col-span-3" if-from @submit.prevent="submit">
                    <div class="flex mainBody">

                        <div class="w-1/4 relative px-16 imageBody">
                            <NuxtLink :to="'/Testimonial/SingleTestimonial/' + testimonial.id">
                                <div v-for=" (image, imageIndex) in profilePics " :key="imageIndex">
                                    <img v-if="imageIndex == index" :src="image"
                                        class="rounded-full h-40 w-40 mx-auto mt-5  top-0 left-0" alt="">
                                </div>
                            </NuxtLink>
                        </div>

                        <div class="w-3/4 contentBody">
                            <div>
                                <h2 class="text-2xl font-bold"> {{ testimonial.student_name }} </h2>
                                <p class="text-slate-400 font-semibold"> {{ testimonial.sub_title }} </p>

                                <div class="my-5 content" v-html="testimonial.content"></div>

                                <div>
                                    <!-- <div v-for="(url, index) in testimonial.youtubeURL">
                                        <iframe width="640" height="360" :src="`https://www.youtube.com/embed/${url}`"
                                            frameborder="0" :key="index"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen></iframe>

                                    </div> -->
                                    <div v-for="(url, index) in testimonial.youtubeURL" :key="index"
                                        class="aspect-ratio-16/9 max-w-screen-md mx-auto">
                                        <iframe :src="`https://www.youtube.com/embed/${url}`" frameborder="0" :key="index"
                                            class=" w-[640px] max-w-full h-[360px] "
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBox>
                <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
                    <BaseLevel class="justify-between">
                        <BaseButtons class="space-x-2 flex">
                            <BaseButton v-for="page in pagesList" :key="page" :active="page === currentPage"
                                :label="page + 1" :color="page === currentPage ? 'lightDark' : 'whiteDark'" small
                                @click="goToPage(page)"
                                class="px-3 py-1 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-600 hover:text-gray-800 dark:hover:text-white focus:outline-none focus:bg-gray-200 dark:focus:bg-slate-700 focus:text-gray-800 dark:focus:text-white" />
                        </BaseButtons>
                        <small class="text-gray-600 dark:text-gray-400">
                            Page {{ currentPageHuman }} of {{ numPages }}
                        </small>
                    </BaseLevel>
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
import { mdiPost } from "@mdi/js";
import PremFormField from "~~/components/Forms/FormField.vue";
import PremFormControl from "~~/components/Forms/FormControl.vue";
import { Storage } from "aws-amplify"
import awsconfig from "@/src/aws-exports.js"
import { DataStore } from "@aws-amplify/datastore"
import { TestimonialData } from "@/src/models/index.js"
import { useRouter } from 'vue-router';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const router = useRouter()

Storage.configure({
    region: awsconfig.aws_user_files_s3_bucket_region,
    bucket: awsconfig.aws_user_files_s3_bucket
})

const testimonialData = ref([])
const profileLinks = ref([])
const profilePics = ref([])
const currentPage = ref(0);
const perPage = ref(4);


onMounted(async () => {
    try {
        const data = await DataStore.query(TestimonialData)
        testimonialData.value = data
        profileLinks.value = testimonialData.value.map(data => data.profilePicKey)
        profileLinks.value.map(async (links) => {
            const getImages = await Storage.get(links)
            profilePics.value.push(getImages)
        })
        console.log(testimonialData.value);
    } catch (error) {
        console.error(error);
    }
})

const numPages = computed(() => {


    return Math.ceil(testimonialData.value.length / perPage.value);

});

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
    const pagesList = [];

    for (let i = 0; i < numPages.value; i++) {
        pagesList.push(i);
    }

    return pagesList;
});
// Calculate the index range of testimonials to display on the current page
const startIndex = computed(() => currentPage.value * perPage.value);
const endIndex = computed(() => startIndex.value + perPage.value);

// Slice the testimonialData array based on the current page
const displayedTestimonials = computed(() => {
    return testimonialData.value.slice(startIndex.value, endIndex.value);
});

// Function to change the current page
const goToPage = (page) => {
    currentPage.value = page;
};



</script>

  
<style>
.content li {
    list-style-type: disc;
    margin-left: 25px;

}

@media screen and (max-width: 1024px) {
    .mainBody {
        flex-direction: column;

    }

    .imageBody {
        width: 100%;

    }

    .imageBody img {
        margin-top: 1.25;
        margin-bottom: 1.25rem;
    }

    .contentBody {
        width: 100%;
    }

    .contentBody .content {
        text-align: justify;
    }
}
</style>