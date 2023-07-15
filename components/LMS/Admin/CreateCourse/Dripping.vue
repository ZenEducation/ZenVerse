<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import { createCourse } from "~~/stores/createCourse";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import {
  mdiChevronUp,
  mdiAccountMultipleOutline

} from "@mdi/js";
const courseStore = createCourse();
let allChapters = courseStore.allChapters;
let filterItems= courseStore.allChapters;
const tab= ref("dripTpe")

const currentTab=(item)=>{
     
  tab.value=item 
  console.log(item)
  // allChapters.value.filter((data)=>data.name==item)
  filterItems = allChapters.filter((data)=>data.name==item)
}


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

const dripTypeItem = ref("first")

const getDripType=(item)=>{
  dripTypeItem.value=item
}
const saveData=()=>{

  // other codes

  // go first
  getDripType("first")
}






</script>

<template>
{{ tab }}
  <div class="grid grid-cols-6 gap-1 mb-6 xl:grid-cols-6" v-if="dripTypeItem=='schedule'">
    <CardBox class="lg:col-span-2 xl:col-span-2 overflow-y-auto" >
      <div class="opacity-70 cursor-pointer mb-3"    :class="[{active_calss:tab=='dripTpe'}]"
     
      @click="currentTab('dripTpe')"
      >
        Drip Type
      </div>
      <div class="opacity-70 cursor-pointer mb-3"    
      v-for="(data,idx) in allChapters"
      :key="idx"
      @click="currentTab(data.name)"
      :class="[{active_calss:tab==data.name}]"
      >
        {{ data.name }}
      </div>
    </CardBox>
        <div class=" lg:mb-0 lg:col-span-4 xl:col-span-4"> 
          <CardBox 
            class="mb-6 lg:mb-0 lg:col-span-1 xl:col-span-3"
            is-form
            v-if="tab=='dripTpe'"
          >
            <div class="flex justify-between">
                <h1 class="text-3xl">Dripping Schedule</h1>
                <BaseButton
                  type="submit"
             
                  color="info"
                  label="SAVE"
                  @click="saveData"
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
                <template v-for="(i,idx) in dripOptions" :key="idx">
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
          
          <div v-for="(chapter,idx) in filterItems" :key="idx"  class="" 
          
          
          
          >
          <!-- <template v-if="chapter.title === props.driptype"> -->

       
          <CardBox
          class=" lg:mb-0 lg:col-span-2 xl:col-span-3"
          is-form
          @submit.prevent="submit"
          v-if="isDrip"
        >
     
        <div class="flex justify-between aligns-center">
          <div class="my-auto text-3xl ">
            Drip Lesson Schedule
          </div>
          <div class="">
            <BaseButton
                  type="submit"
             
                  color="info"
                  label="SAVE CHAPTERS"
               
                />
          </div>

        </div>

          <CardBoxComponentTitle :title="chapter.name" class="mb-12 mt-5 text-xl" />


            <BaseDivider />
            <!-- <div class="" v-if="dripSelected !== 'On Specific Date'"> -->

            <div class="" >
            <template
              
              v-for="(i,idx) in chapter.lessons"
             :key="idx"
              >
              <b
                ><h4>{{ i.name }}</h4></b
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
          </div>
          <!-- <div class=""   v-if="dripSelected === 'On Specific Date'"> -->

          <div class=""   >
            <template
            
              v-for="(i,idx) in chapter.lessons"
              :key="idx"
            >
              <b
                ><h4>{{ i.name }}</h4></b
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
          </div>
        </CardBox>
     
        </div>
        </div>
  </div>

  <div class="w-full h-screen  flex aligns-center justify-center" v-if="dripTypeItem=='first'">
    <div class="text-center my-auto">
      <BaseIcon :path="mdiAccountMultipleOutline" :size="60" w="60" h="60" class="text-gray-400" />
      <div class="w-6/12 mx-auto">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, distinctio soluta nobis, animi dolores 
      </div>
      <BaseButton
                  type="submit"
                  class="mt-5"
                  color="info"
                  label="CREATE SCHEDULE"
                  @click="getDripType('schedule')"
                />

    </div>
  </div>
</template>

<style scoped>
.active_calss{
  opacity: 1;
}
</style>
