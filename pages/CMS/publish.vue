<script setup>
import { computed } from "vue";
import { mdiForwardburger, mdiBackburger, mdiMenu } from "@mdi/js";
import { useRouter } from "vue-router";
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
    router.push("/auth/login");
  }
};

</script>

<template>
  <div>
    <div
      :class="{
        dark: styleStore.darkMode,
        'overflow-hidden lg:overflow-visible':
          layoutStore.isAsideMobileExpanded,
      }"
    >
      <div
        :class="[
          layoutAsidePadding,
          { 'ml-60 lg:ml-0': layoutStore.isAsideMobileExpanded },
        ]"
        class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"
      >
        <!-- The  Navbar -->
        <NavBar
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
        </NavBar>
        <!-- The  Premium Aside Menu -->
        <PremAsideMenu :menu="menuAside" @menu-click="menuClick" />

        <header class="flex items-center justify-between mb-5 pl-10 pr-10">
  <h2 class="text-3xl font-bold">Publish Content</h2>
  <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 pr-4">Save</button>
</header>

<hr class="border-gray-600 border-t-4 my-4">

<div class="flex items-center mb-5 pl-10 pr-10">
  <label class="mr-2">Where to Publish:</label>
</div>
<div class="flex items-center mb-5 pl-10 pr-10">
  <div class="mr-24">
    <input type="checkbox" id="facebook" name="facebook" class="mr-1">
    <label for="facebook">Facebook</label>
  </div>
  <div class="mr-24">
    <input type="checkbox" id="instagram" name="instagram" class="mr-1">
    <label for="instagram">Instagram</label>
  </div>
  <div class="mr-24">
    <input type="checkbox" id="linkedin" name="linkedin" class="mr-1">
    <label for="linkedin">LinkedIn</label>
  </div>
  <div class="mr-24">
    <input type="checkbox" id="telegram" name="telegram" class="mr-1">
    <label for="telegram">Telegram</label>
  </div>

<div class="flex justify-end pr-10 mt-1">
  <button id="publishButton" class="px-8 py-3 bg-green-500 text-white rounded-md hover:bg-green-500" style="margin-left: 200px;">Publish</button>
</div>
</div>
<div class="flex items-center mb-5 pl-10 pr-10">
  <div class="mr-24">
    <input type="checkbox" id="instagram" name="instagram" class="mr-1">
    <label for="instagram">Instagram</label>
  </div>
  <div class="mr-24">
    <input type="checkbox" id="telegram" name="telegram" class="mr-1">
    <label for="telegram">Telegram</label>
  </div>
  <div class="mr-24">
    <input type="checkbox" id="telegram" name="telegram" class="mr-1">
    <label for="telegram">Telegram</label>
  </div>
  <div class="mr-24">
    <input type="checkbox" id="telegram" name="telegram" class="mr-1">
    <label for="telegram">Telegram</label>
  </div>
</div>

<div class="flex items-center mb-5 pl-10 pr-10">
  <label for="publishDate" style="margin-right: 10px;">Publish Date:</label>
  <input type="date" id="publishDate" name="publishDate" class="px-5 py-3 border rounded-md mr-1" placeholder="Select a Publish Date">
</div>

<div class="flex items-center mb-5 pl-12 pr-12">
  <label class="mr-3 font-bold">Content Details:</label>
</div>
<hr class="pl-2 pr-12 mb-6">
<div class="pl-14">
  <!-- Content details go here -->
  <div>
   <div  class="mb-2" >
  <label for="title">Title:</label>
</div>
<div class="mb-6">
  <input type="text" id="title" name="title"   placeholder="OG title" style="width: 900px; ">
</div>
<div class="flex mb-3">
  <div>
    <label for="type" style="margin-right: 10px;">Type:</label>
    <select id="type" name="type">
      <option value="option1">Video</option>
      <option value="option2">Audio</option>
      <option value="option3">Image</option>
    </select>
  </div>
   <div style="margin-left: 60px;">
    <label for="status" style="margin-right: 10px;">Status:</label>
    <input type="text" id="status" name="status" placeholder="Initial approval pending" style="padding-right: 8px;">
  </div>
  <div style="margin-left: 80px;">
    <label for="role" style="margin-right: 10px;">Role:</label>
    <select id="role" name="role">
      <option value="option1">Developer</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  </div>
</div>
 </div>
</div>

<div class="mb-3">
  <div style="margin-left: 60px; margin-top: 22px;">
      <label for="content">Content:</label>
    </div>
  </div>
  <div style="display: inline-block; border: 1px solid #000; width: 750px; padding: 20px; margin-left: 60px; margin-top: 2px;">
  <div style="position: relative; padding-top: 70%; margin-left: 120px;">
    <!-- Insert your video display code here -->
    <iframe src="https://github.com/ZenEducation/ZenVerse/blob/feat/Publishpage/Shubhom/assets/svg/cloud.mp4" style="position: absolute; top: 0; left: 0; width: 80%; height: 80%;" frameborder="0" allowfullscreen></iframe>
    <div style="position: absolute; bottom: 0; background-color:whitesmoke; width: 80%; padding: 10px; color: black;">
      <p>Extended text <b>help</b> you to build rich text quickly . any special text you will have with extended text .
        <b>Text can be bold</b> <I>Italic</I> .<br> It my pleasure to invite you to join <span style="color: rgb(252, 252, 19);">FlutterCandies</span> if you want to imperove flutter.
        <br>
        <br>
        if you meet with any problem ,please let know <span style="color: rgb(100, 186, 220);">@zmtzawqlp</span>.  <b>#HashtagisBold</b></p>
    </div>
  </div>
</div>

<div style="display: flex; align-items: center; margin-top: 30px; margin-left: 60px;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjIUY-p1m1Pepco3XKOvX5p4ABMyv6A1lSCORbsVlDd46G9y8Vv_ilA9IwQrtEDanz6go&usqp=CAU" alt="Avatar" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 10px;">
  <div>
    <span style="font-weight: bold;">John Doe</span>
    <br>
    <textarea placeholder="Leave your feedback..." style="width: 600px; height: 40px; margin-top: 10px;"></textarea>
  </div>
  <span style="margin-left: 10px;">TimeStamp</span>
</div>

<div style="display: flex; align-items: center; margin-top: 30px; margin-left: 60px;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjIUY-p1m1Pepco3XKOvX5p4ABMyv6A1lSCORbsVlDd46G9y8Vv_ilA9IwQrtEDanz6go&usqp=CAU" alt="Avatar" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 10px;">
  <div>
    <span style="font-weight: bold;">John Doe</span>
    <br>
    <p style="width: 500px; height: 40px;">This is an older feedback. In partnership with Duton Books, Amazon Literary Partnership, and Feminist Press, Girls. Write now is thrilled to announce our newest publication, Girls Write Now on the Other Side of Everything: 2023 Anthology</p>
    </div>
    <span style="margin-left: 10px;">Date: 12 July 2023 12:11 am</span>
</div>

<div id="feedback-section" style="margin-top: 100px; margin-left: 60px;"></div>
<slot />


           <!-- FooterBar-->
        <FooterBar>
          <a href="#" target="_blank" class="text-blue-600"> Photon Ecademy</a>
        </FooterBar>
      </div>
    </div>
  </div>
</template>


<style scoped>


</style>