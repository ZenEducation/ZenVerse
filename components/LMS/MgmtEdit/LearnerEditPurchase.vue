<template>
  <div>
    <form class="relative" @submit.prevent="submit">
      <label for="msg-search" class="sr-only">Search</label>
      <input
        id="msg-search"
        class="form-input w-full pl-9 focus:border-slate-300"
        type="search"
        v-model="searchQuery"
        placeholder="Search by Name, Email or Mobile Number"
      />
      <button class="absolute inset-0 right-auto group" aria-label="Search">
        <svg
          class="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
          />
          <path
            d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
          />
        </svg>
      </button>
    </form>

    <div class="lg:flex justify-between mt-6">
      <div class="w-full">
        <div
          class="relative mt-4 inline-block mr-4 max-sm:w-full sm:w-1/3 lg:w-1/5"
        >
          <p>filter by:</p>
        </div>
        <div
          class="relative mt-4 inline-block mr-4 max-sm:w-full sm:w-1/3 lg:w-1/5"
        >
          <FormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]" label="Status">
            <FormControl
              :options="['all', 'success', 'failed', 'pending']"
              v-model="FilterStatus"
            />
          </FormField>
        </div>
        <div
          class="relative mt-4 inline-block mr-4 max-sm:w-full sm:w-1/3 lg:w-1/5"
        >
          <FormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]" label="Date">
            <FormControl v-model="FilterDate" type="date" />
          </FormField>
        </div>
      </div>

      <div
        class="flex-end mr-4 p-[0.6rem] underline cursor-pointer leading-none flex items-center"
        @click="resetfilter"
      >
        <p
          role=""
          tabindex="-1"
          class="break-words text-body text-darkSlate01 false"
        >
          Reset Filters
        </p>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Order ID/TXN ID</th>
          <th>Items</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredItems" :key="item['Order ID/TXN ID']">
          <td data-label="Date" class="lg:w-1 whitespace-nowrap">
            <small
              class="text-gray-500 dark:text-slate-400"
              :title="item.Date"
              >{{ item.Date }}</small
            >
          </td>

          <td data-label="Order ID/TXN ID">
            {{ item["Order ID/TXN ID"] }}
          </td>
          <td data-label="Items">
            {{ item.Items }}
          </td>
          <td data-label="Amount">
            {{ item.Amount }}
          </td>
          <td data-label="Status">
            {{ item.Status }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import TableLearnerEnabled from "@/components/Tables/TableLearnerEnabled.vue";
import { mdiTrashCan } from "@mdi/js";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";

const PurchaseHistory = ref([
  {
    Date: "Mar 03 , 2023",
    "Order ID/TXN ID": "avds12432432",
    Amount: 500,
    Status: "success",
    Items: 4,
  },
  {
    Date: "Mar 23 , 2023",
    "Order ID/TXN ID": "avds124fwfedf432",
    Amount: 400,
    Status: "failed",
    Items: 4,
  },
  {
    Date: "Mar 13 , 2023",
    "Order ID/TXN ID": "avds1sadvad32432",
    Amount: 1200,
    Status: "pending",
    Items: 4,
  },
]);

const searchQuery = ref("");
const FilterDate = ref("");
const FilterStatus = ref("all");

const resetfilter = () => {
  searchQuery.value = "";
  FilterDate.value = "";
  FilterStatus.value = "all";
};

const filteredItems = computed(() => {
  let filtered = PurchaseHistory.value;
  const search = new RegExp(searchQuery.value, "i");

  if (searchQuery.value) {
    filtered = filtered.filter((item) => {
      return search ? item["Order ID/TXN ID"].match(search) : true;
    });
  }
  if (FilterStatus.value != "all") {
    filtered = filtered.filter((item) => item.Status === FilterStatus.value);
  }
  if (FilterDate.value) {
    const joinDate = new Date(FilterDate.value);
    filtered = filtered.filter((item) => {
      const present = new Date(item.Date);
      return joinDate.toDateString() == present.toDateString();
    });
  }

  return filtered;
});
</script>

<style lang="scss" scoped></style>
