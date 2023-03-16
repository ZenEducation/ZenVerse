<template>
    <div>
      <SidebarPanel v-if="getSidebarStatus"/>
      <MinimizedSidebarPanel v-else/>
    </div>
</template>
<script setup>
import SidebarPanel from './SidebarPanel.vue';
import MinimizedSidebarPanel from './MinimizedSidebarPanel.vue';
import { useChatStore } from '@/stores/chat';
import { storeToRefs } from 'pinia'

const store = useChatStore()
const { getSidebarStatus } = storeToRefs(store)

</script>
