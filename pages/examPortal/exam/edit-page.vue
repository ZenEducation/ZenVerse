<template>
  <CardBoxModal v-model="isEditModalActive" title="" :show-footer="false">
    <header
      class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
    >
      <div class="text-gray-500">
        <BaseIcon v-if="mdiAccountPlus" :path="mdiAccountPlus" :size="32" />
      </div>
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Edit Section</h1>
      </div>
      <div
        class="text-gray-500 cursor-pointer"
        @click="isEditModalActive = false"
      >
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>
    <CardBox is-form @submit.prevent="EditSectionControl(0, false)">
      <FormField label="Section Name">
        <FormControl
          required
          v-model="editSectionName"
          placeholder="New Name"
        />
      </FormField>

      <div class="flex justify-end py-2">
        <BaseButton type="submit" color="info" label="Done" />
      </div>
    </CardBox>
  </CardBoxModal>

  <CardBoxModal v-model="isAddModalActive" title="" :show-footer="false">
    <header
      class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
    >
      <div class="text-gray-500">
        <BaseIcon v-if="mdiAccountPlus" :path="mdiAccountPlus" :size="32" />
      </div>
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Add Section</h1>
      </div>
      <div
        class="text-gray-500 cursor-pointer"
        @click="isAddModalActive = false"
      >
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
    <header
      class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
    >
      <div class="text-gray-500">
        <BaseIcon v-if="mdiAccountPlus" :path="mdiAccountPlus" :size="32" />
      </div>
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Add Que</h1>
      </div>
      <div
        class="text-gray-500 cursor-pointer"
        @click="isAddQueModalActive = false"
      >
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

  <CardBoxModal
    v-model="isModalDangerActive"
    title="Are you sure you want to delete this tab?"
    button="danger"
    buttonLabel="Yes"
    has-cancel
    @confirm="deleteSection(false)"
  />

  <CardBoxModal
    v-model="isModalQueDangerActive"
    title="Are you sure you want to delete this Que?"
    button="danger"
    buttonLabel="Yes"
    has-cancel
    @confirm="deleteQue(-1, -1, false)"
  />

  <div class="text-[#7d7d7d]">
    <exam-nav />
    <div class="side-bar pt-[60px] h-[100vh] float-left flex flex-col justify-between gap-2 pb-4">
      <div class="max-h-[418px]">
        <header
          class="uppercase text-[16px] text-[#808080] font-semibold py-2.5 px-5"
        >
          Quiz Maker
        </header>

        <ul>
          <li
            class="border-l-[3px] border-[#3a79df] rounded-sm box-shadow"
            @click="addSection(true)"
          >
            <span class="mr-2.5"
              ><img
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png"
                alt=""
            /></span>
            Add section
          </li>



          <!-- groups -->
          <p class="list-lable">Groups List </p>
          <NuxtLink to="/examportal/exam/editGroup">

            <li class="border-l-[3px] border-[#47B9F8] rounded-sm box-shadow">
              <span class="mr-2.5"
              ><img
              src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png"
              alt=""
              /></span>
              Group questions
            </li>
          </NuxtLink>

          <!-- questions -->
          <p class="list-lable">questions</p>
          <li
            class="border-l-[3px] border-[#c38aff] rounded-sm box-shadow"
            @click="addQue('MCQ')"
          >
            <span class="mr-2.5"
              ><img
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png"
                alt=""
            /></span>
            Multiple choice
          </li>
          <li
            class="border-l-[3px] border-[#EF9A9A] rounded-sm box-shadow"
            @click="addQue('Numerical')"
          >
            <span class="mr-2.5"
              ><img
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png"
                alt=""
            /></span>
            Numerical
          </li>
          <li
            class="border-l-[3px] border-[#FFCC80] rounded-sm box-shadow"
            @click="addQue('Essay')"
          >
            <span class="mr-2.5"
              ><img
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png"
                alt=""
            /></span>
            Essay
          </li>
          <li
            class="border-l-[3px] border-[#a266cc] rounded-sm box-shadow"
            @click="addQue('Fill')"
          >
            <span class="mr-2.5"
              ><img
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png"
                alt=""
            /></span>
            Fill in the blanks
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li class="bottom-side-nav">
            <a href="/examportal/Exam/groupList">Groups List</a>
          </li>
          <li class="bottom-side-nav">
            <a href="/examportal/Exam/exportPDF">Export PDF</a>
          </li>
          <li class="bottom-side-nav">
            <a href="">Import from pool</a>
          </li>
          <li class="bottom-side-nav">
            <a href="">Import</a>
          </li>
          <li class="bottom-side-nav">
            <a href="/examportal/Exam/examSetting">Settings</a>
          </li>
          <li class="bottom-side-nav">
            <a href="">Publish status</a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="pt-[88px] px-[15px] ml-[200px] h-screen overflow-y-scroll scroll-m-0 aside-scrollbars-light bg-[#ededed]"
    >
      <div class="mt-5 flex justify-between">
        <p
          class="text-[16px] text-[#808080] lowercase font-semibold ml-[9.5px]"
        >
          chemistry
        </p>
        <p
          class="text-[14px] text-[#b7b9be] lowercase font-semibold mr-[9.5px]"
        >
          {{ sections }} sections {{ questions }} questions
        </p>
      </div>

      <div>
        <NuxtLink
          to="/examportal/Exam/addQuestion/addInstructions"
          class="section"
          >Instruction</NuxtLink
        >
        <NuxtLink
          to="/examportal/Exam/TestAttachment"
          class="section flex items-center border-l-[3px] border-[#FFB11B]"
        >
          Test Attachments

          <img
            class="w-[16px] h-[18px] mx-8"
            src="@/images/others/delete.svg"
            alt=""
          />
        </NuxtLink>
        <VueDraggableNext
          :list="items"
          tag="body"
          class="dragArea list-group w-full"
        >
          <div
            class="section-add m-3 pb-[1px]"
            v-for="(i, index) in items"
            :key="index"
            :class="{ 'border-2 border-violet-400': selected == i.id }"
          >
            <div
              @click="
                () => {
                  dropdown[i.id] = !dropdown[i.id];

                  selected = i.id;
                }
              "
              class="p-5 flex justify-between"
            >
              <template v-if="editsection[i.id]">
                <PremFormControl v-model="editSectionName" type="text" />
              </template>
              <template v-else>
                {{ i.SectionName }}
              </template>
              <div class="flex items-center">
                <template v-if="editsection[i.id]">
                  <button
                    @click="EditSectionControl(i.id, false)"
                    class="lr-btn px-5"
                  >
                    Done
                  </button>
                </template>
                <template v-else>
                  <button
                    @click="EditSectionControl(i.id, true)"
                    class="lr-btn px-5"
                  >
                    EDIT
                  </button>
                </template>
                <!-- add delete btn -->
                <BaseButton
                  class="pl-4"
                  color="danger"
                  :icon="mdiTrashCan"
                  @click="deleteSection(i.id, true)"
                />
                <img
                  class="w-[16px] h-[18px] ml-5"
                  src="@/images/others/delete.svg"
                  alt=""
                />

                <p class="text-[13px] px-5">{{ sectionquestions }} questions</p>
                <!-- add arror -->
                <img
                  class="collapse-status-668700"
                  id="collapse-status"
                  style="margin: 2px 20px 0 15px; width: 8px"
                  src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/cb_collapse.svg"
                />
              </div>
            </div>

            <Transition name="slider">
              <div v-if="dropdown[i.id]">
                <div>
                  <div
                    class="border-l-[3px] border-[#3a79df] rounded-sm box-shadow w-lg flex py-2 justify-between"
                    v-for="(test, index) in i.Ques"
                    :class="{
                      'border-[#c38aff]': test.type == 'MCQ',
                      'border-[#EF9A9A]': test.type == 'Numerical',
                      'border-[#FFCC80]': test.type == 'Essay',
                      'border-[#a266cc]': test.type == 'Fill',
                    }"
                  >
                    <NuxtLink :to="toLink(test.type)">
                      <div class="flex">
                        <span class="mr-2.5"
                          ><img
                            src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png"
                            alt=""
                        /></span>
                        <span>{{ test.Quename }}</span>
                      </div>
                    </NuxtLink>
                    <div class="pr-8 flex gap-2">
                      <BaseIcon
                        :path="mdiTrashCan"
                        @click="deleteQue(index, i.id, true)"
                      />
                    </div>
                  </div>
                </div>

                <div
                  v-if="dropdown[i.id]"
                  class="w-12/12 border-[2px] border-[#82abfc] border-dashed p-10 text-[#7abfd1] bg-[#fff8e0] text-center m-[3px]"
                >
                  Drag and Drop new question
                </div>
              </div>
            </Transition>
          </div>
        </VueDraggableNext>

        <div
          class="w-12/12 border-[2px] border-[#82abfc] border-dashed p-10 text-[#7abfd1] bg-[#f0f8e8] text-center m-3"
        >
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
const selected = ref(1);
const items = ref([
  {
    id: 1,
    SectionName: "Section 1",
    Ques: [
      {
        Quename: "Que 1",
        type: "MCQ",
      },
      {
        Quename: "Que 1",
        type: "Numerical",
      },
    ],
  },
  {
    id: 2,
    SectionName: "Section 2",
    Ques: [
      {
        Quename: "Que 1",
        type: "MCQ",
      },
      {
        Quename: "Que 1",
        type: "Numerical",
      },
    ],
  },
  {
    id: 3,
    SectionName: "Section 3",
    Ques: [],
  },
  {
    id: 5,
    SectionName: "Section 4",
    Ques: [],
  },
  {
    id: 6,
    SectionName: "Section 5",
    Ques: [],
  },
]);

