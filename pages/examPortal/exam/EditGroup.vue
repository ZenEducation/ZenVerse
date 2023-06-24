<template>
  <div class="absolute z-30 top-0 left-0 w-full min-h-[48px] bg-white">
    <div class="border-b w-full flex justify-between items-center px-5 py-2">
      <NuxtLink to="/examportal/exam/groupList">
        <div
          class="text-[13px] flex items-center justify-center cursor-pointer"
        >
          <img
            class="w-[14px] h-[14px]"
            src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/cb_back.svg"
            alt=""
          />
          <p class="p-2.5">Back to Group 1</p>
        </div>
      </NuxtLink>
      <div class="pr-16"></div>
    </div>
    <div class="border-b w-full flex justify-between items-center px-16 py-2">
      <div class="flex justify-center items-center"></div>
      <div class="flex justify-center items-center gap-5">
        <BaseButton :icon="mdiTrashCan" color="danger" />
        <BaseButton label="Save" color="info" />
      </div>
    </div>
  </div>
  <div class="pt-28 h-screen max-md:block max-md:overflow-y-scroll scrollbar-thin  w-full flex">
    <!-- sidebar -->
    <div class="w-1/4  max-md:w-5/6 max-md:mx-auto px-4 py-6 overflow-y-auto scroll-m-0 scrollbar-w-1">
      <!-- if Settings  -->
      <p class="font-semibold text-lg">Question Settings</p>
      <PremFormField label="Difficulty Level">
        <PremFormControl :options="['Easy', 'Medium', 'Hard']" />
      </PremFormField>
    </div>
    <div class="w-3/4  max-md:w-5/6 max-md:mx-auto p-4 overflow-y-auto scroll-m-0 scrollbar-w-1">
      <!-- Main Content -->
      <div class="flex flex-col">
        <CardBox>
          <PremFormField label="Group Name">
            <PremFormControl placeholder="Enter your Group Name" />
          </PremFormField>
          <p class="font-bold">Instructions : </p>
          <p class="text-xs">
            Note: Students will see this group instruction instead of the
            question instructions
          </p>
          <QuilEditor class="py-2" v-model="question.instruction" />
          <PremFormField label="Select Section">
            <PremFormControl
              :options="['Section 1', 'Section 2', 'Section 3']"
            />
          </PremFormField>
          <div class="pr-8 flex justify-between items-center">
            <p class="font-bold">Add Question</p>
            <NuxtLink to="/examportal/exam/AddQuestionGroup">
              <BaseButton label="Add" color="info" />
            </NuxtLink>
          </div>
        </CardBox>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  mdiTrashCan,
} from "@mdi/js";
import BaseButton from "~~/components/Buttons/BaseButton.vue";
import PremFormControl from "~~/components/Forms/PremFormControl.vue";
import PremFormField from "~~/components/Forms/PremFormField.vue";
import QuilEditor from "~~/components/ExamPortal/QuilEditor.vue";
import { ref } from "vue";
import CardBox from "@/components/Cards/CardBox.vue";

const question = ref({
  title: "Question Title",
  titleHtml: "Question Title",
  Explanation: "",
  criterias: [
    {
      id: 1,
      text: "",
      percent: 20,
    },
    {
      id: 2,
      text: "",
      percent: 20,
    },
    {
      id: 3,
      text: "",
      percent: 20,
    },
    {
      id: 4,
      text: "",
      percent: 20,
    },
  ],
});

</script>
