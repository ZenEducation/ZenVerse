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
               @click="show"
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
  <Table :heading="tableHeadingData" :data="tableData" :dotItems="dotItems"  type="product" />
</div>
<AddProductForm v-if="addProduct" @on-action="closePopup"/>
</SectionMain>
</NuxtLayout>
  </div>
</template>

<script setup>
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import SearchDownMenu from "@/components/SalesCRM/Sales/SearchDownMenu.vue";
import Table from '@/components/SalesCRM/Sales/Table'
import {productStore} from "@/stores/SalesCRM/products/product";
import { onMounted } from "vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import AddProductForm from "@/components/SalesCRM/Sales/products/AddProductForm.vue"
const getProducts=productStore()
const addProduct = ref(false)
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
const tableData = ref(null)
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
    name: "Product Name",
  },
  {
    id: 2,
    name: "Product Code",
  },

  {
    id: 3,
    name: "Category",
  },
  {
    id: 4,
    name: "Unit Price",
  },
  {
    id: 5,
    name: "Description",
  }
]
const deleteProduct = async (index) => {
  const product = getProducts.allProducts[index]
  console.log(product);
  await getProducts.deleteProduct(product);
}

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
      label: "Create a Product",
    },
    {
      id:1 ,
      icon: mdiDeleteOutline ,
      label: "Delete",
      run: deleteProduct
    },
  ],
];
function show() {
  addProduct.value = true;
}
function closePopup() {
  addProduct.value = false;
}
const fetchData = async () => {
  await getProducts.getProducts();
  const data = getProducts.allProducts;
  const fields = {"name" : 1, "code" : 2, "category" : 3, "unit_price" : 4, "description" : 5}
  let products = [];
        for(const deal in data) {
          let product = {id : Number(deal)+1, values : []}
          let entry = data[deal]
          for(const value in fields) {
            let field = {}
            field["id"] = fields[value]
            field["value"] = entry[value]
            field["icon"] = ""
            product.values.push(field)
          }
          products.push(product)
        }
        console.log(products);
        tableData.value = products
}
onMounted(() => fetchData())
</script>

<style></style>
