<template>
    <div class="relative w-full">
        <div class="h-full py-2 px-3 ">
            <label for="learn" class="uppercase text-[0.7rem] font-semibold text-gray-400">i'm available
            </label>
            <div class="flex items-center">
                <h3 class="flex items-center gap-1"> {{ availableTime }} <svg xmlns="http://www.w3.org/2000/svg" width="4"
                        height="4" viewBox="0 0 512 512">
                        <circle cx="256" cy="256.167" r="223.167" fill="#132028" />
                    </svg>
                    {{ availableDate }}
                </h3>
                <button v-on:click="showDateTime">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"
                            d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07" />
                    </svg>
                </button>
                <button v-on:click="changeDateTime" class="absolute right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                        <path fill="currentColor"
                            d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z" />
                    </svg>
                </button>
            </div>
        </div>
        <div v-if="availableDateTime"
            class="absolute w-full z-[999] border-2 h-80 overflow-auto flex flex-col items-start p-2 bg-white top-20 rounded-2xl">

            <div class="flex flex-col gap-2 w-full ">
                <p class="font-semibold text-sm">Time of the day <span class="text-gray-400">(in your time
                        zone)</span> </p>
                <div class="flex gap-2  justify-center flex-wrap">
                    <button v-on:click="availableTime = '6-9'"
                        class="flex w-16 h-32 group flex-col justify-between items-center p-3 border-2 border-gray-300 rounded-lg hover:text-white hover:bg-green-500"
                        :class="availableTime == '6-9' ? 'text-white bg-green-500' : ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                            <path fill="currentColor"
                                d="m14 10l-1.58-1.18L13.2 7l-2-.23L11 4.8l-1.82.78L8 4L6.82 5.58L5 4.8l-.23 2L2.8 7l.78 1.82L2 10H0v1h16v-1h-2zM4 10a4.143 4.143 0 0 1 3.993-4A4.143 4.143 0 0 1 12 9.993L4 10z" />
                        </svg>
                        <p class="font-semibold text-[0.9rem] ">6-9</p>
                        <p class="font-semibold text-[0.65rem] text-gray-500 group-hover:text-gray-100"
                            :class="availableTime == '6-9' ? 'text-white' : ''">
                            Morning</p>
                    </button>
                    <button v-on:click="availableTime = '9-12'"
                        class="flex w-16 h-32 group flex-col justify-between items-center p-3 border-2 border-gray-300 rounded-lg hover:text-white hover:bg-green-500"
                        :class="availableTime == '9-12' ? 'text-white bg-green-500' : ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <g fill="none" stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 22h8M5 19h14M2 16h20" />
                                <path d="M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6Z" />
                                <path stroke-linecap="round"
                                    d="M12 2v1m10 9h-1M3 12H2m17.07-7.07l-.392.393M5.322 5.322l-.393-.393" />
                            </g>
                        </svg>
                        <p class="font-semibold text-[0.9rem]">9-12</p>
                        <p class="font-semibold text-[0.65rem] text-gray-500 group-hover:text-gray-100"
                            :class="availableTime == '9-12' ? 'text-white' : ''">Late
                            Morning</p>
                    </button>
                    <button v-on:click="availableTime = '12-15'"
                        class="flex w-16 h-32 group flex-col justify-between items-center p-3 border-2 border-gray-300 rounded-lg hover:text-white hover:bg-green-500"
                        :class="availableTime == '12-15' ? 'text-white bg-green-500' : ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                            <path fill="currentColor"
                                d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-32a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" />
                        </svg>
                        <p class="font-semibold text-[0.9rem] ">12-15</p>
                        <p class="font-semibold text-[0.65rem] text-gray-500 group-hover:text-gray-100"
                            :class="availableTime == '12-15' ? 'text-white' : ''">
                            Afternoon
                        </p>
                    </button>
                    <button v-on:click="availableTime = '15-18'"
                        class="flex w-16 h-32 group flex-col justify-between items-center p-3 border-2 border-gray-300 rounded-lg hover:text-white hover:bg-green-500"
                        :class="availableTime == '15-18' ? 'text-white bg-green-500' : ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                            <path fill="currentColor"
                                d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-32a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" />
                        </svg>
                        <p class="font-semibold text-[0.9rem] ">15-18</p>
                        <p class="font-semibold text-[0.65rem] text-gray-500 group-hover:text-gray-100"
                            :class="availableTime == '15-18' ? 'text-white' : ''">Late
                            Afternoon</p>
                    </button>
                    <button v-on:click="availableTime = '18-21'"
                        class="flex w-16 h-32 group flex-col justify-between items-center p-3 border-2 border-gray-300 rounded-lg hover:text-white hover:bg-green-500"
                        :class="availableTime == '18-21' ? 'text-white bg-green-500' : ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                            <path fill="currentColor"
                                d="m14 10l-1.58-1.18L13.2 7l-2-.23L11 4.8l-1.82.78L8 4L6.82 5.58L5 4.8l-.23 2L2.8 7l.78 1.82L2 10H0v1h16v-1h-2zM4 10a4.143 4.143 0 0 1 3.993-4A4.143 4.143 0 0 1 12 9.993L4 10z" />
                        </svg>
                        <p class="font-semibold text-[0.9rem] ">18-21</p>
                        <p class="font-semibold text-[0.65rem] text-gray-500 group-hover:text-gray-100"
                            :class="availableTime == '18-21' ? 'text-white' : ''">
                            Evening</p>
                    </button>
                    <button v-on:click="availableTime = '21-24'"
                        class="flex w-16 h-32 group flex-col justify-between items-center p-3 border-2 border-gray-300 rounded-lg hover:text-white hover:bg-green-500"
                        :class="availableTime == '21-24' ? 'text-white bg-green-500' : ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g transform="rotate(-90 12 12)">
                                <path fill="currentColor"
                                    d="M12.6 13.375ZM13.1 23h-2.6l.5-.313q.5-.312 1.088-.7t1.087-.7l.5-.312q2.025-.15 3.738-1.225t2.712-2.875q-2.15-.2-4.075-1.088t-3.45-2.412q-1.525-1.525-2.425-3.45T9.1 5.85Q7.175 6.925 6.088 8.813T5 12.9v.3l-.3.138q-.3.137-.663.287t-.662.288l-.3.137q-.05-.275-.063-.575T3 12.9q0-3.15 1.9-5.875T9.875 3.4q.275-.075.5-.025t.425.2q.2.15.288.363t.062.487q-.15 2.125.613 4.088t2.262 3.462q1.525 1.525 3.438 2.25t4.037.6q.275-.025.513.088t.362.312q.125.2.175.425t-.05.5q-1.075 3.125-3.55 4.988T13.1 23ZM6 21h4.5q.625 0 1.063-.438T12 19.5q0-.625-.425-1.063T10.55 18h-1.3l-.5-1.2q-.35-.825-1.1-1.313T6 15q-1.25 0-2.125.863T3 18q0 1.25.875 2.125T6 21Zm0 2q-2.075 0-3.537-1.463T1 18q0-2.075 1.463-3.538T6 13q1.5 0 2.738.813T10.575 16Q12 16.05 13 17.063t1 2.437q0 1.45-1.025 2.475T10.5 23H6Z" />
                            </g>
                        </svg>
                        <p class="font-semibold text-[0.9rem]">21-24</p>
                        <p class="font-semibold text-[0.65rem] text-gray-500 group-hover:text-gray-100"
                            :class="availableTime == '21-24' ? 'text-white' : ''">Late
                            Evening</p>
                    </button>
                    <button v-on:click="availableTime = '0-3'"
                        class="flex w-16 h-32 group flex-col justify-between items-center p-3 border-2 border-gray-300 rounded-lg hover:text-white hover:bg-green-500"
                        :class="availableTime == '0-3' ? 'text-white bg-green-500' : ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048">
                            <path fill="currentColor"
                                d="M128 1536q141 0 272-36t244-104t207-160t161-207t103-245t37-272q0-133-34-261T1019 8q128 16 245 61t217 115t181 161t138 199t89 229t31 251q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-138 0-269-36t-246-103t-212-164T5 1528q31 4 61 6t62 2zm768 384q124 0 238-32t214-90t181-140t140-181t91-214t32-239q0-136-40-263t-112-236t-176-194t-229-136q45 155 45 317q0 146-35 282t-100 258t-157 225t-205 182t-244 129t-277 68q128 128 290 196t344 68z" />
                        </svg>
                        <p class="font-semibold text-[0.9rem]">0-3</p>
                        <p class="font-semibold text-[0.65rem] text-gray-500 group-hover:text-gray-100"
                            :class="availableTime == '0-3' ? 'text-white' : ''">
                            Night</p>
                    </button>
                    <button v-on:click="availableTime = '3-6'"
                        class="flex w-16 h-32 group flex-col justify-between items-center p-3 border-2 border-gray-300 rounded-lg hover:text-white hover:bg-green-500"
                        :class="availableTime == '3-6' ? 'text-white bg-green-500' : ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g transform="rotate(-90 12 12)">
                                <path fill="currentColor"
                                    d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z" />
                            </g>
                        </svg>
                        <p class="font-semibold text-[0.9rem]">3-6</p>
                        <p class="font-semibold text-[0.65rem] text-gray-500 group-hover:text-gray-100"
                            :class="availableTime == '3-6' ? 'text-white' : ''">Late
                            Night
                        </p>
                    </button>
                </div>
                <div>
                    <p class="font-semibold text-sm"> Days of the week </p>
                    <div class="mt-3 flex flex-wrap gap-2">
                        <button v-on:click="availableDate = 'Sun'"
                            class="p-3 border-2 border-gray-300 rounded-xl flex justify-center items-center w-[3.2rem] hover:bg-green-500 hover:text-white"
                            :class="availableDate == 'Sun' ? 'text-white bg-green-500' : ''">Sun</button>
                        <button v-on:click="availableDate = 'Mon'"
                            class="p-3 border-2 border-gray-300 rounded-xl flex justify-center items-center w-[3.2rem] hover:bg-green-500 hover:text-white"
                            :class="availableDate == 'Mon' ? 'text-white bg-green-500' : ''">Mon</button>
                        <button v-on:click="availableDate = 'Tue'"
                            class="p-3 border-2 border-gray-300 rounded-xl flex justify-center items-center w-[3.2rem] hover:bg-green-500 hover:text-white"
                            :class="availableDate == 'Tue' ? 'text-white bg-green-500' : ''">Tue</button>
                        <button v-on:click="availableDate = 'Wed'"
                            class="p-3 border-2 border-gray-300 rounded-xl flex justify-center items-center w-[3.2rem] hover:bg-green-500 hover:text-white"
                            :class="availableDate == 'Wed' ? 'text-white bg-green-500' : ''">Wed</button>
                        <button v-on:click="availableDate = 'Thu'"
                            class="p-3 border-2 border-gray-300 rounded-xl flex justify-center items-center w-[3.2rem] hover:bg-green-500 hover:text-white"
                            :class="availableDate == 'Thu' ? 'text-white bg-green-500' : ''">Thu</button>
                        <button v-on:click="availableDate = 'Fri'"
                            class="p-3 border-2 border-gray-300 rounded-xl flex justify-center items-center w-[3.2rem] hover:bg-green-500 hover:text-white"
                            :class="availableDate == 'Fri' ? 'text-white bg-green-500' : ''">Fri</button>
                        <button v-on:click="availableDate = 'Sat'"
                            class="p-3 border-2 border-gray-300 rounded-xl flex justify-center items-center w-[3.2rem] hover:bg-green-500 hover:text-white"
                            :class="availableDate == 'Sat' ? 'text-white bg-green-500' : ''">Sat</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

const availableDateTime = ref(false)
const availableTime = ref("9-12")
const availableDate = ref("Tue")
const changeDateTime = () => {
    availableDateTime.value = !availableDateTime.value
    price.value = false
    showLearn.value = false
    country.value = false
}
</script>

<style lang="scss" scoped></style>