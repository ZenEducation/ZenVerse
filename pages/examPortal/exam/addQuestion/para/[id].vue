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
  <div
    v-if="isLoaded"
    class="absolute z-30 top-0 left-0 w-full min-h-[48px] bg-white"
  >
    <div class="border-b w-full flex justify-between items-center px-5 py-2">
      <NuxtLink :to="'/examportal/Exam/edit-page/' + question?.examID">
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
        <BaseButton label="Save" color="info" @click="saveHandler" />
      </div>
    </div>
  </div>
  <div
    v-if="isLoaded"
    class="pt-28 max-md:block max-md:overflow-y-scroll scrollbar-thin h-screen w-full flex"
  >
    <!-- sidebar -->
    <div
      class="w-1/4 max-md:w-5/6 max-md:mx-auto px-4 py-6 overflow-y-auto scroll-m-0 scrollbar-w-1"
    >
      <!-- if Settings  -->
      <template v-if="!isPreview">
        <p class="font-semibold text-lg">Question Settings</p>
        <PremFormField label="Difficulty Level">
          <PremFormControl
            :options="['EASY', 'MODERATE', 'HARD']"
            v-model="question.difficuilty"
          />
        </PremFormField>
        <div class="flex gap-5 items-start">
          <PremFormField label="Marks">
            <PremFormControl placeholder="1.0" v-model="question.ifCorrect" />
          </PremFormField>
        </div>
        <br />

        <PremFormField label="Tag Question">
          <p
            @click="addTag(true)"
            class="text-blue-400 underline pb-2 cursor-pointer"
          >
            Create Tag
          </p>
          <PremFormControl :options="tags" placeholder="Enter Tags..."  v-model="question.topic"  />
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
            <div class="w-full" v-html="question.titleHTML" />
          </div>

          <div class="my-4">
            <p class="">Explanation:</p>
            <div class="w-full" v-html="question.explanation" />
          </div>
        </CardBox>
      </template>
    </div>
    <div
      class="w-3/4 max-md:w-5/6 max-md:mx-auto p-4 overflow-y-auto scroll-m-0 scrollbar-w-1"
    >
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
              v-model="question.titleHTML"
              v-model:text="question.title"
            ></QuilEditor>
          </PremFormField>

          <div
            class=""
            v-for="(totaloption, index) in question.criterias"
            :key="totaloption.id"
          >
            <div
              class="flex w-full flex-wrap justify-between align-middle px-3"
            >
              <div class="flex justify-between py-2 align-middle gap-6">
                <p class="pt-3">
                  {{ String.fromCharCode(65 + index) }}
                </p>
                <PremFormControl placeholder="Criteria Title..." v-model="totaloption.text" />
              </div>
              <div
                class="flex max-md:w-full flex-wrap py-2 align-middle justify-between gap-2"
              >
                <div class="flex flex-wrap align-middle gap-2">
                  <p class="pt-3">Percentage for this Criteria</p>
                  <PremFormControl type="number" placeholder="in percent" v-model="totaloption.percentage" />
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
            <QuilEditor v-model="question.explanation" />
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
import { API, graphqlOperation } from "aws-amplify";
import { useRouter, useRoute } from "vue-router";
import { updateQuestion } from "~~/src/graphql/mutations";
import { getQuestion } from "~~/src/graphql/queries";
const route = useRoute();
const questionId = route.params.id;

const isPreview = ref(false);
const isInstruction = ref(false);
const tags = ref(["tag 1", "tag 2 ", "tag 3"]);

const question = ref({
  title: "Question Title",
  titleHTML: "Question Title",
  Explanation: "",
  criterias: [
    {
      text: "",
      percentage: 20,
    },
  ],
});

const deleteChoice = (index) => {
  question.value.criterias.splice(index, 1);
};
const AddChoice = () => {
  question.value.criterias.push({
    text: "Criteria Name",
    percentage:10

  });
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

const fetchQuestionData = async () => {
  try {
    const response = await API.graphql({
      query: getQuestion,
      variables: { id: questionId },
    });
    console.log("response", response.data.getQuestion);
    question.value = response.data.getQuestion;
  } catch (error) {
    console.error(error);
  }
};

const isLoaded = ref(false);

onMounted(async () => {
  await fetchQuestionData();
  isLoaded.value = true;
  console.log(question.value);
});

const saveHandler = async () => {
  try {
    let {
      id,
      _version,
      title,
      titleHTML,
      maxMarks,
      ifCorrect,
      explanation,
      instruction,
      topic,
      criterias,
      difficuilty,
      answer,
    } = question.value;

    criterias = criterias?.map((entry) => ({
      text: entry.text,
      percentage: entry.percentage,
    }));

    let input = {
      id,
      _version,
      title,
      titleHTML,
      maxMarks,
      ifCorrect,
      explanation,
      instruction,
      topic,
      criterias,
      difficuilty,
      answer,
    };
    console.log(input);
    await API.graphql({
      query: updateQuestion,
      variables: { input: input },
    });
    window.alert("changes saved sucessfully");
    // window.location.href =
    //   "/examportal/Exam/edit-page/" + question.value?.examID;
  } catch (error) {
    console.error(error);
  }
};

const deleteHandler = async () => {
  try {
    let { id, _version } = question.value;

    let input = {
      id,
      _version,
    };
    console.log(input);
    await API.graphql({
      query: updateQuestion,
      variables: { input: input },
    });
    window.alert("deleted successfully");
    window.location.href =
      "/examportal/Exam/edit-page/" + question.value?.examID;
  } catch (error) {
    console.error(error);
  }
};
</script>
