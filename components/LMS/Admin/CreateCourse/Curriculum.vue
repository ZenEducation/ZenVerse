<template>
  <div class="grid grid-cols-1 gap-1 mb-6 xl:grid-cols-6">
    <!-- left section  -->
    <CardBox
      class="lg:col-span-3 xl:col-span-2 overflow-y-auto"
      style="height: 500px"
    >
      <div class="relative h-full">
        <div class="">
          <!-- chapters  -->
          <div
            v-for="(item, index) in chapters"
            :key="index"
            class="cursor-pointer shadow px-2"
          >
            <!-- chapter name and dropdown  -->
            <div class="flex pt-2 pr-2">
              <BaseIcon :path="mdiDrag" :size="22" />

              <div
                @click="() => showAddLessonField(index,item)"
                class="flex justify-between w-full"
              >
                <div class="pl-1">
                  <!-- {{
                    editedChapterIndex === index ? chapterName.name : item.name
                  }} -->
                  {{item.name}}
                </div>

                <BaseIcon
                  :path="isDivVisible && currentChapter.id==index+1 ? mdiChevronUp: mdiChevronDown"
                  :size="22"
                />
              </div>
            </div>

          
           
              <div class="mt-4" v-if="isDivVisible && currentChapter.id==index+1">
              <!-- lessons list  -->
              <div class="mx-2 px-1 shadow border border-1 rounded my-2" 
              v-for="(data,index) in item.lessons" :key="index"
              >
                <div class="flex aligns-center py-2 pr-2">
                  <BaseIcon :path="mdiDrag" :size="22" class="my-auto" />

                  <div class="w-full pl-1">
                    <div class="pl-1 text-sm text-gray-500">
                      {{
                     data.name
                      }}
                    </div>
                    <div
                      class="flex aligns-center text-sm text-gray-500 mt-1"
                    >
                      <BaseIcon :path="iconType(data.type)" :size="22" />
                      <div class="text-sm text-gray-500 ml-1 my-auto">{{ data.type }}  </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-between items-center gap-4 mt-4 px-1">
                <div>
                  <BaseButton
                    color="info"
                    label="Add lesson"
                    :icon="mdiPlus"
                    @click="choseLessonsType(item)"
                  />
                </div>
                <div class="hidden sm:block">
                  <BaseButton color="info" label="Copy lesson from" outline />
                </div>
              </div>
            </div>
            <BaseDivider />
          </div>

          <!-- default section  -->
          <div class="first_section items-center">
            <div class="flex items-center">
              <div class="">
                <BaseIcon :path="mdiMultiplication" :size="22" />
              </div>
              <div class="pl-1 text-sm">
                <b> Pro Tip </b>
              </div>
            </div>
            <div class="text-gray-400 text-sm">
              You can customize the course with certificate
            </div>
            <p
              class="text-sm text-blue-700 my-3 cursor-pointer hover:underline"
            >
              <b>course completion certificate</b>
            </p>
          </div>

          <BaseDivider />
        </div>

        <!-- add chapter button  -->
        <div class="absolute w-full bottom-0">
          <BaseDivider />
          <BaseButtons type="justify-between mb-2" no-wrap>
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
              class="absolute z-10"
              top
            />
          </BaseButtons>
        </div>
      </div>
    </CardBox>

    <!-- right section  -->
    <CardBox
      :icon="mdiBallot"
      class="mb-6 lg:mb-0 lg:col-span-3 xl:col-span-4"
      is-form
      @submit.prevent="submit"
    >
      <!-- default section  -->
      <div
        class="first_section text-center"
        v-if="courseStore.section == 'first'"
      >
        <BaseIcon
          :path="mdiNotePlusOutline"
          :size="60"
          w="60"
          h="60"
          class="mx-auto text-center mt-5"
        />
        <div class="text-center text-3xl font-sm mt-2 text-gray-400">
          Let's build your course !
        </div>
        <div class="w-10/12 mx-auto mt-5 text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nisi sed
          aliquid laborum eius voluptas sequi vel, culpa molestiae cupiditate!
          Illum quidem consectetur soluta reiciendis, quia repellendus ducimus
          ullam dolore!
        </div>
        <div class="mt-5 text-gray-400">
          Want to add bunch of content at once ?
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500"
          >
            Try our bulk importer</a
          >
        </div>
      </div>
      <!-- add chapter title  -->
      <div class="add_chapter" v-if="courseStore.section == 'add-chapter'">
        <div class="flex item-center justify-between">
          <div class="w-6/12">
            <CardBoxComponentTitle
              class=""
              :title="
                editedChapterIndex !== -1
                  ? 'Edit' + ' : ' + chapterName
                  : 'New Chapter' + ' : ' + chapterName
              "
            />
          </div>
          <div
            class="flex item-center flex-wrap xs:grid grid-cols-1 gap-1 w-fit"
          >
            <div v-if="isDivVisible">
              <BaseButton
                color="danger"
                type="button"
                :icon="mdiDelete"
                label="Delete"
                @click="deleteChaptrerName"
              />
            </div>
            <div>
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
                v-if="!isDivVisible"
              />
              <!-- // updated -->
              <BaseButton
              v-else
                color="info"
                type="button"
                label="Update"
                @click="updateChapterName(currentChapter)"
              />
          
            </div>
            <!-- Update -->
           
          </div>
        </div>
        <div class="mt-5">
          
          <PremFormField label="Chapter title" horizontal class="mt-5">
            <input
              v-model="chapterName"
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
            class="pb-3 mt-5"
            :options="checkboxOptions"
          />
        </div>

        <div class="flex items-center mt-10">
          <div class="">
            <BaseIcon :path="mdiMultiplication" :size="22" />
          </div>
          <div class="pl-1 text-sm">
            <b> Pro Tip </b>
          </div>
        </div>
        <div class="text-gray-400 text-sm">
          Chapter will rename in draft if there are no lessons or all are set to
          draft
        </div>
        <NotificationBar
          color="danger"
          class="mt-3"
          v-if="isError"
          @click="handleError"
        >
          Chapter name is required
        </NotificationBar>

        <NotificationBar
          color="info"
          class="mt-3"
          v-if="isSuccess"
          @click="handleError"
        >
          Successfully created the
          <b>Chapter</b></NotificationBar
        >
      </div>

     
      <!-- updated chapter title  -->

      





      <!-- lesson Type  -->
      <LessonsType v-if="courseStore.section == 'lesson-type'" />

      <!-- add lessons  -->
      <div class="" v-if="courseStore.section == 'Video'">
        <UploadFiles />
      </div>
      <div class="" v-if="courseStore.section == 'PDF'">
        <PdfFiles />
      </div>
      <div class="" v-if="courseStore.section == 'Text'">
        <Textfile />
      </div>
      <div class="" v-if="courseStore.section == 'Audio'">
        <AudioFile />
      </div>
      <div class="" v-if="courseStore.section == 'Download'">
        <Download />
      </div>
      <div class="" v-if="courseStore.section == 'Presentation'">

        <pptLesson />
      </div>
      <div class="" v-if="courseStore.section == 'Multimedia'">Multimedia</div>
      <div class="" v-if="courseStore.section == 'Live'">Live</div>
      <div class="" v-if="courseStore.section == 'Quiz'">
        <QuizLesson />
      </div>
      <div class="" v-if="courseStore.section == 'Survey'">
        <Survey />
      </div>
      <div class="" v-if="courseStore.section == 'Assignment'">Assignment</div>
      <div class="" v-if="courseStore.section == 'Exam'">Exam</div>
    </CardBox>
  </div>
