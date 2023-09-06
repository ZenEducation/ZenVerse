<template>
  <CardBoxModal v-model="isModalSubmitActive" v-if="!isLoading" title="Submit Quiz" button="danger" buttonLabel="Yes"
    has-cancel @confirm="submitTest">
    <p class="font-normal text-center text-sm">Before You Submit the Test , please make sure you have attended all the
      questions</p>
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
  <CardBoxModal v-model="isModalSureSubmitActive" v-if="!isLoading" title="Submit Quiz" button="danger" buttonLabel="Yes"
    @confirm="submitTest">
    <p class="font-normal text-center text-sm">Before You Submit the Test , please make sure you have attended all the
      questions</p>
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
  <div v-if="!isLoading" class="w-full h-screen flex">
    <!-- main section -->
    <div class="w-3/4 border-r-2 relative" :class="{ 'w-full': !isMainSidebarOpen }">
      <div class="absolute z-30 bg-gray-100 w-full">
        <div class="border-b-2 h-10 flex justify-between items-center">
          <div class="flex items-center">

            <BaseIcon :path="mdiCloseCircleOutline" class="cursor-pointer" />
            <p class="border-l px-3 py-2">{{ test.title }}</p>
          </div>
          <div class="flex items-center gap-4">
            <ExamPortalStopwatch
              :key="deadType == 'QUESTION' && stopCountQuestion || deadType == 'SECTION' && stopCountSection"
              :initial="response[current.sectionIndex][current.questionIndex].time"
              :max="(deadType == 'QUESTION' && isDefaultQuestionTime && defaultQuestionTime) || (deadType == 'QUESTION' && (!isDefaultQuestionTime) && currentQuestion.guidelineTime) || (deadType == 'QUESTION' && 180 ) || (deadType == 'SECTION' && test?.Sections?.items?.[current.sectionIndex]?.sectionDeadline * 60 ) || (deadType == 'SECTION' && 60 * 60) || (deadType == 'OVERALL' && overallDeadline) || Infinity"
              @activate-next="handleStopWatchNext" />
            
            <BaseIcon :path="mdiFullscreen" @click="startExam" class="cursor-pointer" />
          </div>
        </div>
        <div class="border-b h-14 flex gap-2">
          <div v-for="(item, index) in test.Sections.items" @click="changeSection(index)"
            class="border rounded-md p-2 m-2 cursor-pointer text-sm uppercase flex justify-center items-center"
            :class="{ 'bg-blue-300': current.sectionIndex == index }">
            {{ item.title }}
          </div>
        </div>
      </div>

      <div class="py-28 px-3 overflow-y-scroll h-screen scrollbar-thin">
        <div class="absolute z-40 right-0 top-[50%] h-12 w-6 bg-gray-400 flex items-center cursor-pointer"
          @click="toggleSidebar">
          <BaseIcon :path="mdiChevronRight" v-if="isMainSidebarOpen" />
          <BaseIcon :path="mdiChevronLeft" v-if="!isMainSidebarOpen" />
        </div>

        <div v-if="currentQuestion?.groupID">
          Group : {{ currentQuestion?.Group?.title }}
        </div>
        <div v-if="currentQuestion?.groupID" v-html="'Instructions : ' + currentQuestion?.Group?.instruction">

        </div>
        <div v-else v-html="'Instructions : ' + currentQuestion?.instruction"></div>
        <p class="">
          {{
            "Q." +
            (current.questionIndex + 1) +
            " of " +
            test.Sections.items[current.sectionIndex].Questions.items.length
          }}
        </p>


        <div class="font-bold mb-6" v-html="currentQuestion?.titleHTML"></div>
        <template v-if="currentQuestion?.type == 'MCQ'">
          <div v-for="(opt, index) in currentQuestion?.options" class="border max-w-md my-2 p-2 flex items-center">
            <input v-if="currentQuestion?.ismultipleChoice" type="checkbox" name="same name" id=""
              :value="String.fromCharCode(65 + index)"
              v-model="response[current.sectionIndex][current.questionIndex].responce" />
            <input v-else type="radio" name="" id="" :value="String.fromCharCode(65 + index)"
              v-model="response[current.sectionIndex][current.questionIndex].responce" />
            <span class="ml-2 flex flex-wrap">
              <p>
                {{ String.fromCharCode(65 + index) + '. ' }}
              </p>
              <p v-html="opt.html">

              </p>
            </span>
          </div>
        </template>
        <template v-if="currentQuestion?.type == 'NUM'">
          <div>
            <PremFormField label="Your Answer" class="max-w-sm">
              <PremFormControl type="number" placeholder="0.00"
                v-model="response[current.sectionIndex][current.questionIndex].responce" />
            </PremFormField>
          </div>
        </template>
        <template v-if="currentQuestion?.type == 'FILLIN'">
          <div>
            <PremFormField label="Your Answer" class="max-w-sm">
              <PremFormControl type="text" placeholder="write your answer here ......"
                v-model="response[current.sectionIndex][current.questionIndex].responce" />
            </PremFormField>
          </div>
        </template>
        <template v-if="currentQuestion?.type == 'PARA'">
          <div>
            <PremFormField label="Your Answer" class="max-w-md">
              <PremFormControl type="textarea" placeholder="write your answer here ......"
                v-model="response[current.sectionIndex][current.questionIndex].responce" />
            </PremFormField>
          </div>
        </template>
      </div>

      <div class="absolute bottom-0 z-30 bg-gray-100 w-full flex justify-between px-4 py-2 items-center">
        <div class="flex gap-4">
          <BaseButton small :icon="mdiStarOutline" label="Mark For Review"
            @click="MarkedForReview[current.sectionIndex][current.questionIndex] = !MarkedForReview[current.sectionIndex][current.questionIndex]" />
          <BaseButton small :icon="mdiTrashCan" label="Clear" @click="clearResp()" />
        </div>
        <div class="flex gap-2 items-center">
          <BaseIcon class="cursor-pointer" @click="changeQuestion('-1', -1)" :path="mdiChevronLeft"
            v-if="current.questionIndex > 0" />
          <p>
            {{
              current.questionIndex +
              1 +
              " of " +
              test.Sections.items[current.sectionIndex].Questions.items.length
            }}
          </p>
          <BaseIcon @click="changeQuestion('+1', -1)" class="cursor-pointer" :path="mdiChevronRight" v-if="current.questionIndex + 1 <
              test.Sections.items[current.sectionIndex].Questions.items.length
              " />
        </div>
        <div class="flex gap-4">
          <BaseButton @click="changeQuestion('+1', -1, true)" small :icon="mdiArrowRight" v-if="current.questionIndex + 1 <
            test.Sections.items[current.sectionIndex].Questions.items.length
            " label="Next" color="info" />
          <BaseButton @click="changeSection(current.sectionIndex + 1, true)" small :icon="mdiArrowRight"
            v-else-if="current.sectionIndex + 1 < test.Sections.items.length" label="Next Section" color="info" />
        </div>
      </div>
    </div>
    <div class="w-1/4 relative" :class="{ ' hidden': !isMainSidebarOpen }">
      <div class="absolute  z-30 bg-gray-100  w-full h-14 px-2 border-b-2 flex items-center justify-start">
        <p class="text-sm">Medical And Engineering</p>
      </div>
      <div class="h-screen pt-16 pb-28 p-3 overflow-y-scroll scrollbar-none flex-col flex justify-between">
        <div class="grid grid-cols-5 max-md:grid-cols-3 max-lg:grid-cols-4 gap-4 ">

          <p v-for="(item, index) in test.Sections.items[current.sectionIndex].Questions.items"
            class="h-12 w-12 flex justify-center items-center rounded-[50%] cursor-pointer relative"
            @click="changeQuestion(false, index)" :class="findstyle(current.sectionIndex, index).at(0)">
          <div v-if="findstyle(current.sectionIndex, index).at(1)"
            class="p-1.5 rounded-[50%] bg-violet-400 absolute bottom-0 right-0">

          </div>
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
              <div class="p-0.5 rounded-[50%] bg-violet-400 absolute bottom-0 right-0"></div>
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
          <BaseButton label="End Test" @click='isModalSubmitActive = true' color="info" />
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
import { useRouter, useRoute } from "vue-router";
import { getAttempt, getExam } from "~~/src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { updateAttempt } from "~~/src/graphql/mutations";
import { createResponce } from "~~/src/graphql/mutations";
const route = useRoute();
const attemptId = route.params.attemptId;

