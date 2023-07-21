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
    author:
      '<p><span class="mr-2 p-2 text-[10px] rounded-sm bg-green-700 text-white">N</span> Name(You)</p>',
    meta: "",
    imageUrl: "",
    articles: [],
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
      this.meta = newData.meta;
      this.imageUrl = newData.imageUrl;
      this.articles = newData.articles;
    },
  },
});
