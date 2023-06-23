<template>
  <CardBoxModal v-model="isAddModalActive" title="" :show-footer="false">
    <header
      class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
    >
      <div class="text-gray-500">
        <BaseIcon v-if="mdiAccountPlus" :path="mdiAccountPlus" :size="32" />
      </div>
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Add Tag</h1>
      </div>
      <div
        class="text-gray-500 cursor-pointer"
        @click="isAddModalActive = false"
      >
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>
    <CardBox is-form @submit.prevent="addTag(false)">
      <PremFormField label="Tag Name">
        <PremFormControl required v-model="newtagName" placeholder="New Name" />
      </PremFormField>

      <div class="flex justify-end py-2">
        <BaseButton type="submit" color="info" label="Done" />
      </div>
    </CardBox>
  </CardBoxModal>
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
          <p class="p-2.5">Test Name | Q1</p>
        </div>
      </NuxtLink>
      <div class="pr-16 flex gap-3 items-center">
        <BaseButton label="New" color="info" />
        <BaseIcon :path="mdiChevronLeftBoxOutline" />
        <BaseIcon :path="mdiChevronRightBoxOutline" />
      </div>
    </div>
    <div class="border-b w-full flex justify-between items-center px-16 py-2">
      <div class="flex justify-center items-center">
        <BaseButton
          v-if="isPreview"
          :icon="mdiCloseCircleMultipleOutline"
          label="Preview"
          color="danger"
          @click="isPreview = !isPreview"
        />
        <BaseButton
          v-else
          label="Preview"
          color="info"
          @click="isPreview = !isPreview"
        />
      </div>
      <div class="flex justify-center items-center gap-5">
        <BaseButton :icon="mdiTrashCan" color="danger" />
        <BaseButton label="Save" color="info" />
      </div>
    </div>
  </div>
  <div class="pt-28 h-screen w-full flex">
    <!-- sidebar -->
    <div class="w-1/4 px-4 py-6 overflow-y-auto scroll-m-0 scrollbar-w-1">
      <!-- if Settings  -->
      <template v-if="!isPreview">
        <p class="font-semibold text-lg">Question Settings</p>
        <PremFormField label="Difficulty Level">
          <PremFormControl :options="['Easy', 'Medium', 'Hard']" />
        </PremFormField>
        <div class="flex gap-5 items-start">
          <PremFormField label="Marks (+)">
            <PremFormControl placeholder="Correct" />
          </PremFormField>
          <PremFormField label="Marks (-)">
            <PremFormControl placeholder="Wrong" />
          </PremFormField>
        </div>
        <p
          @click="addTag(true)"
          class="text-blue-400 underline pb-2 cursor-pointer"
        >
          Create Tag
        </p>
        <br />

        <PremFormField label="Tag Question">
          <PremFormControl :options="tags" placeholder="Enter Tags..." />
        </PremFormField>
        <PremFormField class="flex" label="Guideline Time">
          <PremFormControl type="number" placeholder="sec" />
          <p>Seconds</p>
        </PremFormField>
        <div class="flex gap-4">
          <div
            @click="handleMCQOptionChange"
            class="max-w-max flex gap-2 p-2 m-2 border rounded-sm cursor-pointer"
            :class="{ 'bg-green-200': question.multipleChoice }"
          >
            <BaseIcon v-if="question.multipleChoice" :path="mdiCheck" />

            <p>Multiple Answer</p>
          </div>

          <div
            @click="question.partialMarking = !question.partialMarking"
            class="max-w-max flex gap-2 p-2 m-2 border rounded-sm cursor-pointer"
            :class="{ 'bg-green-200': question.partialMarking }"
          >
            <BaseIcon v-if="question.partialMarking" :path="mdiCheck" />
            <p>Partial marking</p>
          </div>
        </div>
      </template>
      <template v-else>
        <CardBox>
          <div class="my-2">
            <p class="">Instruction:</p>
            <div class="w-full" v-html="question.instruction" />
          </div>

          <div class="flex grid-cols-2 mb-4">
            <div class="w-6">Q.</div>
            <div class="w-full" v-html="question.titleHtml" />
          </div>
          <div v-for="(item, index) in question.options" class="border my-2">
            <div class="flex grid-cols-2 py-2">
              <div class="w-12 h-full flex items-center justify-center">
                <p
                  class="p-4 h-3 w-3 rounded-[50%] bg-slate-200 flex items-center justify-center"
                  :class="{ 'bg-green-300': item.isCorrectAnswer }"
                >
                  {{ String.fromCharCode(65 + index) }}
                </p>
              </div>
              <div class="w-full flex items-center" v-html="item.html" />
            </div>
          </div>
          <div class="my-4">
            <p class="">Explanation:</p>
            <div class="w-full" v-html="question.Explanation" />
          </div>
        </CardBox>
      </template>
    </div>
    <div class="w-3/4 p-4 overflow-y-auto scroll-m-0 scrollbar-w-1">
      <!-- Main Content -->
      <div class="flex flex-col">
        <CardBox>
          <BaseButton
            @click="isInstruction = !isInstruction"
            v-if="!isInstruction"
            :icon="mdiPlusCircleOutline"
            label="Instruction"
          />
          <BaseButton
            @click="isInstruction = !isInstruction"
            v-if="isInstruction"
            :icon="mdiMinusCircleOutline"
            label="Instruction"
          />
          <QuilEditor
            class="py-2"
            v-if="isInstruction"
            v-model="question.instruction"
          ></QuilEditor>

          <PremFormField label="Question">
            <QuilEditor
              v-model="question.titleHtml"
              v-model:text="question.title"
            ></QuilEditor>
          </PremFormField>

          <div
            class="my-2"
            v-for="(totaloption, index) in question.options"
            :key="totaloption.id"
          >
            <div class="flex justify-between px-3 py-2">
              <h3 class="font-bold">
                {{ "Choice #" + String.fromCharCode(65 + index) }}
              </h3>
              <BaseButton
                class="cursor-pointer"
                :icon="mdiTrashCanOutline"
                color="danger"
                @click="deleteChoice(index)"
              />
            </div>
            <QuilEditor
              v-model="totaloption.html"
              v-model:text="totaloption.text"
            />
            <div @click="handleclick(index)">
              <input
                type="checkBox"
                name="option"
                id="'option' + totaloption.id"
                :checked="totaloption.isCorrectAnswer"
                :disabled="true"
              />
              <label for="'option' + totaloption.id" class="ml-2 cursor-pointer"
                >This is the Correct Answer</label
              >
            </div>
            <br />
          </div>
          <button
            @click="AddChoice"
            class="bg-blue-700 p-3 rounded-md text-white"
          >
            Add Choice
          </button>
          <PremFormField label="Explanation">
            <QuilEditor v-model="question.Explanation" />
          </PremFormField>
        </CardBox>
      </div>
    </div>
  </div>
