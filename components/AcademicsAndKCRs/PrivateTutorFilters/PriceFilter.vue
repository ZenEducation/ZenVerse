<template>
    <div class="relative w-full">
        <div class=" h-full py-2 px-3">
            <label for="learn" class="uppercase text-[0.7rem] font-semibold text-gray-400">price per
                lesson
            </label>
            <div class="flex items-center">
                <h3> {{ barMinValue }} INR - {{ barMaxValue }} INR + </h3>
                <button v-on:click="clearBudget()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"
                            d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07" />
                    </svg>
                </button>
                <button v-on:click="showRange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                        <path fill="currentColor"
                            d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z" />
                    </svg>
                </button>
            </div>
        </div>
        <div v-if="price" class="absolute w-full flex flex-col items-start p-2 bg-white top-20 rounded-2xl">
            <div class="w-full">
                <MultiRangeSlider :min="100" :max="2950" :ruler="false" :label="false" :minValue="barMinValue"
                    :maxValue="barMaxValue" @input="UpdateValues" />

            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import MultiRangeSlider from "multi-range-slider-vue";

const price = ref(false)
const barMinValue = ref(100)
const barMaxValue = ref(2950)
const UpdateValues = (e) => {
    barMinValue.value = e.minValue
    barMaxValue.value = e.maxValue
}
const clearBudget = () => {
    barMinValue.value = 100
    barMaxValue.value = 2950
}
const showRange = () => {
    price.value = !price.value
    showLearn.value = false
    country.value = false
}
</script>

<style lang="scss" scoped></style>