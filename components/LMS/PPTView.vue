<template>
    <div class="w-full  main_container dark:bg-slate-900">
      <!-- <embed :src="source.src"  class="pl-4 w-full h-full">   -->
      
        <!-- <embed :src="source.src"  class=" w-full h-full">   -->
            <iframe src='https://view.officeapps.live.com/op/embed.aspx?src=https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx'  class="ppt_container" frameborder='0'></iframe>
   
   
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
    height: 100%;
    padding-bottom: 2rem;
  }
  .ppt_container{
    height: 100%;
    width: 100%;
  }
  </style>
  