<template>
  <div class="w-full h-screen flex">
    <!-- main section -->
    <div class="w-3/4 border-r-2 relative" :class="{ 'w-full': !isMainSidebarOpen }">
      <div class="absolute z-30 bg-gray-100 w-full">
        <div class="border-b-2 h-10 flex justify-between items-center">
          <NuxtLink :to="'/examportal/learner/examResult/' + attemptId" class="flex items-center">

            <BaseIcon :path="mdiCloseCircleOutline" class="cursor-pointer" />
            <p class="border-l px-3 py-2">{{ test.title }}</p>
          </NuxtLink>
          <div class="">
            <BaseIcon :path="mdiFullscreen" @click="startExam" class="cursor-pointer" />
          </div>
        </div>
        <div class="border-b h-14 flex gap-2">
          <div v-for="(item, index) in test.sections" @click="changeSection(index)"
            class="border rounded-md p-2 m-2 cursor-pointer text-sm uppercase flex justify-center items-center"
            :class="{ 'bg-blue-300': current.sectionIndex == index }">
            {{ item.title }}
          </div>
        </div>
      </div>

      <div class="py-28 px-3 overflow-y-scroll h-screen scrollbar-thin">
        <div class="absolute z-40 right-0 top-[50%] h-12 w-6 bg-gray-400 flex items-center cursor-pointer"
          @click="toggleSidebar">
          <BaseIcon :path="mdiChevronRight" v-if="isMainSidebarOpen" />
          <BaseIcon :path="mdiChevronLeft" v-if="!isMainSidebarOpen" />
        </div>
        <div v-if="currentQuestion.isCorrect"
          class="border-green-500 border-1 bg-green-200 flex justify-between items-center py-2 px-4 ">
          <div class="flex">

            <BaseIcon :path="mdiCheck" />
            <p>{{ `Your Answer is Correct you Scored ${currentQuestion.ifCorrect || 0}` }} </p>
          </div>
          <div class="flex gap-3 text-center">
            <div>
              <p class="font-bold">Your Time</p>
              <p>{{ `${currentQuestion?.time} sec ` }}</p>
            </div>

            <div>
              <p class="font-bold">Correct count</p>
                <p>{{ `${currentQuestion?.correctCount} ` }}</p>
              </div>

          </div>

        </div>
        <div v-if="!currentQuestion.isCorrect && currentQuestion.myAns.length && currentQuestion.type != 'PARA'"
          class="border-red-500 border-1 bg-red-100 flex  justify-between items-center py-2 px-4 ">
          <div class="flex">
            <BaseIcon :path="mdiClose" />
            <p>{{`Your Answer is incorrect you scored ${currentQuestion.ifWrong || 0}`}} </p>
          </div>
          <div class="flex gap-3 text-center">
            <div>
              <p class="font-bold">Your Time</p>
              <p>{{ `${currentQuestion?.time} sec ` }}</p>
            </div>


          </div>

        </div>
        <p class="">
          {{
            "Q." +
            (current.questionIndex + 1) +
            " of " +
            test.sections[current.sectionIndex].questions.length
          }}
        </p>
        <div v-html="'Instructions : ' + currentQuestion.instruction"></div>

        <div class="font-bold mb-6" v-html="currentQuestion.titleHTML"></div>
        <template v-if="currentQuestion.type == 'MCQ'">
          <div v-for="(opt, index) in currentQuestion.options" class="border max-w-md my-2 p-2">
            <input v-if="currentQuestion.ismultipleChoice" type="checkbox" name="same name" id=""
              :value="String.fromCharCode(65 + index)" v-model="currentQuestion.myAns" disabled />
            <input v-else type="radio" name="" id="" :value="String.fromCharCode(65 + index)"
              v-model="currentQuestion.myAns" disabled />
            <span class="ml-2" v-html="String.fromCharCode(65 + index) + '. ' + opt.html">
            </span>
          </div>
        </template>
        <template v-if="currentQuestion.type == 'NUM'">
          <div>
            <PremFormField label="Your Answer" class="max-w-sm">
              <PremFormControl type="number" placeholder="No Answer is given" v-model="currentQuestion.myAns" aria-disabled="true" />
            </PremFormField>
          </div>
        </template>
        <template v-if="currentQuestion.type == 'FILLIN'">
          <div>
            <PremFormField label="Your Answer" class="max-w-sm">
              <PremFormControl type="text" placeholder="No Answer is given" v-model="currentQuestion.myAns" disabled />
            </PremFormField>
          </div>
        </template>
        <template v-if="currentQuestion.type == 'PARA'">
          <div>
            <PremFormField label="Your Answer" class="max-w-md">
              <PremFormControl type="textarea" placeholder="No Answer is given" v-model="currentQuestion.myAns"
                disabled />
            </PremFormField>
          </div>
        </template>

        <p v-if="currentQuestion.answer">Correct ans is : {{ currentQuestion.answer }}</p>
        <div v-if="isexplanation" class="mt-20  rounded-md bg-gray-200 ">
          <p class="font-bold ">explanation</p>
          <p v-html="currentQuestion.explanation"></p>
        </div>
      </div>

      <div class="absolute bottom-0 z-30 bg-gray-100 w-full flex justify-between px-4 py-2 items-center">
        <div class="flex gap-4">
          <BaseButton small label="View explanation" @click="isexplanation = !isexplanation" />
        </div>
        <div class="flex gap-2 items-center">
          <BaseIcon class="cursor-pointer" @click="changeQuestion('-1', -1)" :path="mdiChevronLeft"
            v-if="current.questionIndex > 0" />
          <p>
            {{
              current.questionIndex +
              1 +
              " of " +
              test.sections[current.sectionIndex].questions.length
            }}
          </p>
          <BaseIcon @click="changeQuestion('+1', -1)" class="cursor-pointer" :path="mdiChevronRight" v-if="current.questionIndex + 1 <
              test.sections[current.sectionIndex].questions.length
              " />
        </div>
        <div class="flex gap-4">
          <BaseButton @click="changeQuestion('+1', -1)" small :icon="mdiArrowRight" v-if="current.questionIndex + 1 <
            test.sections[current.sectionIndex].questions.length
            " label="Next" color="info" />
          <BaseButton @click="changeSection(current.sectionIndex + 1, -1)" small :icon="mdiArrowRight"
            v-else-if="current.sectionIndex + 1 < test.sections.length" label="Next Section" color="info" />
        </div>
      </div>
    </div>
    <div class="w-1/4 relative" :class="{ ' hidden': !isMainSidebarOpen }">
      <div class="absolute  z-30 bg-gray-100  w-full h-14 px-2 border-b-2 flex items-center justify-start">
        <p class="text-sm">Medical And Engineering</p>
      </div>
      <div class="h-screen pt-16 p-3 overflow-y-scroll scrollbar-none flex-col flex justify-between">
        <div class="grid grid-cols-5 max-md:grid-cols-3 max-lg:grid-cols-4 gap-4 ">

          <p v-for="(item, index) in test.sections[current.sectionIndex].questions"
            class="h-12 w-12 flex justify-center items-center rounded-[50%] cursor-pointer relative"
            @click="changeQuestion(false, index)" :class="findstyle(current.sectionIndex, index).at(0)">
          <div v-if="findstyle(current.sectionIndex, index).at(1)"
            class="p-1.5 rounded-[50%] bg-violet-400 absolute bottom-0 right-0"></div>
          {{ index + 1 }}
          </p>
        </div>

        <div class="flex flex-wrap p-3 ">
          <div class="flex items-center gap-2 relative mx-2">
            <div class="h-3 w-3 rounded-[50%] bg-green-400"></div>
            <span>Correct</span>
          </div>
          <div class="flex items-center gap-2 relative mx-2">
            <div class="h-3 w-3 rounded-[50%] bg-red-300"></div>
            <span>Incorrect</span>
          </div>
          <div class="flex items-center gap-2 relative mx-2">
            <div class="h-3 w-3 rounded-[50%] bg-slate-400"></div>
            <span>Not Viewed</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
  
