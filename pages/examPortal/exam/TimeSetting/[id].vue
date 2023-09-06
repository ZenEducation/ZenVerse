<template>
  <div class="absolute top-0 left-0 w-full min-h-[48px] bg-white">
    <div class="border-b w-full flex justify-between items-center px-5 py-2">
      <NuxtLink :to="'/examportal/Exam/edit-page/' + examData?.id">
        <div class="text-[13px] flex items-center justify-center cursor-pointer">
          <img class="w-[14px] h-[14px]"
            src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/cb_back.svg" alt="" />
          <p class="p-2.5">Back</p>
        </div>
      </NuxtLink>
      <div class="pr-16">
        <BaseButton label="Save" color="info" @click=saveHandler />
      </div>
    </div>
  </div>
  <CardBox class="mt-28 ">
    <div class="lg:px-20  sm:px-6">
      <CardBox class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3 border " is-form @submit.prevent="submit">
        <h1>Time Settings</h1>

        <!-- <p class="font-bold text-lg">mock test Deadline Type</p> -->

        <div class="max-w-xs mb-5">
          <PremFormField label="Select Deadline Type">
            <PremFormControl :options="examDeadlineOptions" v-model="timeData.examDeadlineSelected" />
          </PremFormField>
        </div>

        <template v-if="timeData.examDeadlineSelected == 'OVERALL'">
          <PremFormField label="overall time (Minutes)">
            <PremFormControl required type="number" placeholder="enter time" v-model="timeData.overallDeadline" />
          </PremFormField>
        </template>

        <template v-if="timeData.examDeadlineSelected == 'SECTION'">

          <PremFormField :label="item.title + ' Section time (Minutes)'" v-for="item in timeData.sections">
            <PremFormControl required type="number" placeholder="enter time" v-model="item.sectionDeadline" />
          </PremFormField>
        </template>

        <template v-if="timeData.examDeadlineSelected == 'QUESTION'">

          <template v-for="i in validityOptions">
            <input type="radio" v-model="timeData.isDefaultQuestionTime" :value="i.value" />
            <p class="inline p-4 leading-8">
              {{ i.label }}
            </p>
            <PremFormControl class="mt-6" v-if="i.id == 0" required type="number" placeholder="Time in seconds"
              v-model="timeData.defaultQuestionTime" />


            <br />
          </template>
        </template>






      </CardBox>
    </div>

  </CardBox>
</template>
<script setup>
import {
  mdiAbacus,
  mdiTrashCan,
  mdiTrashCanOutline,
  mdiCloseCircleMultipleOutline,
  mdiPlusCircleOutline,
  mdiMinusCircleOutline,
} from "@mdi/js";
import BaseButton from "~~/components/Buttons/BaseButton.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import PremFormControlIcon from "~~/components/Forms/PremFormControlIcon.vue";
import PremFormControl from "~~/components/Forms/PremFormControl.vue";
import PremFormField from "~~/components/Forms/PremFormField.vue";
import QuilEditor from "~~/components/ExamPortal/QuilEditor.vue";
import Stopwatch from "~~/components/ExamPortal/Stopwatch.vue"

import { ref } from "vue";
import CardBox from "@/components/Cards/CardBox.vue";

import { API, graphqlOperation } from "aws-amplify";
import { useRouter, useRoute } from "vue-router";
import { updateExam, updateSection } from "~~/src/graphql/mutations";
const route = useRoute();
const examId = route.params.id;

const instruction = ref("Loading...");
const examData = ref();

// const examDealineSelected = ref("NONE")
const examDeadlineOptions = [
  "NONE",
  "OVERALL",
  "SECTION",
  "QUESTION",
]

const validityOptions = ref([
  { id: 0, label: "Set Default time here for each question(seconds)", value: true },
  { id: 1, label: "Use Guideline Time associated with each question", value: false },
]);

const timeData = ref({
  examDeadlineSelected: "NONE",
  sections: [],
  overallDeadline: 180,
  isDefaultQuestionTime: false,
  defaultQuestionTime: 180
})

const fetchExamData = async () => {
  try {
    const myQuery = `
  query MyQuery($id: ID!) {
    getExam(id: $id) {
      title
      overallDeadline
      isDefaultQuestionTime
      defaultQuestionTime
      deadlineType
      createdAt
      _version
      id
      Sections(filter: {_deleted: {ne: true}}) {
        items {
          sectionDeadline
          id
          title
          _version
        }
      }
    }
  }
`;

    let response = await API.graphql(
      graphqlOperation(myQuery, { id: examId })
    );
    // console.log("response : " , response);

    response = response?.data?.getExam;
    console.log(response);

    timeData.value.examDeadlineSelected = response?.deadlineType || "NONE";
    timeData.value.sections = response?.Sections.items || [];
    timeData.value.defaultQuestionTime = response?.defaultQuestionTime || 0;
    timeData.value.isDefaultQuestionTime = response.isDefaultQuestionTime || false;
    timeData.value.overallDeadline = response?.overallDeadline || 180

    console.log("response", response);
    examData.value = response;
    console.log(timeData.value);
  } catch (error) {
    console.error(error);
    window.alert("Error fetching Exam :", error?.errors?.[0]?.message);
  }
};

onMounted(async () => {
  await fetchExamData();
  instruction.value = examData.value?.instructions;
  console.log(examData.value);
});

const saveHandler = async () => {
  try {

    let examInput = {
      id: examData.value.id,
      _version: examData.value._version,
      overallDeadline: timeData.value.overallDeadline,
      isDefaultQuestionTime: timeData.value.isDefaultQuestionTime,
      defaultQuestionTime: timeData.value.defaultQuestionTime,
      deadlineType: timeData.value.examDeadlineSelected,

    }
    console.log(examInput);

    if (examInput.deadlineType == 'OVERALL' && (!(examInput.overallDeadline) || examInput.overallDeadline < 0)) {
      window.alert("please Enter Valid overall time");
      return;
    }

    if ((examInput.deadlineType == 'QUESTION' && examInput.isDefaultQuestionTime) && (!(examInput.defaultQuestionTime) || examInput.defaultQuestionTime < 0)) {
      window.alert("please Enter Valid default time");
      return;
    }


    if (examInput.deadlineType == 'SECTION') {
      for (let i of timeData.value.sections) {
        if ((!(i.sectionDeadline) || i.sectionDeadline < 0)) {
          window.alert("please Enter Valid Section time for section " + i.title);
          return;
        }
      }
    }

    await API.graphql({
      query: updateExam,
      variables: {
        input: examInput,
      },
    });

    if (examInput.deadlineType == 'SECTION') {
      for (let i of timeData.value.sections) {
        // console.log(i);
        await API.graphql({
          query: updateSection,
          variables: {
            input: i,
          },
        });
      }
    }
    window.alert("changes saved successfully");

  } catch (error) {
    console.error(error);
  }
};
import '@/assets/css/basic.css'

</script>
<style scoped>
h1 {
  font-size: 2em;
  font-weight: bold;
}

h2 {
  font-size: 1.5em;
  font-weight: bold;
}

h3 {
  font-size: 1.2em;
  font-weight: bold;
}

h4 {
  font-size: 1em;
  font-weight: bold;
}

h5 {
  font-size: 0.9em;
  font-weight: bold;
}

h6 {
  font-size: 0.8em;
  font-weight: bold;
}

/* Styles for paragraphs */
p {
  font-size: 1em;
  line-height: 1.4;
}

/* Styles for strong text */
strong {
  font-weight: bold;
}
</style>
