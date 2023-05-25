<script setup>
  import { ref, computed } from 'vue';

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

const chapters =  ref([
  {
    chapterNumber: 1,
    chapterTitle: "Introduction",
    lessons: [
      {
        lessonNumber: 1,
        lessonTitle: "Getting Started",
        lessonContent: "...",
        done: true,
      },
      {
        lessonNumber: 2,
        lessonTitle: "Basic Concepts",
        lessonContent: "...",
        done: true,
      },
    ],
  },
  {
    chapterNumber: 2,
    chapterTitle: "Intermediate",
    lessons: [
      {
        lessonNumber: 1,
        lessonTitle: "Advanced Topics",
        lessonContent: "...",
        done: false,
      },
      {
        lessonNumber: 2,
        lessonTitle: "Hands-On Exercises",
        lessonContent: "...",
        done: false,
      },
    ],
  },
]);

const currentLesson = ref({
  chapterNumber: chapters.value[0].chapterNumber,
  lessonNumber: chapters.value[0].lessons[0].lessonNumber,
});

const changeCurrent = (chapterNum , lessonNum)=>{
  console.log("called" , chapterNum , lessonNum );
  if( currentLesson.value.chapterNumber !== chapterNum || currentLesson.value.lessonNumber !== lessonNum ){
    currentLesson.value.chapterNumber = chapterNum;
    currentLesson.value.lessonNumber = lessonNum;
  }
}

const markCompleted = ()=>{
  chapters.value.find((chapter)=>chapter.chapterNumber = currentLesson.value.chapterNumber).lessons.find((lesson)=>lesson.lessonNumber = currentLesson.value.lessonNumber).done = true;
}

const searchText = ref('');

const filteredChapters = computed(() => {
  const searchValue = searchText.value.toLowerCase().trim();
  if (!searchValue) {
    return chapters.value;
  }
  const temp = chapters.value;

  const filtered = [];
  temp.forEach((chapter) => {
    if (chapter.chapterTitle.toLowerCase().includes(searchValue)) {
      filtered.push(chapter);
    } else {
      const lessons = chapter.lessons.filter((lesson) =>
        lesson.lessonTitle.toLowerCase().includes(searchValue)
      );

      if (lessons.length > 0) {
        const newChap = { ...chapter }; // Create a shallow copy of the chapter
        newChap.lessons = lessons;
        filtered.push(newChap);
      }
    }
  });

  return filtered;
});

const handleDashboard = () => {
  router.push("/dashboard")
}

const isChapterOpen = ref( Array(chapters.value.length).fill(false) )
isChapterOpen.value[0]=true;

const totalLessons = computed(() => {
    let count = 0;
    chapters.value.forEach((chapter) => {
      count += chapter.lessons.length;
    });
    return count;
  });

  const completedLessons = computed(() => {
    let count = 0;
    let x = []
    filteredChapters.value.forEach((chapter) => {
      let temp = 0;
      chapter.lessons.forEach((lesson) => {
        if (lesson.done) {
          count++;
          temp++;
        }
      });
      x.push(temp);
    });
    return {count:count , completedList : x}
  });

  const totalPercentageDone = computed(() => {
    return (completedLessons.value.count/ totalLessons.value) * 100;
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
    style=""
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
      <NuxtLink to="/Dashboard" class="pl-4 text-white underline cursor-pointer" >Go to dashboard</NuxtLink>

        <div class="justify-center text-white px-4 py-4">
          <h1 class="text-lg pb-2" @click="markCompleted">
            NM | P12. Oscillatory Motion | Theory and Assignments
          </h1>

          <progress
            class="flex w-2/5 self-center lg:w-60 py-1"
            max="100"
            :value="totalPercentageDone"
          >
            {{totalPercentageDone}}%
          </progress>
          <p>{{totalPercentageDone}}% complete</p>

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
                    v-model="searchText"
                    id="input-group-search"
                    class="block w-full p-2 pl-10 text-sm text-white border border-gray-300 rounded-lg bg-fuchsia-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex text-white rounded dark:text-gray-300"
            v-for="chapter in filteredChapters"
            :key="chapter.chapterNumber"
          >
            <div class="py-1">
              <button
                @click="isChapterOpen[chapter.chapterNumber-1] = !isChapterOpen[chapter.chapterNumber-1] "
                id="dropdownSearchButtonChapter"
                data-dropdown-placement="bottom"
                class="buttomBorder text-white border-b justify-between font-medium pb-2 text-center inline-flex items-center w-60"
                type="button"
              >
                <BaseIcon
                  :path="mdiCheckboxMarkedCircle"
                  class="cursor-pointer"
                  size="30"
                  v-if="completedLessons.completedList[chapter.chapterNumber-1] == chapter.lessons.length "
                />

                <BaseIcon
                v-else
                  :path="mdiCircleOutline"
                  class="cursor-pointer"
                  size="30"
                />

                {{ chapter.chapterTitle }} &nbsp; &nbsp; &nbsp; {{ completedLessons.completedList[chapter.chapterNumber-1] }} / {{ chapter.lessons.length }}
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
                v-if="isChapterOpen[chapter.chapterNumber-1]"
                id="dropdownSearch"
                class="z-10 dark:bg-gray-700"
              >
                <div class="p-2"></div>
                <ul
                  class=" pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                >
                  <li
                    v-for="lesson in chapter.lessons"
                    :key="lesson.lessonNumber"
                  >
                    <div  @click="changeCurrent( chapter.chapterNumber , lesson.lessonNumber )"
                      class="text-white items-center rounded hover:bg-fuchsia-500"
                      :class="{'bg-fuchsia-500':(lesson.lessonNumber == currentLesson.lessonNumber && chapter.chapterNumber == currentLesson.chapterNumber)}"
                    >
                      <BaseIcon
                      @click="()=>{
                        lesson.done = !lesson.done 
                      }"
                      v-if="!lesson.done"
                        :path="mdiCircleOutline"
                        class="cursor-pointer"
                        size="20"
                      />

                      <BaseIcon
                      @click="()=>{
                        lesson.done = !lesson.done 
                      }"
                      v-if="lesson.done"
                      :path="mdiCheckboxMarkedCircle"
                      class="cursor-pointer"
                      size="20"
                    />
                    



                      <label 
                        for="checkbox-item-16"
                        class="w-full ml-4 text-sm font-medium text-white"
                        >{{ lesson.lessonTitle }}</label
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
