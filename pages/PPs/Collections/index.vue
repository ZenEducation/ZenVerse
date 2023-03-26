<script setup>
definePageMeta({
  middleware: ["route-check"],
});
</script>

<template>
  <div>
    <p>{{ $route.params }}</p>
  </div>
</template>
