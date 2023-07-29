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
          <p class="mt-2 font-semibold text-lg">
            Content <span class="px-1.5 rounded-[50%] bg-slate-300">0</span>
          </p>
          <div class="mt-4 border">
            <div class="p-3 border-b flex justify-between">
              <PremFormControl placeholder="Search in Bundle....." v-model="searchQuery" />
              <PremFormControl selected="JEE" :options="options" v-model="statusSelectedFilter" class=" w-32" />
            </div>
            <div class="h-80 max-md:h-auto overflow-y-scroll scrollbar-thin">
              <NuxtLink to="/examportal/learner/mocktest" class="flex p-3" v-for="item in filteredItems" >
                <img :src="image" class="w-1/4 rounded" alt="" />
                <div class="p-3">
                  <p class="text-lg">{{item.title}}</p>
                  <p class="text-xs">Test + Live</p>
                </div>
              </NuxtLink>
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
        <div class="w-1/3 max-md:w-full max-md:h-auto h-screen pt-20 text-xs px-4">
          <CardBox class="max-w-sm">
            <img :src="image" alt="" srcset="" />
            <p class="border-b-2 pb-2 flex items-center">
              <BaseIcon :path="mdiTimerOutline" /><span> Valid for 643 Days</span>
            </p>
            <p class="py-2 font-medium">What's Included</p>
            <p class="pb-2 flex items-center">
              <BaseIcon :path="mdiFileOutline" /><span class="font-medium">
                10</span
              >
              Tests
            </p>
          </CardBox>
        </div>
      </div>
    </NuxtLayout>
  </template>
  
  <script setup>
  import CardBox from "@/components/Cards/CardBox.vue";
  import PremFormField from "@/components/Forms/FormField.vue";
  import PremFormControl from "@/components/Forms/FormControl.vue";
  import BaseButton from "@/components/Buttons/BaseButton.vue";
  import {
    mdiFile,
    mdiFileOutline,
    mdiPlus,
    mdiTimer,
    mdiTimerOutline,
    mdiTrashCan,
    mdiWindowClose,
  } from "@mdi/js";
  import CardBoxModal from "~~/components/Cards/CardBoxModal.vue";
  import BaseIcon from "~~/components/Display/BaseIcon.vue";
  import VerticalBarChart from "~~/components/Charts/VerticalBarChart.vue";
  import HorizontalBarChart from "~~/components/Charts/HorizontalBarChart.vue";
  import image from "@/assets/img/bundleImage.png";
  
  const items = ref([
    {
      title: "JEE Main | FSTs | v01 ",
      tests: 10,
      types: ["test", "live"],
      status:'live'
    },
    {
      title: "JEE Main | FSTs | v02 ",
      tests: 10,
      types: ["test"],
      status:'completed'
  
    },
    {
      title: "JEE Main | FSTs | v03 ",
      tests: 10,
      types: ["live"],
      status:'upcoming'
  
    },
    {
      title: "JEE Main | FSTs | v04 ",
      tests: 10,
      types: ["test", "live"],
      status:'live'
  
    },
  ]);
  const perPage = 16;
const totalPages = ref(1);
const currentPage = ref(0);

  const searchQuery = ref('');
  const options = ['all','live' , 'completed' , 'upcoming']
  const statusSelectedFilter = ref(options[0])
  const filteredItems = computed(() => {
  let filtered = items.value;
  const search = new RegExp(searchQuery.value, "i");

  if (searchQuery.value) {
    filtered = filtered.filter((item) => {
      return search
        ? item.title.match(search) 
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
  </script>
  
  <style lang="scss" scoped></style>
  