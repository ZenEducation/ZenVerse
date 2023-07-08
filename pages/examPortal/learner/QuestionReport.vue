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
      <div class="pr-16"></div>
    </div>
  </div>
  <div class="px-8 pb-4 pt-16 border-b-2 text-xl font-semibold ">
    <p>Question Report </p>
  </div>



  <CardBoxModal v-model="isAddDataActive" :showFooter="false" title="">
    <header
      class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
    >
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Add New Group</h1>
      </div>
      <div
        class="text-gray-500 cursor-pointer"
        @click="isAddDataActive = false"
      >
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>

    <CardBox class="" is-form @submit.prevent="submitProfile">
      <PremFormField label="Name">
        <PremFormControl v-model="NewFormData.title" />
      </PremFormField>
      <PremFormField label="Difficulty Level">
        <PremFormControl
          v-model="NewFormData.level"
          :options="['easy', 'moderate', 'hard']"
        />
      </PremFormField>

      <div class="flex justify-end py-2">
        <BaseButtons>
          <BaseButton color="info" label="Submit" @click="addNewFormData" />
        </BaseButtons>
      </div>
    </CardBox>
  </CardBoxModal>

  <CardBox
    class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3 pt-1"
    is-form
    @submit.prevent="submit"
  >
  <div>
    <PremFormControl :options="sectionOptions" v-model="selectedSection" class="max-w-sm" />
  </div>
  <div class="grid grid-cols-6  max-sm:grid-cols-2 gap-3 text-center rounded-lg py-5 px-4  max-w-xl">
    <div>
        <p class="font-semibold text-xl">90</p>
        <p class=" text-base">Questions</p>
    </div>
    <div>
        <p class="font-semibold text-xl">0</p>
        <p class="text-base">Correct</p>
    </div>
    <div>
        <p class="font-semibold text-xl">0</p>
        <p class="text-base">Incorrect</p>
    </div>
    <div>
        <p class="font-semibold text-xl">90</p>
        <p class="text-base">Skipped</p>
    </div>
    <div>
        <p class="font-semibold text-xl">0</p>
        <p class="text-base">Score</p>
    </div>
    <div>
        <p class="font-semibold text-xl">2m10s</p>
        <p class="text-base">Time Taken</p>
    </div>
    
</div>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Question</th>
          <th>Your Answer</th>
          <th>Correct answer</th>
          <th>Marks</th>
          <th>Time taken</th>
        </tr>
      </thead>
      <tbody>
          <tr
            v-for="(item , index) in test.sections[sectionIndex].questions"
            :key="index"
            class="cursor-pointer text-base font-light"
          >
            <th data-label="#" class="cursor-pointer text-base font-light">
              {{ index + 1 }}
            </th>
            <th
              data-label="Question"
              class="cursor-pointer text-base font-semibold"
            >
              <p class="p-1 border-1 bg-slate-300 w-min rounded-md">{{item.type}}</p>
              <div v-html="item.titleHtml">
              </div>
              <template v-if="item.type == 'MCQ'">
                <div
                  v-for="(opt, index) in item.options"
                  class="max-w-md my-2 p-1"
                >
                  <span
                    class="ml-2"
                    v-html="String.fromCharCode(65 + index) + '. ' + opt.html"
                  >
                  </span>
                </div>
              </template>
            </th>
            <th
              data-label="Your Answer"
              class="cursor-pointer text-base font-light"
            >
              {{ item.myAns  }}
            </th>
            <th
              data-label="Correct answer"
              class="cursor-pointer text-base font-light"
            >
              {{ item.answer }}
            </th>
            <th
            data-label="Marks"
            class="cursor-pointer text-base font-light"
          >
            0
          </th>
          <th
          data-label="Time taken"
          class="cursor-pointer text-base font-light"
        >
          2m17s
        </th>
          </tr>
        </tbody>
    </table>
  </CardBox>
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
