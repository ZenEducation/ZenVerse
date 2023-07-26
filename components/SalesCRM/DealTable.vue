<template>
  <div class="table_Holder">
    <!-- table section  -->
    <table>
      <thead>
        <tr class="">
          <th class="">
            <div class="text-center flex uppercase text-sm font-light">
              <FormCheckRadioGroup
                name="sample-checkbox-two"
                :options="{ i: '' }"
                component-class="check-radio-success"
              />

              <BaseIcon
                :path="mdiChevronDown"
                class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                size="20"
                h="20"
                w="20"
              />
            </div>
          </th>
          <th>
            <div class="text-center flex uppercase text-sm font-light">
              Deal Name

              <BaseIcon
                :path="mdiChevronDown"
                class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                size="20"
                h="20"
                w="20"
              />
            </div>
          </th>
          <th>
            <div class="text-center flex uppercase text-sm font-light">
              Company

              <BaseIcon
                :path="mdiChevronDown"
                class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                size="20"
                h="20"
                w="20"
              />
            </div>
          </th>
          <th>
            <div class="text-center flex uppercase text-sm font-light">
              Summary

              <BaseIcon
                :path="mdiChevronDown"
                class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                size="20"
                h="20"
                w="20"
              />
            </div>
          </th>
          <th>
            <div class="text-center flex uppercase text-sm font-light">
              Amount

              <BaseIcon
                :path="mdiChevronDown"
                class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                size="20"
                h="20"
                w="20"
              />
            </div>
          </th>
          <th>
            <div class="text-center flex uppercase text-sm font-light">
              Status

              <BaseIcon
                :path="mdiChevronDown"
                class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                size="20"
                h="20"
                w="20"
              />
            </div>
          </th>
          <th>
            <div class="text-center flex uppercase text-sm font-light">
              Pipeline

              <BaseIcon
                :path="mdiChevronDown"
                class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                size="20"
                h="20"
                w="20"
              />
            </div>
          </th>
          <th>
            <div class="text-center flex uppercase text-sm font-light">
              Stage

              <BaseIcon
                :path="mdiChevronDown"
                class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                size="20"
                h="20"
                w="20"
              />
            </div>
          </th>
          <th>
            <div class="text-center flex uppercase text-sm font-light">
              Source

              <BaseIcon
                :path="mdiChevronDown"
                class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                size="20"
                h="20"
                w="20"
              />
            </div>
          </th>
          <th>
            <div class="text-center flex uppercase text-sm font-light">
              Owner

              <BaseIcon
                :path="mdiChevronDown"
                class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                size="20"
                h="20"
                w="20"
              />
            </div>
          </th>
          <th>
            <div class="text-center flex uppercase text-sm font-light">
              Next Task

              <BaseIcon
                :path="mdiChevronDown"
                class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                size="20"
                h="20"
                w="20"
              />
            </div>
          </th>

          <th>
            <div class="text-center flex uppercase text-sm font-light">
              Next Task Due

              <BaseIcon
                :path="mdiChevronDown"
                class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                size="20"
                h="20"
                w="20"
              />
            </div>
          </th>

          <th>
            <div class="text-center flex uppercase text-sm font-light">
              People

              <BaseIcon
                :path="mdiChevronDown"
                class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                size="20"
                h="20"
                w="20"
              />
            </div>
          </th>

          <th>
            <div class="text-center flex uppercase text-sm font-light">
              Activities

              <BaseIcon
                :path="mdiChevronDown"
                class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                size="20"
                h="20"
                w="20"
              />
            </div>
          </th>
          <th>
            <div class="text-center flex uppercase text-sm font-light">
              Loss Reason

              <BaseIcon
                :path="mdiChevronDown"
                class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                size="20"
                h="20"
                w="20"
              />
            </div>
          </th>
          <th>
            <div class="text-center flex uppercase text-sm font-light">
              Loss Reason Notes

              <BaseIcon
                :path="mdiChevronDown"
                class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                size="20"
                h="20"
                w="20"
              />
            </div>
          </th>

          <th class=" ">
            <div class="text-center flex uppercase text-sm font-light w-5">
              Weighted forecast

              <BaseIcon
                :path="mdiChevronDown"
                class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                size="20"
                h="20"
                w="20"
              />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in data" :key="idx">
          <td class="">
            <FormCheckRadioGroup
              name="sample-checkbox-two"
              :options="{ i: '' }"
              component-class="check-radio-success"
            />
          </td>
          <td>
            {{ item.dealName }}
          </td>
          <td>
            {{ item.companyName }}
          </td>
          <td>
            {{ item.summary }}
          </td>
          <td class="text-right">
            {{ item.currency.symbol}}{{ item.amount }}
          </td>
          <td>
              <div class="flex justify-start items-center ">
                <div class="w-4 h-4  rounded-full mr-2"
                :class="item.status"
                >
                   
                </div>
                <div class="capitalize">{{ item.status}}</div>

              </div>   
          </td>
          <td>
            {{ item.pipeline }}
          </td>
          <td>
            {{ item.stage }}
          </td>
          <td>
            {{ item.source }}
          </td>
          <td>
            {{ item.owner }}
          </td>
          <td>
        
          </td>
          <td>
          
          </td>
          <td>
            <BaseIcon
              :path="mdiCardAccountDetailsOutline"
              class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
              size="20"
              h="20"
              w="20"
            /> {{ item.primaryContact }}
          </td>
          <td>
            <BaseIcon
              :path="mdiSquareEditOutline"
              class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
              size="20"
              h="20"
              w="20"
            />
          </td>
          <td>
      
          </td>
          <td>
      
          </td>
          <td class="text-right">
            {{ item.currency.symbol}}{{ item.amount }}.00
          
          </td>

        </tr>
      </tbody>
    </table>
    <!-- end table  -->

    <!-- pagination  -->
    <!-- <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
      <BaseLevel>
        <BaseButtons>
          <BaseButton
            v-for="page in pagesList"
            :key="page"
            :active="page === currentPage"
            :label="page + 1"
            :color="page === currentPage ? 'lightDark' : 'whiteDark'"
            small
            @click="currentPage = page"
          />
        </BaseButtons>
        <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
      </BaseLevel>
    </div> -->
    <!-- end pagination -->
  </div>
