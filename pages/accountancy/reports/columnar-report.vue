<template>
  <NuxtLayout name="accounts">
    <div class="p-6">
      <div class="border px-2 py-2  border border-black dark:border-slate-700 rounded w-3/12">
        Apr-2022 - Mar-2023
      </div>

      <div class="flex items-center justify-between mt-4 w-3/12">
        <div class="border px-2 py-2  border border-black dark:border-slate-700  rounded w-5/12">Apr-2022</div>
        <div class="border px-2 py-2 border border-black dark:border-slate-700	 rounded w-5/12">Aug-2022</div>
      </div>
      <div class=" py-1  rounded w-3/12 mt-4">
        <PremFormField label="" help="" horizontal>
          <PremFormControl
            type="list"
            :options="dropDownValue"
            v-model="dropDownData"
          />
        </PremFormField>
      </div>

      <div class="mt-4 w-3/12">
        <FormCheckRadioGroup
          type="switch"
          name="sample-checkbox-two"
          :options="checkboxOptions1"
          is-column
        />
      </div>
      <div class="mt-4 w-3/12">
        <FormCheckRadioGroup
          type="switch"
          name="sample-checkbox-two"
          :options="checkboxOptions2"
          is-column
        />
      </div>
      <div class="mt-4 w-3/12 flex">
        <BaseButton
          label="Export"
          :icon="mdiCreditCardOutline"
          color="info"
          small
          class="mr-1"
        />
        <BaseButton
          label="Show"
          :icon="mdiCreditCardOutline"
          color="info"
          small
          class="mx-1"
        />
        <BaseButton
          label="Reset"
          :icon="mdiCreditCardOutline"
          color="info"
          small
          class="mx-1"
        />
      </div>
      <div class="mt-4">
        <NormalTable :heads="headingValue" :bodyValues="bodyValues" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";

import NormalTable from "@/components/Accountancy/Reports/NormalTable";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { mdiDownload, mdiFilter, mdiShare, mdiUpload } from "@mdi/js";
import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";
const checkboxOptions1 = { openCloseBalance: "Opening/Closing Balance" };
const checkboxOptions2 = { crDrWith: "Cr/Dr with +/-" };
const dropDownData=ref("Cash")
const dropDownValue = [
  "IGST",
  "CGST",
  "SGST",
  "Cash",
  "UTGST",
  "Sales",
  "GST CESS",
  "Discount",
  "Purchases",
  "TCS payable",
  "TDS payable",
  "Fixed Assets",
  "Other Income",
  "Exchange Gain",
  "Exchange Loss",
  "Tax On  Export",
  "Bank Accounts",
  "TCS receivable",
  "TDS receivable",
  "Tax On Advance",
  "Duties & Taxes",
  "Reverse Charge",
  "Current Assets",
  "Sundry Debtors",
  "Operating Cost",
  "dividend Income",
  "Interest Expense",
  "Sundry Creditors",
  "Indirect Expenses",
  "Non Current Assets",
  "Reserves & Surplus",
  "Current Liabilities",
  "Shareholder's Funds",
  "Other Indirect Expenses",
  "Revenue From Operations",
  "Non Current Liabilities",
  "Duties % Taxes",
  "Reverse Charge",
  "Current Assets",
  "Sundry Debtors",
  "Operating Cost",
  "Dividend Income",
  "Interest Income",
  "Dividend Expense",
  "Interest Expense",
  "Sundry Creditors",
  "Indirect Expenses",
  "Non Current Assets",
  "Reserves % Surplus",
  "Current Liabilities",
  "Shareholder's Funds",
  "Other Indirect Expenses",
  "Revenue From Operations",
  "Non Current Liabilities"
];

const headingValue = [
  {
    id: 1,
    Value: "#",
  },
  {
    id: 2,
    Value: "Name Of Ledger",
  },
  {
    id: 3,
    Value: "Parent Group",
  },
  {
    id: 4,
    Value: "Opening Balance",
  },
  {
    id: 5,
    Value: "Closing Balance",
  },
  {
    id: 6,
    Value: "Grand Total",
  },
  {
    id: 7,
    Value: "April",
  },
  {
    id: 8,
    Value: "May",
  },
  {
    id: 9,
    Value: "June",
  },
  {
    id: 10,
    Value: "July",
  },
  {
    id: 11,
    Value: "August",
  },
];

const bodyValues = [
  {
    items: [
      1,
      "Cash",
      "Cash",
      "0.00",
      "0.00",
      "0.00",
      "0.00",
      "0.00",
      "0.00",
      "0.00",
      "0.00",
    ],
  },
  {
    items: [
      2,
      "Cash",
      "Cash",
      "0.00",
      "0.00",
      "0.00",
      "0.00",
      "0.00",
      "0.00",
      "0.00",
      "0.00",
    ],
  },
  {
    items: [
      3,
      "Cash",
      "Cash",
      "0.00",
      "0.00",
      "0.00",
      "0.00",
      "0.00",
      "0.00",
      "0.00",
      "0.00",
    ],
  },
];
</script>
