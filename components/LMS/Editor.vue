<script setup>
// import Vue from "vue";
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useMainStore } from "@/stores/main";

import VueQuillEditor from 'vue-quill-editor'
import { quillEditor } from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

const props = defineProps({
    modelValue: {
    type: String,
    default: ""
  },
  Editors:Boolean,
 
});

const emit = defineEmits(["update:modelValue", "setRef", "togglePasswordVisibility"]);
const toggle = () => {
  emit("togglePasswordVisibility")
}


const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});

const computedType = computed(() => (props.options ? "select" : props.type));



const mainStore = useMainStore();



const editor = ref(null)
    const content = ref('')

   

</script>

<template>
  <div class="relative w-full" >
    <div>Editor</div>
  <!-- <quill-editor v-model="computedValue" ref="editor" /> -->
  </div>
</template>
