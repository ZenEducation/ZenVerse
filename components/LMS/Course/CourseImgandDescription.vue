<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiInformationOutline } from "@mdi/js";
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
</script>

<template>
  <div>
    <div class="flex">
    <div class="font-bold mb-2 mr-1">{{heading}}</div>
    <div>    
        <SvgIcon type="mdi" :path="mdiInformationOutline" />
    </div>
    </div>
    <div>{{description}}</div>
  </div>
</template>