</template>

<script setup>
// imports
import {
  mdiEye,
  mdiCardAccountDetailsOutline,
  mdiSquareEditOutline,
} from "@mdi/js";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { defineProps, computed } from "vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import { useRouter } from "vue-router";

import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";

import {
  mdiStar,
  mdiMenuDown,
  mdiContentSave,
  mdiDeleteOutline,
  mdiTable,
  mdiChevronDown,
} from "@mdi/js";
const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: [],
  },
});
const router = useRouter();
const items = props.data;

// status list

const listBoxOptions = [
  "Pending",
  "Followup",
  "Recommendation Given",
  "Documents Pending",
  "Documents Submitted",
  "Offer Letter Received",
  "Visa Process Started",
];

const isModalActive = ref(false);

const isModalDangerActive = ref(false);

const perPage = ref(5);

const currentPage = ref(0);

const checkedRows = ref([]);

const itemsPaginated = computed(() =>
  items.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() => Math.ceil(items.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }

  return pagesList;
});

// goto action page

const goToAction = (id) => {
  router.push("/salesCRM/actions/" + id);
};
</script>

<style scoped>
.table_Holder {
  width: 100% !important;
}

table {
  table-layout: fixed;
  width: 100%;
  overflow: auto !important;
  display: block;
  overflow-x: auto;
  white-space: nowrap;
  max-height: 280px;
}

table thead {
  /* width:100%; */
  /* display:table-header-group !important; */
  display: table-header-group !important;
  width: 100%;
}

th {
  /* white-space: nowrap; */
  padding: 0.5rem 1rem !important;
}
td {
  width: 100% !important;
}
tr {
  page-break-inside: avoid;
}
.red{
  background: rgb(255, 59, 59);

}
.green{
  background: rgb(14, 202, 14);
}
.yellow {
  background: rgb(255, 255, 34);
}
</style>