</template>

<script setup>
import {
  mdiChevronUp,
  mdiChevronDown,
  mdiKeyboardBackspace,
  mdiMultiplication,
  mdiNotePlusOutline,
  mdiDrag,
  mdiPlus,
  mdiFilePdfBox,
  mdiVideoOutline,

mdiText,
mdiVolumeHigh,
mdiDownload,
mdiPresentationPlay,
mdiMultimedia,
mdiBroadcast,
mdiFormatListCheckbox,
mdiFormatListChecks,
mdiTextAccount,
mdiTextBoxSearchOutline
} from "@mdi/js";

import { mdiDotsVertical } from "@mdi/js";
import { mdiDelete, mdiEye } from "@mdi/js";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import uploadImg from "@/assets/img/upload.png";
import PremFormControl from "@/components/Forms/FormControl.vue";
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
import NotificationBar from "@/components/NotificationBars/NotificationBar.vue";
import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import { createCourse } from "~~/stores/createCourse";
import { courseMenuOptions } from "@/configs/sampleButtonMenuOptions.js";

// components
import LessonsType from "./LessonsType.vue";
import UploadFiles from "~/components/LMS/Admin/CreateCourse/videoLesson.vue";
import AudioFile from "~/components/LMS/Admin/CreateCourse/audioLesson.vue";
import PdfFiles from "~/components/LMS/Admin/CreateCourse/pdfLesson.vue";
import Textfile from "~/components/LMS/Admin/CreateCourse/textlesson.vue";
import Download from "~/components/LMS/Admin/CreateCourse/downloadLesson.vue";
import Survey from "~/components/LMS/Admin/CreateCourse/surveyLesson.vue";
import QuizLesson from "~/components/LMS/Admin/CreateCourse/addquiz.vue";
import pptLesson from "~/components/LMS/Admin/CreateCourse/pptLesson.vue";
// const , functions
const courseStore = createCourse();
const chapterName = ref("Untitled Chapter");
const isDivVisible = ref(false);
const isUntitleFieldVisible = ref(true);
const editedChapterIndex = ref(-1);
const isError = ref(false);
const isSuccess = ref(false);
let className = "grid grid-cols-1 gap-6 xl:grid-cols-2";
let chapters = reactive(courseStore.allChapters);
const checkboxOptions = { content: "Set new lessons to draft by default" };
const currentChapter = ref(null)
const addChapter = () => {
  isUntitleFieldVisible.value = true;
  chapterName.value = "Untitled chapter";
  editedChapterIndex.value = -1;
  isDivVisible.value=false
  // courseStore.section
  courseStore.showAddChapterNameSection();
  
};
// save chapter name
const saveChaptrerNames = () => {
  if (chapterName.value == null || chapterName.value == "") {
    isError.value = true;
    setTimeout(hideNotification, 2000);
    return;
  }

  isDivVisible.value = true;
  isSuccess.value = true;
  className = "grid grid-cols-1 gap-6 xl:grid-cols-3";
  isUntitleFieldVisible.value = false;
  // chapters.push(chapterName.value);
  const allData = courseStore.allChapters;
  let id = null;
  if (allData.length > 0) {
    let lastId = allData[allData.length - 1];
    id = lastId.id + 1;
  } else {

  id=1
  }
  const chapter = {
    id,
    name: chapterName.value,
  };
  courseStore.addLessonsItem(chapter);
  courseStore.selectedChapter(chapter)
  currentChapter.value=chapter
  isSuccess.value = true;
  setTimeout(hideNotification, 2000);
};

