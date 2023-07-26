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
            <div class="pl-1">All Tasks</div>
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
          :options="viewMenu"
          color=""
          outline
          right
          :icon="mdiViewHeadline"
          class="mr-2"
        />

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
  <Table :heading="tableHeadingData" :data="getTasks.allTasks" :dotItems="dotItems"  />
</div>


  </div>
</template>

<script setup>
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import SearchDownMenu from "@/components/SalesCRM/Sales/SearchDownMenu.vue";
import Table from '@/components/SalesCRM/Sales/Table'
import {taskStore} from "@/stores/SalesCRM/activities/tasks"
const getTasks=taskStore()

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
  mdiPhoneOutline,
  mdiClipboardCheckOutline,
  mdiCheckCircleOutline
} from "@mdi/js";
const overviewmenu = ref(false);
const searchDownItems = [
  {
    id: 1,
    name: "All Tasks",
  },
  {
    id: 2,
    name: "Closed Tasks",
  },

  {
    id: 3,
    name: "My Open Tasks",
  },
  {
    id: 4,
    name: "Next 7 Days'+ Overdue",
  },
  {
    id: 5,
    name: "Open Tasks",
  },
  {
    id: 6,
    name: "Overdue Tasks",
  },
  {
    id: 7,
    name: "Today + Overdue Tasks",
  },
  {
    id: 8,
    name: "Today's Tasks",
  },
  {
    id: 9,
    name: "Tomorrow's Tasks",
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
    name:"Task Name"
  },
  {
    id:2,
    name:"Due Date"
  }, {
    id:3,
    name:"Status"
  }, {
    id:4,
    name:"Priority"
  }, {
    id:5,
    name:"Related To"
  }, {
    id:6,
    name:"Task Owner"
  }
]

const dotItems =  [
  [
    {
      id: 1,
      icon: mdiCheckCircleOutline ,
      label: "Mark as completed",
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
