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
    router.push("/auth/login");
  }

  if (item.isPublish) { 
    // Set the value of the "Status" input field to "Published"
    const statusInput = document.getElementById("status");
    if (statusInput) {
      statusInput.value = "Published";
      statusInput.style.color = "green";
      statusInput.style.fontWeight = "bold";
    }
  }
};

</script>

<script>
export default {
  data() {
    return {
      newFeedbackText: '',
      feedbacks: [
      ]
    };
  },
  methods: {
    // Your existing methods
    saveFeedback() {
      // Get the new feedback text and current timestamp
      const newFeedbackText = this.newFeedbackText;
      const timestamp = new Date().toLocaleString();

      // Create a new feedback object
      const newFeedback = {
        text: newFeedbackText,
        timestamp: "Date: " + timestamp
      };

      // Add the new feedback to the feedbacks array
      this.feedbacks.push(newFeedback);

      // Clear the textarea after saving feedback
      this.newFeedbackText = '';
    }
  }
};

// Your existing JavaScript code
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
 <label class="mr-3"><strong>Where to Publish:</strong></label>

</div>
<div style="display:flex;flex-wrap:wrap" class="flex items-center mb-5 pl-10 pr-10">
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
  <div class="mr-28">
    <input type="checkbox" id="facebook" name="facebook" class="mr-1">
    <label for="facebook">Facebook</label>
  </div>
<br>
<br>
</div>
<div style="display:flex;flex-wrap:wrap" class="flex items-center mb-9 pl-10 pr-10">
  <div class="mr-24">
    <input type="checkbox" id="instagram" name="instagram" class="mr-1">
    <label for="instagram">Instagram</label>
  </div>
  <div class="mr-24">
    <input type="checkbox" id="telegram" name="telegram" class="mr-1">
    <label for="telegram">Telegram</label>
  </div>
  <div class="mr-24">
    <input type="checkbox" id="instagram" name="instagram" class="mr-1">
    <label for="instagram">Instagram</label>
  </div>
  <div class="mr-24">
    <input type="checkbox" id="instagram" name="instagram" class="mr-1">
    <label for="instagram">Instagram</label>
  </div>
</div>

<div class="flex justify-between mb-8 pl-11 pr-10"> <!-- Added flex and justify-between for horizontal alignment -->
  <div class="flex items-center"> <!-- Added flex and items-center to align elements vertically -->
    <label for="publishDate" style="margin-right: 10px;">Publish Date:</label>
    <input type="date" id="publishDate" name="publishDate" class="px-5 py-3 border rounded-md mr-1" placeholder="Select a Publish Date">
  </div>
  <div>
    <button
      id="publishButton"
      class="px-8 py-3 bg-green-500 text-white rounded-md hover:bg-green-500"
      style="align-items: flex-end"
      @click="() => menuClick(event, { isPublish: true })"
    >
      Publish
    </button>
  </div>
</div>

<div class="flex items-center mb-5 pl-12 pr-12">
  <label class="mr-3 font-bold">Content Details:</label>
</div>
<hr class="pl-2 pr-6 mb-1">
<div style="padding:3rem">
  <!-- Content details go here -->
  <div>
   <div  class="mb-2" >
  <label for="title">Title:</label>
</div>
<div>
  <input type="text" id="title" name="title"   placeholder="OG title" style="max-width: 800px; width:100%">
</div>
<div style="display: flex; justify-content: space-between" class="flex mb-3">
  <div style="padding: 1rem; flex: 1;">
    <label for="type">Type:</label>
    <select id="type" name="type" style="width: 100%;">
      <option value="option1">Video</option>
      <option value="option2">Audio</option>
      <option value="option3">Image</option>
    </select>
  </div>
  <div style="padding: 1rem; flex: 1;">
    <label for="status">Status:</label>
    <input type="text" id="status" name="status" placeholder="Initial approval pending" style="width: 100%;">
  </div>
  <div style="padding: 1rem; flex: 1;">
    <label for="role">Role:</label>
    <select id="role" name="role" style="width: 100%;">
      <option value="option1">Developer</option>
      <option value="option2">Designer</option>
      <option value="option3">Architect</option>
    </select>
  </div>
</div>

 </div>
</div>

<div class="mb-2" style="margin-left: 5%;">
  <label for="content">Content:</label>
</div>
<div style="display: inline-block; border: 1px solid #000; width: 90%; max-width: 750px; padding: 5%; margin-left: 5%;">
  <div style="position: relative; padding-top: 90%; margin-left: 10%;">
    <!-- Insert your video display code here -->
    <iframe src="https://d2of6bhnpl91ni.cloudfront.net/cms/animoto-free-online-video-maker-e8d6870030.mp4" style="position: absolute; top: 0; left: 0; width: 80%; height: 90%;" frameborder="0" allowfullscreen></iframe>
    <div style="position: absolute; bottom: 0; background-color: whitesmoke; width: 80%; padding:4%; color: black;">
      <p>Extended text <b>help</b> you to build rich text quickly. Any special text you will have with extended text.
        <b>Text can be bold</b> <I>Italic</I>.<br> It's my pleasure to invite you to join <span style="color: rgb(252, 252, 19);">FlutterCandies</span> if you want to improve Flutter.
        <br>
        <br>
        if you meet with any problem, please let us know <span style="color: rgb(100, 186, 220);">@zmtzawqlp</span>. <b>#HashtagisBold</b></p>
    </div>
  </div>
</div>


<div style="display: flex; align-items: center; margin-top: 50px; margin-left: 60px;">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjIUY-p1m1Pepco3XKOvX5p4ABMyv6A1lSCORbsVlDd46G9y8Vv_ilA9IwQrtEDanz6go&usqp=CAU"
        alt="Avatar"
        style="width: 40px; height: 40px; border-radius: 50%; margin-right: 10px;"
      >
      <div>
        <span style="font-weight: bold;">John Doe</span>
        <br>
        <textarea
          v-model="newFeedbackText"
          placeholder="Leave your feedback..."
          style="width: 160%; height: 40px; margin-top: 10px;"
        ></textarea>
      </div>
      <button @click="saveFeedback" style="margin-left: 130px;">Save</button>
    </div>

    <!-- Feedback list -->
    <div
      id="feedback-list"
      style="display: flex; flex-direction: column; align-items: flex-start; margin-top: 60px; margin-left: 60px;"
    >
      <div
        v-for="(feedback, index) in feedbacks"
        :key="index"
        style="display: flex; align-items: center; width: 90%; height: 40px; padding: 5px; margin-bottom: 90px;"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjIUY-p1m1Pepco3XKOvX5p4ABMyv6A1lSCORbsVlDd46G9y8Vv_ilA9IwQrtEDanz6go&usqp=CAU"
          alt="Avatar"
          style="width: 40px; height: 40px; border-radius: 60%; margin-right: 10px;"
        >
        <div>
          <span style="font-weight: bold;">John Doe</span>
          <br>
          {{ feedback.text }}
        </div>
        <span style="margin-left: 40px;">{{ feedback.timestamp }}</span>
      </div>
    </div>

    <div id="feedback-section" style="margin-top: 40px; margin-left: 60px;"></div>
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