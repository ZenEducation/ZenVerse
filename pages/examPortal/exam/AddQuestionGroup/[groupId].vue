<script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { mdiPlus, mdiTrashCan, mdiWindowClose } from "@mdi/js";
import CardBoxModal from "~~/components/Cards/CardBoxModal.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import TableLearnerEnabled from "@/components/Tables/TableLearnerEnabled.vue";
import BaseLevel from "~~/components/Buttons/BaseLevel.vue";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";

import { API, graphqlOperation } from "aws-amplify";
import { useRouter, useRoute } from "vue-router";
import { getGroup, listQuestions } from "~~/src/graphql/queries";
import { deleteGroup, deleteQuestion, updateGroup, updateQuestion } from "~~/src/graphql/mutations";
const route = useRoute();
const groupId = route.params.groupId;
console.log(groupId);


const list = ref([
  {
    id: 0,
    titleHTML: "question 1",
    difficuilty: "easy",
    ifCorrect: 2,
    ifWrong: -0.25,
    type: "Multiple Choice",
    isSelected: true,
  },
  {
    id: 1,
    titleHTML: "question 2",
    difficuilty: "hard",
    ifCorrect: 2,
    ifWrong: -0.25,
    type: "Multiple Choice",
    isSelected: false,
  },
  {
    id: 2,
    titleHTML: "question 2",
    difficuilty: "hard",
    ifCorrect: 2,
    ifWrong: -0.25,
    type: "Multiple Choice",
    isSelected: false,
  },
  {
    id: 3,
    titleHTML: "question 54",
    difficuilty: "moderate",
    ifCorrect: 4,
    ifWrong: -2,
    type: "Numerical",
    isSelected: false,
  },
  {
    id: 4,
    titleHTML: "question 23",
    difficuilty: "hard",
    ifCorrect: 1,
    ifWrong: -0.25,
    type: "Multiple Choice",
    isSelected: false,
  },
]);
const perPage = 10;
const totalPages = ref(1);
const currentPage = ref(0);
const filteredItems = computed(() => {
  let filtered = list.value;
  totalPages.value = Math.ceil(filtered.length / perPage);
  const start = currentPage.value * perPage;
  const end = (currentPage.value + 1) * perPage;

  return filtered.slice(start, end);
});

const sectionId = ref();
const fetchQuestions = async()=>{
  try {
    let response =  await API.graphql({
      query:getGroup,
      variables:{id:groupId }
    })
    // console.log(response.data.getGroup.sectionID);
    sectionId.value = response.data.getGroup.sectionID;

    let QuestionsData = await API.graphql({
      query:listQuestions,
      variables:{filter:{ _deleted: { ne: true } , sectionID:{ eq : sectionId.value }, groupID: {attributeExists: false}  }}
    })
    list.value = QuestionsData.data.listQuestions.items;
    console.log(list.value);

    
    
  } catch (error) {
    console.error(error)
  }
}
onMounted(async()=>{
  fetchQuestions();
})

const addHandler = async()=>{
  try {
    let selectedIds = [];
    list.value.forEach((item)=>{
      if (item["isSelected"]) {
        selectedIds.push({
          id: item.id,
          version:item._version
        });
      }
    } )

    for (const item of selectedIds) {
      const response = await API.graphql({
        query: updateQuestion,
        variables: { input: { id: item.id, _version: item.version, groupID: groupId } }
      });
      console.log(response.data.updateQuestion);
    }

    window.location.href = '/examportal/Exam/editGroup/'+groupId;
  } catch (error) {
    console.error(error)
  }
}

</script>
<template>
  <div class="absolute top-0 left-0 w-full min-h-[48px] bg-white">
    <div class="border-b w-full flex justify-between items-center px-5 py-2">
      <NuxtLink :to="'/examportal/Exam/editGroup/'+groupId">
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

  </div>

  <CardBox
    class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3 pt-14"
    is-form
    @submit.prevent="submit"
  >
    <div class="px-8 flex max-md:flex-wrap justify-between align-middle">

      <p class="font-bold text-lg mt-4">
        {{ "Select Questions( " + (list.length ) + " )" }}
        <p class="font-light">
          Note: Questions imported from the question pool or questions added to
          other groups will not be displayed here. Maximum 10 Question are allowed
          to be added to the Group.
        </p>
      </p>
      <!-- <NuxtLink to="/examportal/Exam/editGroup"> -->

          <BaseButton class="max-md:py-8" :icon="mdiPlus" :label="'Add Questions'" :color="'info'" @click="addHandler" />
        <!-- </NuxtLink> -->
    </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Question Details</th>
            <th>Question Type</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in filteredItems"
            :key="index"
            class="cursor-pointer text-base font-light"
          >
        <TableLearnerEnabled
          :checked="item.isSelected"
          @click="item.isSelected = !item.isSelected"
        />
            <th
              data-label="Question Details"
              class="cursor-pointer text-base font-normal"
            >
              <span v-html="item.titleHTML" />
              <br>
              <span> {{ item.difficuilty + " | " }} </span> <span class="text-green-700"> {{"+" + item.ifCorrect + " | " }}</span><span class="text-red-700"> {{ item.ifWrong }}</span>
              
            </th>
            <th
              data-label="Question Type"
              class="cursor-pointer text-base font-light"
            >
              {{ item.type }}
            </th>

          </tr>
        </tbody>
      </table>
      <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
    <BaseLevel>
      <BaseButtons>
        <BaseButton
          v-for="page in totalPages"
          :key="page"
          :active="page - 1 === currentPage"
          :label="page"
          :color="page - 1 === currentPage ? 'lightDark' : 'whiteDark'"
          small
          @click="currentPage = page - 1"
        />
      </BaseButtons>
      <small>Page {{ currentPage + 1 }} of {{ totalPages }}</small>
    </BaseLevel>
  </div>
  </CardBox>
</template>

<style>
thead {
  display: table-header-group;
}
tr {
  display: table-row;
}
td {
  display: table-cell;
}
tbody {
  display: table-row-group;
}
</style>
