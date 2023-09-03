<template>
  <div class="absolute top-0 h-16 z-30 bg-slate-50 border-b px-4 flex items-center w-full">
    <p class="text-xl">{{ finalData.title }}</p>
  </div>
  <div v-if="loaded" class="w-4/5 pt-20 mx-auto h-screen overflow-y-scroll scrollbar-none">
    <p class="font-semibold text-4xl pb-4">{{ finalData.title }}</p>
    <div class="flex gap-5 max-md:block">
      <div class="w-1/4 max-md:w-5/6 my-3 max-md:mx-auto border-2 rounded-lg py-10 text-center">
        <p class="font-semibold text-lg">
          Your Score
          <!-- <DounutChart :data="graph_data.correct" /> -->
        </p>
        <p class="font-semibold text-2xl">{{ finalData.marks.correct + finalData.marks.negative }}</p>
        <p class="font-light text-lg pb-6">{{ `out of ${finalData.marks.max}` }}</p>
        <div class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold">
          <p>Percentile</p>
          <p>N/A</p>
        </div>
        <div class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold">
          <p>Accuracy</p>
          <p>{{ `${Math.round((finalData.questions.correct * 100) / (finalData.questions.correct +
            finalData.questions.incorrect))} %` }}</p>
        </div>
        <div class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold">
          <p>Percentage</p>
          <p>{{ `${Math.round((finalData.questions.score * 100) / (finalData.marks.correct + finalData.marks.incorrect))} %`
          }}</p>
        </div>
        <NuxtLink :to="'/examportal/learner/examSolution/' + attemptId">
          <BaseButton label="VIEW SOLUTION" color="info" class="w-5/6 mx-auto mt-8" />
        </NuxtLink>
      </div>
      <div class="w-2/3 max-md:w-5/6 my-3 max-md:mx-auto border-2 rounded-lg py-10 px-4">
        <p class="">total Marks: <span class="font-semibold">{{ finalData.marks.max }}</span></p>

        <div class="py-6 mx-auto grid grid-cols-4 gap-5 text-center">
          <div class="items-center justify-between">
            <DounutChart :data="graph_data.correct" />
            <p class="font-semibold">Correct</p>
          </div>
          <div class="items-center justify-between">
            <DounutChart :data="graph_data.incorrect" />
            <p class="font-semibold">Incorrect</p>
          </div>
          <div class="items-center justify-between">
            <DounutChart :data="graph_data.negetiveMarking" />
            <p class="font-semibold">Negative Marking</p>
          </div>
          <div class="items-center justify-between">
            <DounutChart :data="graph_data.skipped" />
            <p class="font-semibold">Skipped</p>
          </div>
        </div>
        <p class="">
          You have scored <span class="font-semibold">{{ finalData.marks.correct  }}
            marks</span> for correct
          answers, missed <span class="font-semibold">{{ finalData.marks.incorrect }} marks</span> on
          incorrect answers , lost
          <span class="font-semibold">{{ -finalData.marks.negative }} marks</span> due to negative marking and
          <span class="font-semibold">{{ finalData.marks.skipped }} marks</span>
          by skipping questions.
        </p>
      </div>
    </div>

    <div class="flex justify-between items-center my-6 py-3">
      <p class="text-xl font-semibold">Section Analysis</p>
      <NuxtLink :to="'/examportal/learner/SectionReport/' + attemptId">
        <BaseButton label="Compare Section" :icon="mdiArrowRight" />
      </NuxtLink>
    </div>
    <div class="flex gap-5 max-md:block">
      <div class="w-1/4 max-md:w-5/6 my-3 max-md:mx-auto border-2 rounded-lg py-10 text-center"
        v-for="item in finalData.sections">
        <p class="font-semibold text-lg">
          {{ item.title }}
        </p>
        <p class="font-semibold text-2xl">{{ item.score }}</p>
        <p class="font-light text-lg pb-6">out of {{ item.totalMarks }}</p>
        <div class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold border-t-2">
          <p>Percentile</p>
          <p>N/A</p>
        </div>
        <div class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold">
          <p>Accuracy</p>
          <p>{{ `${Math.round((item.isCorrect * 100) / (item.isCorrect + item.isIncorrect)) || 0} %` }}</p>
        </div>
        <div class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold">
          <p>Percentage</p>
          <p>{{ `${Math.round((item.score * 100) / (item.totalMarks)) || 0} %` }}</p>
        </div>
      </div>
    </div>

    <div class="flex justify-between items-center my-6 py-3">
      <p class="text-xl font-semibold">Question Report</p>
      <NuxtLink :to="'/examPortal/learner/QuestionReport/' + attemptId">
        <BaseButton label="View Report" :icon="mdiArrowRight" />
      </NuxtLink>
    </div>

    <div class="grid grid-cols-6 max-sm:grid-cols-2 gap-3 text-center border-2 rounded-lg py-5 px-4">
      <div>
        <p class="font-semibold text-xl">{{ finalData.questions?.total }}</p>
        <p class="text-base">Questions</p>
      </div>
      <div>
        <p class="font-semibold text-xl">{{ finalData.questions.correct }}</p>
        <p class="text-base">Correct</p>
      </div>
      <div>
        <p class="font-semibold text-xl">{{ finalData.questions.incorrect }}</p>
        <p class="text-base">Incorrect</p>
      </div>
      <div>
        <p class="font-semibold text-xl">{{ finalData.questions.skipped }}</p>
        <p class="text-base">Skipped</p>
      </div>
      <div>
        <p class="font-semibold text-xl">{{ finalData.questions.score }}</p>
        <p class="text-base">Score</p>
      </div>
      <div>
        <p class="font-semibold text-xl">{{ `${Math.floor(finalData.questions.timeTaken / 60)}m
                  ${finalData.questions.timeTaken % 60}s` }}</p>
        <p class="text-base">Time Taken</p>
      </div>
    </div>

    <div class="flex justify-between items-center my-6 py-3">
      <p class="text-xl font-semibold">How did you perform ?</p>
      <NuxtLink :to="'/examportal/learner/STReport/' + attemptId">
        <BaseButton label="View Report" :icon="mdiArrowRight" />
      </NuxtLink>
    </div>
    <div class="flex gap-5 max-md:block">
      <div class="w-1/4 max-md:w-5/6 my-3 max-md:mx-auto border-2 rounded-lg py-10 text-center">
        <p class="font-semibold text-lg">Time Analysis</p>
        <div class="flex justify-center">
          <div class="w-5/12">
            <PieChart :data="{
              labels: ['correct', 'Incorrect', 'Skipped'],
              datasets: [
                {
                  label: 'My First Dataset',
                  data: [finalData.time.correct, finalData.time.incorrect, finalData.time.skipped],
                  backgroundColor: ['green', 'red', 'yellow'],
                  hoverOffset: 4,
                },
              ],
            }" />
          </div>
        </div>

        <p class="font-semibold text-2xl">{{ `${Math.floor(finalData.questions.timeTaken / 60)}m
                            ${finalData.questions.timeTaken % 60}s` }}</p>
        <p class="font-light text-lg pb-6">total time spent</p>
        <div class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold">
          <p>On Correct Answers</p>
          <p>{{ `${Math.round((finalData.time.correct * 100) / (finalData.questions.timeTaken)) || 0} %` }}</p>
        </div>
        <div class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold">
          <p>On Incorrect Answers</p>
          <p>{{ `${Math.round((finalData.time.incorrect * 100) / (finalData.questions.timeTaken)) || 0} %` }}</p>
        </div>
        <div class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold">
          <p>On Skipped</p>
          <p>{{ `${Math.round((finalData.time.skipped * 100) / (finalData.questions.timeTaken)) || 0} %` }}</p>
        </div>
      </div>
      <div class="w-2/3 max-md:w-5/6 my-3 max-md:mx-auto border-2 rounded-lg py-10 px-4">
        <p class="">total Marks: <span class="font-semibold">{{finalData.marks.max}}</span></p>
        <div class="flex justify-center">
          <HorizontalBarChart :labels="['correct', 'Incorrect', 'Skipped']" :datasets="[
            {
              data: [finalData.marks.correct, finalData.marks.incorrect , finalData.marks.skipped ],
              backgroundColor: ['green', 'red', 'yellow'],
            },
          ]" />
        </div>
          <p class="">
            You have scored <span class="font-semibold">{{ finalData.marks.correct  }}
              marks</span> for correct
            answers, missed <span class="font-semibold">{{ finalData.marks.incorrect }} marks</span> on
            incorrect answers , lost
            <span class="font-semibold">{{ -finalData.marks.negative }} marks</span> due to negative marking and
            <span class="font-semibold">{{ finalData.marks.skipped }} marks</span>
            by skipping questions.
          </p>
      </div>
    </div>

    <div class="flex justify-between items-center my-6 py-3">
      <p class="text-xl font-semibold">Topic Report</p>
      <NuxtLink :to="'/examportal/learner/TopicReport/' + attemptId">
        <BaseButton label="View Report" :icon="mdiArrowRight" />
      </NuxtLink>
    </div>
    <div class="flex justify-center w-4/6">
      <VerticalBarChart :labels="finalData.topicsList" x_label="Topic" y_label="Topic marks distribution And score"
        :datasets="[
          {
            barPercentage: 0.4, // Set the bar width as a percentage of available space
            categoryPercentage: 0.5, // Set the width of each category as a percentage of the total axis width
            data: finalData.topicsValues,
          },
        ]" />
    </div>

    <div class="flex justify-between items-center my-6 py-3">
      <p class="text-xl font-semibold">Difficulty Level Analysis</p>

      <NuxtLink :to="'/examportal/learner/DLReport/' + attemptId">
        <BaseButton label="View Report" :icon="mdiArrowRight" />
      </NuxtLink>
    </div>
    <div class="flex gap-5 max-md:block">
      <div class="w-1/4 max-md:w-5/6 my-3 max-md:mx-auto border-2 rounded-lg py-10 text-center">
        <p class="font-semibold text-lg">Question Distribution</p>
        <div class="flex justify-center">
          <div class="w-5/12">
            <PieChart :data="{
              labels: ['Easy', 'Moderate', 'Hard'],
              datasets: [
                {
                  label: 'My First Dataset',
                  data: [finalData.time.EASY, finalData.time.MODERATE , finalData.time.HARD],
                  backgroundColor: ['green', 'red', 'yellow'],
                  hoverOffset: 4,
                },
              ],
            }" />
          </div>
        </div>
        <p class="font-semibold text-2xl">{{ `${Math.floor(finalData.questions.timeTaken / 60)}m
                                      ${finalData.questions.timeTaken % 60}s` }}</p>
        <p class="font-light text-lg pb-6">total time spent</p>
        <div class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold">
          <p>On Easy Questions</p>
            <p>{{ `${Math.round((finalData.time.EASY * 100) / (finalData.questions.timeTaken)) || 0} %` }}</p>
          </div>
        <div class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold">
          <p>On Medium Questions</p>
            <p>{{ `${Math.round((finalData.time.MODERATE * 100) / (finalData.questions.timeTaken)) || 0} %` }}</p>
          </div>
        <div class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold">
          <p>On Intense Questions</p>
            <p>{{ `${Math.round((finalData.time.HARD * 100) / (finalData.questions.timeTaken)) || 0} %` }}</p>
          </div>
      </div>
      <div class="w-2/3 max-md:w-5/6 my-3 max-md:mx-auto border-2 rounded-lg py-10 px-4">
        <div class="flex justify-center">
          <HorizontalBarChart :labels="['Easy', 'Moderate', 'Hard']" :datasets="[
            {
              data: [finalData.marks.EASY, finalData.marks.MODERATE, finalData.marks.HARD],
              backgroundColor: ['green', 'red', 'yellow'],
            },
          ]" />
        </div>
            <p class="">
              You have scored <span class="font-semibold">{{ finalData.marks.EASY }}
                marks</span> for easy
              answers,<span class="font-semibold">{{ finalData.marks.MODERATE }}
                  marks</span> for Moderate
                answers,<span class="font-semibold">{{ finalData.marks.HARD }}
                  marks</span> for Intense
                answers.
            </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "~~/components/Buttons/BaseButton.vue";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import VerticalBarChart from "~~/components/Charts/VerticalBarChart.vue";
