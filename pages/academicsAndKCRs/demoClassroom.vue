<template>
    <NuxtLayout name="zen" style="margin: 0;padding: 0" class="relative h-screen">
        <div id="main_bar"
            class=" bg-[#F5FAFF] lg:h-[40rem] h-fit flex-col flex items-center   relative  aside-scrollbars-light dark:aside-scrollbars-gray shadow-md sm:rounded-lg sm:mx-10   pb-5 px-1">
            <div class="bg-white lg:h-64 h-fit  w-full lg:px-44 text-center pt-4 pb-2">
                <div class="lg:flex lg:items-center lg:gap-4">
                    <h3 class="text-2xl lg:mb-0 mb-2">Demo classroom for Bhavya</h3>
                    <button class="border px-5 py-1 lg:mr-0 mr-2 rounded-xl">Subject</button>
                    <button class="border px-5 py-1 lg:mr-0 mr-2 rounded-xl">BOARD/EXAM</button>
                    <button class="border px-5 py-1 rounded-xl">10</button>
                </div>
                <div class="flex lg:flex-row items-center flex-col gap-5 mt-3">
                    <div>
                        <h4 class="text-left">Teacher</h4>
                        <div class="border w-72 relative">
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                                    <path fill="gray" fill-rule="evenodd"
                                        d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4Zm7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413l-.005-.018ZM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <div class="mt-2">
                                    <h4 class="font-semibold text-left">Teacher</h4>
                                    <div class="flex gap-3 mt-1">
                                        <button
                                            class="border-2 font-semibold border-black px-3 py-1 rounded-3xl w-20">Chat</button>
                                        <button
                                            class="border-2 font-semibold bg-black text-white border-black px-3 py-1 rounded-3xl w-20">Call</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p class="text-gray-400 text-[12px] mt-8 ml-2 mb-1 "> - </p>
                                <p class="text-gray-400 text-[12px] ml-2 mb-2 ">5:00 PM (GMT +05:30 IST)</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 class="text-left">Students</h4>
                        <div class="border w-72 relative">
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                                    <path fill="gray" fill-rule="evenodd"
                                        d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4Zm7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413l-.005-.018ZM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <div class="mt-2">
                                    <h4 class="font-semibold">Bhavya</h4>

                                </div>
                            </div>
                            <div>
                                <p class="text-gray-400 text-[12px] mt-10 ml-2 mb-1 "> - </p>
                                <p class="text-gray-400 text-[12px] ml-2 mb-2 ">5:00 PM (GMT +05:30 IST)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-transparent lg:px-44  w-full flex flex-col justify-center items-center pt-3">
                <div class="bg-white w-full p-8">
                    <h3 class="text-xl font-semibold">Upcoming Lessons</h3>
                    <div class="bg-gray-100 mt-14 ">
                        Tuesday, 29 August 2023
                    </div>
                    <div class="flex lg:flex-row flex-col justify-between lg:items-center mt-2 gap-y-3">
                        <p>4:59 PM to 5:59 PM</p>
                        <p>Demo Lesson</p>
                        <button class="bg-blue-200 text-blue-600 font-semibold px-2 h-8 rounded-lg">One Time</button>
                        <div class="flex gap-3 justify-center items-center">
                            <button class="bg-green-500 text-white py-1 px-3 rounded-xl">JOIN LESSON</button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                                <path fill="currentColor"
                                    d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z" />
                            </svg>

                        </div>
                    </div>
                </div>
                <div class="bg-white w-full pt-8 px-8 pb-3 mt-3 relative">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15">
                            <path fill="green"
                                d="M7.5 7.5H7a.5.5 0 0 0 .146.354L7.5 7.5Zm0 6.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15v-1ZM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5h-1ZM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0v1Zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1V0ZM7 3v4.5h1V3H7Zm.146 4.854l3 3l.708-.708l-3-3l-.708.708Z" />
                        </svg>
                        <p>Past Lessons</p>
                    </div>
                    <p class="ml-5 my-3">No Completed Lessons</p>
                    <NuxtLink to="#" class="text-center underline underline-offset-1">
                        <p>See All Lessons</p>
                    </NuxtLink>

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
