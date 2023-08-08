<template>
    <div class="all_deal w-full py-5 z-20">
        <div class="search_sec  w-full px-5">
            <FormField label="" >
              <FormControl
                :icon="mdiMagnify"
                name="search"
                type="search"
                placeholder="Search..."
              />
            </FormField>
     
        </div>
    
        <div class="mt-3">
            <div class="mb-1 text-gray-600 dark:text-gray-300 uppercase px-5">{{ headingValue }}</div>
            <div class=" overflow-auto" :class="['h-'+height]" >
            <div class="py-1 px-3 cursor-pointer hover:bg-gray-400 text-gray-600 dark:text-gray-300 px-8" v-for="(item,idx) in data" :key="idx" >
            {{ item.name }}</div>
        </div>
            <div class="flex mt-2 cursor-pointer w-fit text-blue-500 px-3  " v-if="addText !=''">
                <BaseIcon :path="mdiPlus" size="22"  />
                <div class="">{{ addText }} </div>

            </div>
        </div>
      

     

 
    </div>
</template>


<script setup>
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import {
    mdiMenuRight,
    mdiPlus,
  mdiMagnify

} from "@mdi/js";

defineProps({
    data: {
    type: Array,
    required: true,
  },
  headingValue:{
    type:String,
    default:""

  },
  addText:{
    type:String,
    default:""
  },
  height:{
    type:Number || String,
  }
});





</script>


<style scoped>

</style>
