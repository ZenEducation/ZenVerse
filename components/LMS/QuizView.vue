<template>
  <div class="w-full main_container dark:bg-slate-900">
    <div class="w-6/12 mx-auto p-4" v-if="!resultShow">
      <div class="quiz_section mt-5">
       
        <div class="question_number uppercase text-xs mb-1">
          Question {{ currrentQuizId + 1 }} of {{ sampleQuizData.length }}
        </div>
        <div
          class="question_name text-xl font-bold"
          v-html="sampleQuizData[currrentQuizId].question"
        ></div>
        <div class="question-type mt-4">
          <div v-if="sampleQuizData[currrentQuizId].type == 'single'">
            Chose only One best answer
          </div>
          <div v-else>Chose ALL answers that apply</div>
        </div>
        <!-- before answer -->
      
        <div class="choices_container" v-if="anseredQuiz == false">
          <div
            class="choices flex my-3 border border-slate-300 cursor-pointer"
            v-for="(option, idx) in currentChoices"
            :key="idx"
            @click="selectAnswer(option)"
            :class="[{ active_option: option.selected }]"
          >
            <!-- :class="[
              { active_option: activeOption && activeOptionId == option.id },
            ]" -->
            <div
              class="choiceId flex-none w-14 h-14 bg-gray-300 dark:bg-slate-600 flex justify-center items-center"
            >
              {{ option.id }}
            </div>
            <div
              class="choice_test grow h-14 flex justify-start items-center px-2"
              v-html="option.option"
            ></div>
            <div
              class="icons flex-none w-14 h-14 flex justify-center items-center"
            ></div>
          </div>
          <div class="text-right">
            <BaseButton
              label="Confirm"
              type="button"
              color="info"
              class="uppercase"
              :style="[]"
              @click="finalAnswer"
              v-if="confirmButtonShown"
            />
          </div>
        </div>
        <!-- After answer -->
        <div class="choices_container" v-if="anseredQuiz == true">
          <div
            class="flex my-3 border border-slate-300"
            v-for="(option, idx) in currentMCQOutPuts"
            :key="idx"
          >
            <div
              class="choiceId flex-none w-14 h-14 bg-gray-300 dark:bg-slate-600 flex justify-center items-center"
              :class="[
                option.selected && !option.correctAnswer
                  ? `incurrect_ans text-white`
                  : '',
                option.correctAnswer && option.selected
                  ? 'currectAns text-white'
                  : '',
              ]"
            >
              {{ option.id }}
            </div>
            <div
              class="choice_test grow h-14 flex justify-start items-center px-2"
              v-html="option.option"
            ></div>
            <div
              class="icons flex-none w-14 h-14 flex justify-center items-center"
            >
              <BaseIcon
                :path="mdiCheckCircle"
                class="cursor-pointer mr-1 text-green-600"
                size="20"
                v-if="option.correctAnswer"
              />
              <BaseIcon
                :path="mdiCloseCircle"
                class="cursor-pointer mr-1 text-red-500"
                size="20"
                disabled
                v-if="option.selected && !option.correctAnswer"
              />
            </div>
          </div>
        </div>
        <!-- remarks -->

        <div
          class="question_remark remarks mt-6 border border-slate-300 p-4 mt-2"
          v-if="ansRemark == true"
        >
          <div class="text-green-600">This answer is correct</div>
          <div
            class="explanation mt-3 font-light"
            v-html="currentQuiz.explanation"
          ></div>
        </div>
        <div
          class="question_remark remarks mt-6 border border-slate-300 p-4 mt-2"
          v-if="ansRemark == false"
        >
          <div class="font-normal">
            <span class="text-red-500">This answer is incorrect. </span> The
            correct answer is
            <span v-for="(item, idx) in currentQuiz.ans" :key="idx">
              '{{ item }}',
            </span>
          </div>
          <div
            class="explanation mt-3 font-light"
            v-html="currentQuiz.explanation"
          ></div>
        </div>
      </div>
      <!-- next button -->
      <div class="text-right">
        <BaseButton
          label="Next "
          type="button"
          color="info"
          class="uppercase mt-5"
          :style="[]"
          v-if="nextButtonShown == true"
          @click="nextQuiz"
        />
        <BaseButton
          label="Result"
          type="button"
          color="info"
          class="uppercase mt-5"
          :style="[]"
          @click="ShowResult"
          v-if="showResualtButton"
        />
      </div>
    </div>
    <div class="showResult w-6/12 mx-auto p-4" v-if="resultShow">
      <div class="question-t text-center text-xl">Hands on Exercise</div>
      <div class="div text-center mt-2">Your score</div>
      <div
        class="score text-center text-6xl mt-5 font-extrabold text-green-600"
      >
        {{ ((currectAnswer / sampleQuizData.length) * 100).toFixed(0) }}%
      </div>
      <BaseButton
        label="Retake Quiz"
        type="button"
        color="info"
        class="uppercase mt-5 text-center"
        :style="[]"
        @click="retakeQuiz"
      />

      <div class="resualtRemark mt-14">
        You answered {{ currectAnswer }} out of
        {{ sampleQuizData.length }} questions correctly
      </div>
      <div
        class="resualts mt-3 bg-gray-100 dark:bg-slate-800 p-5 border"
        v-for="(item, idx) in quizResualt"
        :key="idx"
      >
        <div class="flex justify-between">
          <div v-html="item.question"></div>
          <div>
            <BaseIcon
              :path="mdiCheckCircle"
              class="cursor-pointer mr-1 text-green-600"
              size="20"
              v-if="item.currectAnser"
            />
            <BaseIcon
              :path="mdiCloseCircle"
              class="cursor-pointer mr-1 text-red-500"
              size="20"
              disabled
              v-else
            />
          </div>
        </div>
        <hr class="my-4 decoration-gray-300" />
        <div v-html="item.explanation"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { mdiCheckCircle, mdiCloseCircle } from "@mdi/js";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { computed } from "vue";
