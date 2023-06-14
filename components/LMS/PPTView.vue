<template>
    <div class="w-full  main_container dark:bg-slate-900">
      <!-- <embed :src="source.src"  class="pl-4 w-full h-full">   -->
      
        <!-- <embed :src="source.src"  class=" w-full h-full">   -->
            <iframe src='https://view.officeapps.live.com/op/embed.aspx?src=https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx' width='100%' height='480px' frameborder='0'></iframe>
   
   
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
  