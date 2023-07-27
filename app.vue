<script setup>
import { useStyleStore } from "@/stores/style.js";
import { darkModeKey, styleKey } from "@/configs/config";
import { useMainStore } from "@/stores/main.js";
import "@/assets/css/main.css";
import '@aws-amplify/ui-vue';
// import { Amplify, Auth } from "aws-amplify";
// import awsconfig from '@/src/aws-exports'; 
const url = window.location.host
// if (url.includes('localhost')) {
//   awsconfig.oauth.redirectSignIn = 'http://localhost:3000/'
//   awsconfig.oauth.redirectSignOut = 'http://localhost:3000/'
// }else{
//   awsconfig.oauth.redirectSignIn = 'https://subproj-auth.d1zumicxzxxdjk.amplifyapp.com/'
//   awsconfig.oauth.redirectSignOut = 'https://subproj-auth.d1zumicxzxxdjk.amplifyapp.com/'
// }
// console.log(awsconfig)
// Amplify.configure(awsconfig);
// Auth.configure(awsconfig)

const mainStore = useMainStore();
const styleStore = useStyleStore();
const loading = ref(true);

onMounted(() => {
  styleStore.setStyle(localStorage[styleKey] ?? "basic");
  /* Dark mode */
  if (
    (!localStorage[darkModeKey] &&
      window.matchMedia("(prefers-color-scheme: dark)").matches) ||
    localStorage[darkModeKey] === "1"
  ) {
    styleStore.setDarkMode();
  }
  loading.value = false;
});
useHead({
  titleTemplate: (titleChunk) => {
    const titleBase = "Zen Nuxt";

    return titleChunk ? `${titleChunk} - ${titleBase}` : titleBase;
  },
});
</script>

<template>
  <div>
    <NuxtLayout v-if="!loading">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
