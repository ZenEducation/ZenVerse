<template>
    <NuxtLayout name="zen" style="margin: 0;padding: 0" class="relative h-screen">
        <div id="main_bar"
            class=" bg-[#F5FAFF] lg:h-[40rem] h-fit lg:flex-row flex-col flex justify-center lg:items-start items-center pt-10   relative  aside-scrollbars-light dark:aside-scrollbars-gray shadow-md sm:rounded-lg sm:mx-10   pb-5 px-1">
            <div>
                <iframe width="300" height="200" src="https://www.youtube.com/embed/N5t5oKcTT0Y"
                    title="Empowering the World With Paathshala" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <div class="p-4 pl-10 pt-0 w-[20rem] lg:mt-0 mt-4">
                <h2 class="text-xl">Match with <span class="font-bold">the right tutor</span> for your unique needs</h2>
                <p class="mt-2">Tell us how you'd like to learn to get a personalized choice of tutors</p>
                <div class="mt-5">
                    <p class="text-center text-lg font-semibold">Select a subject</p>
                    <div class="flex bg-white items-center p-2 mt-2 rounded-xl border">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14">
                            <path fill="none" stroke="gray" stroke-linecap="round" stroke-linejoin="round"
                                d="M7 13.5a9.26 9.26 0 0 0-5.61-2.95a1 1 0 0 1-.89-1V1.5A1 1 0 0 1 1.64.51A9.3 9.3 0 0 1 7 3.43V13.5Zm0 0a9.26 9.26 0 0 1 5.61-2.95a1 1 0 0 0 .89-1V1.5a1 1 0 0 0-1.14-.99A9.3 9.3 0 0 0 7 3.43V13.5Z" />
                        </svg>
                        <select name="subject" id="subject" class="border-none w-full">
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                            <option value="french">French</option>
                            <option value="german">German</option>
                            <option value="japanese">Japanese</option>
                        </select>
                    </div>
                    <button v-on:click="nextPage"
                        class="w-full bg-green-600 text-white h-12 rounded-xl mt-2">Continue</button>
                </div>
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
const router = useRouter()
const nextPage = () => {
    router.push("/academicsAndKCRs/studentSignUp/studentSignUp2")
}
</script>
