<template>
  <div class="w-full min-h-full dark:bg-slate-900 pb-10 main_container">
    <div class="text_section px-5 w-8/12 mx-auto pt-10">
      <div class="native_Text" v-html="source.lessonContent"></div>

      <div class="download_section">
        <div
          class= "flex justify-between bg-slate-100 items-center border my-3 px-5 py-6 dark:bg-slate-800"
          v-for="(item, idx) in source.files"
          :key="idx"
        >
          <div class="">
            <div class="">
              {{ item.name }}
            </div>
            <div class="">{{ item.size }}</div>
          </div>
          <div class="">
            <BaseButton
          label="Download"
          type="button"
          color="info"
          class="uppercase "
          :style="[]"
         @click="downloadFile(item.location)"
        
        />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "@/components/Buttons/BaseButton.vue";
const props = defineProps({
  source: {
    type: Object,
    default: "",
    required: true,
  },
});
const downloadFile =(url)=>{
  // window.location.href = url;
  window.open(url,"_blank");
}
</script>

<style scoped>
.main_container {
  padding-bottom: 10% !important;
}


</style>
