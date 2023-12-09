
import { allCountries } from '~~/Data/Country';

import { allCountries } from '~~/Data/Country';
<template>
    <div class="relative w-full">
        <div class="h-full py-2 px-3 ">
            <label for="learn" class="uppercase text-[0.7rem] font-semibold text-gray-400">country of birth
            </label>
            <div class="flex items-center">
                <h3 v-on:click="country = !country"> {{ selectedCountry }} </h3>
                <button v-on:click="clearCountry">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"
                            d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07" />
                    </svg>
                </button>
                <button v-on:click="showCountry" class="absolute right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                        <path fill="currentColor"
                            d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z" />
                    </svg>
                </button>
            </div>
        </div>
        <div v-if="country"
            class="absolute h-72 z-[999] border-2 overflow-auto w-full flex flex-col items-start p-2 bg-white top-20 rounded-2xl">
            <h3 class="text-sm text-gray-500 mb-1">POPULAR</h3>
            <div class="w-full" v-for="(country, index) in countriesData">
                <input type="radio" :key="index" :name="country.name" :id="country.name" :value="country.name"
                    v-model="selectedCountry" v-on:select="country = !country">
                <label :for="country.name" class="ml-2"> {{ country.name }} </label>
            </div>

            <div class="w-full h-[0.10rem] my-2 bg-black">.</div>

            <h3 class="text-sm text-gray-500 mb-1">ALL COUNTRIES</h3>
            <div class="w-full" v-for="(country, index) in allCountries">
                <input type="radio" :key="index" :name="country.name" :id="country.name" :value="country.name"
                    v-model="selectedCountry" v-on:select="country = !country">
                <label :for="country.name" class="ml-2"> {{ country.name }} </label>
            </div>


        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { countriesData, allCountries } from '~~/Data/Country';

const country = ref(false)
const selectedCountry = ref("India")
const clearCountry = () => {
    selectedCountry.value = ""
}
const showCountry = () => {
    country.value = !country.value
    availableDateTime.value = false
    price.value = false
    showLearn.value = false
}
</script>

<style lang="scss" scoped></style>