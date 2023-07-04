<script setup>
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import {pdfViewerStore} from "~/stores/lmsLearnerDisplay.js"
import {ref} from "vue"
import {
mdiFullscreen,
} from "@mdi/js";


const allPdfData = pdfViewerStore()

const lastChapter =allPdfData.allPDFData[allPdfData.allPDFData.length-1]
const lastLessions = lastChapter.lessons[lastChapter.lessons.length-1]



const isLastItem= ref(true)

const isFullScreen = ref(false)

const toggleFullScreen = ()=>{
  isFullScreen.value = !isFullScreen.value
}

const checklastLession = () =>{
 if(lastLessions.lessonNumber==allPdfData.currentPDF.lessonNumber && lastLessions.lessonTitle===allPdfData.currentPDF.lessonTitle){
  isLastItem.value=false
 }
}




</script>

<template>
  <section class="carrier sec pl-60 max-lg:pl-0  h-full w-full bg-red-50 " :class="{'absolute-section' : isFullScreen}"  >
    <div class=" h-8 bg-blue-400 w-full px-4 flex justify-between">
      <h1>Getting Started</h1>
      <BaseIcon
      @click="toggleFullScreen"
      :path="mdiFullscreen"
      class="cursor-pointer"
      size="30"
    />
    </div>
    
    <slot />
    <div class="bottom-bar fixed bottom-0 h-14 bg-blue-400 flex justify-center items-center " :class="{'absolute-bottombar' : isFullScreen}" >
     
      <BaseButton
      label="Mark Incomplete "
      type="login"
      color="info"
      class="mx-1"
      v-if="allPdfData.currentPDF.done==true "
      @click="allPdfData.markAsInCompleted(allPdfData.currentPDF, allPdfData.currentChapter)"
    />
    <BaseButton
      label="Continue "
      type="login"
      color="info"
      class="mx-1"
      v-if="allPdfData.currentPDF.done==true "
      @click="allPdfData.markAsCompleted(allPdfData.currentPDF, allPdfData.currentChapter)"
    />
     
      <BaseButton
      label="Mark Completed and Next "
      type="login"
      color="info"
      class="mx-1"
      v-if="allPdfData.currentPDF.done==false "
      @click="allPdfData.markAsCompleted(allPdfData.currentPDF, allPdfData.currentChapter)"
    />

 
   

    </div>
  </section>
</template>

<style>
.carrier{
   height: calc(100vh - 7rem);
}
.bottom-bar{
  width: 100%;
}
@media screen and (min-width: 1024px) {
  .bottom-bar{
    width: calc(100% - 15rem);
  }
}

.absolute-section{
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100vh - 3.5rem );
  width: calc(100vw);
  z-index: 100;
  margin: 0;
  padding: 0;

}
.absolute-bottombar{
  width: 100%;
}




</style>