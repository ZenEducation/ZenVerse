<template>

    <NuxtLayout name="sales">
      <SectionMain>
        <!-- heading menu  -->
        <section class="">
          <div class="shadow px-6 flex justify-between items-center py-2 dark:bg-slate-900" v-if="!editSection" @mouseover="editButton=true" @mouseleave="editButton=false">
            <div class="flex justify-between items-center">
              <div class="">
              <div
                class="flex justify-between items-center border px-3 py-2 rounded cursor-pointer"
                @click="overviewmenu=!overviewmenu"
              >
                <div class="pl-1">Overview</div>
                <BaseIcon :path="mdiMenuDown" size="22" />
              </div>
              <div class="absolute bg-white dark:bg-slate-700 shadow" v-if="overviewmenu">
                <OverviewDownMenu />

              </div>
              </div>
              <div class="ml-3 cursor-pointer text-gray-400" @click="editSection=true" v-if="editButton">Edit</div>
            </div>
            <div class="flex justify-between items-center">
                <BaseIcon :path="mdiReload " size="22" class="text-gray-400 mr-2 cursor-pointer" />
              <PremButtonMenu
                color="info"
                label="Component"
                class="inline mr-2"
                :icon="mdiPlus"
                :options="componentsMenu"
                center
              />
            
              <PremButtonMenu
                  :options="dotsMenu"
           
                  color="info"
                  outline
                  right
                  :icon="mdiDotsHorizontal"
                  class=""
                />
            </div>
          </div>
          <!-- Edit -->
          <div class="shadow px-6 flex justify-between items-center py-2 bg-white dark:bg-slate-900" v-if="editSection">
            <div class="flex justify-between items-center">
              <div class="cursor-pointer">
                <PremFormControl placeholder="Enter text" />
              </div>
              <div class="flex justify-between items-center">
                <PremButtonMenu
                  :options="buttonMenuOptions"
                  label="Olny Me"
                  color="info"
                  outline
                  left
                  :icon="mdiLockOutline"
                  class="ml-4"
                />
              </div>
            </div>
            <div class="">
                <BaseButton
                color="info"
                label="Cancle"
                class="inline mx-1 "
                outline
                @click="editSection=false"
              />
              <BaseButton
                color="info"
                label="Save"
                class="inline ml-1 "
                @click="editSection=false"
              />
            </div>
          </div>
        </section>
<!-- card components  -->
<section class="px-6 mt-5" >
    <div class="grid grid-cols-4 gap-4  xl:grid-cols-4">
      <div class="col-span-3 grid grid-cols-1 gap-4 mb-6 xl:grid-cols-3 ">
        <div
         v-for="(item,idx) in cardContent"
         :key="idx"
         class="h-36 shadow bg-white dark:bg-slate-900	p-4 rounded cardItem"
        
          >
          <div class="flex justify-between items-center h-8 ">
            <div class="flex">
                <div class="text-clip  w-50 truncate ">{{ item.heading }}</div>
                <BaseIcon :path="mdiReload " size="20" class="text-gray-400  cursor-pointer ml-1 iconButton"  />
            </div>
            <div class="  flex justify-between items-start">
       
                
            <PremButtonMenu
                  :options="cardMenu"
           
                  color=""
           
                  right
                  :icon="mdiDotsVertical"
                  class="text-gray-400  cursor-pointer     border-0 border-none border-hidden	iconButton "
                 
                />
        </div>
          </div>
          <div class="" v-if="item.value>0">
          <div class="flex  items-center">
            <div class="text-3xl text-gray-500">{{ item.value }}</div>
            <div class="flex items-center text-green-500 ml-2  justify-start ">
              <BaseIcon :path="mdiMenuUp  " size="30" w="30" class="text-green-500" />
              <div class="">{{  item.increase}} % </div>
            </div>
          </div>
          <div class="text-gray-400 mt-1">
            {{ item.footerTest }} : {{ item.footerValue }}
          </div>
        </div>
        <div class="text-gray-400 h-20  flex justify-center items-center" v-else>
          No data available 
        </div>
        </div>
          </div>
          <div class=" mb-6 rounded p-4 shadow bg-white dark:bg-slate-900	 rounded cardItem">
            <div class="flex justify-between items-center h-8">
            <div class="flex">
                <div class="text-clip  w-50 truncate ">Top 5 Companys</div>
                <BaseIcon :path="mdiReload " size="20" class="text-gray-400  cursor-pointer ml-1 iconButton" />
            </div>
            <div class=" text-right  flex justify-between items-center">
                     
              <PremButtonMenu
                  :options="cardMenu"
           
                  color=""
                  
                  right
                  :icon="mdiDotsVertical"
                  class="text-gray-400  cursor-pointer  my-auto bg-transparent border-0 border-none border-hidden	iconButton"
                 
                />
        </div>
            </div>
            <div class="text-gray-400 h-full  flex justify-center items-center" >
          No data available 
        </div>
            </div>
        </div>


</section>

