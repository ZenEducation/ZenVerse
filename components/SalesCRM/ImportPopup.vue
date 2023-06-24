<template>
    <div class="py-6 px-3">
     <div class="flex text-left"> 
        <BaseIcon
                   :path="mdiFileExcel"
                   class="text-gray-500 mr-1"
                   size="23"
                   h="23"
                   w="23"
                 />
        Excel or CSV</div>
     <div class="mt-3 flex">    <BaseIcon
                   :path="mdiLoginVariant"
                   class="text-gray-500 mr-1"
                   size="23"
                   h="23"
                   w="23"
                 />Manage ImportsF</div>
    </div>
</template>
<script setup>
import { mdiFileExcel, mdiLoginVariant,mdiContentSave,mdiDeleteOutline,mdiTable } from "@mdi/js";
import BaseIcon from "@/components/Display/BaseIcon.vue";
</script>


<style scoped>

</style>


