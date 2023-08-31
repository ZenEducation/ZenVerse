<template>
  <div class="w-full">
    <div class="flex w-10/12 py-3 mx-auto border-b justify-between">
      <div class="w-6/12 font-medium px-2 flex">
        <div class="">Account</div>
        <BaseIcon :path="mdiMagnify" />
      </div>
      <div class="w-3/12 font-medium text-right pr-2">As Of 31 March 2023</div>
    </div>

    <div class="w-10/12 mx-auto">
      <div class="flex px-2">
        <div class="w-8/12 py-1 border-r ">Revenue</div>
        <div class="w-4/12 py-1 text-center">0.00</div>
      </div>
      <div class="flex px-2 cursor-pointer" @click="rOper=!rOper">
        <div class="w-8/12 py-1 pl-2 border-r ">
          Revenue From Operations
        </div>
        <div class="w-4/12 py-1 text-center">0.00</div>
      </div>
      <div class="flex px-2" v-if="rOper">
        <div class="w-8/12 py-1 pl-4 border-r">Sales</div>
        <div class="w-4/12 py-1 text-center"></div>
      </div>

      <div class="flex px-2 cursor-pointer" @click="rOther= !rOther">
        <div class="w-8/12 py-1 pl-2 border-r">Revenue Other Income</div>
        <div class="w-4/12 py-1 text-center">0.00</div>
      </div>
      <div class="" v-if="rOther">
      <div class="flex px-2">
        <div class="w-8/12 py-1 pl-4 border-r">Dividend Income</div>
        <div class="w-4/12 py-1 text-center">0.00</div>
      </div>
      <div class="flex px-2">
        <div class="w-8/12 py-1 pl-4 border-r">Interest Income</div>
        <div class="w-4/12 py-1 text-center">0.00</div>
      </div>
      <div class="flex px-2">
        <div class="w-8/12 py-1 pl-4 border-r">Exchange Gain</div>
        <div class="w-4/12 py-1 text-center">0.00</div>
      </div></div>

      <div class="flex px-2 cursor-pointer" @click="lcGoods =!lcGoods">
        <div class="w-8/12 py-1 border-r">Less: Cost Of Goods Sold</div>
        <div class="w-4/12 py-1 text-center">0.00</div>
      </div>
      <div class="" v-if="lcGoods">
      <div class="flex px-2 " >
        <div class="w-8/12 py-1 border-r pl-4">Opening Inventory</div>
        <div class="w-4/12 py-1 text-center">0.00</div>
      </div>
      
      <div class="flex px-2">
        <div class="w-8/12 py-1 border-r pl-4">+ Purchases Stock Amount</div>
        <div class="w-4/12 py-1 text-center">0.00</div>
      </div>
      <div class="flex px-2">
        <div class="w-8/12 py-1 border-r pl-4">+ Manufacturing Expense</div>
        <div class="w-4/12 py-1 text-center">0.00</div>
      </div>
      <div class="flex px-2">
        <div class="w-8/12 py-1 border-r pl-4">- Closing Inventory</div>
        <div class="w-4/12 py-1 text-center">0.00</div>
      </div>
      <div class="flex px-2">
        <div class="w-8/12 py-1 border-r pl-4">- Debit Note Stock Amount</div>
        <div class="w-4/12 py-1 text-center">0.00</div>
      </div>
    </div>
      <div class="flex px-2">
        <div class="w-8/12 py-1 border-r">Total Cost Of Goods Sold</div>
        <div class="w-4/12 py-1 text-right">0.00</div>
      </div>

      <div class="flex bg-gray-200 dark:bg-gray-900 px-2">
        <div class="w-8/12 py-1 border-r">Gross Profit</div>
        <div class="w-4/12 py-1 text-right">0.00</div>
      </div>

      <div class="flex px-2">
        <div class="w-8/12 py-1 border-r">Less: Operating Expenses</div>
        <div class="w-4/12 py-1 text-right"></div>
      </div>
      <div class="flex px-2 cursor-pointer" @click="oCost=!oCost">
        <div class="w-8/12 py-1 border-r pl-4">Operating Cost</div>
        <div class="w-4/12 py-1 text-right"></div>
      </div>
      <div class="" v-if="oCost">
      <div class="flex px-2">
        <div class="w-8/12 py-1 border-r pl-6">Purchases</div>
        <div class="w-4/12 py-1 text-right"></div>
      </div>
      <div class="flex px-2">
        <div class="w-8/12 py-1 border-r pl-6">Discount</div>
        <div class="w-4/12 py-1 text-right"></div>
      </div>
    </div>
 <div class="flex px-2">
        <div class="w-8/12 py-1 border-r">Total Operating Expenses</div>
        <div class="w-4/12 py-1 text-right">0.00</div>
      </div>
      <div class="flex px-2">
        <div class="w-8/12 py-1 border-r">Operating Profit/Loss (EBIT) </div>
        <div class="w-4/12 py-1 text-right">0.00</div>
      </div>

      <div class="flex px-2">
        <div class="w-8/12 py-1 border-r">Less: Other Expenses</div>
        <div class="w-4/12 py-1 text-right"></div>
      </div>
      <div class="flex px-2 cursor-pointer" @click="iExpense =!iExpense">
        <div class="w-8/12 py-1 border-r pl-2">Indirect Expenses</div>
        <div class="w-4/12 py-1 text-right"></div>
      </div>
      <div class=" " v-if="iExpense">
      <div class="flex px-2">
        <div class="w-8/12 py-1 border-r pl-4">Dividend Expenses</div>
        <div class="w-4/12 py-1 text-right"></div>
      </div>
      <div class="flex px-2">
        <div class="w-8/12 py-1 border-r pl-4">Interest Expenses</div>
        <div class="w-4/12 py-1 text-center">0.00</div>
      </div>
      <div class="flex px-2">
        <div class="w-8/12 py-1 border-r pl-4">Exchange Loss</div>
        <div class="w-4/12 py-1 text-center">0.00</div>
      </div>
      <div class="flex px-2">
        <div class="w-8/12 py-1 border-r pl-4">Other Indirect Expanses</div>
        <div class="w-4/12 py-1 text-right"></div>
      </div>
    </div>

    
      <div class="flex px-2">
        <div class="w-8/12 py-1 border-r">Total Other Expenses</div>
        <div class="w-4/12 py-1 text-right">0.00</div>
      </div>

      <div class="flex bg-gray-200 dark:bg-gray-900 px-2">
        <div class="w-8/12 py-2 border-r">Income Before Taxes (EBT)</div>
        <div class="w-4/12 py-2 text-right">0.00</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseIcon from "@/components/Display/BaseIcon.vue";
import {
  mdiDownload,
  mdiFilter,
  mdiShare,
  mdiUpload,
  mdiArrowExpandAll,
  mdiReload,
  mdiFileDocumentOutline,
  mdiFilterOutline,
  mdiExportVariant,
  mdiMagnify,
} from "@mdi/js";

const props = defineProps(["typeOfData"]);

const equality = ref(false);
const assets = ref(false);
const shareAndFund = ref(false);
const currentLaybalityes = ref(false);
const currentAssets = ref(false);
const type = ref("date-range");

const rOper=ref(false)
const rOther=ref(false)
const lcGoods=ref(false)
const oCost=ref(false)
const iExpense=ref(false)
</script>

<style></style>
