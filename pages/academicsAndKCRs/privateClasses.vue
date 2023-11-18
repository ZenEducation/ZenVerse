<template>
    <NuxtLayout name="zen" style="margin: 0;padding: 0" class="relative h-screen">
        <div id="main_bar"
            class=" bg-[#F5FAFF] m-3  h-fit  flex-col flex justify-center lg:items-start items-center pt-10   relative  aside-scrollbars-light dark:aside-scrollbars-gray shadow-md sm:rounded-lg sm:mx-10   pb-5 px-1">
            <div class=" w-full py-5 px-44 ">
                <div class="w-full flex gap-3">
                    <button class="flex items-center h-12 px-3 rounded-xl gap-2" v-on:click="privateTute"
                        :class="privateTutor ? 'border-2 border-gray-400' : ''">
                        <div class="relative">
                            <svg viewBox="0 0 200 200" width="30" height="30" class="opacity-40 "
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FF0066"
                                    d="M39.3,-35.9C53.4,-25.2,68.9,-12.6,70.1,1.2C71.3,15,58.1,29.9,44,45.3C29.9,60.6,15,76.4,-1.4,77.8C-17.8,79.3,-35.7,66.4,-46.4,51C-57,35.7,-60.6,17.8,-57.8,2.8C-54.9,-12.2,-45.8,-24.4,-35.1,-35.1C-24.4,-45.8,-12.2,-54.9,0.2,-55.1C12.6,-55.3,25.2,-46.5,39.3,-35.9Z"
                                    transform="translate(100 100)" />
                            </svg>
                            <svg class="absolute top-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 256 256">
                                <path fill="currentColor"
                                    d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56Z" />
                            </svg>
                        </div>
                        Private Lessons
                    </button>
                    <button class="flex items-center h-12 px-3 rounded-xl gap-2" v-on:click="groupTute"
                        :class="groupTutor ? 'border-2 border-gray-400' : ''">
                        <div class="relative">
                            <svg viewBox="0 0 200 200" width="35" height="35" class="opacity-50"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill="#F1C21B"
                                    d="M61.8,-31.7C70.4,-20.7,61.2,4.6,47.9,22.5C34.6,40.3,17.3,50.6,3,48.9C-11.4,47.1,-22.7,33.4,-29.8,19.2C-36.9,4.9,-39.7,-9.8,-34,-19.1C-28.4,-28.3,-14.2,-32.1,6.2,-35.7C26.6,-39.3,53.1,-42.6,61.8,-31.7Z"
                                    transform="translate(100 100)" />
                            </svg>
                            <svg class="absolute top-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479a3 3 0 0 0-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72a8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>

                        </div>
                        Group Lessons
                    </button>
                </div>
                <h2 class="my-8 text-3xl font-bold">Online English Tutors & Techers for Private Lessons</h2>
            </div>
            <div class="px-44 w-full">
                <div class="bg-white flex h-[4.5rem] items-center rounded-2xl px-2">

                    <LearnFilter />

                    <PriceFilter />

                    <CountryFilter />

                    <DateTimeFilter />

                </div>
                <div class="flex justify-between">

                    <OtherFilterVue />

                    <SortandSearchFilter />


                </div>
            </div>
        </div>
        <div class="fixed bottom-2 right-2 bg-[#1972F5] w-11 flex justify-center items-center h-10 rounded-full ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="white" d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
            </svg>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { ref, computed } from 'vue'

import LearnFilter from "@/components/AcademicsAndKCRs/PrivateTutorFilters/LearnFilter.vue"
import PriceFilter from "@/components/AcademicsAndKCRs/PrivateTutorFilters/PriceFilter.vue"
import CountryFilter from '~~/components/AcademicsAndKCRs/PrivateTutorFilters/CountryFilter.vue';
import DateTimeFilter from '~~/components/AcademicsAndKCRs/PrivateTutorFilters/DateTimeFilter.vue';

import OtherFilterVue from '~~/components/AcademicsAndKCRs/PrivateTutorFilters/OtherFilter.vue';
import SortandSearchFilter from '~~/components/AcademicsAndKCRs/PrivateTutorFilters/SortandSearchFilter.vue'

const router = useRouter()


const privateTutor = ref(true)
const groupTutor = ref(false)

const privateTute = () => {
    privateTutor.value = !privateTutor.value
    groupTutor.value = false
}

const groupTute = () => {
    groupTutor.value = !groupTutor.value
    privateTutor.value = false
}

</script>