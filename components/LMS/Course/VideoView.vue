<template>
  <div class="w-full h-full main_container dark:bg-slate-900">
    <!-- <embed :src="source.src"  class="pl-4 w-full h-full">   -->
    <div class="w-10/12 mx-auto pt-4">
      <video-player
        :src="source.src"
        controls
        :loop="false"
        :volume="0.6"
        class="w-full"
        height="450"
        :playbackRates="[0.25, 0.5, 0.75, 1, 1.5, 2]"
        responsive
        fullscreen
      />
    </div>
  </div>
</template>

<script setup>
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";

const props = defineProps({
  source: {
    type: Object,
    default: "",
    required: true,
  },
});

const plagIns = ref({});
</script>

<style scoped>
.main_container {
  padding-bottom: 10% !important;
}
</style>
