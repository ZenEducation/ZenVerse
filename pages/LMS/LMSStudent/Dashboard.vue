<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import {
mdiOpenInNew,
mdiPlay,
} from "@mdi/js";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import image from "@/assets/img/bundleImage.png";
import { useLayoutStore } from "@/stores/layout.js";

const items = ref([
  {
    CourseID: "course1",
    title: "Mechanics: Newton's Laws of Motion",
    status: "Published",
    percentCompleted: 0,
  },
  {
    CourseID: "course2",
    title: "Thermodynamics: Heat and Temperature",
    status: "Unpublished",
    percentCompleted: 25,
  },
  {
    CourseID: "course3",
    title: "Optics: Geometrical Optics and Reflection",
    status: "Coming Soon",
    percentCompleted: 50,
  },
  {
    CourseID: "course4",
    title: "Electricity and Magnetism: Electric Circuits",
    status: "Scheduled",
    percentCompleted: 75,
  },
  {
    CourseID: "course5",
    title: "Waves: Wave Properties and Sound",
    status: "Published",
    percentCompleted: 10,
  },
  {
    CourseID: "course6",
    title: "Modern Physics: Quantum Mechanics",
    status: "Published",
    percentCompleted: 90,
  },
  {
    CourseID: "course7",
    title: "Electromagnetism: Magnetic Fields and Induction",
    status: "Unpublished",
    percentCompleted: 35,
  },
  {
    CourseID: "course8",
    title: "Astrophysics: Stars and Galaxies",
    status: "Coming Soon",
    percentCompleted: 60,
  },
  {
    CourseID: "course9",
    title: "Nuclear Physics: Radioactivity and Nuclear Reactions",
    status: "Published",
    percentCompleted: 80,
  },
  {
    CourseID: "course10",
    title: "Fluid Mechanics: Fluid Dynamics and Bernoulli's Principle",
    status: "Published",
    percentCompleted: 95,
  },
]);

const statusOptions = [
  "all",
  "Published",
  "Unpublished",
  "Coming Soon",
  "Scheduled",
];
const statusSelectedFilter = ref("all");
const searchQuery = ref("");
const publishedFilterOption = ref("all");


const perPage = 16;
const totalPages = ref(1);
const currentPage = ref(0);
const publishedOnFilterModelActive = ref(false);
const statusFilterModelActive = ref(false);

const isFreeFilterActive = ref(false);

const resetfilter = () => {
  statusSelectedFilter.value = "all";
  publishedFilterOption.value = "all";
  publishedOnFilterModelActive.value = false;
  statusFilterModelActive.value = false;
  isFreeFilterActive.value = false;
};

const filteredItems = computed(() => {
  let filtered = items.value;
  const search = new RegExp(searchQuery.value, "i");

  if (searchQuery.value) {
    filtered = filtered.filter((item) => {
      return search
        ? item.CourseID.match(search) || item.title.match(search)
        : true;
    });
  }


  if (statusSelectedFilter.value !== "all") {
    filtered = filtered.filter((item) => {
      return item.status === statusSelectedFilter.value;
    });
  }

  totalPages.value = Math.ceil(filtered.length / perPage);
  const start = currentPage.value * perPage;
  const end = (currentPage.value + 1) * perPage;

  return filtered.slice(start, end);
});

const layoutStore = useLayoutStore();
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
<template>
  <NuxtLayout name="lmsstudent">
    <div class="px-6">
      <div class="p-5">
        <div>
          <p class="font-bold text-xl">Welcome Back, S</p>
        </div>
        <div class="mt-10">
          <p class="font-bold text-xl">All Courses</p>
        </div>

        <form class="relative my-4" @submit.prevent="submit">
          <label for="msg-search" class="sr-only">Search</label>
          <input
            id="msg-search"
            class="form-input w-full pl-9 focus:border-slate-300"
            type="search"
            v-model="searchQuery"
            placeholder="Search "
          />
          <button class="absolute inset-0 right-auto group" aria-label="Search">
            <svg
              class="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
              />
              <path
                d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
              />
            </svg>
          </button>
        </form>

        <div class="flex justify-between">
          <div class="flex items-start gap-y-4 flex-wrap">
            <div class="relative mr-4">
              <p>filter by:</p>
            </div>

            <div class="relative mr-4">
              <div
                @click="statusFilterModelActive = !statusFilterModelActive"
                class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
              >
                <p
                  role=""
                  tabindex="-1"
                  class="break-words text-body text-darkSlate01 false flex-grow leading-none"
                >
                  Status
                </p>
              </div>
              <div
                class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black"
                v-if="statusFilterModelActive"
              >
                <PremFormControl
                  :options="statusOptions"
                  v-model="statusSelectedFilter"
                />
              </div>
            </div>
          </div>

          <div
            class="flex-end mr-4 p-[0.6rem] underline cursor-pointer leading-none"
            @click="resetfilter"
          >
            <p
              role=""
              tabindex="-1"
              class="break-words text-body text-darkSlate01 false"
            >
              Reset Fiters
            </p>
          </div>
        </div>

        <BaseDivider />

        <div class="text-gray-500 mb-7 dark:text-white">
          <span>{{ filteredItems.length }} Courses </span>
        </div>

        <div
          class="grid max-sm:grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div
            class="rounded-md mt-4 overflow-hidden border border-[rgba(0,0,0,0.2)] dark:border-[rgba(256,256,256,0.2)] max-w-xs hover:scale-105 cursor-pointer transition-transform"
            v-for="item in filteredItems"
          >
            <div
              class="h-44 w-full bg-cover bg-center bg-no-repeat"
              :style="'background-image: url(' + image + ')'"
            ></div>
            <div class="px-4 h-auto">
              <p class="font-medium h-12">{{ item.title }}</p>
              <div class="w-full flex justify-center items-center gap-4 h-4">
                <progress class="h-1 w-3/5" :value="item.percentCompleted" max="100"></progress> {{item.percentCompleted}}%
              </div>
            </div>
            <div class="w-full  border-t mt-4"></div>
            <div class="grid grid-cols-2 gap-0 h-16">
                <NuxtLink to="#" class="flex flex-wrap items-center justify-center border-r hover:scale-105 cursor-pointer transition-transform ">

                    <BaseIcon :path="mdiOpenInNew" />
                    <p>See Overview</p>
                </NuxtLink>
                <NuxtLink to="#" class="flex flex-wrap items-center justify-center  hover:scale-105 cursor-pointer transition-transform ">

                    <BaseIcon :path="mdiPlay" />
                    <p>Go To Course</p>
                </NuxtLink> 
            </div>
          </div>
        </div>

        <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
          <BaseLevel>
            <BaseButtons>
              <BaseButton
                v-for="page in totalPages"
                :key="page"
                :active="page - 1 === currentPage"
                :label="page"
                :color="page - 1 === currentPage ? 'lightDark' : 'whiteDark'"
                small
                @click="currentPage = page - 1"
              />
            </BaseButtons>
            <small>Page {{ currentPage + 1 }} of {{ totalPages }}</small>
          </BaseLevel>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped></style>
