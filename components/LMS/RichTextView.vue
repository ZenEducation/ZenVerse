<template>
    <div class="w-full  main_container dark:bg-slate-900">
      <!-- <embed :src="source.src"  class="pl-4 w-full h-full">   -->
      <div class="w-full mx-auto p-4 " v-html="source.lessonContent">
   
      </div>
    </div>
  </template>
  
  <script setup>

  
  const props = defineProps({
    source: {
      type: String,
      default: "",
      required: true,
    },
  });
  

  </script>
  
  <style scoped>
  .main_container {
    padding-bottom: 10% !important;
  }
  </style>
  