<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { ref, computed } from "vue";

const props = defineProps({
    modelValue: {
        type: String,
        default: "",
    },
    text: {
        type: String,
        default: "",
    },
    styleP: {
        type: String,
        default: "",
    },
});

const quillEditorRef = ref(null);

const toolbarOptions = [

    ["bold", "italic",],

];

const emit = defineEmits(["update:modelValue", "update:text"]);

const data = ref("");

watchEffect(() => {
    data.value = props.modelValue;
});

watchEffect(() => {
    emit("update:modelValue", data.value);
    if (quillEditorRef?.value?.getText()) {

        emit("update:text", quillEditorRef?.value?.getText());
    }
});

console.log(props.modelValue, " : model");
</script>

<template>
    <div>
        <QuillEditor style="min-height: 30vh" theme="snow" :toolbar="toolbarOptions" content-type="html"
            v-model:content="data" ref="quillEditorRef" :style="props.styleP" />
    </div>
</template>