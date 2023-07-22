// globalStore.js
import { defineStore } from "pinia";

export const useArticleStore = defineStore("article", {
  state: () => ({
    content: "",
  }),
  actions: {
    updateArticleContent(newData) {
      this.content = newData;
    },
  },
});
