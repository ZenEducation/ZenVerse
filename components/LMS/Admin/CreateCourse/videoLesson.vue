<script setup>
import { createCourse } from "~~/stores/createCourse";
import { ref, reactive } from "vue";

import {
  mdiBallot,
  mdiAccount,
  mdiCreditCardOutline,
  mdiFileUploadOutline,
  mdiDragVertical,
  mdiTrashCanOutline,
} from "@mdi/js";
 
import SectionMain from "@/components/Sections/SectionMain.vue";

import CardBox from "@/components/Cards/CardBox.vue";
import Lessonsetting from "@/components/LMS/Admin/CreateCourse/lessonsetting.vue"

import PremFormField from "@/components/Forms/FormField.vue";

import BaseButton from "@/components/Buttons/BaseButton.vue";
import FormUploadFiles from "@/components/LMS/Course/FormUploadFiles.vue";
import Uploadtext from "@/components/LMS/Course/Uploadtext.vue";
import SeclectionMultipleButton from "@/components/Sections/SeclectionMultipleButton.vue";
const selectFieldOptions = [
  { id: 1, label: "Select a video file" },
  { id: 2, label: "Video 1" },
  { id: 3, label: "Video 2" },
  { id: 4, label: "Video 3" },
];
const courseStore = createCourse();
const header = computed(() => {
  if (inputValue.value) {
    return `${inputValue.value}`;
  } else {
    return "New Video Lesson";
  }
});

const inputValue = ref("");


const saveData = ()=> {
  const data = {
    id:1,
    name:inputValue.value,
    icon:"mdiVideoOutline",
    type:"Video"
  }
  courseStore.addLessonsOnChapters(data)
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
            label="SAVE"
            color="info"
            class="ml-1"
            @click="saveData()"
       
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
            <PremFormField label="Text description" horizontal>
              <FormUploadFiles
                
                :icon-left="mdiAccount"
                help="Text"
              />
            </PremFormField>


            <PremFormField label="Videos from your library" horizontal>
              <FormUploadFiles :options="selectFieldOptions" />
            </PremFormField>
            <PremFormField label="Upload a video file" horizontal>
              <Uploadtext
              download
              downloadlist
                :icon="mdiDragVertical"
                :iconRight="mdiTrashCanOutline"
                dragText = "Drag & Drop Video files here"
                footer = "footerText"
                :icon-left="mdiAccount"
                help="Upload a video file"
                placeholder="Upload a video file"
              />
            </PremFormField>
          </CardBox>
        </div>
        <Lessonsetting />
    

  </div>
</template>
