<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import { mdiDancePole, mdiInformationBoxOutline, mdiPlus } from "@mdi/js";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import image from '@/assets/img/bundleImage.png'

const items = ref([
  {
    CourseID: "course1",
    BundleID: "bundle1",
    title: "Mechanics: Newton's Laws of Motion",
    days: 234,
    status: "Published",
    PublishedDate: "2021-10-01",
    isFree: true,
  },
  {
    CourseID: "course2",
    BundleID: "bundle2",
    title: "Thermodynamics: Heat and Temperature",
    days: 123,
    status: "Unpublished",
    PublishedDate: "2022-01-15",
    isFree: false,
  },
  {
    CourseID: "course3",
    BundleID: "bundle1",
    title: "Optics: Geometrical Optics and Reflection",
    days: 456,
    status: "Coming Soon",
    PublishedDate: "2023-05-01",
    isFree: true,
  },
  {
    CourseID: "course4",
    BundleID: "bundle3",
    title: "Electricity and Magnetism: Electric Circuits",
    days: 789,
    status: "Scheduled",
    PublishedDate: "2023-08-10",
    isFree: false,
  },
  {
    CourseID: "course5",
    BundleID: "bundle2",
    title: "Waves: Wave Properties and Sound",
    days: 567,
    status: "Published",
    PublishedDate: "2023-03-25",
    isFree: true,
  },
  {
    CourseID: "course6",
    BundleID: "bundle4",
    title: "Modern Physics: Quantum Mechanics",
    days: 345,
    status: "Published",
    PublishedDate: "2022-06-20",
    isFree: true,
  },
  {
    CourseID: "course7",
    BundleID: "bundle2",
    title: "Electromagnetism: Magnetic Fields and Induction",
    days: 678,
    status: "Unpublished",
    PublishedDate: "2023-01-05",
    isFree: false,
  },
  {
    CourseID: "course8",
    BundleID: "bundle1",
    title: "Astrophysics: Stars and Galaxies",
    days: 456,
    status: "Coming Soon",
    PublishedDate: "2024-02-14",
    isFree: true,
  },
  {
    CourseID: "course9",
    BundleID: "bundle3",
    title: "Nuclear Physics: Radioactivity and Nuclear Reactions",
    days: 987,
    status: "Published",
    PublishedDate: "2022-12-01",
    isFree: true,
  },
  {
    CourseID: "course10",
    BundleID: "bundle4",
    title: "Fluid Mechanics: Fluid Dynamics and Bernoulli's Principle",
    days: 543,
    status: "Published",
    PublishedDate: "2023-09-30",
    isFree: true,
  }
])

const publishDateOptions = ["all", "before", "on", "after", "between"];
const statusOptions = ["all", "Published","Unpublished", "Coming Soon","Scheduled"];
const statusSelectedFilter = ref("all");
const searchQuery = ref("");
const publishedFilterOption = ref("all");
const publishedFilterDate = ref("");
const publishedFilterStartDate = ref("");
const publishedFilterEndDate = ref("");

const perPage = 16;
const totalPages = ref(1);
const currentPage = ref(0);
const publishedOnFilterModelActive = ref(false)
const statusFilterModelActive = ref(false)

const resetfilter = ()=>{
   statusSelectedFilter.value = "all";
   publishedFilterOption.value = "all";
   publishedOnFilterModelActive.value = false;
   statusFilterModelActive.value = false;

}

const filteredItems = computed(() => {
  let filtered = items.value;
  const search = new RegExp(searchQuery.value, "i");

  if (searchQuery.value) {
    filtered = filtered.filter((item) => {
      return search
        ? item.BundleID.match(search) ||
            item.CourseID.match(search) ||
            item.title.match(search)
        : true;
    });
  }

  if(statusSelectedFilter.value !== 'all'){
    filtered = filtered.filter((item) => {
        return item.status === statusSelectedFilter.value;
    })
  }

  if (publishedFilterOption.value !== "all") {
    filtered = filtered.filter((item) => {
      const publishedDate = new Date(item.PublishedDate);

      if (publishedFilterOption.value === "on"  && publishedFilterDate.value != "" ) {
        const filterDate = new Date(publishedFilterDate.value);
        return publishedDate.toDateString() === filterDate.toDateString();
      }

      else if (publishedFilterOption.value === "before" && publishedFilterDate.value != "" ) {
        console.log('object');
        const filterDate = new Date(publishedFilterDate.value);
        return publishedDate < filterDate;
      }

      else if (publishedFilterOption.value === "after"  && publishedFilterDate.value != "") {
        const filterDate = new Date(publishedFilterDate.value);
        return publishedDate > filterDate;
      }

      else if (publishedFilterOption.value === "between" && (publishedFilterStartDate.value && publishedFilterEndDate.value )) {
        const startDate = new Date(publishedFilterStartDate.value);
        const endDate = new Date(publishedFilterEndDate.value);
        return publishedDate >= startDate && publishedDate <= endDate;
      }
      else {
        return true;
      }
    });
  }

  totalPages.value = Math.ceil(filtered.length / perPage);
  const start = currentPage.value * perPage;
  const end = (currentPage.value + 1) * perPage;

  return filtered.slice(start, end);
});



