<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
let tests = ref([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }])
const toCreate = () => {
    router.push('tests/create')
}
const toTest = (id) => {
    router.push(`tests/${id}`)
}
</script>

<template>
    <NuxtLayout name="zen">

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div class="flex justify-between items-center mb-6 flex-wrap">
                <div>

                    <h1 class="text-3xl font-bold">Mock Tests</h1>
                    <h3 class="">Welcome to your mock test dashboard</h3>
                </div>

                <div class="flex space-x-4 flex-wrap">
                    <div class="relative">
                        <input type="text"
                            class="bg-gray-200 rounded-full py-2 pl-8 pr-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors duration-300"
                            placeholder="Search">

                    </div>
                    <button class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" @click="toCreate">
                        Manage</button>
                    <button class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" @click="toCreate">Create
                        Test</button>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer" v-for='test in tests'
                    @click="toTest(test.id)">
                    <img class="w-full"
                        src="https://asset-cdn.learnyst.com/assets/schools/43318/courses/88871/NEET_txipgi.png"
                        alt="Not found">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Neet test</div>
                        <p class="text-gray-700 text-base">
                            100 $
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span
                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">published</span>
                    </div>
                </div>


            </div>

        </div>
    </NuxtLayout>
</template>
