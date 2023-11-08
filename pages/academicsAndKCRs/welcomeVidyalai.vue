<template>
    <NuxtLayout name="zen" style="margin: 0;padding: 0;height: 
  100%;" class="relative ">
        <div id="main_bar"
            class=" bg-[#F5FAFF] p-2 flex-col flex items-center justify-center  relative  aside-scrollbars-light dark:aside-scrollbars-gray shadow-md sm:rounded-lg sm:mx-10   py-5 px-1">
            <h5 class="text-4xl text-[#424242] font-bold">Welcome To Vidyalai</h5>
            <p class="text-center mt-5"> To Start Learning, Submit a Classroom request with your requirements here: </p>
            <button
                class="flex justify-center items-center gap-3 bg-[#0052cc] text-white pl-3 pr-2 py-2 mt-5 rounded-full ">REQUEST
                <svg xmlns="http://www.w3.org/2000/svg" class="bg-[#4480DA] rounded-full p-1" width="30" height="30"
                    viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                </svg>
            </button>
            <p class="text-center mt-5">if you have questions, give us call at <strong>+91-80751-02591</strong></p>
            <p class="text-center mt-5">While you are here, take a look at our classroom to see how you can attend lessons
                online</p>
            <p class="text-center text-[10px] mt-5">(this classroom is for demonstration purpose only)</p>
            <div class="lg:w-1/5 mt-2 w-1/2 bg-white flex">
                <div class="bg-[#FAFAFA] w-1/3 h-32"></div>
                <div class="w-2/3 relative">
                    <p class="font-bold mt-2 ml-2 text-sm lg:text-base">Demo Classroom</p>
                    <p class="mt-2 ml-2 text-[12px] ">Mathematics</p>
                    <button
                        class="absolute bottom-2 flex w-2/3 justify-center items-center gap-3 bg-[#45CFE3] text-white py-1 px-2  ml-2 rounded-full lg:text-[15px] text-[10px] "><svg
                            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M1.637 1.637C.732 1.637 0 2.369 0 3.273v17.454c0 .904.732 1.636 1.637 1.636h20.726c.905 0 1.637-.732 1.637-1.636V3.273c0-.904-.732-1.636-1.637-1.636H1.637zm.545 2.181h19.636v16.364h-2.726v-1.09h-4.91v1.09h-12V3.818zM12 8.182a1.636 1.636 0 1 0 0 3.273a1.636 1.636 0 1 0 0-3.273zm-4.363 1.91c-.678 0-1.229.55-1.229 1.226a1.228 1.228 0 0 0 2.455 0c0-.677-.549-1.226-1.226-1.226zm8.726 0a1.227 1.227 0 1 0 0 2.453a1.227 1.227 0 0 0 0-2.453zM12 12.545c-1.179 0-2.413.401-3.148 1.006a4.136 4.136 0 0 0-1.215-.188c-1.314 0-2.729.695-2.729 1.559v.896h14.184v-.896c0-.864-1.415-1.559-2.729-1.559c-.41 0-.83.068-1.215.188c-.735-.605-1.969-1.006-3.148-1.006Z" />
                        </svg>
                        Classroom

                    </button>
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


<style lang="scss" scoped></style>