import { defineStore } from "pinia";

const state = () => ({
  canvas: null,
  showModal: false,
  drawingMode: false,
  toolSettings: false,
  selectedTool: 'pencil',
  background: '#ffffff',
  pencil: {
    width: 5,
    color: '#000',
  },
  eraser: {
    width: 50
  },
  highlighter: {
    width: 25,
    color: '#ffff00',
    opacity: '85'
  },
  vividColours: [
    "#FFFFFF", //White
    "#FF0000", // Red
    "#EC008C", // Pink
    "#AB47BC", // Violet
    "#7841CC", // Purple
    "#1976D2", // Blue
    "#42A5F5", // LightBlue2
    "#00C6C2", // Teal
    "#39B54A", // Green
    "#FFEB3B", // Yellow
    "#FB8C00", // Orange
    "#8D6E63", // LightBrown
    "#607D8B", //Slate
    "#263238", // DarkSlate
  ],
  alpha: [
    '33', '4d', '66', '80', '99', 'b3', 'cc', 'e6', ''
  ],
  grid: {
    lineWidth: 0,
    horizontalSpacing: 0,
    verticalSpacing: 0
  }
});

const actions = {
  incrCurrentRectCount() {
    this.currentRectCount++;
  },
  toggleModal() {
    this.showModal = !this.showModal
  },
  toggleDrawingMode() {
    this.drawingMode = !this.drawingMode
  },
};

const getters = {
};

export const useWBFabric = defineStore("WBFabric", {
  state,
  getters,
  actions,
});
