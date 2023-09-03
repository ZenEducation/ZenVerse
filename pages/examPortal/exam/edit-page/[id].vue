<template>
  <CardBoxModal v-model="isEditModalActive" title="" :show-footer="false">
    <header class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded">
      <div class="text-gray-500">
        <BaseIcon v-if="mdiAccountPlus" :path="mdiAccountPlus" :size="32" />
      </div>
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Edit Section</h1>
      </div>
      <div class="text-gray-500 cursor-pointer" @click="isEditModalActive = false">
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>
    <CardBox is-form @submit.prevent="EditSectionControl(0, false)">
      <FormField label="Section Name">
        <FormControl required v-model="editSectionName" placeholder="New Name" />
      </FormField>

      <div class="flex justify-end py-2">
        <BaseButton type="submit" color="info" label="Done" />
      </div>
    </CardBox>
  </CardBoxModal>

  <CardBoxModal v-model="isAddModalActive" title="" :show-footer="false">
    <header class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded">
      <div class="text-gray-500">
        <BaseIcon v-if="mdiAccountPlus" :path="mdiAccountPlus" :size="32" />
      </div>
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Add Section</h1>
      </div>
      <div class="text-gray-500 cursor-pointer" @click="isAddModalActive = false">
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>
    <CardBox is-form @submit.prevent="addSection(false)">
      <FormField label="Section Name">
        <FormControl required v-model="newsectionName" placeholder="New Name" />
      </FormField>

      <div class="flex justify-end py-2">
        <BaseButton type="submit" color="info" label="Done" />
      </div>
    </CardBox>
  </CardBoxModal>

  <CardBoxModal v-model="isAddQueModalActive" title="" :show-footer="false">
    <header class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded">
      <div class="text-gray-500">
        <BaseIcon v-if="mdiAccountPlus" :path="mdiAccountPlus" :size="32" />
      </div>
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Add Que</h1>
      </div>
      <div class="text-gray-500 cursor-pointer" @click="isAddQueModalActive = false">
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>
    <CardBox is-form @submit.prevent="addQue(false)">
      <FormField label="Que Name">
        <FormControl required v-model="newQueName" placeholder="New Que" />
      </FormField>

      <div class="flex justify-end py-2">
        <BaseButton type="submit" color="info" label="Done" />
      </div>
    </CardBox>
  </CardBoxModal>

  <CardBoxModal v-model="isModalDangerActive" title="Are you sure you want to delete this tab?" button="danger"
    buttonLabel="Yes" has-cancel @confirm="deleteSectionControl(false)" />

  <CardBoxModal v-model="isModalQueDangerActive" title="Are you sure you want to delete this Que?" button="danger"
    buttonLabel="Yes" has-cancel @confirm="deleteQue(-1, -1, -1, false)" />

  <div class="text-[#7d7d7d]">
    <div class="absolute top-0 left-0 w-full min-h-[48px] bg-white flex justify-between items-center px-5">
      <div class="text-[13px] flex items-center justify-center cursor-pointer">
        <img class="w-[14px] h-[14px]"
          src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/cb_back.svg" alt="" />
        <a :href="'/ExamPortal/exam/ExamSetting/' + examData?.examMockTestId" class="p-2.5">Mock Test</a>
      </div>
      <div>
        <a href="http://support.learnyst.com/manage-your-course" target="_blank" class="support-link-img"><img
            class="" /></a>
      </div>
    </div>
    <div class="side-bar pt-[60px] h-[100vh] float-left flex flex-col justify-between gap-2 pb-4">
      <div class="max-h-[418px]">
        <header class="uppercase text-[16px] text-[#808080] font-semibold py-2.5 px-5">
          Quiz Maker
        </header>

        <ul>
          <li class="border-l-[3px] border-[#3a79df] rounded-sm box-shadow" @click="addSection(true)">
            <span class="mr-2.5"><img
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png" alt="" /></span>
            Add section
          </li>

          <!-- groups -->
          <p class="list-lable">Groups</p>
          <NuxtLink :to="'/examportal/Exam/groupList/' + examId">
            <li class="border-l-[3px] border-[#47B9F8] rounded-sm box-shadow">
              <span class="mr-2.5"><img
                  src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png"
                  alt="" /></span>
              Group questions
            </li>
          </NuxtLink>

          <!-- questions -->
          <p class="list-lable">questions</p>
          <li class="border-l-[3px] border-[#c38aff] rounded-sm box-shadow" @click="addQue('MCQ')">
            <span class="mr-2.5"><img
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png" alt="" /></span>
            Multiple choice
          </li>
          <li class="border-l-[3px] border-[#EF9A9A] rounded-sm box-shadow" @click="addQue('NUM')">
            <span class="mr-2.5"><img
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png" alt="" /></span>
            Numerical
          </li>
          <li class="border-l-[3px] border-[#FFCC80] rounded-sm box-shadow" @click="addQue('PARA')">
            <span class="mr-2.5"><img
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png" alt="" /></span>
            Essay
          </li>
          <li class="border-l-[3px] border-[#a266cc] rounded-sm box-shadow" @click="addQue('FILLIN')">
            <span class="mr-2.5"><img
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png" alt="" /></span>
            Fill in the blanks
          </li>
        </ul>
      </div>
      <div>
        <ul>

          <li class="bottom-side-nav">
            <a :href="'/examportal/Exam/exportPDF/' + examId">Export PDF</a>
          </li>
          <li class="bottom-side-nav">
            <a href="">Import from pool</a>
          </li>
          <li class="bottom-side-nav">
            <a href="">Import</a>
          </li>
          <li class="bottom-side-nav">
            <a :href="'/ExamPortal/exam/ExamSetting/' + examData?.examMockTestId">Settings</a>
          </li>
          <li class="bottom-side-nav">
            <a :href="'/ExamPortal/exam/ExamSetting/' + examData?.examMockTestId">Publish status</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="pt-[88px] px-[15px] ml-[200px] h-screen overflow-y-scroll scroll-m-0 aside-scrollbars-light bg-[#ededed]">
      <div class="mt-5 flex justify-between">
        <p class="text-[16px] text-[#808080] lowercase font-semibold ml-[9.5px]">
          {{ examData?.title }}
        </p>
        <p class="text-[14px] text-[#b7b9be] lowercase font-semibold mr-[9.5px]">
          {{ examData?.Sections?.items?.length }} sections
        </p>
      </div>

      <div>
        <NuxtLink :to="'/examportal/Exam/addQuestion/addInstructions/' + examId" class="section">Instruction</NuxtLink>
        <NuxtLink :to="'/examportal/Exam/TestAttachment/' + examId"
          class="section flex items-center border-l-[3px] border-[#FFB11B]">
          Test Attachments

          <img class="w-[16px] h-[18px] mx-8" src="@/images/others/delete.svg" alt="" />
        </NuxtLink>
        <VueDraggableNext :list="examData?.Sections?.items" tag="body" class="dragArea list-group w-full">
          <div class="section-add m-3 pb-[1px]" v-for="(i, index) in examData?.Sections?.items" :key="index"
            :class="{ 'border-2 border-violet-400': selected == i.id }">
            <div @click="() => {
                dropdown[i.id] = !dropdown[i.id];

                selected = i.id;
              }
              " class="p-5 flex justify-between">
              <template v-if="editsection[i.id]">
                <PremFormControl v-model="editSectionName" type="text" />
              </template>
              <template v-else>
                {{ i.title }}
              </template>
              <div class="flex items-center">
                <template v-if="editsection[i.id]">
                  <button @click="EditSectionControl(i.id, false)" class="lr-btn px-5">
                    Done
                  </button>
                </template>
                <template v-else>
                  <button @click="EditSectionControl(i.id, true)" class="lr-btn px-5">
                    EDIT
                  </button>
                </template>
                <!-- add delete btn -->
                <BaseButton class="pl-4" color="danger" :icon="mdiTrashCan" @click="deleteSectionControl(i.id, true)" />
                <img class="w-[16px] h-[18px] ml-5" src="@/images/others/delete.svg" alt="" />

                <p class="text-[13px] px-5">{{ i.Questions.items.length }} questions</p>
                <!-- add arror -->
                <img class="collapse-status-668700" id="collapse-status" style="margin: 2px 20px 0 15px; width: 8px"
                  src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/cb_collapse.svg" />
              </div>
            </div>

            <Transition name="slider">
              <div v-if="dropdown[i.id]">
                <div>
                  <div class="border-l-[3px] border-[#3a79df] rounded-sm box-shadow w-lg flex py-2 justify-between"
                    v-for="(test, index) in i.Questions.items" :class="{
                      'border-[#c38aff]': test.type == 'MCQ',
                      'border-[#EF9A9A]': test.type == 'NUM',
                      'border-[#FFCC80]': test.type == 'PARA',
                      'border-[#a266cc]': test.type == 'FILLIN',
                    }">
                    <NuxtLink :to="toLink(test.type, test.id)">
                      <div class="flex">
                        <span class="mr-2.5"><img
                            src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png"
                            alt="" /></span>
                        <span v-html="test.titleHTML"></span>
                      </div>
                    </NuxtLink>
                    <div class="pr-8 flex gap-2">
                      <BaseIcon :path="mdiTrashCan" @click="deleteQue(test.id, test._version, i.id, true)" />
                    </div>
                  </div>
                </div>

                <div v-if="dropdown[i.id]"
                  class="w-12/12 border-[2px] border-[#82abfc] border-dashed p-10 text-[#7abfd1] bg-[#fff8e0] text-center m-[3px]">
                  Drag and Drop new question
                </div>
              </div>
            </Transition>
          </div>
        </VueDraggableNext>

        <div class="w-12/12 border-[2px] border-[#82abfc] border-dashed p-10 text-[#7abfd1] bg-[#f0f8e8] text-center m-3">
          Drag and Drop new question
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import {
  mdiDotsVertical,
  mdiAccountPlus,
  mdiWindowClose,
  mdiAccount,
  mdiMail,
  mdiCellphone,
  mdiAsterisk,
  mdiFormTextboxPassword,
  mdiTrashCan,
} from "@mdi/js";
import PremFormControl from "~~/components/Forms/PremFormControl.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { API, graphqlOperation } from "aws-amplify";
import { useRouter, useRoute } from "vue-router";
import { getExam } from "~~/src/graphql/queries";
import {
  createSection,
  deleteSection,
  updateSection,
} from "~~/src/graphql/mutations";
import { createQuestion } from "~~/src/graphql/mutations";
import { deleteQuestion } from "~~/src/graphql/mutations";
const route = useRoute();
const examId = route.params.id;

