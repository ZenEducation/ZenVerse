<template>
  <whiteboard></whiteboard>
</template>

<script>
import Whiteboard from "@/components/Whiteboard/WhiteBoard.vue";
definePageMeta({
  middleware: 'auth-check'
})
export default {
  components: {
    whiteboard: Whiteboard,
  },
};
</script>
