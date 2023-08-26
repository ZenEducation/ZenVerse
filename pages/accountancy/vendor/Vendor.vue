<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import { mdiPencil, mdiTrashCan, mdiFilter, mdiFilterRemove } from "@mdi/js";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import TableLearnerEnabled from "@/components/Tables/TableLearnerEnabled.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import UserAvatar from "@/components/Avatars/UserAvatar";
import PremFormField from "@/components/Forms/PremFormField.vue";
import PremFormControl from "@/components/Forms/PremFormControl.vue";

import { adminPanelButtonMenu } from "@/configs/adminPanelButtonMenu.js";
import uuid4 from "uuid4";
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
import BaseIcon from "@/components/Display/BaseIcon.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormCheckRadio from "@/components/Forms/FormCheckRadio.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";

defineProps({
  checkable: { type: Boolean, default: false },
});
const mainStore = useMainStore();
const deleteItemId = ref("");

const isModalEditActive = ref(false);
const isModalDangerActive = ref(false);
const isModalEnableActive = ref(false);
const EnableItemId = ref("");

const isModalActive = ref(false);

const name = ref("");
const mobile = ref("");
const email = ref("");
const groupOptions = ["group1", "group2"];
const indianStatesOptions = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];
const addFormData = ref({
  name: "",
  currency: "",
  parentGroup: "",
  openings: 0,
  Purchase: 0,
  Payment: 0,
  closing: 0,
  contacts: {
    phone: "",
    email: "",
  },
  state: "Maharashtra",
  taxNumber: "GSTN1234",
  pincode: "",
  Comment: "",
});

function submitProfile() {
  isModalActive.value = false;
  useMainStore().addVendor({
    id: uuid4(),
    avatar: "https://avatars.dicebear.com/v2/gridy/Howell-Hand.svg",
    login: "percy64",
    name: addFormData.value.name,
    parentGroup: addFormData.value.parentGroup,
    openings: addFormData.value.openings,
    Purchase: addFormData.value.Purchase,
    Payment: addFormData.value.Payment,
    closing: addFormData.value.closing,
    contacts: "",
    state: addFormData.value.state,
    taxNumber: addFormData.value.taxNumber,
    Comment: "",
  });
}
const currentTab = ref(0);