const isMainSidebarOpen = ref(true);
const isModalSubmitActive = ref(false);
const isModalSureSubmitActive = ref(false);

const isLoading = ref(true);


const toggleSidebar = () => {
  isMainSidebarOpen.value = !isMainSidebarOpen.value;
}

const findstyle = (section, question) => {
  if (
    (response.value[section][question].responce ||
      response.value[section][question].responce === 0) &&
    !(typeof (response.value[section][question].responce) === 'object' && response.value[section][question].responce.length == 0) &&
    MarkedForReview.value[section][question]
  ) {
    return ["bg-green-400", true];
  }
  if (
    (response.value[section][question].responce ||
      response.value[section][question].responce === 0) &&
    !(typeof (response.value[section][question].responce) === 'object' && response.value[section][question].responce.length == 0)
  ) {
    return ["bg-green-400", false];
  }
  if (MarkedForReview.value[section][question]) {
    return ["bg-violet-400", false];
  }
  if (viewed.value[section][question]) {
    return ["bg-red-200", false];
  }
  return ["bg-slate-400", false];
};

const test = ref();

onMounted(async () => {

  const attempt = await API.graphql({
    query: getAttempt,
    variables: { id: attemptId },
  });

  console.log(attempt.data.getAttempt.Exam);

  const myQuery = `
  query MyQuery($id: ID!) {
    getExam(id: $id) {
      title
      Sections(filter: {_deleted: {ne: true}}) {
        items {
          examID
          id
          title
          description
          sectionDeadline
          Questions(filter: {_deleted: {ne: true}}) {
            items {
              groupID
              Group{
                title
                id
                instruction
              }
              id
              _version
              _deleted
              _lastChangedAt
              title
              titleHTML
              type
              answer
              range {
                is
                start
                end
              }
              isPartial
              isNegative
              maxMarks
              ifCorrect
              ifWrong
              options {
                text
                html
                isCorrectAnswer
              }
              ismultipleChoice
              criterias {
                text
              percentage
              }
              explanation
              instruction
              topic
              difficuilty
              sectionID
              groupID
              order
              guidelineTime
            }
          }
          _version
        }
      }
      instructions
      id
      examMockTestId
      description
      _version
      overallDeadline
      isDefaultQuestionTime
      defaultQuestionTime
      deadlineType
    }
  }
`;

  const exam = await API.graphql(graphqlOperation(myQuery, { id: attempt.data.getAttempt.examID }));
  // console.log("response : " , response);


  // console.log(test.value, exam.data.getExam);
  test.value = exam.data.getExam;

  console.log(test.value);

  test.value.Sections.items = test.value.Sections.items.filter((item) => item.Questions.items.length > 0)

  await test.value.Sections.items.forEach((element, i) => {
    response.value.push([]);
    MarkedForReview.value.push([]);
    viewed.value.push([]);
    element.Questions.items.forEach((que, j) => {
      response.value[i][j] = {
        questionID: que.id,
        time: 0,
        responce: "",
        attemptID: attemptId,
        sectionID: element.id,
      }
      if (que?.ismultipleChoice) {
        response.value[i][j].responce = []
      }
    });

    isLoading.value = false;
    changeSection(0, true);

  });

  lastQuestionTime.value = new Date();

  deadType.value = test.value.deadlineType || "NONE";
  overallDeadline.value = test.value.overallDeadline *60 || (180 * 60);
  isDefaultQuestionTime.value = test.value.isDefaultQuestionTime || true;
  defaultQuestionTime.value = test.value.defaultQuestionTime || 180;
})

