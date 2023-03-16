<template>
  <div class="h-screen hidden md:block">
    <div class="flex h-full flex-col bg-white xl:px-[0.5rem] dark:bg-navy-750">
      <div class="flex h-18 waitshrink-0 items-center justify-center">
        <div class="avatar flex h-10 w-10 my-2">
          <div
            class="is-initial rounded-full bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="flex h-[calc(100%-4.5rem)] grow flex-col">
        <div class="is-scrollbar-hidden flex grow flex-col overflow-y-auto">
          <ul class="mt-2 flex flex-col items-center justify-center space-y-1">
            <li>
              <a
                href="#"
                class="flex text-center h-10 w-10 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 m-auto "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex text-center h-10 w-10 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 m-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <hr
            class="my-4 mx-2 h-[4px] waitshrink-0 bg-slate-200 dark:bg-navy-500"
          />
          <div class="flex flex-col">
            <div
              class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
              v-for="chat in getUserChats" :key="chat"
            >
              <div class="avatar h-10 w-10">
                <img
                  class="rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="avatar"
                />
                <div
                  :class="chat.isOnline ? 'bg-primary dark:border-navy-700 dark:bg-accent' : 'border-white bg-slate-300 dark:border-navy-700'"
                  class="absolute right-0 h-3 w-3 rounded-full border-2 border-white "
                >
                <span v-show="chat.isOnline"
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80 dark:bg-accent"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="py-3">
          <button
            class="inline-flex h-10 w-10 rounded-full border border-slate-200 p-0 font-medium hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 m-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useChatStore } from '@/stores/chat';
import { storeToRefs } from 'pinia'
const store = useChatStore()
const { getUserChats } = storeToRefs(store)
</script>
