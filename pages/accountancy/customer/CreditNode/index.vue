<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import {
  mdiPencil,
  mdiTrashCan,
  mdiFilter,
  mdiFilterOff,
  mdiMessageBadge,
mdiInformation,
} from "@mdi/js";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";

defineProps({
  checkable: { type: Boolean, default: false },
});
const mainStore = useMainStore();
const isModalActive = ref(false);

const tabs = [
  "Estimation",
  "Proformas",
  "Invoices",
  "Recurring",
  "Settings",
  "Templates",
];
const settingsTabs = ["General", "Email", "Estimate", "Proforma", "Invoice"];
const currentSettingTab = ref(0);
const currentMainTab = ref(0);

const items = ref(mainStore.Invoices);
console.log(items.value);
const joinDateOptions = ["all", "before", "on", "after", "between"];
const joinedFilterOption = ref("all");
const joinedFilterDate = ref("");
const joinedFilterStartDate = ref("");
const joinedFilterEndDate = ref("");
const perPage = 25;
const totalPages = ref(1);
const currentPage = ref(0);
const JoinedOnFilterModelActive = ref(false);

const resetfilter = () => {
  joinedFilterOption.value = "all";
  JoinedOnFilterModelActive.value = false;
};

const filteredItems = computed(() => {
  let filtered = items.value;

  if (joinedFilterOption.value !== "all") {
    filtered = filtered.filter((item) => {
      const joinedDate = new Date(item.Date);

      if (joinedFilterOption.value === "on" && joinedFilterDate.value != "") {
        const filterDate = new Date(joinedFilterDate.value);
        return joinedDate.toDateString() === filterDate.toDateString();
      } else if (
        joinedFilterOption.value === "before" &&
        joinedFilterDate.value != ""
      ) {
        console.log("object");
        const filterDate = new Date(joinedFilterDate.value);
        return joinedDate < filterDate;
      } else if (
        joinedFilterOption.value === "after" &&
        joinedFilterDate.value != ""
      ) {
        const filterDate = new Date(joinedFilterDate.value);
        return joinedDate > filterDate;
      } else if (
        joinedFilterOption.value === "between" &&
        joinedFilterStartDate.value &&
        joinedFilterEndDate.value
      ) {
        const startDate = new Date(joinedFilterStartDate.value);
        const endDate = new Date(joinedFilterEndDate.value);
        return joinedDate >= startDate && joinedDate <= endDate;
      } else {
        return true;
      }
    });
  }

  totalPages.value = Math.ceil(filtered.length / perPage);
  const start = currentPage.value * perPage;
  const end = (currentPage.value + 1) * perPage;

  return filtered.slice(start, end);
});
</script>

<template>
  <NuxtLayout name="accounts">

    <div class="px-7" >
      <div
        class="flex gap-2 flex-wrap justify-between border-b border-gray-300 p-2 mt-1 xl:max-w-7xl xl:mx-auto"
      >
        <div class="flex flex-wrap gap-2">
          <NuxtLink to="/accountancy/customer/CreditNode/Create">
            <BaseButton
              class="flex-1"
              type="submit"
              label="+ Add Credit Node"
              color="info"
              @click="isModalActive = true"
            />
          </NuxtLink>
          <div class="relative mr-4">
            <div
              @click="JoinedOnFilterModelActive = !JoinedOnFilterModelActive"
              class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
            >
              <p
                role=""
                tabindex="-1"
                class="break-words text-body text-darkSlate01 false flex-grow leading-none"
              >
                Date
              </p>
            </div>
            <div
              class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black"
              v-if="JoinedOnFilterModelActive"
            >
              <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]">
                <PremFormControl
                  :options="joinDateOptions"
                  v-model="joinedFilterOption"
                />
              </PremFormField>
              <PremFormField
                class="min-w-[50%] xl:min-w-[20%] mt-3"
                v-if="
                  joinedFilterOption != 'all' && joinedFilterOption != 'between'
                "
              >
                <PremFormControl v-model="joinedFilterDate" type="date" />
              </PremFormField>
              <PremFormField
                class="min-w-[50%] xl:min-w-[20%] mb-0"
                v-if="joinedFilterOption == 'between'"
                label="From"
              >
                <PremFormControl v-model="joinedFilterStartDate" type="date" />
              </PremFormField>
              <PremFormField
                class="min-w-[50%] xl:min-w-[20%] mb-0"
                v-if="joinedFilterOption == 'between'"
                label="To"
              >
                <PremFormControl v-model="joinedFilterEndDate" type="date" />
              </PremFormField>
            </div>
          </div>
        </div>
        <div>
          <BaseButton
            class="flex-1"
            :icon="mdiFilterOff"
            color="info"
            @click="resetfilter"
          />
        </div>
      </div>

      <div>
        <div class="text-gray-500 dark:text-white mt-4">
          <span>{{ filteredItems.length }} Invoices</span>
        </div>

        <table>
          <thead>
            <tr>
              <th>Account</th>
              <th>Date</th>
              <th>Voucher Type</th>
              <th>Voucher No</th>
              <th>Sales</th>
              <th>Return</th>
              <th>QtyRate</th>
              <th>Discount</th>
              <th>Tax</th>
              <th>Net Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Invoice in filteredItems" :key="Invoice.id">
              <td data-label="Account">
                {{ Invoice.account }}
              </td>
              <td data-label="Date">
                {{ Invoice.Date }}
              </td>
              <td data-label="Voucher Type">
                {{ Invoice.voucherType }}
              </td>
              <td data-label="Voucher No">
                {{ Invoice.voucherNo }}
              </td>
              <td data-label="Sales">
                {{ Invoice.sales }}
              </td>
              <td data-label="Return">
                {{ Invoice.return }}
              </td>
              <td data-label="Qty Rate">
                {{ Invoice.qtyRate }}
              </td>
              <td data-label="Discount">
                {{ Invoice.discount }}
              </td>
              <td data-label="Tax">
                {{ Invoice.tax }}
              </td>
              <td data-label="Net Sales">
                {{ Invoice.netSales }}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
          <BaseLevel>
            <BaseButtons>
              <BaseButton
                v-for="page in totalPages"
                :key="page"
                :active="page - 1 === currentPage"
                :label="page"
                :color="page - 1 === currentPage ? 'lightDark' : 'whiteDark'"
                small
                @click="currentPage = page - 1"
              />
            </BaseButtons>
            <small>Page {{ currentPage + 1 }} of {{ totalPages }}</small>
          </BaseLevel>
        </div>
      </div>
    </div>


  </NuxtLayout>
</template>