// hide
const hideNotification = () => {
  if (isSuccess.value) {
    isSuccess.value = false;
  }

  if (isError.value) {
    isError.value = false;
  }
};

let limit = chapters.length;
let emp = [];
for (let i = 0; i < limit + 1; i++) {
  emp.push(true);
}

const isAddLessonVisible = ref(emp);
// show hide lessons
const showAddLessonField = (index,item) => {
  editedChapterIndex.value = index;
  chapterName.value = item.name;
 
  const temp = [...isAddLessonVisible.value];
  temp[index] = !temp[index];
  isAddLessonVisible.value = temp;
  currentChapter.value= item
  courseStore.showAddChapterNameSection();
  courseStore.selectedChapter(item)
  if( isDivVisible.value==true ){
    isDivVisible.value =false
  } else {
    isDivVisible.value =true
  }
};

// delete chapter
const deleteChaptrerName = () => {
  window.confirm("Are you sure, you want to delete?");
  if (editedChapterIndex.value !== -1) {
    // chapters.splice(editedChapterIndex.value, 1);
    courseStore.deleteChapter(editedChapterIndex.value)
    courseStore.showChapterAddItem("first")
    editedChapterIndex.value = -1;
    isUntitleFieldVisible.value = false;
    chapterName.value = "Untitled Chapter";

  }
  if (chapters.length === 0) {
    isDivVisible.value = false;
    isUntitleFieldVisible.value = false;
    editedChapterIndex.value = -1;
    chapterName.value = "Untitled Chapter";
    return;
  }
  chapters.filter((item) => item != chapterName.value);
};

const updateChapterName = (item) => {
  console.log("Update")
   let  newName = {
    id:item.id,
    name:chapterName.value
   }
  courseStore.updateChapterName(newName);
}


// discard changes
const discardChapterName = () => {
  chapterName.value = "Untitled chapter";
  if (chapters.length === 0)
    className = "grid grid-cols-1 gap-6 xl:grid-cols-2";
};

const choseLessonsType = (chapter) => {
  courseStore.showLessonType();
  courseStore.selectedChapter(chapter)
};



const icon =ref(null)

const iconType = (type)=>{
  if(type=="Video"){
    return mdiVideoOutline
  }
  if(type=="PDF"){
    return mdiFilePdfBox
  }
  if(type=="Text"){
    return mdiText
  }
  if(type=="Audio"){
    return mdiVolumeHigh
  }
  if(type=="Download"){
    return mdiDownload
  }
  if(type=="Presentation"){
    return mdiPresentationPlay
  }
  if(type=="Multimedia"){
    return mdiMultimedia
  }
  if(type=="Live"){
    return mdiBroadcast
  }
  if(type=="Quiz"){
    return mdiFormatListCheckbox
  }
  if(type=="Survey"){
    return mdiFormatListChecks
  }
  if(type=="Assignment"){
    return mdiTextAccount
  }
  if(type=="Exam"){
    return mdiTextBoxSearchOutline
  }

}



</script>

<style scoped></style>
