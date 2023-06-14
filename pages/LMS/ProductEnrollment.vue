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
import { adminPanelButtonMenu } from "@/configs/adminPanelButtonMenu.js";
import {
  mdiDotsVertical,
  mdiAccountPlus,
  mdiWindowClose,
  mdiAccount,
  mdiMail,
  mdiCellphone,
  mdiAsterisk,
  mdiFormTextboxPassword,
} from "@mdi/js";

import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";

defineProps({
  checkable: { type: Boolean, default: false },
});
const deleteItemId = ref("");
const EnableItemId = ref("");

const isModalActive = ref(false);
const isModalDangerActive = ref(false);
const isModalEnableActive = ref(false);

const items = ref([
  {
    id: 1,
    ProductID: "course123",
    ProductName: "Howell Hand",
    ProductType: "Course",
    Enrollments: "+91-9987654321",
    lastLogin: "Mar 03, 2021",
    isEnabled: true,
  },
  {
    id: 2,
    ProductID: "test456",
    ProductName: "Emily Johnson",
    ProductType: "Mock Test",
    Enrollments: "+1-1234567890",
    lastLogin: "May 10, 2023",
    isEnabled: false,
  },
  {
    id: 3,
    ProductID: "bundle789",
    ProductName: "John Doe",
    ProductType: "Bundle",
    Enrollments: "+1-9876543210",
    lastLogin: "May 31, 2023",
    isEnabled: true,
  },
  {
    id: 4,
    ProductID: "test234",
    ProductName: "Alice Smith",
    ProductType: "Test Series",
    Enrollments: "+44-7418529630",
    lastLogin: "May 29, 2023",
    isEnabled: true,
  },
]);
const joinDateOptions = ["all", "before", "on", "after", "between"];
const ProductOptions = ["all", "Course", "Mock Test", "Bundle", "Test Series"];
const membershipOptions = ["all", "enabled", "disabled"];

const membershipSelectedFilter = ref("all");
const ProductSelectedFilter = ref("all");

const searchQuery = ref("");

const lastLoginFilterOption = ref("all");
const lastLoginFilterDate = ref("");
const lastLoginFilterStartDate = ref("");
const lastLoginFilterEndDate = ref("");
const perPage = 25;
const totalPages = ref(1);
const currentPage = ref(0);
const MembershipFilterModelActive = ref(false);
const ProductFilterModelActive = ref(false);

const LastLoginFilterModelActive = ref(false);

const resetfilter = () => {
  membershipSelectedFilter.value = "all";
  ProductSelectedFilter.value = "all";
  lastLoginFilterOption.value = "all";
  MembershipFilterModelActive.value = false;
  ProductFilterModelActive.value = false;
  LastLoginFilterModelActive.value = false;
  searchQuery.value = ""
};

