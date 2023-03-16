<template>
  <!-- Right Sidebar -->
  <div v-show="getRightSidebarStatus">
    <div>
      <div
        class="fixed xl:static right-0 top-0 z-[101] h-screen w-full sm:w-80"
      >
        <div
          class="flex h-full w-full flex-col border-l border-slate-150 bg-white transition-transform duration-200 dark:border-navy-600 dark:bg-navy-750"
        >
          <!-- top header -->
          <div class="flex h-[60px] items-center justify-between p-4">
            <h3 class="text-base font-medium text-slate-700 dark:text-navy-100">
              Chat Info
            </h3>
            <div class="-mr-1.5 flex space-x-1">
              <button
                class="inline-flex h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="m-auto h-5.5 w-5.5 text-slate-500 dark:text-navy-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>

              <button
                @click="setDarkMode(!darkMode)"
                class="inline-flex darkmode-toggle h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="darkmode-moon h-6 w-6 text-amber-400 m-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.75 3.412a.818.818 0 01-.07.917 6.332 6.332 0 00-1.4 3.971c0 3.564 2.98 6.494 6.706 6.494a6.86 6.86 0 002.856-.617.818.818 0 011.1 1.047C19.593 18.614 16.218 21 12.283 21 7.18 21 3 16.973 3 11.956c0-4.563 3.46-8.31 7.925-8.948a.818.818 0 01.826.404z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="darkmode-sun h-6 w-6 text-amber-400 m-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <button
                @click="toggleRightSidebar(false)"
                class="h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <UserInfo/>
          <div class="mt-6 flex flex-col">
            <div class="is-scrollbar-hidden overflow-x-auto px-4">
              <div class="flex">
                <button
                  @click="setActiveTab('images')"
                  class="hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100 shrink-0 rounded-none border-b-2 px-3 py-2 mx-1 font-medium"
                  :class="
                    activeTab === 'images'
                      ? 'border-b border-primary dark:border-accent text-primary dark:text-accent-light'
                      : 'border-transparent '
                  "
                >
                  Images
                </button>
                <button
                  @click="setActiveTab('files')"
                  class="hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100 shrink-0 rounded-none border-b-2 px-3 py-2 mx-1 font-medium"
                  :class="
                    activeTab === 'files'
                      ? 'border-b border-primary dark:border-accent text-primary dark:text-accent-light'
                      : 'border-transparent '
                  "
                >
                  Files
                </button>
              </div>
            </div>
            <div class="px-4 pt-4">
              <div v-show="activeTab === 'images'" class="">
                <Images />
              </div>
              <div v-show="activeTab === 'files'">
                <Files />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useChatStore } from "@/stores/chat";
import { useStyleStore } from "@/stores/style";
import { storeToRefs } from "pinia";
import Images from "./Images.vue";
import Files from "./Files.vue";
import UserInfo from "./UserInfo.vue"
const chatStore = useChatStore();
const styleStore = useStyleStore();
const { getRightSidebarStatus } = storeToRefs(chatStore);
const { darkMode } = storeToRefs(styleStore);
const { toggleRightSidebar } = chatStore;
const { setDarkMode } = styleStore;
const activeTab = ref("images");
const setActiveTab = (val) => {
  activeTab.value = val;
};
</script>
