<template>
  <div class="">
    <!-- heading -->
    <div class="px-6 flex justify-between items-center py-2 z-20">
      <div class="flex justify-between items-center">
        <BaseIcon
          :path="mdiFilterVariant"
          size="22"
          class="mr-4 cursor-pointer"
        />
        <div class="">
          <div
            class="flex justify-between items-center border px-3 py-2 rounded cursor-pointer"
            @click="overviewmenu = !overviewmenu"
          >
            <div class="pl-1">All Calls</div>
            <BaseIcon :path="mdiMenuDown" size="22" />
          </div>
          <div
            class="absolute bg-white dark:bg-slate-700 shadow z-50"
            v-if="overviewmenu"
          >
            <SearchDownMenu
              :data="searchDownItems"
              headingValue="Public Views"
              addText="Create View"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center">
      

        <PremButtonMenu
          :options="dotsMenu"
          color="info"
          outline
          right
          :icon="mdiDotsVertical"
          class=""
        />
      </div>
    </div>
<div class="z-0">
  <Table :heading="tableHeadingData" :data="getCalls.allCalls" :dotItems="dotItems"  />
</div>

  </div>
</template>

<script setup>
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import SearchDownMenu from "@/components/SalesCRM/Sales/SearchDownMenu.vue";
import Table from '@/components/SalesCRM/Sales/Table'
import {callStore} from "@/stores/SalesCRM/activities/call"
const getCalls=callStore()

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
  mdiTable,
  mdiCheckCircleOutline,
  mdiClockEditOutline ,
  mdiPhoneRemoveOutline 
} from "@mdi/js";
const overviewmenu = ref(false);
const searchDownItems = [
  {
    id: 1,
    name: "All Calls",
  },
  {
    id: 2,
    name: "Closed Calls",
  },

  {
    id: 3,
    name: "My Open Calls",
  },
  {
    id: 4,
    name: "Next 7 Days'+ Overdue",
  },
  {
    id: 5,
    name: "Open Calls",
  },
  {
    id: 6,
    name: "Overdue Calls",
  },
  {
    id: 7,
    name: "Today + Overdue Calls",
  },
  {
    id: 8,
    name: "Today's Calls",
  },
  {
    id: 9,
    name: "Tomorrow's Calls",
  },

];
const dotsMenu = [
  [
    {
      id: 1,
      icon: mdiTagOutline,
      label: "Manage Tags",
    },
    {
      id: 2,
      icon: mdiTableArrowRight,
      label: "Export this View",
    },
  ],
];
const viewMenu = [
  [
    {
      id: 1,
      icon: mdiViewHeadline,
      label: "List View",
    },
    {
      id: 2,
      icon: mdiTable,
      label: "Sheet View",
    },
  ],
];


const tableHeadingData=[
  {
    id:1,
    name:"To/Form"
  },
  {
    id:2,
    name:"Call Type"
  }, {
    id:3,
    name:"Call Start Time"
  }, {
    id:4,
    name:"Call Duration"
  }, {
    id:5,
    name:"Related To"
  },
  {
    id:6,
    name:"Call Owner"
  }
]

const dotItems= [
  [
    {
      id: 1,
      icon: mdiCheckCircleOutline ,
      label: "Mark as completed",
    },
    {
      id: 2,
      icon: mdiClockEditOutline  ,
      label: "Reschedule Call",
    },
    {
      id: 1,
      icon: mdiPhoneRemoveOutline  ,
      label: "Cancel Call",
    },
    {
      id: 2,
      icon: mdiDeleteOutline,
      label: "Delete",
    },
  ],
]


</script>

<style></style>
