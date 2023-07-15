<template>
  <div
    class="absolute top-0 h-16 z-30 bg-slate-50 border-b px-4 flex items-center w-full"
  >
    <p class="text-xl">JEE Main | FSTs | V01</p>
  </div>
  <div class="w-4/5 pt-20 mx-auto h-screen overflow-y-scroll scrollbar-none">
    <p class="font-semibold text-4xl pb-4">JEE Main | FSTs | V01</p>
    <div class="flex gap-5 max-md:block">
      <div
        class="w-1/4 max-md:w-5/6 my-3 max-md:mx-auto border-2 rounded-lg py-10 text-center"
      >
        <p class="font-semibold text-lg">
          Your Score
          <!-- <DounutChart :data="graph_data.correct" /> -->
        </p>
        <p class="font-semibold text-2xl">0</p>
        <p class="font-light text-lg pb-6">out of 360</p>
        <div
          class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold"
        >
          <p>Percentile</p>
          <p>N/A</p>
        </div>
        <div
          class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold"
        >
          <p>Accuracy</p>
          <p>0%</p>
        </div>
        <div
          class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold"
        >
          <p>Percentage</p>
          <p>0%</p>
        </div>
        <NuxtLink to="/examportal/learner/examSolution">
          <BaseButton
            label="VIEW SOLUTION"
            color="info"
            class="w-5/6 mx-auto mt-8"
          />
        </NuxtLink>
      </div>
      <div
        class="w-2/3 max-md:w-5/6 my-3 max-md:mx-auto border-2 rounded-lg py-10 px-4"
      >
        <p class="">total Marks: <span class="font-semibold">360</span></p>

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
          You have scored <span class="font-semibold">0 marks</span> for correct
          answers, missed <span class="font-semibold">0 marks</span> on
          incorrect answers , lost
          <span class="font-semibold">0 marks</span> due to negative marking and
          <span class="font-semibold">360 marks</span>
          by skipping questions.
        </p>
      </div>
    </div>

    <div class="flex justify-between items-center my-6 py-3">
      <p class="text-xl font-semibold">Section Analysis</p>
      <NuxtLink to="/examportal/learner/SectionReport">
        <BaseButton label="Compare Section" :icon="mdiArrowRight" />
      </NuxtLink>
    </div>
    <div class="flex gap-5 max-md:block">
      <div
        class="w-1/4 max-md:w-5/6 my-3 max-md:mx-auto border-2 rounded-lg py-10 text-center"
        v-for="item in data.sections"
      >
        <p class="font-semibold text-lg">
          {{ item.title }}
        </p>
        <p class="font-semibold text-2xl">0</p>
        <p class="font-light text-lg pb-6">out of 360</p>
        <div
          class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold border-t-2"
        >
          <p>Percentile</p>
          <p>N/A</p>
        </div>
        <div
          class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold"
        >
          <p>Accuracy</p>
          <p>0%</p>
        </div>
        <div
          class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold"
        >
          <p>Percentage</p>
          <p>0%</p>
        </div>
      </div>
    </div>

    <div class="flex justify-between items-center my-6 py-3">
      <p class="text-xl font-semibold">Question Report</p>
      <NuxtLink to="/examPortal/learner/QuestionReport">
        <BaseButton label="View Report" :icon="mdiArrowRight" />
      </NuxtLink>
    </div>

    <div
      class="grid grid-cols-6 max-sm:grid-cols-2 gap-3 text-center border-2 rounded-lg py-5 px-4"
    >
      <div>
        <p class="font-semibold text-xl">90</p>
        <p class="text-base">Questions</p>
      </div>
      <div>
        <p class="font-semibold text-xl">0</p>
        <p class="text-base">Correct</p>
      </div>
      <div>
        <p class="font-semibold text-xl">0</p>
        <p class="text-base">Incorrect</p>
      </div>
      <div>
        <p class="font-semibold text-xl">90</p>
        <p class="text-base">Skipped</p>
      </div>
      <div>
        <p class="font-semibold text-xl">0</p>
        <p class="text-base">Score</p>
      </div>
      <div>
        <p class="font-semibold text-xl">2m10s</p>
        <p class="text-base">Time Taken</p>
      </div>
    </div>

    <div class="flex justify-between items-center my-6 py-3">
      <p class="text-xl font-semibold">How did you perform ?</p>
      <NuxtLink to="/examportal/learner/STReport">
        <BaseButton label="View Report" :icon="mdiArrowRight" />
      </NuxtLink>
    </div>
    <div class="flex gap-5 max-md:block">
      <div
        class="w-1/4 max-md:w-5/6 my-3 max-md:mx-auto border-2 rounded-lg py-10 text-center"
      >
        <p class="font-semibold text-lg">Time Analysis</p>
        <div class="flex justify-center">
          <div class="w-5/12">
            <PieChart
              :data="{
                labels: ['correct', 'Incorrect', 'Skipped'],
                datasets: [
                  {
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    backgroundColor: ['green', 'red', 'yellow'],
                    hoverOffset: 4,
                  },
                ],
              }"
            />
          </div>
        </div>

        <p class="font-semibold text-2xl">2m10s</p>
        <p class="font-light text-lg pb-6">total time spent</p>
        <div
          class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold"
        >
          <p>On Correct Answers</p>
          <p>0%</p>
        </div>
        <div
          class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold"
        >
          <p>On Incorrect Answers</p>
          <p>0%</p>
        </div>
        <div
          class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold"
        >
          <p>On Skipped</p>
          <p>100%</p>
        </div>
      </div>
      <div
        class="w-2/3 max-md:w-5/6 my-3 max-md:mx-auto border-2 rounded-lg py-10 px-4"
      >
        <p class="">total Marks: <span class="font-semibold">360</span></p>
        <div class="flex justify-center">
          <HorizontalBarChart
            :labels="['correct', 'Incorrect', 'Skipped']"
            :datasets="[
              {
                data: [55, 10, 40],
                backgroundColor: ['green', 'red', 'yellow'],
              },
            ]"
          />
        </div>
        <p class="">
          You have scored <span class="font-semibold">0 marks</span> for correct
          answers, missed <span class="font-semibold">0 marks</span> on
          incorrect answers , lost
          <span class="font-semibold">0 marks</span> due to negative marking and
          <span class="font-semibold">360 marks</span>
          by skipping questions.
        </p>
      </div>
    </div>

    <div class="flex justify-between items-center my-6 py-3">
      <p class="text-xl font-semibold">Topic Report</p>
      <NuxtLink to="/examportal/learner/TopicReport">
        <BaseButton label="View Report" :icon="mdiArrowRight" />
      </NuxtLink>
    </div>
    <div class="flex justify-center w-4/6">
      <VerticalBarChart
        :labels="['Others', 'My Marks']"
        x_label="Topic"
        y_label="Topic marks distribution And score"
        :datasets="[
          {
            barPercentage: 0.4, // Set the bar width as a percentage of available space
            categoryPercentage: 0.5, // Set the width of each category as a percentage of the total axis width
            data: [55, 10],
            backgroundColor: ['#123333', 'red'],
          },
        ]"
      />
    </div>

    <div class="flex justify-between items-center my-6 py-3">
      <p class="text-xl font-semibold">Difficulty Level Analysis</p>

      <NuxtLink to="/examportal/learner/DLReport">
        <BaseButton label="View Report" :icon="mdiArrowRight" />
      </NuxtLink>
    </div>
    <div class="flex gap-5 max-md:block">
      <div
        class="w-1/4 max-md:w-5/6 my-3 max-md:mx-auto border-2 rounded-lg py-10 text-center"
      >
        <p class="font-semibold text-lg">Question Distribution</p>
        <div class="flex justify-center">
          <div class="w-5/12">
            <PieChart
              :data="{
                labels: ['correct', 'Incorrect', 'Skipped'],
                datasets: [
                  {
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    backgroundColor: ['green', 'red', 'yellow'],
                    hoverOffset: 4,
                  },
                ],
              }"
            />
          </div>
        </div>
        <p class="font-semibold text-2xl">2m10s</p>
        <p class="font-light text-lg pb-6">total time spent</p>
        <div
          class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold"
        >
          <p>On Easy Questions</p>
          <p>0%</p>
        </div>
        <div
          class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold"
        >
          <p>On Medium Questions</p>
          <p>0%</p>
        </div>
        <div
          class="w-5/6 mx-auto h-6 flex items-center justify-between font-semibold"
        >
          <p>On Intense Questions</p>
          <p>100%</p>
        </div>
      </div>
      <div
        class="w-2/3 max-md:w-5/6 my-3 max-md:mx-auto border-2 rounded-lg py-10 px-4"
      >
        <div class="flex justify-center">
          <HorizontalBarChart
            :labels="['correct', 'Incorrect', 'Skipped']"
            :datasets="[
              {
                data: [55, 10, 40],
                backgroundColor: ['green', 'red', 'yellow'],
              },
            ]"
          />
        </div>
        <p class="">
          You have scored <span class="font-semibold">0 marks</span> for correct
          answers, missed <span class="font-semibold">0 marks</span> on
          incorrect answers , lost
          <span class="font-semibold">0 marks</span> due to negative marking and
          <span class="font-semibold">360 marks</span>
          by skipping questions.
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

const data = {
  testName: "JEE Main | FSTs | V01",
  total: {
    score: 180,
    max: 360,
    totalQue: 90,
    correct: 47,
    incorrect: 8,
    Skipped: 35,
    forCorrect: 4,
    forIncorrect: -1,
    precentile: 95,
  },
  sections: [
    {
      title: "physics",
    },
    {
      title: "chemistry",
    },
    {
      title: "Mathematics",
    },
  ],
};

const graph_data = {
  //4 doughnuts
  correct: {
    labels: ["correct", "other"],
    datasets: [
      {
        data: [data.total.correct, data.total.totalQue - data.total.correct],
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
          data.total.incorrect * -1,
          (data.total.totalQue - data.total.incorrect) * -1,
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
          data.total.incorrect,
          data.total.totalQue - data.total.incorrect,
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
        data: [data.total.Skipped, data.total.totalQue - data.total.Skipped],
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
};
</script>

<style lang="scss" scoped></style>
