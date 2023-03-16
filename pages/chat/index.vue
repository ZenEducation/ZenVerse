<template>
  <!-- <div
      id="root"
      class="min-h-100vh cloak flex grow bg-slate-50 dark:bg-navy-900"
    > -->
  <AppPreLoader v-if="isLoading"/>
  <div
      v-else
      id="root"
      class="min-h-[100vh] flex grow bg-slate-50 dark:bg-navy-900 overflow-hidden"
    >
    <ChatSideBar />
    <ChatMain />
    <RightSideBar />
  </div>

</template>

<script setup>
import ChatSideBar from "~~/components/Chat/ChatSideBar/ChatSideBar.vue";
import ChatMain from "@/components/Chat/ChatMain/ChatMain.vue";
import AppPreLoader from "@/components/Chat/AppPreLoader.vue";
import RightSideBar from "~~/components/Chat/RightSideBar/RightSideBar.vue";
import { ref } from "vue";
const isLoading = ref(true)
onMounted(() => {
  setTimeout(()=> {
    isLoading.value = false
  }, 2000)
  // THIS SCRIPT REQUIRED FOR PREVENT For Dark Mode
  // localStorage.getItem("dark-mode") === "dark"
  //  && document.documentElement.classList.add("dark");
});

</script>
