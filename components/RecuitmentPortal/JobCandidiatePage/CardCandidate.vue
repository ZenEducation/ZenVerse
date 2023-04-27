<template>
  <!-- candidate card start  -->
  <div
    class="group relative p-6 rounded-md shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 transition duration-500 text-center"
  >
    <div class="mt-8">
      <!-- image -->
      <img
        :src="item.image"
        class="rounded-full shadow-md h-20 w-20 mx-auto block"
        :alt="item.name"
      />
      <!-- name -->
      <div class="mt-3">
        <a
          :href="item.profileLink"
          class="text-lg font-medium hover:text-indigo-600 transition duration-500 block"
        >
          {{ item.name }}
        </a>
        <!-- description -->
        <span class="block text-sm text-slate-400">
          {{ item.description }}
        </span>
      </div>
    </div>

    <div class="flex items-center justify-around my-4">
      <!-- location -->
      <span class="text-slate-400 flex items-center justify-center">
        <BaseIcon
          :path="mdiMapMarker"
          class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
          size="20"
        />
        {{ item.location }}
      </span>
      <!-- price -->
      <span class="text-slate-400 flex items-center justify-center">
        <BaseIcon
          :path="mdiCurrencyUsd"
          class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
          size="20"
        />
        {{ item.price }}</span
      >
    </div>
    <!-- skills -->
    <a
      href=""
      class="bg-gray-100 dark:bg-gray-800 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1"
      v-for="(skill, idx) in item.skills"
      :key="idx"
      >{{ skill }}</a
    >

    <!-- view profile  -->
    <div class="mt-4 w-full">
      <a
        :href="item.profileLink"
        class="btn bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md transition duration-500 ease-in-out text-sm font-medium px-4 py-3 block"
        >View Profile</a
      >
    </div>
    <!-- featured -->
    <div class="absolute top-6 ltr:left-6 rtl:right-6" v-if="item.featured">
      <span
        class="bg-indigo-600/5 text-indigo-600 text-sm font-medium px-4 py-1 rounded-full h-[28px]"
        >Featured</span
      >
    </div>
    <!-- bookmark  -->
    <div class="absolute top-6 right-6">
      <a
        href=""
        class="btn btn-icon btn-sm bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700 rounded-full p-1 flex items-center justify-center border-2 dark:border-gray-700 dark:hover:border-gray-700"
      >
        <BaseIcon :path="mdiBookmarkOutline" size="17" class="gray" />
      </a>
    </div>
  </div>
  <!-- end candidate card -->
</template>

<script setup>
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import { mdiBookmarkOutline, mdiMapMarker, mdiCurrencyUsd } from "@mdi/js";
import { defineProps } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
