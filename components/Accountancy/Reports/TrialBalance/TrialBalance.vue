<template>
  <div class="flex w-10/12 py-3 mx-auto border-b justify-between">
    <div class="w-4/12 font-medium px-2 flex">
      <div class="">Particular</div>
      <BaseIcon :path="mdiMagnify" />
    </div>
    <div class="w-2/12 font-medium text-right pr-2">Opening Bal</div>
    <div class="w-2/12 font-medium text-right pr-2">Debit</div>
    <div class="w-2/12 font-medium text-right pr-2">Credit</div>
    <div class="w-2/12 font-medium text-right pr-2">Closing Bal</div>
  </div>

  <div
    v-for="(data, idx) in tableData"
    :key="idx"
    class="w-10/12 mx-auto  "
    :class="[data.type,data.children?'cursor-pointer':'']"
    @click="expandItem(data)"
    
  >
    <div class="">
      <div class="flex px-2">
        <div class="w-4/12 py-1 text-left uppercase">{{ data.label }}</div>
        <div class="w-2/12 py-1 text-right">{{ data.openingBal }}</div>
        <div class="w-2/12 py-1 text-right">{{ data.debit }}</div>
        <div class="w-2/12 py-1 text-right">{{ data.credit }}</div>
        <div class="w-2/12 py-1 text-right">{{ data.closingBal }}</div>
      </div>
      <div class="" v-if="data.children && data.expand">
        <div class="cursor-pointer" v-for="(item, index) in data.children" :key="index">
          <div class="flex px-2">
            <div class="w-4/12 py-1 text-left pl-2 uppercase">
              {{ item.label }}
            </div>
            <div class="w-2/12 py-1 text-right">{{ item.openingBal }}</div>
            <div class="w-2/12 py-1 text-right">{{ item.debit }}</div>
            <div class="w-2/12 py-1 text-right">{{ item.credit }}</div>
            <div class="w-2/12 py-1 text-right">{{ item.closingBal }}</div>
          </div>
          <div class="" v-if="item.children">
            <div
              class="flex px-2"
              v-for="(chields, index2) in item.children"
              :key="index2"
              :class="[chields.focused ? 'bg-gray-200 dark:bg-gray-900' : '']"
            >
              <div class="w-4/12 py-1 text-left pl-4">
                {{ chields.label }}
              </div>
              <div class="w-2/12 py-1 text-right">{{ chields.openingBal }}</div>
              <div class="w-2/12 py-1 text-right">{{ chields.debit }}</div>
              <div class="w-2/12 py-1 text-right">{{ chields.credit }}</div>
              <div class="w-2/12 py-1 text-right">{{ chields.closingBal }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex px-2 w-10/12 mx-auto mt-2 bg-gray-200 dark:bg-gray-900">
            <div class="w-4/12 py-1 text-left pl-2 ">
             Grand Total
            </div>
            <div class="w-2/12 py-1 text-right">0.00</div>
            <div class="w-2/12 py-1 text-right">0.00</div>
            <div class="w-2/12 py-1 text-right">0.00</div>
            <div class="w-2/12 py-1 text-right">0.00</div>
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

const tableData = ref([
  {
    id: 1,
    expand: false,
    type: "liabilities",
    label: "Shareholder's funds",
    openingBal: "40,000.00 DR.",
    debit: "0.00",
    credit: "0.00",
    closingBal: "40,000.00 DR.",
    children: [
      {
        id: 1,
        expand: false,
        type: "liabilities",
        label: "Reserves & surplus",
        openingBal: "0.00",
        debit: "0.00",
        credit: "0.00",
        closingBal: "0.00",
        children: [
          {
            id: 1,
            expand: false,
            focused: true,
            type: "liabilities",
            label: "General Reserves",
            openingBal: "0.00",
            debit: "0.00",
            credit: "0.00",
            closingBal: "0.00",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    expand: false,
    type: "liabilities",
    label: "Non Current Liabilities",
    openingBal: "0.00",
    debit: "0.00",
    credit: "0.00",
    closingBal: "0.00",
  },
  {
    id: 3,
    expand: false,
    type: "liabilities",
    label: "Current Liabilities",
    openingBal: "100000.00 DR",
    debit: "0.00",
    credit: "0.00",
    closingBal: "100000.00 DR",
    children: [
      {
        id: 1,
        expand: false,
        label: "Duties & taxes",
        openingBal: "0.00 ",
        debit: "0.00",
        credit: "0.00",
        closingBal: "0.00",
        children: [
          {
            id: 1,
            expand: false,
            label: "GST CESS",
            openingBal: "0.00 ",
            debit: "0.00",
            credit: "0.00",
            closingBal: "0.00",
          },
          {
            id: 2,
            expand: false,
            label: "TCS PAYABLE",
            openingBal: "0.00 ",
            debit: "0.00",
            credit: "0.00",
            closingBal: "0.00",
          },
          {
            id: 3,
            expand: false,
            label: "TDS PAYABLE",
            openingBal: "0.00 ",
            debit: "0.00",
            credit: "0.00",
            closingBal: "0.00",
          },
          {
            id: 4,
            expand: false,
            label: "UTGST",
            openingBal: "0.00 ",
            debit: "0.00",
            credit: "0.00",
            closingBal: "0.00",
          },
          {
            id: 5,
            expand: false,
            label: "IGST",
            openingBal: "0.00 ",
            debit: "0.00",
            credit: "0.00",
            closingBal: "0.00",
          },
          {
            id: 6,
            expand: false,
            label: "CGST",
            openingBal: "0.00 ",
            debit: "0.00",
            credit: "0.00",
            closingBal: "0.00",
          },
          {
            id: 2,
            expand: false,
            label: "SGST",
            openingBal: "0.00 ",
            debit: "0.00",
            credit: "0.00",
            closingBal: "0.00",
          },
        ],
      },
      {
        id: 2,
        expand: false,
        label: "Sundry creditors",
        openingBal: "1000.00 DR",
        debit: "0.00",
        credit: "0.00",
        closingBal: "100000.00 DR",
        children: [
          {
            id: 1,
            expand: false,
            focused: true,
            label: "Aakash Balasaheb Shendage",
            openingBal: "10000.00 DR ",
            debit: "0.00",
            credit: "0.00",
            closingBal: "10000.00 DR",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    expand: false,
    type: "assets",
    label: "Fixed Assets",
    openingBal: "0.00",
    debit: "0.00",
    credit: "0.00",
    closingBal: "0.00",
  },
  {
    id: 5,
    expand: false,
    type: "assets",
    label: "Non current Assets",
    openingBal: "0.00",
    debit: "0.00",
    credit: "0.00",
    closingBal: "0.00",
  },
  {
    id: 6,
    expand: false,
    type: "assets",
    label: "Current Assets",
    openingBal: "0.00",
    debit: "0.00",
    credit: "0.00",
    closingBal: "0.00",
    children: [
      {
        id: 1,
        expand: false,
        type: "assets",
        label: "Tax on Export",
        openingBal: "0.00",
        debit: "0.00",
        credit: "0.00",
        closingBal: "0.00",
      },
      {
        id: 2,
        expand: false,

        type: "assets",
        label: "Tax on advance",
        openingBal: "0.00",
        debit: "0.00",
        credit: "0.00",
        closingBal: "0.00",
      },
      {
        id: 3,
        expand: false,

        type: "assets",
        label: "Tcs Receivable",
        openingBal: "0.00",
        debit: "0.00",
        credit: "0.00",
        closingBal: "0.00",
      },
      {
        id: 4,
        expand: false,
        type: "assets",
        label: "Tds Receivable",
        openingBal: "0.00",
        debit: "0.00",
        credit: "0.00",
        closingBal: "0.00",
      },
      {
        id: 5,
        expand: false,

        type: "assets",
        label: "Reverse charge",
        openingBal: "0.00",
        debit: "0.00",
        credit: "0.00",
        closingBal: "0.00",
      },
      {
        id: 6,
        expand: false,

        type: "assets",
        label: "Bank Accounts",
        openingBal: "0.00",
        debit: "0.00",
        credit: "0.00",
        closingBal: "0.00",
      },
      {
        id: 7,
        expand: false,

        type: "assets",
        label: "Cash",
        openingBal: "0.00",
        debit: "0.00",
        credit: "0.00",
        closingBal: "0.00",
      },
      {
        id: 8,
        expand: false,
        type: "assets",
        label: "Sundry debtors",
        openingBal: "0.00",
        debit: "0.00",
        credit: "0.00",
        closingBal: "0.00",
        children: [
          {
            id: 1,
            expand: false,
            focused: true,
            type: "assets",
            label: "Aakash balasaheb Shendage",
            openingBal: "0.00",
            debit: "0.00",
            credit: "0.00",
            closingBal: "0.00",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    expand: false,
    type: "income",
    label: "Revenue from Operations",
    openingBal: "0.00",
    debit: "0.00",
    credit: "0.00",
    closingBal: "0.00",
    children: [
      {
        id: 1,
        expand: false,
        type: "income",
        label: "Sales",
        openingBal: "0.00",
        debit: "0.00",
        credit: "0.00",
        closingBal: "0.00",
      },
    ],
  },
  {
    id: 8,
    expand: false,
    type: "income",
    label: "Others Income",
    openingBal: "0.00",
    debit: "0.00",
    credit: "0.00",
    closingBal: "0.00",
    children: [
      {
        id: 1,
        expand: false,
        type: "income",
        label: "Dividend Income",
        openingBal: "0.00",
        debit: "0.00",
        credit: "0.00",
        closingBal: "0.00",
      },
      {
        id: 2,
        expand: false,
        type: "income",
        label: "Interest Income",
        openingBal: "0.00",
        debit: "0.00",
        credit: "0.00",
        closingBal: "0.00",
      },
      {
        id: 3,
        expand: false,
        type: "income",
        label: "Exchange gain",
        openingBal: "0.00",
        debit: "0.00",
        credit: "0.00",
        closingBal: "0.00",
      },
    ],
  },
  {
    id: 9,
    expand: false,
    type: "expenses",
    label: "Operating Cost",
    openingBal: "0.00",
    debit: "0.00",
    credit: "0.00",
    closingBal: "0.00",
    children: [
        {
            id: 1,
    expand: false,
    type: "expenses",
    label: "purchases",
    openingBal: "0.00",
    debit: "0.00",
    credit: "0.00",
    closingBal: "0.00",  
        },
        {
            id: 2,
    expand: false,
    type: "expenses",
    label: "Discount",
    openingBal: "0.00",
    debit: "0.00",
    credit: "0.00",
    closingBal: "0.00",  
        },
    ]

},
{
    id: 10,
    expand: false,
    type: "expenses",
    label: "Indirect",
    openingBal: "0.00",
    debit: "0.00",
    credit: "0.00",
    closingBal: "0.00",
    children: [
        {
            id: 1,
    expand: false,
    type: "expenses",
    label: "Dividend Expenses",
    openingBal: "0.00",
    debit: "0.00",
    credit: "0.00",
    closingBal: "0.00",  
        },
        {
            id: 2,
    expand: false,
    type: "expenses",
    label: "Interest Expenses",
    openingBal: "0.00",
    debit: "0.00",
    credit: "0.00",
    closingBal: "0.00",  
        },
        {
            id: 3,
    expand: false,
    type: "expenses",
    label: "Exchange Loss",
    openingBal: "0.00",
    debit: "0.00",
    credit: "0.00",
    closingBal: "0.00",  
        },
        {
            id: 4,
    expand: false,
    type: "expenses",
    label: "Other indirect Expenses",
    openingBal: "0.00",
    debit: "0.00",
    credit: "0.00",
    closingBal: "0.00",  
        }
    ]

},
])


const expandItem=(item)=>{
  tableData.value.map((value)=>{
  if(value.id==item.id){
   if( value.expand==true){
    value.expand=false
   }else{
    value.expand=true

   }

  }
  return value
  })
}


</script>

<style scoped>
.liabilities {
  border-left: 5px solid #37b383;
}
.assets {
  border-left: 5px solid #e48b00;
}
.income {
  border-left: 5px solid #668dfe;
}
.expenses{
  border-left: 5px solid #E54457;

}
</style>
