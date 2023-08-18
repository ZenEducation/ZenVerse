<script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { mdiPlus, mdiTrashCan, mdiWindowClose } from "@mdi/js";
import CardBoxModal from "~~/components/Cards/CardBoxModal.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";

import { API, graphqlOperation } from "aws-amplify";
import { useRouter, useRoute } from "vue-router";
import { listGroups, listSections } from "~~/src/graphql/queries";
import { createGroup } from "~~/src/graphql/mutations";
const route = useRoute();
const examId = route.params.examid;


const list = ref([
  {
    id: 0,
    title: "Group 1",
    difficuilty: "easy",
    Questions: 20,
  },
  {
    id: 1,
    title: "Group 2",
    difficuilty: "hard",
    Questions: 34,
  },
]);
const isAddDataActive = ref(false);
const NewFormData = ref({
  title: "",
  difficuilty: "",
  Questions: 0,
  section:""
});
const addNewFormData = async() => {
  try {
    
    const newGroup = await API.graphql({
      query:createGroup,
      variables:{input:{title:NewFormData.value.title , difficuilty:NewFormData.value.difficuilty , sectionID : NewFormData.value.section.id , examID:examId }}
    })
  
    list.value.push(newGroup.data.createGroup);
    isAddDataActive.value = false;
  } catch (error) {
    console.error(error)
  }
};

const fetchGroupData = async () => {
  const response = await API.graphql({
    query:listGroups,
    variables: { examID: examId , filter: { _deleted: { ne: true } }},
  });
  console.log("response", response.data.listGroups.items);
  list.value = response.data.listGroups.items;
};

const sectionsList = ref([]);
const getSectionsList = async()=>{

  const myQuery = `query MyQuery($eq: ID!) {
  listSections(filter: {_deleted: {ne: true}, examID: {eq: $eq}}) {
    items {
      title
      id
    }
  }
}`

  const result=await API.graphql(graphqlOperation(myQuery, {eq:examId}));
  console.log(result.data.listSections.items);
  // await result.data?.listSections?.items.forEach(element => {
  //   sectionsList.value.push(element.title)
  // });
  sectionsList.value = result.data.listSections.items;
  console.log(sectionsList.value);

}

const isLoaded = ref(false);

onMounted(async () => {
  await fetchGroupData();
  await getSectionsList();
  isLoaded.value = true;
});

const link = (id)=>{
  console.log(id);
  window.location.href = '/examportal/Exam/editGroup/' + id;
}

</script>
<template>
  <div class="absolute top-0 left-0 w-full min-h-[48px] bg-white">
    <div class="border-b w-full flex justify-between items-center px-5 py-2">
      <NuxtLink :to="'/examportal/Exam/edit-page/'+ examId">
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
  <CardBoxModal v-model="isAddDataActive" :showFooter="false" title="">
    <header
      class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
    >
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Add New Group</h1>
      </div>
      <div
        class="text-gray-500 cursor-pointer"
        @click="isAddDataActive = false"
      >
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>

    <CardBox class="" is-form @submit.prevent="submitProfile">
      <PremFormField label="Name">
        <PremFormControl v-model="NewFormData.title" />
      </PremFormField>
      <PremFormField label="Difficulty Level">
        <PremFormControl
          v-model="NewFormData.difficuilty"
          :options="['EASY', 'MODERATE', 'HARD']"
        />
      </PremFormField>
      <PremFormField label="Section">
        <PremFormControl
          v-model="NewFormData.section"
          :options="sectionsList"
        />
      </PremFormField>

      <div class="flex justify-end py-2">
        <BaseButtons>
          <BaseButton color="info" label="Submit" @click="addNewFormData" />
        </BaseButtons>
      </div>
    </CardBox>
  </CardBoxModal>

  <CardBox
    class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3 pt-14"
    is-form
    @submit.prevent="submit"
  >
    <div class="px-8 flex justify-between align-middle">
      <p class="font-bold text-lg mt-4">Groups</p>
      <BaseButton
        :icon="mdiPlus"
        :label="'Create Group'"
        :color="'info'"
        @click="isAddDataActive = true"
      />
    </div>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Group Name</th>
          <th>Difficulty level</th>
          <th>Questions</th>
        </tr>
      </thead>
      <tbody>
          <tr
            v-for="(item, index) in list"
            :key="index"
            class="cursor-pointer text-base font-light"
            @click="link(item.id)"
          >

            <th data-label="#" class="cursor-pointer text-base font-light">
              {{ index + 1 }}
            </th>
            <th
              data-label="Group Name"
              class="cursor-pointer text-base font-light"
            >
              {{ item.title }}
            </th>
            <th
              data-label="Difficulty Level"
              class="cursor-pointer text-base font-light"
            >
              {{ item.difficuilty }}
            </th>
            <th
              data-label="Questions"
              class="cursor-pointer text-base font-light"
            >
              {{ item.Questions?.items?.length }}
            </th>
          </tr>
        </tbody>
    </table>
  </CardBox>
</template>

<style scoped>
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
