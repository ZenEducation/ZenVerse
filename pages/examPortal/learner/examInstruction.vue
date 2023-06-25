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
const Instruction = '<p>this is instruction</p>'
const start = ()=>{
    window.close();
    window.open('/examportal/learner/exam')
    

}
</script>

<style lang="scss" scoped>

</style>