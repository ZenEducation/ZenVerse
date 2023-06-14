<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import { mdiWindowClose , mdiDownload } from "@mdi/js";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import TableLearnerEnabled from "@/components/Tables/TableLearnerEnabled.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormCheckRadio from "@/components/Forms/FormCheckRadio.vue";
import FormControl from "@/components/Forms/FormControl.vue";


defineProps({
  checkable: { type: Boolean, default: false },
});
const mainStore = useMainStore();
const EnableItemId = ref("");

const isModalActive = ref(false);
const isModalEnableActive = ref(false);

const items = ref([
  {
    code: "123/dfsa-as",
    createdOn: "Mar 3, 2021",
    credits: 1000,
    validTill: "Mar 3, 2023",
    isEnabled: true,
    usageType: "one time",
    redeemedBy: "Mar 3,2022",
  },
  {
    code: "456/abc-xy",
    createdOn: "Jun 15, 2022",
    credits: 500,
    validTill: "Jun 15, 2024",
    isEnabled: false,
    usageType: "multiple times",
    redeemedBy: "",
  },
  {
    code: "789/xyz-zz",
    createdOn: "Dec 8, 2022",
    credits: 2000,
    validTill: "Dec 8, 2024",
    isEnabled: true,
    usageType: "one time",
    redeemedBy: "Jan 5, 2023",
  },
  {
    code: "111/aaa-bb",
    createdOn: "Sep 1, 2022",
    credits: 750,
    validTill: "Sep 1, 2023",
    isEnabled: true,
    usageType: "one time",
    redeemedBy: "",
  },
  {
    code: "222/bbb-cc",
    createdOn: "Feb 14, 2023",
    credits: 1500,
    validTill: "Feb 14, 2025",
    isEnabled: true,
    usageType: "multiple times",
    redeemedBy: "",
  },
  {
    code: "333/ccc-dd",
    createdOn: "Oct 25, 2022",
    credits: 300,
    validTill: "Oct 25, 2024",
    isEnabled: false,
    usageType: "one time",
    redeemedBy: "",
  },
  {
    code: "444/ddd-ee",
    createdOn: "Apr 10, 2023",
    credits: 200,
    validTill: "Apr 10, 2024",
    isEnabled: true,
    usageType: "multiple times",
    redeemedBy: "",
  },
  {
    code: "555/eee-ff",
    createdOn: "Nov 30, 2022",
    credits: 100,
    validTill: "Nov 30, 2023",
    isEnabled: true,
    usageType: "one time",
    redeemedBy: "",
  },
]);

const searchQuery = ref("");

const perPage = 25;
const totalPages = ref(1);
const currentPage = ref(0);

const filteredItems = computed(() => {
  let filtered = items.value;
  const search = new RegExp(searchQuery.value, "i");

  if (searchQuery.value) {
    filtered = filtered.filter((item) => {
      return search ? item.code.match(search) : true;
    });
  }

  totalPages.value = Math.ceil(filtered.length / perPage);
  const start = currentPage.value * perPage;
  const end = (currentPage.value + 1) * perPage;

  return filtered.slice(start, end);
});
const optionsUsageTypes = ["one time", "multiple times"];

const newEntry = ref({
  code: "",
  createdOn: "",
  credits: 0,
  validTill: "",
  isEnabled: true,
  usageType: "one time",
  redeemedBy: "",
});

const addNewEntries = () => {
  const entry = {
    code: newEntry.value.code,
    createdOn: newEntry.value.createdOn,
    credits: newEntry.value.credits,
    validTill: newEntry.value.validTill,
    isEnabled: newEntry.value.isEnabled,
    usageType: newEntry.value.usageType,
    redeemedBy: newEntry.value.redeemedBy,
  };


  items.value.push(entry);
  isModalActive.value = false;
};


const EnableItem = (popup, id) => {
  if (popup) {
    isModalEnableActive.value = true;
    console.log("id is", id);
    EnableItemId.value = id;
    return;
  }
  const index = items.value.findIndex((item) => item.code === EnableItemId.value);
  console.log("index is", index);
  if (index !== -1) {
    items.value[index].isEnabled = !items.value[index].isEnabled;
  }
};
</script>

