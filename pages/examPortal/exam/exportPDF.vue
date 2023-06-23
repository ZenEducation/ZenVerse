<template>
  <div>
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
        <div class="pr-16"></div>
      </div>
      <div class="border-b w-full flex justify-between items-center px-16 py-2">
        <div class="flex justify-center items-center">
          <BaseButton label="PRINT" @click="generatePdf" color="info" />
        </div>
        <div class="flex justify-start items-center gap-2">
          <BaseButton label="COMPLETE TEST" @click="mode = 0" />
          <BaseButton label="EXPLANATIONS" @click="mode = 1" />
          <BaseButton label="ANSWERS" @click="mode = 2" />
          <BaseButton label="ALL QUESTIONS" @click="mode = 3" />
        </div>
      </div>
    </div>
    <div class="pt-32 h-screen">
      <div class="w-2/3 m-auto bg-white p-4 border-2">
        <div  ref="pdfContent">

          <p class="font-bold text-3xl text-center">{{ test.title }}</p>
          <div class="py-3" v-for="section in test.sections">
            <p v-if="mode == 0 || mode == 3" class="text-xl">
              {{ section.title }}
            </p>
            <div v-for="(que, index) in section.questions">
              <span>{{ "Q." + (index + 1) + ") " }} </span>
              <span v-if="que.instruction && (mode == 0 || mode == 3)">
                <p>Instruction :</p>
                <p v-html="que.instruction"></p>
              </span>
              <span v-if="mode == 0 || mode == 3" v-html="que.titleHtml"></span>
              <div   v-if="que.answer  && (mode == 0 || mode == 1 || mode == 2) ">
                <span> Answer : </span>
                <span v-html="que.answer"> </span>
              </div>
              <div v-if="que.Explanation  && (mode == 0 || mode == 1)">
                <p>Explanation :</p>
                <p v-html="que.Explanation"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "~~/components/Buttons/BaseButton.vue";
import html2pdf from 'html2pdf.js';
const pdfContent = ref(null);
// 0 - complete test  1 - print explanation 2 print answers 3 print all questions
const mode = ref(0);

const test = {
  title: "Test 2",
  sections: [
    {
      title: "Verbal Ability and Reading Comprehension",
      questions: [
        {
          id: 1,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          partialMarking: true,
          Explanation: "this is sample Explanation",
          type: "NUM",
          answer: 20,
          range: { is: true, start: 10, end: 20 },

        },
        {
          id: 2,

          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "PARA",
          Explanation: "this is explanation",
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
        },
        {
          id: 3,

          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "FILLIN",
          Explanation: "this is sample Explanation",
          answer: "this is answer",
        },
        {
          id: 4,
          answer: "this is answer",
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          multipleChoice: true,
          partialMarking: true,
          Explanation: "this is sample Explanation",
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
        },
      ],
    },
    {
      title: "Data Interpretation and Logical Reasoning",
      questions: [
        {
          id: 1,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          partialMarking: true,
          Explanation: "this is sample Explanation",
          type: "NUM",
          answer: 20,
          range: { is: true, start: 10, end: 20 },
        },
        {
          id: 2,

          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "PARA",
          Explanation: "this is sample Explanation",
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
        },
        {
          id: 3,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "FILLIN",
          Explanation: "this is sample Explanation",
          answer: "this is answer",
        },
        {
          id: 4,
          answer: "this is answer",
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          multipleChoice: true,
          partialMarking: true,
          Explanation: "this is sample Explanation",
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
        },
      ],
    },
  ],
};
const generatePdf = () => {
  const element = pdfContent.value;
  const opt = {
    margin: 0.5,
    filename: 'example.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };

  html2pdf().set(opt).from(element).save();
};

</script>

<style lang="scss" scoped></style>