const items = ref(mainStore.Vendors);
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

  // if (joinedFilterOption.value !== "all") {
  if (false) {
    filtered = filtered.filter((item) => {
      const joinedDate = new Date(item.openings);

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
  <NuxtLayout name="accounts">
    <CardBoxModal v-model="isModalActive" :showFooter="false" title="">
      <header
        class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
      >
        <div class="text-gray-500">
          <BaseIcon v-if="mdiAccountPlus" :path="mdiAccountPlus" :size="32" />
        </div>
        <div class="flex flex-col ml-5 mx-auto">
          <h1 class="font-bold">Add Vendor</h1>
          <h3 class="text-xs">Enter details to create Vendor manually</h3>
        </div>
        <div
          class="text-gray-500 cursor-pointer"
          @click="isModalActive = false"
        >
          <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
        </div>
      </header>
      <CardBox is-form @submit.prevent="submitProfile">
        <div class="flex gap-2 flex-wrap items-center">
          <FormField label="Select Group" class="w-full">
            <FormControl
              :icon="mdiAccount"
              required
              v-model="addFormData.parentGroup"
              :options="groupOptions"
            />
          </FormField>
          <FormField label="Name" class="w-full">
            <FormControl
              required
              v-model="addFormData.name"
              placeholder="Account name"
            />
          </FormField>
          <FormField label="Country" class="w-full">
            <FormControl required placeholder="Country" value="In - India" />
          </FormField>
          <FormField label="Currency" class="w-full">
            <FormControl aria-valuetext="INR" />
          </FormField>
          <FormField label="Opening Balance" class="w-full">
            <FormControl
              required
              v-model="addFormData.openings"
              placeholder="00.00"
            />
          </FormField>
        </div>

        <div class="flex gap-3 items-center border-y-2 mt-5">
          <p
            class="text-lg font-bold cursor-pointer"
            @click="currentTab = 0"
            :class="{ 'text-blue-400 underline': currentTab == 0 }"
          >
            Address
          </p>
          <p
            class="text-lg font-bold cursor-pointer"
            @click="currentTab = 1"
            :class="{ 'text-blue-400 underline': currentTab == 1 }"
          >
            Contact
          </p>
          <p
            class="text-lg font-bold cursor-pointer"
            @click="currentTab = 2"
            :class="{ 'text-blue-400 underline': currentTab == 2 }"
          >
            Others
          </p>
          <p
            class="text-lg font-bold cursor-pointer"
            @click="currentTab = 3"
            :class="{ 'text-blue-400 underline': currentTab == 3 }"
          >
            Custom
          </p>
          <p
            class="text-lg font-bold cursor-pointer"
            @click="currentTab = 4"
            :class="{ 'text-blue-400 underline': currentTab == 4 }"
          >
            Bank Details
          </p>
        </div>
        <div v-if="currentTab == 0">
          <div class="flex gap-2 flex-wrap items-center">
            <FormField label="Street" class="w-full">
              <FormControl required type="textarea" />
            </FormField>
            <FormField label="State" class="w-full">
              <FormControl
                required
                v-model="addFormData.state"
                :options="indianStatesOptions"
              />
            </FormField>
            <FormField label="GSTIN" class="w-full">
              <FormControl
                required
                v-model="addFormData.taxNumber"
                placeholder="Enter GSTIN"
              />
            </FormField>
            <FormField label="PIN Code" class="w-full">
              <FormControl
                required
                v-model="addFormData.pincode"
                placeholder="Enter PIN Code"
              />
            </FormField>
            <FormField label="Party Type" class="w-full">
              <FormControl />
            </FormField>
          </div>
        </div>
        <div v-if="currentTab == 1">
          <div class="flex gap-2 flex-wrap items-center">
            <FormField
              label="Attention to (will be used in Invoice)"
              class="w-full"
            >
              <FormControl />
            </FormField>
            <FormField label="Mobile No." class="w-full">
              <FormControl />
            </FormField>
            <FormField label="Email Id" class="w-full">
              <FormControl />
            </FormField>
          </div>
        </div>
        <div v-if="currentTab == 2">
          <div class="flex gap-2 flex-wrap items-center">
            <FormField label="Account Unique Name" class="w-full">
              <FormControl />
            </FormField>
            <FormField label="Balance for Trigger" class="w-full">
              <FormControl />
            </FormField>
            <FormField label="Description" class="w-full">
              <FormControl type="textarea" />
            </FormField>
          </div>
        </div>
        <div v-if="currentTab == 3">
          <div class="flex gap-2 flex-wrap items-center">
            <FormField label="Field Name" class="w-full">
              <FormControl />
            </FormField>
            <FormField label="Field Type" class="w-full">
              <FormControl />
            </FormField>
            <FormField label="Info Details" class="w-full">
              <FormControl
                type="textarea"
                placeholder="ENter some text to help user understands the purpose of this custom field.(Optional)"
              />
            </FormField>
            <FormField label="Min Limit" class="w-1/3">
              <FormControl type="number" />
            </FormField>
            <FormField label="Max Limit" class="w-1/3">
              <FormControl type="number" />
            </FormField>
            <br />
            <FormField label="Mandatory" class="w-full">
              <FormControl class="p-2" :options="['yes', 'no']" />
            </FormField>
            <FormField label="Modules" class="w-full">
              <FormControl class="p-2" :options="['Module1', 'Module2']" />
            </FormField>
          </div>
        </div>
        <div v-if="currentTab == 4">
          <div class="flex gap-2 flex-wrap items-center">
            <FormField label="Bank Name" class="w-full">
              <FormControl placeholder="Enter Bank Name" />
            </FormField>
            <FormField label="Account Number" class="w-full">
              <FormControl placeholder="Enter Account No." />
            </FormField>
            <FormField label="IFSC Code" class="w-full">
              <FormControl placeholder="Enter IFSC Code" />
            </FormField>
          </div>
        </div>

        <div class="flex justify-end py-2">
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Submit" />
          </BaseButtons>
        </div>
      </CardBox>
    </CardBoxModal>

    <div class="p-7">
      <div
        class="flex justify-between border-b border-gray-300 p-2 mt-5 xl:max-w-7xl xl:mx-auto"
      >
        <div class="flex gap-2">
          <BaseButton
            class="flex-1"
            type="submit"
            label="+ Add Vendor"
            :icon="mdiMessageBadge"
            color="info"
            @click="isModalActive = true"
          />
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
            :icon="mdiFilterRemove"
            @click="resetfilter"
            color="info"
          />
        </div>
      </div>
      <div class="grid lg:grid-cols-5 sm:grid-cols-2 max-sm:grid-cols-1 gap-2">
        <div
          class="border p-5 dark:bg-slate-700 bg-white border-b-4 border-b-black"
        >
          <p>Vendors</p>
          <p>{{ filteredItems.length }}</p>
        </div>
        <div
          class="border p-5 dark:bg-slate-700 bg-white border-b-4 border-b-black"
        >
          <p>Opening</p>
          <p>0.00</p>
        </div>
        <div
          class="border p-5 dark:bg-slate-700 bg-white border-b-4 border-b-black"
        >
          <p>Purchase</p>
          <p>0.00</p>
        </div>
        <div
          class="border p-5 dark:bg-slate-700 bg-white border-b-4 border-b-black"
        >
          <p>Payment</p>
          <p>0.00</p>
        </div>
        <div
          class="border p-5 dark:bg-slate-700 bg-white border-b-4 border-b-black"
        >
          <p>Closing</p>
          <p>0.00</p>
        </div>
      </div>

      <div class="text-gray-500 dark:text-white mt-4">
        <span>{{ filteredItems.length }} Vendors</span>
      </div>

      <table>
        <thead>
          <tr>
            <th>Vendor Name</th>
            <th>Parent Group</th>
            <th>Opening</th>
            <th>Purchase</th>
            <th>Payment</th>
            <th>Closing</th>
            <th>Contacts</th>
            <th>State</th>
            <th>Tax Number</th>
            <th>Comment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="Vendor in filteredItems" :key="Vendor.id">
            <td data-label="Vendor Name">
              {{ Vendor.name }}
            </td>
            <td data-label="Parent Group">
              {{ Vendor.parentGroup }}
            </td>
            <td data-label="Opening">
              {{ Vendor.openings }}
            </td>
            <td data-label="Purchase">
              {{ Vendor.Purchase }}
            </td>
            <td data-label="Payment">
              {{ Vendor.Payment }}
            </td>
            <td data-label="Closing">
              {{ Vendor.closing }}
            </td>
            <td data-label="Contacts">-</td>
            <td data-label="State">
              {{ Vendor.state }}
            </td>
            <td data-label="Tax Number">
              {{ Vendor.taxNumber }}
            </td>
            <td data-label="Comment">-</td>
            <td data-label="Action">
              <BaseButton label="Connect ICICI Bank " />
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