const props = defineProps({
  source: {
    type: String,
    default: "",
    required: true,
  },
});
// dummy data
const sampleQuizData = [
  {
    id: 1,
    question: "States of India ",
    type: "multiple",
    choices: [
      {
        id: "A",
        option: "West Bengal",
      },
      {
        id: "B",
        option: "Mumbai",
      },
      {
        id: "C",
        option: "Bihar",
      },
      {
        id: "D",
        option: "Kolkata",
      },
    ],
    ans: ["A", "C"],
    explanation: "Some explanations for the",
  },
  {
    id: 2,
    question: "How many time zones are there in Russia ?",
    type: "single",
    choices: [
      {
        id: "A",
        option: "11",
      },
      {
        id: "B",
        option: "9",
      },
      {
        id: "C",
        option: "15",
      },
    ],
    ans: ["A"],
    explanation: "Some explanations for the",
  },
  {
    id: 3,
    question: "What country has the most islands in the world?",
    type: "single",
    choices: [
      {
        id: "A",
        option: "Dubai",
      },
      {
        id: "B",
        option: "Philippine",
      },
      {
        id: "C",
        option: "Sweden",
      },
    ],
    ans: ["C"],
    explanation: "Some explanations for the",
  },
];
// variables
const currrentQuizId = ref(0);
const currentQuiz = ref(sampleQuizData[currrentQuizId.value]);
const currentChoices = ref(sampleQuizData[currrentQuizId.value].choices);
const chosedOptions = ref(null);
const activeOption = ref(false);
const activeOptionId = ref(null);
const nextButtonShown = ref(false);
const confirmButtonShown = ref(false);
const currentMCQOutPuts = ref(null);
const anseredQuiz = ref(false);
const ansRemark = ref(null);
const quizResualt = ref([]);
const showResualtButton = ref(false);
const resultShow = ref(false);
// select options
const selectAnswer = (option) => {
  chosedOptions.value = null;
  chosedOptions.value = option;
  activeOption.value = true;
  activeOptionId.value = option.id;
  confirmButtonShown.value = true;
  // if quiz is multiple select option type the update the options
  if (currentQuiz.value.type == "multiple") {
    currentChoices.value = currentChoices.value.map((chose) => {
      if (chose.id == option.id) {
        if (chose.selected == true) {
          chose.selected = false;
        } else {
          chose.selected = true;
        }
      }
      return chose;
    });

    console.log(currentChoices.value);
  }
  // if only one select type quiz
  else {
    currentChoices.value = currentChoices.value.map((chose) => {
      if (chose.id == option.id) {
        chose.selected = true;
      } else {
        chose.selected = false;
      }
      return chose;
    });
  }
};

