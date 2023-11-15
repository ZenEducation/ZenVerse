<template>
    <NuxtLayout name="zen" style="margin: 0;padding: 0" class="relative h-screen">
        <div id="main_bar"
            class=" bg-[#F5FAFF] lg:h-[40rem] h-fit lg:flex-row flex-col flex justify-center lg:items-start items-center pt-10   relative  aside-scrollbars-light dark:aside-scrollbars-gray shadow-md sm:rounded-lg sm:mx-10   pb-5 px-1">
            <div class="w-72">
                <div class="flex justify-between ">
                    <NuxtLink to="/academicsAndKCRs/studentSignUp/studentSignUp2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" d="m14 7l-5 5l5 5" />
                        </svg>
                    </NuxtLink>
                    <NuxtLink to="/academicsAndKCRs/studentSignUp/studentSignUp4">
                        <button class="text-green-700">Skip</button>
                    </NuxtLink>
                </div>
                <div class="mt-3">
                    <h3 class="text-xl font-semibold mb-2">What's your English level now?</h3>
                    <button v-on:click="addOption('Just Starting', 'opt1')"
                        class="flex flex-col gap-3 border justify-center rounded-lg mb-3 py-1 px-3 w-full h-20 font-bold "
                        :class="selectOpt.opt1 ? 'bg-green-100 text-green-600 hover:bg-red-100 hover:text-red-600 ' : 'hover:bg-green-100 hover:text-green-600'">
                        <p class=" font-semibold">I'm just starting</p>
                        <p class=" text-gray-500 font-light -mt-3 text-left">I can't say much yet</p>
                    </button>
                    <button v-on:click="addOption('Know the basics', 'opt2')"
                        class="flex flex-col gap-3 border justify-center rounded-lg mb-3 py-1 px-3 w-full h-20 font-bold "
                        :class="selectOpt.opt2 ? 'bg-green-100 text-green-600 hover:bg-red-100 hover:text-red-600 ' : 'hover:bg-green-100 hover:text-green-600'">
                        <p class=" font-semibold">I know thw basics</p>
                        <p class=" text-gray-500 font-light -mt-3 text-left">I can talk about simple topics</p>
                    </button>
                    <button v-on:click="addOption('Conversational', 'opt3')"
                        class="flex flex-col gap-3 border justify-center rounded-lg mb-3 py-1 px-3 w-full h-20 font-bold "
                        :class="selectOpt.opt3 ? 'bg-green-100 text-green-600 hover:bg-red-100 hover:text-red-600 ' : 'hover:bg-green-100 hover:text-green-600'">
                        <p class=" font-semibold">I'm conversational</p>
                        <p class=" text-gray-500 font-light -mt-3 text-left">I can speak about my experiences, make plans
                            and tell
                            stories</p>
                    </button>
                    <button v-on:click="addOption('Fluent', 'opt4')"
                        class="flex flex-col gap-3 border justify-center rounded-lg mb-3 py-1 px-3 w-full h-20 font-bold "
                        :class="selectOpt.opt4 ? 'bg-green-100 text-green-600 hover:bg-red-100 hover:text-red-600 ' : 'hover:bg-green-100 hover:text-green-600'">
                        <p class=" font-semibold">I can express myself fluently</p>
                        <p class=" text-gray-500 font-light -mt-3 text-left">I can use complex grammer and phrases and tell
                            stories
                        </p>
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

const options = ref()

const selectOpt = ref({
    "opt1": false,
    "opt2": false,
    "opt3": false,
    "opt4": false,
})

const nextPage = () => {
    router.push("/academicsAndKCRs/studentSignUp/studentSignUp4")
}


const addOption = (option, number) => {
    for (const key in selectOpt.value) {
        selectOpt.value[key] = false
    }

    if (options.value === option) {
        options.value = ''
    } else {
        options.value = option
        selectOpt.value[number] = true
    }
}


</script>
