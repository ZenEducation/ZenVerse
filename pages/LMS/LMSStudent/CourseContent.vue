<template>
  <div>
    <NuxtLayout name="lmsstudent">
      <div class="w-full h-24 flex mt-2 border-b">
        <div class="h-full max-w-max inline-block max-sm:hidden">
          <img src="@/assets/img/bundleImage.png" class="h-full" alt="" />
        </div>
        <div class="w-full lg:pr-10 px-4 h-full">
          <div class="flex justify-between h-full items-center">
            <p class="font-bold text-lg">Prayaag | Biology</p>
            <BaseButton label="Go To Course" color="info" />
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center p-4 my-8">
        <p class="text-3xl font-light">Course curriculum</p>
      </div>

      <div
        class="grid gap-0 max-w-xl xl:max-w-3xl max-md:max-w-sm max-sm:w-full max-sm:px-4 md:px-5 md:grid-cols-2 grid-cols-1 mx-auto w-full"
      >
        <div class="w-full border" v-for="(item, index) in items">
          <div class="h-16 px-3 border-b flex justify-between items-center">
            <p class="text-md font-semibold">
              {{ index + 1+ ". " + item.name }}
            </p>
            <BaseIcon
              v-if="!item.isActive"
              :path="mdiPlusBoxOutline"
              @click="item.isActive = !item.isActive"
            />
            <BaseIcon
              v-if="item.isActive"
              :path="mdiMinusBoxOutline"
              @click="item.isActive = !item.isActive"
            />
          </div>
          <div v-if="item.isActive" class="p-4 ">
            <div class="flex cursor-pointer" v-for="list in item.content">
              <BaseIcon
              v-if="list.type=='video'"
                :path="mdiVideo"
              />
              <BaseIcon
              v-if="list.type=='PDF'"
                :path="mdiFilePdfBox"
              />
              <BaseIcon
              v-if="list.type=='presentation'"
                :path="mdiPresentationPlay"
              />
              <BaseIcon
              v-if="list.type=='audio'"
                :path="mdiMicrophone"
              />
              <BaseIcon
              v-if="list.type=='text'"
                :path="mdiPencil"
              />

              <p class="text-sm font-semibold ">{{ list.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import {
mdiFilePdfBox,
  mdiMicrophone,
  mdiMinusBoxOutline,
  mdiOpenInNew,
  mdiPencil,
  mdiPlay,
  mdiPlusBoxOutline,
  mdiPresentationPlay,
  mdiVideo,
} from "@mdi/js";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import image from "@/assets/img/bundleImage.png";
import { useLayoutStore } from "@/stores/layout.js";

const items = ref([
  {
    name: "Paathshala Mastery",
    isActive: false,
    content: [
      {
        name: "Introduction to Biology",
        type: "video",
      },
      {
        name: "Biology Conceptual understanding",
        type: "PDF",
      },
    ],
  },
  {
    name: "Mathematics Basics",
    isActive: false,
    content: [
      {
        name: "Mathematics Introduction",
        type: "text",
      },
      {
        name: "Mathematics Formulas",
        type: "PDF",
      },
    ],
  },
  {
    name: "English Grammar",
    isActive: false,
    content: [
      {
        name: "Grammar Rules",
        type: "video",
      },
      {
        name: "Common Grammar Mistakes",
        type: "PDF",
      },
    ],
  },
  {
    name: "Physics Fundamentals",
    isActive: false,
    content: [
      {
        name: "Introduction to Physics",
        type: "video",
      },
      {
        name: "Physics Equations",
        type: "PDF",
      },
    ],
  },
  {
    name: "History Timeline",
    isActive: false,
    content: [
      {
        name: "World History",
        type: "presentation",
      },
      {
        name: "Important Historical Events",
        type: "PDF",
      },
    ],
  },
  {
    name: "Foreign Language Learning",
    isActive: false,
    content: [
      {
        name: "Language Basics",
        type: "audio",
      },
      {
        name: "Vocabulary List",
        type: "PDF",
      },
    ],
  },
  {
    name: "Chemistry Concepts",
    isActive: false,
    content: [
      {
        name: "Introduction to Chemistry",
        type: "video",
      },
      {
        name: "Chemical Reactions",
        type: "presentation",
      },
    ],
  },
  {
    name: "Geography Essentials",
    isActive: false,
    content: [
      {
        name: "Physical Geography",
        type: "video",
      },
      {
        name: "Geographical Maps",
        type: "PDF",
      },
    ],
  },
]);
</script>

<style lang="scss" scoped></style>