import HorizontalBarChart from "~~/components/Charts/HorizontalBarChart.vue";
import DounutChart from "@/components/Charts/DounutChart.vue";
import PieChart from "@/components/Charts/PieChart.vue";
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
} from "@mdi/js";

import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const attemptId = route.params.attemptId;
console.log(attemptId);
import { API, graphqlOperation } from "aws-amplify";

let loaded = ref(false)

const finalData = ref({
  title: "JEE Main | FSTs | V01",
  sections: [
    {
      title: "physics",
      questions: 20,
      isCorrect: 10,/// correct ans no
      isIncorrect: 13,
      totalMarks: 60,
      score: 32,// total sum of currect ans 
      time: 30,

    },
    {
      title: "chemistry",
      questions: 20,
      isCorrect: 10,
      marksCorrect: 32,
      isIncorrect: 13,
      totalMarks: 60,
      time: 30,
    },
    {
      title: "Mathematics",
      questions: 20,
      isCorrect: 10,
      marksCorrect: 32,
      isIncorrect: 13,
      totalMarks: 60,
      time: 30,
    },
  ],
  questions: {
    total: 0,
    correct: 0,
    incorrect: 0,
    skipped: 0,
    score: 0,
    timeTaken: 0,
  },
  time: {
    correct: 0,
    incorrect: 0,
    skipped: 0,
    easy: 0,
    moderate: 0,
    hard: 0,
  },
  marks: {
    correct: 0,
    incorrect: 0,
    negative: 0,
    skipped: 0,
    easy: 0,
    moderate: 0,
    hard: 0,
    max: 20,
  }
});

