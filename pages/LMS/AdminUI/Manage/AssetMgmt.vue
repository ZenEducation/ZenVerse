<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import { mdiPencil, mdiTrashCan } from "@mdi/js";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import TableLearnerEnabled from "@/components/Tables/TableLearnerEnabled.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import UserAvatar from "@/components/Avatars/UserAvatar";
import PremFormField from "@/components/Forms/PremFormField.vue";
import PremFormControl from "@/components/Forms/PremFormControl.vue";
import FormCheckRadioGroup from "~~/components/Forms/FormCheckRadioGroup.vue";
import { adminPanelButtonMenu } from "@/configs/adminPanelButtonMenu.js";
import {
  mdiDotsVertical,
  mdiWindowClose,
  mdiAccount,
  mdiMail,
  mdiCellphone,
  mdiAsterisk,
  mdiFormTextboxPassword,
} from "@mdi/js";
import BaseIcon from "~~/components/Display/BaseIcon.vue";

import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";

defineProps({
  checkable: { type: Boolean, default: false },
});
const mainStore = useMainStore();
const deleteItemId = ref("");
const EnableItemId = ref("");

const isModalActive = ref(false);
const previewItem = ref(4);
const handlePreview = (index)=>{
  previewItem.value = index;
  isModalActive.value = true;
}

const items = ref([
  {
    id: 1,
    title: "B10. Genetics[Ex Sols]",
    course: "prayaag | Class 8 | Biology",
    type: "PDF",
    size: "432.7KB",
    createdBy: "Acad",
    createdDate: "20 May, 2023",
    modifiedBy: "Sam",
    modifiedDate: "23 May, 2023",
  },
  {
    id: 2,
    title: "Introduction to Genetics",
    course: "prayaag | Class 10 | Biology",
    type: "video",
    size: "24.5MB",
    createdBy: "Acad",
    createdDate: "15 June, 2023",
    modifiedBy: "Jane",
    modifiedDate: "18 June, 2023",
  },
  {
    id: 3,
    title: "Biology Genetics Basics",
    course: "prayaag | Class 9 | Biology",
    type: "ppt",
    size: "1.2MB",
    createdBy: "Acad",
    createdDate: "10 April, 2023",
    modifiedBy: "John",
    modifiedDate: "12 April, 2023",
  },
  {
    id: 4,
    title: "Genetics Lab Experiment",
    course: "prayaag | Class 11 | Biology",
    type: "video",
    size: "128MB",
    createdBy: "Acad",
    createdDate: "5 March, 2023",
    modifiedBy: "Sarah",
    modifiedDate: "8 March, 2023",
  },
  {
    id: 5,
    title: "Advanced Topics in Genetics",
    course: "prayaag | Class 12 | Biology",
    type: "ppt",
    size: "3.5MB",
    createdBy: "Acad",
    createdDate: "1 February, 2023",
    modifiedBy: "Alex",
    modifiedDate: "4 February, 2023",
  },
  {
    id: 6,
    title: "Genetics Lecture Audio",
    course: "prayaag | Class 8 | Biology",
    type: "audio",
    size: "5.7MB",
    createdBy: "Acad",
    createdDate: "25 July, 2023",
    modifiedBy: "Emma",
    modifiedDate: "28 July, 2023",
  },
  {
    id: 7,
    title: "Mendelian Genetics Explained",
    course: "prayaag | Class 10 | Biology",
    type: "video",
    size: "62.3MB",
    createdBy: "Acad",
    createdDate: "20 September, 2023",
    modifiedBy: "David",
    modifiedDate: "23 September, 2023",
  },
  {
    id: 8,
    title: "Genetic Engineering Concepts",
    course: "prayaag | Class 11 | Biology",
    type: "ppt",
    size: "2.8MB",
    createdBy: "Acad",
    createdDate: "15 August, 2023",
    modifiedBy: "Sophia",
    modifiedDate: "18 August, 2023",
  },
]);
let uniqueCourseNames = [];
items.value.forEach((asset) => {
  if (!uniqueCourseNames.includes(asset.course)) {
    uniqueCourseNames.push(asset.course);
  }
});

const courseSearchQuery = ref("");
const filteredCourses = computed(() => {
  let filtered = uniqueCourseNames;
  if (courseSearchQuery.value.length > 0) {
    filtered = filtered.filter((item) => {
      return item.toLowerCase().includes(courseSearchQuery.value.toLowerCase());
    });
  }
  return filtered;
});
const coursesFilterSelected = ref([]);
console.log(coursesFilterSelected.value);

