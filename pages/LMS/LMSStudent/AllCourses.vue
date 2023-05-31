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

const items = ref([
  {
    ID: "AAC432",
    title: "Mechanics: Newton's Laws of Motion",
    status: "Published",
    type: 'Lessons',
    quantity: 4,
    isFree: true,
    category: "Courses",
  },
  {
    ID: "BCD123",
    title: "Thermodynamics: Heat and Temperature",
    status: "Unpublished",
    type: 'Tests',
    quantity: 2,
    isFree: false,
    category: "Mock test",
  },
  {
    ID: "DEF789",
    title: "Optics: Geometrical Optics and Reflection",
    status: "Coming Soon",
    type: 'Courses',
    quantity: 8,
    isFree: true,
    category: "Bundle",
  },
  {
    ID: "EFG456",
    title: "Electricity and Magnetism: Electric Circuits",
    status: "Scheduled",
    type: 'Tests',
    quantity: 3,
    isFree: false,
    category: "test series",
  },
  {
    ID: "GHI654",
    title: "Waves: Wave Properties and Sound",
    status: "Published",
    type: 'Lessons',
    quantity: 6,
    isFree: true,
    category: "Courses",
  },
]);
const currentTab = ref("X");
const searchQuery = ref("");


const perPage = 16;
const totalPages = ref(1);
const currentPage = ref(0);





const filteredItems = computed(() => {
  let filtered = items.value;
  const search = new RegExp(searchQuery.value, "i");

  if (searchQuery.value) {
    filtered = filtered.filter((item) => {
      return search
        ? item.ID.match(search) || item.title.match(search)
        : true;
    });
  }

  if(currentTab.value!= "X" ){
    filtered = filtered.filter((item) => {
        return item.category == currentTab.value;
    })
  }

  totalPages.value = Math.ceil(filtered.length / perPage);
  const start = currentPage.value * perPage;
  const end = (currentPage.value + 1) * perPage;

  return filtered.slice(start, end);
});






</script>
<template>
  <NuxtLayout name="lmsstudent">
    <div class="px-6">
      <div class="p-5">

        <div class="mt-10">
          <p class="font-bold text-3xl">All Courses</p>
        </div>

        <div class="w-full flex gap-5 items-center justify-start my-4">
            <div class="cursor-pointer" :class="{'text-blue-500 border-b border-b-blue-500':currentTab=='X'}" @click="()=>{currentTab = 'X'; searchQuery = ''}">
                <p class="pb-2">All Courses</p>
            </div>
            <div class="cursor-pointer" :class="{'text-blue-500 border-b border-b-blue-500':currentTab=='A'}" @click="()=>{currentTab = 'Courses'; searchQuery = ''}">
                <p class="pb-2">Courses</p>
            </div>
            <div class="cursor-pointer" :class="{'text-blue-500 border-b border-b-blue-500':currentTab=='B'}" @click="()=>{currentTab = 'Bundle'; searchQuery = ''}">
                <p class="pb-2">Bundles</p>
            </div>
            <div class="cursor-pointer" :class="{'text-blue-500 border-b border-b-blue-500':currentTab=='C'}" @click="()=>{currentTab = 'Mock test'; searchQuery = ''}">
                <p class="pb-2">Mock Tests</p>
            </div>
            <div class="cursor-pointer" :class="{'text-blue-500 border-b border-b-blue-500':currentTab=='D'}" @click="()=>{currentTab = 'test series'; searchQuery = ''}">
                <p class="pb-2">Test Series</p>
            </div>
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





        <BaseDivider />

        <div
          class="grid max-sm:grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div
            class="rounded-md overflow-hidden mt-4 border border-[rgba(0,0,0,0.2)] dark:border-[rgba(256,256,256,0.2)] max-w-xs hover:scale-105 cursor-pointer transition-transform"
            v-for="item in filteredItems"
          >
            <div
              class="h-44 w-full bg-cover bg-center bg-no-repeat relative"
              :style="'background-image: url(' + image + ')'"
            ></div>
            <div  class="flex justify-center relative mb-8 top-[-20px]">
                <div v-if="item.isFree" class="px-4  py-2 bg-white absolute border-2 border-green-500 " >
                    <p>Free</p>
                </div>
            </div>

            <div class="px-4 h-auto">
              <p class="font-medium h-12">{{ item.title }}</p>
            </div>
            <div class="w-full  border-t mt-4"></div>
            <div class="flex items-center justify-center h-16">
                <div to="#" class="flex flex-1 flex-wrap items-center justify-center hover:scale-105 cursor-pointer transition-transform ">

                    
                    <p> <span class="font-semibold">{{item.type}}</span> : {{item.quantity}}</p>
                </div> 
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