const graph_data = ref({
  //4 doughnuts
  correct: {
    labels: ["correct", "other"],
    datasets: [
      {
        data: [finalData.value.marks.correct, finalData.value.marks.max],
        backgroundColor: ["rgb(54, 162, 235)", "rgb(243, 236, 234)"],
        hoverOffset: 4,
      },
    ],
  },
  incorrect: {
    labels: ["incorrect", "other"],
    datasets: [
      {
        data: [
          finalData.value.marks.incorrect,
          finalData.value.marks.max,
        ],
        backgroundColor: ["rgb(54, 162, 235)", "rgb(243, 236, 234)"],
        hoverOffset: 4,
      },
    ],
  },
  negetiveMarking: {
    labels: ["Negetive", "other"],
    datasets: [
      {
        data: [
          finalData.value.marks.negative,
          finalData.value.marks.max,
        ],
        backgroundColor: ["rgb(54, 162, 235)", "rgb(243, 236, 234)"],
        hoverOffset: 4,
      },
    ],
  },
  skipped: {
    labels: ["skipped", "other"],
    datasets: [
      {
        data: [finalData.value.marks.skipped,
        finalData.value.marks.max,],
        backgroundColor: ["rgb(54, 162, 235)", "rgb(243, 236, 234)"],
        hoverOffset: 4,
      },
    ],
  },
  sectionReport: {
    labels: ["physics", "chemistry", "Mathematics"],
    datasets: [
      {
        label: "Total Score",
        data: [55, 49, 44],
        backgroundColor: "blue",
      },
      {
        label: "My Score",
        data: [12, 15, 18],
        backgroundColor: "red",
      },
    ],
  },
  sectionAccuracy: {
    labels: ["physics", "chemistry", "Mathematics"],
    datasets: [
      {
        label: "Accuracy",
        data: [55, 49, 44],
        backgroundColor: "blue",
      },
    ],
  },
  sectionTime: {
    labels: ["physics", "chemistry", "Mathematics"],
    datasets: [
      {
        label: "Accuracy",
        data: [55, 49, 34],
        backgroundColor: "blue",
      },
    ],
  },
  perform: {},
});

