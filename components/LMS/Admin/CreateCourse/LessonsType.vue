<template>
    <div class="">
       
       <div class="flex justify-between aligns-center">
        <div class="text-xl">
            Lessons
        </div>
        <BaseButton
              color="info"
              type="submit"
              label="CLOSE"
              @click="showFirstPage"
             small
             outline
            />
       </div>

       <div class="mt-2">
        <div class="">Deliver learning content</div>
    <div class="grid grid-cols-6 gap-3 my-2 xl:grid-cols-2">
        <div class="flex aligns-center cursor-pointer  hover:shadow "
        
        v-for="(item,idx) in deleiveryLearingData"
        :key="idx"
  @click="showChapterType(item.heading)"
        
        >
            <div class="flex aligns-center px-3 border">  <BaseIcon :path="item.icon" :size="24" h="24" w="24" class="my-auto text-gray-500" /></div>
            <div class=" w-full py-1 pl-3">
                <div class="text-sm text-gray-700 dark:text-gray-100"> {{ item.heading }} </div>
                <div class="text-sm text-gray-500"> {{ item.description }} </div>

            </div>
        </div>
    
    </div>
       </div>
       <div class="mt-1">
        <div class="">Assess your students</div>
    <div class="grid grid-cols-6 gap-3 my-2 xl:grid-cols-2">
        <div class="flex aligns-center cursor-pointer  hover:shadow "
        
        v-for="(item,idx) in AssessyourstudentsData"
        :key="idx"
        @click="showChapterType(item.heading)"
        >
            <div class="flex aligns-center px-3 border">  <BaseIcon :path="item.icon" :size="24" h="24" w="24" class="my-auto text-gray-500" /></div>
            <div class=" w-full py-1 pl-3">
                <div class="text-sm text-gray-700 dark:text-gray-100"> {{ item.heading }} </div>
                <div class="text-sm text-gray-500"> {{ item.description }} </div>

            </div>
        </div>
    
    </div>
       </div>
    </div>
</template>

<script setup>
import {
    mdiVideoOutline,
    mdiFilePdfBox,
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
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { createCourse } from "~~/stores/createCourse";
import {computed} from "vue"
import { Item } from "paper/dist/paper-core";
const courseStore = createCourse();
const showChapterType=(chapter)=>{
    courseStore.showChapterAddItem(chapter);
    // courseStore.addLessonsItem(chapter);

}

const currentChapter = computed(()=>{
    return courseStore.currentChapterItem
})


const showFirstPage = ()=>{
    courseStore.showChapterAddItem("first")
}


const deleiveryLearingData = [
    {

   heading:"Video",
   description:"Some description about the file type",
   icon:mdiVideoOutline
    },
    {

heading:"PDF",
description:"Some description about the file type",

icon:mdiFilePdfBox
 },
 {

heading:"Text",
description:"Some description about the file type",

icon:mdiText
 },
 {

heading:"Audio",
description:"Some description about the file type",

icon:mdiVolumeHigh
 },
 {

heading:"Download",
description:"Some description about the file type",

icon:mdiDownload
 },
 {

heading:"Presentation",
description:"Some description about the file type",

icon:mdiPresentationPlay
 },
 {

heading:"Multimedia",
description:"Some description about the file type",

icon:mdiMultimedia
 },
 {

heading:"Live",
description:"Some description about the file type",

icon:mdiBroadcast
 },
   
]
const AssessyourstudentsData = [
{

heading:"Quiz",
description:"Some description about the file type",

icon:mdiFormatListCheckbox
 },
 {

heading:"Survey",
description:"Some description about the file type",
icon:mdiFormatListChecks
 },
 {

heading:"Assignment",
description:"Some description about the file type",

icon:mdiTextAccount
 },
 {

heading:"Exam",
description:"Some description about the file type",

icon:mdiTextBoxSearchOutline
 },
]
</script>