const joinDateOptions = ["all", "before", "on", "after", "between"];
const assetTypeOptions = ["all", "PDF", "video", "ppt", "audio"];
const assetTypeSelectedFilter = ref("all");
const searchQuery = ref("");
const modifiedDateFilterOption = ref("all");
const modifiedDateFilterDate = ref("");
const modifiedDateFilterStartDate = ref("");
const modifiedDateFilterEndDate = ref("");
const perPage = 25;
const totalPages = ref(1);
const currentPage = ref(0);
const assetTypeFilterModelActive = ref(false);
const modifiedDateFilterModelActive = ref(false);
const courseFilterModelActive = ref(false);

const resetfilter = () => {
  assetTypeSelectedFilter.value = "all";
  modifiedDateFilterOption.value = "all";
  assetTypeFilterModelActive.value = false;
  modifiedDateFilterModelActive.value = false;
  searchQuery.value = "";
  courseFilterModelActive.value = false;
  courseSearchQuery.value = "";
  coursesFilterSelected.value = [];
};

const filteredItems = computed(() => {
  console.log(coursesFilterSelected.value);
  let filtered = items.value;
  const search = new RegExp(searchQuery.value, "i");

  if (searchQuery.value) {
    filtered = filtered.filter((item) => {
      return search
        ? item.title.match(search) || item.course.match(search)
        : true;
    });
  }

  if (assetTypeSelectedFilter.value != "all") {
    filtered = filtered.filter((item) => {
      return item.type == assetTypeSelectedFilter.value;
    });
  }

  if (
    (coursesFilterSelected.value.length > 0) &
    (coursesFilterSelected != ["on"])
  ) {
    filtered = filtered.filter((item) => {
      return coursesFilterSelected.value.includes(item.course);
    });
  }

  if (modifiedDateFilterOption.value !== "all") {
    filtered = filtered.filter((item) => {
      const modifiedDateDate = new Date(item.modifiedDate);

      if (
        modifiedDateFilterOption.value === "on" &&
        modifiedDateFilterDate.value
      ) {
        const filterDate = new Date(modifiedDateFilterDate.value);
        return modifiedDateDate.toDateString() === filterDate.toDateString();
      } else if (
        modifiedDateFilterOption.value === "before" &&
        modifiedDateFilterDate.value
      ) {
        const filterDate = new Date(modifiedDateFilterDate.value);
        return modifiedDateDate < filterDate;
      } else if (
        modifiedDateFilterOption.value === "after" &&
        modifiedDateFilterDate.value
      ) {
        const filterDate = new Date(modifiedDateFilterDate.value);
        return modifiedDateDate > filterDate;
      } else if (
        modifiedDateFilterOption.value === "between" &&
        modifiedDateFilterStartDate.value &&
        modifiedDateFilterEndDate.value
      ) {
        const startDate = new Date(modifiedDateFilterStartDate.value);
        const endDate = new Date(modifiedDateFilterEndDate.value);
        return modifiedDateDate >= startDate && modifiedDateDate <= endDate;
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
</script>
<template>
  <CardBoxModal v-model="isModalActive" :showFooter="false" title="">
    <header
      class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
    >
      <div class="text-gray-500">
        <BaseIcon v-if="mdiAccountPlus" :path="mdiAccountPlus" :size="32" />
      </div>
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">preview</h1>
      </div>
      <div class="text-gray-500 cursor-pointer" @click="isModalActive = false">
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>
    <div class="w-full">
      <img
        src="@/assets/img/indexremovebgpreview.png"
        class="w-full mb-8"
        alt=""
      />
      <p  class="font-semibold px-4 text-lg" >{{ items.at(previewItem).title }}</p>
      <div class="grid grid-cols-2 px-4">
        <p class="font-semibold">Type :</p>
        <p>{{ items.at(previewItem).type }}</p>
        <p class="font-semibold">Size :</p>
        <p>{{ items.at(previewItem).size }}</p>
        <p class="font-semibold">Modified Date :</p>
        <p>{{ items.at(previewItem).modifiedDate }}</p>
        <p class="font-semibold">Created Date :</p>
        <p>{{ items.at(previewItem).createdDate }}</p>
        <p class="font-semibold">Created By :</p>
        <p>{{items.at(previewItem).createdBy}}</p>
        <NavBarBaseDivider/>
        <NavBarBaseDivider/>
        <p class="font-semibold">Courses</p>
        <p>{{ items.at(previewItem).course }}</p>

      </div>
      <div class="flex justify-evenly my-6">
        <BaseButton
        label="Edit"
        color="info"
        />
        <BaseButton
        label="Download"
        color="info"
        />
        <BaseButton
        label="Delete"
        color="danger"
        />
      </div>

    </div>
  </CardBoxModal>

  <NuxtLayout name="lmsadmin">
    <div
      class="flex justify-between border-b border-gray-300 p-2 mt-5 xl:max-w-7xl xl:mx-auto bg-gray-100 rounded dark:bg-gray-700"
    >
      <div class="heading">
        <h1 class="font-bold text-2xl">Asset Library</h1>
        <h3 class="font-thin text-xs text-gray-500 py-1 dark:text-white">
          Re-use your course content with easr. Learn more
        </h3>
      </div>
      <BaseButtons type="ml-auto xl:mr-4 mr-1">
        <BaseButton class="flex-1" type="info" label="Upload" color="info" />
      </BaseButtons>
    </div>
    <div class="flex flex-col gap-4 mx-10 xl:max-w-7xl xl:mx-auto pt-10">
      <form class="relative" @submit.prevent="submit">
        <label for="msg-search" class="sr-only">Search</label>
        <input
          id="msg-search"
          class="form-input w-full pl-9 focus:border-slate-300"
          type="search"
          v-model="searchQuery"
          placeholder="Search by Name"
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

      <div class="lg:flex justify-between">
        <div class="flex items-start gap-y-4 flex-wrap">
          <div class="relative mr-4">
            <p>filter by:</p>
          </div>
          <div class="relative mr-4">
            <div
              @click="courseFilterModelActive = !courseFilterModelActive"
              class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
            >
              <p
                role=""
                tabindex="-1"
                class="break-words text-body text-darkSlate01 false flex-grow leading-none"
              >
                Course
              </p>
            </div>
            <div
              class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black"
              v-if="courseFilterModelActive"
            >
              <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]">
                <PremFormControl v-model="courseSearchQuery" />
              </PremFormField>
              <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]">
                <label v-for="item in filteredCourses">
                  <input
                    type="checkbox"
                    :value="item"
                    class="my-2"
                    v-model="coursesFilterSelected"
                  />
                  {{ item }}
                  <br />
                </label>
              </PremFormField>
            </div>
          </div>
          <div class="relative mr-4">
            <div
              @click="
                modifiedDateFilterModelActive = !modifiedDateFilterModelActive
              "
              class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
            >
              <p
                role=""
                tabindex="-1"
                class="break-words text-body text-darkSlate01 false flex-grow leading-none"
              >
                Modified Date
              </p>
            </div>
            <div
              class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black"
              v-if="modifiedDateFilterModelActive"
            >
              <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]">
                <PremFormControl
                  :options="joinDateOptions"
                  v-model="modifiedDateFilterOption"
                />
              </PremFormField>
              <PremFormField
                class="mt-3 min-w-[50%] xl:min-w-[20%]"
                v-if="
                  modifiedDateFilterOption != 'all' &&
                  modifiedDateFilterOption != 'between'
                "
              >
                <PremFormControl v-model="modifiedDateFilterDate" type="date" />
              </PremFormField>
              <PremFormField
                class="xl:mb-0 min-w-[50%] xl:min-w-[20%]"
                v-if="modifiedDateFilterOption == 'between'"
                label="From"
              >
                <PremFormControl
                  v-model="modifiedDateFilterStartDate"
                  type="date"
                />
              </PremFormField>
              <PremFormField
                class="xl:mb-0 min-w-[50%] xl:min-w-[20%]"
                v-if="modifiedDateFilterOption == 'between'"
                label="To"
              >
                <PremFormControl
                  v-model="modifiedDateFilterEndDate"
                  type="date"
                />
              </PremFormField>
            </div>
          </div>
          <div class="relative mr-4">
            <div
              @click="assetTypeFilterModelActive = !assetTypeFilterModelActive"
              class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
            >
              <p
                role=""
                tabindex="-1"
                class="break-words text-body text-darkSlate01 false flex-grow leading-none"
              >
                Type
              </p>
            </div>
            <div
              class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black"
              v-if="assetTypeFilterModelActive"
            >
              <PremFormControl
                :options="assetTypeOptions"
                v-model="assetTypeSelectedFilter"
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

      <div class="text-gray-500 dark:text-white">
        <span>{{ filteredItems.length }} Files</span>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Size</th>
            <th>Created On</th>
            <th>Created By</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(learners,index) in filteredItems" :key="learners.id" @click="handlePreview(index)" >
            <td data-label="Title">
              <div class="flex gap-4">
                <img
                  src="@/assets/img/indexremovebgpreview.png"
                  class="h-8 w-8"
                  alt=""
                />
                <div>
                  <p class="text-lg">{{ learners.title }}</p>
                  <p class="text-xs">{{ learners.course }}</p>
                </div>
              </div>
            </td>
            <td data-label="Type">
              {{ learners.type }}
            </td>
            <td data-label="Size">
              {{ learners.size }}
            </td>

            <td data-label="Created On" class="lg:w-1 whitespace-nowrap">
              <small
                class="text-gray-500 dark:text-slate-400"
                :title="learners.modifiedDate"
                >{{ learners.modifiedDate }}</small
              >
            </td>
            <td data-label="Created By">
              {{ learners.createdBy }}
            </td>
          </tr>
        </tbody>
      </table>
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
  </NuxtLayout>
</template>

<style lang="scss" scoped></style>
