<template>
    <NuxtLayout name="zen" style="margin: 0;padding: 0" class="relative h-screen">
        <div id="main_bar"
            class=" bg-[#F5FAFF] m-3  h-fit lg:flex-row flex-col flex justify-center lg:items-start items-center pt-10   relative  aside-scrollbars-light dark:aside-scrollbars-gray shadow-md sm:rounded-lg sm:mx-10   pb-5 px-1">
            <div class=" lg:w-[28rem] w-full ">
                <div class="flex justify-between ">
                    <NuxtLink to="/academicsAndKCRs/studentSignUp/studentSignUp5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" d="m14 7l-5 5l5 5" />
                        </svg>
                    </NuxtLink>
                    <NuxtLink to="/academicsAndKCRs/studentSignUp/studentSignUp7">
                        <button class="text-green-700">Skip</button>
                    </NuxtLink>
                </div>
                <div class="mt-3">
                    <h3 class="text-xl font-semibold mb-2">When would you like to take lessons?</h3>
                    <div class="flex flex-col gap-2 ">
                        <p class="font-semibold text-sm">Time of the day <span class="text-gray-400">(in your time
                                zone)</span> </p>
                        <div class="flex gap-2 lg:justify-between justify-center flex-wrap">
                            <button
                                class="flex w-[6rem] group flex-col justify-between items-center p-3 border-2 border-gray-300 rounded-lg hover:text-white hover:bg-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                                    <path fill="currentColor"
                                        d="m14 10l-1.58-1.18L13.2 7l-2-.23L11 4.8l-1.82.78L8 4L6.82 5.58L5 4.8l-.23 2L2.8 7l.78 1.82L2 10H0v1h16v-1h-2zM4 10a4.143 4.143 0 0 1 3.993-4A4.143 4.143 0 0 1 12 9.993L4 10z" />
                                </svg>
                                <p class="font-semibold text-lg">6-9</p>
                                <p class="font-semibold text-sm text-gray-500 group-hover:text-gray-100">Morning</p>
                            </button>
                            <button
                                class="flex w-[6rem] group flex-col justify-between items-center p-3 border-2 border-gray-300 rounded-lg hover:text-white hover:bg-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 22h8M5 19h14M2 16h20" />
                                        <path d="M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6Z" />
                                        <path stroke-linecap="round"
                                            d="M12 2v1m10 9h-1M3 12H2m17.07-7.07l-.392.393M5.322 5.322l-.393-.393" />
                                    </g>
                                </svg>
                                <p class="font-semibold text-lg">9-12</p>
                                <p class="font-semibold text-sm text-gray-500 group-hover:text-gray-100">Late Morning</p>
                            </button>
                            <button
                                class="flex w-[6rem] group flex-col justify-between items-center p-3 border-2 border-gray-300 rounded-lg hover:text-white hover:bg-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                                    <path fill="currentColor"
                                        d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" />
                                </svg>
                                <p class="font-semibold text-lg">12-15</p>
                                <p class="font-semibold text-sm text-gray-500 group-hover:text-gray-100">Afternoon</p>
                            </button>
                            <button
                                class="flex w-[6rem] group flex-col justify-between items-center p-3 border-2 border-gray-300 rounded-lg hover:text-white hover:bg-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                                    <path fill="currentColor"
                                        d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" />
                                </svg>
                                <p class="font-semibold text-lg">15-18</p>
                                <p class="font-semibold text-sm text-gray-500 group-hover:text-gray-100">Late Afternoon</p>
                            </button>
                            <button
                                class="flex w-[6rem] group flex-col justify-between items-center p-3 border-2 border-gray-300 rounded-lg hover:text-white hover:bg-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                                    <path fill="currentColor"
                                        d="m14 10l-1.58-1.18L13.2 7l-2-.23L11 4.8l-1.82.78L8 4L6.82 5.58L5 4.8l-.23 2L2.8 7l.78 1.82L2 10H0v1h16v-1h-2zM4 10a4.143 4.143 0 0 1 3.993-4A4.143 4.143 0 0 1 12 9.993L4 10z" />
                                </svg>
                                <p class="font-semibold text-lg">6-9</p>
                                <p class="font-semibold text-sm text-gray-500 group-hover:text-gray-100">Evening</p>
                            </button>
                            <button
                                class="flex w-[6rem] group flex-col justify-between items-center p-3 border-2 border-gray-300 rounded-lg hover:text-white hover:bg-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g transform="rotate(-90 12 12)">
                                        <path fill="currentColor"
                                            d="M12.6 13.375ZM13.1 23h-2.6l.5-.313q.5-.312 1.088-.7t1.087-.7l.5-.312q2.025-.15 3.738-1.225t2.712-2.875q-2.15-.2-4.075-1.088t-3.45-2.412q-1.525-1.525-2.425-3.45T9.1 5.85Q7.175 6.925 6.088 8.813T5 12.9v.3l-.3.138q-.3.137-.663.287t-.662.288l-.3.137q-.05-.275-.063-.575T3 12.9q0-3.15 1.9-5.875T9.875 3.4q.275-.075.5-.025t.425.2q.2.15.288.363t.062.487q-.15 2.125.613 4.088t2.262 3.462q1.525 1.525 3.438 2.25t4.037.6q.275-.025.513.088t.362.312q.125.2.175.425t-.05.5q-1.075 3.125-3.55 4.988T13.1 23ZM6 21h4.5q.625 0 1.063-.438T12 19.5q0-.625-.425-1.063T10.55 18h-1.3l-.5-1.2q-.35-.825-1.1-1.313T6 15q-1.25 0-2.125.863T3 18q0 1.25.875 2.125T6 21Zm0 2q-2.075 0-3.537-1.463T1 18q0-2.075 1.463-3.538T6 13q1.5 0 2.738.813T10.575 16Q12 16.05 13 17.063t1 2.437q0 1.45-1.025 2.475T10.5 23H6Z" />
                                    </g>
                                </svg>
                                <p class="font-semibold text-lg">9-12</p>
                                <p class="font-semibold text-sm text-gray-500 group-hover:text-gray-100">Late Evening</p>
                            </button>
                            <button
                                class="flex w-[6rem] group flex-col justify-between items-center p-3 border-2 border-gray-300 rounded-lg hover:text-white hover:bg-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048">
                                    <path fill="currentColor"
                                        d="M128 1536q141 0 272-36t244-104t207-160t161-207t103-245t37-272q0-133-34-261T1019 8q128 16 245 61t217 115t181 161t138 199t89 229t31 251q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-138 0-269-36t-246-103t-212-164T5 1528q31 4 61 6t62 2zm768 384q124 0 238-32t214-90t181-140t140-181t91-214t32-239q0-136-40-263t-112-236t-176-194t-229-136q45 155 45 317q0 146-35 282t-100 258t-157 225t-205 182t-244 129t-277 68q128 128 290 196t344 68z" />
                                </svg>
                                <p class="font-semibold text-lg">12-15</p>
                                <p class="font-semibold text-sm text-gray-500 group-hover:text-gray-100">Night</p>
                            </button>
                            <button
                                class="flex w-[6rem] group flex-col justify-between items-center p-3 border-2 border-gray-300 rounded-lg hover:text-white hover:bg-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g transform="rotate(-90 12 12)">
                                        <path fill="currentColor"
                                            d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z" />
                                    </g>
                                </svg>
                                <p class="font-semibold text-lg">15-18</p>
                                <p class="font-semibold text-sm text-gray-500 group-hover:text-gray-100">Late Night</p>
                            </button>
                        </div>
                        <div>
                            <p class="font-semibold text-sm"> Days of the week </p>
                            <div class="mt-3 flex lg:justify-between flex-wrap gap-2">
                                <button
                                    class="p-3 border-2 border-gray-300 rounded-xl flex justify-center items-center w-[3.2rem] hover:bg-green-500 hover:text-white">Sun</button>
                                <button
                                    class="p-3 border-2 border-gray-300 rounded-xl flex justify-center items-center w-[3.2rem] hover:bg-green-500 hover:text-white">Mon</button>
                                <button
                                    class="p-3 border-2 border-gray-300 rounded-xl flex justify-center items-center w-[3.2rem] hover:bg-green-500 hover:text-white">Tue</button>
                                <button
                                    class="p-3 border-2 border-gray-300 rounded-xl flex justify-center items-center w-[3.2rem] hover:bg-green-500 hover:text-white">Wed</button>
                                <button
                                    class="p-3 border-2 border-gray-300 rounded-xl flex justify-center items-center w-[3.2rem] hover:bg-green-500 hover:text-white">Thu</button>
                                <button
                                    class="p-3 border-2 border-gray-300 rounded-xl flex justify-center items-center w-[3.2rem] hover:bg-green-500 hover:text-white">Fri</button>
                                <button
                                    class="p-3 border-2 border-gray-300 rounded-xl flex justify-center items-center w-[3.2rem] hover:bg-green-500 hover:text-white">Sat</button>
                            </div>
                        </div>
                    </div>





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
import { ref, computed } from 'vue'
const router = useRouter()



const nextPage = () => {
    router.push("/academicsAndKCRs/studentSignUp/studentSignUp7")
}




</script>