onMounted(async () => {
  console.log("onmount");
  let data = {

    questions: {
      total: 0,
      correct: 0,
      incorrect: 0,
      skipped: 0,
      score: 0,
      timeTaken: 0,
      EASY: 0,
      MODERATE: 0,
      HARD: 0,
    },
    time: {
      correct: 0,
      incorrect: 0,
      skipped: 0,
      EASY: 0,
      MODERATE: 0,
      HARD: 0,
    },
    marks: {
      correct: 0,
      incorrect: 0,
      negative: 0,
      skipped: 0,
      max: 0,
      EASY: 0,
      MODERATE: 0,
      HARD: 0,
    },
    topics: {

    }

  };


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
        questions: 0,
        isCorrect: 0,
        isIncorrect: 0,
        totalMarks: 0,
        time: 0,
        score: 0,
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

    if (!(responce.topic in data.topics)) {
      data.topics[responce.topic] = 0 ;
    }

    if (responce.isCorrect) {
      // correct
      data.sections[sectionIdtoIndex[item.Question.sectionID]].questions++;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].isCorrect++;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].score += responce.ifCorrect;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].totalMarks += responce.ifCorrect;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].time += responce.time;
      // data.sections[sectionIdtoIndex[item.Question.sectionID]][responce.difficuilty]++;

      data.questions.correct++;
      data.questions.total++;
      data.questions.score += responce.ifCorrect;
      data.questions.timeTaken += responce.time;
      data.questions[responce.difficuilty]++;


      data.time.correct += responce.time;
      data.time[responce.difficuilty] += responce.time;

      data.marks.correct += responce.ifCorrect;
      data.marks.max += responce.ifCorrect;
      data.marks[responce.difficuilty] += responce.ifCorrect;

      data.topics[responce.topic] += responce.ifCorrect;

    } else if (responce.myAns || responce.myAns == 0) {
      // incorrect
      data.sections[sectionIdtoIndex[item.Question.sectionID]].questions++;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].isIncorrect++;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].score += responce.ifWrong;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].totalMarks += responce.ifCorrect;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].time += responce.time;
      // data.sections[sectionIdtoIndex[item.Question.sectionID]][responce.difficuilty]++;

      data.questions.incorrect++;
      data.questions.total++;
      data.questions.score += responce.ifWrong;
      data.questions.timeTaken += responce.time;
      data.questions[responce.difficuilty]++;


      data.time.incorrect += responce.time;
      data.time[responce.difficuilty] += responce.time;

      data.marks.incorrect += responce.ifCorrect;
      data.marks.negative += responce.ifWrong
      data.marks.max += responce.ifCorrect;
      data.marks[responce.difficuilty] += responce.ifWrong;

      data.topics[responce.topic] += responce.ifWrong;


    }
    else {
      data.sections[sectionIdtoIndex[item.Question.sectionID]].questions++;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].totalMarks += responce.ifCorrect;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].time += responce.time;
      // data.sections[sectionIdtoIndex[item.Question.sectionID]][responce.difficuilty]++;

      data.questions.skipped++;
      data.questions.total++;
      data.questions.timeTaken += responce.time;
      data.questions[responce.difficuilty]++;


      data.time.skipped += responce.time;
      data.time[responce.difficuilty] += responce.time;


      data.marks.max += responce.ifCorrect;
      data.marks.skipped += responce.ifCorrect;

    }

    // data.sections[sectionIdtoIndex[item.Question.sectionID]].questions.push(responce);
  })

  data.topicsList = [];
  data.topicsValues = [];
  for( let item in data.topics){
    data.topicsList.push(item);
    data.topicsValues.push(data.topics[item])
  } 

  console.log(sectionIdtoIndex);

  console.log(data);
  finalData.value = data;

  graph_data.value = {
    //4 doughnuts
    correct: {
      labels: ["correct", "other"],
      datasets: [
        {
          data: [finalData.value.marks.correct, finalData.value.marks.max - finalData.value.marks.correct ],
          backgroundColor: ["rgb(54, 162, 235)", "rgb(243, 236, 234)"],
          hoverOffset: 4,
        },
      ],
    },
    incorrect: {
      labels: ["incorrect", "other"],
      datasets: [
        {
          data: [
            finalData.value.marks.incorrect,
            finalData.value.marks.max - finalData.value.marks.incorrect,
          ],
          backgroundColor: ["rgb(54, 162, 235)", "rgb(243, 236, 234)"],
          hoverOffset: 4,
        },
      ],
    },
    negetiveMarking: {
      labels: ["Negetive", "other"],
      datasets: [
        {
          data: [
            finalData.value.marks.negative,
            finalData.value.marks.max + finalData.value.marks.negative,
          ],
          backgroundColor: ["rgb(54, 162, 235)", "rgb(243, 236, 234)"],
          hoverOffset: 4,
        },
      ],
    },
    skipped: {
      labels: ["skipped", "other"],
      datasets: [
        {
          data: [finalData.value.marks.skipped,
          finalData.value.marks.max - finalData.value.marks.skipped],
          backgroundColor: ["rgb(54, 162, 235)", "rgb(243, 236, 234)"],
          hoverOffset: 4,
        },
      ],
    },


  };


  loaded.value = true;

})
</script>

<style lang="scss" scoped></style>
