<template>
  <NuxtLayout name="lmsstudent">
    <div class="flex max-md:block">
      <div class="w-2/3 max-md:w-full max-md:h-auto h-screen p-10 pb-30">
        <p class="uppercase cursor-pointer mb-8">
          <span class="text-blue-600">store</span>/ <span> bundle </span> /
          <span> fst | jee Main | pcm </span>
        </p>
        <p class="capitalize font-bold text-2xl">FSTs | JEE MAin | PCM</p>
        <p>FSTs JEE MAin PCM</p>
        <div class="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4 my-3">
          <div class="text-center border rounded py-2" >
            <p class="font-semibold">Live</p>
            <p class=" font-light text-sm">Status</p>
          </div>
          <div class="text-center border rounded py-2" >
            <p class="font-semibold">360</p>
            <p class=" font-light text-sm">Marks</p>
          </div>
          <div class="text-center border rounded py-2" >
            <p class="font-semibold">-</p>
            <p class=" font-light text-sm">Minutes</p>
          </div>
          <div class="text-center border rounded py-2" >
            <p class="font-semibold">90</p>
            <p class=" font-light text-sm">Questions</p>
          </div>

        </div>
        <div class="flex  flex-wrap border rounded justify-between px-6 py-2 my-4 items-center">
          <p class="text-lg font-medium">Test Attempts : 2</p>
          <NuxtLink to="/examportal/learner/examInstruction">

            <BaseButton label="Continue Test"  color="info"/>
          </NuxtLink>
        </div>
        <div class="flex flex-wrap justify-between px-6 py-2 my-4 items-center">
          <div>
            <p class="font-semibold">First Attempt</p>
            <p class=" font-light text-sm">Score 13 of 360</p>
          </div>
          <NuxtLink to="/examportal/learner/examResult">

            <BaseButton label="View Result" class="border rounded" />
          </NuxtLink>
        </div>

      </div>
      <div class="w-1/3 max-md:w-full max-md:h-auto h-screen pt-20 text-xs px-4">
        <CardBox class="max-w-sm">
          <img :src="image" alt="" srcset="" class="rounded" />
          <p class="border-b-2 pb-2 pt-2 flex items-center">
            <BaseIcon :path="mdiTimerOutline" /><span> Valid for 643 Days</span>
          </p>
          <p class="py-2 font-medium text-lg">What's Included</p>
          <p class="pb-2 flex items-center">
            <BaseIcon :path="mdiCheck" /><span class="font-medium pr-1">
              Live</span
            >
            Tests
          </p>
          <p class="pb-2 flex items-center">
            <BaseIcon :path="mdiCheckCircleOutline" /><span class="font-medium pr-1">
              360</span
            >
            Marks
          </p>
          <p class="pb-2 flex items-center">
            <BaseIcon :path="mdiChatQuestion" /><span class="font-medium pr-1">
              90</span
            >
            Questions
          </p>
        </CardBox>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import CardBox from "@/components/Cards/CardBox.vue";

import BaseButton from "@/components/Buttons/BaseButton.vue";
import {
mdiChatQuestion,
mdiCheck,
  mdiCheckCircleOutline,
  mdiTimerOutline,

} from "@mdi/js";
import BaseIcon from "~~/components/Display/BaseIcon.vue";

import image from "@/assets/img/bundleImage.png";



</script>

<style lang="scss" scoped></style>