<template>
  <CardBoxModal v-model="isModalActive" :showFooter="false" title="">
    <header
      class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
    >
      <div class="text-gray-500">
        <BaseIcon v-if="mdiAccountPlus" :path="mdiAccountPlus" :size="32" />
      </div>
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Add Code</h1>
      </div>
      <div class="text-gray-500 cursor-pointer" @click="isModalActive = false">
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>
    <CardBox is-form @submit.prevent="submitProfile">
      <FormField label="Code">
        <FormControl
          v-model="newEntry.code"
          placeholder="Enter code"
        />
      </FormField>
      <FormField label="Credits">
        <FormControl
          v-model="newEntry.credits"
          type="number"
        />
      </FormField>
      <FormField label="Usage Type">
        <FormControl
          v-model="newEntry.usageType"
          :options="optionsUsageTypes"
        />
      </FormField>
      <FormField label="Created On">
        <FormControl
          v-model="newEntry.createdOn"
          type="date"
        />
      </FormField>

      <FormField label="Valid Till">
        <FormControl
          v-model="newEntry.validTill"
          type="date"
        />
      </FormField>

      <div class="flex justify-end py-2">
        <BaseButtons>
          <BaseButton color="info" label="Submit" @click="addNewEntries" />
        </BaseButtons>
      </div>
    </CardBox>
  </CardBoxModal>

  <CardBoxModal
    v-model="isModalEnableActive"
    title="Are you sure you want to Change status of this code?"
    button="danger"
    buttonLabel="Yes"
    has-cancel
    @confirm="EnableItem(false)"
  />

  <div
  class="flex justify-between  my-5 xl:max-w-7xl xl:mx-auto"
>
  <div class="heading">
    <h1 class="font-bold text-2xl">Codes Management</h1>
  </div>
  <BaseButtons type="ml-auto xl:mr-4 mr-1">
    <BaseButton
      class="flex-1"
      type="submit"
      label="+ Add"
      :icon="mdiMessageBadge"
      color="info"
      @click="isModalActive = true"
    />
    <BaseButton
    class="flex-1"
    type="submit"
    label="Export"
    :icon="mdiDownload"
    color="info"
  />
  </BaseButtons>
  <div class="flex items-center justify-center">
    <PremButtonMenu
      :options="adminPanelButtonMenu"
      :icon="mdiDotsVertical"
    />
  </div>
</div>

  <form class="relative" @submit.prevent="submit">
    <label for="msg-search" class="sr-only">Search</label>
    <input
      id="msg-search"
      class="form-input w-full pl-9 focus:border-slate-300"
      type="search"
      v-model="searchQuery"
      placeholder="Search by Code"
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

  <div class="text-gray-500 dark:text-white">
    <span>{{ filteredItems.length }} entries</span>
  </div>

  <table>
    <thead>
      <tr>
        <th>Created On</th>
        <th>Code</th>
        <th>Credits</th>
        <th>Valid Till</th>
        <th>Usage Type</th>
        <th>Active</th>
        <th>Redeemed By</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in filteredItems" :key="item.code">
        <td data-label="Created On" class="lg:w-1 whitespace-nowrap">
          <small
            class="text-gray-500 dark:text-slate-400"
            :title="item.createdOn"
            >{{ new Date(item.createdOn).toDateString() }}</small
          >
        </td>
        <td data-label="Code">
          {{ item.code }}
        </td>
        <td data-label="Credits">
          {{ item.credits }}
        </td>
        <td data-label="Valid Till" class="lg:w-1 whitespace-nowrap">
          <small
            class="text-gray-500 dark:text-slate-400"
            :title="item.validTill"
            >{{ new Date(item.validTill).toDateString() }}</small
          >
        </td>
        <td data-label="Usage Type">
          {{ item.usageType }}
        </td>

        <TableLearnerEnabled
          data-label="Enabled"
          :checked="item.isEnabled"
          @click="EnableItem(true, item.code)"
        />
        <td data-label="Redeemed By" class="lg:w-1 whitespace-nowrap">
          <small
            v-if="item.redeemedBy"
            class="text-gray-500 dark:text-slate-400"
            :title="item.redeemedBy"
            >{{ new Date(item.redeemedBy).toDateString() }}</small
          >
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
