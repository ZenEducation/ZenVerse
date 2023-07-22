<script setup>
import { reactive } from "vue";
import {
  mdiVideo,
  mdiTrashCan,
  mdiMicrophone,
  mdiFilePdfBox,
  mdiPresentationPlay,
  mdiPencil,
} from "@mdi/js";
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import FormField from "@/components/Forms/FormField.vue";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";

const listBoxOptions = [
  { id: 1, label: "Video", unavailable: false },
  { id: 2, label: "Audio", unavailable: false },
  { id: 3, label: "PDF", unavailable: false },
  { id: 4, label: "PPT", unavailable: true },
  { id: 5, label: "Text", unavailable: false },
];

const checkboxOptions = {
  one: "Make this a free preview lesson",
  two: "Make this a prerequisite",
  three: "Enable discussions for this lesson",
  four: "Apply to all lessons in this course",
  five: "Make this video downloadable",
};



const formLower = reactive({
  person: listBoxOptions[0],
});

const iconValue = computed(() => {
  if (formLower.person.id == 1) {
    return mdiVideo;
  }
  if (formLower.person.id == 2) {
    return mdiMicrophone;
  }
  if (formLower.person.id == 3) {
    return mdiFilePdfBox;
  }
  if (formLower.person.id == 4) {
    return mdiPresentationPlay;
  }
  if (formLower.person.id == 5) {
    return mdiPencil;
  }
});
</script>

<template>
  <div>
    
        <div class=" mb-6 ">
          <CardBox
            class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
            is-form
            @submit.prevent="submit"
          >
            <CardBoxComponentTitle title="Lesson Settings" class="mb-12" />
            <BaseDivider />

            <FormField>
              <FormCheckRadioGroup
                name="checkbox-lesson-settings"
                :options="checkboxOptions"
                is-column
                
              />
            </FormField>

            <BaseDivider />
            <b><h4>Lesson Icon and Label</h4></b><br />
            <PremFormField>
              <PremFormControl
                v-model="formLower.person"
                type="list"
                :icon="iconValue"
                :options="listBoxOptions"
              />

              <!-- <PremFormControl/> -->
            </PremFormField>
            <BaseButtons>
              <BaseButton
                type="submit"
                color="danger"
                :icon="mdiTrashCan"
                label="DELETE LESSON"
                outline
              />
            </BaseButtons>
            <template #footer>
              <BaseButtons>
                <BaseButton
                  type="submit"
                  to="/dashboard"
                  color="info"
                  label="SAVE"
                />
                <BaseButton
                  type="submit"
                  to="/dashboard"
                  color="info"
                  outline
                  label="DISCARD CHANGES"
                />
              </BaseButtons>
            </template>
          </CardBox>
        </div>
    
  </div>
</template>
