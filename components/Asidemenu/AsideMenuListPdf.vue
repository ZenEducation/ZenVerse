<script setup>
import PremAsideMenuItem from "@/components/Asidemenu/AsideMenuItem.vue";

defineProps({
  isDropdownList: Boolean,
  isCompact: Boolean,
  menu: {
    type: Array,
    default: () => [],
  },
  activeSecondaryMenuKey: {
    type: String,
    default: null,
  },
});
let list1 = ["PDF1", "PDF2", "PDF3", "PDF4", "PDF5", "PDF6", "PDF7", "PDF8"];
let allPDFList = ref([
  {
    title: "PDF1",
    SComp: [
      { t: "S1", completion: false },
      { t: "S2", completion: false },
    ],
    visible:false
  },
  {
    title: "PDF2",
    SComp: [
      { t: "T1", completion: false },
      { t: "T2", completion: false },
    ],
    visible:false
  },
]);
let progress = ref(0);
let c = ref(0);
// for (let i of allPDFList.value) {
//   for (let j of i["SComp"]) {
//     progress.value += j["completion"];
//     c.value += 1;
//   }
// }
// console.log(progress.value);
// console.log(c.value);
let finalProgress = ref(0);
console.log("FinalProgresssss", finalProgress.value);
let baseList = ref(list1);
const emit = defineEmits(["menu-click"]);

const menuClick = (event, item) => {
  emit("menu-click", event, item);
};
let visible = ref(false);
let showDrop = ref(false);
const dropdownClick = (event) => {
  console.log("DropdownClick", event)
  visible.value = !visible.value;
  allPDFList.value.map((m)=>{
    if(m.title==event.target.id.split("_")[1]){
      m.visible=!m.visible;
    }
  });
  // let id=`dropdown_${event.target.id.split("_")[1]}`;
  // console.log(document.getElementById(id).style);
  // document.getElementById(`dropdown_${event.target.id.split("_")[1]}`).style.display=document.getElementById(`dropdown_${event.target.id.split("_")[1]}`).style.display=="block"?"none":"block";
  
};
const increaseProgress = (event) => {
  console.log("Target Value  ", event);
};
function searchVisible() {
  showDrop.value = !showDrop.value;
}

function changingSearch(e) {
  console.log("Changing Search", e);
  if (e.target.value != "") {
    let tempList = [];
    for (let i of baseList.value) {
      if (i.toUpperCase().indexOf(e.target.value) > -1) {
        tempList.push(i);
      }
      baseList.value = tempList;
    }
  } else {
    baseList.value = list1;
  }
}
function checked(e){
  console.log("Checking", e);
  allPDFList.value.map((m)=>{
    if(m.title==e.target.id.split("_")[0]){
      m.SComp.map((m1)=>{
        if(m1.t==e.target.id.split("_")[1]){
          m1.completion=!m1.completion;
        }
      })
    }
  })
  for (let i of allPDFList.value) {
  for (let j of i["SComp"]) {
    progress.value += j["completion"];
    c.value += 1;
  }
}
console.log(progress.value);
console.log(c.value);
finalProgress.value=Math.round((progress.value / c.value) * 100, 2);
console.log("FinalProgre", finalProgress.value);
progress.value=0;
c.value=0;
}
</script>

<template>
  <a style="color:white" href="/dashboard">Go back toDashboard</a>
  <br/>
  <br/>
  <h3  style ="color:white;text-align: center;">Course Title</h3>
  <br/>
  <ul>
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        class="bg-blue-600 h-2.5 rounded-full"
        
        :style="{width:`${finalProgress}%`}"
      ></div>
    </div>
    <br/>
    <!-- <PremAsideMenuItem
      v-for="(item, index) in menu"
      :key="index"
      :item="item"
      :is-dropdown-list="isDropdownList"
      :is-compact="isCompact"
      :active-secondary-menu-key="activeSecondaryMenuKey"
      @menu-click="menuClick"
    /> -->
    <!-- component -->
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <!-- <p class="p-4">Countries</p>
      <div class="border-b-2 m-0"></div> -->
      <!-- <p class="p-4">Select Country:</p> -->
      <div class="mr-8 ml-4">
        <div class="relative">
          <button
            @click="searchVisible"
            class="bg-teal  rounded text-white shadow-inner w-full"
          >
            <span class="float-left pr-2"> Search By Lesson Title </span>
            <svg 
              
              class="h-4  float-right fill-current text-white pt-1"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 129 129"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              enable-background="new 0 0 129 129"
            >
              <g>
                <path
                  d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"
                />
              </g>
            </svg>
          </button>
          <div
            class="rounded shadow-md bg-[#aaa] my-2 mr-5 fixed pin-t overflow-y-scroll max-h-40"
            v-if="showDrop"
          >
            <input
              placeholder="Search PDFs"
              class="px-2  border-2 rounded h-8 w-full"
              @change="changingSearch"
              @keyup="changingSearch"
            /><br />
            <ul class="list-reset" v-for="i in baseList">
              <li>
                <p
                  class="p-1 block text-black hover:bg-grey-light cursor-pointer"
                >
                  {{ i }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-for="i in allPDFList">
      <button
        :id="`button_${i.title}`"
        data-dropdown-toggle="dropdown"
        class="w-full text-white bg-gray-1200 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-black-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
        type="button"
        @click="(event)=>dropdownClick(event)"
      >
        {{ i.title }}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <svg
        :id="`svg_${i.title}`"
          class="w-10 h-4 ml-16 float-right"
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
        v-if="i.visible"
        :id="`dropdown_${i.title}`"
        class="w-12 z-10 bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-700"
        style="width: 100%"
       
      >
        <ul
          class="w-full py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
          
        >
          <li v-for="j in i['SComp']">
            <div v-if="!activeSecondaryMenuKey" class="flex items-center mb-4">
              <div>
                <input
                  :id="`${i.title}_${j.t}`"
                  type="checkbox"
                  value=""
                  class="h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  @click="checked"
                />
                <label
                  for="default-checkbox"
                  class="w-full ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >{{ j["t"] }}</label
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </ul>
</template>
