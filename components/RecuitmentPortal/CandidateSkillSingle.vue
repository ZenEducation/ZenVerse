<template>
<div class="mt-4">
    <div class="flex justify-between mb-2">
        <span class="text-slate-400">{{props.skillName}}</span>
        <span class="text-slate-400">{{props.num}}%</span>
    </div>
    <div class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
        <div class="bg-indigo-600 h-[6px] rounded-full" :style="width"></div>
    </div>
</div>
</template>

<script setup>
import {
    defineProps
} from 'vue'

const props = defineProps({
    skillName: String,
    num: {
        type: String,
        default:"0"
        
    }
})
const width = "width: "+props.num+"%";

</script>
