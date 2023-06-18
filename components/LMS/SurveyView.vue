<template>
  <div class="w-full min-h-full main_container dark:bg-slate-900">
    <div class="w-6/12 mx-auto p-4" v-if="completed==false">

      <div class="question_number uppercase text-xs mb-1 mt-5">
        Question {{ currrentQuizId+1 }} of {{ surveyData.length }}
      </div>
      <div
        class="question_name text-xl font-bold"
        v-html="surveyData[currrentQuizId].question"
      ></div>

      <div class="question_type mt-3">
        <TextArea v-if="surveyData[currrentQuizId].type == 'textarea'" @on-action="makedAction"  />
        <Quiz v-if="surveyData[currrentQuizId].type == 'quiz'" :source="surveyData[currrentQuizId]" @on-action="makedAction"   />
        <Rating v-if="surveyData[currrentQuizId].type == 'ratings'" @on-action="makedAction"  />
        <Scale v-if="surveyData[currrentQuizId].type == 'scale'" @on-action="makedAction"  />
        <div class="text-right mt-3">
        <BaseButton
          label="Confirm"
          type="button"
          color="info"
          class="uppercase"
          :style="[]"
          @click="nextQuestion"
          v-if="showConfiemBtn"
        />
      </div>
      </div>

  
    </div>
    <div class=" text-center pt-10" v-if="completed==true">
      <div class="">
        Survey Completed
      </div>

      <BaseButton
          label="Continue"
          type="button"
          color="info"
          class="uppercase mt-3"
          :style="[]"
          @click="allPdfData.markAsCompleted(allPdfData.currentPDF, allPdfData.currentChapter)"
        
        />
      </div>
  </div>
</template>

<script setup>
import TextArea from "./Survey/TextArea.vue";
import Quiz from "./Survey/Quiz.vue";
import Rating from "./Survey/Rating.vue";
import Scale from "./Survey/Scale.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import {pdfViewerStore} from "~/stores/lmsLearnerDisplay.js"
const allPdfData = pdfViewerStore()

const props = defineProps({
  source: {
    type: String,
    default: "",
    required: true,
  },
});
const surveyData = [
  {
    id: 1,
    question: "What is your open-ended question ?",
    type: "textarea",
    ans: null,
  },
  {
    id: 2,
    question: "Which one is not a fruit",
    type: "quiz",
    method: "single",
    choices: [
      {
        id: "A",
        option: "Mango",
      },
      {
        id: "B",
        option: "Apple",
      },
      {
        id: "C",
        option: "Chair",
      },
      {
        id: "D",
        option: "Banana",
      },
    ],
    ans: null,
  },
  {
    id: 3,
    question: "What is ",
    type: "quiz",
    method: "multiple",

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
    ans: null,
  },

  {
    id: 4,
    question: "Ratings",
    type: "ratings",
    ans: null,
  },

  {
    id: 5,
    question: "Scale Question",
    type: "scale",
    ans: null,
  },
];

const currrentQuizId = ref(0);
const currentQuestion = ref(surveyData[currrentQuizId.value]);
const showConfiemBtn=ref(false)
const completed=ref(false)

const nextQuestion =()=>{
  if(surveyData.length-1==currrentQuizId.value){
    showConfiemBtn.value=false
    completed.value=true
  } else {
  
    currrentQuizId.value=currrentQuizId.value+1
    
  }
  showConfiemBtn.value=false
}


const makedAction =()=>{

  showConfiemBtn.value=true
}

</script>

<style scoped>
.main_container {
  padding-bottom: 10% !important;
}
</style>
