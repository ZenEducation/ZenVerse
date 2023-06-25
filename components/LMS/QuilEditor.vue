<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { ref, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  text:{
    type: String,
    default: "",
  },
});

const quillEditorRef = ref(null);

const toolbarOptions = [
  [{ direction: "rtl" }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ header: 1 }, { header: 2 }],
  [{ color: [] }, { background: [] }],
  ["bold", "italic", "underline", "strike"],
  [{ script: "sub" }, { script: "super" }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ align: [] }],
  [{ indent: "-1" }, { indent: "+1" }],
  ["blockquote"],
  ["image", "video", "link"],
  ["code-block"],
  ["clean"],
];


const emit = defineEmits(["update:modelValue","update:text"]);

const data = ref("");


watchEffect(() => {
  data.value = props.modelValue;
});

watchEffect(() => {
  emit("update:modelValue", data.value);
  emit("update:text" , quillEditorRef.value.getText());
});

console.log(props.modelValue, " : model");


</script>

<template>
  <div>
    <QuillEditor
      style="min-height: 30vh"
      theme="snow"
      :toolbar="toolbarOptions"
      content-type="html"
      v-model:content="data"
      ref="quillEditorRef"
    />
  </div>
</template>
