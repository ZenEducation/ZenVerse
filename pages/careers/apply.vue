<template>
  <NuxtLayout name="zen">
    <ApplyNewJob/>
  </NuxtLayout>
</template>

<script>
  import ApplyNewJob from '~~/components/Careers/ApplyNewJob.vue';
  export default{
    name:'apply',
    components:{
      ApplyNewJob
    }

  }
  
</script>

<style scoped></style>
