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
    <div class="p-8">
        <div class="flex flex-wrap gap-6 justify-between items-center">
            <div class="flex flex-wrap gap-6 items-center w-full">
                <FormsFormControl class="w-1/3 max-md:w-full" :options="['FY-APR2022-MAR2023']"/>
                <FormsFormControl class="w-1/3 max-md:w-full" :options="['Monthly' , 'Quarterly' , 'Half Yearly','Yearly']"/>
            </div>
            <div>
                <BaseButton label="Export" color="info" />
            </div> 


        </div>
        <div class="mt-6 my-4">
            <p class="text-purple-500">FY-APR2022-MAR2023</p>
            <div class="grid grid-cols-2 border-b-2 text-xl py-4 ">
                <p>Particular</p>
                <p>Sales</p>
            </div>
            <div class="grid grid-cols-2 border-b cursor-pointer py-2 hover:bg-slate-100 dark:hover:bg-slate-700 " v-for="i in 8">
                <p class="text-blue-500">April 2022</p>
                <p>0.00</p>
            </div>
        </div>
    </div>

  </NuxtLayout>
</template>
