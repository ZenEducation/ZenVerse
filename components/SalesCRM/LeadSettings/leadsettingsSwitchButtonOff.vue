<template>
    <form action="" method="post">
      <Switch
        name="terms-of-service"
        :defaultChecked="false"
        as="template"
        v-slot="{ checked }"
      >
        <button
          :class="checked ? 'bg-cyan-600' : 'bg-orange-700'"
          class="relative inline-flex h-6 w-11 items-center rounded-full"
        >
          <span class="sr-only">Enable notifications</span>
          <span
            :class="checked ? 'translate-x-6' : 'translate-x-1'"
            class="inline-block h-4 w-4 transform rounded-full bg-white transition"
          />
        </button>
      </Switch>
      <button></button>
    </form>
    <form></form>
  </template>
  
  <script setup>
    import { Switch } from '@headlessui/vue'
  </script>