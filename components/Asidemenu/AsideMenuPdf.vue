<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useLayoutStore } from "@/stores/layout.js";
import { useStyleStore } from "@/stores/style.js";
import NavBarItemPlain from "@/components/NavBar/NavBarItemPlain.vue";
import BaseIcon from '@/components/Display/BaseIcon.vue'

import {
  mdiClose,
  mdiChevronRightCircleOutline,
  mdiChevronLeftCircleOutline,
  mdiBackburger,
  mdiForwardburger,
  mdiChevronLeft 
} from "@mdi/js";

import OverlayLayer from "@/components/Asidemenu/OverlayLayer.vue";
import PremAsideMenuLayer from "@/components/Asidemenu/AsideMenuPdfLayer.vue";

defineProps({
  menu: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["menu-click"]);

const layoutStore = useLayoutStore();
const styleStore = useStyleStore();
const isPrimaryMenuCompact = ref(true);

const secondaryMenuItem = ref(null);
const handleDashboard = () => {
  router.push("/dashboard")
}
const overlayLayerDisplayType = computed(() => {
  if (secondaryMenuItem.value) {
    return "flex";
  }

  if (!isPrimaryMenuCompact.value) {
    return "hidden lg:flex";
  }

  return "hidden";
});

const closeSecondaryMenu = () => {
  secondaryMenuItem.value = null;
};

const menuClickPrimaryMenu = (event, item) => {
  emit("menu-click", event, item);

  if (item.menu) {
    isPrimaryMenuCompact.value = false;
  }

  if (item.menuSecondary) {
    if (secondaryMenuItem.value && item.key === secondaryMenuItem.value.key) {
      closeSecondaryMenu();
    } else {
      secondaryMenuItem.value = item;
    }
  }
};

const menuClickSecondaryMenu = (event, item) => {
  emit("menu-click", event, item);
};

const overlayClick = () => {
  if (secondaryMenuItem.value) {
    closeSecondaryMenu();
  } else if (!isPrimaryMenuCompact.value) {
    isPrimaryMenuCompact.value = true;
  }
};

window.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    (secondaryMenuItem.value || !isPrimaryMenuCompact.value)
  ) {
    overlayClick();
  }
});

const router = useRouter();

router.afterEach(() => {
  isPrimaryMenuCompact.value = true;
});

const expandCollapseItem = computed(() => ({
  label: isPrimaryMenuCompact.value ? "Exapand" : "Collapse",
  icon: isPrimaryMenuCompact.value
    ? mdiChevronRightCircleOutline
    : mdiChevronLeftCircleOutline,
  color: "",
}));
</script>

<template>
  <PremAsideMenuLayer
    
    :class="[
      layoutStore.isAsideMobileExpanded ? 'left-0' : '-left-80 lg:left-0',
      isPrimaryMenuCompact ? 'lg-w-80' : 'lg-w-80',
      { 'lg:flex xl:flex': !layoutStore.isAsideLgActive },
    ]"
    :is-compact="isPrimaryMenuCompact"
    :z-index="secondaryMenuItem ? 'z-40 md:z-50' : 'z-50'"
    :active-secondary-menu-key="secondaryMenuItem?.key"
    @menu-click="menuClickPrimaryMenu"
  >
    <div class="flex-1 flex px-3	pt-1 items-center justify-between">
   
      <img src="@/assets/img/PeLogo.png" class="h-7 mx-auto" alt="">
    
      <div
      display="flex"
      class="lg:hidden"
      @click.prevent="layoutStore.asideMobileToggle()"
    >
      <BaseIcon
        :path="
          layoutStore.isAsideMobileExpanded
            ? mdiBackburger
            : mdiForwardburger
        "
        size="24"
      />
    </div>
    </div>
  

  </PremAsideMenuLayer>


  <OverlayLayer
    :type="overlayLayerDisplayType"
    z-index="z-40"
    @overlay-click="overlayClick"
  />
</template>
