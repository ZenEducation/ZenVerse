<script setup>
import { useStyleStore } from "@/stores/style.js";
import PremAsideMenuList from "@/components/Asidemenu/AsideMenuList.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import {
  mdiCheckboxMarkedCircle,
  mdiCircleOutline,
  mdiFilePdfBox,
} from "@mdi/js";
defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
  activeSecondaryMenuKey: {
    type: String,
    default: null,
  },
  zIndex: {
    type: String,
    default: "z-50",
  },
  isCompact: Boolean,
});
const isOpen = ref(false);

function handleClick(e) {
  e.preventDefault();
  isOpen.value = !isOpen.value;
}

function handleBodyClick(e) {
  const dropdownSearchButton = document.getElementById("dropdownSearchButton");
  if (!dropdownSearchButton.contains(e.target)) {
    isOpen.value = false;
  }
}

onMounted(() => {
  const documents = document.getElementById("dropdownSearchButton");
  documents.addEventListener("click", handleBodyClick);
});

onUnmounted(() => {
  const documents = document.getElementById("dropdownSearchButton");
  documents.removeEventListener("click", handleBodyClick);
});
const isOpenChapter = ref(false);

function handleClickChapter(e) {
  e.preventDefault();
  isOpenChapter.value = !isOpenChapter.value;
}

function handleBodyClickChapter(e) {
  const dropdownSearchButton = document.getElementById(
    "dropdownSearchButtonChapter"
  );
  if (!dropdownSearchButton.contains(e.target)) {
    isOpenChapter.value = false;
  }
}

onMounted(() => {
  const documents = document.getElementById("dropdownSearchButtonChapter");
  documents.addEventListener("click", handleBodyClickChapter);
});

onUnmounted(() => {
  const documents = document.getElementById("dropdownSearchButtonChapter");
  documents.removeEventListener("click", handleBodyClickChapter);
});
const emit = defineEmits(["menu-click"]);

const styleStore = useStyleStore();

const menuClick = (event, item) => {
  emit("menu-click", event, item);
};

function toggleDropdownMenu() {
  isDropdownOpen.value = true;
}
</script>

