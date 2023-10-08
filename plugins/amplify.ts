//amplify auth plugin
import { defineNuxtPlugin } from "#app";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "@/src/aws-exports.js"

Amplify.configure(awsconfig)
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$auth = Auth;
});
