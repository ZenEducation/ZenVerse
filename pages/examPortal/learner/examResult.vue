<template>
    <div class="absolute top-0 h-16 z-30 bg-slate-50 border-b px-4 flex items-center w-full">
        <p class="text-xl">
            JEE Main | FSTs | V01
        </p>
    </div>
    <div class="w-4/5 pt-20 mx-auto  h-screen">
        <p class=" font-semibold text-4xl pb-4">JEE Main | FSTs | V01</p>
        <div class="flex gap-5 max-md:block">
            <div class="w-1/3 max-md:w-5/6 my-3 max-md:mx-auto border-2 rounded-lg py-10 text-center">
                <p  class=" font-semibold text-lg">
                    Your Score
                </p>
                <p class="font-semibold text-2xl">
                    0
                </p>
                <p class="font-light text-lg pb-6">
                    out of 360
                </p>
                <div class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold">
                    <p>Percentile</p>
                    <p>N/A</p>
                </div>
                <div class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold">
                    <p>Accuracy</p>
                    <p>0%</p>
                </div>
                <div class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold">
                    <p>Percentage</p>
                    <p>0%</p>
                </div>
                <BaseButton label="VIEW SOLUTION" color="info" class="w-5/6 mx-auto mt-8" />

            </div>
            <div class="w-2/3  max-md:w-5/6 my-3 max-md:mx-auto border-2 rounded-lg py-10 px-4">
                <p class="">
                    total Marks: <span class="font-semibold">360</span>
                </p>
                <div class="py-6 max-w-sm mx-auto">
                    <div class="flex items-center justify-between">
                        <p class="font-semibold">Correct</p>
                        <p class="font-semibold">0</p>
                  
                      </div>
                      <div class="flex items-center justify-between">
                        <p class="font-semibold">Incorrect</p>
                        <p class="font-semibold">0</p>
                  
                      </div>
                      <div class="flex items-center justify-between">
                        <p class="font-semibold">Negative Marking</p>
                        <p class="font-semibold">0</p>
                  
                      </div>
                      <div class="flex items-center justify-between">
                        <p class="font-semibold">Skipped</p>
                        <p class="font-semibold">-360</p>
                  
                      </div>
                </div>
                <p class="">
                    You have scored  <span class="font-semibold">0 marks</span>
                    for correct answers, missed  <span class="font-semibold">0 marks</span>
                    on incorrect answers , lost  <span class="font-semibold">0 marks</span>
                    due to negative marking and  <span class="font-semibold">360 marks</span>
                    by skipping questions.
                </p>
            </div>

        </div>


    </div>
</template>

<script setup>
import BaseButton from "~~/components/Buttons/BaseButton.vue";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import {
  mdiTrashCan,
  mdiStarOutline,
  mdiChevronLeft,
  mdiChevronRight,
  mdiArrowLeft,
  mdiCloseBoxOutline,
  mdiCloseCircleOutline,
  mdiArrowRight,
mdiFullscreen,
} from "@mdi/js";
</script>

<style lang="scss" scoped>

</style>