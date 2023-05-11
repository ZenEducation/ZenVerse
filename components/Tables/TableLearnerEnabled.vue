<script setup>
import { ref, watch } from "vue";

defineProps({
  type: {
    type: String,
    default: "td",
  },
  checked: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <component :is="type" class="lg:w-1">
    <label class="checkbox">
      <input :checked="checked" type="checkbox" :disabled="true" />
      <span class="check" />
    </label>
  </component>
</template>
