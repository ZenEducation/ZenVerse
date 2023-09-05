<template>
    <div class="w-full h-screen pb-14">
        <div class="w-5/6 py-6 mx-auto" v-html="Instruction"></div>
        <div class="absolute bottom-0 h-14 w-full flex items-center justify-center">
            <BaseButton label="Start Test" @click="start" color="info" class="mx-auto"/>
        </div>
    </div>
</template>

<script setup>
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { API } from "aws-amplify";
const Instruction = ref('<p>Loading .... </p>')
var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
import { useRouter, useRoute } from "vue-router";
import { getAttempt, getExam } from "~~/src/graphql/queries";
const route = useRoute();
const attemptId = route.params.attemptId;


onMounted( async () => {
    try {
        
        const response = await API.graphql({
            query:getAttempt,
            variables:{ id:attemptId }
        })
        console.log(response.data.getAttempt);
        const response2 = await API.graphql({
            query:getExam,
            variables:{id : response.data.getAttempt.examID}
        })
        Instruction.value = response2.data.getExam.instructions;
    } catch (error) {
        console.error(error)
    }

})


const start = ()=>{
    window.close();
    var newWindow = window.open('/examportal/learner/exam/' + attemptId , '_blank', 'width=' + width + ',height=' + height + ',fullscreen=yes');
}
</script>

<style scoped>
h1 {
    font-size: 2em;
    font-weight: bold;
}

h2 {
    font-size: 1.5em;
    font-weight: bold;
}

h3 {
    font-size: 1.2em;
    font-weight: bold;
}

h4 {
    font-size: 1em;
    font-weight: bold;
}

h5 {
    font-size: 0.9em;
    font-weight: bold;
}

h6 {
    font-size: 0.8em;
    font-weight: bold;
}

/* Styles for paragraphs */
p {
    font-size: 1em;
    line-height: 1.4;
}

/* Styles for strong text */
strong {
    font-weight: bold;
}
</style>