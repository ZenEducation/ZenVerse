<template>
    <div>
        <div class="flex relative">
            <div class="relative" :class="Collapse ? 'w-20' : 'w-72'">
                <div class="h-screen dark:bg-[#212838] border border-black duration-200 fixed">
                    <div class="w-full h-20 bg-white py-3 dark:bg-black flex justify-center items-center">
                        <img src="@/assets/img/PeLogo.png" class="h-full" alt="" />
                    </div>
                    <div class="w-full h-10 bg-[#eee7d7] py-3 dark:bg-[#111828] flex justify-center items-center">
                        <h4 class="font-bold text-black dark:text-white">
                            {{ Collapse ? "CM" : "Content Management" }}
                        </h4>
                    </div>
                    <ul class="p-2 flex flex-col justify-center my-2">
                        <li v-for="(item, index) in menu" :key="index" v-on:click="toggleSubMenu(item.title)"
                            class="text-black dark:text-white flex flex-col items-center justify-center my-2 p-2">
                            <div
                                class="w-full hover:bg-slate-700 hover:text-white hover:cursor-pointer dark:hover:bg-slate-300 dark:hover:text-black p-2">
                                <svg-icon type="mdi" :path="item.path" class="block float-left mr-4"></svg-icon>
                                <span v-if="!Collapse" class="flex justify-between flex-1 select-none">
                                    {{ item.title }}
                                    <svg-icon v-if="item.subM" type="mdi" :path="mdiMenuRight"></svg-icon>
                                </span>
                            </div>
                            <div class="w-full pl-11" :class="openedSubMenu == item.title ? '' : 'hidden'" v-if="!Collapse">
                                <ul v-if="item.subM">

                                    <NuxtLink v-for="(sub, index) in item.subMenu" :to="sub.link"
                                        active-class="bg-slate-700 text-white dark:bg-slate-300 dark:text-black">
                                        <li :key="index" v-on:click="openContent(sub.title, item.title)"
                                            class="w-full hover:bg-slate-700 text-black dark:text-white  hover:text-white hover:cursor-pointer dark:hover:bg-slate-300 dark:hover:text-black p-1"
                                            :class="openedContent == sub.title ? 'text-white bg-slate-700 dark:bg-slate-300 dark:text-black' : 'dark:bg-[#212838]'">
                                            <span v-if="!Collapse"> {{ sub.title }} </span>
                                        </li>
                                    </NuxtLink>
                                </ul>
                            </div>
                        </li>
                    </ul>

                    <div
                        class="w-full h-10 bg-[#eee7d7] py-3 dark:bg-[#111828] flex justify-center items-center absolute bottom-0 right-0">
                        <button v-on:click="Collapse = !Collapse"
                            class="font-bold text-black dark:text-white flex justify-center items-center gap-3 duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" :class="Collapse ? 'rotate-180' : 'rotate-0'" width="32"
                                height="32" viewBox="0 0 32 32">
                                <path fill="currentColor"
                                    d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3zm0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5zm-.72 4.594L9.595 15.28l-.72.72l.72.72l5.687 5.686L16.72 21l-4-4H23v-2H12.72l4-4l-1.44-1.406z" />
                            </svg>
                            <span v-if="!Collapse">Collapse</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center w-full">
                <slot />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, reactive } from "vue";
import {
    mdiMonitor,
    mdiMonitorDashboard,
    mdiAccountGroup,
    mdiLibraryShelves,
    mdiChartLine,
    mdiCog,
    mdiMenuRight,
} from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";


const Collapse = ref(false);
const subMenuCol = ref(true);
const subMenuName = ref("");
const openedSubMenu = ref("");
const openedContent = ref("")

const openContent = (name, supName) => {
    openedContent.value = name
    console.log(supName);
    openedSubMenu.value = supName;

}

const toggleSubMenu = (name) => {
    if (openedSubMenu.value === name) {
        openedSubMenu.value = "";
    } else {
        openedSubMenu.value = name;
        if (subMenuCol.value) {
            subMenuCol.value = false;
        } else {
            subMenuCol.value = true;
            subMenuName.value = name;
        }
    }
};

const menu = reactive([
    { path: mdiMonitor, title: "Home", subM: false },
    {
        path: mdiMonitorDashboard,
        title: "All Pages",
        subM: true,
        subMenu: [
            { title: "All Content", link: "/CMS/allContent" },
            { title: "Approver Dashboard", link: "/CMS/approverDashboard" },
            { title: "Creator Dashboard", link: "/CMS/creatordashboard" },
            { title: "Editor Dashboard", link: "/CMS/editorDashboard" },
        ],
    },
    {
        path: mdiAccountGroup,
        title: "User Management",
        subM: true,
        subMenu: [
            { title: "Admin" },
            { title: "Approver" },
            { title: "Editor" },
            { title: "Creator" },
        ],
    },
    { path: mdiLibraryShelves, title: "Asset Library", subM: false },
    { path: mdiChartLine, title: "Reports", subM: false },
    { path: mdiCog, title: "Settings", subM: false },
]);
</script>

  