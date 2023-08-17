<template>
  <div class="absolute top-0 left-0 w-full min-h-[48px] bg-white">
    <div class="border-b w-full flex justify-between items-center px-5 py-2">
      <NuxtLink :to="'/examportal/Exam/edit-page/' + examData?.id ">
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
      <div class="pr-16">
        <BaseButton label="Save" color="info" @click=saveHandler />
      </div>
    </div>
  </div>
  <div class="pt-14 h-screen max-md:overflow-y-scroll w-full flex max-md:block">
    <!-- sidebar -->
    <div
      class="w-1/4 max-md:w-5/6 max-md:mx-auto mx-4 my-2 border-2 py-2 overflow-y-auto scroll-m-0 scrollbar-w-1"
    >
      <!-- if Settings  -->
      <h1 class="border-b-2 text-center text-lg font-semibold">Preview</h1>

      <div class="w-full p-4" v-html="instruction" />
    </div>
    <div
      class="w-3/4 max-md:w-5/6 max-md:mx-auto max-md:px-0 p-4 overflow-y-auto scroll-m-0 scrollbar-w-1"
    >
      <!-- Main Content -->
      <QuilEditor v-model="instruction" styleP="height: 60vh;" />
    </div>
  </div>
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
import { ref } from "vue";
import CardBox from "@/components/Cards/CardBox.vue";

import { API, graphqlOperation } from "aws-amplify";
import { useRouter, useRoute } from "vue-router";
import { updateExam } from "~~/src/graphql/mutations";
const route = useRoute();
const examId = route.params.id;

const instruction = ref("Loading...");
const examData = ref();

const fetchExamData = async () => {
  try {
    const myQuery = `
  query MyQuery($id: ID!) {
    getExam(id: $id) {
      title
      instructions
      id
      description
      _version
    }
  }
`;

    const response = await API.graphql(
      graphqlOperation(myQuery, { id: examId })
    );
    // console.log("response : " , response);

    console.log("response", response.data.getExam);
    examData.value = response.data.getExam;
  } catch (error) {
    console.error(error);
    window.alert("Error fetching Exam :", error?.errors?.[0]?.message);
  }
};

onMounted(async () => {
  await fetchExamData();
  instruction.value = examData.value.instructions;
  console.log(examData.value);
});

const saveHandler = async () => {
  try {
    await API.graphql({
      query: updateExam,
      variables: {
        input: {
          id: examData?.value?.id,
          _version: examData?.value?._version,
          instructions: instruction?.value,
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
};
</script>
