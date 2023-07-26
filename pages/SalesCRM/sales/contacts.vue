<template>


  <div class="">
    <NuxtLayout name="sales">
      <SectionMain>
    <!-- heading -->
    <div class="px-6 flex justify-between items-center py-2 z-20 ">
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
            <div class="pl-1">All Contacts</div>
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
        <div class="flex  justify-center items-center mr-2">
    <BaseButton
                label="Contact"
                type="button"
                color="info"
                class="uppercase"
                :style="[]"
                :icon="mdiPlus"
               @click="getContacts.showForm()"
              />
              <PremButtonMenu
          :options="downMenu"
          color="info"
          :icon="mdiMenuDown"
          class=" py-1 bg-blue-500 rounded"
       
          label=""
        />
        
      </div>
      

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
<div class="z-0 shadow mx-6">
  <Table :heading="tableHeadingData" :data="getContacts.allContacts" :dotItems="dotItems"  />
</div>
<AddContactsForm v-if="getContacts.formShow" />
</SectionMain>
</NuxtLayout>
  </div>
</template>

<script setup>
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import SearchDownMenu from "@/components/SalesCRM/Sales/SearchDownMenu.vue";
import Table from '@/components/SalesCRM/Sales/Table'
import {contactStore} from "@/stores/SalesCRM/contacts/contacts"
import BaseButton from "@/components/Buttons/BaseButton.vue";
import AddContactsForm from "@/components/SalesCRM/Sales/contacts/AddContactsForm.vue"
const getContacts=contactStore()

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
  mdiCartOutline,
  mdiDomain ,
  mdiNoteOutline,
  mdiFormSelect ,
  mdiContentDuplicate,
  mdiContactsOutline ,
  mdiTrayArrowDown ,
  mdiEmailSyncOutline ,
  mdiCheckCircleOutline

} from "@mdi/js";
const overviewmenu = ref(false);
const searchDownItems = [
  {
    id: 1,
    name: "All Contacts",
  },
  {
    id: 2,
    name: "Mailing Labels",
  },

  {
    id: 3,
    name: "My Contacts",
  },
  {
    id: 4,
    name: "New Last Week",
  },
  {
    id: 5,
    name: "New This Week",
  },
  {
    id: 6,
    name: "Recently Created Contacts",
  },
  {
    id: 7,
    name: "Recently Modified Contacts",
  },
  {
    id: 8,
    name: "Not Yet Viewed",
  },
  {
    id: 9,
    name: "Unsubscribed Contacts",
  },


];

const downMenu=  [
  [
    {
      id: 1,
      icon: mdiContactsOutline ,
      label: "Import Contacts",
    },
    {
      id: 2,
      icon: mdiNoteOutline ,
      label: "Import Notes",
    },
    {
      id: 2,
      icon: mdiTrayArrowDown ,
      label: "Import from another CRM",
    },

   
  ],
  [
    {
      id: 1,
      icon: mdiFormSelect ,
      label: "Create a Form",
    },
  

   
  ],
];

const dotsMenu = [
  [
    {
      id: 1,
      icon: mdiContactsOutline ,
      label: "Approve Contacts",
    },
    {
      id: 2,
      icon: mdiTagOutline  ,
      label: "Manage Tags",
    },
    {
      id: 3,
      icon: mdiContentDuplicate  ,
      label: "Duplicate Cleanup",
    },
    {
      id: 4,
      icon: mdiTableArrowRight ,
      label: "Export this View",
    },
    {
      id: 5,
      icon: mdiEmailSyncOutline ,
      label: "Mass Email",
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
    id: 1,
    name: "Contact Name",
  },
  {
    id: 2,
    name: "Company Name",
  },

  {
    id: 3,
    name: "Email",
  },
  {
    id: 4,
    name: "Phone",
  },
  {
    id: 5,
    name: "Contact Owner",
  }
]


const dotItems = [
  [
   
    {
      id:1 ,
      icon: mdiDeleteOutline ,
      label: "Delete",
    },
  ],
]; 



</script>

<style></style>