const filteredItems = computed(() => {
  let filtered = items.value;
  const search = new RegExp(searchQuery.value, "i");

  if (searchQuery.value) {
    filtered = filtered.filter((item) => {
      return search
        ? item.ProductID.match(search) ||
            item.ProductName.match(search)
        : true;
    });
  }

  if (membershipSelectedFilter.value == "enabled") {
    filtered = filtered.filter((item) => item.isEnabled);
  }
  if (membershipSelectedFilter.value == "disabled") {
    filtered = filtered.filter((item) => !item.isEnabled);
  }

  if (ProductSelectedFilter.value != "all") {
    filtered = filtered.filter((item) => {
      return item.ProductType == ProductSelectedFilter.value;
    });
  }

  if (lastLoginFilterOption.value !== "all") {
    filtered = filtered.filter((item) => {
      const lastLoginDate = new Date(item.lastLogin);

      if (lastLoginFilterOption.value === "on" && lastLoginFilterDate.value) {
        const filterDate = new Date(lastLoginFilterDate.value);
        return lastLoginDate.toDateString() === filterDate.toDateString();
      } else if (
        lastLoginFilterOption.value === "before" &&
        lastLoginFilterDate.value
      ) {
        const filterDate = new Date(lastLoginFilterDate.value);
        return lastLoginDate < filterDate;
      } else if (
        lastLoginFilterOption.value === "after" &&
        lastLoginFilterDate.value
      ) {
        const filterDate = new Date(lastLoginFilterDate.value);
        return lastLoginDate > filterDate;
      } else if (
        lastLoginFilterOption.value === "between" &&
        lastLoginFilterStartDate.value &&
        lastLoginFilterEndDate.value
      ) {
        const startDate = new Date(lastLoginFilterStartDate.value);
        const endDate = new Date(lastLoginFilterEndDate.value);
        return lastLoginDate >= startDate && lastLoginDate <= endDate;
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

const EnableItem = (popup, id) => {
  if (popup) {
    isModalEnableActive.value = true;
    console.log("id is", id);
    EnableItemId.value = id;
    return;
  }
  const index = items.value.findIndex((item) => item.id === EnableItemId.value);
  console.log("index is", index);
  if (index !== -1) {
    items.value[index].isEnabled = !items.value[index].isEnabled;
  }
};

const deleteItem = (popup, id) => {
  if (popup) {
    isModalDangerActive.value = true;
    deleteItemId.value = id;
    return;
  }
  const index = items.value.findIndex((item) => item.id === deleteItemId.value);
  if (index !== -1) {
    items.value.splice(index, 1);
  }
};
</script>
<template>
  <CardBoxModal
    v-model="isModalEnableActive"
    title="Are you sure you want to Change status ?"
    button="danger"
    buttonLabel="Yes"
    has-cancel
    @confirm="EnableItem(false)"
  />

  <NuxtLayout name="zen">
    <div
      class="flex justify-between border-b border-gray-300 p-2 mt-5 xl:max-w-7xl xl:mx-auto bg-gray-100 rounded dark:bg-gray-700"
    >
      <div class="heading">
        <h1 class="font-bold text-2xl">Product Enrollment</h1>
        <h3 class="font-thin text-xs text-gray-500 py-1 dark:text-white">
        </h3>
      </div>
      <BaseButtons type="ml-auto xl:mr-4 mr-1">
        <BaseButton
          class="flex-1"
          label="Export"
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
    <div class="flex flex-col gap-4 mx-10 xl:max-w-7xl xl:mx-auto pt-10">
      <form class="relative" @submit.prevent="submit">
        <label for="msg-search" class="sr-only">Search</label>
        <input
          id="msg-search"
          class="form-input w-full pl-9 focus:border-slate-300"
          type="search"
          v-model="searchQuery"
          placeholder="Search by Product Name/ID"
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

      <div class="lg:flex justify-between">
        <div class="flex items-start gap-y-4 flex-wrap">
          <div class="relative mr-4">
            <p>filter by:</p>
          </div>

          <div class="relative mr-4">
            <div
              @click="LastLoginFilterModelActive = !LastLoginFilterModelActive"
              class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
            >
              <p
                role=""
                tabindex="-1"
                class="break-words text-body text-darkSlate01 false flex-grow leading-none"
              >
                Last login
              </p>
            </div>
            <div
              class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black"
              v-if="LastLoginFilterModelActive"
            >
              <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]">
                <PremFormControl
                  :options="joinDateOptions"
                  v-model="lastLoginFilterOption"
                />
              </PremFormField>
              <PremFormField
                class="mt-3 min-w-[50%] xl:min-w-[20%]"
                v-if="
                  lastLoginFilterOption != 'all' &&
                  lastLoginFilterOption != 'between'
                "
              >
                <PremFormControl v-model="lastLoginFilterDate" type="date" />
              </PremFormField>
              <PremFormField
                class="xl:mb-0 min-w-[50%] xl:min-w-[20%]"
                v-if="lastLoginFilterOption == 'between'"
                label="From"
              >
                <PremFormControl
                  v-model="lastLoginFilterStartDate"
                  type="date"
                />
              </PremFormField>
              <PremFormField
                class="xl:mb-0 min-w-[50%] xl:min-w-[20%]"
                v-if="lastLoginFilterOption == 'between'"
                label="To"
              >
                <PremFormControl v-model="lastLoginFilterEndDate" type="date" />
              </PremFormField>
            </div>
          </div>
          <div class="relative mr-4">
            <div
              @click="
                MembershipFilterModelActive = !MembershipFilterModelActive
              "
              class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
            >
              <p
                role=""
                tabindex="-1"
                class="break-words text-body text-darkSlate01 false flex-grow leading-none"
              >
                Status
              </p>
            </div>
            <div
              class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black"
              v-if="MembershipFilterModelActive"
            >
              <PremFormControl
                :options="membershipOptions"
                v-model="membershipSelectedFilter"
              />
            </div>
          </div>
          <div class="relative mr-4">
            <div
              @click="ProductFilterModelActive = !ProductFilterModelActive"
              class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
            >
              <p
                role=""
                tabindex="-1"
                class="break-words text-body text-darkSlate01 false flex-grow leading-none"
              >
                Product Type
              </p>
            </div>
            <div
              class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black"
              v-if="ProductFilterModelActive"
            >
              <PremFormControl
                :options="ProductOptions"
                v-model="ProductSelectedFilter"
              />
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
            Reset Filters
          </p>
        </div>
      </div>

      <div class="text-gray-500 dark:text-white">
        <span>{{ filteredItems.length }} Products</span>
      </div>

      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Type</th>
            <th>Enrollments</th>
            <th>Last Login</th>
            <th>Enabled</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr v-for="learners in filteredItems" :key="learners.id">
            <td data-label="Product ID">
              {{ learners.ProductID }}
            </td>
            <td data-label="Product Name">
              {{ learners.ProductName }}
            </td>
            <td data-label="Product Type">
              {{ learners.ProductType }}
            </td>
            <td data-label="Enrollments">
              {{ learners.Enrollments }}
            </td>
            <td data-label="Last Login" class="lg:w-1 whitespace-nowrap">
              <small
                class="text-gray-500 dark:text-slate-400"
                :title="learners.lastLogin"
                >{{ learners.lastLogin }}</small
              >
            </td>
            <TableLearnerEnabled
              data-label="Enabled"
              :checked="learners.isEnabled"
              @click="EnableItem(true, learners.id)"
            />
            <td>
              <BaseButtons type="justify-start lg:justify-end" no-wrap>
                <BaseButton color="info" small label="View Progress" />
              </BaseButtons>
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
  </NuxtLayout>
</template>

<style lang="scss" scoped></style>
