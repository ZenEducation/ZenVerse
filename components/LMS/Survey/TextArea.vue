<template>
<textarea class="bg-grey-400 text-grey-500 w-full dark:bg-slate-900" rows="4"
@input="getInput"
v-model="inputValue"
></textarea>

</template>
<script setup>
const emit = defineEmits(['onAction'])
const inputValue=ref(null)
const getInput =()=>{
    emit('onAction') 
}

</script>
