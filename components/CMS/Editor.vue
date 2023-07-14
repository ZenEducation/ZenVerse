<script setup>
import BaseButton from "~~/components/Buttons/BaseButton.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import { mdiFormatBold, mdiFormatItalic, mdiStickerEmoji
} from "@mdi/js";
</script>
<template>
    <div>
      <div
        @input="onInput"
        v-html="innerValue"
        contenteditable="true"
        class="text-output  p-4 border-none bg-blue-50 dark:bg-slate-800"
        placehoolder
      />
      
        <PremFormField class="mt-2">
        <div class="flex place-content-end flex-wrap">
        <BaseButton @click="applyBold" class="button dark:bg-slate-900" color="" :icon="mdiFormatBold" iconSize="30px"/>
        <BaseButton @click="applyItalic" class="button dark:bg-slate-900" color="" :icon="mdiFormatItalic" iconSize="30px"/>
        <BaseButton @click="applyEmoji" class="button dark:bg-slate-900" color="" :icon="mdiStickerEmoji" iconSize="30px"/>
        </div>
        </PremFormField>
    </div>
</template>
  

  <script>
  import { Marked } from '@ts-stack/markdown'
  import TurndownService from 'turndown'
  
  export default {
    name: "Editor",
    props: ["value"],
    data() {
        return {
            innerValue: Marked.parse(this.value) || "<p><br></p>"
        };
    },
    mounted() {
        document.execCommand("defaultParagraphSeparator", false, "p");
    },
    methods: {
        onInput(event) {
            const turndown = new TurndownService({
                emDelimiter: "_",
                linkStyle: "inlined",
                headingStyle: "atx"
            });
            this.$emit("input", turndown.turndown(event.target.innerHTML));
        },
        applyBold() {
            document.execCommand("bold");
        },
        applyItalic() {
            document.execCommand("italic");
        },
    },
    components: { BaseButton }
}
  </script>
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

.text-output{
  height: 150px
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