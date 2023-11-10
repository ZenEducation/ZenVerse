<template>
    <NuxtLayout name="zen" style="margin: 0;padding: 0" class="relative h-screen">
        <div id="main_bar"
            class=" bg-[#F5FAFF] h-[40rem] flex-col flex items-center justify-center  relative  aside-scrollbars-light dark:aside-scrollbars-gray shadow-md sm:rounded-lg sm:mx-10   p-5 px-1">
            <div class="flex w-full justify-center items-center">
                <div class=" bg-[#042E7F] h-72 w-[20%] p-4 relative">
                    <div>
                        <p class=" font-semibold text-white ">Request a Lesson</p>
                        <p class="text-[#dddddd] pt-5 ">Tell us more about what you want to learn</p>
                        <p class="text-[#dddddd] pt-3 text-[9px] ">We will match you to an expert teacher who will guide
                            you one-to-one. complete the request to start learning.</p>
                        <p class="text-[#dddddd] pt-3 text-[9px] flex absolute bottom-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="fill-[#0293CE] mr-1"
                                viewBox="0 0 14 14">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 7V4.37A3.93 3.93 0 0 1 7 .5h0a3.93 3.93 0 0 1 4 3.87V7M1.5 5.5h1A.5.5 0 0 1 3 6v3a.5.5 0 0 1-.5.5h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm11 4h-1A.5.5 0 0 1 11 9V6a.5.5 0 0 1 .5-.5h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1ZM9 12.25a2 2 0 0 0 2-2h0V8m-2 4.25a1.25 1.25 0 0 1-1.25 1.25h-1.5a1.25 1.25 0 0 1 0-2.5h1.5A1.25 1.25 0 0 1 9 12.25Z" />

                            </svg> Need help? Call us at <span> +91 80751 02591 </span>
                        </p>

                    </div>
                </div>
                <div
                    class=" bg-white h-[30rem] w-[25rem] shadow-[rgba(0,0,0,0.35)_0px_5px_15px] flex flex-col items-center justify-center ">
                    <div class="mb-4">
                        <label for="target" class="ml-7">Tell us more about what you need</label>

                        <div class="flex justify-center items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                class="stroke-[#042E7F]">
                                <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m6 16l6-12l6 12M8 12h8m0 8l2 2l4-4" />
                            </svg>
                            <select name="target" id="target" class="rounded-md mt-1 w-[20rem]" required>
                                <option value="" disabled selected hidden>Target Exam/Board/Curriculum
                                </option>
                                <option value="ib">IB</option>
                                <option value="cambridge_igcse">Cambridge IGCSE</option>
                                <option value="edexcel_igcse">Edexcel IGCSE</option>
                                <option value="cambridge_a_levels">Cambridge A Levels</option>
                                <option value="edexcel_a_levels_international">Cambridge A Levels (International)</option>
                                <option value="edexcel_a_levels_uk">Cambridge A Levels (UK)</option>
                                <option value="aqa_a_levels">AQA A Levels (UK)</option>
                                <option value="singapur_gce_a_levels">Singapur GCE A Levels</option>
                                <option value="singapur_gce_o_levels">Singapur GCE O Levels</option>
                                <option value="igcse">IGCSE</option>
                                <option value="gsce">GCSE</option>
                                <option value="sat">SAT</option>
                                <option value="psat">PSAT</option>
                                <option value="jee">JEE</option>
                                <option value="ap">AP</option>
                                <option value="mcat">MCAT</option>
                                <option value="singapore_curriculum">Singapore Curriculum</option>
                                <option value="australian_curriculum">Australian Curriculum</option>
                                <option value="cbse">CBSE</option>
                                <option value="jee_main">JEE Main</option>
                                <option value="jee_advanced">JEE Advanced</option>
                                <option value="neet">NEET</option>
                                <option value="us_curriculum">US Curriculum</option>
                                <option value="act">ACT</option>
                                <option value="college/university">College / University</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-4">

                        <div class="flex flex-col gap-2">
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    class="stroke-[#042E7F]">
                                    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="m12 6l-8 4l8 4l8-4l-8-4m-8 8l8 4l8-4" />
                                </svg>
                                <div class="flex flex-col">
                                    <input type="text" name="grade/level" id="grade/level" placeholder="Grade/Level"
                                        class="rounded-md mt-1 w-[20rem]" required>
                                </div>
                            </div>
                            <label for="grade/level" class="ml-10 text-[12px]">Eg. Grade 10</label>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="flex justify-center items-center gap-2 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"
                                class="fill-[#042E7F]">
                                <path
                                    d="M208 24H72a32 32 0 0 0-32 32v168a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16H56a16 16 0 0 1 16-16h136a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8Zm-24 96l-25.61-19.2a4 4 0 0 0-4.8 0L128 120V40h56Z" />
                            </svg>
                            <select name="subject" id="subject" class="rounded-md mt-1 w-[20rem]" required>
                                <option value="" disabled selected hidden>Subject</option>
                                <option value="mathematics">Mathematics</option>
                                <option value="mathematics_aa">Mathematics: AA</option>
                                <option value="mathematics_ai">Mathematics: AI</option>
                                <option value="extended_mathematics">Extended Mathematics</option>
                                <option value="further_mathematics">Further Mathematics</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="flex justify-center items-center gap-2 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                class="fill-[#042E7F]">
                                <path
                                    d="M1 21L12 2l11 19H1Zm3.45-2h15.1L12 6L4.45 19ZM12 18q.425 0 .713-.288T13 17q0-.425-.288-.713T12 16q-.425 0-.713.288T11 17q0 .425.288.713T12 18Zm-1-3h2v-5h-2v5Zm1-2.5Z" />
                            </svg>
                            <textarea name="details" class="rounded-md mt-1 w-[20rem]" id="details" cols="35" rows="4"
                                placeholder="Details about your request" required></textarea>
                        </div>
                    </div>
                    <div class="w-full flex justify-end mr-11">
                        <button class="bg-[#042E7F] text-white p-3 rounded-md ">SUBMIT</button>
                    </div>
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


<style scoped>
select:invalid {
    color: gray;
}
</style>