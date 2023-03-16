<template>
  <!-- Main Content Wrapper -->
  <div class="h-[100vh] mt-0 flex w-full flex-col">
    <!-- Chat header -->
    <Header/>
    <!-- chat body -->
    <ChatBody/>
    <!-- chat-footer  -->
    <ChatFooter/>
  </div>
</template>
<script setup>
import Header from "./Header.vue";
import ChatFooter from "./ChatFooter.vue"
import ChatBody from "./ChatBody.vue"
</script>
