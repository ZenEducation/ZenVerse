<template>
  <div id="main">
    <!-- <DragToolbar v-if="fabricStore.drawingMode" /> -->
    <canvas class="canvas-board" id="canvas-fabric" ref="fabricJS"></canvas>
    <div id="panels-container" class="flex flex-col gap-5">
      <div v-if="fabricStore.showMousePanel">
        <HistoryPanel />
      </div>
    </div>
  </div>
</template>

<script setup>
import { fabric } from "fabric";
import applySettings from "./utils/customSettings";
// import DragToolbar from "./tools/drawing/DragToolbar.vue";
import { useWBFabric } from "@/stores/wbFabric";
import HistoryPanel from "./panel/HistoryPanel";

const fabricJS = ref(null);
const fabricStore = useWBFabric();

onMounted(() => {
  fabricStore.canvas = new fabric.Canvas(fabricJS.value.id);

  // To apply custom settings on canvas
  applySettings(fabricStore.canvas);
});
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

#main {
  margin: 0;
  padding: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.canvas-board{
  width: 100vw;
  height: 100vh;
}

</style>
