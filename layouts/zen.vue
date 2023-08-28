<script setup>
import { computed } from "vue";
import { mdiForwardburger, mdiBackburger, mdiMenu } from "@mdi/js";
import { useRouter } from "vue-router";
import educatorSideBar from "@/configs/profile-menu/educatorSideBar";
import adminSideBar from "@/configs/profile-menu/adminSideBar";
import developerSideBar from "@/configs/profile-menu/developerSideBar";
import educarerSideBar from "@/configs/profile-menu/educarerSideBar";
import guardianSideBar from "@/configs/profile-menu/guardianSideBar";
import studentSideBar from "@/configs/profile-menu/studentSideBar";
import menuAside from "@/configs/menuAside.js";
import menuNavBar from "@/configs/menuNavBar.js";
import { useMainStore } from "@/stores/main.js";
import { useLayoutStore } from "@/stores/layout.js";
import { useStyleStore } from "@/stores/style.js";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import PremAsideMenu from "@/components/Asidemenu/AsideMenu.vue";
import NavBarItemPlain from "@/components/NavBar/NavBarItemPlain.vue";
import FooterBar from "@/components/Footers/FooterBar.vue";
import { useAuthStore } from "@/stores/authStore";

useMainStore().setUser({
  name: "Zenith Physics",
  email: "zenith@physics.com",
  avatar:
    "https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93",
});

const layoutAsidePadding = computed(() =>
  layoutStore.isAsideLgActive ? "lg:pl-20" : "xl:pl-20"
);
let role = "";
if (localStorage.getItem("User-profile")) {
  role = JSON.parse(localStorage.getItem("User-profile")).attributes["custom:role"]
}

const styleStore = useStyleStore();

const layoutStore = useLayoutStore();

const router = useRouter();

const AuthStore = useAuthStore();

// const GraphqlAPIStore = useGraphqlAPIStore();

router.beforeEach(() => {
  layoutStore.isAsideMobileExpanded = false;
});


const menuClick = (event, item) => {
  if (item.isToggleLightDark) {
    styleStore.setDarkMode();
  }

  if (item.isLogout) {
    AuthStore.logout();
    // console.log("Clicked On Logout");
    // router.push("/");
  }
};
</script>

<template>
  <div>
    <div :class="{
      dark: styleStore.darkMode,
      'overflow-hidden lg:overflow-visible':
        layoutStore.isAsideMobileExpanded,
    }">
      <div :class="[
        layoutAsidePadding,
        { 'ml-60 lg:ml-0': layoutStore.isAsideMobileExpanded },
      ]"
        class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
        <!-- The  Navbar -->
        <NavBar :menu="menuNavBar" :class="[
          layoutAsidePadding,
          { 'ml-60 lg:ml-0': layoutStore.isAsideMobileExpanded },
        ]" @menu-click="menuClick">
          <NavBarItemPlain display="flex lg:hidden" @click.prevent="layoutStore.asideMobileToggle()">
            <BaseIcon :path="layoutStore.isAsideMobileExpanded
                ? mdiBackburger
                : mdiForwardburger
              " size="24" />
          </NavBarItemPlain>
          <NavBarItemPlain display="hidden lg:flex xl:hidden" @click.prevent="layoutStore.asideLgToggle()">
            <BaseIcon :path="layoutStore.isAsideLgActive ? mdiBackburger : mdiMenu" size="24" />
          </NavBarItemPlain>
          <NavBarItemPlain use-margin>
            <FormControl placeholder="Search (ctrl+k)" ctrl-k-focus transparent borderless />
          </NavBarItemPlain>
        </NavBar>
        <!-- The  Premium Aside Menu -->

        <PremAsideMenu v-if="role === 'developer'" :menu="developerSideBar" @menu-click="menuClick" />
        <PremAsideMenu v-if="role === 'admin'" :menu="adminSideBar" @menu-click="menuClick" />
        <PremAsideMenu v-if="role === 'educator'" :menu="educatorSideBar" @menu-click="menuClick" />
        <PremAsideMenu v-if="role === 'educarer'" :menu="educarerSideBar" @menu-click="menuClick" />
        <PremAsideMenu v-if="role === 'student'" :menu="studentSideBar" @menu-click="menuClick" />

        <PremAsideMenu v-if="role === 'guardian'" :menu="guardianSideBar" @menu-click="menuClick" />
        <PremAsideMenu
       v-if="role === ''" 
        :menu="menuAside"
        @menu-click="menuClick"
        />

        <!-- <PremAsideMenu :menu="menuAside" @menu-click="menuClick" /> -->
        <slot />
        <!-- FooterBar-->
        <FooterBar>
          <a href="#" target="_blank" class="text-blue-600"> Photon Ecademy</a>
        </FooterBar>
      </div>
    </div>
  </div>
</template>
