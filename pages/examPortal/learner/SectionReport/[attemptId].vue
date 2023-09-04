<script setup>
import BaseButton from "@/components/Buttons/BaseButton.vue";
import VerticalBarChart from "~~/components/Charts/VerticalBarChart.vue";
import { API,graphqlOperation } from "aws-amplify";
import { useRoute } from "vue-router";

const loaded = ref(false)
const route = useRoute();
const attemptId = route.params.attemptId;
console.log(attemptId);

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

    } else if (responce.myAns || responce.myAns == 0) {
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

  data.SectionValues = {
    names:[],
    scores: [],
    maxMarks: [],
    accuracy: [],
    time:[],
  }
  for (let item of data.sections) {
    data.SectionValues.names.push(item.title);
    data.SectionValues.scores.push(item.score)
  }

  console.log(sectionIdtoIndex);

  console.log(data);
  finalData.value = data;
  loaded.value = true;

})



</script>
<template>
  <div class="absolute top-0 left-0 w-full min-h-[48px] bg-white">
    <div class="border-b w-full flex justify-between items-center px-5 py-2">
      <NuxtLink :to="'/examportal/learner/examResult/'+attemptId">
        <div class="text-[13px] flex items-center justify-center cursor-pointer">
          <img class="w-[14px] h-[14px]"
            src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/cb_back.svg" alt="" />
          <p class="p-2.5">JEE Main | FSTs </p>
        </div>
      </NuxtLink>
      <div class="pr-14"></div>
    </div>
  </div>
  <div v-if="loaded" class="pt-20 h-screen overflow-y-scroll scrollbar-none px-8 pb-10">
    <div class="flex justify-between items-center p-8">
      <p class="text-2xl font-semibold">Section Report</p>
      <NuxtLink :to="'/examportal/learner/examSolution/'+attemptId">
        <BaseButton label="View Solution" color="info" />
      </NuxtLink>

    </div>
    <div class="flex justify-between items-center p-8">
      <div class="flex gap-2">
        <span>Total Sections <b>{{finalData.sections.length}} </b> </span>
        <li>Total Score <b>{{ finalData.marks.correct + finalData.marks.negative }}</b></li>accuracy <b>{{ `${Math.round((finalData.questions.correct * 100) / (finalData.questions.correct +
          finalData.questions.incorrect))} %` }}</b>
        <li> </li>
      </div>
      <BaseButton label="Compare with Topper" />
    </div>
    <p class="font-bold">Score Vs Sections</p>
    <div class="w-2/3 mx-auto">

      <VerticalBarChart :labels='["section1", "section2"]' x_label="section" y_label="score" :datasets='[
        {
          label: "total Score",
          data: [55, 34],
          backgroundColor: "rgba(68, 119, 170, 0.75)",
          barPercentage: 0.4, // Set the bar width as a percentage of available space
          categoryPercentage: 0.5 // Set the width of each category as a percentage of the total axis width

        },
        {
          label: "my Score",
          data: [32, 17],
          backgroundColor: "green",
          barPercentage: 0.4, // Set the bar width as a percentage of available space
          categoryPercentage: 0.5 // Set the width of each category as a percentage of the total axis width

        }
      ]' />
    </div>

    <p class="font-bold">Accuracy Vs Sections</p>
    <div class="w-2/3 mx-auto">

      <VerticalBarChart :labels='["section1", "section2"]' x_label="section" y_label="accuracy" :datasets='[
        {
          data: [55, 34],
          backgroundColor: "green",
          barPercentage: 0.4, // Set the bar width as a percentage of available space
          categoryPercentage: 0.5 // Set the width of each category as a percentage of the total axis width

        }
      ]' />
    </div>
    <p class="font-bold">Time Vs Sections</p>
    <div class="w-2/3 mx-auto">

      <VerticalBarChart :labels='["section1", "section2"]' x_label="section" y_label="Time (Minutes)" :datasets='[
        {
          data: [5.5, 3],
          backgroundColor: "green",
          barPercentage: 0.4, // Set the bar width as a percentage of available space
          categoryPercentage: 0.5 // Set the width of each category as a percentage of the total axis width

        }
      ]' />
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
