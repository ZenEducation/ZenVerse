<template>
    <a
    :href="props.deptData.link"
    class="group bg-white dark:bg-slate-900 p-6 rounded shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 border-4 border-white dark:border-slate-900 hover:border-b-indigo-600 dark:hover:border-b-indigo-600 text-center duration-500 ease-in-out"
  >
    <img
      :src="props.deptData.image"
      class="h-16 w-16 mx-auto p-3 rounded-full bg-gray-50 dark:bg-slate-800 shadow-md dark:shadow-gray-800"
      alt=""
    />

    <div class="content mt-3">
      <span
        class="text-lg font-semibold group-hover:text-indigo-600 transition duration-500 block"
        >{{props.deptData.name}}</span
      >

      <span class="text-base text-slate-400 block"
        >
        <BaseIcon :path="mdiMapMarker"/>
        {{props.deptData.location}}</span
      >
    </div>
  </a>
</template>

<script setup>
import { mdiLocationEnter, mdiMapMarker } from '@mdi/js';
import { defineProps } from 'vue';
import BaseIcon from '../Display/BaseIcon.vue';

    const props = defineProps({
        deptData:Object,
  });

</script>

<style lang="scss" scoped>

</style>