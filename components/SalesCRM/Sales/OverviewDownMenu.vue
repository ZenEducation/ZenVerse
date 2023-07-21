<template>
    <div class="all_deal w-full p-5">
        <div class="search_sec  w-full ">
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
            <div class="mb-1 text-gray-600 dark:text-gray-300">Shared with me</div>
            <div class="h-40 overflow-auto">
            <div class="py-1 px-3 cursor-pointer hover:bg-gray-400 text-gray-600 dark:text-gray-300" v-for="(data,idx) in items" :key="idx" >
            {{ data.name }}</div>
        </div>
            <div class="flex mt-2 cursor-pointer w-fit text-blue-500">
                <BaseIcon :path="mdiPlus" size="22" />
                <div class="">Add Dashboard</div>

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


const items = [{
    id:1,
    name:"Overview"
},

{
    id:2,
    name:"Pipeline Dashboard"
},
{
    id:3,
    name:"Tasks Dashboard"
},
{
    id:4,
    name:"Events Dashboard"
},{
    id:5,
    name:"Call Analytics"
},{
    id:6,
    name:"Email Analytics"
},{
    id:7,
    name:"Calls by Users"
}

]


</script>


<style scoped>

</style>
