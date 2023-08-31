<template>
  <NuxtLayout name="accounts">
    <div class="p-6">
      <!-- filter -->
      <div class="mt-4 flex items-center justify-between">
        <div class="flex gap-2 items-center w-full">
          <div class="px-2 py-1 border rounded w-3/12 text-center">
            Jun 9 2023 - Jul 9,2023
          </div>
          <div class="">
            <BaseButton :icon="mdiArrowExpandAll" color="" />
          </div>
        </div>
        <div class="flex gap-2 items-center">
          <BaseButton :icon="mdiFilterOutline" color="" label="Filter" small />
          <BaseButton color="" label="Export" small :icon="mdiExportVariant" />
        </div>
      </div>

      <!-- table  -->
    <div class="mt-4">
      <ExpandTable :heads="headingValue" :bodyValues="bodyValues" />
    </div></div>
  </NuxtLayout>
</template>

<script setup>
import ExpandTable from "@/components/Accountancy/Reports/Daybook/ExpandTable.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
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
} from "@mdi/js";


const headingValue = [
    {
        id:1,
        Value:"Date"
    },
    {
        id:2,
        Value:"Particular"
    }, {
        id:3,
        Value:"Vch. Name"
    }, {
        id:4,
        Value:"Vch. No."
    }, {
        id:5,
        Value:"Debit Amt"
    }, {
        id:6,
        Value:"Credit Amt"
    }
]

const bodyValues = [
    {
      id:1,
      expand:false,
        items:[
           "05-05-2022", "Pothik House Name ","Debit note","","10000.00","0.00",
        ],
        expandVale:[
         "", "Getting Expanding Details", " ","","","10000.00",
        ]
    },
    {
      id:2,
      expand:false,
        items:[
        "12-05-2022", "Akash Moht ","Debit note","","104000.00","0.00",
        ],
        expandVale:[
         "", "Getting Expanding Details", "","","","10000.00",
        ]
    },
    {
      id:3,
      expand:false,
        items:[
        "16-05-2022", "Kiron Amount ","Debit note","","10000.00","0.00",
        ],
        expandVale:[
         "", "Getting Expanding Details", " ","","","10000.00","0",
        ]
    },


]
</script>
<style scoped>
.border_bottom {
  border-bottom: 3px rgba(0, 128, 0, 0) solid;
}
.active_link {
  border-bottom: 3px #3b82f6 solid;
  color: #3b82f6;
}
</style>
