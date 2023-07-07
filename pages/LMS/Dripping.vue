<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";

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
const chapterList = ref([
  {
    chapterId: 1,
    title: "Chapter 1",
    lessonList: [
      { id: 1, label: "Demo", date: "", days: 6 },
      { id: 2, label: "Video lesson", date: "", days: 8 },
    ],
  },
  {
    chapterId: 2,
    title: "Chapter 2",
    lessonList: [
      { id: 3, label: "Audio lesson", date: "", days: 9 },
      { id: 4, label: "PDF lesson", date: "", days: 12 },
    ],
  },
]);

const props = defineProps({
  driptype: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div>
        <div class="grid grid-cols-1 xl:grid-cols-1 lg:ml-6"> 
          <CardBox v-if="driptype=='Drip type'"
            class="mb-6 lg:mb-0 lg:col-span-1 xl:col-span-3"
            is-form
            @submit.prevent="submit"
          >
            <div class="flex justify-between">
                <h1 class="text-3xl">Dripping Schedule</h1>
                <BaseButton
                  type="submit"
                  to="/dashboard"
                  color="info"
                  label="SAVE"
                />
              </div>
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

            </template>

          </CardBox>
          
          <div v-for="chapter in chapterList">
          <template v-if="chapter.title === props.driptype">
          <CardBox
          class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
          is-form
          @submit.prevent="submit"
          v-if="isDrip"
        >
          <CardBoxComponentTitle :title="chapter.title" class="mb-12" />


            <BaseDivider />
            <template
              v-if="dripSelected !== 'On Specific Date'"
              v-for="i in chapter.lessonList"
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
              v-for="i in chapter.lessonList"
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

                <input type="date"  v-model="i.date" :min="specificDate">
                <span v-if="specificDate && i.date">{{
                  Math.floor(
                    (new Date(i.date).getTime() -
                      new Date(specificDate).getTime()) /
                      (1000 * 60 * 60 * 24)
                  )
                }}</span>
                <p class="py-3">Days after the selected date</p>
              </div>
              <BaseDivider />
            </template>
        </CardBox>
        </template>
        </div>
        </div>
  </div>
</template>
