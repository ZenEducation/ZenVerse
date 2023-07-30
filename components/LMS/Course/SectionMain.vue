<script setup>
import { containerMaxW } from "@/configs/config.js";
</script>

<template>
  <section class="section" :class="containerMaxW">
    <slot />
  </section>
</template>

<style>
.section{
   padding-left: 14rem ;
}
@media screen and (max-width: 850px) {
  .section{
   padding-left: 0rem ;
}
}
</style>