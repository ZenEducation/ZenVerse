<script setup>
import { ref, reactive, onMounted } from "vue";
import {
  mdiBallot,
  mdiAccount,
  mdiCreditCardOutline,
  mdiFileUploadOutline,
  mdiDragVertical,
  mdiTrashCanOutline,
  mdiTagArrowDown,
  mdiArrowDown,
  mdiChevronDown,
  mdiChevronUp,
} from "@mdi/js";

import SectionMain from "@/components/Sections/SectionMain.vue";

import CardBox from "@/components/Cards/CardBox.vue";
import Lessonsetting from "@/components/LMS/Admin/CreateCourse/lessonsetting.vue"

import PremFormField from "@/components/Forms/FormField.vue";
import FormCheckRadio from "~~/components/Forms/FormCheckRadio.vue";

import BaseButton from "@/components/Buttons/BaseButton.vue";
import FormUploadFiles from "@/components/LMS/FormUploadFiles.vue";
import Uploadtext from "@/components/LMS/Uploadtext.vue";
import SeclectionMultipleButton from "@/components/Sections/SeclectionMultipleButton.vue";
import QuilEditor from "@/components/LMS/QuilEditor.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import SectionTitle from "@/components/Sections/SectionTitle.vue";
import PremFormControlListbox from "~~/components/Forms/PremFormControlListbox.vue";
import PremFormControl from "~~/components/Forms/PremFormControl.vue";
import BaseDivider from "~~/components/NavBar/BaseDivider.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import { createCourse } from "~~/stores/createCourse";
const courseStore = createCourse();
const options = ref([
  { id: 1, option: "option1" },
  { id: 2, option: "option2" },
]);
const QuestionTypeOptions = ["One Correct Answer", "Multiple Correct Answers"];
const maxqueId = ref(2);
const quiz = ref({
  title: "quiz 1",
  questions: [
    {
      id: 1,
      title: "this is title of question",
      titleText: "this is title of question",
      type: "One Correct Answer",
      choices: [
        { id: 1, title: "this is choice 1", isCorrect: true },
        { id: 2, title: "this is choice 2", isCorrect: false },
        { id: 3, title: "this is choice 3", isCorrect: false },
      ],
      answer: 1,
    },
  ],
});

const totaloptions = ref([]);
onMounted(() => {
  totaloptions.value = options.value.map((item) => ({
    id: item.id,
    name: `Transformed ${item.option}`,
  }));
});

const header = computed(() => {
  if (quiz.value.title) {
    return `${quiz.value.title}`;
  } else {
    return "Untitled Quiz";
  }
});

const isOpen = ref(1);

const addQuestion = () => {
  maxqueId.value = maxqueId.value + 1;
  let newQuestion = {
    id: maxqueId.value,
    title: "this is title of question",
    titleText: "this is title of question",
    type: "One Correct Answer",
    choices: [{ id: 1, title: "this is choice 1", isCorrect: true }],
    answer: 1,
  };
  quiz.value.questions.push(newQuestion);
    isOpen.value = newQuestion.id;

};

const DuplicateQuestion = (id) => {
  maxqueId.value = maxqueId.value + 1;
  let lastQuestion = quiz.value.questions.find((que) => que.id == id);
  let newQuestion = {
    id: maxqueId.value,
    title: lastQuestion.title,
    titleText: lastQuestion.titleText,
    type: lastQuestion.type,
    choices: lastQuestion.choices,
    answer: lastQuestion.answer,
  };
  quiz.value.questions.push(newQuestion);
  isOpen.value = newQuestion.id;

};

const addChoice = (queID) => {
  quiz.value.questions.forEach((question) => {
    if (question.id == queID) {
      let maxID = 1;
      question.choices.forEach((choice) => {
        maxID = Math.max(maxID, choice.id + 1);
      });

      let newChoice = {
        id: maxID,
        title: "this is new choice",
        isCorrect: true,
      };
      question.choices.push(newChoice);
      return;
    }
  });
};

const deleteQuestion = (queID) => {
  let index = quiz.value.questions.findIndex((que) => {
    return que.id == queID;
  });
  quiz.value.questions.splice(index, 1);
};

const deleteChoice = (queID, choiceId) => {
  quiz.value.questions.forEach((question) => {
    if (question.id == queID) {
      let index = question.choices.findIndex((choice) => {
        return choice.id == choiceId;
      });
      question.choices.splice(index, 1);
      return;
    }
  });
};

const uploadQuestion = ref(false);

const upload = () => {
  uploadQuestion.value = !uploadQuestion.value;
};


const saveData = ()=>{
    const data = {
        id:1,
        name:quiz.value.title,
        icon:"mdiFormatListCheckbox",
        type:"Quiz"
    }
  courseStore.addLessonsOnChapters(data)

}
</script>

