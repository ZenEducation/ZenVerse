<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import {
  mdiDancePole,
  mdiInformationBoxOutline,
  mdiPlus,
  mdiArrowLeft,
} from "@mdi/js";
import { mdiGrid, mdiFormatListBulleted } from "@mdi/js";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import image from "@/assets/img/bundleImage.png";
import { useLayoutStore } from "@/stores/layout.js";
import { useRouter, useRoute } from "vue-router";
import { API } from "aws-amplify";
import { getTestSeries } from "~~/src/graphql/queries";
const route = useRoute();
const testId = route.params.id;

onMounted(async () => {
  try {
    let resp = await API.graphql({
      query: getTestSeries,
      variables: { id: testId }
    })
    console.log(resp.data.getTestSeries.MockTests.items);
    items.value = resp.data.getTestSeries.MockTests.items.map((item) => item.mockTest);
    console.log(items.value);
    title.value = resp.data.getTestSeries.name

  } catch (error) {
    window.alert("Error fetching Mock Tests:", error?.errors?.[0]?.message);

  }

})


const items = ref([]);
const title = ref("Test Series")

const publishDateOptions = ["all", "before", "on", "after", "between"];
const statusOptions = [
  "all",
  "Live",
  "Unpublished",
  "Scheduled",
];
const statusSelectedFilter = ref("all");
const searchQuery = ref("");
const publishedFilterOption = ref("all");
const publishedFilterDate = ref("");
const publishedFilterStartDate = ref("");
const publishedFilterEndDate = ref("");
const isFreeFilterActive = ref(false);

