<template>
    <NuxtLayout name="accounts">
     <div class="p-6">
        <div class="flex items-center border-b">
        <div class="pb-2 border_bottom mr-2 ">
          <nuxt-link to="/accountancy/reports/trial-balance">
            Trial Balance
          </nuxt-link>
        </div>
        <div class="mx-2 pb-2 border_bottom  active_link">
          <nuxt-link to="/accountancy/reports/profit-and-loss ">
            Profit & Loss
          </nuxt-link>
        </div>
        <div class="mx-2 border_bottom pb-2">
          <nuxt-link to="/accountancy/reports/balance-sheet">
            Balance Sheet
          </nuxt-link>
        </div>
      </div>
   
      <!-- filter -->
      <div class="mt-4 flex items-center justify-between">
        <div class="flex gap-2 items-center w-full">
          <div class="px-2 rounded w-2/12">
          

            <PremFormField label="" help="" horizontal class="" >
              <PremFormControl
                type="list"
                :options="types"
                v-model="type"
                class=""
              />
            </PremFormField>
          </div>
          <div class="py-2 rounded w-2.8/12 text-center">
            <PremFormField
              label=""
              help=""
              horizontal
              class=""
              v-if="type == 'Date Range'"
            >
              <PremFormControl
                type="list"
                :options="dateType"
                v-model="dateTypeValue"
                class=""
              />
            </PremFormField>
            <PremFormField label="" help="" horizontal class="" v-else>
              <PremFormControl
                type="list"
                :options="fyear"
                v-model="fyValue"
                class=""
              />
            </PremFormField>
          </div>
          <div class="">
            <BaseButton :icon="mdiArrowExpandAll" color="" />
          </div>
        </div>
        <div class="flex gap-2 items-center">
          <BaseButton :icon="mdiReload" color="" />
          <BaseButton :icon="mdiFileDocumentOutline" color="" />
        </div>
      </div>

<ProfitLossTable class="mt-3" />
      

         </div>
         </NuxtLayout>
</template>



<script setup>
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import ProfitLossTable from '@/components/Accountancy/Reports/ProfitLoss/ProfitLossTable'
import {
  mdiDownload,
  mdiFilter,
  mdiShare,
  mdiUpload,
  mdiArrowExpandAll,
  mdiReload,
  mdiFileDocumentOutline,
} from "@mdi/js";
const types = ["Date Range", "Financial Year"];
const dateType = ["Jun 9,2023 - Jul 9,2023", "July 9,2023 - Aug 9,2023"];
const fyear = [
  "FY-APR2022-MAR2023",
  "FY-APR2021-MAR2022",
  "FY-APR2020-MAR2021",
];

const type = ref("Financial Year");
const dateTypeValue = ref("Jun 9,2023 - Jul 9,2023");
const fyValue = ref("FY-APR2022-MAR2023");
const test = ref("Financial Year");
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
