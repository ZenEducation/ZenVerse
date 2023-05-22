<script setup>
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";

import {
mdiFullscreen,
} from "@mdi/js";



</script>

<template>
  <section class="carrier sec pl-60 max-lg:pl-0  h-full w-full bg-red-50" >
    <div class=" h-8 bg-blue-400 w-full px-4 flex justify-between">
      <h1>Getting Started</h1>
      <BaseIcon
      :path="mdiFullscreen"
      class="cursor-pointer"
      size="30"
    />
    </div>
    <slot />
    <div class="bottom-bar fixed bottom-0 h-14 bg-blue-400 flex justify-center items-center " >
      <BaseButton
      @click="
        () => handleSubmit()
      "
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




</style>