const perPage = 16;
const totalPages = ref(1);
const currentPage = ref(0);
const publishedOnFilterModelActive = ref(false);
const statusFilterModelActive = ref(false);

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
        ? item.TestSeriesID.match(search) || item.name.match(search)
        : true;
    });
  }

  if (isFreeFilterActive.value) {
    filtered = filtered.filter((item) => {
      return item.isFree;
    });
  }

  if (statusSelectedFilter.value !== "all") {
    filtered = filtered.filter((item) => {
      return item.publishingStatus === statusSelectedFilter.value;
    });
  }

  if (publishedFilterOption.value !== "all") {
    filtered = filtered.filter((item) => {
      const publishingDate = new Date(item.publishingDate);

      if (
        publishedFilterOption.value === "on" &&
        publishedFilterDate.value != ""
      ) {
        const filterDate = new Date(publishedFilterDate.value);
        return publishingDate.toDateString() === filterDate.toDateString();
      } else if (
        publishedFilterOption.value === "before" &&
        publishedFilterDate.value != ""
      ) {
        const filterDate = new Date(publishedFilterDate.value);
        return publishingDate < filterDate;
      } else if (
        publishedFilterOption.value === "after" &&
        publishedFilterDate.value != ""
      ) {
        const filterDate = new Date(publishedFilterDate.value);
        return publishingDate > filterDate;
      } else if (
        publishedFilterOption.value === "between" &&
        publishedFilterStartDate.value &&
        publishedFilterEndDate.value
      ) {
        const startDate = new Date(publishedFilterStartDate.value);
        const endDate = new Date(publishedFilterEndDate.value);
        return publishingDate >= startDate && publishingDate <= endDate;
      } else {
        return true;
      }
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
  <NuxtLayout name="lmsadmin">
    <div class="px-6">
      <NuxtLink to="/examPortal/tests/TestDashboard" class="h-10 flex items-center border-b">
        <BaseIcon :path="mdiArrowLeft" />
        Back
      </NuxtLink>
      <div class="p-5">
        <div class="flex flex-wrap justify-between items-center">
          <div>
            <p class="font-bold text-xl">{{title}}</p>
            <p class="text-sm">Manage and add products to your Test Series</p>
          </div>
          <div class="flex flex-wrap gap-4 mt-4 items-center">
            <div class="flex flex-wrap gap-0 items-center">
              <BaseButton :icon="mdiFormatListBulleted" :color="colors[0]" @click="() => {
                  isGrid = false;
                }
                " />
              <BaseButton :icon="mdiGrid" :color="colors[1]" @click="() => {
                  isGrid = true;
                }
                " />
            </div>
            <div class="flex flex-wrap gap-4 items-center">
              <a :href="'/examportal/tests/TestSetting/' + testId">

                <BaseButton color="lightDark" label="Edit" small />
              </a>
              <NuxtLink :to="'/examportal/tests/TestSetting/'+ testId + '/?tab=8'">

                <BaseButton color="lightDark" label="Re order" small />
              </NuxtLink>
              <NuxtLink :to="'/examportal/tests/TestSetting/'+ testId + '/?tab=7'">

                <BaseButton color="info" :icon="mdiPlus" label="Add Product" small />
              </NuxtLink>
              <NuxtLink :to="'/examportal/tests/TestSetting/'+ testId + '/?tab=3'">

                <BaseButton color="info" icon="" label="Manage User" small />
              </NuxtLink>
            </div>
          </div>
        </div>

        <form class="relative my-4" @submit.prevent="submit">
          <label for="msg-search" class="sr-only">Search</label>
          <input id="msg-search" class="form-input w-full pl-9 focus:border-slate-300" type="search" v-model="searchQuery"
            placeholder="Search by Title or test ID" />
          <button class="absolute inset-0 right-auto group" aria-label="Search">
            <svg class="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2"
              viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
              <path
                d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
            </svg>
          </button>
        </form>

        <div class="lg:flex justify-between">
          <div class="flex items-start gap-y-4 flex-wrap">
            <div class="relative mr-4">
              <p>filter by:</p>
            </div>

            <div class="relative mr-4">
              <div @click="statusFilterModelActive = !statusFilterModelActive"
                class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white">
                <p role="" tabindex="-1" class="break-words text-body text-darkSlate01 false flex-grow leading-none">
                  Status
                </p>
              </div>
              <div class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black"
                v-if="statusFilterModelActive">
                <PremFormControl :options="statusOptions" v-model="statusSelectedFilter" />
              </div>
            </div>
            <div class="relative mr-4">
              <div @click="isFreeFilterActive = !isFreeFilterActive" :class="{ 'bg-green-100': isFreeFilterActive }"
                class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white">
                <p role="" tabindex="-1" class="break-words text-body text-darkSlate01 false flex-grow leading-none">
                  Free
                </p>
              </div>
            </div>
          </div>

          <div class="flex-end mr-4 p-[0.6rem] underline cursor-pointer leading-none" @click="resetfilter">
            <p role="" tabindex="-1" class="break-words text-body text-darkSlate01 false">
              Reset Fiters
            </p>
          </div>
        </div>

        <BaseDivider />

        <div class="text-gray-500 mb-7 dark:text-white">
          <span>{{ filteredItems?.length }} Mock Tests </span>
        </div>
        <template v-if="!isFinalGrid">
          <div class="grid grid-cols-1 gap-4">
            <NuxtLink :to="'/ExamPortal/exam/ExamSetting/' + item.id"
              class="rounded-md overflow-hidden flex justify-between border border-[rgba(0,0,0,0.2)]"
              v-for="item in filteredItems">
              <div class="flex">
                <img :src="image" class="w-40" />
                <div class="px-4 h-auto">
                  <p class="font-medium min-h-18">{{ item.name }}</p>
                  <p class="">{{ item.shortId }}</p>
                  <div class="flex gap-48 max-md:gap-10">
                    <p v-if="item.isFree" class="font-semibold text-sm">Free</p>
                    <p v-else class="font-semibold text-sm">
                      ₹ {{ item.discount }}
                      <span class="line-through font-normal">{{ item.price }}</span>
                    </p>

                    <p class="text-sm">{{ item.isValidityDays ? `${item.validityDays} Days` : `${item.expiryDate}` }}</p>
                  </div>
                </div>
              </div>

              <div class="flex justify-between items-center px-3">
                <div class="flex flex-wrap justify-center gap-2">
                  <BaseButton color="lightDark" label="Mock Test" small />
                  <BaseButton color="" :label="item.publishingStatus" small />
                </div>
                <BaseIcon :path="mdiInformationBoxOutline" />
              </div>
            </NuxtLink>
          </div>
        </template>
        <template v-else>
          <div class="grid max-sm:grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <NuxtLink :to="'/ExamPortal/exam/ExamSetting/' + item.id"
              class="rounded-md overflow-hidden border border-[rgba(0,0,0,0.2)] max-w-xs" v-for="item in filteredItems">
              <div class="h-44 w-full bg-cover bg-center bg-no-repeat" :style="'background-image: url(' + image + ')'">
              </div>
              <div class="px-4 h-auto">
                <p class="font-medium h-12">{{ item.name }}</p>
                <p class="">{{ item.shortId }}</p>
                <div class="flex justify-between">
                  <p v-if="item.isFree" class="font-semibold text-sm">Free</p>
                  <p v-else class="font-semibold text-sm">

                    ₹ {{ item.discount }}
                    <span class="line-through font-normal">{{ item.price }}</span>

                  </p>

                  <p class="text-sm">{{ item.isValidityDays ? `${item.validityDays} Days` : `${item.expiryDate}` }}</p>
                </div>
              </div>
              <div class="w-full my-1 border-t"></div>
              <div class="flex justify-between items-center h-12 px-3">
                <div class="flex flex-wrap gap-2">
                  <BaseButton color="lightDark" label="Mock Test" small />
                  <BaseButton color="" :label="item.publishingStatus" small />
                </div>
                <BaseIcon :path="mdiInformationBoxOutline" />
              </div>
            </NuxtLink>
          </div>
        </template>
        <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
          <BaseLevel>
            <BaseButtons>
              <BaseButton v-for="page in totalPages" :key="page" :active="page - 1 === currentPage" :label="page"
                :color="page - 1 === currentPage ? 'lightDark' : 'whiteDark'" small @click="currentPage = page - 1" />
            </BaseButtons>
            <small>Page {{ currentPage + 1 }} of {{ totalPages }}</small>
          </BaseLevel>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped></style>
