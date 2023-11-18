<template>
    <div class="flex">
        <button class=" relative flex w-fit text-[.75rem] gap-1 items-center bg-white m-2 ml-0 rounded-2xl p-1 px-2">
            Specialties <p class="text-[.75rem] bg-green-600 text-white rounded-full px-1 h-4 flex items-center"> {{
                select.length }} </p>
            <button v-on:click="viewSpeciality">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1.5" d="m7 10l5 5l5-5" />
                </svg>
            </button>
            <div v-if="showSpecialities" class="absolute w-72 h-60 overflow-auto bg-white top-12 rounded-2xl">
                <p class="bg-gray-300 text-gray-600 h-8 flex justify-start p-2 text-[.9rem] font-semibold items-center">
                    Popular</p>
                <div v-for="(popul, index) in popular" :key="index" class="flex gap-2 px-2 py-1">
                    <input type="checkbox" :name="popul.name" :id="popul.name" v-model="select" :value="popul.name"
                        class="my-1">
                    <label :for="popul.name">{{ popul.name }} </label>
                </div>

                <p class="bg-gray-300 text-gray-600 h-8 flex justify-start p-2 text-[.9rem] font-semibold items-center">
                    Regional accents</p>
                <div v-for="(popul, index) in regional" :key="index" class="flex gap-2 px-2 py-1">
                    <input type="checkbox" :name="popul.name" :id="popul.name" v-model="select" :value="popul.name"
                        class="my-1">
                    <label :for="popul.name">{{ popul.name }} </label>
                </div>

                <p class="bg-gray-300 text-gray-600 h-8 flex justify-start p-2 text-[.9rem] font-semibold items-center">
                    Test Preparation</p>
                <div v-for="(popul, index) in testPrep" :key="index" class="flex gap-2 px-2 py-1">
                    <input type="checkbox" :name="popul.name" :id="popul.name" v-model="select" :value="popul.name"
                        class="my-1">
                    <label :for="popul.name">{{ popul.name }} </label>
                </div>

                <p class="bg-gray-300 text-gray-600 h-8 flex justify-start p-2 text-[.9rem] font-semibold items-center">
                    Learning disabilities</p>
                <div v-for="(popul, index) in disabilities" :key="index" class="flex gap-2 px-2 py-1">
                    <input type="checkbox" :name="popul.name" :id="popul.name" v-model="select" :value="popul.name"
                        class="my-1">
                    <label :for="popul.name">{{ popul.name }} </label>
                </div>
            </div>
        </button>
        <button class="relative flex w-fit text-[.75rem] gap-2 items-center bg-white m-2 ml-0 rounded-2xl p-1 px-2">
            Also Speaks
            <svg v-on:click="viewSpeak" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="m7 10l5 5l5-5" />
            </svg>
            <div v-if="showSpeaks" class="absolute w-72 h-60 overflow-auto bg-white top-12 rounded-2xl">
                <input type="text" class="m-2" placeholder="Type to search...">
                <div v-for="(lang, index) in language" :key="index" class="flex gap-2 px-2 py-1">
                    <input type="checkbox" :name="lang.name" :id="lang.name" v-model="speaks" :value="lang.name"
                        class="my-1">
                    <label :for="lang.name">{{ lang.name }} </label>
                </div>


            </div>
        </button>
        <button class=" relative flex w-fit text-[.75rem] gap-2 items-center bg-white m-2 ml-0 rounded-2xl p-1 px-2">
            Native Speaker
            <svg v-on:click="viewNativeSpeak" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="m7 10l5 5l5-5" />
            </svg>
            <div v-if="showNativeSpeak" class="absolute p-1 w-52 h-20 overflow-auto bg-white top-12 rounded-2xl">
                <input type="checkbox" name="native" id="native" v-model="nativeSpeak">
                <label for="native" class="ml-2">Only English Native Speakers</label>

                <p class="text-justify mt-3">We will only show tutors who teach in their native language</p>


            </div>
        </button>
        <button class="relative flex w-fit text-[.75rem] gap-2 items-center bg-white m-2 ml-0 rounded-2xl p-1 px-2">
            Tutor Categories
            <svg v-on:click="viewTutorCategory" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="m7 10l5 5l5-5" />
            </svg>
            <div v-if="showTutorCatrgory" class="absolute p-1 w-52 h-52 overflow-auto bg-white top-12 rounded-2xl">
                <div class="flex ml-3">
                    <input type="radio" name="native" id="native" v-model="tutorCategory" value="Only Super Tutors">
                    <label for="native" class="ml-2">Only Super Tutors</label>


                </div>
                <p class="text-justify m-3">Only show highly rated and experienced tutors</p>
                <hr>

                <div class="flex ml-3 mt-3">
                    <input type="radio" name="native" id="native" v-model="tutorCategory" value="Only Professional Tutors">
                    <label for="native" class="ml-2">Only Professional Tutors</label>
                </div>

                <p class="text-justify m-3">Only show tutors with a teaching certificate or relevant education</p>


            </div>
        </button>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { popular, regional, testPrep, disabilities } from "~~/Data/Test.js"
import { language } from '~~/Data/Language.js'

const select = ref([])
const showSpecialities = ref(false)
const viewSpeciality = () => {
    showSpecialities.value = !showSpecialities.value
    showSpeaks.value = false
    showNativeSpeak.value = false
    showTutorCatrgory.value = false
}

const speaks = ref([])
const showSpeaks = ref(false)
const viewSpeak = () => {
    showSpeaks.value = !showSpeaks.value
    showSpecialities.value = false
    showNativeSpeak.value = false
    showTutorCatrgory.value = false
}

const nativeSpeak = ref(false)
const showNativeSpeak = ref(false)
const viewNativeSpeak = () => {
    showNativeSpeak.value = !showNativeSpeak.value
    showSpeaks.value = false
    showSpecialities.value = false
    showTutorCatrgory.value = false
}

const tutorCategory = ref("")
const showTutorCatrgory = ref(false)
const viewTutorCategory = () => {
    showTutorCatrgory.value = !showTutorCatrgory.value
    showNativeSpeak.value = false
    showSpeaks.value = false
    showSpecialities.value = false

}

console.log(select);

</script>

<style lang="scss" scoped></style>