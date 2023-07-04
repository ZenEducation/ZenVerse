<template>
    <div class="w-full h-full">
     
        <embed :src="source.src"  class=" w-full h-full">  
    </div>
</template>


<script setup>



const props = defineProps(
    {
        source:{
            type:Object,
            default:"",
            required: true
        }
    }
)

</script>
