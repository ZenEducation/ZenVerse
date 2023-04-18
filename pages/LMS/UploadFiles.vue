<script setup>
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

import PremFormField from "@/components/Forms/FormField.vue";

import BaseButton from "@/components/Buttons/BaseButton.vue";
import FormUploadFiles from "@/components/LMS/FormUploadFiles.vue";
import Uploadtext from "@/components/LMS/Uploadtext.vue";
import SeclectionMultipleButton from "@/components/Sections/SeclectionMultipleButton.vue";
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
    return "New Video Lesson";
  }
});

const inputValue = ref("");

</script>

<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <SeclectionMultipleButton
          :icon="mdiFileUploadOutline"
          :title="header"
          main
        >
          <BaseButton
            label="DISCARD CHANGES"
            :icon="mdiCreditCardOutline"
            rounded-full
            small
          />
          <BaseButton
            label="SAVE"
            :icon="mdiCreditCardOutline"
            color="contrast"
            rounded-full
            small
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
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