</script>
<template>
    <div>
        <CardBox>
            <BaseDivider/>
            <div class="flex flex-wrap justify-between items-center">
                <div>
                    <p class="font-bold text-xl">Bundles</p>
                    <p class="text-sm">Welcome to your bundle dashboard</p>
                </div>
                <div class="flex flex-wrap gap-4 items-center">
                    <BaseButton
                    color="lightDark"
                    label="Re order"
                    small
                    />
                    <BaseButton
                    color="info"
                    :icon="mdiPlus"
                    label="Create"
                    small
                    />
                </div>

            </div>

            <form class="relative my-4" @submit.prevent="submit">
                <label for="msg-search" class="sr-only">Search</label>
                <input
                  id="msg-search"
                  class="form-input w-full pl-9 focus:border-slate-300"
                  type="search"
                  v-model="searchQuery"
                  placeholder="Search by Course Title/ID or Bundle ID "
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

              <div class="lg:flex justify-between ">

                <div class="flex items-start gap-y-4 flex-wrap">
                  <div  class="relative mr-4">
                    <p>filter by:</p>
                  </div>
                  <div class="relative mr-4">
                    <div @click="publishedOnFilterModelActive = !publishedOnFilterModelActive"
                      class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
                    >
                      <p
                        role=""
                        tabindex="-1"
                        class="break-words text-body text-darkSlate01 false flex-grow leading-none"
                      >
                        Publishing Date
                      </p>
                    </div>
                    <div class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black " v-if="publishedOnFilterModelActive">
                      <PremFormField class="xl:mb-0  min-w-[50%] xl:min-w-[20%] " >
                        <PremFormControl
                          :options="publishDateOptions"
                          v-model="publishedFilterOption"
                        />
                      </PremFormField>
                      <PremFormField class=" min-w-[50%] xl:min-w-[20%] mt-3" v-if= "publishedFilterOption != 'all' && publishedFilterOption != 'between' " >
                        <PremFormControl
                          
                          v-model="publishedFilterDate"
                          type="date"
                        />
                      </PremFormField>
                      <PremFormField
                        class=" min-w-[50%] xl:min-w-[20%] mb-0"
                        v-if="publishedFilterOption == 'between'"
                        label="From"
                      >
                        <PremFormControl 
                          v-model="publishedFilterStartDate"
                          type="date"
                        />
                      </PremFormField>
                      <PremFormField
                        class=" min-w-[50%] xl:min-w-[20%] mb-0"
                        v-if="publishedFilterOption == 'between'"
                        label="To"
                      >
                        <PremFormControl 
                          v-model="publishedFilterEndDate"
                          type="date"
                        />
                      </PremFormField>
              
                    </div>
                  </div>

                  <div class="relative mr-4">
                    <div @click="statusFilterModelActive = !statusFilterModelActive"
                      class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
                    >
                      <p
                        role=""
                        tabindex="-1"
                        class="break-words text-body text-darkSlate01 false flex-grow leading-none"
                      >
                        Publishing Status
                      </p>
                    </div>
                    <div class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black " v-if="statusFilterModelActive">
                      <PremFormControl :options="statusOptions" v-model="statusSelectedFilter"  />
              
              
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
            


            <BaseDivider/>

            <div class="text-gray-500 mb-7 dark:text-white">
              <span>{{ filteredItems.length }} Courses </span>
            </div>

            <div class="grid max-sm:grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
                <div class=" rounded-md overflow-hidden  border border-[rgba(0,0,0,0.2)] max-w-xs" v-for="item in filteredItems" >
                    <div class=" h-44 w-full bg-cover bg-center bg-no-repeat" :style="'background-image: url('+image+')' "></div>
                    <div class="px-4 h-auto">
                        <p class=" font-medium h-12">{{item.title}}</p>
                        <p class="">{{item.BundleID}} | {{item.CourseID}}</p>
                        <div class="flex justify-between">
                            <p v-if="item.isFree" class="font-semibold text-sm"> Free </p>
                            <p v-else class="font-semibold text-sm"> Paid </p>

                            <p class="text-sm ">{{item.days}} Days</p>

                        </div>
                        
                    </div>
                    <div class="w-full my-1 border-t ">

                    </div>
                    <div class="flex justify-between items-center h-12 px-3">
                        <div class="flex flex-wrap gap-2">
                            <BaseButton
                            color="lightDark"
                            label="Mock Test"
                            small

                            />
                            <BaseButton
                            color=""
                            :label="item.status"
                            small

                            />
                        </div>
                        <BaseIcon
                        :path="mdiInformationBoxOutline"
                        />
                        
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
        </CardBox>
    </div>
</template>


<style lang="scss" scoped>

</style>