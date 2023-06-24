<script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { mdiPlus, mdiTrashCan, mdiWindowClose } from "@mdi/js";
import CardBoxModal from "~~/components/Cards/CardBoxModal.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";

const list = ref([
  {
    id: 0,
    title: "Group 1",
    level: "easy",
    questions: 20,
  },
  {
    id: 1,
    title: "Group 2",
    level: "hard",
    questions: 34,
  },
]);
const isAddDataActive = ref(false);
const NewFormData = ref({
  title: "",
  level: "",
  questions: 0,
});
const addNewFormData = () => {
  list.value.push(NewFormData.value);
  isAddDataActive.value = false;
};
</script>
<template>
  <div class="absolute top-0 left-0 w-full min-h-[48px] bg-white">
    <div class="border-b w-full flex justify-between items-center px-5 py-2">
      <NuxtLink to="/examportal/exam/edit-page">
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
  <CardBoxModal v-model="isAddDataActive" :showFooter="false" title="">
    <header
      class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
    >
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Add New Group</h1>
      </div>
      <div
        class="text-gray-500 cursor-pointer"
        @click="isAddDataActive = false"
      >
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>

    <CardBox class="" is-form @submit.prevent="submitProfile">
      <PremFormField label="Name">
        <PremFormControl v-model="NewFormData.title" />
      </PremFormField>
      <PremFormField label="Difficulty Level">
        <PremFormControl
          v-model="NewFormData.level"
          :options="['easy', 'moderate', 'hard']"
        />
      </PremFormField>

      <div class="flex justify-end py-2">
        <BaseButtons>
          <BaseButton color="info" label="Submit" @click="addNewFormData" />
        </BaseButtons>
      </div>
    </CardBox>
  </CardBoxModal>

  <CardBox
    class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3 pt-14"
    is-form
    @submit.prevent="submit"
  >
    <div class="px-8 flex justify-between align-middle">
      <p class="font-bold text-lg mt-4">Groups</p>
      <BaseButton
        :icon="mdiPlus"
        :label="'Create Group'"
        :color="'info'"
        @click="isAddDataActive = true"
      />
    </div>

    <NuxtLink to="/examportal/exam/editGroup" >
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Group Name</th>
          <th>Difficulty level</th>
          <th>Questions</th>
        </tr>
      </thead>
      <tbody>
          <tr
            v-for="(item, index) in list"
            :key="index"
            class="cursor-pointer text-base font-light"
          >
            <th data-label="#" class="cursor-pointer text-base font-light">
              {{ index + 1 }}
            </th>
            <th
              data-label="Group Name"
              class="cursor-pointer text-base font-light"
            >
              {{ item.title }}
            </th>
            <th
              data-label="Difficulty Level"
              class="cursor-pointer text-base font-light"
            >
              {{ item.level }}
            </th>
            <th
              data-label="Questions"
              class="cursor-pointer text-base font-light"
            >
              {{ item.questions }}
            </th>
          </tr>
        </tbody>
    </table>
</NuxtLink>
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
