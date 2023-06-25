<template>
  <CardBoxModal
    v-model="isModalSubmitActive"
    title="Submit Quiz"
    button="danger"
    buttonLabel="Yes"
    has-cancel
    @confirm="submitTest"
  >
  <p class="font-normal text-center text-sm">Before You Submit the Test , please make sure you have attended all the questions</p>
  <div class="w-5/6 mx-auto">
    <div class="flex items-center justify-between border-b">
      <p class="font-semibold">Total Question</p>
      <p class="font-semibold">
        {{ submitData().total }}
      </p>

    </div>
    <div class="flex items-center justify-between">
      <p class="font-semibold">Answered</p>
      <p class="font-semibold">{{ submitData().answered }}</p>

    </div>
    <div class="flex items-center justify-between">
      <p class="font-semibold">Skipped/Unattempted</p>
      <p class="font-semibold">{{ submitData().skipped }}</p>

    </div>
    <div class="flex items-center justify-between">
      <p class="font-semibold">Mark For Review</p>
      <p class="font-semibold">{{ submitData().review }}</p>

    </div>

  </div>
</CardBoxModal>
  <div class="w-full h-screen flex">
    <!-- main section -->
    <div class="w-3/4 border-r-2 relative" :class="{'w-full':!isMainSidebarOpen}">
      <div class="absolute z-30 bg-gray-100 w-full">
        <div class="border-b-2 h-10 flex justify-between items-center">
          <div class="flex items-center">

            <BaseIcon :path="mdiCloseCircleOutline" class="cursor-pointer"/>
            <p class="border-l px-3 py-2">{{ test.title }}</p>
          </div>
          <div class="">
            <BaseIcon :path="mdiFullscreen"  @click="startExam"  class="cursor-pointer"  />
          </div>
        </div>
        <div class="border-b h-14 flex gap-2">
          <div
            v-for="(item, index) in test.sections"
            @click="changeSection(index)"
            class="border rounded-md p-2 m-2 cursor-pointer text-sm uppercase flex justify-center items-center"
            :class="{ 'bg-blue-300': current.sectionIndex == index }"
          >
            {{ item.title }}
          </div>
        </div>
      </div>

      <div class="py-28 px-3 overflow-y-scroll h-screen scrollbar-thin">
        <div class="absolute z-40 right-0 top-[50%] h-12 w-6 bg-gray-400 flex items-center cursor-pointer" @click="toggleSidebar"  >
          <BaseIcon :path="mdiChevronRight" v-if="isMainSidebarOpen" />
          <BaseIcon :path="mdiChevronLeft" v-if="!isMainSidebarOpen" />
        </div>
        <p class="">
          {{
            "Q." +
            (current.questionIndex + 1) +
            " of " +
            test.sections[current.sectionIndex].questions.length
          }}
        </p>
        <div v-html="'Instructions : ' + currentQuestion.instruction"></div>

        <div class="font-bold mb-6" v-html="currentQuestion.titleHtml"></div>
        <template v-if="currentQuestion.type == 'MCQ'">
          <div
            v-for="(opt, index) in currentQuestion.options"
            class="border max-w-md my-2 p-2"
          >
            <input
              type="radio"
              name=""
              id=""
              :value="index"
              v-model="response[current.sectionIndex][current.questionIndex]"
            />
            <span
              class="ml-2"
              v-html="String.fromCharCode(65 + index) + '. ' + opt.html"
            >
            </span>
          </div>
        </template>
        <template v-if="currentQuestion.type == 'NUM'">
          <div>
            <PremFormField label="Your Answer" class="max-w-sm">
              <PremFormControl
                type="number"
                placeholder="12.34"
                v-model="response[current.sectionIndex][current.questionIndex]"
              />
            </PremFormField>
          </div>
        </template>
        <template v-if="currentQuestion.type == 'FILLIN'">
          <div>
            <PremFormField label="Your Answer" class="max-w-sm">
              <PremFormControl
                type="text"
                placeholder="write your answer here ......"
                v-model="response[current.sectionIndex][current.questionIndex]"
              />
            </PremFormField>
          </div>
        </template>
        <template v-if="currentQuestion.type == 'PARA'">
          <div>
            <PremFormField label="Your Answer" class="max-w-md">
              <PremFormControl
                type="textarea"
                placeholder="write your answer here ......"
                v-model="response[current.sectionIndex][current.questionIndex]"
              />
            </PremFormField>
          </div>
        </template>
      </div>

      <div
        class="absolute bottom-0 z-30 bg-gray-100 w-full flex justify-between px-4 py-2 items-center"
      >
        <div class="flex gap-4">
          <BaseButton small :icon="mdiStarOutline" label="Mark For Review"  @click="MarkedForReview[current.sectionIndex][current.questionIndex] = !MarkedForReview[current.sectionIndex][current.questionIndex]" />
          <BaseButton small :icon="mdiTrashCan" label="Clear" @click="clearResp()" />
        </div>
        <div class="flex gap-2 items-center">
          <BaseIcon
          class="cursor-pointer"
            @click="changeQuestion('-1', -1)"
            :path="mdiChevronLeft"
            v-if="current.questionIndex > 0"
          />
          <p>
            {{
              current.questionIndex +
              1 +
              " of " +
              test.sections[current.sectionIndex].questions.length
            }}
          </p>
          <BaseIcon
            @click="changeQuestion('+1', -1)"
            class="cursor-pointer"
            :path="mdiChevronRight"
            v-if="
              current.questionIndex + 1 <
              test.sections[current.sectionIndex].questions.length
            "
          />
        </div>
        <div class="flex gap-4">
          <BaseButton
            @click="changeQuestion('+1', -1)"
            small
            :icon="mdiArrowRight"
            v-if="
              current.questionIndex + 1 <
              test.sections[current.sectionIndex].questions.length
            "
            label="Next"
            color="info"
          />
          <BaseButton
            @click="changeSection(current.sectionIndex + 1, -1)"
            small
            :icon="mdiArrowRight"
            v-else-if="current.sectionIndex + 1 < test.sections.length"
            label="Next Section"
            color="info"
          />
        </div>
      </div>
    </div>
    <div class="w-1/4 relative" :class="{' hidden':!isMainSidebarOpen}">
      <div class="absolute  z-30 bg-gray-100  w-full h-14 px-2 border-b-2 flex items-center justify-start">
        <p class="text-sm">Medical And Engineering</p>
      </div>
      <div class="h-screen pt-16 pb-28 p-3 overflow-y-scroll scrollbar-none flex-col flex justify-between">
        <div class="grid grid-cols-5 max-md:grid-cols-3 max-lg:grid-cols-4 gap-4 ">

          <p
            v-for="(item, index) in test.sections[current.sectionIndex].questions"
            class="h-12 w-12 flex justify-center items-center rounded-[50%] cursor-pointer relative"
            @click="changeQuestion(false, index)"
            :class="findstyle(current.sectionIndex, index).at(0)"
          >
          <div v-if="findstyle(current.sectionIndex, index).at(1)" class="p-1.5 rounded-[50%] bg-violet-400 absolute bottom-0 right-0" ></div>
            {{ index + 1 }}
          </p>
        </div>

        <div class="flex flex-wrap p-3 ">
          <div class="flex items-center gap-2 relative mx-2">
            <div class="h-3 w-3 rounded-[50%] bg-green-400"></div>
            <span>Answered</span>
          </div>
          <div class="flex items-center gap-2 relative mx-2">
            <div class="h-3 w-3 rounded-[50%] bg-red-300"></div>
            <span>Not Answered</span>
          </div>
          <div class="flex items-center gap-2 relative mx-2">
            <div class="h-3 w-3 rounded-[50%] bg-violet-400"></div>
            <span>Marked For Review</span>
          </div>
          <div class="flex items-center gap-2 relative mx-2">
            <div class="h-3 w-3 rounded-[50%] bg-slate-400"></div>
            <span>Not Viewed</span>
          </div>
          <div class="flex items-center gap-2 relative mx-2">
            <div class="h-3 w-3 rounded-[50%] bg-green-400 relative">
              <div class="p-0.5 rounded-[50%] bg-violet-400 absolute bottom-0 right-0" ></div>
            </div>
            <span>Answered and marked for review</span>
          </div>
        </div>
      </div>
      <div class="absolute  z-30 bg-gray-100  w-full bottom-0 h-28 py-2 ">
        <div class="flex flex-wrap justify-evenly">
          <BaseButton small label="All Questions" />
          <BaseButton small label="Instruction" />
        </div>
        <div class="flex justify-center py-2">
          <BaseButton label="End Test" @click='isModalSubmitActive=true' color="info" />
        </div>
      </div>
    </div>
    </div>
