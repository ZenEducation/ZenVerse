<template>
  <div class="historyPanel">
    <!-- <panelToolIcon @click.native="redo" icon="redo" />
    <panelToolIcon @click.native="undo" icon="undo" /> -->
    <button class="text-white" id="0" @click="handleChange">mouse opacity</button>
    <button class="text-white" id="1" @click="handleChange">drag drop</button>
    <button class="text-white" id="2" @click="handleChange">Controls</button>
    <div class="controls">
      <p>
        <label
          ><span>Angle:</span>
          <input type="range" id="angle-control" value="0" min="0" max="360"
        /></label>
      </p>
      <p>
        <label
          ><span>Left:</span>
          <input type="range" id="left-control" value="0" min="0" max="800"
        /></label>
      </p>
      <p>
        <label
          ><span>Top:</span>
          <input type="range" id="top-control" value="0" min="0" max="800"
        /></label>
      </p>
      <p>
        <label
          ><span>Scale:</span>
          <input
            type="range"
            id="scale-control"
            value="1"
            min="0.1"
            max="10"
            step="0.1"
        /></label>
      </p>
      <p>
        <label
          ><span>SkewX:</span>
          <input
            type="range"
            id="skewX-control"
            value="0"
            min="0"
            max="80"
            step="1"
        /></label>
      </p>
      <p>
        <label
          ><span>SkewY:</span>
          <input
            type="range"
            id="skewY-control"
            value="0"
            min="0"
            max="80"
            step="1"
        /></label>
      </p>
    </div>
    <button class="text-white" id="3" @click="handleChange">Stickman</button>
    <button class="text-white" id="4" @click="handlePanel">Close</button>
  </div>
</template>

<script>
import PanelToolIcon from "./PanelToolIcon";
import history from "@/components/WBFabric/tools/history";
import MouseEvents from "@/components/WBFabric/tools/mouseEvent";
import { useWBFabric } from "@/stores/wbFabric";
const fabricStore = useWBFabric();
if(fabricStore.showMousePanel)MouseEvents.add();
export default {
  components: {
    panelToolIcon: PanelToolIcon,
  },
  methods: {
    undo() {
      history.undo();
    },
    redo() {
      history.redo();
    },
    handleChange(e) {
      // console.log(e.target.id);
      MouseEvents.selectEvent(e.target.id);
    },
    handlePanel(){
      fabricStore.showMousePanel=false;
    }
  },
};
</script>

<style scoped>
.historyPanel {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 330px;
  left: 10px;
  padding: 10px;
  background: rgb(30, 30, 31);
  border-radius: 5px;
  box-shadow: 0px 10px 30px 8px rgba(0, 0, 0, 0.4);
}
.controls {
  display: inline-block;
  background: #fafafa;
  margin-left: 10px;
  padding: 15px;
  border-left: 1px dotted #aaa;
  height: 170px;
}
</style>
