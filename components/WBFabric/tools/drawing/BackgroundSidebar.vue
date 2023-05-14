<template>
  <div
    id="sidebar-bg-settings"
    class="sidebar scroll-smooth scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-800 scrollbar-thumb-rounded"
  >
    <a class="closebtn hover:cursor-pointer" @click="closeBackgroundSettings"
      >&times;</a
    >
    <div class="p-2 space-y-3">
      <div class="pl-1 space-y-1">
        <p>Background</p>
        <!-- <label for="bg-color">Background</label>
        <br />
        <input type="color" :value="fabricStore.background" id="bg-color" /> -->
        <div
          @click="showColorPanel = !showColorPanel"
          class="rounded-full h-10 w-10 bg-white"
          :style="`background-color:${fabricStore.background}`"
        ></div>
        <Transition name="slide-fade">
          <div class="grid grid-rows-9" v-if="showColorPanel">
            <div class="flex" v-for="shade in fabricStore.alpha">
              <div
                v-for="color in fabricStore.vividColours"
                class="h-6 w-6 hover:scale-125 hover:cursor-pointer"
                :style="`background-color:${color + shade}`"
                @click="selectColor(color + shade)"
              ></div>
            </div>
          </div>
        </Transition>
      </div>
      <hr />
      <div>Grid</div>
      <div>
        <label for="line-width">Line Width </label>
        <input
          type="range"
          min="1"
          max="25"
          :value="fabricStore.grid.lineWidth"
          class="grid-slider-width"
          id="line-width"
          list="settings-grid-width"
        />
        <datalist id="settings-grid-width">
          <option>0</option>
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
          <option>25</option>
        </datalist>
      </div>
      <div>
        <label for="grid-spacing-vertical">Vertical Spacing </label>
        <input
          type="range"
          min="0"
          max="200"
          step="10"
          :value="fabricStore.grid.verticalSpacing"
          class="grid-slider-width"
          id="grid-spacing-vertical"
          list="settings-grid-v"
        />
        <datalist id="settings-grid-v">
          <option>0</option>
          <option>40</option>
          <option>80</option>
          <option>120</option>
          <option>160</option>
          <option>200</option>
        </datalist>
      </div>
      <div>
        <label for="grid-spacing-horizontal">Horizontal Spacing </label>
        <input
          type="range"
          min="0"
          max="200"
          step="10"
          :value="fabricStore.grid.horizontalSpacing"
          class="grid-slider-width"
          id="grid-spacing-horizontal"
          list="settings-grid-h"
        />
        <datalist id="settings-grid-h">
          <option>0</option>
          <option>40</option>
          <option>80</option>
          <option>120</option>
          <option>160</option>
          <option>200</option>
        </datalist>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWBFabric } from "@/stores/wbFabric";
import {
  changeBackgroundColor,
  closeBackgroundSettings,
  changeGridSettings,
} from "@/components/WBFabric/tools/drawing/toolSettings";

const fabricStore = useWBFabric();
const showColorPanel = ref(false);

onMounted(() => {
  // Background input button
  // const bgColor = document.getElementById("bg-color");

  // bgColor.onchange = function () {
  //   changeBackgroundColor(this.value);
  // };

  const gridSliders = document.getElementsByClassName("grid-slider-width");

  for (let i = 0; i < gridSliders.length; i++) {
    const s = gridSliders[i];
    s.onchange = function () {
      changeGridSettings(s.id, parseInt(this.value));
    };
  }
});

function selectColor(color) {
  changeBackgroundColor(color);
  showColorPanel.value = !showColorPanel.value;
}
</script>

<style scoped>
.sidebar a {
  padding: 8px 8px 8px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.grid-slider-width {
  width: 100%;
  height: 25px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
