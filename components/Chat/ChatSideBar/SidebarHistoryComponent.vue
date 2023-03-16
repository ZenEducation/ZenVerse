<template>
  <div>
    <div class="flex items-center justify-between px-4">
      <span class="text-xs font-medium uppercase">History</span>
      <div class="-mr-1.5 flex">
        <button
          class="inline-flex h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3.5 w-3.5 m-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="swiper px-4">
      <div class="swiper-wrapper mt-1 flex flex-row gap-2 overflow-hidden">
        <div
          class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
          v-for="story in getUserStories"
          :key="story"
        >
          <div
            class="h-11 w-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
          >
            <img
              class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="avatar"
            />
          </div>
          <p
            class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
          >
            {{ story.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useChatStore } from "@/stores/chat";
import { storeToRefs } from "pinia";

const store = useChatStore();
const { getUserStories } = storeToRefs(store);
</script>
