<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import { mdiPencil, mdiTrashCan } from "@mdi/js";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import TableLearnerEnabled from "@/components/Tables/TableLearnerEnabled.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import UserAvatar from "@/components/Avatars/UserAvatar";
import PremFormField from "@/components/Forms/PremFormField.vue";
import PremFormControl from "@/components/Forms/PremFormControl.vue";

defineProps({
  checkable: { type: Boolean, default: false },
});

const items = ref([
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

const joinDateOptions = ["all", "before", "on", "after", "between"];
const paymentOptions = ['all', 'success', 'failed', 'pending'];
const paymentSelectedFilter = ref("all");
const searchQuery = ref("");
const joinedFilterOption = ref("all");
const joinedFilterDate = ref("");
const joinedFilterStartDate = ref("");
const joinedFilterEndDate = ref("");
const perPage = 25;
const totalPages = ref(1);
const currentPage = ref(0);
const JoinedOnFilterModelActive = ref(false)
const paymentFilterModelActive = ref(false)

const resetfilter = ()=>{
   paymentSelectedFilter.value = "all";
   joinedFilterOption.value = "all";
   JoinedOnFilterModelActive.value = false;
   paymentFilterModelActive.value = false;

}

const filteredItems = computed(() => {
  let filtered = items.value;
  const search = new RegExp(searchQuery.value, "i");

  if (searchQuery.value) {
      filtered = filtered.filter((item) => {
        return search ? item["Order ID/TXN ID"].match(search) : true;
      });
    }

  if (paymentSelectedFilter.value !== "all") {
      filtered = filtered.filter((item) => item.Status === paymentSelectedFilter.value);
  }


  if (joinedFilterOption.value !== "all") {
    filtered = filtered.filter((item) => {
      const joinedDate = new Date(item.Date);

      if (joinedFilterOption.value === "on"  && joinedFilterDate.value != "" ) {
        const filterDate = new Date(joinedFilterDate.value);
        return joinedDate.toDateString() === filterDate.toDateString();
      }

      else if (joinedFilterOption.value === "before" && joinedFilterDate.value != "" ) {
        console.log('object');
        const filterDate = new Date(joinedFilterDate.value);
        return joinedDate < filterDate;
      }

      else if (joinedFilterOption.value === "after"  && joinedFilterDate.value != "") {
        const filterDate = new Date(joinedFilterDate.value);
        return joinedDate > filterDate;
      }

      else if (joinedFilterOption.value === "between" && (joinedFilterStartDate.value && joinedFilterEndDate.value )) {
        const startDate = new Date(joinedFilterStartDate.value);
        const endDate = new Date(joinedFilterEndDate.value);
        return joinedDate >= startDate && joinedDate <= endDate;
      }
      else {
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

  <form class="relative" @submit.prevent="submit">
    <label for="msg-search" class="sr-only">Search</label>
    <input
      id="msg-search"
      class="form-input w-full pl-9 focus:border-slate-300"
      type="search"
      v-model="searchQuery"
      placeholder="Search by Order/Transaction ID "
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


<div class="lg:flex justify-between py-8 ">

  <div class="flex items-start gap-y-4 flex-wrap">
    <div  class="relative mr-4">
      <p>filter by:</p>
    </div>
    <div class="relative mr-4">
      <div @click="JoinedOnFilterModelActive = !JoinedOnFilterModelActive"
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
      <div class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black " v-if="JoinedOnFilterModelActive">
        <PremFormField class="xl:mb-0  min-w-[50%] xl:min-w-[20%] " >
          <PremFormControl
            :options="joinDateOptions"
            v-model="joinedFilterOption"
          />
        </PremFormField>
        <PremFormField class=" min-w-[50%] xl:min-w-[20%] mt-3" v-if= "joinedFilterOption != 'all' && joinedFilterOption != 'between' " >
          <PremFormControl
            
            v-model="joinedFilterDate"
            type="date"
          />
        </PremFormField>
        <PremFormField
          class=" min-w-[50%] xl:min-w-[20%] mb-0"
          v-if="joinedFilterOption == 'between'"
          label="From"
        >
          <PremFormControl 
            v-model="joinedFilterStartDate"
            type="date"
          />
        </PremFormField>
        <PremFormField
          class=" min-w-[50%] xl:min-w-[20%] mb-0"
          v-if="joinedFilterOption == 'between'"
          label="To"
        >
          <PremFormControl 
            v-model="joinedFilterEndDate"
            type="date"
          />
        </PremFormField>

      </div>
    </div>
    <div class="relative mr-4">
      <div @click="paymentFilterModelActive = !paymentFilterModelActive"
        class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
      >
        <p
          role=""
          tabindex="-1"
          class="break-words text-body text-darkSlate01 false flex-grow leading-none"
        >
          payment Status
        </p>
      </div>
      <div class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black " v-if="paymentFilterModelActive">
        <PremFormControl :options="paymentOptions" v-model="paymentSelectedFilter"  />


      </div>
    </div>

  </div>

    <div
    class="flex-end mr-4 p-[0.6rem] underline cursor-pointer leading-none"
    @click="resetfilter"
  >
    <p
      role=""
      tabindex="-1"
      class="break-words text-body text-darkSlate01 false"
    >
      Reset Fiters
    </p>
  </div>

    
  </div>

  <div class="text-gray-500 dark:text-white">
    <span>{{ filteredItems.length }} Transactions </span>
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
</template>