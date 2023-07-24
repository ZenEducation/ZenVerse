//amplify auth plugin
import { defineNuxtPlugin } from "#app";
import { Auth } from "aws-amplify";
import{ Amplify, DataStore } from "aws-amplify";
import "@aws-amplify/ui-vue";


import config from "../src/aws-exports";

export default defineNuxtPlugin((nuxtApp) => {
  Amplify.configure(config);
  DataStore.configure(config);
  nuxtApp.$auth = Auth;
});
