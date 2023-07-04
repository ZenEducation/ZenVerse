<template>
    <div class="py-5">
        <div class="flex justify-around items-center">
            <div class="" v-for="(rating,idx) in ratingsItem" :key="idx"> 
                <BaseIcon
                :path="mdiStar"
                class="cursor-pointer mr-1 text-gray-300 dark:text-slate-800"
                size="50"
                h="50"
                w="50"
                :class="[{active_Class:rating.active }]"
                @click="makeRating(rating.id)"
              />
              <div class="text-center">
                {{ idx+1 }}
              </div>
            </div>
   
        </div>
   
    </div>
</template>


<script setup>
import BaseIcon from "@/components/Display/BaseIcon.vue";
import { mdiStar } from "@mdi/js";
const emit = defineEmits(['onAction'])
const ratingsItem=ref([
    {
        id:1,
        active:false,
    },
    {
        id:2,
        active:false,  
    },
    {
        id:3,
        active:false,  
    },
])
const makeRating=(id)=>{

    ratingsItem.value= ratingsItem.value.map((item)=>{
       if(item.id<=id){
        item.active=true
       }
       else {
        item.active=false
       }
       return item
    })
    emit('onAction') 

}





</script>


<style scoped>
.active_Class{
    color:grey;
}
</style>
