<template>
    <NuxtLayout name="zen" style="margin: 0;padding: 0" class="relative h-screen">
        <div id="main_bar"
            class=" bg-[#F5FAFF]  h-fit lg:flex-row flex-col flex justify-center lg:items-start items-center pt-10   relative  aside-scrollbars-light dark:aside-scrollbars-gray shadow-md sm:rounded-lg sm:mx-10   pb-5 px-1">
            <div class="w-72">
                <div class="flex justify-between ">
                    <NuxtLink to="/academicsAndKCRs/studentSignUp/studentSignUp3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" d="m14 7l-5 5l5 5" />
                        </svg>
                    </NuxtLink>
                    <NuxtLink to="/academicsAndKCRs/studentSignUp/studentSignUp5">
                        <button class="text-green-700">Skip</button>
                    </NuxtLink>
                </div>
                <div class="mt-3">
                    <h3 class="text-xl font-semibold mb-2">Looking for a tutor from a specific country?</h3>
                    <div class="flex items-center gap-2 mt-8">

                        <input type="checkbox" name="englishSpecific" id="englishSpecific" v-model="englishNativeCheckBox">
                        <label for="englishSpecific">Only English native speakers</label>
                    </div>
                    <div class="mt-8">
                        <h3 class="font-bold">Popular</h3>

                        <div class="flex mt-4 flex-wrap gap-2">
                            <button v-for="(country, index) in countriesData"
                                class="py-1 px-2 gap-1 border-2 rounded-xl flex items-center h-10 hover:border-green-700 "
                                :key="index"> <img width="20" hieght="20"
                                    :src="`https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${country.flag}.svg`"
                                    alt=""> {{ country.name }} </button>

                        </div>

                    </div>
                    <div class="mt-8">
                        <h3 class="font-bold">All Countries</h3>

                        <div class="bg-white flex gap-2 items-center mt-2 pl-2 rounded-2xl border">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z" />
                            </svg>
                            <input type="text" placeholder="Type to search" class="w-full border-none rounded-2xl"
                                v-model="searchInput">
                        </div>

                        <div class="flex mt-4 flex-wrap gap-2 max-h-52 overflow-auto">
                            <button v-for="(country, index) in filteredCountries" :key="index"
                                class="py-1 px-2 gap-1 border-2 rounded-xl flex items-center h-10 hover:border-gray-700 ">
                                <img width="20" hieght="20"
                                    :src="`https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${country.code}.svg`"
                                    alt=""> {{ country.name }} </button>

                        </div>

                    </div>


                </div>
                <button v-on:click="nextPage" class="bg-green-700 text-white w-full h-10 rounded-xl mt-8">Continue</button>
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
import { countriesData, allCountries } from "@/Data/Country.js"
const router = useRouter()

const englishNativeCheckBox = ref(false)
const searchInput = ref("")

console.log(countriesData);

const filteredCountries = computed(() => {
    const input = searchInput.value.toLowerCase().trim();
    if (!input) {
        return allCountries;
    }

    return allCountries.filter(country => {
        return country.name.toLowerCase().startsWith(input);
    });
});

console.log(filteredCountries);


const nextPage = () => {
    router.push("/academicsAndKCRs/studentSignUp/studentSignUp5")
}




</script>
