<script setup>
import { ref, computed, onMounted } from "vue";

import { useStyleStore } from "@/stores/style.js";
import { pdfViewerStore } from "~/stores/lmsLearnerDisplay.js";
import PremAsideMenuList from "@/components/Asidemenu/AsideMenuList.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import {
  mdiCheckboxMarkedCircle,
  mdiCircleOutline,
  mdiFilePdfBox,
  mdiMotionPlayOutline,
  mdiMovieOpenPlay,
  mdiTextBoxOutline,
  mdiFormatListBulleted,
  mdiPresentationPlay
} from "@mdi/js";

const allPdfData = pdfViewerStore();

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

const chapters = computed(() => allPdfData.allItems);
console.log(chapters)

const filterItems= ref(chapters)

// const chapters =  ref([
//   {
//     chapterNumber: 1,
//     chapterTitle: "Introduction",
//     lessons: [
//       {
//         lessonNumber: 1,
//         lessonTitle: "Getting Started",
//         lessonContent: "...",
//         done: true,
//         src:"https://www.africau.edu/images/default/sample.pdf"
//       },
//       {
//         lessonNumber: 2,
//         lessonTitle: "Basic Concepts",
//         lessonContent: "...",
//         done: true,
//         src:"https://morth.nic.in/sites/default/files/dd12-13_0.pdf"
//       },
//     ],
//   },
//   {
//     chapterNumber: 2,
//     chapterTitle: "Intermediate",
//     lessons: [
//       {
//         lessonNumber: 1,
//         lessonTitle: "Advanced Topics",
//         lessonContent: "...",
//         done: false,
//         sec:"https://www.africau.edu/images/default/sample.pdf"
//       },
//       {
//         lessonNumber: 2,
//         lessonTitle: "Hands-On Exercises",
//         lessonContent: "...",
//         done: false,
//         src:"https://morth.nic.in/sites/default/files/dd12-13_0.pdf"
//       },
//     ],
//   },
// ]);

const currentLesson = ref({
  chapterNumber: chapters.value[0].chapterNumber,
  lessonNumber: chapters.value[0].lessons[0].lessonNumber,
});
const changeCurrent = (chapterNum, lessonNum) => {
  console.log("called", chapterNum, lessonNum);
  if (
    currentLesson.value.chapterNumber !== chapterNum ||
    currentLesson.value.lessonNumber !== lessonNum
  ) {
    currentLesson.value.chapterNumber = chapterNum;
    currentLesson.value.lessonNumber = lessonNum;
  }
};
const markCompleted = () => {
  chapters.value
    .find(
      (chapter) => (chapter.chapterNumber = currentLesson.value.chapterNumber)
    )
    .lessons.find(
      (lesson) => (lesson.lessonNumber = currentLesson.value.lessonNumber)
    ).done = true;
};

const searchText = ref("");

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
  router.push("/dashboard");
};

const isChapterOpen = ref(Array(chapters.value.length).fill(false));
isChapterOpen.value[0] = true;

const totalLessons = computed(() => {
  let count = 0;
  chapters.value.forEach((chapter) => {
    count += chapter.lessons.length;
  });
  return count;
});

const completedLessons = computed(() => {
  let count = 0;
  let x = [];
  console.log(chapters)
  console.log(filteredChapters.value)
  filterItems.value.forEach((chapter) => {
    let temp = 0;
    chapter.lessons.forEach((lesson) => {
      if (lesson.done) {
        count++;
        temp++;
      }
    });
    x.push(temp);
  });
  return { count: count, completedList: x };
});

