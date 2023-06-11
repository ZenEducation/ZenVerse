<template>
  <div id="mySidebar" class="sidebar">
    <a class="closebtn hover:cursor-pointer" @click="closeNav">&times;</a>
    <a href="#">Sample 1</a>
    <a href="#">Sample 2</a>
    <a href="#">Sample 3</a>
    <a href="#">Sample 4</a>
  </div>
  <SettingsSidebar />
  <BackgroundSidebar />

  <div class="w-[5rem] z-50 absolute left-0 bottom-1">
    <div
      class="mb-10 flex flex-col space-y-2 items-center w-[5rem] z-50 relative inset-x-0"
    >
      <button>
        <SvgIcon type="mdi" :path="mdiArrowULeftTop" />
      </button>
      <button>
        <SvgIcon type="mdi" :path="mdiArrowURightTop" />
      </button>
    </div>

    <div id="btn-group" class="flex flex-col space-y-2 items-center">
      <button
        class="btn p-2 rounded-full bg-[#101010cc] hover:bg-[#23232366]"
        @click="openBackgroundSettings"
      >
        <SvgIcon type="mdi" :path="mdiFormatColorFill" />
      </button>
      <button
        class="btn p-2 rounded-full bg-[#101010cc] hover:bg-[#23232366]"
        @click="openToolSettings"
      >
        <SvgIcon type="mdi" :path="mdiTools" />
      </button>
      <button
        class="btn p-2 rounded-full bg-[#101010cc] hover:bg-[#23232366]"
        @click="openNav"
      >
        <SvgIcon type="mdi" :path="mdiMenu" />
      </button>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiTools,
  mdiMenu,
  mdiFormatColorFill,
  mdiArrowULeftTop,
  mdiArrowURightTop,
} from "@mdi/js";
import SettingsSidebar from "@/components/WBFabric/tools/drawing/SettingsSidebar.vue";
import BackgroundSidebar from "@/components/WBFabric/tools/drawing/BackgroundSidebar.vue";
import {
  openNav,
  closeNav,
  openToolSettings,
  openBackgroundSettings,
} from "@/components/WBFabric/tools/drawing/toolSettings";

const btnGroup = ref();

onMounted(() => {
  (function () {
    btnGroup.value = document.getElementById("btn-group");

    const btns = btnGroup.value.getElementsByClassName("btn");

    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active");

        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }

        this.className += " active";
      });
    }
  })();
});
</script>

<style scoped>
.sidebar {
  height: 100vh;
  width: 0;
  position: fixed;
  z-index: 50;
  top: 0;
  right: 0;
  background-color: #111; 
  overflow-x: hidden; 
  padding-top: 60px; 
  transition: 0.5s; 
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#pagetop-container {
  transition: margin-left 0.5s;
  padding: 20px;
}

@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}
.active {
  background-color: rgba(35, 35, 35, 0.4);
}
</style>
