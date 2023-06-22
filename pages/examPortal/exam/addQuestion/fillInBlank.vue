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
          <PremFormField label="Marks (+)">
            <PremFormControl placeholder="Correct" />
          </PremFormField>
          <PremFormField label="Marks (-)">
            <PremFormControl placeholder="Wrong" />
          </PremFormField>
        </div>
        <p class="text-blue-400 underline pb-2 cursor-pointer">Create Tag</p>
        <br />

        <PremFormField label="Tag Question">
          <PremFormControl
            :options="['T1', 'T2', 'T3']"
            placeholder="Enter Tags..."
          />
        </PremFormField>
        <PremFormField class="flex" label="Guideline Time">
          <PremFormControl type="number" placeholder="sec" />
          <p>Seconds</p>
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
          <p>{{ "Answer : " + question.answer }}</p>
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

          <PremFormField label="Answer">
            <PremFormControl
              placeholder="Enter Your Answer Here"
              v-model="question.answer"
            />
          </PremFormField>

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
  Explanation: "",
  answer: "",
});
</script>
