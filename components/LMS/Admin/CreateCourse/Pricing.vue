<template>
   <div class="grid grid-cols-5 gap-1 mb-6 xl:grid-cols-5">
        <!-- left section  -->
    <CardBox
      class="lg:col-span-1 xl:col-span-1 overflow-y-auto"
      
    >
    <div class="">
      <div class="opacity-70 cursor-pointer mb-3"  @click="currentTab(idx)"  :class="[{active_calss:tab==idx}]"
      v-for="(data,idx) in tabs"
      :key="idx"
      >
        {{ data.item }}
      </div>
    
    </div>
    </CardBox>
      <!-- right section  -->
      <CardBox
    
      class="mb-6 lg:mb-0 lg:col-span-4 xl:col-span-4"
     
    >
    <PrimaryPricing v-if="tab==0" />
    <SetAdditionalPricing v-if="tab==1" />
      </CardBox>
   </div>
  </template>
  
  <script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import PrimaryPricing from "./pricing/PrimaryPricing.vue";
import SetAdditionalPricing from "./pricing/SetAdditionalPricing.vue"

 
const tab= ref(0)
const active = ref()

const currentTab=(item)=>{
  tab.value=item
}
const tabs = [
  {
    id:1,
    item:"Primary Pricing"
  },
  {
    id:2,
    item:"Set additional pricing"
  }
]

  </script>
  
  <style scoped>
  .active_calss{
    opacity: 1;
  }
  </style>