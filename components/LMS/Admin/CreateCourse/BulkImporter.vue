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
                  :path="
                    isDivVisible && currentChapter.id==index+1 ? mdiChevronUp: mdiChevronDown
                  "
                  :size="22"
                />
              </div>
            </div>

            <!-- add lesson section  -->
            <!-- <div class="mt-4" v-if="isDivVisible && isAddLessonVisible[index]"> -->
              <div class="mt-4" v-if=" isDivVisible && currentChapter.id==index+1">
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


     
      <div
            v-for="(item, index) in chapters"
            :key="index"
            class="cursor-pointer shadow px-2"
            @click="currentChapterItem(item)"
          >
            <!-- chapter name and dropdown  -->
            <div class="flex pt-2 pr-2">
            

              <div
                
                class="flex justify-between aligns-center w-full"
              >
              <BaseIcon :path="mdiDrag" :size="22" class="my-auto" />
                  <!-- {{
                    editedChapterIndex === index ? chapterName.name : item.name
                  }} -->
                  <PremFormField label="" horizontal class="w-full ml-2">
            <input
              v-model="item.name"
              help="Enter chapter name"
              placeholder="Untitled chapter"
              required
              type="text"
              class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 bg-white dark:bg-slate-800"
            />
          </PremFormField>
            
                <BaseIcon
                  :path="
                    mdiDeleteOutline
                  "
                  :size="22"
                  class="my-auto ml-2"
                  @click="deleteChaptrerName(index)"
                />
              </div>
            </div>

            <!-- add lesson section  -->
           
              <div class="mt-4" >
              <!-- lessons list  -->
              <div class="mx-2 px-3 shadow border border-1 rounded my-2" 
              v-for="(data,index) in item.lessons" :key="index"
              >
                <div class="flex aligns-center py-2 pr-2">
                  <BaseIcon :path="mdiDrag" :size="22" class="my-auto" />

                  <div class="w-full pl-1">
                    <div class="pl-1 text-sm text-gray-500">
                      <!-- {{
                     data.name
                      }} -->
                        <PremFormField label="" horizontal class="mt-5">
            <input
              v-model="data.name"
              help="Enter chapter name"
              placeholder="Untitled chapter"
              required
              type="text"
              class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 bg-white dark:bg-slate-800"
            />
          </PremFormField>
                    </div>
                  
                  </div>
                  <BaseIcon :path="mdiDeleteOutline" :size="22" class="my-auto ml-2" />

                </div>
              </div>

          
            </div>

            <PremFormField label="Upload a file" horizontal class="mt-2">
              <Uploadtext
                downloadlist
                video
                :icon="mdiDragVertical"
                :iconRight="mdiTrashCanOutline"
                dragText="Drag & drop PDF file here"
                footer="footerText"
                :icon-left="mdiAccount"
                help="Upload a pdf file"
                placeholder="Upload a pdf file"
                v-model="file"
                @upload-data="getFile"

              />
            </PremFormField>

       
          </div>
      
          <BaseButton
        
                color="info"
                type="button"
                label="Add Chapter"
                class="mt-5"
                outline
               @click="addNewChapter"
              />




  
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
mdiTextBoxSearchOutline,
mdiDeleteOutline,
mdiDragVertical,
mdiBallot
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
import Uploadtext from "@/components/LMS/Uploadtext.vue";

// components
import LessonsType from "./LessonsType.vue";
import UploadFiles from "~/components/LMS/Admin/CreateCourse/videoLesson.vue";
import AudioFile from "~/components/LMS/Admin/CreateCourse/audioLesson.vue";
import PdfFiles from "~/components/LMS/Admin/CreateCourse/pdfLesson.vue";
import Textfile from "~/components/LMS/Admin/CreateCourse/textlesson.vue";
import Download from "~/components/LMS/Admin/CreateCourse/downloadLesson.vue";
import Survey from "~/components/LMS/Admin/CreateCourse/surveyLesson.vue";
import QuizLesson from "~/components/LMS/Admin/CreateCourse/addquiz.vue";

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
const file = ref(null)

const currentChapterItem =(item)=>{
  courseStore.selectedChapter(item)
}

const getFile = (data) =>{
 console.log(data)

 const item={
    id: 1,
    name:data,
   
  }
  courseStore.addLessonsOnChapters(item)

}


const addNewChapter = ()=>{

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
    name: "Untitled chapter",
  };
  courseStore.addLessonsItem(chapter);
  courseStore.selectedChapter(chapter) 
}

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
const deleteChaptrerName = (index) => {
  window.confirm("Are you sure, you want to delete?");
  if (editedChapterIndex.value !== -1) {
    // chapters.splice(editedChapterIndex.value, 1);
    courseStore.deleteChapter(index)
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
