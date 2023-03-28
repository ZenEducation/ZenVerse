import { defineStore } from "pinia";

const state = () => ({
  blogs: [],
  categories: []
});

const actions = {};

const getters = {};

export const useBlog = defineStore("blog", {
  state,
  getters,
  actions,
});
