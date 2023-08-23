<script setup>
import BaseButton from "~~/components/Buttons/BaseButton.vue";
import PremFormField from "@/components/Forms/FormField.vue";

import { onMounted } from 'vue';
import { mdiFormatBold, mdiFormatItalic, mdiStickerEmoji, mdiPound, mdiAt } from "@mdi/js";
import { ref } from 'vue';
import data from 'emoji-mart-vue-fast/data/all.json';
import 'emoji-mart-vue-fast/css/emoji-mart.css';
import { Picker, EmojiIndex } from 'emoji-mart-vue-fast/src';

onMounted(() => {
    document.execCommand('defaultParagraphSeparator', false, 'p');
});

function applyBold() {
    document.execCommand('bold');
}

function applyItalic() {
    document.execCommand('italic');
}

let emojiIndex = new EmojiIndex(data);
const emojisOutput = ref('');


const isEmojiClicked = ref(false);
function applyEmoji(){
    console.log("click");
   isEmojiClicked.value= !isEmojiClicked.value;
}

const showEmoji = (emoji) => {
    const editor = document.querySelector('.text-output');
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const emojiSpan = document.createElement('span');
    emojiSpan.innerHTML = emoji.native;
    range.insertNode(emojiSpan);
    const newRange = document.createRange();
    newRange.setStartAfter(emojiSpan);
    newRange.setEndAfter(emojiSpan);
    selection.removeAllRanges();
    selection.addRange(newRange);
    editor.focus();
};

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
</script>

<template>
    <div class="outerContainer">
        <div @input="onInput" v-html="innerValue" :contenteditable="true"
            class="text-output p-4 border-none bg-blue-50 dark:bg-slate-800" placeholder />
        <Picker :data="emojiIndex" v-if="isEmojiClicked" set="twitter" @select="showEmoji" class="emoji-picker" />
        <PremFormField class="mt-2">
            <div class="flex place-content-end flex-wrap">
                <BaseButton @click="applyBold"
                    class="border-2 border-gray-300 rounded-lg px-3 py-1 mb-3 mr-3 dark:bg-slate-900 hover:border-green-300;"
                    color="" :icon="mdiFormatBold" iconSize="30px" />
                <BaseButton @click="applyItalic"
                    class="border-2 border-gray-300 rounded-lg px-3 py-1 mb-3 mr-3 dark:bg-slate-900 hover:border-green-300;"
                    color="" :icon="mdiFormatItalic" iconSize="30px" />
                <BaseButton @click="applyEmoji"
                    class="border-2 border-gray-300 rounded-lg px-3 py-1 mb-3 mr-3 dark:bg-slate-900 hover:border-green-300;"
                    color="" :icon="mdiStickerEmoji" iconSize="30px" />
                <BaseButton @click="insertCharacter('#')"
                    class="border-2 border-gray-300 rounded-lg px-3 py-1 mb-3 mr-3 dark:bg-slate-900 hover:border-green-300;"
                    color="" :icon="mdiPound" iconSize="30px" />
                <BaseButton @click="insertCharacter('@')"
                    class="border-2 border-gray-300 rounded-lg px-3 py-1 mb-3 mr-3 dark:bg-slate-900 hover:border-green-300;"
                    color="" :icon="mdiAt" iconSize="30px" />
            </div>
        </PremFormField>
    </div>
</template>

<style scoped>
.text-output {
    height: 150px;
    width: 100%;
}

.text-output h1 {
    @apply text-2xl font-bold pb-4;
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

.emoji-picker{
    position: absolute;
    top: 100%;
    z-index: 99;
}

.outerContainer{
    position: relative;
}
</style>