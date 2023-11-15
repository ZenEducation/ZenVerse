<template>
    <NuxtLayout name="zen" style="margin: 0;padding: 0" class="relative h-screen">
        <div id="main_bar"
            class=" bg-[#F5FAFF] lg:h-[40rem] h-fit lg:flex-row flex-col flex justify-center lg:items-start items-center pt-10   relative  aside-scrollbars-light dark:aside-scrollbars-gray shadow-md sm:rounded-lg sm:mx-10   pb-5 px-1">
            <div class="w-72">
                <div class="flex justify-between ">
                    <NuxtLink to="/academicsAndKCRs/studentSignUp/studentSignUp1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" d="m14 7l-5 5l5 5" />
                        </svg>
                    </NuxtLink>
                    <NuxtLink to="/academicsAndKCRs/studentSignUp/studentSignUp3">
                        <button class="text-green-700">Skip</button>
                    </NuxtLink>
                </div>
                <div class="mt-3">
                    <h3 class="text-xl font-semibold mb-2">What motivates you to look for a tutor?</h3>
                    <button v-on:click="addOption('Career and Business', 'opt1')"
                        class="flex gap-3 border rounded-lg mb-3 py-1 px-3 w-full h-12 items-center font-bold "
                        :class="selectOpt.opt1 ? 'bg-green-100 text-green-600 hover:bg-red-100 hover:text-red-600 ' : 'hover:bg-green-100 hover:text-green-600'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M14.645 2.428a8.1 8.1 0 0 0-1.61-.3a9.332 9.332 0 0 0-3.6.28l-.07.02a9.928 9.928 0 0 0 .01 19.15a9.091 9.091 0 0 0 2.36.34a1.274 1.274 0 0 0 .27.02a9.65 9.65 0 0 0 2.63-.36a9.931 9.931 0 0 0 .01-19.15Zm-.27.96a8.943 8.943 0 0 1 5.84 5.11h-4.26a13.778 13.778 0 0 0-2.74-5.35a8.254 8.254 0 0 1 1.16.24Zm-2.37-.09a12.78 12.78 0 0 1 2.91 5.2h-5.84a12.545 12.545 0 0 1 2.93-5.198Zm3.16 6.2a13.193 13.193 0 0 1 0 5.01h-6.32a12.185 12.185 0 0 1-.25-2.5a12.353 12.353 0 0 1 .25-2.51Zm-5.6-6.09l.07-.02a9.152 9.152 0 0 1 1.16-.23A13.618 13.618 0 0 0 8.045 8.5H3.8a9 9 0 0 1 5.765-5.092Zm-6.5 8.6a8.71 8.71 0 0 1 .37-2.51h4.39a13.95 13.95 0 0 0-.23 2.51a13.757 13.757 0 0 0 .23 2.5h-4.39a8.591 8.591 0 0 1-.37-2.5Zm6.57 8.61a8.9 8.9 0 0 1-5.84-5.11h4.24a13.632 13.632 0 0 0 2.77 5.35a8.1 8.1 0 0 1-1.17-.24Zm-.56-5.11h5.84a12.638 12.638 0 0 1-2.91 5.21a12.872 12.872 0 0 1-2.93-5.21Zm5.3 5.11a11.551 11.551 0 0 1-1.17.24a13.8 13.8 0 0 0 2.75-5.35h4.26a8.924 8.924 0 0 1-5.84 5.11Zm1.8-6.11a13.611 13.611 0 0 0 0-5.01h4.39a8.379 8.379 0 0 1 .37 2.51a8.687 8.687 0 0 1-.36 2.5Z" />
                        </svg>
                        Career and Business
                    </button>
                    <button v-on:click="addOption('Lessons for kids', 'opt2')"
                        class="flex gap-3 border rounded-lg mb-3 py-1 px-3 w-full h-12 items-center font-bold "
                        :class="selectOpt.opt2 ? 'bg-green-100 text-green-600 hover:bg-red-100 hover:text-red-600 ' : 'hover:bg-green-100 hover:text-green-600'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877ZM1.827 7.5a5.673 5.673 0 1 1 11.346 0a5.673 5.673 0 0 1-11.346 0Zm3.21 1.714a.5.5 0 1 0-.82.572A3.996 3.996 0 0 0 7.5 11.5c1.36 0 2.56-.679 3.283-1.714a.5.5 0 0 0-.82-.572A2.996 2.996 0 0 1 7.5 10.5a2.996 2.996 0 0 1-2.463-1.286Zm.338-2.364a.875.875 0 1 0 0-1.75a.875.875 0 0 0 0 1.75Zm5.125-.875a.875.875 0 1 1-1.75 0a.875.875 0 0 1 1.75 0Z"
                                clip-rule="evenodd" />
                        </svg>
                        Lessons for kids
                    </button>
                    <button v-on:click="addOption('Libing abroad', 'opt3')"
                        class="flex gap-3 border rounded-lg mb-3 py-1 px-3 w-full h-12 items-center font-bold "
                        :class="selectOpt.opt3 ? 'bg-green-100 text-green-600 hover:bg-red-100 hover:text-red-600 ' : 'hover:bg-green-100 hover:text-green-600'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="m7 17l3.2-6.8L17 7l-3.2 6.8L7 17m5-5.9a.9.9 0 0 0-.9.9a.9.9 0 0 0 .9.9a.9.9 0 0 0 .9-.9a.9.9 0 0 0-.9-.9M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8Z" />
                        </svg>
                        Living abroad
                    </button>
                    <button v-on:click="addOption('Exams and coursework', 'opt4')"
                        class="flex gap-3 border rounded-lg mb-3 py-1 px-3 w-full h-12 items-center font-bold "
                        :class="selectOpt.opt4 ? 'bg-green-100 text-green-600 hover:bg-red-100 hover:text-red-600 ' : 'hover:bg-green-100 hover:text-green-600'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1l1-4ZM15 5l3 3" />
                        </svg>
                        Exams and coursework
                    </button>
                    <button v-on:click="addOption('Culture, travel and hobby', 'opt5')"
                        class="flex gap-3 border rounded-lg mb-3 py-1 px-3 w-full h-12 items-center font-bold "
                        :class="selectOpt.opt5 ? 'bg-green-100 text-green-600 hover:bg-red-100 hover:text-red-600 ' : 'hover:bg-green-100 hover:text-green-600'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                            <path fill="currentColor"
                                d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16ZM96 48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm64 24v128H96V72ZM40 72h40v128H40Zm176 128h-40V72h40v128Z" />
                        </svg>
                        Culture, travel and hobby
                    </button>
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
import { ref } from 'vue'
const router = useRouter()
const options = ref([])

const selectOpt = ref({
    "opt1": false,
    "opt2": false,
    "opt3": false,
    "opt4": false,
    "opt5": false
})

const nextPage = () => {
    router.push("/academicsAndKCRs/studentSignUp/studentSignUp3")
}

const addOption = (option, number) => {
    if (selectOpt.value[number]) {
        // If already true, make it false and remove from options
        selectOpt.value[number] = false
        const indexToRemove = options.value.indexOf(option)
        if (indexToRemove !== -1) {
            options.value.splice(indexToRemove, 1)
        }
    } else {
        // If false, make it true and add to options
        selectOpt.value[number] = true
        options.value.push(option)
        console.log(options.value, selectOpt.value);
    }
}


</script>
