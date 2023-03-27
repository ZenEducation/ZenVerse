import { defineStore } from "pinia";

const state = () => ({
  blogs: [],
});

const actions = {};

const getters = {};

export const useBlog = defineStore("blog", {
  state,
  getters,
  actions,
});
