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
                <CardBox class=" h-fit mb-6 g:mb-0 lg:col-span-2 xl:col-span-3" if-from @submit.prevent="submit">
                    <div class="flex mainBody">

                        <div class="w-1/4 relative px-16 imageBody">
                            <div>
                                <img :src="profilePics" class="rounded-full h-40 w-full mx-auto mt-5  top-0 left-0" alt="">
                            </div>
                        </div>

                        <div class="w-3/4 contentBody">
                            <div class="">
                                <h2 class="text-2xl font-bold"> {{ testimonialData.student_name }} </h2>
                                <p class="text-slate-400 font-semibold"> {{ testimonialData.sub_title }} </p>

                                <div class="my-5 content" v-html="testimonialData.content"></div>
                                <div v-for="(url, index) in testimonialData.youtubeURL">
                                    <iframe width="640" height="360" :src="`https://www.youtube.com/embed/${url}`"
                                        frameborder="0" :key="index"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBox>

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
import { Storage } from "aws-amplify"
import awsconfig from "@/src/aws-exports.js"
import { DataStore } from "@aws-amplify/datastore"
import { TestimonialData } from "@/src/models/index.js"
import '@vueup/vue-quill/dist/vue-quill.snow.css';


const { testimonialname } = useRoute().params
console.log(testimonialname);

Storage.configure({
    region: awsconfig.aws_user_files_s3_bucket_region,
    bucket: awsconfig.aws_user_files_s3_bucket
})

const testimonialData = ref([])
const profilePics = ref([])

onMounted(async () => {
    try {
        const data = await DataStore.query(TestimonialData, testimonialname)
        testimonialData.value = data
        profilePics.value = await Storage.get(testimonialData.value.profilePicKey)
        console.log(testimonialData.value);
    } catch (error) {
        console.error(error);
    }
})




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