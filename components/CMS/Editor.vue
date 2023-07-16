<script setup>
import BaseButton from "~~/components/Buttons/BaseButton.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import { Marked } from '@ts-stack/markdown';
import TurndownService from 'turndown';
import { ref, onMounted, } from 'vue';

import {
    mdiFormatBold, mdiFormatItalic, mdiStickerEmoji, mdiPound, mdiAt
} from "@mdi/js";


onMounted(() => {
    document.execCommand('defaultParagraphSeparator', false, 'p');
});

function convertToMarkdown(inputValue) {
    const turndown = new TurndownService({
        emDelimiter: '_',
        linkStyle: 'inlined',
        headingStyle: 'atx',
    });

    try {
        if (inputValue instanceof Element) {
            console.error('InputValue is an Element. Skipping the conversion.');
            return;
        }

        const markdown = turndown.turndown(inputValue);
        innerValue.value = inputValue;
        emit('update:value', markdown.trim());
    } catch (error) {
        console.error('Error converting content to Markdown:', error);
        innerValue.value = inputValue;
        emit('update:value', inputValue.trim());
    }
}


function applyBold() {
    document.execCommand('bold');
}


function applyItalic() {
    document.execCommand('italic');
}




function insertCharacter(character) {
    const editor = document.querySelector('.text-output');
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const node = document.createTextNode(character);
    range.insertNode(node);

    const newRange = document.createRange();
    newRange.setStartAfter(node);
    newRange.setEndAfter(node);
    selection.removeAllRanges();
    selection.addRange(newRange);

    editor.focus();
}

// The emit function is automatically available in the script setup.
// Also, `emit("input", ...)` should be replaced with `emit("update:value", ...)`





</script>
<template>
    <div>

        <div @input="onInput" v-html="innerValue" :contenteditable="true"
            class="text-output p-4 border-none bg-blue-50 dark:bg-slate-800" placeholder />









        <PremFormField class="mt-2">
            <div class="flex place-content-end flex-wrap">
                <BaseButton @click="applyBold" class="button dark:bg-slate-900" color="" :icon="mdiFormatBold"
                    iconSize="30px" />
                <BaseButton @click="applyItalic" class="button dark:bg-slate-900" color="" :icon="mdiFormatItalic"
                    iconSize="30px" />
                <BaseButton @click="applyEmoji" class="button dark:bg-slate-900" color="" :icon="mdiStickerEmoji"
                    iconSize="30px" />
                <BaseButton @click="insertCharacter('#')" class="button dark:bg-slate-900" color="" :icon="mdiPound"
                    iconSize="30px" />
                <BaseButton @click="insertCharacter('@')" class="button dark:bg-slate-900" color="" :icon="mdiAt"
                    iconSize="30px" />
            </div>
        </PremFormField>

    </div>
</template>
  



  

  

<style scoped>
.button {
    @apply border-2;
    @apply border-gray-300;
    @apply rounded-lg;
    @apply px-3 py-1;
    @apply mb-3 mr-3;
}

.button:hover {
    @apply border-green-300;
}

.text-output {
    height: 150px;
    width: 100%;
}

.text-output h1 {
    @apply text-2xl;
    @apply font-bold;
    @apply pb-4;
}

.text-output p {
    @apply pb-4;
}

.text-output p {
    @apply pb-4;
}

.text-output ul {
    @apply ml-6;
    @apply list-disc;
}

.text-output ol {
    @apply ml-6;
    @apply list-decimal;
}
</style>