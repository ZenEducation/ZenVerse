<template>
  <div>
    <div class="absolute z-30 top-0 left-0 w-full min-h-[48px] bg-white">
      <div class="border-b w-full flex justify-between items-center px-5 py-2">
        <NuxtLink :to="'/examportal/Exam/edit-page/'+examId">
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
      <div class="border-b w-full flex justify-between items-center px-16 py-2">
        <div class="flex justify-center items-center">
          <BaseButton label="PRINT" @click="generatePdf" color="info" />
        </div>
        <div class="flex justify-start items-center">
          <ul class="flex max-md:flex-col md:gap-6">
            <li
              class="flex justify-center md:w-32"
              @click="mode = 0"
              :class="{ 'border-b-2': mode == 0 }"
            >
              COMPLETE TEST
            </li>
            <li
              class="flex justify-center md:max-w-min"
              @click="mode = 1"
              :class="{ 'border-b-2': mode == 1 }"
            >
              EXPLANATION
            </li>
            <li
              class="flex justify-center md:max-w-min"
              @click="mode = 2"
              :class="{ 'border-b-2': mode == 2 }"
            >
              ANSWERS
            </li>
            <li
              class="flex justify-center md:max-w-min"
              @click="mode = 3"
              :class="{ 'border-b-2': mode == 3 }"
            >
              QUESTIONS
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="pt-32 max-md:pt-60 pb-3 h-screen overflow-y-scroll scrollbar-none"
    >
      <div class="w-2/3 m-auto bg-white p-4 border-2">
        <div ref="pdfContent">
          <p class="font-bold text-3xl text-center">{{ test.title }}</p>
          <div class="py-3" v-for="section in test.Sections?.items">
            <p v-if="mode == 0 || mode == 3" class="text-xl">
              {{ section.title }}
            </p>
            <div v-for="(que, index) in section.Questions?.items">
              <span>{{ "Q." + (index + 1) + ") " }} </span>
              <span v-if="que.instruction && (mode == 0 || mode == 3)">
                <p>Instruction :</p>
                <p v-html="que.instruction"></p>
              </span>
              <span v-if="mode == 0 || mode == 3" v-html="que.titleHTML"></span>

              <div v-if="que.type == 'MCQ' && (mode == 0 || mode == 3)">
                <!-- MCQ -->  
                <div class="p-3 flex flex-wrap gap-2" v-for="(option,index) in que.options"  >
                  <span v-html=" String.fromCharCode(65 + index) + '. ) ' "></span>
                  <span v-html=" option.html"></span>
                </div>
              </div>


              <div v-if="(que.answer && (mode == 0 || mode == 1 || mode == 2) )|| (que.type == 'MCQ')">
                <span> Answer : </span>
                <span v-html="que.answer"> </span>
                <template v-if="que.type == 'MCQ'">
                  <template v-for="item in que.options" > <span v-if="item.isCorrectAnswer"  v-html="item.html" /> </template>
                </template>
              </div>
              <div v-if="que.explanation && (mode == 0 || mode == 1)">
                <p>Explanation :</p>
                <p v-html="que.explanation"></p>
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
import html2pdf from "html2pdf.js";

import { API, graphqlOperation } from "aws-amplify";
import { useRouter, useRoute } from "vue-router";
import { getExam, listExams } from "~~/src/graphql/queries";
const route = useRoute();
const examId = route.params.examId;

const pdfContent = ref(null);
// 0 - complete test  1 - print explanation 2 print answers 3 print all questions
const mode = ref(0);

const test = ref({
  title: "Test 2",
  Sections: {
    items: [
      {
        title: "Verbal Ability and Reading Comprehension",
        Questions: {
          items: [
            {
              id: 1,
              instruction: "this is sample instruction",
              title: "Question Title",
              titleHTML: "Question Title",
              isPartial: true,
              explanation: "this is sample explanation",
              type: "NUM",
              answer: 20,
              range: { is: true, start: 10, end: 20 },
            },
            {
              id: 2,

              instruction: "this is sample instruction",
              title: "Question Title",
              titleHTML: "Question Title",
              type: "PARA",
              explanation: "this is explanation",
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
              titleHTML: "Question Title",
              type: "FILLIN",
              explanation: "this is sample explanation",
              answer: "this is answer",
            },
            {
              id: 4,
              answer: "this is answer",
              instruction: "this is sample instruction",
              title: "Question Title",
              titleHTML: "Question Title",
              multipleChoice: true,
              isPartial: true,
              explanation: "this is sample explanation",
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
      },
      {
        title: "Data Interpretation and Logical Reasoning",
        Questions: {
          items: [
            {
              id: 1,
              instruction: "this is sample instruction",
              title: "Question Title",
              titleHTML: "Question Title",
              isPartial: true,
              explanation: "this is sample explanation",
              type: "NUM",
              answer: 20,
              range: { is: true, start: 10, end: 20 },
            },
            {
              id: 2,

              instruction: "this is sample instruction",
              title: "Question Title",
              titleHTML: "Question Title",
              type: "PARA",
              explanation: "this is sample explanation",
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
              titleHTML: "Question Title",
              type: "FILLIN",
              explanation: "this is sample explanation",
              answer: "this is answer",
            },
            {
              id: 4,
              answer: "this is answer",
              instruction: "this is sample instruction",
              title: "Question Title",
              titleHTML: "Question Title",
              multipleChoice: true,
              isPartial: true,
              explanation: "this is sample explanation",
              type:'MCQ',
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
      },
    ],
  },
});

const filename = computed(() => {
  switch (mode.value) {
    case 0:
      return `${test.value.title}-CompleteTest.pdf`;
    case 1:
      return `${test.value.title}-Explanations.pdf`;
    case 2:
      return `${test.value.title}-Answers.pdf`;
    case 3:
      return `${test.value.title}-Questions.pdf`;

    default:
      return "file.pdf";
  }
});

const generatePdf = () => {
  const element = pdfContent.value;
  const opt = {
    margin: 0.5,
    filename: filename.value,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(element).save();
};


const fetchExamData = async () => {
  try {
    const id = "83471708-adb4-4368-9d21-dc969499179c";

    const myQuery = `
  query MyQuery($id: ID!) {
    getExam(id: $id) {
      title
      Sections(filter: {_deleted: {ne: true}}) {
        items {
          examID
          id
          title
          description
          Questions(filter: {_deleted: {ne: true}}) {
            items {
              groupID
              id
              _version
              _deleted
              _lastChangedAt
              type
              sectionID
              title
              titleHTML
              isPartial
              answer
              range {
                is
                start
                end
              }
              explanation
              options {
                text
                html
                isCorrectAnswer
              }


            }
          }
          _version
        }
      }
      instructions
      id
      examMockTestId
      description
      _version
    }
  }
`;

    const response = await API.graphql(graphqlOperation(myQuery, { id : examId }));
    // console.log("response : " , response);

    console.log("response", response.data.getExam);
    test.value = response.data.getExam;
  } catch (error) {
    console.error(error);
    window.alert("Error fetching Exam :", error?.errors?.[0]?.message);
  }
};

onMounted(async () => {
  await fetchExamData();
  console.log(test.value);
});
</script>

<style lang="scss" scoped></style>
