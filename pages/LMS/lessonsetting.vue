<script setup>
import { reactive } from "vue";
import {
  mdiVideo,
  mdiTrashCan,
  mdiAudioVideo,
  mdiSpeaker,
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
import FormControl from "@/components/Forms/FormControl.vue";

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

const dripOptions = [
  {
    id: 1,
    label: "Student Enrollment Date",
    information: "when student enrolls in the course ",
  },
  {
    id: 2,
    label: "Student Course Start Date",
    information: "when student accesses the course for the first time ",
  },
  {
    id: 3,
    label: "On Specific Date",
    information: "Select a date when this course will be released",
  },
];
const dripSelected = ref(dripOptions[0].label);

const isDrip = ref(true);
const specificDate = ref();
const lessonList = ref([
  { id: 1, label: "Demo", date: "", days: 6 },
  { id: 2, label: "Video lesson", date: "", days: 8 },
  { id: 3, label: "Audio lesson", date: "", days: 9 },
  { id: 4, label: "PDF lesson", date: "", days: 12 },
]);

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
    <NuxtLayout name="zen">
      <SectionMain>
        <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4">
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

          <CardBox
            class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
            is-form
            @submit.prevent="submit"
          >
            <CardBoxComponentTitle title="Dripping Schedule" class="mb-12" />

            <BaseDivider />

            <input
              type="checkbox"
              name="certificate"
              id="certificate"
              v-model="isDrip"
              value="isDrip"
            />
            <label for="certificate" class="p-3 mb-3">Enable Dripping </label
            ><br />

            <template v-if="isDrip">
              <b><h4 class="mt-3 text-xl">Drip Type</h4></b><br />


            <b
              ><h4 class="mt-1">
                When Will The Course Content Be Released ?
              </h4></b
            ><br />

            <div>
              <template v-for="i in dripOptions">
                <input type="radio" v-model="dripSelected" :value="i.label" />
                {{ i.label }}
                <br />
                <p class="text-sm pl-6 mb-4">{{ i.information }}</p>
              </template>
            </div>

            <div
              v-if="dripSelected === 'On Specific Date'"
              class="bg-slate-200 p-4"
            >
              <PremFormField label="Begin releasing content on">
                <PremFormControl
                  class="max-w-xs"
                  type="Date"
                  v-model="specificDate"
                  
                />
              </PremFormField>
            </div>

            <BaseDivider />
            <template
              v-if="dripSelected !== 'On Specific Date'"
              v-for="i in lessonList"
            >
              <b
                ><h4>{{ i.label }}</h4></b
              >
              <div
                class="flex h-auto flex-wrap gap-2 max-md:grid-cols-2 items-center"
              >
                <p class="py-3">will be Released</p>

                <PremFormControl
                  class="w-24 inline"
                  type="number"
                  v-model="i.days"
                />

                <p class="py-3">Days after the selected date</p>
              </div>
              <BaseDivider />
            </template>

            <template
              v-if="dripSelected === 'On Specific Date'"
              v-for="i in lessonList"
              key="i"
            >
              <b
                ><h4>{{ i.label }}</h4></b
              >
              <div
                class="flex h-auto flex-wrap gap-2 max-md:grid-cols-2 items-center"
              >
                <p class="py-3">will be Released</p>
                <span>on</span>
                <PremFormControl
                  class="max-w-xs"
                  type="Date"
                  v-model="i.date"
                />
                <span v-if="specificDate && i.date">{{
                   Math.floor(( new Date(i.date).getTime() - new Date(specificDate).getTime()  ) / (1000 * 60 * 60 * 24))
                }}</span>
                <p class="py-3">
                  Days after the selected date 
                </p>
              </div>
              <BaseDivider />
            </template>
          </template>

            <template #footer>
              <BaseButtons>
                <BaseButton
                  type="submit"
                  to="/dashboard"
                  color="info"
                  label="SAVE"
                />
              </BaseButtons>
            </template>
          </CardBox>

          <CardBox
            class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
            is-form
            @submit.prevent="submit"
          >
            <div class="flex justify-between">
              <h1 class="text-3xl">Course Progress & completion</h1>
              <BaseButton
                type="submit"
                to="/dashboard"
                color="info"
                label="SAVE"
              />
            </div>
            <BaseDivider />

            <b>Course completion</b><br />

            <input type="checkbox" name="certificate" id="certificate" />
            <label for="certificate" class="px-3 mb-3"
              >Generate Certificate after Course Completion </label
            ><br />

            <p class="font-bold pt-8">Social Sharing</p>
            <br />
            <p class="mt-0">
              Social sharing Allows your students to share a link to the course
              landing page with their network. These settings can be changed for
              all courses at once in your
              <span class="text-blue-400 underline"
                >learning content setting</span
              >
            </p>

            <p class="py-3">
              Your course link will be added to the end of the social sharing
              text
            </p>

            <input type="checkbox" name="certificate" id="certificate" />
            <label for="certificate" class="px-3 py-3"
              >Social Sharing at chapter completion </label
            ><br />

            <p class="text-sm py-3 mb-3">
              Allow your students to share the course with their network at the
              completions of each chapter
            </p>

            <input type="checkbox" name="certificate" id="certificate" />
            <label for="certificate" class="px-3 mb-3"
              >Generate Certificate after Course Completion </label
            ><br />
            <p class="text-sm py-3 mb-3">
              Allow your students to share the course with their network when
              they reach 100% completions of your course
            </p>

            <div class="p-4">
              <PremFormField label="Social Sharing text">
                <PremFormControl class="" type="textarea" />
              </PremFormField>
            </div>
            <p class="text-sm pb-3 mb-3">
              Used as default content for Twitter. Can be copied and shared on
              facebook and linkedIn
            </p>
          </CardBox>
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
