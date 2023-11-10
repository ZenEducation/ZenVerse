<template>
    <NuxtLayout name="zen" style="margin: 0;padding: 0" class="relative h-screen">
        <div id="main_bar"
            class=" bg-[#F5FAFF] lg:h-[40rem] h-fit flex-col flex items-center   relative  aside-scrollbars-light dark:aside-scrollbars-gray shadow-md sm:rounded-lg sm:mx-10   pb-5 px-1">
            <div class="lg:w-1/3 px-2 ">
                <h3 class="text-xl pt-9 font-semibold">Billing</h3>
                <p class="mt-4">The amount you pay will added to the deposit balance</p>
                <div class="flex lg:flex-row flex-col justify-between my-6 gap-y-3">
                    <div class="bg-white flex items-center rounded-lg h-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15Z" />
                        </svg>
                        <input type="num" class="lg:w-32 w-full mx-2">
                    </div>
                    <div class="rounded-lg">
                        <select name="currancy" id="currancy" class="border-none rounded-lg w-full h-10">
                            <option value="usd">USD</option>
                            <option value="inr">INR</option>
                        </select>
                    </div>
                    <button class="bg-blue-700 py-2 px-2 text-white rounded-lg">Make a Payment</button>
                </div>

                <p>If you need assistance, please <span class="text-blue-600">chat with support</span> , or reach out to us
                    on Whatsapp at +91</p>
            </div>
        </div>
        <div class="fixed bottom-2 right-2 bg-[#1972F5] w-11 flex justify-center items-center h-10 rounded-full ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="white" d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
            </svg>
        </div>
    </NuxtLayout>
</template>
