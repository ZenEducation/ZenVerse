<template>
    <NuxtLayout name="zen" style="margin: 0;padding: 0" class="relative h-screen">
        <div id="main_bar"
            class=" bg-[#F5FAFF] m-3  h-fit lg:flex-row flex-col flex justify-center lg:items-start items-center pt-10   relative  aside-scrollbars-light dark:aside-scrollbars-gray shadow-md sm:rounded-lg sm:mx-10   pb-5 px-1">
            <div class=" lg:w-[28rem] w-full ">
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
                    <h3 class="text-xl font-semibold mb-2">What is your budget?</h3>
                    <div class="flex flex-col gap-2 ">
                        <div>
                            <MultiRangeSlider :min="100" :max="2950" :ruler="false" :label="false" :minValue="barMinValue"
                                :maxValue="barMaxValue" @input="UpdateValues" />
                            <br /><br />
                            <div class="text-center">
                                {{ barMinValue }} INR - {{ barMaxValue }} INR+
                            </div>
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
import MultiRangeSlider from "multi-range-slider-vue";
const router = useRouter()
const barMinValue = ref(100)
const barMaxValue = ref(2950)

const UpdateValues = (e) => {
    barMinValue.value = e.minValue
    barMaxValue.value = e.maxValue
}

const nextPage = () => {
    router.push("/academicsAndKCRs/studentSignUp/studentSignUp6")
}
</script>

