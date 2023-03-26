<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import menuAsideFabric from "@/configs/menuAsideFabric";
import { useMainStore } from "@/stores/main.js";
import { useLayoutStore } from "@/stores/layout.js";
import { useStyleStore } from "@/stores/style.js";
import FabricAsideMenu from "@/components/Asidemenu/FabricAsideMenu.vue";
import FabricExtraOptions from "@/components/Asidemenu/FabricExtraOptions.vue";
import { useAuthStore } from "@/stores/authStore";
import { useWBFabric } from "@/stores/wbFabric";
import Modal from "../components/WBFabric/utils/Modal.vue";
import {
  renderNewOptions, discardSelection,
  multipleSelect,
  group,
  unGroup,
  Copy,
  Paste,
  Edit,
  renderSolarSystem
} from "~~/components/WBFabric/utils/utilitySettings";
import {
  selectPencil,
  selectCursor,
  selectEraser,
  selectHighlighter,
} from "@/components/WBFabric/tools/drawing/toolSettings";

useMainStore().setUser({
  name: "Zenith Physics",
  email: "zenith@physics.com",
  avatar:
    "https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93",
});

const layoutAsidePadding = computed(() =>
  layoutStore.isAsideLgActive ? "lg:pl-20" : "xl:pl-20"
);

const styleStore = useStyleStore();
const layoutStore = useLayoutStore();
const fabricStore = useWBFabric();
const router = useRouter();
const AuthStore = useAuthStore();

router.beforeEach(() => {
  layoutStore.isAsideMobileExpanded = false;
});

useHead({
  title: "Whiteboard",
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.3.122/build/pdf.min.js",
      defer: true,
      type: "module",
      crossorigin: "anonymous",
    },
  ],
});

const menuClick = (event, item) => {
  // console.log("Event:", event);
  // console.log("Item:", item);

  if (item.isToggleLightDark) {
    styleStore.setDarkMode();
  }

  if (item.isLogout) {
    AuthStore.logout();
    // console.log("Clicked On Logout");
    router.push("/auth/login");
  }

  switch (item.id) {
    case 1:
      selectCursor();
      break;

    case 2:
      selectPencil();
      break;

    case 3:
      selectHighlighter();
      break;

    case 4:
      fabricStore.toggleModal();
      break;

    case 5:
      selectEraser();
      break;

    case 6:
      console.log("id", 6);
      break;

    case 7:
      renderNewOptions();
      break;

    case 8:
      Copy();
      break;

    case 9:
      Paste();
      break;

    case 10:
      discardSelection();
      break;

    case 11:
      group();
      break;

    case 12:
      unGroup();
      break;

    case 13:
      Edit();
      break;

    case 14:
      renderSolarSystem();
      break;


    default:
  }
};
</script>

<template>
  <div>
    <div
      id="pagetop-container"
      :class="{
      dark: styleStore.darkMode,
      'lg:overflow-visible': layoutStore.isAsideMobileExpanded,
    }"
      class="overflow-hidden"
    >
      <div
        :class="[
        layoutAsidePadding,
        { 'ml-60 lg:ml-0': layoutStore.isAsideMobileExpanded },
      ]"
        class="relative pt-14 min-h-screen w-screen transition-position lg:w-screen bg-gray-50 dark:bg-slate-800 dark:text-slate-100"
      >
        <!-- The  Navbar -->
        <!-- <NavBar
                      :menu="menuNavBar"
                      :class="[
                        layoutAsidePadding,
                        { 'ml-60 lg:ml-0': layoutStore.isAsideMobileExpanded },
                      ]"
                      @menu-click="menuClick"
                    >
                      <NavBarItemPlain
                        display="flex lg:hidden"
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
                      </NavBarItemPlain>
                      <NavBarItemPlain
                        display="hidden lg:flex xl:hidden"
                        @click.prevent="layoutStore.asideLgToggle()"
                      >
                        <BaseIcon
                          :path="layoutStore.isAsideLgActive ? mdiBackburger : mdiMenu"
                          size="24"
                        />
                      </NavBarItemPlain>
                      <NavBarItemPlain use-margin>
                        <FormControl
                          placeholder="Search (ctrl+k)"
                          ctrl-k-focus
                          transparent
                          borderless
                        />
                      </NavBarItemPlain>
                    </NavBar> -->
        <!-- The  Premium Aside Menu -->
        <FabricAsideMenu :menu="menuAsideFabric" @menu-click="menuClick" />

        <FabricExtraOptions />

        <Teleport to="body">
          <!-- use the modal component, pass in the prop -->
          <modal :show="fabricStore.showModal">
            <template #header>
              <h3>Import PDF</h3>
            </template>
            <template #body>
              <div>
                <input id="input-pdf" type="file" accept="application/pdf" />
              </div>
              <br />
              <button
                class="modal-default-button"
                @click="fabricStore.toggleModal"
              >
                Cancel
              </button>
            </template>
          </modal>
        </Teleport>
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.modal-default-button {
  margin: auto;
}
</style>
