<template>
  <div>
    <NuxtLayout name="lmsstudent">
      <div class="w-full h-24 flex mt-2 border-b">
        <div class="h-full max-w-max inline-block max-sm:hidden">
          <img src="@/assets/img/BundleImage.png" class="h-full" alt="" />
        </div>
        <div class="w-full lg:pr-10 px-4 h-full">
          <div class="flex justify-between h-full items-center">
            <p class="font-bold text-lg">Prayaag | Biology</p>
            <BaseButton label="Go To Course" color="info" />
          </div>
        </div>
      </div>
      <div class="w-full mx-auto px-[15px] sm:max-w-[540px] sm:px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] flex justify-between my-8">
        <p class="text-3xl font-light capitalize">Here are all the courses included in your bundle</p>
                  <div class="flex flex-wrap gap-0 items-center">
            <BaseButton
              :icon="mdiFormatListBulleted"
              :color="colors[0]"
              @click="
                () => {
                  isGrid = false;
                }
              "
            />
            <BaseButton
              :icon="mdiGrid"
              :color="colors[1]"
              @click="
                () => {
                  isGrid = true;
                }
              "
            />
          </div>
      </div>
        <template v-if="isFinalGrid">

      <div
        class="grid max-sm:grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3  w-full mx-auto px-[15px] sm:max-w-[540px] sm:px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] "
      >
        <div
          class="rounded-md overflow-hidden mt-4 border border-[rgba(0,0,0,0.2)] dark:border-[rgba(256,256,256,0.2)] max-w-xs hover:scale-105 cursor-pointer transition-transform"
          v-for="item in items"
        >
          <div
            class="h-44 w-full bg-cover bg-center bg-no-repeat relative"
            :style="'background-image: url(' + image + ')'"
          ></div>


          <div class="px-4 h-auto my-4">
            <p class="font-medium text-center h-12">{{ item.title }}</p>
          </div>
          <div class="w-full border-t mt-4"></div>

        </div>
      </div>
              </template>
        <template v-else>
          <div class="grid grid-cols-1 gap-3 px-6">
            <div
              class="rounded-md overflow-hidden mt-4 border border-[rgba(0,0,0,0.2)] dark:border-[rgba(256,256,256,0.2)] cursor-pointer transition-transform"
              v-for="item in items"
            >
              <div class="flex">
                <img :src="image" class="w-40" />
                <div class="px-4 h-auto flex items-center">
                  <p class="font-medium min-h-18">{{ item.title }}</p>

                </div>
              </div>
            </div>
          </div>
        </template>
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
  mdiMinusBoxOutline,
  mdiOpenInNew,
  mdiPlay,
  mdiPlusBoxOutline,
  mdiVideo,
  mdiFormatListBulleted,
  mdiGrid
} from "@mdi/js";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import image from "@/assets/img/BundleImage.png";
import { useLayoutStore } from "@/stores/layout.js";

const items = ref([
  {
    ID: "AAC432",
    title: "Mechanics: Newton's Laws of Motion",
    status: "Published",
    type: "Lessons",
    quantity: 4,
    isFree: true,
    category: "A",
  },
  {
    ID: "BCD123",
    title: "Thermodynamics: Heat and Temperature",
    status: "Unpublished",
    type: "Tests",
    quantity: 2,
    isFree: false,
    category: "B",
  },
  {
    ID: "DEF789",
    title: "Optics: Geometrical Optics and Reflection",
    status: "Coming Soon",
    type: "Courses",
    quantity: 8,
    isFree: true,
    category: "C",
  },
  {
    ID: "EFG456",
    title: "Electricity and Magnetism: Electric Circuits",
    status: "Scheduled",
    type: "Tests",
    quantity: 3,
    isFree: false,
    category: "A",
  },
  {
    ID: "GHI654",
    title: "Waves: Wave Properties and Sound",
    status: "Published",
    type: "Lessons",
    quantity: 6,
    isFree: true,
    category: "B",
  },
]);

const isLg = computed(() => {
  return window.innerWidth <= 600;
});

const isGrid = ref(true);
const isFinalGrid = computed(() => {
  if (isLg.value) {
    return true;
  } else {
    return isGrid.value;
  }
});

const colors = computed(() => {
  if (isGrid.value) {
    return ["lightDark", "info"];
  }
  return ["info", "lightDark"];
});
</script>

<style lang="scss" scoped></style>
