<script setup>
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";

import {
mdiFullscreen,
} from "@mdi/js";

const isFullScreen = ref(false)

const toggleFullScreen = ()=>{
  isFullScreen.value = !isFullScreen.value
}

</script>

<template>
  <section class="carrier sec pl-60 max-lg:pl-0  h-full w-full bg-red-50 " :class="{'absolute-section' : isFullScreen}"  >
    <div class=" h-8 bg-blue-400 w-full px-4 flex justify-between">
      <h1>Getting Started</h1>
      <BaseIcon
      @click="toggleFullScreen"
      :path="mdiFullscreen"
      class="cursor-pointer"
      size="30"
    />
    </div>
    <slot />
    <div class="bottom-bar fixed bottom-0 h-14 bg-blue-400 flex justify-center items-center " :class="{'absolute-bottombar' : isFullScreen}" >
      <BaseButton
      label="Mark Completed and Next"
      type="login"
      color="info"
    />
    </div>
  </section>
</template>

<style>
.carrier{
   height: calc(100vh - 7rem);
}
.bottom-bar{
  width: 100%;
}
@media screen and (min-width: 1024px) {
  .bottom-bar{
    width: calc(100% - 15rem);
  }
}

.absolute-section{
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100vh - 3.5rem );
  width: calc(100vw);
  z-index: 100;
  margin: 0;
  padding: 0;

}
.absolute-bottombar{
  width: 100%;
}




</style>