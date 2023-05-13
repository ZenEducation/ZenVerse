<template>
  <div class="tool-settings">
    <div v-show="checkSelectedTool() == 'pencil'">
      <div class="slidecontainer">
        <label for="fader-pencil">Width </label>
        <input
          type="range"
          min="1"
          max="100"
          :value="fabricStore.pencil.width"
          class="slider"
          id="fader-pencil"
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
    </div>

    <div v-show="checkSelectedTool() == 'eraser'">
      <div class="slidecontainer">
        <label for="fader-eraser">Width </label>
        <input
          type="range"
          min="1"
          max="100"
          :value="fabricStore.eraser.width"
          class="slider"
          id="fader-eraser"
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
    <div v-show="checkSelectedTool() == 'highlighter'">
      <div class="slidecontainer">
        <label for="fader-highlighter">Width </label>
        <input
          type="range"
          min="1"
          max="100"
          :value="fabricStore.highlighter.width"
          class="slider"
          id="fader-highlighter"
          list="settings-highlighter"
        />
        <datalist id="settings-highlighter">
          <option>0</option>
          <option>20</option>
          <option>40</option>
          <option>60</option>
          <option>80</option>
          <option>100</option>
        </datalist>
      </div>
    </div>
    <div v-show="checkSelectedTool() == 'changeBG'" class="bgColor">
      <label for="bg-color">Current Color :</label>
      <input type="color" :value="fabricStore.background" id="bg-color" />
    </div>
  </div>
</template>

<script setup>
import { useWBFabric } from "@/stores/wbFabric";
import { changeBrushWidth, changeBackgroundColor } from "./toolSettings";

const fabricStore = useWBFabric();

onMounted(() => {
  const sliders = document.getElementsByClassName("slider");
  const bgColor = document.getElementById("bg-color");

  for (let i = 0; i < sliders.length; i++) {
    const s = sliders[i];
    s.oninput = function () {
      // console.log(typeof this.value);
      changeBrushWidth(s.id, parseInt(this.value));
    };
  }

  bgColor.oninput = function () {
    changeBackgroundColor(this.value);
  };
});

function checkSelectedTool() {
  return fabricStore.selectedTool;
}
</script>

<style scoped>
.tool-settings {
  background-color: #d6d6d6e3;
  position: relative;
  left: 60px;
  border-radius: 15px;
  overflow: hidden;
}

.tool-settings div {
  color: black;
  padding: 8px 12px 24px 12px;
}

.slidecontainer {
  width: 250px;
  height: 50px;
}

.slider {
  width: 100%;
  height: 25px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.bgColor label {
  padding: 10px;
}
</style>