const selected = ref(1);
// const items = ref([
//   {
//     id: 1,
//     SectionName: "Section 1",
//     Ques: [
//       {
//         Quename: "Que 1",
//         type: "MCQ",
//       },
//       {
//         Quename: "Que 1",
//         type: "Numerical",
//       },
//     ],
//   },
//   {
//     id: 2,
//     SectionName: "Section 2",
//     Ques: [
//       {
//         Quename: "Que 1",
//         type: "MCQ",
//       },
//       {
//         Quename: "Que 1",
//         type: "Numerical",
//       },
//     ],
//   },
//   {
//     id: 3,
//     SectionName: "Section 3",
//     Ques: [],
//   },
//   {
//     id: 5,
//     SectionName: "Section 4",
//     Ques: [],
//   },
//   {
//     id: 6,
//     SectionName: "Section 5",
//     Ques: [],
//   },
// ]);
const examData = ref();

const fetchExamData = async () => {
  try {
    const id = "83471708-adb4-4368-9d21-dc969499179c";

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
              _version
              _deleted
              _lastChangedAt
              type
              sectionID
              title
              titleHTML
            }
          }
          _version
        }
      }
      instructions
      id
      examMockTestId
      description
      _version
    }
  }
`;

    const response = await API.graphql(graphqlOperation(myQuery, { id: examId }));
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
  selected.value = examData.value.Sections.items[0].id
  console.log(examData.value);
});

const dropdown = ref([]);
const editsection = ref([]);
const maxIndex = ref(12);

const sections = ref(2);
const questions = ref(0);
const sectionquestions = ref(0);

const isAddModalActive = ref(false);
const newsectionName = ref("");
const addSection = async (temp) => {
  if (temp) {
    isAddModalActive.value = true;
  } else {
    // let newobj = {
    //   id: maxIndex,
    //   SectionName: newsectionName.value,
    //   Ques: [],
    // };
    // maxIndex.value = maxIndex.value + 1;
    let newSection = await API.graphql({
      query: createSection,
      variables: { input: { title: newsectionName.value, examID: examId } },
    });
    console.log("newSection", newSection?.data?.createSection);

    examData.value.Sections.items.push(newSection?.data?.createSection);
    isAddModalActive.value = false;
  }
};

const isAddQueModalActive = ref(false);
const newQueName = ref("");
const addQue = async (type) => {
  const newQueInput = {
    sectionID: selected.value,
    examID: examId,
    title: "This is New Question",
    titleHTML: "This is New Question",
    guidelineTime: 180,
    explanation: "explain",
    instruction: "instruction",
    type: type,
    range: { is: false, start: 0, end: 0 },
    options: [],
    criterias: []

  }
  const newQue = await API.graphql({
    query: createQuestion,
    variables: { input: newQueInput }
  })

  examData.value.Sections.items.forEach((set) => {
    if (set.id == selected.value) {
      set.Questions.items.push(newQue.data.createQuestion);
    }
  });

  isAddQueModalActive.value = false;
};

const isModalDangerActive = ref(false);
const deleteSectionId = ref(-1);
const deleteSectionControl = async (id, temp) => {
  if (temp) {
    deleteSectionId.value = id;
    isModalDangerActive.value = true;
  } else {
    const index = examData.value.Sections.items.findIndex(
      (item) => item.id == deleteSectionId.value
    );
    console.log(index);

    if (index > -1) {
      try {
        let inputData = {
          id: deleteSectionId.value,
          _version: examData.value.Sections.items[index]._version,
        };
        console.log(inputData);
        await API.graphql({
          query: deleteSection,
          variables: { input: inputData },
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
};

const isModalQueDangerActive = ref(false);
const deleteQueSetId = ref(-1);
const deleteQueId = ref(-1);
const deleteQueVersion = ref(0);
const deleteQue = async (Que, version, sec, temp) => {
  if (temp) {
    deleteQueSetId.value = sec;
    deleteQueId.value = Que;
    deleteQueVersion.value = version;
    isModalQueDangerActive.value = true;

  } else {

    try {
      await API.graphql({
        query: deleteQuestion,
        variables: { input: { id: deleteQueId.value, _version: deleteQueVersion.value } }
      })

      examData.value.Sections.items.forEach((obj) => {
        if (obj.id == deleteQueSetId.value) {
          const index = obj.Questions.items.findIndex((item) => item.id == deleteQueId.value)
          obj.Questions.items.splice(index, 1);
        }
      });

    } catch (error) {
      console.error(error);
    }


  }
};

const isEditModalActive = ref(false);
const editSectionName = ref("");
const editSectionId = ref(-1);

const EditSectionControl = async (id, temp) => {
  console.log(id, "called");
  if (temp) {
    editSectionId.value = id;
    isEditModalActive.value = true;
  } else {
    const index = examData.value.Sections.items.findIndex(
      (item) => item.id == editSectionId.value
    );
    console.log(index);

    if (index > -1) {
      try {
        let inputData = {
          id: editSectionId.value,
          _version: examData.value.Sections.items[index]._version,
          title: editSectionName.value,
        };
        console.log(inputData);
        const updatedSection = await API.graphql({
          query: updateSection,
          variables: { input: inputData },
        });
        examData.value.Sections.items[index] =
          updatedSection.data.updateSection;
        isEditModalActive.value = false;
      } catch (error) {
        console.error(error);
      }
    }
  }
};

const toLink = (type, id) => {
  switch (type) {
    case "MCQ":
      return "/examportal/Exam/addQuestion/mcq/" + id;
    case "NUM":
      return "/examportal/Exam/addQuestion/numerical/" + id;
    case "PARA":
      return "/examportal/Exam/addQuestion/para/" + id;
    case "FILLIN":
      return "/examportal/Exam/addQuestion/fillinblank/" + id;

    default:
      return "#";
  }
};
</script>

<style>
.section {
  font-size: 16px;
  color: #7d7d7d;
  background-color: #fff;
  padding: 20px;
  margin: 12px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.section:hover {
  box-shadow: 0 4px 10px rgb(0 0 0 / 30%), 0 1px 2px rgb(0 0 0 / 24%);
}

.section-add {
  font-size: 16px;
  color: #7d7d7d;
  background-color: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  border-radius: 2px;
  cursor: pointer;
}

.section-add:hover {
  box-shadow: 0 4px 10px rgb(0 0 0 / 30%), 0 1px 2px rgb(0 0 0 / 24%);
}

li {
  display: flex;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
  font-weight: 400;
  height: 32px;
  list-style: none;
  padding: 2px;
  font-size: 12px;
  text-align: left;
  width: 167px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.box-shadow {
  margin: 6px 20px 15px;
  box-shadow: 0 1px 1px 0 rgb(133 133 133 / 30%), 0 0 0 1px rgb(49 115 221 / 3%);
}

.side-bar {
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 5%), 0 2px 4px 0 rgb(0 0 0 / 6%);
  max-width: 200px;
  background: white;
}

.list-lable {
  color: #b3b3b3;
  font-size: 13px;
  font-weight: 400;
  padding: 0 20px;
  text-transform: capitalize;
}

.bottom-side-nav {
  width: 100%;
  border-bottom: 1px solid rgba(199, 199, 199, 0.2);
  cursor: pointer;
}

.bottom-side-nav a {
  margin-top: 0 !important;
  padding: 8px 20px;
  color: #7d7d7d;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.lr-btn {
  font-size: 12px;
  color: #b3b3b3 !important;
  padding: 1px 6px;
  border: 1px solid rgba(199, 199, 199, 0.2);
  background-color: #f7f7f7;
  font-weight: 600;
  font-style: normal;
  line-height: 22.5px;
}
</style>
