<template>
  <div
    id="sidebar-tool-settings"
    class="sidebar scroll-smooth scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-800 scrollbar-thumb-rounded"
  >
    <a class="closebtn hover:cursor-pointer" @click="closeToolSettings"
      >&times;</a
    >
    <div class="flex">
      <button
        id="defaultOpen"
        class="tablink"
        @click="(e) => openToolPage('pencil', e.target, '#b7b7b7')"
      >
        Pencil
      </button>
      <button
        class="tablink"
        @click="(e) => openToolPage('highlighter', e.target, '#b7b7b7')"
      >
        Highlighter
      </button>
    </div>

    <div id="pencil" class="tabcontent space-y-8">
      <div>
        <p>Pen Color</p>
        <br />
        <div class="w-[14rem] grid grid-cols-4 gap-4">
          <div
            v-for="color in fabricStore.vividColours"
            class="h-10 w-10 rounded-full hover:scale-125 hover:cursor-pointer"
            :style="`background-color:${color}`"
            @click="changePencilColor(color)"
          ></div>
          <div
            class="flex justify-center items-center rounded-full h-10 w-10 hover:scale-125 hover:cursor-pointer"
            @click="showPencilColorPanel = !showPencilColorPanel"
          >
            <SvgIcon type="mdi" :path="mdiPlus" size="36" />
          </div>
        </div>
        <br />
        <Transition name="slide-fade">
          <div class="grid grid-rows-9" v-if="showPencilColorPanel">
            <div class="flex" v-for="shade in fabricStore.alpha">
              <div
                v-for="color in fabricStore.vividColours"
                class="h-6 w-6 hover:scale-125 hover:cursor-pointer"
                :style="`background-color:${color + shade}`"
                @click="selectColor(color + shade, 'pencil')"
              ></div>
            </div>
          </div>
        </Transition>
      </div>

      <div>
        <label for="pencil-width">Pencil Width </label>
        <input
          type="range"
          min="1"
          max="100"
          :value="fabricStore.pencil.width"
          class="tools-slider-width"
          id="pencil-width"
          list="settings-pencil"
        />
        <datalist id="settings-pencil">
          <option>0</option>
          <option>20</option>
          <option>40</option>
          <option>60</option>
          <option>80</option>
          <option>100</option>
        </datalist>
      </div>

      <div>
        <label for="eraser-width">Eraser Width </label>
        <input
          type="range"
          min="1"
          max="100"
          :value="fabricStore.eraser.width"
          class="tools-slider-width"
          id="eraser-width"
          list="settings-eraser"
        />
        <datalist id="settings-eraser">
          <option>0</option>
          <option>20</option>
          <option>40</option>
          <option>60</option>
          <option>80</option>
          <option>100</option>
        </datalist>
      </div>
    </div>

    <div id="highlighter" class="tabcontent space-y-8">
      <div>
        <p>Highlighter Color</p>
        <br />
        <div class="w-[14rem] grid grid-cols-4 gap-4">
          <div
            v-for="color in fabricStore.vividColours"
            class="h-10 w-10 rounded-full hover:scale-125 hover:cursor-pointer"
            :style="`background-color:${color}`"
            @click="changeHighlighterColor(color)"
          ></div>
          <div
            class="flex justify-center items-center rounded-full h-10 w-10 hover:scale-125 hover:cursor-pointer"
            @click="showHLColorPanel = !showHLColorPanel"
          >
            <SvgIcon type="mdi" :path="mdiPlus" size="36" />
          </div>
        </div>
        <br />
        <Transition name="slide-fade">
          <div class="grid grid-rows-9" v-if="showHLColorPanel">
            <div class="flex" v-for="shade in fabricStore.alpha">
              <div
                v-for="color in fabricStore.vividColours"
                class="h-6 w-6 hover:scale-125 hover:cursor-pointer"
                :style="`background-color:${color + shade}`"
                @click="selectColor(color + shade, 'highlighter')"
              ></div>
            </div>
          </div>
        </Transition>
      </div>

      <div>
        <label for="highlighter-width">Highlighter Width </label>
        <input
          type="range"
          min="1"
          max="100"
          :value="fabricStore.highlighter.width"
          class="tools-slider-width"
          id="highlighter-width"
          list="highlighter-width-list"
        />
        <datalist id="highlighter-width-list">
          <option>0</option>
          <option>20</option>
          <option>40</option>
          <option>60</option>
          <option>80</option>
          <option>100</option>
        </datalist>
      </div>

      <div>
        <label for="highlighter-opacity">Highlighter Opacity </label>
        <input
          type="range"
          min="10"
          max="90"
          :value="parseInt(fabricStore.highlighter.opacity)"
          class="tools-slider-opacity"
          id="highlighter-opacity"
          list="highlighter-opacity-list"
        />
        <datalist id="highlighter-opacity-list">
          <option>1</option>
          <option>20</option>
          <option>40</option>
          <option>60</option>
          <option>80</option>
          <option>100</option>
        </datalist>
      </div>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiPlus } from "@mdi/js";
import { useWBFabric } from "@/stores/wbFabric";
import {
  changeBrushWidth,
  changeBrushOpacity,
  closeToolSettings,
  openToolPage,
  changePencilColor,
  changeHighlighterColor,
} from "./toolSettings";

const fabricStore = useWBFabric();
const showPencilColorPanel = ref(false);
const showHLColorPanel = ref(false);

onMounted(() => {
  const widthSliders = document.getElementsByClassName("tools-slider-width");
  const opacitySliders = document.getElementsByClassName(
    "tools-slider-opacity"
  );

  for (let i = 0; i < widthSliders.length; i++) {
    const s = widthSliders[i];
    s.oninput = function () {
      changeBrushWidth(s.id, parseInt(this.value));
    };
  }

  for (let i = 0; i < opacitySliders.length; i++) {
    const s = opacitySliders[i];
    s.oninput = function () {
      changeBrushOpacity(s.id, this.value);
    };
  }

  document.getElementById("defaultOpen").click();
});

function selectColor(color, tool) {
  if (tool == "pencil") {
    changePencilColor(color);
    showPencilColorPanel.value = !showPencilColorPanel.value;
  } else if (tool == "highlighter") {
    changeHighlighterColor(color, "1", false);
    showHLColorPanel.value = !showHLColorPanel.value;
  }
}
</script>

<style scoped>
.sidebar a {
  padding: 8px 8px 8px 24px;
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

.tools-slider-width,
.tools-slider-opacity {
  width: 100%;
  height: 25px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.tablink {
  background-color: #cfcfcf;
  color: rgb(0, 0, 0);
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  width: 100%;
}

.tablink:hover {
  background-color: #b7b7b7;
}

.tabcontent {
  color: white;
  display: none;
  padding: 16px;
  height: 100%;
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
