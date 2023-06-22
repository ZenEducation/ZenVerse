<script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { mdiPlus, mdiTrashCan, mdiWindowClose } from "@mdi/js";
import CardBoxModal from "~~/components/Cards/CardBoxModal.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import TableLearnerEnabled from "@/components/Tables/TableLearnerEnabled.vue";
import BaseLevel from "~~/components/Buttons/BaseLevel.vue";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
const list = ref([
  {
    id: 0,
    title: "question 1",
    level: "easy",
    correct: 2,
    wrong: -0.25,
    type: "Multiple Choice",
    isSelected: true,
  },
  {
    id: 1,
    title: "question 2",
    level: "hard",
    correct: 2,
    wrong: -0.25,
    type: "Multiple Choice",
    isSelected: false,
  },
  {
    id: 2,
    title: "question 2",
    level: "hard",
    correct: 2,
    wrong: -0.25,
    type: "Multiple Choice",
    isSelected: false,
  },
  {
    id: 3,
    title: "question 54",
    level: "moderate",
    correct: 4,
    wrong: -2,
    type: "Numerical",
    isSelected: false,
  },
  {
    id: 4,
    title: "question 23",
    level: "hard",
    correct: 1,
    wrong: -0.25,
    type: "Multiple Choice",
    isSelected: false,
  },
]);
const perPage = 10;
const totalPages = ref(1);
const currentPage = ref(0);
const filteredItems = computed(() => {
  let filtered = list.value;
  totalPages.value = Math.ceil(filtered.length / perPage);
  const start = currentPage.value * perPage;
  const end = (currentPage.value + 1) * perPage;

  return filtered.slice(start, end);
});
</script>
<template>
  <div class="absolute top-0 left-0 w-full min-h-[48px] bg-white">
    <div class="border-b w-full flex justify-between items-center px-5 py-2">
      <NuxtLink to="/examportal/exam/editGroup">
        <div
          class="text-[13px] flex items-center justify-center cursor-pointer"
        >
          <img
            class="w-[14px] h-[14px]"
            src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/cb_back.svg"
            alt=""
          />
          <p class="p-2.5">Back</p>
        </div>
      </NuxtLink>
      <div class="pr-16"></div>
    </div>

  </div>

  <CardBox
    class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3 pt-14"
    is-form
    @submit.prevent="submit"
  >
    <div class="px-8 flex justify-between align-middle">

      <p class="font-bold text-lg mt-4">
        {{ "Select Questions( " + (list.length + 1) + " )" }}
        <p class="font-light">
          Note: Questions imported from the question pool or questions added to
          other groups will not be displayed here. Maximum 10 Question are allowed
          to be added to the Group.
        </p>
      </p>
      <NuxtLink to="/examportal/exam/editGroup">

          <BaseButton :icon="mdiPlus" :label="'Add Questions'" :color="'info'" />
        </NuxtLink>
    </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Question Details</th>
            <th>Question Type</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in filteredItems"
            :key="index"
            class="cursor-pointer text-base font-light"
          >
        <TableLearnerEnabled
          data-label="Enabled"
          :checked="item.isSelected"
          @click="item.isSelected = !item.isSelected"
        />
            <th
              data-label="Question Details"
              class="cursor-pointer text-base font-normal"
            >
              {{ item.title }}
              <br>
              <span> {{ item.level + " | " }} </span> <span class="text-green-700"> {{"+" + item.correct + " | " }}</span><span class="text-red-700"> {{ item.wrong }}</span>
              
            </th>
            <th
              data-label="Question Type"
              class="cursor-pointer text-base font-light"
            >
              {{ item.type }}
            </th>

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
  </CardBox>
</template>

<style>
thead {
  display: table-header-group;
}
tr {
  display: table-row;
}
td {
  display: table-cell;
}
tbody {
  display: table-row-group;
}
</style>
