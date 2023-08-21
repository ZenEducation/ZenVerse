<template>
  <NuxtLayout name="lmsstudent">
    <div class="flex max-md:block">
      <div class="w-2/3 max-md:w-full max-md:h-auto h-screen p-10 pb-30">
        <p class="uppercase cursor-pointer mb-8">
          <span class="text-blue-600">store</span>/ <span> bundle </span> /
          <span> fst | jee Main | pcm </span>
        </p>
        <p class="capitalize font-bold text-2xl">{{examData.mockTestTitle}}</p>
        <p>{{examData.examTitle}}</p>
        <div
          class="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4 my-3"
        >
          <div class="text-center border rounded py-2">
            <p class="font-semibold">{{examData.status}}</p>
            <p class="font-light text-sm">Status</p>
          </div>
          <div class="text-center border rounded py-2">
            <p class="font-semibold">{{examData.marks}}</p>
            <p class="font-light text-sm">Marks</p>
          </div>
          <div class="text-center border rounded py-2">
            <p class="font-semibold">{{examData.minutes}}</p>
            <p class="font-light text-sm">Minutes</p>
          </div>
          <div class="text-center border rounded py-2">
            <p class="font-semibold">{{examData.questions}}</p>
            <p class="font-light text-sm">Questions</p>
          </div>
        </div>

        <template v-if="examData.attempts">

        <div
        class="flex flex-wrap border rounded justify-between px-6 py-2 my-4 items-center"
      >
        <p class="text-lg font-medium">Test Attempts : {{examData.attempts}}</p>
        <NuxtLink to="/examportal/learner/examInstruction">
          <BaseButton label="Continue Test" color="info" />
        </NuxtLink>
      </div>
      <div class="flex flex-wrap justify-between px-6 py-2 my-4 items-center">
        <div>
          <p class="font-semibold">First Attempt</p>
          <p class="font-light text-sm">Score 13 of 360</p>
        </div>
        <NuxtLink to="/examportal/learner/examResult">
          <BaseButton label="View Result" class="border rounded" />
        </NuxtLink>
      </div>
    </template>

        <div v-else
        class="flex flex-wrap border rounded justify-between px-6 py-2 my-4 items-center"
      >
        <p class="text-lg font-medium">Start your Exam Now </p>
        <NuxtLink to="/examportal/learner/examInstruction">
          <BaseButton label="Take Exam" color="info" />
        </NuxtLink>
      </div>


      </div>
      <div
        class="w-1/3 max-md:w-full max-md:h-auto h-screen pt-20 text-xs px-4"
      >
        <CardBox class="max-w-sm">
          <img :src="image" alt="" srcset="" class="rounded" />
          <p class="border-b-2 pb-2 pt-2 flex items-center">
            <BaseIcon :path="mdiTimerOutline" />
            <span v-if="examData.isValidityDays"> {{`Valid for ${examData.validityDays} Days`}}</span>
            <span v-else > {{`Valid Till ${examData.expiryDate}`}} </span>
          </p>
          <p class="py-2 font-medium text-lg">What's Included</p>
          <p class="pb-2 flex items-center">
            <BaseIcon :path="mdiCheck" /><span class="font-medium pr-1">
              Live</span
            >
            Tests
          </p>
          <p class="pb-2 flex items-center">
            <BaseIcon :path="mdiCheckCircleOutline" /><span
              class="font-medium pr-1"
            >
              360</span
            >
            Marks
          </p>
          <p class="pb-2 flex items-center">
            <BaseIcon :path="mdiChatQuestion" /><span class="font-medium pr-1">
              90</span
            >
            Questions
          </p>
        </CardBox>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import CardBox from "@/components/Cards/CardBox.vue";

import BaseButton from "@/components/Buttons/BaseButton.vue";
import {
  mdiChatQuestion,
  mdiCheck,
  mdiCheckCircleOutline,
  mdiTimerOutline,
} from "@mdi/js";
import BaseIcon from "~~/components/Display/BaseIcon.vue";

import image from "@/assets/img/bundleImage.png";
import { API, graphqlOperation } from "aws-amplify";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const examId = route.params.id;

const examData = ref({
  status: "Live",
  marks: 0,
  minutes: 180,
  questions: 0,
  attempts: 0,
  expiryDate: null,
  isValidityDays: true,
  validityDays: 100,
  mockTestTitle: "Mock Test",
  examTitle:"exam"
});

import { getExam } from "~~/src/graphql/queries";
const fetchExamData = async () => {
  try {
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
              type
              ifCorrect
              title
            }
          }
          _version
        }
      }
      instructions
      id
      examMockTestId
      MockTest{
        isValidityDays
        validityDays
        expiryDate
        publishingStatus
        name

      }
      description
      _version
    }
  }
`;

    let response = await API.graphql(
      graphqlOperation(myQuery, { id: examId })
    );

    response = response.data.getExam;
    examData.value.status = response?.MockTest?.publishingStatus;
    examData.value.isValidityDays = response?.MockTest?.isValidityDays
    examData.value.expiryDate = response?.MockTest?.expiryDate
    examData.value.validityDays = response?.MockTest?.validityDays
    examData.value.publishingStatus = response?.MockTest?.publishingStatus
    examData.value.examTitle = response?.title
    examData.value.mockTestTitle = response?.MockTest?.name


    let questions = 0 ;
    let marks = 0;
    response?.Sections?.items.forEach(section => {
      section?.Questions?.items.forEach((que)=>{
        questions+=1;
        if(que?.ifCorrect){
          marks+=que?.ifCorrect
        }
      })
    });
    examData.value.marks = marks;
    examData.value.questions = questions;

    console.log("response", response);
  } catch (error) {
    console.error(error);
    window.alert("Error fetching Exam :", error?.errors?.[0]?.message);
  }
};

const takeExam = async()=>{
  const newAttempt = await API.graphql({
    
  })
}

onMounted(async () => {
  fetchExamData();
});
</script>

<style lang="scss" scoped></style>