</template>

<script setup>
import BaseButton from "~~/components/Buttons/BaseButton.vue";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import CardBoxModal from "~~/components/Cards/CardBoxModal.vue";
import PremFormControl from "~~/components/Forms/PremFormControl.vue";
import PremFormField from "~~/components/Forms/PremFormField.vue";
import {
  mdiTrashCan,
  mdiStarOutline,
  mdiChevronLeft,
  mdiChevronRight,
  mdiArrowLeft,
  mdiCloseBoxOutline,
  mdiCloseCircleOutline,
  mdiArrowRight,
mdiFullscreen,
} from "@mdi/js";

const isMainSidebarOpen = ref(true);
const isModalSubmitActive = ref(false);



const toggleSidebar = ()=>{
  isMainSidebarOpen.value = !isMainSidebarOpen.value;
}

const findstyle = (section, question) => {
  if (
    (response.value[section][question]  ||
      response.value[section][question] === 0 ) &&
    MarkedForReview.value[section][question]
  ) {
    return ["bg-green-400",true];
  }
  if (
    response.value[section][question] ||
    response.value[section][question] === 0
  ) {
    return ["bg-green-400",false];
  }
  if (MarkedForReview.value[section][question]) {
    return ["bg-violet-400",false];
  }
  if (viewed.value[section][question]) {
    return ["bg-red-200",false];
  }
  return ["bg-slate-400",false];
};

