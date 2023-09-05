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
import { useRouter, useRoute } from "vue-router";
import { API, graphqlOperation } from "aws-amplify";
const route = useRoute();
const attemptId = route.params.attemptId;
console.log(attemptId);

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

const test = ref({
  title: "JEE Main | FSTs | V01",
  sections: [
    {
      title: "Physics",
      questions: [
        {
          myAns: '',
          isCorrect: false,
          id: 1,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          isPartial: true,
          type: "NUM",
          answer: 20,
          range: { is: true, start: 10, end: 20 },
        },
        {
          myAns: 'my ans',
          isCorrect: false,
          id: 2,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "PARA",
          explanation: "this is explanation",
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
          isCorrect: true,

          myAns: 'onto',
          id: 3,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "FILLIN",
          explanation: "this is sample explanation",
          answer: "onto",
        },
        {
          myAns: '0',
          isCorrect: true,
          id: 4,
          answer: 'A',
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "MCQ",
          ismultipleChoice: false,
          isPartial: true,
          explanation: "this is sample explanation",
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
          myAns: '20',
          isCorrect: true,
          id: 5,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          isPartial: true,
          type: "NUM",
          answer: 20,
          range: { is: true, start: 10, end: 20 },
        },
        {
          myAns: 'this is my answer',
          isCorrect: false,
          id: 6,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "PARA",
          explanation: "this is explanation",
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
          myAns: 'this is answer',
          isCorrect: true,
          id: 7,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "FILLIN",
          explanation: "this is sample explanation",
          answer: "this is answer",
        },
        {
          myAns: [0, 1],
          isCorrect: true,
          id: 8,
          answer: "A,B",
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "MCQ",
          ismultipleChoice: true,
          isPartial: true,
          explanation: "this is sample explanation",
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
          myAns: '',
          isCorrect: false,
          id: 1,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          isPartial: true,
          type: "NUM",
          answer: 20,
          range: { is: true, start: 10, end: 20 },
        },
        {
          myAns: 'my ans',
          isCorrect: false,
          id: 2,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "PARA",
          explanation: "this is explanation",
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
          isCorrect: false,

          myAns: '',
          id: 3,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "FILLIN",
          explanation: "this is sample explanation",
          answer: "this is answer",
        },
        {
          myAns: '0',
          isCorrect: true,
          id: 4,
          answer: 'A',
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "MCQ",
          ismultipleChoice: false,
          isPartial: true,
          explanation: "this is sample explanation",
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
          myAns: '',
          isCorrect: false,
          id: 1,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          isPartial: true,
          type: "NUM",
          answer: 20,
          range: { is: true, start: 10, end: 20 },
        },
        {
          myAns: 'my ans',
          isCorrect: false,
          id: 2,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "PARA",
          explanation: "this is explanation",
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
          isCorrect: false,

          myAns: '',
          id: 3,
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "FILLIN",
          explanation: "this is sample explanation",
          answer: "this is answer",
        },
        {
          myAns: '0',
          isCorrect: true,
          id: 4,
          answer: 'A',
          instruction: "this is sample instruction",
          title: "Question Title",
          titleHTML: "Question Title",
          type: "MCQ",
          ismultipleChoice: false,
          isPartial: true,
          explanation: "this is sample explanation",
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
});

const selectedSection = ref(test.value.sections[0].title);
const sectionOptions = ref([])

const sectionIndex = computed(() => {
  return test.value.sections.findIndex((section) => { return (section.title == selectedSection.value) });
})

onMounted(async () => {
  console.log("onmount");
  let data = {};


  const myQuery = `
query MyQuery($id: ID!) {
  getAttempt(id: $id) {
    Exam {
      title
      Sections {
        items {
          id
          title
        }
      }
    }
    Responces {
      items {
        time
        sectionID
        responce
        Question {
          Group {
            title
            instruction
            difficuilty
          }
          answer
          criterias {
            percentage
            text
          }
          difficuilty
          explanation
          guidelineTime
          id
          ifCorrect
          ifWrong
          groupID
          instruction
          isNegative
          isPartial
          ismultipleChoice
          maxMarks
          options {
            html
            isCorrectAnswer
            text
          }
          range {
            end
            is
            start
          }
          title
          titleHTML
          topic
          type
          sectionID
        }
      }
    }
    marks
    status
    examID
    id
  }
}

`;

  let attempt = await API.graphql(
    graphqlOperation(myQuery, { id: attemptId })
  );


  attempt = attempt.data.getAttempt;
  console.log(attempt);
  if (attempt) {
    data.title = attempt?.Exam?.title;
    data.sections = attempt?.Exam?.Sections?.items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        questions: []

      }
    })
  }

  let sectionIdtoIndex = {}
  for (let i = 0; i < data.sections.length; ++i) {
    console.log('index', i, 'section', data.sections[i].id);
    sectionIdtoIndex[data.sections[i].id] = i;
  }

  let count = 1;

  await attempt.Responces.items.forEach((item) => {
    let responce = {
      ...item.Question,
      myAns: item.responce,
      time: item.time,
      isCorrect: false,
    }

    if (responce.type == "MCQ" && responce.ismultipleChoice) {
      let temp = [];
      for (let i = 0; i < responce.myAns.length; i++) {
        temp.push(responce.myAns[i]);
      }
      responce.myAns = temp;
    }

    if (responce.type == "MCQ" && !responce.ismultipleChoice) {
      let correct = "";
      for (let i = 0; i < responce?.options.length; i++) {
        if (responce?.options[i]?.isCorrectAnswer) {
          correct += (String.fromCharCode(65 + i));
        }
      }
      responce.answer = correct;
    }

    if (responce.myAns || responce.myAns === 0 || responce.myAns === "0") {

      if (responce.type == "MCQ" && responce.ismultipleChoice) {
        let correct = [];
        for (let i = 0; i < responce?.options.length; i++) {
          if (responce?.options[i]?.isCorrectAnswer) {
            correct.push(String.fromCharCode(65 + i));
          }
        }

        responce.answer = correct;
        console.log(responce?.myAns?.sort(), correct);
        if (responce?.myAns?.sort().join() == correct.join()) {
          responce.isCorrect = true;
          responce.correctCount = count++;
        }
      }

      else if (responce.type == "MCQ") {
        console.log(responce?.myAns?.charCodeAt(0) - 65);
        // console.log(responce?.options?.[responce?.myAns?.charCodeAt(0) - 65]?.isCorrectAnswer);
        if (responce?.options?.[responce?.myAns?.charCodeAt(0) - 65]?.isCorrectAnswer == true) {
          responce.isCorrect = true;
          responce.correctCount = count++;
        } else {
          // console.log("object");
        }
      }
      else if (responce.type == "NUM") {
        console.log(responce.myAns, responce.answer);
        if (responce?.range?.is) {
          if (responce.myAns >= responce.range.start && responce.myAns <= responce.range.end) {
            responce.isCorrect = true;
            responce.correctCount = count++;
          }
        } else if (responce.myAns == responce.answer) {
          responce.isCorrect = true;
          responce.correctCount = count++;
        }
      }
      else if (responce.type == "FILLIN") {
        if (responce.myAns.toLowerCase() == responce.answer.toLowerCase()) {
          responce.isCorrect = true;
          responce.correctCount = count++;
        }
      }

    }

    data.sections[sectionIdtoIndex[item.Question.sectionID]].questions.push(responce);
  })

  data.sections.forEach((sec) => {
    sec.questions.sort((a, b) => {
      const nameA = a?.groupID?.toUpperCase() || ""; // ignore upper and lowercase
      const nameB = b?.groupID?.toUpperCase() || ""; // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    })
  })

  console.log(sectionIdtoIndex);

  console.log(data);
  test.value = data;

  test.value.sections.forEach(element => {
    sectionOptions.value.push(element.title)
  });

  selectedSection.value = (test.value.sections[0].title);
})


const finalData = ref({
  title: "JEE Main | FSTs | V01",
  sections: [
    {
      title: "physics",
      questions: 20,
      isCorrect: 10,/// correct ans no
      isIncorrect: 13,
      totalMarks: 60,
      score: 32,// total sum of currect ans 
      time: 30,

    },
    {
      title: "chemistry",
      questions: 20,
      isCorrect: 10,
      marksCorrect: 32,
      isIncorrect: 13,
      totalMarks: 60,
      time: 30,
    },
    {
      title: "Mathematics",
      questions: 20,
      isCorrect: 10,
      marksCorrect: 32,
      isIncorrect: 13,
      totalMarks: 60,
      time: 30,
    },
  ],
  questions: {
    total: 0,
    correct: 0,
    incorrect: 0,
    skipped: 0,
    score: 0,
    timeTaken: 0,
  },
  time: {
    correct: 0,
    incorrect: 0,
    skipped: 0,
    easy: 0,
    moderate: 0,
    hard: 0,
  },
  marks: {
    correct: 0,
    incorrect: 0,
    negative: 0,
    skipped: 0,
    easy: 0,
    moderate: 0,
    hard: 0,
    max: 20,
  }
});

onMounted(async () => {
  console.log("onmount");
  let data = {

    questions: {
      total: 0,
      correct: 0,
      incorrect: 0,
      skipped: 0,
      score: 0,
      timeTaken: 0,
      EASY: 0,
      MODERATE: 0,
      HARD: 0,
    },
    time: {
      correct: 0,
      incorrect: 0,
      skipped: 0,
      EASY: 0,
      MODERATE: 0,
      HARD: 0,
    },
    marks: {
      correct: 0,
      incorrect: 0,
      negative: 0,
      skipped: 0,
      max: 0,
      EASY: 0,
      MODERATE: 0,
      HARD: 0,
    },
    topics: {

    }

  };


  const myQuery = `
query MyQuery($id: ID!) {
  getAttempt(id: $id) {
    Exam {
      title
      Sections {
        items {
          id
          title
        }
      }
      Attempts {
        items {
          marks
          sectionMarks {
            id
            marks
          }
        }
      }
    }
    Responces {
      items {
        time
        sectionID
        responce
        Question {
          Group {
            title
            instruction
            difficuilty
          }
          answer
          criterias {
            percentage
            text
          }
          difficuilty
          explanation
          guidelineTime
          id
          ifCorrect
          ifWrong
          groupID
          instruction
          isNegative
          isPartial
          ismultipleChoice
          maxMarks
          options {
            html
            isCorrectAnswer
            text
          }
          range {
            end
            is
            start
          }
          title
          titleHTML
          topic
          type
          sectionID
        }
      }
    }
    marks
    status
    examID
    id
    _version
    sectionMarks {
      id
      marks
    }
  }
}

`;

  let attempt = await API.graphql(
    graphqlOperation(myQuery, { id: attemptId })
  );


  attempt = attempt.data.getAttempt;
  console.log(attempt);
  if (attempt) {
    data.title = attempt?.Exam?.title;
    data.sections = attempt?.Exam?.Sections?.items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        questions: 0,
        isCorrect: 0,
        isIncorrect: 0,
        totalMarks: 0,
        time: 0,
        score: 0,
      }
    })
  }

  let sectionIdtoIndex = {}
  for (let i = 0; i < data.sections.length; ++i) {
    console.log('index', i, 'section', data.sections[i].id);
    sectionIdtoIndex[data.sections[i].id] = i;
  }

  let count = 1;

  await attempt.Responces.items.forEach((item) => {
    let responce = {
      ...item.Question,
      myAns: item.responce,
      time: item.time,
      isCorrect: false,
    }

    if (responce.type == "MCQ" && responce.ismultipleChoice) {
      let temp = [];
      for (let i = 0; i < responce.myAns.length; i++) {
        temp.push(responce.myAns[i]);
      }
      responce.myAns = temp;
    }

    if (responce.myAns || responce.myAns === 0 || responce.myAns === "0") {

      if (responce.type == "MCQ" && responce.ismultipleChoice) {
        let correct = [];
        for (let i = 0; i < responce?.options.length; i++) {
          if (responce?.options[i]?.isCorrectAnswer) {
            correct.push(String.fromCharCode(65 + i));
          }
        }

        console.log(responce?.myAns?.sort(), correct);
        if (responce?.myAns?.sort().join() == correct.join()) {
          responce.isCorrect = true;
          responce.correctCount = count++;
        }
      }

      else if (responce.type == "MCQ") {
        console.log(responce?.myAns?.charCodeAt(0) - 65);
        // console.log(responce?.options?.[responce?.myAns?.charCodeAt(0) - 65]?.isCorrectAnswer);
        if (responce?.options?.[responce?.myAns?.charCodeAt(0) - 65]?.isCorrectAnswer == true) {
          responce.isCorrect = true;
          responce.correctCount = count++;
        } else {
          // console.log("object");
        }
      }
      else if (responce.type == "NUM") {
        console.log(responce.myAns, responce.answer);
        if (responce?.range?.is) {
          if (responce.myAns >= responce.range.start && responce.myAns <= responce.range.end) {
            responce.isCorrect = true;
            responce.correctCount = count++;
          }
        } else if (responce.myAns == responce.answer) {
          responce.isCorrect = true;
          responce.correctCount = count++;
        }
      }
      else if (responce.type == "FILLIN") {
        if (responce.myAns.toLowerCase() == responce.answer.toLowerCase()) {
          responce.isCorrect = true;
          responce.correctCount = count++;
        }
      }

    }

    if (!(responce.topic in data.topics)) {
      data.topics[responce.topic] = 0;
    }

    if (responce.isCorrect) {
      // correct
      data.sections[sectionIdtoIndex[item.Question.sectionID]].questions++;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].isCorrect++;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].score += responce.ifCorrect;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].totalMarks += responce.ifCorrect;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].time += responce.time;
      // data.sections[sectionIdtoIndex[item.Question.sectionID]][responce.difficuilty]++;

      data.questions.correct++;
      data.questions.total++;
      data.questions.score += responce.ifCorrect;
      data.questions.timeTaken += responce.time;
      data.questions[responce.difficuilty]++;


      data.time.correct += responce.time;
      data.time[responce.difficuilty] += responce.time;

      data.marks.correct += responce.ifCorrect;
      data.marks.max += responce.ifCorrect;
      data.marks[responce.difficuilty] += responce.ifCorrect;

      data.topics[responce.topic] += responce.ifCorrect;

    } else if (responce.myAns.length || responce.myAns === 0 || responce.myAns === '0') {
      // incorrect
      data.sections[sectionIdtoIndex[item.Question.sectionID]].questions++;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].isIncorrect++;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].score += responce.ifWrong;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].totalMarks += responce.ifCorrect;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].time += responce.time;
      // data.sections[sectionIdtoIndex[item.Question.sectionID]][responce.difficuilty]++;

      data.questions.incorrect++;
      data.questions.total++;
      data.questions.score += responce.ifWrong;
      data.questions.timeTaken += responce.time;
      data.questions[responce.difficuilty]++;


      data.time.incorrect += responce.time;
      data.time[responce.difficuilty] += responce.time;

      data.marks.incorrect += responce.ifCorrect;
      data.marks.negative += responce.ifWrong
      data.marks.max += responce.ifCorrect;
      data.marks[responce.difficuilty] += responce.ifWrong;

      data.topics[responce.topic] += responce.ifWrong;


    }
    else {
      data.sections[sectionIdtoIndex[item.Question.sectionID]].questions++;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].totalMarks += responce.ifCorrect;
      data.sections[sectionIdtoIndex[item.Question.sectionID]].time += responce.time;
      // data.sections[sectionIdtoIndex[item.Question.sectionID]][responce.difficuilty]++;

      data.questions.skipped++;
      data.questions.total++;
      data.questions.timeTaken += responce.time;
      data.questions[responce.difficuilty]++;


      data.time.skipped += responce.time;
      data.time[responce.difficuilty] += responce.time;


      data.marks.max += responce.ifCorrect;
      data.marks.skipped += responce.ifCorrect;

    }

    // data.sections[sectionIdtoIndex[item.Question.sectionID]].questions.push(responce);
  })

  data.topicsList = [];
  data.topicsValues = [];
  for (let item in data.topics) {
    data.topicsList.push(item);
    data.topicsValues.push(data.topics[item])
  }

  console.log(sectionIdtoIndex);

  console.log(data);

  let updateInput = {
    id: attempt.id,
    _version: attempt._version,
    marks: data.questions.score,
    sectionMarks: [
    ]

  }

  data.sections.forEach((section) => {
    updateInput.sectionMarks.push({
      id: section.id,
      marks: section.score,
    })
  })

  console.log(updateInput);



  let allMarks = [];
  let sectionMarks = [];

  attempt?.Exam?.Attempts.items.forEach((item) => {
    allMarks.push(item.marks);
    item?.sectionMarks?.forEach((sect) => {
      if (sectionMarks[sectionIdtoIndex[sect.id]]) {
        sectionMarks[sectionIdtoIndex[sect.id]]?.push(sect.marks);
      } else {
        sectionMarks[sectionIdtoIndex[sect.id]] = [sect.marks];
      }
    })
  })




  console.log(allMarks, sectionMarks);
  data.sectionMarksList = [];
  data.sectionMaxMarksList = [];
  data.sectionAccuracyList = [];
  data.sectionTimeList = [];
  data.sectionNameList = [];
  for (let i = 0; i < data?.sections?.length; i++) {
    data.sectionMarksList.push(data.sections[i].score);
    data.sectionMaxMarksList.push(data.sections[i].totalMarks);
    data.sectionAccuracyList.push(Math.round((data.sections[i].isCorrect * 100) / (data.sections[i].isCorrect + data.sections[i].isIncorrect)) || 0);
    data.sectionTimeList.push(data.sections[i].time);
    data.sectionNameList.push(data.sections[i].title)
  }


  data.examID = attempt.examID;

  finalData.value = data;

  loaded.value = true;

})

