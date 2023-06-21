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
          <p class="p-2.5">Test Name | Q1</p>
        </div>
      </NuxtLink>
      <div class="pr-16">
        <BaseButton label="New" color="info" />
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
          <PremFormField label="Marks">
            <PremFormControl placeholder="1.0" />
          </PremFormField>
        </div>
        <br />

        <PremFormField label="Tag Question">
          <p class="text-blue-400 underline pb-2 cursor-pointer">Create Tag</p>
          <PremFormControl
            :options="['T1', 'T2', 'T3']"
            placeholder="Enter Tags..."
          />
        </PremFormField>
      </template>
      <template v-else>
        <CardBox>
          <div class="my-4">
            <p class="">Instruction:</p>
            <div class="w-full" v-html="question.instruction" />
          </div>
          <div class="flex grid-cols-2 mb-4">
            <div class="w-6">Q.</div>
            <div class="w-full" v-html="question.titleHtml" />
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
            class=""
            v-for="(totaloption, index) in question.options"
            :key="totaloption.id"
          >
            <div class="flex flex-wrap justify-between align-middle px-3">
              <div class="flex align-middle gap-6">
                <p class="pt-3">
                  {{ String.fromCharCode(65 + index) }}
                </p>
                <PremFormControl placeholder="Criteria Title..." />
              </div>
              <div class="flex align-middle justify-between gap-2">
                <div class="flex align-middle gap-2">
                  <p class="pt-3">Percentage for this Criteria</p>
                  <PremFormControl type="number" placeholder="in percent" />
                </div>
                <BaseButton
                  class="cursor-pointer"
                  :icon="mdiTrashCanOutline"
                  color="danger"
                  @click="deleteChoice(index)"
                />
              </div>
            </div>

            <br />
          </div>
          <button
            @click="AddChoice"
            class="bg-blue-700 p-3 rounded-md text-white"
          >
            Add Criteria
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
import {
  mdiAbacus,
  mdiTrashCan,
  mdiTrashCanOutline,
  mdiCloseCircleMultipleOutline,
  mdiPlusCircleOutline,
  mdiMinusCircleOutline,
} from "@mdi/js";
import BaseButton from "~~/components/Buttons/BaseButton.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import PremFormControlIcon from "~~/components/Forms/PremFormControlIcon.vue";
import PremFormControl from "~~/components/Forms/PremFormControl.vue";
import PremFormField from "~~/components/Forms/PremFormField.vue";
import QuilEditor from "~~/components/ExamPortal/QuilEditor.vue";
import { ref } from "vue";
import CardBox from "@/components/Cards/CardBox.vue";

const isPreview = ref(true);
const isInstruction = ref(false);

const question = ref({
  title: "Question Title",
  titleHtml: "Question Title",
  multipleChoice: true,
  partialMarking: true,
  Explanation: "",
  options: [
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
</script>