<script setup>
import BaseButton from "~~/components/Buttons/BaseButton.vue";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import CardBoxModal from "~~/components/Cards/CardBoxModal.vue";
import PremFormControl from "~~/components/Forms/PremFormControl.vue";
import PremFormField from "~~/components/Forms/PremFormField.vue";
import {
  mdiTrashCan,
  mdiStarOutline,
  mdiChevronLeft,
  mdiChevronRight,
  mdiArrowLeft,
  mdiCloseBoxOutline,
  mdiCloseCircleOutline,
  mdiArrowRight,
  mdiFullscreen,
  mdiCheck,
  mdiClose,
} from "@mdi/js";
import { useRouter, useRoute } from "vue-router";
import { API, graphqlOperation } from "aws-amplify";
import { getAttempt } from "~~/src/graphql/queries";
const route = useRoute();
const attemptId = route.params.attemptId;
console.log(attemptId);

const isMainSidebarOpen = ref(true);
const isModalSubmitActive = ref(false);
const isexplanation = ref(false);



const toggleSidebar = () => {
  isMainSidebarOpen.value = !isMainSidebarOpen.value;
}



const test = ref({
  title: "JEE Main | FSTs | V01",
  sections: [
    {
      title: "Physics",
      questions: [
        {
          myAns: '',
          isCorrect: false,
          id: 1,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          isPartial: true,
          type: "NUM",
          answer: 20,
          range: { is: true, start: 10, end: 20 },
        },
        {
          myAns: 'my ans',
          isCorrect: false,
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
          isCorrect: true,

          myAns: 'onto',
          id: 3,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "FILLIN",
          explanation: "this is sample explanation",
          answer: "onto",
        },
        {
          myAns: '0',
          isCorrect: true,
          id: 4,
          answer: 'A',
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "MCQ",
          ismultipleChoice: false,
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
        {
          myAns: '20',
          isCorrect: true,
          id: 5,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          isPartial: true,
          type: "NUM",
          answer: 20,
          range: { is: true, start: 10, end: 20 },
        },
        {
          myAns: 'this is my answer',
          isCorrect: false,
          id: 6,
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
          myAns: 'this is answer',
          isCorrect: true,
          id: 7,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "FILLIN",
          explanation: "this is sample explanation",
          answer: "this is answer",
        },
        {
          myAns: [0, 1],
          isCorrect: true,
          id: 8,
          answer: "A,B",
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "MCQ",
          ismultipleChoice: true,
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
    {
      title: "Chemistry",
      questions: [
        {
          myAns: '',
          isCorrect: false,
          id: 1,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          isPartial: true,
          type: "NUM",
          answer: 20,
          range: { is: true, start: 10, end: 20 },
        },
        {
          myAns: 'my ans',
          isCorrect: false,
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
          isCorrect: false,

          myAns: '',
          id: 3,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "FILLIN",
          explanation: "this is sample explanation",
          answer: "this is answer",
        },
        {
          myAns: '0',
          isCorrect: true,
          id: 4,
          answer: 'A',
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "MCQ",
          ismultipleChoice: false,
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
    {
      title: "Maths",
      questions: [
        {
          myAns: '',
          isCorrect: false,
          id: 1,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          isPartial: true,
          type: "NUM",
          answer: 20,
          range: { is: true, start: 10, end: 20 },
        },
        {
          myAns: 'my ans',
          isCorrect: false,
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
          isCorrect: false,

          myAns: '',
          id: 3,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "FILLIN",
          explanation: "this is sample explanation",
          answer: "this is answer",
        },
        {
          myAns: '0',
          isCorrect: true,
          id: 4,
          answer: 'A',
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "MCQ",
          ismultipleChoice: false,
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
  ],
});
const response = ref([]);
const MarkedForReview = ref([]);
const viewed = ref([]);

test.value.sections.forEach((element, i) => {
  response.value.push([]);
  MarkedForReview.value.push([]);
  viewed.value.push([]);
  element.questions.forEach((que, j) => {
    if (que?.ismultipleChoice) {
      response.value[i][j] = []
    }
  });
});

const findstyle = (section, question) => {
  if (
    test.value.sections[section].questions[question].isCorrect
  ) {
    return ["bg-green-400", false];
  }
  // console.log(test.value.sections[section].questions[question].myAns.length);
  if (test.value.sections[section].questions[question].myAns.length) {
    return ["bg-red-200", false];
  }
  return ["bg-slate-400", false];
};

const current = ref({
  sectionIndex: 0,
  questionIndex: 0,
});
const currentQuestion = computed(() => {
  return test.value?.sections?.[current.value.sectionIndex]?.questions?.[
    current.value.questionIndex
  ];
});

const changeQuestion = (temp, toIndex) => {
  if (temp == "+1") {
    current.value.questionIndex = current.value.questionIndex + 1;
  } else if (temp == "-1") {
    current.value.questionIndex = current.value.questionIndex - 1;
  } else {
    current.value.questionIndex = toIndex;
  }
  viewed.value[current.value.sectionIndex][current.value.questionIndex] = true;
  return;
};

const changeSection = (toSection) => {
  current.value.sectionIndex = toSection;
  changeQuestion(false, 0);
};

onMounted(async () => {
  console.log("onmount");
  let data = {};


  const myQuery = `
query MyQuery($id: ID!) {
  getAttempt(id: $id) {
    Exam {
      title
      Sections {
        items {
          id
          title
        }
      }
    }
    Responces {
      items {
        time
        sectionID
        responce
        Question {
          Group {
            title
            instruction
            difficuilty
          }
          answer
          criterias {
            percentage
            text
          }
          difficuilty
          explanation
          guidelineTime
          id
          ifCorrect
          ifWrong
          groupID
          instruction
          isNegative
          isPartial
          ismultipleChoice
          maxMarks
          options {
            html
            isCorrectAnswer
            text
          }
          range {
            end
            is
            start
          }
          title
          titleHTML
          topic
          type
          sectionID
        }
      }
    }
    marks
    status
    examID
    id
  }
}

`;

  let attempt = await API.graphql(
    graphqlOperation(myQuery, { id: attemptId })
  );


  attempt = attempt.data.getAttempt;
  console.log(attempt);
  if (attempt) {
    data.title = attempt?.Exam?.title;
    data.sections = attempt?.Exam?.Sections?.items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        questions: []

      }
    })
  }

  let sectionIdtoIndex = {}
  for (let i = 0; i < data.sections.length; ++i) {
    console.log('index', i, 'section', data.sections[i].id);
    sectionIdtoIndex[data.sections[i].id] = i;
  }

  let count = 1;

  await attempt.Responces.items.forEach((item) => {
    let responce = {
      ...item.Question,
      myAns: item.responce,
      time: item.time,
      isCorrect: false,
    }

    if (responce.type == "MCQ" && responce.ismultipleChoice) {
      let temp = [];
      for (let i = 0; i < responce.myAns.length; i++) {
        temp.push(responce.myAns[i]);
      }
      responce.myAns = temp;
    }

    if (responce.myAns || responce.myAns === 0 || responce.myAns === "0") {

      if (responce.type == "MCQ" && responce.ismultipleChoice) {
        let correct = [];
        for (let i = 0; i < responce?.options.length; i++) {
          if (responce?.options[i]?.isCorrectAnswer) {
            correct.push(String.fromCharCode(65 + i));
          }
        }

        console.log(responce?.myAns?.sort(), correct);
        if (responce?.myAns?.sort().join() == correct.join()) {
          responce.isCorrect = true;
          responce.correctCount = count++;
        }
      }

      else if (responce.type == "MCQ") {
        console.log(responce?.myAns?.charCodeAt(0) - 65);
        // console.log(responce?.options?.[responce?.myAns?.charCodeAt(0) - 65]?.isCorrectAnswer);
        if (responce?.options?.[responce?.myAns?.charCodeAt(0) - 65]?.isCorrectAnswer == true) {
          responce.isCorrect = true;
          responce.correctCount = count++;
        } else {
          // console.log("object");
        }
      }
      else if (responce.type == "NUM") {
        console.log(responce.myAns, responce.answer);
        if (responce?.range?.is) {
          if (responce.myAns >= responce.range.start && responce.myAns <= responce.range.end) {
            responce.isCorrect = true;
            responce.correctCount = count++;
          }
        } else if (responce.myAns == responce.answer) {
          responce.isCorrect = true;
          responce.correctCount = count++;
        }
      }
      else if (responce.type == "FILLIN") {
        if (responce.myAns.toLowerCase() == responce.answer.toLowerCase()) {
          responce.isCorrect = true;
          responce.correctCount = count++;
        }
      }

    }

    data.sections[sectionIdtoIndex[item.Question.sectionID]].questions.push(responce);
  })

  data.sections.forEach((sec) => {
    sec.questions.sort((a, b) => {
      const nameA = a?.groupID?.toUpperCase() || ""; // ignore upper and lowercase
      const nameB = b?.groupID?.toUpperCase() || ""; // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    })
  })

  console.log(sectionIdtoIndex);

  console.log(data);
  test.value = data;

})



changeSection(0);

</script>
  
<style lang="scss" scoped></style>
  