<template>
  <div>

     
        <SeclectionMultipleButton
          :icon="mdiFileUploadOutline"
          :title="header"
          main
        >
          <BaseButton
            label="DISCARD CHANGES"
         
          color="info"
          outline 
         
            class="mr-1"
          />
          <BaseButton
            label="SAVE"
         
            color="info"
            class="ml-1"
            @click="saveData"
       
          />
        </SeclectionMultipleButton>

        <div class="mb-2">
          <CardBox
            :icon="mdiBallot"
            class="mb-3 lg:mb-0 xl:col-span-3"
            is-form
            @submit.prevent="submit"
          >
            <PremFormField label="Title" horizontal>
              <FormUploadFiles
                v-model="quiz.title"
                :icon-left="mdiAccount"
                help="Title"
              />
            </PremFormField>
          </CardBox>

          <div class="mt-4" v-for="(que, index) in quiz.questions"  :key="index" >
            <CardBox>
              <div class="flex justify-between px-4">
                <div class="flex items-center font-semibold text-lg">
                  <h1 v-html='"Question# " + (index + 1) + ":  " + que.title'>
                  </h1>
                </div>
                <div class="flex items-center justify-end">
                  <BaseButton
                    label="Duplicate"
                    small
                    color="info"
                    @click="DuplicateQuestion(que.id)"
                  />
                  <BaseIcon
                    w="w-10"
                    h="h-10"
                    class="cursor-pointer"
                    :path="mdiTrashCanOutline"
                    color="danger"
                    @click="deleteQuestion(que.id)"
                  />
                  <BaseIcon
                    w="w-10"
                    h="h-10"
                    class="cursor-pointer"
                    :path="mdiChevronUp"
                    v-if="isOpen == que.id"
                    @click="isOpen = -1"
                  />
                  <BaseIcon
                    w="w-10"
                    h="h-10"
                    class="cursor-pointer"
                    :path="mdiChevronDown"
                    v-if="isOpen !== que.id"
                    @click="isOpen = que.id"
                  />
                </div>
              </div>
              <template v-if="isOpen == que.id">
                <PremFormField label="Question Type" class="mt-3" horizontal>
                  <PremFormControl
                    :options="QuestionTypeOptions"
                    v-model="que.type"
                  />
                </PremFormField>

                <PremFormField label="Question" horizontal>
                  <QuilEditor
                    v-model="que.title"
                    v-model:text="que.titleText"
                  />
                </PremFormField>
<div class=""  v-if="que.type == 'One Correct Answer'">
                <div
                 
                  class="my-2 p-3 bg-slate-100 rounded-lg"
                  v-for="(totaloption, index) in que.choices"
                  :key="totaloption.id"
                >
                  <div class="flex justify-between px-3 py-2">
                    <h3 class="font-bold">{{ "Choice #" + index }}</h3>
                    <BaseIcon
                      w="w-10"
                      h="h-10"
                      class="cursor-pointer"
                      :path="mdiTrashCanOutline"
                      color="danger"
                      @click="deleteChoice(que.id, totaloption.id)"
                    />
                  </div>
                  <QuilEditor v-model="totaloption.title" />
                  <input
                    type="radio"
                    name="option"
                    id="'option' + totaloption.id"
                  />
                  <label for="'option' + totaloption.id" class="ml-2"
                    >This is the Correct Answer</label
                  >
                  <br />
                </div></div>
                <div
                  v-else
                  class="my-2 p-3 bg-slate-100 rounded-lg"
                  v-for="(totaloption, index) in que.choices"
                  :key="index"
                >
                  <div class="flex justify-between px-3 py-2">
                    <h3 class="font-bold">{{ "Choice #" + index }}</h3>
                    <BaseIcon
                      w="w-10"
                      h="h-10"
                      class="cursor-pointer"
                      :path="mdiTrashCanOutline"
                      color="danger"
                      @click="deleteChoice(que.id, totaloption.id)"
                    />
                  </div>
                  <QuilEditor v-model="totaloption.title" />
                  <input
                    type="checkbox"
                    class="rounded-3xl"
                    name="'option' + totaloption.id"
                    id="'option' + totaloption.id"
                  />
                  <label for="'option' + totaloption.id" class="ml-2"
                    >This is the Correct Answer</label
                  >
                  <br />
                </div>
                <button
                  @click="addChoice(que.id)"
                  class="bg-blue-700 p-3 rounded-md text-white"
                >
                  Add Choice
                </button>
                <PremFormField label="Explanation" horizontal>
                  <QuilEditor />
                </PremFormField>
              </template>
            </CardBox>
          </div>
          <div class="flex my-5 gap-3">
            <button
              @click="addQuestion"
              class="bg-blue-700 p-3 rounded-md text-white"
            >
              Add Question
            </button>
            <button
              class="bg-white border border-blue-700 p-3 rounded-md text-blue-700"
              @click="uploadQuestion = !uploadQuestion"
            >
              Import More Questions
            </button>
          </div>
          <CardBox v-show="uploadQuestion">
            <PremFormField label="" horizontal>
              <Uploadtext
                pdffile
                downloadlist
                :icon="mdiDragVertical"
                :iconRight="mdiTrashCanOutline"
                dragText="Drag & Drop an XLSX file to import"
                :icon-left="mdiAccount"
                help="Upload a video file"
                placeholder="Upload a video file"
              />
            </PremFormField>
          </CardBox>
        </div>
    

 <Lessonsetting />
  </div>
</template>
