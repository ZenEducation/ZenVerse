<script setup>
import { computed, useSlots } from "vue";


defineProps({
  label: {
    type: String,
    default: null,
  },
  labelFor: {
    type: String,
    default: null,
  },
  help: {
    type: String,
    default: null,
  },
  error:{
    type: String,
    default: null,
  },
  route : {
    type: Object,
    default: null 
  }
});

const slots = useSlots();

const wrapperClass = computed(() => {
  const base = [];
  const slotsLength = slots.default().length;

  if (slotsLength > 1) {
    base.push("grid grid-cols-1 gap-3");
  }

  if (slotsLength === 2) {
    base.push("md:grid-cols-2");
  }

  return base;
});
</script>

<template>
  <div class="mb-6 last:mb-0">
    <label v-if="label" :for="labelFor" class="block mb-2 font-bold">{{
      label
    }}</label>
    <div :class="wrapperClass">
      <slot />
    </div>
    <div v-if="error" class="mt-1 text-xs text-red-500 dark:text-slate-400">
      {{ error }}
    </div>
    <div v-else-if="help" class="mt-1 text-xs text-gray-500 dark:text-slate-400">
      {{ help }}
    </div>
    <NuxtLink class="text-xs text-blue-700 underline"  :to="route.to"  v-if="route">
      {{ route.title }}
    </NuxtLink>
  </div>
</template>
