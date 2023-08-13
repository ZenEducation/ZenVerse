// globalStore.js
import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    slug: "",
    status: "DRAFT",
    visibility: "ALL",
    category: "No Primary Category",
    language:
      '<p><span class="mr-2 w-6">&#127482;&#127480;</span> English(US)</p>',
    author: "",
    meta: "",
    imageUrl: "",
    relatedArticles: [],
    content: "",
  }),
  actions: {
    updateGlobalStore(newData) {
      this.slug = newData.slug;
      this.status = newData.status;
      this.visibility = newData.visibility;
      this.category = newData.category;
      this.language = newData.language;
      this.author = newData.author;
      // this.author = newData.author;
      this.meta = newData.meta;
      this.imageUrl = newData.imageUrl;
      this.relatedArticles = newData.relatedArticles;
    },
  },
});