// for max
const deadType = ref('NONE');
const overallDeadline = ref(180 * 60);
const isDefaultQuestionTime = ref(true);
const defaultQuestionTime = ref(180);



const response = ref([]);
const MarkedForReview = ref([]);
const viewed = ref([]);


const current = ref({
  sectionIndex: 0,
  questionIndex: 0,
});
const currentQuestion = computed(() => {
  console.log("current", current.value);
  return test.value?.Sections.items?.[current.value.sectionIndex]?.Questions.items?.[
    current.value.questionIndex
  ];
});



const lastQuestionTime = ref();

const stopCountQuestion = ref(0)
const stopCountSection = ref(0)


const changeQuestion = (temp, toIndex, permission = false) => {

  console.log("change question", deadType.value, permission);
  if (deadType.value == 'QUESTION' && !permission) {

    return;
  }
  const now = new Date(); // Get the current time when the question changes

  if (lastQuestionTime.value) {
    // Calculate the time spent on the current question in seconds
    const timeSpent = Math.floor((now - lastQuestionTime.value) / 1000); // Convert milliseconds to seconds
    response.value[current.value.sectionIndex][current.value.questionIndex].time += timeSpent;
    lastQuestionTime.value = now;
  }

  if (temp == "+1") {
    current.value.questionIndex = current.value.questionIndex + 1;
  } else if (temp == "-1") {
    current.value.questionIndex = current.value.questionIndex - 1;
  } else {
    current.value.questionIndex = toIndex;
  }
  viewed.value[current.value.sectionIndex][current.value.questionIndex] = true;
  stopCountQuestion.value++;
  return;
};

