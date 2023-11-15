<template>
    <NuxtLayout name="zen" style="margin: 0;padding: 0" class="relative h-screen">
        <div id="main_bar"
            class=" bg-[#F5FAFF]  h-fit lg:flex-row flex-col flex justify-center lg:items-start items-center pt-10   relative  aside-scrollbars-light dark:aside-scrollbars-gray shadow-md sm:rounded-lg sm:mx-10   pb-5 px-1">
            <div class="w-72">
                <div class="flex justify-between ">
                    <NuxtLink to="/academicsAndKCRs/studentSignUp/studentSignUp4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" d="m14 7l-5 5l5 5" />
                        </svg>
                    </NuxtLink>
                    <NuxtLink to="/academicsAndKCRs/studentSignUp/studentSignUp6">
                        <button class="text-green-700">Skip</button>
                    </NuxtLink>
                </div>
                <div class="mt-3">
                    <h3 class="text-xl font-semibold mb-2">What kind of lessons do you need?</h3>

                    <div>
                        <h3 class="font-bold mt-8">Popular</h3>
                        <div class="flex items-center gap-3 mt-1" v-for="(test, index) in popular" :key="index">
                            <input type="checkbox" :name="test.name.toLowerCase()" :id="test.name.toLowerCase()"
                                :value="test.name">
                            <label :for="test.name.toLowerCase()"> {{ test.name }} </label>
                        </div>
                    </div>
                    <button>
                        <p class="text-green-700 font-semibold mt-3" v-on:click="showMoreLess"> {{ showTxt }} </p>
                    </button>

                    <div v-if="showall">
                        <h3 class="font-bold mt-8">Regional accents</h3>
                        <div class="flex items-center gap-3 mt-1" v-for="(test, index) in regional" :key="index">
                            <input type="checkbox" :name="test.name.toLowerCase()" :id="test.name.toLowerCase()"
                                :value="test.name">
                            <label :for="test.name.toLowerCase()"> {{ test.name }} </label>
                        </div>
                    </div>

                    <div v-if="showall">
                        <h3 class="font-bold mt-8">Test Preparation</h3>
                        <div class="flex items-center gap-3 mt-1" v-for="(test, index) in testPrep" :key="index">
                            <input type="checkbox" :name="test.name.toLowerCase()" :id="test.name.toLowerCase()"
                                :value="test.name">
                            <label :for="test.name.toLowerCase()"> {{ test.name }} </label>
                        </div>
                    </div>
                    <div v-if="showall">
                        <h3 class="font-bold mt-8">Learning disabilities</h3>
                        <div class="flex items-center gap-3 mt-1" v-for="(test, index) in disabilities" :key="index">
                            <input type="checkbox" :name="test.name.toLowerCase()" :id="test.name.toLowerCase()"
                                :value="test.name">
                            <label :for="test.name.toLowerCase()"> {{ test.name }} </label>
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
import { popular, regional, testPrep, disabilities } from "@/Data/Test.js"
const router = useRouter()

const showall = ref(false)

const showTxt = ref("Show More")

const showMoreLess = () => {
    showall.value = !showall.value
    if (showall.value) {
        showTxt.value = "Show Less"
    } else {
        showTxt.value = "Show More"
    }
}

const nextPage = () => {
    router.push("/academicsAndKCRs/studentSignUp/studentSignUp6")
}




</script>