</template>
<script setup>
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";

import {
  mdiAbacus,
  mdiTrashCan,
  mdiTrashCanOutline,
  mdiCloseCircleMultipleOutline,
  mdiPlusCircleOutline,
  mdiMinusCircleOutline,
  mdiCheck,
  mdiWindowClose,
  mdiChevronRightBoxOutline,
  mdiChevronLeftBoxOutline,
} from "@mdi/js";
import BaseButton from "~~/components/Buttons/BaseButton.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import PremFormControlIcon from "~~/components/Forms/PremFormControlIcon.vue";
import PremFormControl from "~~/components/Forms/PremFormControl.vue";
import PremFormField from "~~/components/Forms/PremFormField.vue";
import QuilEditor from "~~/components/ExamPortal/QuilEditor.vue";
import { ref } from "vue";
import CardBox from "@/components/Cards/CardBox.vue";

const isPreview = ref(false);
const isInstruction = ref(false);
const tags = ref(["tag 1", "tag 2 ", "tag 3"]);

const question = ref({
  instruction: "",
  title: "Question Title",
  titleHtml: "Question Title",
  multipleChoice: true,
  partialMarking: true,
  Explanation: "",
  options: [
    {
      id: 1,
      text: "Option Title",
      html: "Option Title",
      isCorrectAnswer: true,
    },
    {
      id: 2,
      text: "Option Title",
      html: "Option Title",
      isCorrectAnswer: false,
    },
    {
      id: 3,
      text: "Option Title",
      html: "Option Title",
      isCorrectAnswer: false,
    },
    {
      id: 4,
      text: "Option Title",
      html: "Option Title",
      isCorrectAnswer: false,
    },
  ],
});

const deleteChoice = (index) => {
  question.value.options.splice(index, 1);
};
const AddChoice = () => {
  question.value.options.push({
    id: 10,
    text: "Option Title",
    html: "Option Title",
    isCorrectAnswer: false,
  });
};

const handleMCQOptionChange = () => {
  question.value.multipleChoice = !question.value.multipleChoice;
  if (!question.value.multipleChoice) {
    for (let i = 0; i < question.value.options.length; ++i) {
      question.value.options[i].isCorrectAnswer = false;
    }
    if (question.value.options.length > 0) {
      question.value.options.at(0).isCorrectAnswer = true;
    }
  }
};

const AddAns = (index) => {
  if (question.value.multipleChoice) {
    question.value.options.at(index).isCorrectAnswer = true;
  } else {
    for (let i = 0; i < question.value.options.length; ++i) {
      question.value.options[i].isCorrectAnswer = false;
    }
    question.value.options.at(index).isCorrectAnswer = true;
  }
};
const removeAns = (index) => {
  question.value.options.at(index).isCorrectAnswer = false;
};
const handleclick = (index) => {
  console.log(index);
  if (!question.value.options.at(index).isCorrectAnswer) {
    AddAns(index);
  } else {
    removeAns(index);
  }
  return;
};

const isAddModalActive = ref(false);
const newtagName = ref("");
const addTag = (temp) => {
  if (temp) {
    isAddModalActive.value = true;
  } else {
    tags.value.push(newtagName.value);
    isAddModalActive.value = false;
  }
};
</script>