const changeSection = (toSection, permission = false) => {


  if (toSection >= test.value.Sections.items.length) {
    return;
  }

  if (deadType.value == 'QUESTION' && !permission) {

    return;
  }
  if (deadType.value == 'SECTION' && !permission) {

    return;
  }
  changeQuestion(false, 0, permission);
  stopCountSection.value++;
  current.value.sectionIndex = toSection;
};

const clearResp = () => {
  if (typeof (response.value[current.value.sectionIndex][current.value.questionIndex].responce) === 'object') {
    response.value[current.value.sectionIndex][current.value.questionIndex].responce = [];
  } else {
    response.value[current.value.sectionIndex][current.value.questionIndex].responce = "";
  }
};

let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const submitTest = async () => {
  try {
    const now = new Date(); // Get the current time when the question changes

    if (lastQuestionTime.value) {
      // Calculate the time spent on the current question in seconds
      let timeSpent = Math.floor((now - lastQuestionTime.value) / 1000); // Convert milliseconds to seconds
      response.value[current.value.sectionIndex][current.value.questionIndex].time += timeSpent;
    }

    let finalResponse = response.value;

    for (let section of finalResponse) {
      section.forEach((question) => {
        console.log(question.responce);
        if (typeof (question.responce) === 'object') {
          let str = "";
          question.responce.forEach((alpha) => {
            str += alpha;
          })
          question.responce = str.toUpperCase();
        }
      })
    }

    finalResponse = finalResponse.flatMap(item => item)


    // Execute the batch mutation


    for (let item of finalResponse) {
      let temp = await API.graphql({
        query: createResponce,
        variables: { input: item }
      })
      console.log(temp.data.createResponce);
    }

    await API.graphql({
      query: updateAttempt,
      variables: { input: { id: attemptId, status: 'DONE' } }
    })


    // console.log(finalResponse);
    window.alert("successfully submitted data ");
    isModalSubmitActive.value = false;
    let newWindow = window.open('/examportal/learner/examResult/' + attemptId);
    window.close();
  } catch (error) {
    console.error(error);
  }



  // isModalSubmitActive.value = false;
  // window.close();
  // let newWindow = window.open('/examportal/learner/examResult');
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

const submitData = () => {
  let total = 0;
  let answered = 0;
  let skipped = 0;
  let review = 0;
  let Questions = [];
  console.log(response.value);

  for (let i = 0; i < test.value.Sections.items.length; i++) {
    total = total + test.value.Sections.items.at(i).Questions.items.length;
    Questions.push(test.value.Sections.items.at(i).Questions.items.length);
  }
  let count = 0;
  for (let i = 0; i < Questions.length; i++) {
    for (let j = 0; j < Questions.at(i); j++) {
      count++;

      if ((response.value[i][j].responce || response.value[i][j].responce === 0) && !(typeof (response.value[i][j].responce) === 'object' && response.value[i][j].responce.length == 0)) {
        answered++;
      } else {
        skipped++;
      }
      if (MarkedForReview.value[i][j]) {
        review++;
      }
    }
  }

  return { total, answered, skipped, review }


}

// deadline mgmt

const handleStopWatchNext = async () => {
  console.log("stopwatch alert");
  if (deadType.value == "NONE") {

  } else if (deadType.value == "OVERALL") {
    isModalSureSubmitActive.value = true;
  }
  else if (deadType.value == "SECTION") {
    if (current.value.sectionIndex + 1 >= test.value.Sections.items.length) {
      isModalSureSubmitActive.value = true;
      // return;
    } else {
      changeSection(current.value.sectionIndex + 1, true);
    }
  } else if (deadType.value == "QUESTION" && current.value.questionIndex + 1 <
    test.value.Sections.items[current.value.sectionIndex].Questions.items.length) {
    changeQuestion('+1', -1, true);
  }
  else if (deadType.value == "QUESTION" && current.value.questionIndex + 1 >=
    test.value.Sections.items[current.value.sectionIndex].Questions.items.length) {
    if (current.value.sectionIndex + 1 >= test.value.Sections.items.length) {
      isModalSureSubmitActive.value = true;
      return;
    }
    else {

      changeSection(current.value.sectionIndex + 1, true);
    }
  }
}

</script>

<style lang="scss" scoped></style>
