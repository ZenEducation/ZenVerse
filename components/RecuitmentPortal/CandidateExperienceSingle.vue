<template>
<div class="flex mt-6">
        <div class="text-slate-400 font-semibold min-w-[80px] text-center">
            <img src="../../images/circle-logo.png" class="h-16 w-16 mx-auto mb-2 block" alt=""> {{ props.data.startYear }}-{{ props.data.endYear }}
        </div>

        <div class="ltr:ml-4 rtl:mr-4">
            <h5 class="text-lg font-medium mb-0">{{ props.data.position }}</h5>
            <span class="text-slate-400 company-university">{{ props.data.companyName }} - {{ props.data.location }}</span>
            <p class="text-slate-400 mt-2 mb-0">{{ props.data.details }} </p>
        </div>
    </div> 
</template>

<script setup>
import {
    defineProps
} from 'vue';
const props = defineProps({
    data:Object,
})
</script>
