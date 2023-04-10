<script setup>
import { ref, reactive } from "vue";
import {
  mdiBallot,
  mdiAccount,
  mdiCreditCardOutline,
  mdiFileUploadOutline,
  mdiDragVertical,
  mdiTrashCanOutline
} from "@mdi/js";
 
import SectionMain from "@/components/Sections/SectionMain.vue";

import CardBox from "@/components/Cards/CardBox.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import PremFormField from "@/components/Forms/FormField.vue";

import BaseButton from "@/components/Buttons/BaseButton.vue";
import FormUploadFiles from "@/components/LMS/FormUploadFiles.vue";
import Uploadtext from "@/components/LMS/Uploadtext.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";

import BulkImporterIcon from "~~/components/LMS/BulkImporterIcon.vue";

const chapters = ref([{ id: 1 }]);

const addChapter = () => {
  chapters.value.push({ id: chapters.value.length + 1 });
};
const deleteChapter = (index) => {
  chapters.value.splice(index, 1);
};

</script>

<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
      <SectionTitleLineWithButton
          :icon="mdiFileUploadOutline"
          title="Bulk Importer"
          main
        > 
        
        </SectionTitleLineWithButton>

        <div class="grid grid-cols-1 gap-6 mb-6">
          <div v-for="chapter in chapters" :key="chapter.id">
          <CardBox
            :icon="mdiBallot"
            class="mb-6 lg:mb-0 xl:col-span-3"
            is-form
            @submit.prevent="submit"
            
          >

          <BulkImporterIcon
           :icon = "mdiDragVertical"
           :iconRight = "mdiTrashCanOutline"
           :deleteHandler="()=>deleteChapter(index)"
        
          />
 
            <PremFormField label="Upload a video file" horizontal>
              <Uploadtext
              allfiles
                dragText = "Drag & drop most video, audio & PDF files here"
                :icon-left="mdiAccount"
                help="Upload a video file"
                placeholder="Upload a video file"
              />
            </PremFormField>
            
          </CardBox>
        </div>
            <BaseButton
            @click="addChapter" label="Add Chapter" type="submit" color="info"
            />
         
        </div>
        
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
