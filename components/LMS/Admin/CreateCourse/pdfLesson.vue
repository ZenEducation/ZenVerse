<script setup>
import { createCourse } from "~~/stores/createCourse";
import { ref, reactive,computed } from "vue";
import {
  mdiBallot,
  mdiAccount,
  mdiCreditCardOutline,
  mdiFileUploadOutline,
  mdiDragVertical,
  mdiTrashCanOutline,
  mdiFilePdfBox
} from "@mdi/js";

import SectionMain from "@/components/Sections/SectionMain.vue";

import CardBox from "@/components/Cards/CardBox.vue";
import Lessonsetting from "@/components/LMS/Admin/CreateCourse/lessonsetting.vue"
import PremFormField from "@/components/Forms/FormField.vue";

import BaseButton from "@/components/Buttons/BaseButton.vue";
import FormUploadFiles from "@/components/LMS/Course/FormUploadFiles.vue";
import Uploadtext from "@/components/LMS/Course/Uploadtext.vue";
import SeclectionMultipleButton from "@/components/Sections/SeclectionMultipleButton.vue";
const inputValue = ref("");
const contentValue = ref("")
const courseStore = createCourse();
const currentChapter = computed(()=>{
    return courseStore.currentChapterItem
})
const allChaptersData = reactive(courseStore.allChapters)
const selectFieldOptions = [
  { id: 1, label: "Select a video file" },
  { id: 2, label: "Video 1" },
  { id: 3, label: "Video 2" },
  { id: 4, label: "Video 3" },
];

const header = computed(() => {
  if (inputValue.value) {
    return `${inputValue.value}`;
  } else {
    return "New Pdf Lesson";
  }
});
const exportpdf = () => {
  console.log('test')
  const item={
    id: 1,
    name:inputValue.value,
    icon:"mdiFilePdfBox",
    type:"PDF"
  }
  courseStore.addLessonsOnChapters(item)
}


</script>

<template>
  <div>


        <SeclectionMultipleButton
          :icon="mdiFileUploadOutline"
          :title="header"
          main
        >
          <BaseButton
            label="DISCARD CHANGES"
            class="mr-1"
            color="info"
            outline
          
          />
          <BaseButton
          @click = "exportpdf()"
            label="SAVE"
            color="info"
            class="ml-1"
         
          />
        </SeclectionMultipleButton>

        <div class="grid grid-cols-1 gap-6 mb-6">
          <CardBox
            :icon="mdiBallot"
            class="mb-6 lg:mb-0 xl:col-span-3"
            is-form
            @submit.prevent="submit"
          >
            <PremFormField label="Title" horizontal>
              <FormUploadFiles
                v-model="inputValue"
                :icon-left="mdiAccount"
                help="Title"
              />
            </PremFormField>
           
            <PremFormField label="Upload a file" horizontal>
              <Uploadtext
                downloadlist
                pdffile
                :icon="mdiDragVertical"
                :iconRight="mdiTrashCanOutline"
                dragText="Drag & drop PDF file here "
                footer="footerText"
                :icon-left="mdiAccount"
                help="Upload a pdf file"
                placeholder="Upload a pdf file"
              />
            </PremFormField>
          </CardBox>
        </div>
 
    
        <Lessonsetting />
 

  </div>
</template>
