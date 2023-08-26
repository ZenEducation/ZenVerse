<script setup>

import BaseButton from "@/components/Buttons/BaseButton.vue";
const timeOptions = ['Monthly' , 'Quarterly' , 'Half Yearly','Yearly'];
const FYOptions = ['FY-APR2022-MAR2023'];
const TimeSelected = ref(timeOptions[0]);
const FYSelected = ref(FYOptions[0]);





</script>

<template>
  <NuxtLayout name="accounts">
    <div class="p-8">
        <div class="flex flex-wrap gap-6 justify-between items-center">
            <div class="flex flex-wrap gap-6 items-center w-full">
                <FormsFormControl class="w-1/3 max-md:w-full" :options="FYOptions" v-model="FYSelected"/>
                <FormsFormControl class="w-1/3 max-md:w-full" :options="timeOptions" v-model="TimeSelected"/>
            </div>
            <div>
                <BaseButton label="Export" color="info" />
            </div> 


        </div>
        <div class="mt-6 my-4">
            <p class="text-purple-500">FY-APR2022-MAR2023</p>
            <div class="grid grid-cols-2 border-b-2 text-xl py-4 ">
                <p>Particular</p>
                <p>Purchase</p>
            </div>
            <div class="grid grid-cols-2 border-b cursor-pointer py-2 hover:bg-slate-100 dark:hover:bg-slate-700 " v-for="i in 8">
                <p class="text-blue-500">April 2022</p>
                <p>0.00</p>
            </div>
        </div>
    </div>

  </NuxtLayout>
</template>
