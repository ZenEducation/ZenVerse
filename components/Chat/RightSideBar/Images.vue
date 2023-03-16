<template>
  <div class="grid grid-cols-4 gap-2">
    <div v-for="image in getUserImages" :key="image">
      <img
        class="aspect-square rounded-lg object-cover object-center"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="image"
      />
    </div>
  </div>
</template>

<script setup>
import { useChatStore } from "@/stores/chat";
import { storeToRefs } from "pinia";

const chatStore = useChatStore();
const { getUserImages } = storeToRefs(chatStore);
</script>