const test = {
  title: "JEE Main | FSTs | V01",
  sections: [
    {
      title: "Physics",
      questions: [
        {
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
          id: 3,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "FILLIN",
          Explanation: "this is sample Explanation",
          answer: "this is answer",
        },
        {
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
        {
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
          id: 7,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "FILLIN",
          Explanation: "this is sample Explanation",
          answer: "this is answer",
        },
        {
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
          id: 3,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "FILLIN",
          Explanation: "this is sample Explanation",
          answer: "this is answer",
        },
        {
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
          id: 3,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHtml: "Question Title",
          type: "FILLIN",
          Explanation: "this is sample Explanation",
          answer: "this is answer",
        },
        {
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
const response = ref([]);
const MarkedForReview = ref([]);
const viewed = ref([]);

test.sections.forEach((element) => {
  response.value.push([]);
  MarkedForReview.value.push([]);
  viewed.value.push([]);
});

const current = ref({
  sectionIndex: 0,
  questionIndex: 0,
});
const currentQuestion = computed(() => {
  return test?.sections?.[current.value.sectionIndex]?.questions?.[
    current.value.questionIndex
  ];
});

const changeQuestion = (temp, toIndex) => {
  if (temp == "+1") {
    current.value.questionIndex = current.value.questionIndex + 1;
  } else if (temp == "-1") {
    current.value.questionIndex = current.value.questionIndex - 1;
  } else {
    current.value.questionIndex = toIndex;
  }
  viewed.value[current.value.sectionIndex][current.value.questionIndex] = true;
  return;
};

const changeSection = (toSection) => {
  current.value.sectionIndex = toSection;
  changeQuestion(false, 0);
};

const clearResp = () => {
  response.value[current.value.sectionIndex][current.value.questionIndex] =
    null;
};

const submitTest = () => {
  isModalSubmitActive.value = false;
  window.close();
  window.open('/examportal/learner/examResult')
};


const startExam = () => {
  // Request full screen
  const element = document.documentElement
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) { // Firefox
    element.mozRequestFullScreen()
  } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
    element.webkitRequestFullscreen()
  } else if (element.msRequestFullscreen) { // IE/Edge
    element.msRequestFullscreen()
  }
  // Exit full screen when exam is completed
  document.addEventListener('fullscreenchange', handleFullScreenChange)

}
const handleFullScreenChange = () => {
  if (!document.fullscreenElement) {
    // The student exited fullscreen, do something (e.g., display a warning message)
    console.log('Please complete the exam before exiting fullscreen.')
    // You can also re-request fullscreen if needed
  }
}
changeSection(0);

const submitData = ()=>{
  let total = 0 ;
  let answered = 0 ;
  let skipped = 0;
  let review = 0;
  let questions = [];

  for( let i = 0 ; i < test.sections.length ; i++){
    total = total + test.sections.at(i).questions.length;
    questions.push(test.sections.at(i).questions.length);
  }
  let count = 0 ;
  for(let i = 0 ; i < questions.length ; i++){
    for(let j = 0 ; j < questions.at(i) ; j++){
      count++;
      if(response.value[i][j] || response.value[i][j] === 0){
        answered++;
      }else{
        skipped++ ;
      }
      if(MarkedForReview.value[i][j]){
        review ++ ;
      }
    }
  }

  return{total , answered , skipped , review }


}
</script>

<style lang="scss" scoped></style>
