<template>
  <div class="w-full dark:bg-slate-900 pb-10 main_container" >
    <div class="audio_section py-10 px-5 text-center">
      <audio controls class="mx-auto w-8/12 "  controlsList="nodownload" >
        <source :src="source.src" type="audio/ogg" />
        <source :src="source.src" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
    <div class="text_section  px-5 w-8/12 mx-auto">
     <div class="native_Text" v-html="source.lessonContent"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  source: {
    type: Object,
    default: "",
    required: true,
  },
});
</script>

<style scoped>
.main_container{
    padding-bottom: 10% !important;
}
</style>
