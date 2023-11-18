<template>
    <div class=" flex items-center">
        <button class=" relative flex  h-10 text-[.75rem] gap-2 items-center bg-white m-2 ml-0 rounded-2xl p-1 px-2">
            Sort by: {{ sort }}
            <svg v-on:click="viewSort" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="m7 10l5 5l5-5" />
            </svg>
            <div v-if="showSort" class="absolute p-3 w-52 h-fit overflow-auto bg-white top-12 rounded-2xl">
                <div v-for=" (item, index) in sortList" :key="index" class="flex justify-start">
                    <input type="radio" class="mt-2" :name="item.name" :id="item.name" :value="item.name" v-model="sort">
                    <label class="ml-2 mt-2" :for="item.name">{{ item.name }} </label>
                </div>


            </div>
        </button>

        <div class="relative bg-white flex w-fit h-10 items-center rounded-2xl">
            <input type="text" placeholder="Search by name or keyword" class=" rounded-2xl border-none w-56 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z" />
            </svg>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const sortList = ref([
    { "name": "Our top pics" },
    { "name": "Popularity" },
    { "name": "Price: highest first" },
    { "name": "Price: lowest first" },
    { "name": "Number of reviews" },
    { "name": "Best rating" }
])

const sort = ref("Our top pics")
const showSort = ref(true)
const viewSort = () => {
    showSort.value = !showSort.value
}
</script>

<style lang="scss" scoped></style>