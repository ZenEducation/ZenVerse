<template>
   <div>
    <NuxtLayout name="sales">
      <SectionMain>
      <div class="px-6">
 <div class="flex justify-between items-center">
    <div class="flex">
    <div class="mr-2 cursor-pointer p-2" @click="currentTab('Tasks')" :class="[{active_Class:activeItem=='Tasks'}]">Tasks</div>
    <div class="mx-2  cursor-pointer p-2"  @click="currentTab('Events')"  :class="[{active_Class:activeItem=='Events'}]">Events</div>
    <div class="mx-2  cursor-pointer p-2"  @click="currentTab('Calls')" :class="[{active_Class:activeItem=='Calls'}]">Calls</div>

</div>
<div class="flex justify-center items-center">
  <div class="flex  justify-center items-center">
    <BaseButton
                label="Task"
                type="button"
                color="info"
                class="uppercase"
                :style="[]"
                :icon="mdiPlus"
               @click="show('task')"
              />
              <PremButtonMenu
          :options="dotsMenu"
          color="info"
          :icon="mdiMenuDown"
          class=" py-1 bg-blue-500 rounded"
       
          label=""
        />
        
      </div>
              <BaseButton
                label="Event"
                type="button"
                color="info"
                class="uppercase mx-2"
                :style="[]"
                :icon="mdiPlus"
                @click="show('event')"
              />
              <BaseButton
                label="Call"
                type="button"
                color="info"
                class="uppercase"
                :style="[]"
                :icon="mdiPlus"
                @click="show('call')"
              />
</div>
 </div>
 <div class="mt-2">
      
        <Tasks v-if="activeItem=='Tasks'" />
        <Events v-if="activeItem=='Events'" />
        <Calls v-if="activeItem=='Calls'" />
    </div>
    </div>

    <AddTaskForm v-if="addTask" @on-action="closePopup('task')" />
    <AddEventForm v-if="addEvent" @on-action="closePopup('event')"/>
    <AddCallsForm v-if="addCall" @on-action="closePopup('call')"/>
        </SectionMain>
        </NuxtLayout>
   </div>
</template>

<script setup>
import Tasks from '@/components/SalesCRM/Sales/activities/Tasks'
import Events from '@/components/SalesCRM/Sales/activities/Events'
import Calls from '@/components/SalesCRM/Sales/activities/Calls'
import BaseButton from "@/components/Buttons/BaseButton.vue";
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
import AddTaskForm from "@/components/SalesCRM/Sales/activities/AddTaskForm.vue"
import AddEventForm from "@/components/SalesCRM/Sales/activities/AddEventForm.vue"
import AddCallsForm from "@/components/SalesCRM/Sales/activities/AddCallsForm.vue"
import {taskStore} from "@/stores/SalesCRM/activities/tasks"
import { eventStore} from "@/stores/SalesCRM/activities/events"
import {callStore} from "@/stores/SalesCRM/activities/call"
const getTasks=taskStore()
const getEvents = eventStore()
const getCalls = callStore()
const addTask = ref(false)
const addEvent = ref(false)
const addCall = ref(false)
import {
  mdiMenuDown,
  mdiViewHeadline,
  mdiFullscreen,
  mdiSquareEditOutline,
  mdiPrinterOutline,
  mdiChartBar,
  mdiDeleteOutline,
  mdiTrackpad,
  mdiPlus,
  mdiLockOutline,
  mdiDotsHorizontal,
  mdiReload,
  mdiDotsVertical,
  mdiMenuUp,
  mdiDialpad,
  mdiFileDocumentMultipleOutline,
  mdiDelete,
  mdiFilterVariant,
  mdiTagOutline,
  mdiTableArrowRight,
  mdiTrayArrowDown 

} from "@mdi/js";
const activeItem=ref('Tasks')
const currentTab=(tab)=>{
    activeItem.value=tab
}
function show(type) {
  if(type == "task") {
    addTask.value = true;
  }
  else if(type == "event") {
    addEvent.value = true;
  }
  else {
    addCall.value = true;
  }
}

function closePopup(type) {
  if(type == "task") {
    addTask.value = false;
  }
  else if(type == "event") {
    addEvent.value = false;
  }
  else {
    addCall.value = false;
  }
}

const dotsMenu = [
  [
    {
      id: 1,
      icon: mdiTrayArrowDown ,
      label: "Import Tasks",
    },
   
  ],
];
</script>

<style scoped>
.active_Class{
    
    border-bottom: 2px solid #2977F6;
}
</style>