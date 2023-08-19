<template>
  <div class="absolute z-30 top-0 left-0 w-full min-h-[48px] bg-white">
    <div class="border-b w-full flex justify-between items-center px-5 py-2">
      <NuxtLink :to="'/examportal/Exam/groupList/' + groupData?.examID">
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
      <div class="flex justify-center items-center"></div>
      <div class="flex justify-center items-center gap-5">
        <BaseButton :icon="mdiTrashCan" color="danger" @click="deleteHandler" />
        <BaseButton label="Save" color="info" @click="saveHandler" />
      </div>
    </div>
  </div>
  <div
    class="pt-28 h-screen max-md:block max-md:overflow-y-scroll scrollbar-thin w-full flex"
  >
    <!-- sidebar -->
    <div
      class="w-1/4 max-md:w-5/6 max-md:mx-auto px-4 py-6 overflow-y-auto scroll-m-0 scrollbar-w-1"
    >
      <!-- if Settings  -->
      <p class="font-semibold text-lg">Question Settings</p>
      <PremFormField label="Difficulty Level">
        <PremFormControl
          :options="['EASY', 'MODERATE', 'HARD']"
          v-model="groupData.difficuilty"
        />
      </PremFormField>
    </div>
    <div
      class="w-3/4 max-md:w-5/6 max-md:mx-auto p-4 overflow-y-auto scroll-m-0 scrollbar-w-1"
    >
      <!-- Main Content -->
      <div class="flex flex-col">
        <CardBox>
          <PremFormField label="Group Name">
            <PremFormControl
              placeholder="Enter your Group Name"
              v-model="groupData.title"
            />
          </PremFormField>
          <p class="font-bold">Instructions :</p>
          <p class="text-xs">
            Note: Students will see this group instruction instead of the
            question instructions
          </p>
          <QuilEditor
            v-if="isLoaded"
            class="py-2"
            v-model="groupData.instruction"
          />
          <div class="pr-8 flex justify-between items-center">
            <p class="font-bold">Add Question</p>
            <NuxtLink :to="'/examportal/Exam/AddQuestionGroup/' + groupId">
              <BaseButton label="Add" color="info" />
            </NuxtLink>
          </div>

          <table>
            <thead>
              <tr>
                <th>Question Title</th>
                <th>Question Difficulty</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in groupData.Questions?.items">
                <td v-html="item.titleHTML" />
                <td>{{ item.difficuilty }}</td>
                <td>
                  <BaseButton
                    :icon="mdiTrashCan"
                    color="danger"
                    @click="removequestion(item.id)"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </CardBox>
      </div>
    </div>
  </div>
</template>
<script setup>
import { mdiTrashCan } from "@mdi/js";
import BaseButton from "~~/components/Buttons/BaseButton.vue";
import PremFormControl from "~~/components/Forms/PremFormControl.vue";
import PremFormField from "~~/components/Forms/PremFormField.vue";
import QuilEditor from "~~/components/ExamPortal/QuilEditor.vue";
import { ref } from "vue";
import CardBox from "@/components/Cards/CardBox.vue";

import { API, graphqlOperation } from "aws-amplify";
import { useRouter, useRoute } from "vue-router";
import { getGroup } from "~~/src/graphql/queries";
import {
  deleteGroup,
  deleteQuestion,
  updateGroup,
updateQuestion,
} from "~~/src/graphql/mutations";
const route = useRoute();
const groupId = route.params.groupId;
console.log(groupId);

const groupData = ref({
  title: "Loading..",
  instruction: "Loading",
  difficuilty: "EASY",
});

const fetchGroupData = async () => {
  const response = await API.graphql({
    query: getGroup,
    variables: { id: groupId },
  });
  console.log("response", response.data.getGroup);
  groupData.value = response.data.getGroup;
};
const isLoaded = ref(false);

onMounted(async () => {
  await fetchGroupData();
  isLoaded.value = true;
});

const saveHandler = async () => {
  try {
    let { id, _version, title, instruction, difficuilty } = groupData.value;

    let input = {
      id,
      _version,
      title,
      instruction,
      difficuilty,
    };
    console.log(input);
    await API.graphql({
      query: updateGroup,
      variables: { input: input },
    });
    window.alert("changes saved sucessfully");
    // window.location.href =
    //   "/examportal/Exam/edit-page/" + question.value?.examID;
  } catch (error) {
    console.error(error);
  }
};

const deleteHandler = async () => {
  try {
    console.log("delete called");
    let { id, _version } = groupData.value;

    let input = {
      id,
      _version,
    };
    console.log(input);
    await API.graphql({
      query: deleteGroup,
      variables: { input: input },
    });
    window.alert("deleted successfully");
    window.location.href =
      "/examportal/Exam/groupList/" + groupData.value?.examID;
  } catch (error) {
    console.error(error);
  }
};

const removequestion = async (id) => {
  try {    
    let input = { id: id, groupID: null }
    console.log(input);
    const response = await API.graphql({
      query:updateQuestion,
      variables: { input: input},
    });
    console.log(response.data.updateQuestion);
  } catch (error) {
    console.error(error)
  }
};
</script>