<!-- first chart  -->
<section  class="px-6 " >
<div class="shadow bg-white dark:bg-slate-900	p-4 rounded cardItem">
<div class="flex items-center">
 <div class=""> Revenue Won by Month </div>
 <BaseIcon :path="mdiReload " size="20" class="text-gray-400  cursor-pointer ml-1 iconButton" />
</div>
<BarChart :value="[4000, 2000, 1200]" :labels=" ['January', 'February', 'March' ]" color="#00bfff" />
</div>

</section>

<!-- second  chart  -->
<section  class="px-6 mt-6" >
  <div class="grid grid-cols-2 gap-4  xl:grid-cols-2">
<div class="shadow bg-white dark:bg-slate-900	p-4 rounded cardItem">
<div class="flex items-center">
 <div class="">Open Pipelines by Stage - This Month   </div>
 <BaseIcon :path="mdiReload " size="20" class="text-gray-400  cursor-pointer ml-1 iconButton" />
</div>
<PieChart />
</div>
<div class="shadow bg-white dark:bg-slate-900	p-4 rounded cardItem">
  <div class="flex items-center">
 <div class=""> Amount Record </div>
 <BaseIcon :path="mdiReload " size="20" class="text-gray-400  cursor-pointer ml-1 iconButton" />
</div>
<BarChart :value="[4000, 2000, 1200]" :labels=" ['January', 'February', 'March' ]" color="#ffff00" />

</div>
</div>

</section>

      </SectionMain>
    </NuxtLayout>

</template>

<script setup>
import {
   mdiMenuDown,
  mdiFullscreen ,
  mdiSquareEditOutline,
  mdiPrinterOutline ,
  mdiChartBar,
  mdiDeleteOutline,
  mdiTrackpad ,
   mdiPlus,
    mdiLockOutline,
    mdiDotsHorizontal,
    mdiReload,mdiDotsVertical,mdiMenuUp ,mdiDialpad,mdiFileDocumentMultipleOutline,mdiDelete   } from "@mdi/js";

import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
import BarChart from "@/components/Charts/BarChart.vue"
import PieChart from "@/components/Charts/PieChart.vue"
import CardBox from "@/components/Cards/CardBox.vue";
import OverviewDownMenu from "@/components/SalesCRM/Sales/OverviewDownMenu.vue"

const cardContent = [
    {
        id:0,
        heading:"Contacts Created - This Month ",
        value:11,
        increase:100,
        footerTest:"Last month",
        footerValue:4
    },
    {
      id:1,

        heading:"Pipelines Won - This Month  ",
        value:42,
        increase:60,
        footerTest:"Last month",
        footerValue:9
    },
    {
      id:2,

        heading:"Pipelines Lost - This Month  ",
        value:0,
        increase:100,
        footerTest:"Last month",
        footerValue:0
    },
    {
      id:3,

        heading:"Top 5 Companies  ",
        value:0,
        increase:100,
        footerTest:"Last month",
        footerValue:0
    },
    {
      id:4,

        heading:"Tasks Closed - This Month  ",
        value:0,
        increase:100,
        footerTest:"Last month",
        footerValue:0
    },
    {
      id:5,

        heading:"Events Completed - This Month  ",
        value:0,
        increase:100,
        footerTest:"Last month",
        footerValue:0
    },


]

const editSection = ref(false)
const editButton=ref(false)
const overviewmenu = ref(false)

const filterText=(text)=>{

}

const buttonMenuOptions = [
  [
    {
      id: 1,
      icon: mdiDialpad,
      label: "Option One",
    },
    {
      id: 2,
      icon: mdiFileDocumentMultipleOutline,
      label: "Option Two",
    },
  ],
  [
    {
      id: 3,
      icon: mdiDelete,
      label: "Last",
    },
  ],
];


const componentsMenu =  [
  [
    {
      id: 1,
      icon: mdiTrackpad  ,
      label: "KPI",
    },
    {
      id: 2,
      icon: mdiChartBar,
      label: "Chart",
    },
  ]]
  const dotsMenu =  [
  [
    {
      id: 1,
      icon: mdiFullscreen ,
      label: "Vue in Full Screen",
    },
    {
      id: 2,
      icon: mdiDelete,
      label: "Delete",
    },
  ]]

  const cardMenu =  [
  [
    {
      id: 1,
      icon: mdiSquareEditOutline ,
      label: "Edit",
    },
    {
      id: 2,
      icon: mdiDelete,
      label: "Delete",
    }, {
      id: 3,
      icon: mdiPrinterOutline,
      label: "Print",
    },
  ]]



  const refresAndEdit = ref(false)
  const currentHover=ref(null)
const enterCard=(idx)=>{
  currentHover.value=idx
  if(idx){
    refresAndEdit.value=true
  }
}
const leaveCard=(idx)=>{
  if(idx){
    refresAndEdit.value=false
  }
}


</script>


<style scoped>
.iconButton{
  display: none;
}
.cardItem:hover .iconButton{
  display: block !important;

}
.iconButton > button > button {
  background: red !important;
}



</style>
