<script setup>
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BulkImporterChapter from "./BulkImporterChapter.vue";
import {
  mdiBallot,
  mdiAccount,
  mdiCreditCardOutline,
  mdiFileUploadOutline,
  mdiDragVertical
} from "@mdi/js";
import FormUploadFiles from "@/components/Forms/FormUploadFiles.vue";
import FormControlIcon from "@/components/Forms/FormControlIcon.vue";
defineProps({
  icon: {
    type: String,
    default: null,
  },
  iconRight: {
    type: String,
    default: null,
  },
  h: {
    type: String,
    default: null,
  },
  width:{
    type:String,
    default : "2.5rem"
  },
  widthDrag:{
    type:String,
    default : "1rem"
  },
  deleteHandler:{
    type:Function
  }
});
</script>

<template>
    <div class = 'mb-6 flex items-center '>
      <IconRounded
        v-if="icon && main"
        :icon="icon"
        color="light"
        class="mr-3"
        bg
      />
      <BaseIcon v-else-if="icon" :path="icon"  class="mr-2 cursor-pointer" size="70" />
      <FormUploadFiles
      
                v-model="inputValue"
                :icon-left="mdiAccount"
                help="Title"
              />
    <IconRounded
        v-if="icon && main"
        :icon="icon"
        color="light"
        class="ml-3"
        bg
      />
    <BaseIcon v-else-if="iconRight" :path="iconRight"  @click="deleteHandler()" class="ml-2 cursor-pointer" size="30" />
</div>
</template>

<style>
.chaptername {
  width: "45rem"
}
</style>