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
            <div class="pl-1">All Products</div>
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
                label="Product"
                type="button"
                color="info"
                class="uppercase"
                :style="[]"
                :icon="mdiPlus"
               @click="getProducts.showForm()"
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
<div class="z-0  mx-6 shadow">
  <Table :heading="tableHeadingData" :data="getProducts.allProducts" :dotItems="dotItems"  />
</div>
<AddProductForm v-if="getProducts.formShow" />
</SectionMain>
</NuxtLayout>
  </div>
</template>

<script setup>
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import SearchDownMenu from "@/components/SalesCRM/Sales/SearchDownMenu.vue";
import Table from '@/components/SalesCRM/Sales/Table'
import {productStore} from "@/stores/SalesCRM/products/product"
import BaseButton from "@/components/Buttons/BaseButton.vue";
import AddProductForm from "@/components/SalesCRM/Sales/products/AddProductForm.vue"
const getProducts=productStore()

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
  mdiPhoneOutline,
  mdiClipboardCheckOutline
} from "@mdi/js";
const overviewmenu = ref(false);
const searchDownItems = [
  {
    id: 1,
    name: "Active Products",
  },
  {
    id: 2,
    name: "All Products",
  },

  {
    id: 3,
    name: "My Products",
  },
  {
    id: 4,
    name: "Noy Yet Viewed",
  }


];

const downMenu = [
  [
    {
      id: 1,
      icon: mdiCartOutline,
      label: "Import Products",
    }
   
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
    name: "Prooduct Name",
  },
  {
    id: 2,
    name: "Product Code",
  },

  {
    id: 3,
    name: "product Active",
  },
  {
    id: 4,
    name: "Product Owner",
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
