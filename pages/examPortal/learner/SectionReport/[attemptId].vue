<script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { mdiPlus, mdiTrashCan, mdiWindowClose } from "@mdi/js";
import CardBoxModal from "~~/components/Cards/CardBoxModal.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import VerticalBarChart from "~~/components/Charts/VerticalBarChart.vue";
import HorizontalBarChart from "~~/components/Charts/HorizontalBarChart.vue";


const list = ref([
  {
    id: 0,
    title: "Group 1",
    level: "easy",
    questions: 20,
  },
  {
    id: 1,
    title: "Group 2",
    level: "hard",
    questions: 34,
  },
]);
const isAddDataActive = ref(false);
const NewFormData = ref({
  title: "",
  level: "",
  questions: 0,
});
const addNewFormData = () => {
  list.value.push(NewFormData.value);
  isAddDataActive.value = false;
};

const test = {
  title: "JEE Main | FSTs | V01",
  sections: [
    {
      title: "Physics",
      questions: [
        {
          myAns:'Skipped',
          id: 1,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          partialMarking: true,
          type: "NUM",
          answer: 20,
          range: { is: true, start: 10, end: 20 },
        },
        {
          myAns:'my ans',
          id: 2,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "PARA",
          Explanation: "this is explanation",
          criterias: [
            {
              id: 1,
              text: "",
              percent: 20,
            },
            {
              id: 2,
              text: "",
              percent: 20,
            },
            {
              id: 3,
              text: "",
              percent: 20,
            },
            {
              id: 4,
              text: "",
              percent: 20,
            },
          ],
        },
        {
          myAns:'Skipped',
          id: 3,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "FILLIN",
          Explanation: "this is sample Explanation",
          answer: "this is answer",
        },
        {
          myAns:'A',
          id: 4,
          answer: "this is answer",
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "MCQ",
          multipleChoice: false,
          partialMarking: true,
          Explanation: "this is sample Explanation",
          options: [
            {
              id: 1,
              text: "Option Title",
              html: "Option Title",
              isCorrectAnswer: true,
            },
            {
              id: 2,
              text: "Option Title",
              html: "Option Title",
              isCorrectAnswer: false,
            },
            {
              id: 3,
              text: "Option Title",
              html: "Option Title",
              isCorrectAnswer: false,
            },
            {
              id: 4,
              text: "Option Title",
              html: "Option Title",
              isCorrectAnswer: false,
            },
          ],
        },
        {
          myAns:'Skipped',
          id: 5,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          partialMarking: true,
          type: "NUM",
          answer: 20,
          range: { is: true, start: 10, end: 20 },
        },
        {
          myAns:'Skipped',
          id: 6,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "PARA",
          Explanation: "this is explanation",
          criterias: [
            {
              id: 1,
              text: "",
              percent: 20,
            },
            {
              id: 2,
              text: "",
              percent: 20,
            },
            {
              id: 3,
              text: "",
              percent: 20,
            },
            {
              id: 4,
              text: "",
              percent: 20,
            },
          ],
        },
        {
          myAns:'Skipped',
          id: 7,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "FILLIN",
          Explanation: "this is sample Explanation",
          answer: "this is answer",
        },
        {
          myAns:'A,B',
          id: 8,
          answer: "this is answer",
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "MCQ",
          multipleChoice: true,
          partialMarking: true,
          Explanation: "this is sample Explanation",
          options: [
            {
              id: 1,
              text: "Option Title",
              html: "Option Title",
              isCorrectAnswer: true,
            },
            {
              id: 2,
              text: "Option Title",
              html: "Option Title",
              isCorrectAnswer: false,
            },
            {
              id: 3,
              text: "Option Title",
              html: "Option Title",
              isCorrectAnswer: false,
            },
            {
              id: 4,
              text: "Option Title",
              html: "Option Title",
              isCorrectAnswer: false,
            },
          ],
        },
      ],
    },
    {
      title: "Chemistry",
      questions: [
        {
          myAns:'Skipped',
          id: 1,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          partialMarking: true,
          type: "NUM",
          answer: 20,
          range: { is: true, start: 10, end: 20 },
        },
        {
          myAns:'Skipped',
          id: 2,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "PARA",
          Explanation: "this is explanation",
          criterias: [
            {
              id: 1,
              text: "",
              percent: 20,
            },
            {
              id: 2,
              text: "",
              percent: 20,
            },
            {
              id: 3,
              text: "",
              percent: 20,
            },
            {
              id: 4,
              text: "",
              percent: 20,
            },
          ],
        },
        {
          myAns:'Skipped',
          id: 3,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "FILLIN",
          Explanation: "this is sample Explanation",
          answer: "this is answer",
        },
        {
          myAns:'Skipped',
          id: 4,
          answer: "this is answer",
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "MCQ",
          multipleChoice: true,
          partialMarking: true,
          Explanation: "this is sample Explanation",
          options: [
            {
              id: 1,
              text: "Option Title",
              html: "Option Title",
              isCorrectAnswer: true,
            },
            {
              id: 2,
              text: "Option Title",
              html: "Option Title",
              isCorrectAnswer: false,
            },
            {
              id: 3,
              text: "Option Title",
              html: "Option Title",
              isCorrectAnswer: false,
            },
            {
              id: 4,
              text: "Option Title",
              html: "Option Title",
              isCorrectAnswer: false,
            },
          ],
        },
      ],
    },
    {
      title: "Maths",
      questions: [
        {
          myAns:'Skipped',
          id: 1,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          partialMarking: true,
          type: "NUM",
          answer: 20,
          range: { is: true, start: 10, end: 20 },
        },
        {
          myAns:'Skipped',
          id: 2,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "PARA",
          Explanation: "this is explanation",
          criterias: [
            {
              id: 1,
              text: "",
              percent: 20,
            },
            {
              id: 2,
              text: "",
              percent: 20,
            },
            {
              id: 3,
              text: "",
              percent: 20,
            },
            {
              id: 4,
              text: "",
              percent: 20,
            },
          ],
        },
        {
          myAns:'Skipped',
          id: 3,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "FILLIN",
          Explanation: "this is sample Explanation",
          answer: "this is answer",
        },
        {
          myAns:'Skipped',
          id: 4,
          answer: "this is answer",
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "MCQ",
          multipleChoice: true,
          partialMarking: true,
          Explanation: "this is sample Explanation",
          options: [
            {
              id: 1,
              text: "Option Title",
              html: "Option Title",
              isCorrectAnswer: true,
            },
            {
              id: 2,
              text: "Option Title",
              html: "Option Title",
              isCorrectAnswer: false,
            },
            {
              id: 3,
              text: "Option Title",
              html: "Option Title",
              isCorrectAnswer: false,
            },
            {
              id: 4,
              text: "Option Title",
              html: "Option Title",
              isCorrectAnswer: false,
            },
          ],
        },
      ],
    },
  ],
};

