<script setup>
import { mdiDotsVertical } from "@mdi/js";
import { mdiChevronUp, mdiChevronDown } from "@mdi/js";
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
import { courseMenuOptions } from "@/configs/sampleButtonMenuOptions.js";
import SectionMain from "@/components/Sections/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";
import NotificationBar from "@/components/NotificationBars/NotificationBar.vue";
import { ref } from "vue";

const chapterName = ref("Untitled chapter");
const isDivVisible = ref(false);
const isUntitleFieldVisible = ref(true);
const isError = ref(false);
const isSuccess = ref(false);
const editedChapterIndex = ref(-1);

const handleError = () => {
  isError.value = false;
  isSuccess.value = false;
};

let className = "grid grid-cols-1 gap-6 xl:grid-cols-2";
let chapters = reactive([]);

const saveChaptrerNames = () => {
  if (!chapterName.value) {
    isError.value = true;
    return;
  }

  if (editedChapterIndex.value !== -1) {
    chapters[editedChapterIndex.value] = chapterName.value;
    isSuccess.value = true;
    return;
  }
  if (chapterName.value && isUntitleFieldVisible.value) {
    isDivVisible.value = true;
    isSuccess.value = true;
    chapters.push(chapterName.value);
    className = "grid grid-cols-1 gap-6 xl:grid-cols-3";
    isUntitleFieldVisible.value = false;
  }
};

const discardChapterName = () => {
  chapterName.value = "Untitled chapter";
  if (chapters.length === 0)
    className = "grid grid-cols-1 gap-6 xl:grid-cols-2";
};

const addChapter = () => {
  isUntitleFieldVisible.value = true;
  chapterName.value = "Untitled chapter";
  editedChapterIndex.value = -1;
};

const deleteChaptrerName = () => {
  if (editedChapterIndex.value !== -1) {
    chapters.splice(editedChapterIndex.value, 1);
    chapterName.value = "Untitled chapter";
  }
  if (chapters.length === 0) {
    isDivVisible.value = false;
    isUntitleFieldVisible.value = true;
  }
};

let limit = chapters.length;
let emp = [];
for (let i = 0; i < limit + 1; i++) {
  emp.push(true);
}

const isAddLessonVisible = ref(emp);

const showAddLessonField = (index) => {
  editedChapterIndex.value = index;
  chapterName.value = chapters[index];
  const temp = [...isAddLessonVisible.value];
  temp[index] = !temp[index];
  isAddLessonVisible.value = temp;
};

const handleChange = (event) => {
  chapterName.value = event.target.value;
};

const checkboxOptions = { content: "Set new lessons to draft by default" };
</script>

<template>
  <div>
    <NuxtLayout name="admin">
      <SectionMain>
        <SectionTitleLineWithButton
          :title="'New Chapter:' + ' ' + chapterName"
          main
        >
          <div v-bind:class="className">
            <div v-if="isDivVisible">
              <BaseButton
                color="info"
                type="button"
                label="DELETE"
                @click="deleteChaptrerName"
              />
            </div>
            <div class="hidden sm:block">
              <BaseButton
                color="info"
                label="Discard changes"
                type="button"
                outline
                @click="discardChapterName"
              />
            </div>
            <div>
              <BaseButton
                color="info"
                type="button"
                label="Save"
                @click="saveChaptrerNames"
              />
            </div>
          </div>
        </SectionTitleLineWithButton>
        <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-6">
          <CardBox class="lg:col-span-3 xl:col-span-2">
            <div>
              <BaseButton
                v-if="isUntitleFieldVisible"
                :label="chapterName ? chapterName : 'New Chapter'"
                color="contrast"
                :styles="['w-full', 'font-medium']"
              />
            </div>
            <BaseDivider />
            <div v-for="(item, index) in chapters" :key="index">
              <div>
                <BaseButton
                  :icon="
                    !isAddLessonVisible[index] ? mdiChevronDown : mdiChevronUp
                  "
                  :label="editedChapterIndex === index ? chapterName : item"
                  color="contrast"
                  @click="() => showAddLessonField(index)"
                  :styles="[
                    'w-full',
                    'flex-row-reverse',
                    'justify-between',
                    'font-medium',
                  ]"
                />
              </div>
              <div
                class="flex justify-between items-center gap-4 mt-4"
                v-if="isDivVisible && isAddLessonVisible[index]"
              >
                <div>
                  <BaseButton color="info" type="submit" label="Add lesson" />
                </div>
                <div class="hidden sm:block">
                  <BaseButton color="info" label="Copy lesson from" outline />
                </div>
              </div>
              <BaseDivider />
            </div>

            <p><b>Pro tip</b></p>

            <p class="opacity-75 text-xs">
              You can cusomize the course completion experience with a
              certificate or a custom completion page
            </p>
            <p
              class="text-sm text-blue-700 my-3 cursor-pointer hover:underline"
            >
              <b>course completion certificate</b>
            </p>

            <BaseDivider />
            <BaseButtons type="justify-between" no-wrap>
              <BaseButton
                color="info"
                type="submit"
                label="Add chapter"
                @click="addChapter"
                :styles="['w-full']"
              />
              <PremButtonMenu
                :options="courseMenuOptions"
                :icon="mdiDotsVertical"
                small
              />
            </BaseButtons>
          </CardBox>

          <CardBox
            :icon="mdiBallot"
            class="mb-6 lg:mb-0 lg:col-span-3 xl:col-span-4"
            is-form
            @submit.prevent="submit"
          >
            <CardBoxComponentTitle class="mb-12" />
            <PremFormField label="Chapter title" horizontal>
              <input
                v-model="chapterName"
                @change="handleChange"
                help="Enter chapter name"
                placeholder="Untitled chapter"
                required
                type="text"
                class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 bg-white dark:bg-slate-800"
              />
            </PremFormField>
            <FormCheckRadioGroup
              v-if="isDivVisible"
              name="sample-checkbox-one"
              :options="checkboxOptions"
            />
            <div v-if="isDivVisible" class="my-32">
              <p><b>Pro tip</b></p>
              <p class="opacity-75 text-sm">
                You can cusomize the course completion experience with a
                certificate or a custom completion page
              </p>
            </div>
            <NotificationBar color="danger" v-if="isError" @click="handleError">
              Chapter name is required
            </NotificationBar>

            <NotificationBar color="info" v-if="isSuccess" @click="handleError">
              Successfully created the
              <b>Chapter</b></NotificationBar
            >
          </CardBox>
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