// make final answers
const finalAnswer = () => {
  currentMCQOutPuts.value = null;
  const userAnswer = currentChoices.value;
  const currentQuizItems = currentQuiz.value;
  confirmButtonShown.value = false;

  // create the answer array
  currentMCQOutPuts.value = userAnswer.map((value) => {
    const answer = currentQuizItems.ans.find((item) => item == value.id);
    if (answer) {
      value.correctAnswer = true;
    }

    return value;
  });

  // console.log(currentMCQOutPuts.value)

  // filter user selected answer

  const userSelectedAnswer = userAnswer.filter((item) => item.selected == true);
  // console.log(userSelectedAnswer)
  let userAnserids = [];

  userSelectedAnswer.map((item) => {
    userAnserids.push(item.id);
  });
  console.log(userAnserids, currentQuizItems.ans);
  // remarks

  if (currentQuizItems.ans.sort().join(",") === userAnserids.sort().join(",")) {
    ansRemark.value = true;
    const resualtItem = {
      currectAnser: true,
      question: currentQuiz.value.question,
      explanation: currentQuiz.value.explanation,
    };
    quizResualt.value.push(resualtItem);
  } else {
    ansRemark.value = false;
    const resualtItem = {
      currectAnser: false,
      question: currentQuiz.value.question,
      explanation: currentQuiz.value.explanation,
    };
    quizResualt.value.push(resualtItem);
  }

  anseredQuiz.value = true;

  // show next button

  if (
    sampleQuizData[sampleQuizData.length - 1].id ==
    currentQuiz.value.id
  ) {
    nextButtonShown.value = false;
    showResualtButton.value = true;
  } else {
    nextButtonShown.value = true;
  }
};

// go to the next quiz
const nextQuiz = () => {
  currrentQuizId.value = currrentQuizId.value + 1;
  console.log(currrentQuizId.value);
  anseredQuiz.value = false;
  ansRemark.value = null;
  currentMCQOutPuts.value = null;
  chosedOptions.value = null;
  activeOption.value = false;
  currentQuiz.value = sampleQuizData[currrentQuizId.value];
  currentChoices.value = currentQuiz.value.choices;
  nextButtonShown.value = false;
  currentChoices.value.map((item)=>{
    delete item.selected;
    delete item.correctAnswer
  })
};

const currectAnswer = computed(() => {
  return quizResualt.value.filter((item) => item.currectAnser == true).length;
});

// show quiz resualt
const ShowResult = () => {
  resultShow.value = true;
  window.scrollTo(0, 0);
};

// reatake the quiz
const retakeQuiz = () => {
  resultShow.value=false
  currrentQuizId.value=0
  chosedOptions.value = null;
  activeOption.value = false;
  currrentQuizId.value=0;
  currentQuiz.value=sampleQuizData[0]
  currentChoices.value=sampleQuizData[0].choices
  activeOptionId.value=null
  nextButtonShown.value=false
  confirmButtonShown.value=false
  currentMCQOutPuts.value=null
  anseredQuiz.value = false;
  ansRemark.value=null
  quizResualt.value=[]
  showResualtButton.value=false
  resultShow.value=false
  // location.reload();
  // removed selected option
  currentChoices.value.map((item)=>{
    delete item.selected;
    delete item.correctAnswer
  })
};
</script>

<style scoped>
.main_container {
  padding-bottom: 10% !important;
  min-height: 100%;
}
.choices:hover {
  border-color: #293e6e !important;
}
.choices:hover .choiceId {
  background: #293e6e !important;
  color: white;
}

.active_option {
  border-color: #293e6e !important;
}
.active_option .choiceId {
  background: #293e6e !important;
  color: white;
}

.incurrect_ans {
  background: #dd412d;
}
.currectAns {
  background: #3d813e;
}

hr {
  border: 1px solid rgb(153, 153, 153);
  border-radius: 5px;
}
</style>
