<template>
    <div class="relative w-full">
        <div class="h-full py-2 px-3">
            <label for="learn" class="uppercase text-[0.7rem] font-semibold text-gray-400">I want to
                learn</label>
            <div class="flex items-center">
                <input type="text" :value="learn" class="select-none border-none p-1" @focus="handleFocus">
                <button v-on:click="clearLearn()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"
                            d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07" />
                    </svg>
                </button>
            </div>
        </div>
        <div v-if="showLearn"
            class="absolute w-full flex z-[999] border-2 flex-col items-start p-2 bg-white top-20 rounded-2xl">
            <button class="p-1 hover:bg-blue-500 hover:text-white w-full text-left rounded-lg" :key="index"
                v-for="(language, index) in languages" @click="selectLanguage(language.name)">{{
                    language.name }}</button>

        </div>

    </div>
</template>

<script setup>
import { ref } from "vue"


const learn = ref("English")
const languages = ref([
    { "name": "English" },
    { "name": "Spanish" },
    { "name": "French" },
    { "name": "German" },
    { "name": "Japanese" },
    { "name": "Italian" },
    { "name": "Korean" },
    { "name": "Arabic" },
])
const showLearn = ref(false)
const handleFocus = () => {
    showLearn.value = !showLearn.value;
    price.value = false;
    country.value = false
};
const selectLanguage = (selectedLanguage) => {
    learn.value = selectedLanguage;
    showLearn.value = false;
};
const clearLearn = () => {
    learn.value = ""
    showLearn.value = false;

}
</script>

<style lang="scss" scoped></style>