const totalPercentageDone = computed(() => {
  return (completedLessons.value.count / totalLessons.value) * 100;
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


const onenPdfOnSearchClick= (lesson,chapter)=>{
  allPdfData.getCurrentChapter(lesson, chapter)
  isOpen.value = false;
  searchText.value = "";
}




// get current pdf file
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
        <NuxtLink
          to="/Dashboard"
          class="pl-4 text-white underline cursor-pointer"
          >Go to dashboard</NuxtLink
        >

        <div class="justify-center text-white px-4 py-4">
          <h1 class="text-lg pb-2">
            NM | P12. Oscillatory Motion | Theory and Assignments
          </h1>
     

          <progress
            class="flex w-full self-center py-1"
            max="100"
            :value="totalPercentageDone"
          >
            {{ totalPercentageDone }}%
          </progress>
          <p>{{ totalPercentageDone.toFixed(0) }}% complete</p>

          <div class="py-4">
            <button
              @click="handleClick"
              id="dropdownSearchButton"
              data-dropdown-placement="bottom"
              class="text-white bg-fuchsia-900 font-medium text-sm px-4 py-2.5 text-center inline-flex items-center w-full justify-between"
              type="button"
            >
              <span> Search by lesson title</span>

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
              class="z-10 bg-fuchsia-900 shadow w-full dark:bg-gray-700"
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
                    type="search"
                    v-model="searchText"
                    id="input-group-search"
                    class="block w-full p-2 pl-10 text-sm text-white border border-gray-300 rounded-lg bg-fuchsia-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />

         

                </div>
              </div>

              <!-- Search item  -->
              <div class="search_Item">
                <div class="search_resualt my-2" v-for="(chapter,idx) in filteredChapters" :key="idx"  >
                   <div class="chapter_name text-lg uppercase px-3">
                    {{chapter.chapterTitle  }}
                   </div>
                  <div class="subItem text-lg py-1 hover:bg-gray-500 px-3 font-light cursor-pointer" v-for="(lesson,index) in chapter.lessons" :key="index" 
                  @click="onenPdfOnSearchClick(lesson,chapter)"
                  >
                   {{  lesson.lessonTitle}}
                  </div>
                </div>
              </div>
             
            </div>
          </div>

          <div
            class="flex text-white rounded dark:text-gray-300"
            v-for="chapter in  chapters"
            :key="chapter.chapterNumber"
          >
            <div class="py-1 w-full">
              <button
                @click="
                  isChapterOpen[chapter.chapterNumber - 1] =
                    !isChapterOpen[chapter.chapterNumber - 1]
                "
                id="dropdownSearchButtonChapter"
                data-dropdown-placement="bottom"
                class="buttomBorder text-white border-b justify-between font-medium pb-3 text-center inline-flex items-center w-full pt-2"
                type="button"
              >
                <div class="flex">
                  <BaseIcon
                    :path="mdiCheckboxMarkedCircle"
                    class="cursor-pointer"
                    size="30"
                    v-if="
                      completedLessons.completedList[
                        chapter.chapterNumber - 1
                      ] == chapter.lessons.length
                    "
                  />

                  <BaseIcon
                    v-else
                    :path="mdiCircleOutline"
                    class="cursor-pointer"
                    size="30"
                  />
                  <div class="pl-2">
                    {{ chapter.chapterTitle }} &nbsp; &nbsp; &nbsp;
                  </div>
                </div>

                <div class="flex items-center">
                  <div class="mr-2 font-light">
                    {{
                      completedLessons.completedList[chapter.chapterNumber - 1]
                    }}
                    / {{ chapter.lessons.length }}
                  </div>
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
              <!-- v-if="isChapterOpen[chapter.chapterNumber - 1]" -->
              <div
                
                id="dropdownSearch"
                class="z-10"
               v-if="isChapterOpen[chapter.chapterNumber - 1] "
              >
                <ul class="overflow-y-auto text-sm">
                  <li
                    v-for="lesson in chapter.lessons"
                    :key="lesson.lessonNumber"
                    @click="allPdfData.getCurrentChapter(lesson, chapter)"
                    class="mt-2 cursor-pointer py-1 hover:bg-gray-700"
                    :class="{'bg-gray-700':chapter.chapterNumber== allPdfData.currentChapter.chapterNumber &&   allPdfData.currentPDF.lessonNumber==lesson.lessonNumber,}"
                  >
                    <div
                      class="text-white items-center rounded flex items-start w-full"
                    >
                    

                      <div class="">
                        <BaseIcon
                          v-if="!lesson.done"
                          :path="mdiCircleOutline"
                          class="ml-1"
                          size="20"
                        />

                        <BaseIcon
                          v-if="lesson.done"
                          :path="mdiCheckboxMarkedCircle"
                          class="ml-1"
                          size="20"
                        />


                      </div>

                      <div class="">
                        <div
                          for=""
                          class="w-full ml-4 text-sm font-medium text-white"
                        >
                          {{ lesson.lessonTitle }}
                        </div>

                        <div class="flex text-white py-1 ml-3 text-left flex justify-start items-center">
                          <BaseIcon
                            :path="mdiFilePdfBox"
                            class="cursor-pointer mr-1"
                            size="22"
                            v-if="lesson.type=='pdf'"
                          />
                          <BaseIcon
                            :path="mdiMotionPlayOutline"
                            class="cursor-pointer mr-1"
                            size="20"
                            v-if="lesson.type=='audio'"
                          />
                          <BaseIcon
                            :path="mdiMovieOpenPlay"
                            class="cursor-pointer mr-1"
                            size="20"
                            v-if="lesson.type=='video'"
                          />
                          <BaseIcon
                            :path="mdiTextBoxOutline"
                            class="cursor-pointer mr-1"
                            size="20"
                            v-if="lesson.type=='text'"
                          />
                          
                          <BaseIcon
                            :path="mdiFormatListBulleted"
                            class="cursor-pointer mr-1"
                            size="20"
                            v-if="lesson.type=='quiz'"
                          />
                          <BaseIcon
                            :path="mdiPresentationPlay"
                            class="cursor-pointer mr-1"
                            size="20"
                            v-if="lesson.type=='ppt'"
                          />
                          <div class="text-left uppercase">
                            {{lesson.type  }}
                          </div>
                        </div>
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
#input-group-search {


}
#input-group-search::-webkit-search-cancel-button{
 

  -webkit-appearance: none;
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 10px;
  background:
    linear-gradient(45deg, rgba(0, 0, 0, 0.014) 0%,rgba(0,0,0,0) 43%,#ffffff 45%,#ffffff 55%,rgba(0,0,0,0) 57%,rgba(0,0,0,0) 100%),
    linear-gradient(135deg, transparent 0%,transparent 43%,#fff9f9 45%,#ffffff 55%,transparent 57%,transparent 100%);
}


.search_Item{
  max-height: 220px;
  overflow: auto;
}



</style>