</script>
<template>
  <div class="absolute top-0 left-0 w-full min-h-[48px] bg-white">
    <div class="border-b w-full flex justify-between items-center px-5 py-2">
      <NuxtLink :to="'/examportal/learner/examResult/' + attemptId">
        <div class="text-[13px] flex items-center justify-center cursor-pointer">
          <img class="w-[14px] h-[14px]"
            src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/cb_back.svg" alt="" />
          <p class="p-2.5">{{ finalData.title }} </p>
        </div>
      </NuxtLink>
      <div class="pr-16"></div>
    </div>
  </div>
  <div class="px-8 pb-4 pt-16 border-b-2 text-xl font-semibold ">
    <p>Question Report </p>
  </div>



  <CardBoxModal v-model="isAddDataActive" :showFooter="false" title="">
    <header class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded">
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Add New Group</h1>
      </div>
      <div class="text-gray-500 cursor-pointer" @click="isAddDataActive = false">
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>

    <CardBox class="" is-form @submit.prevent="submitProfile">
      <PremFormField label="Name">
        <PremFormControl v-model="NewFormData.title" />
      </PremFormField>
      <PremFormField label="Difficulty Level">
        <PremFormControl v-model="NewFormData.level" :options="['easy', 'moderate', 'hard']" />
      </PremFormField>

      <div class="flex justify-end py-2">
        <BaseButtons>
          <BaseButton color="info" label="Submit" @click="addNewFormData" />
        </BaseButtons>
      </div>
    </CardBox>
  </CardBoxModal>

  <CardBox class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3 pt-1" is-form @submit.prevent="submit">
    <div>
      <PremFormControl :options="sectionOptions" v-model="selectedSection" class="max-w-sm" />
    </div>
    <div class="grid grid-cols-6  max-sm:grid-cols-2 gap-3 text-center rounded-lg py-5 px-4  max-w-xl">
      <div>
        <p class="font-semibold text-xl">{{ finalData.sections[sectionIndex].questions }}</p>
        <p class="text-base">Questions</p>
      </div>
      <div>
        <p class="font-semibold text-xl">{{ finalData.sections[sectionIndex].isCorrect }}</p>
        <p class="text-base">Correct</p>
      </div>
      <div>
        <p class="font-semibold text-xl">{{ finalData.sections[sectionIndex].isIncorrect }}</p>
        <p class="text-base">Incorrect</p>
      </div>
      <div>
        <p class="font-semibold text-xl">{{ finalData.sections[sectionIndex].questions -
          finalData.sections[sectionIndex].isCorrect - finalData.sections[sectionIndex].isIncorrect }}</p>
        <p class="text-base">Skipped</p>
      </div>
      <div>
        <p class="font-semibold text-xl">{{ finalData.sections[sectionIndex].score }}</p>
        <p class="text-base">Score</p>
      </div>
      <div>
        <p class="font-semibold text-xl">{{ `${Math.floor(finalData.sections[sectionIndex].time / 60)}m
                  ${finalData.sections[sectionIndex].time % 60}s` }}</p>
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
          <th>Max Marks</th>
          <th>Time taken</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in test.sections[sectionIndex].questions" :key="index"
          class="cursor-pointer text-base font-light">
          <th data-label="#" class="cursor-pointer text-base font-light">
            {{ index + 1 }}
          </th>
          <th data-label="Question" class="cursor-pointer text-base font-semibold">
            <p class="p-1 border-1 bg-slate-300 w-min rounded-md">{{ item.type }}</p>
            <div v-html="item.titleHTML">
            </div>
            <template v-if="item.type == 'MCQ'">
              <div v-for="(opt, index) in item.options" class="max-w-md my-2 p-1">
                <span class="ml-2" v-html="String.fromCharCode(65 + index) + '. ' + opt.html">
                </span>
              </div>
            </template>
          </th>
          <th data-label="Your Answer" class="cursor-pointer text-base font-light">
            {{ item.myAns }}
          </th>
          <th data-label="Correct answer" class="cursor-pointer text-base font-light">
            {{ item.answer }}
          </th>
          <th data-label="Marks" class="cursor-pointer text-base font-light">
            {{ (item.isCorrect && item.ifCorrect) || (item.type == "PARA" && 0) || (item.myAns && item.ifWrong) || 0 }}
          </th>
          <th data-label="Time taken" class="cursor-pointer text-base font-light">
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
