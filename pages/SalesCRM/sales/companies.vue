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
            <div class="pl-1">All Companies</div>
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
                label="Company"
                type="button"
                color="info"
                class="uppercase"
                :style="[]"
                :icon="mdiPlus"
                @click="getCompanies.showForm()"
            
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
<div class="z-0  shadow mx-6">
  <Table :heading="tableHeadingData" :data="getCompanies.allCompani" :dotItems="dotItems"  />
</div>
<AddCompapanyForm v-if="getCompanies.formShow" />
</SectionMain>
</NuxtLayout>
  </div>
</template>

<script setup>
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import SearchDownMenu from "@/components/SalesCRM/Sales/SearchDownMenu.vue";
import Table from '@/components/SalesCRM/Sales/Table'
import {companiesStore} from "@/stores/SalesCRM/companies/companies"
import BaseButton from "@/components/Buttons/BaseButton.vue";
import AddCompapanyForm from "@/components/SalesCRM/Sales/companies/AddCompanyForm.vue"
const getCompanies=companiesStore()

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
  mdiClipboardCheckOutline ,
  mdiPhoneOutline
} from "@mdi/js";
const overviewmenu = ref(false);
const searchDownItems = [
  {
    id: 1,
    name: "All Companies",
  },
  {
    id: 2,
    name: "My Compaines",
  },

  {
    id: 3,
    name: "New Last Week",
  },
  {
    id: 4,
    name: "New This Week",
  },
  {
    id: 5,
    name: "Recently Created Companies",
  },
  {
    id: 6,
    name: "Recently Modified Companies",
  }


];

const downMenu=  [
  [
    {
      id: 1,
      icon: mdiDomain ,
      label: "Import Companies",
    },
    {
      id: 2,
      icon: mdiNoteOutline ,
      label: "Import Notes",
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
      icon: mdiTagOutline ,
      label: "Maanage Tags",
    },
    {
      id: 2,
      icon: mdiContentDuplicate  ,
      label: "Duplicate Cleanup",
    },
    {
      id: 3,
      icon: mdiTableArrowRight ,
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
    id: 1,
    name: "Company Name",
  },
  {
    id: 2,
    name: "Phone",
  },

  {
    id: 3,
    name: "Website",
  },
  {
    id: 4,
    name: "Company Owner",
  }
]


const dotItems = [
  [
  {
      id:1 ,
      icon: mdiPhoneOutline  ,
      label: "Log a Call",
    },
    {
      id:1 ,
      icon: mdiClipboardCheckOutline ,
      label: "Create a Task",
    },
    {
      id:1 ,
      icon: mdiDeleteOutline ,
      label: "Delete",
    },
  ],
]; 


</script>

<style></style>
