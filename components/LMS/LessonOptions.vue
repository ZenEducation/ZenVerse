<script setup>
import { computed } from "vue";
import CardBox from "@/components/Cards/CardBox.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import IconRounded from "@/components/Display/IconRounded.vue";
import {
    mdiVideo,
    mdiNoteText,
    mdiFilePdfBox,
    mdiHeadphones, 
    mdiDownload,
    mdiMovie, 
    mdiPresentation,
    mdiTelevision,
    mdiCommentQuestionOutline,
    mdiAccountCheck,
    mdiCalendarText,
    mdiFilePlus,

 } from "@mdi/js";

const props = defineProps({
    heading : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    }
})

const icons = computed(() => {
    switch(props.heading) {
        case "Video":
            return {
                icon: mdiVideo,
                type: "success"
            }
        case "PDF":
            return {
                icon: mdiFilePdfBox,
                type: "success"
            }
        case "Text":
            return {
                icon: mdiNoteText,
                type: "info"
            }
        case "Audio":
            return {
                icon: mdiHeadphones,
                type: "info"
            }
        case "Download":
            return {
                icon: mdiDownload,
                type: "warning"
            }
        case "Presentation": 
            return {
                icon: mdiPresentation,
                type: "warning"
            }
        case "Multimedia":
            return {
                icon: mdiMovie,
                type: "danger"
            }
        case "Live":
            return {
                icon: mdiTelevision,
                type: "danger"
            }
        case "Quiz":
            return {
                icon: mdiCommentQuestionOutline,
                type: "success"
            }
        case "Survey":
            return {
                icon: mdiAccountCheck,
                type:"success"
            }
        case "Assignment":
            return {
                icon: mdiFilePlus,
                type:"info"
            }
        case "Exam":
            return {
                icon: mdiCalendarText,
                type:"info"
            }
    }
})
</script>

<template>
    <CardBox class="mb-6" is-hoverable>
        <BaseLevel>
      <BaseLevel type="justify-start">
        <IconRounded :icon="icons.icon" :color="icons.type" class="md:mr-6" />
        <div class="text-center space-y-1 md:text-left md:mr-6">
        <h4 class="text-xl">{{ heading }}</h4> 
        <p class="text-gray-500 dark:text-slate-400">
            <b>{{ description }}</b>
          </p>
          </div>
    </BaseLevel>
    </BaseLevel>
  </CardBox>
</template>