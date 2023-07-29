<script setup>
import { ref } from "vue";
import { mdiClose, mdiDotsVertical, mdiMenu } from "@mdi/js";
import { containerMaxW } from "@/configs/config.js";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import NavBarMenuList from "@/components/NavBar/NavBarMenuList.vue";
import NavBarItemPlain from "@/components/NavBar/NavBarItemPlain.vue";

defineProps({
  menu: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["menu-click"]);

const menuClick = (event, item) => {
  emit("menu-click", event, item);
};

const isMenuNavBarActive = ref(false);
</script>

<template>
  <nav
    class="top-0 inset-x-0 fixed bg-black h-16 z-30 transition-position w-screen lg:w-auto"
  >
    <div class="flex lg:items-stretch" :class="containerMaxW">
      <div class="flex flex-1 items-stretch h-16">
        <slot />
      </div>

      <!-- The three dots that appear on a small screen to toggle the TopMenuNavBar -->
      <div class="flex-none items-stretch flex h-14 lg:hidden">
        <NavBarItemPlain
          @click.prevent="isMenuNavBarActive = !isMenuNavBarActive"
        >
          <span :class="spanClass">
            <svg
              viewBox="0 0 24 24"
              :width="24"
              :height="24"
              class="inline-block text-white"
            >
              <path fill="currentColor" :d="isMenuNavBarActive ? mdiClose : mdiMenu" />
            </svg>
          </span>
        </NavBarItemPlain>
      </div>
      <div
        class="max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-black shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none  "
        :class="[isMenuNavBarActive ? 'block' : 'hidden']"
      >
        <NavBarItemLmsStudent
        v-for="(item, index) in menu"
        :key="index"
        :item="item"
        @menu-click="menuClick"
      />
      </div>
    </div>
  </nav>
</template>