<template>
  <aside
    id="aside"
    :class="zIndex"
    class="flex w-80 fixed top-0 h-screen transition-position overflow-hidden"
  >
    <div
      :class="styleStore.asideStyle"
      class="flex-1 flex flex-col overflow-hidden dark:bg-slate-900"
    >
      <div
        :class="styleStore.asideBrandStyle"
        class="flex flex-row w-full shrink-0 h-14 items-center dark:bg-slate-900"
      >
        <slot />
      </div>
      <!-- The scrollbars. CSS has been written as extened CSS in the tailwind.config.js file -->
      <!-- The following ScrollBar is due to the tailwind-scrollbar plugin -->
      <!-- If we dont want to use the tailwind scrollbar plugin then we can have a hacky workaround by using 'aside-scrollbars-[slate]' when darkMode is true, however, this is not the most optimal solution -->
      <div
        :class="
          styleStore.darkMode
            ? 'scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-800 scrollbar-thumb-rounded'
            : styleStore.asideScrollbarsStyle
        "
        class="flex-1 overflow-y-auto overflow-x-hidden dark:bg-gray-900"
      >
        <div class="justify-center text-white px-4 py-4">
          <h1 class="text-lg pb-2">
            NM | P12. Oscillatory Motion | Theory and Assignments
          </h1>

          <progress
            class="flex w-2/5 self-center lg:w-60 py-1"
            max="100"
            value="5"
          >
            5%
          </progress>
          <p>5% complete</p>

          <div class="py-4">
            <button
              @click="handleClick"
              id="dropdownSearchButton"
              data-dropdown-placement="bottom"
              class="text-white bg-fuchsia-900 font-medium text-sm px-4 py-2.5 text-center inline-flex items-center w-60"
              type="button"
            >
              Search by lesson title
              <svg
                class="w-4 h-4 ml-14"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div
              v-if="isOpen"
              id="dropdownSearch"
              class="z-10 bg-fuchsia-900 shadow w-60 dark:bg-gray-700"
            >
              <div class="p-3">
                <label for="input-group-search" class="sr-only">Search</label>
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <svg
                      class="w-5 h-5 text-white-500 dark:text-white-400"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="input-group-search"
                    class="block w-full p-2 pl-10 text-sm text-white border border-gray-300 rounded-lg bg-fuchsia-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <ul
                class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
              >
                <h1
                  class="w-full py-2 text-sm font-medium text-white rounded dark:text-gray-300"
                >
                  Paathshala Mastery
                </h1>
                <li>
                  <div
                    class="items-center pl-2 rounded hover:bg-fuchsia-500 dark:hover:bg-gray-600 py-2"
                  >
                    <label
                      for="checkbox-item-16"
                      class="w-full py-2 ml-2 text-sm font-medium text-white rounded dark:text-gray-300"
                      >Leslie Livingston studies</label
                    >
                  </div>
                </li>
                <li>
                  <div
                    class="items-center pl-2 rounded hover:bg-fuchsia-500 dark:hover:bg-gray-600 py-2"
                  >
                    <label
                      for="checkbox-item-16"
                      class="w-full py-2 ml-2 text-sm font-medium text-white rounded dark:text-gray-300"
                      >Religion and Religious studies</label
                    >
                  </div>
                </li>
                <li>
                  <div
                    class="items-center pl-2 rounded hover:bg-fuchsia-500 dark:hover:bg-gray-600 py-2"
                  >
                    <label
                      for="checkbox-item-16"
                      class="w-full py-2 ml-2 text-sm font-medium text-white rounded dark:text-gray-300"
                      >Computer Basics studies</label
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex text-white rounded dark:text-gray-300">
            <!-- <BaseIcon
     
          :path="mdiCheckboxMarkedCircle"
         
          class="cursor-pointer"
          size="30"
        />
        <h1 class = "ml-3">Archaeology</h1>
        <div class = "ml-5">1/2</div> -->
            <div class="py-1">
              <button
                @click="handleClickChapter"
                id="dropdownSearchButtonChapter"
                data-dropdown-placement="bottom"
                class="buttomBorder text-white border-b justify-between font-medium pb-2 text-center inline-flex items-center w-60"
                type="button"
              >
                <BaseIcon
                  :path="mdiCheckboxMarkedCircle"
                  class="cursor-pointer"
                  size="30"
                />
                Political Science &nbsp; &nbsp; &nbsp; 1/1
                <div class="">
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </button>

              <!-- Dropdown menu -->
              <div
                v-if="isOpenChapter"
                id="dropdownSearch"
                class="z-10 dark:bg-gray-700"
              >
                <div class="p-2"></div>
                <ul
                  class="h-48 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                >
                  <li>
                    <div
                      class="text-white items-center rounded hover:bg-fuchsia-500"
                    >
                      <BaseIcon
                        :path="mdiCircleOutline"
                        class="cursor-pointer"
                        size="20"
                      />

                      <label
                        for="checkbox-item-16"
                        class="w-full ml-4 text-sm font-medium text-white"
                        >Leslie Livingston studies</label
                      >

                      <div class="flex text-white py-1 ml-3">
                        <BaseIcon
                          :path="mdiFilePdfBox"
                          class="cursor-pointer ml-7 mr-3"
                          size="30"
                        />
                        <div>PDF</div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div
                      class="text-white items-center rounded hover:bg-fuchsia-500"
                    >
                      <BaseIcon
                        :path="mdiCircleOutline"
                        class="cursor-pointer"
                        size="20"
                      />

                      <label
                        for="checkbox-item-16"
                        class="w-full ml-4 text-sm font-medium text-white"
                        >Leslie Livingston studies</label
                      >

                      <div class="flex text-white py-1 ml-3">
                        <BaseIcon
                          :path="mdiFilePdfBox"
                          class="cursor-pointer ml-7 mr-3"
                          size="30"
                        />
                        <div>PDF</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      class="text-white items-center rounded hover:bg-fuchsia-500"
                    >
                      <BaseIcon
                        :path="mdiCircleOutline"
                        class="cursor-pointer"
                        size="20"
                      />

                      <label
                        for="checkbox-item-16"
                        class="w-full ml-4 text-sm font-medium text-white"
                        >Leslie Livingston studies</label
                      >

                      <div class="flex text-white py-1 ml-3">
                        <BaseIcon
                          :path="mdiFilePdfBox"
                          class="cursor-pointer ml-7 mr-3"
                          size="30"
                        />
                        <div>PDF</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <slot name="footer" />
    </div>
  </aside>
</template>

<style scoped>
.dark_scrollbars_compact {
  scrollbar-width: thin;
  scrollbar-color: rgb(2, 7, 14) rgb(30, 41, 59) !important;
}
.buttomBorder {
  border-bottom: "20px";
  border-color: rgb(176, 174, 174);
}
</style>