const dropdown = ref([]);
const editsection = ref([]);
const maxIndex = ref(12);

const sections = ref(2);
const questions = ref(0);
const sectionquestions = ref(0);

const isAddModalActive = ref(false);
const newsectionName = ref("");
const addSection = (temp) => {
  if (temp) {
    isAddModalActive.value = true;
  } else {
    let newobj = {
      id: maxIndex,
      SectionName: newsectionName.value,
      Ques: [],
    };
    maxIndex.value = maxIndex.value + 1;
    items.value.push(newobj);
    isAddModalActive.value = false;
  }
};

const isAddQueModalActive = ref(false);
const newQueName = ref("");
const addQue = (type) => {
  let newobj = {
    Quename: "New Question Title",
    type: type,
  };

  items.value.forEach((set) => {
    if (set.id == selected.value) {
      set.Ques.push(newobj);
    }
  });

  isAddQueModalActive.value = false;
};

const isModalDangerActive = ref(false);
const deleteSectionId = ref(-1);
const deleteSection = (id, temp) => {
  if (temp) {
    deleteSectionId.value = id;
    isModalDangerActive.value = true;
  } else {
    items.value = items.value.filter((obj) => {
      return obj.id != deleteSectionId.value;
    });
  }
};

const isModalQueDangerActive = ref(false);
const deleteQueSetId = ref(-1);
const deleteQueId = ref(-1);
const deleteQue = (Que, sec, temp) => {
  if (temp) {
    deleteQueSetId.value = sec;
    deleteQueId.value = Que;
    isModalQueDangerActive.value = true;
  } else {
    items.value.forEach((obj) => {
      if (obj.id == deleteQueSetId.value) {
        obj.Ques.splice(deleteQueId.value, 1);
      }
    });
  }
};

const isEditModalActive = ref(false);
const editSectionName = ref("");
const editSectionId = ref(-1);

const EditSectionControl = (id, temp) => {
  console.log(id, "called");
  if (temp) {
    editSectionId.value = id;
    isEditModalActive.value = true;
  } else {
    items.value.forEach((element) => {
      if (element.id == editSectionId.value) {
        element.SectionName = editSectionName.value;
        isEditModalActive.value = false;
        return;
      }
    });
  }
};

const toLink = (type) => {
  switch (type) {
    case "MCQ":
      return "/examportal/Exam/addQuestion/mcq";
    case "Numerical":
      return "/examportal/Exam/addQuestion/numerical";
    case "Essay":
      return "/examportal/Exam/addQuestion/para";
    case "Fill":
      return "/examportal/Exam/addQuestion/fillinblank";

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