const selectedSection = ref(test.sections[0].title);
const sectionOptions = []
test.sections.forEach(element => {
  sectionOptions.push(element.title)
});
const sectionIndex = computed(()=>{
  return test.sections.findIndex((section)=>{return (section.title == selectedSection.value)});
})


</script>
<template>
  <div class="absolute top-0 left-0 w-full min-h-[48px] bg-white">
    <div class="border-b w-full flex justify-between items-center px-5 py-2">
      <NuxtLink to="/examportal/learner/examResult">
        <div
          class="text-[13px] flex items-center justify-center cursor-pointer"
        >
          <img
            class="w-[14px] h-[14px]"
            src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/cb_back.svg"
            alt=""
          />
          <p class="p-2.5">JEE Main | FSTs </p>
        </div>
      </NuxtLink>
      <div class="pr-14"></div>
    </div>
  </div>
  <div class="pt-20 h-screen overflow-y-scroll scrollbar-none px-8 pb-10">
    <div class="flex justify-between items-center p-8">
      <p class="text-2xl font-semibold">Section Report</p>
      <NuxtLink to="/examportal/learner/examSolution">
        <BaseButton label="View Solution" color="info" />
      </NuxtLink>

    </div>
    <div class="flex justify-between items-center p-8">
      <div class="flex gap-2">
        <span>Total Sections <b>2 </b> </span> <li>Total Score <b>5.0</b></li>accuracy <b>40.0%</b> <li> </li>
      </div>
      <BaseButton label="Compare with Topper" />
    </div>
    <p class="font-bold">Score Vs Sections</p>
    <div class="w-2/3 mx-auto">

      <VerticalBarChart :labels='["section1", "section2"]' x_label="section" y_label="score" :datasets='[
        {
          label:"total Score",
                            data: [55 , 34 ],
                            backgroundColor: "rgba(68, 119, 170, 0.75)",
                            barPercentage: 0.4, // Set the bar width as a percentage of available space
                            categoryPercentage: 0.5 // Set the width of each category as a percentage of the total axis width
                      
                          },
                          {
                            label:"my Score",
                            data: [32 , 17 ],
                            backgroundColor: "green",
                            barPercentage: 0.4, // Set the bar width as a percentage of available space
                            categoryPercentage: 0.5 // Set the width of each category as a percentage of the total axis width
                      
                          }
                        ]'   />
                      </div>

    <p class="font-bold">Accuracy Vs Sections</p>
    <div class="w-2/3 mx-auto">

      <VerticalBarChart :labels='["section1", "section2"]' x_label="section" y_label="accuracy" :datasets='[
        {
                            data: [55 , 34 ],
                            backgroundColor: "green",
                            barPercentage: 0.4, // Set the bar width as a percentage of available space
                            categoryPercentage: 0.5 // Set the width of each category as a percentage of the total axis width
                      
                          }
                        ]'   />
                      </div>
                      <p class="font-bold">Time Vs Sections</p>
    <div class="w-2/3 mx-auto">

      <VerticalBarChart :labels='["section1", "section2"]' x_label="section" y_label="Time (Minutes)" :datasets='[
        {
                            data: [5.5 , 3 ],
                            backgroundColor: "green",
                            barPercentage: 0.4, // Set the bar width as a percentage of available space
                            categoryPercentage: 0.5 // Set the width of each category as a percentage of the total axis width
                      
                          }
                        ]'   />
    </div>




  </div>




</template>

<style>
thead {
  display: table-header-group;
}
tr {
  display: table-row;
}
td {
  display: table-cell;
}
tbody {
  display: table-row-group;
}
</style>
