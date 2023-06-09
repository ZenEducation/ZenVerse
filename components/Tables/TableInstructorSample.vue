<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import {
  mdiPencil,
  mdiTrashCan,
  mdiClose,
  mdiPlusCircleOutline,
  mdiMinusCircleOutline,
} from "@mdi/js";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import TableLearnerEnabled from "@/components/Tables/TableLearnerEnabled.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import UserAvatar from "@/components/Avatars/UserAvatar";
import PremFormField from "@/components/Forms/PremFormField.vue";
import PremFormControl from "@/components/Forms/PremFormControl.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";

defineProps({
  checkable: { type: Boolean, default: false },
});
const mainStore = useMainStore();
const deleteItemId = ref("");
const EnableItemId = ref("");

const isModalActive = ref(false);
const isModalDangerActive = ref(false);
const isModalEnableActive = ref(false);

const items = ref(mainStore.instructors);

const uniqueList = () => {
  let uniqueProducts = [];

  items.value.forEach((obj) => {
    if (Array.isArray(obj.products)) {
      obj.products.forEach((item) => {
        if (!uniqueProducts.includes(item)) {
          uniqueProducts.push(item);
        }
      });
    }
  });
  return { uniqueProducts };
};

const productSearchQuery = ref("");

const filteredProducts = computed(() => {
  let filtered = uniqueList().uniqueProducts;
  if (productSearchQuery.value.length > 0) {
    filtered = filtered.filter((item) => {
      return item
        .toLowerCase()
        .includes(productSearchQuery.value.toLowerCase());
    });
  }
  return filtered;
});

const selectedProducts = ref([]);

const leadStatusOptions = [
  "All",
  "Open",
  "Follow up",
  "Converted",
  "Not Interested",
];
const leadStatusSelected = ref("All");

const userSegmentOptions = ["All", "Free", "Trial", "Paid", "Returning"];
const userSegmentSelected = ref("All");

const joinDateOptions = ["all", "before", "on", "after", "between"];
const membershipOptions = ["all", "enabled", "disabled"];
const membershipSelectedFilter = ref("all");
const searchQuery = ref("");
const joinedFilterOption = ref("all");
const joinedFilterDate = ref("");
const joinedFilterStartDate = ref("");
const joinedFilterEndDate = ref("");
const lastLoginFilterOption = ref("all");
const lastLoginFilterDate = ref("");
const lastLoginFilterStartDate = ref("");
const lastLoginFilterEndDate = ref("");
const perPage = 25;
const totalPages = ref(1);
const currentPage = ref(0);
const JoinedOnFilterModelActive = ref(false);
const MembershipFilterModelActive = ref(false);
const LastLoginFilterModelActive = ref(false);

const resetfilter = () => {
  membershipSelectedFilter.value = "all";
  joinedFilterOption.value = "all";
  lastLoginFilterOption.value = "all";
  JoinedOnFilterModelActive.value = false;
  MembershipFilterModelActive.value = false;
  LastLoginFilterModelActive.value = false;
  selectedProducts.value = [];
  nes.value[7] = false;
  nes.value[6] = false;
  nes.value[1] = false;
};

const filteredItems = computed(() => {
  let filtered = items.value;
  const search = new RegExp(searchQuery.value, "i");

  if (searchQuery.value) {
    filtered = filtered.filter((item) => {
      return search
        ? item.name.match(search) ||
            item.email.match(search) ||
            item.mobile.match(search)
        : true;
    });
  }

  if (membershipSelectedFilter.value == "enabled") {
    filtered = filtered.filter((item) => item.isEnabled);
  }
  if (membershipSelectedFilter.value == "disabled") {
    filtered = filtered.filter((item) => !item.isEnabled);
  }

  if (joinedFilterOption.value !== "all") {
    filtered = filtered.filter((item) => {
      const joinedDate = new Date(item.joinedOn);

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

  if ((selectedProducts.value.length > 0) & (selectedProducts != ["on"])) {
    const set1 = new Set(selectedProducts.value);

    filtered = filtered.filter((item) => {
      return item.products.some((element) => set1.has(element));
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

const isMoreModalActive = ref(true);
const nes = ref([]);
</script>

<template>
  <CardBoxModal
    v-model="isModalActive"
    title="Edit Affiliates"
    buttonLabel="Okay"
  >
    <p>You can edit Affiliate details here.(WIP)</p>
  </CardBoxModal>

  <CardBoxModal
    v-model="isModalDangerActive"
    title="Are you sure you want to delete this Affiliate?"
    button="danger"
    buttonLabel="Yes"
    has-cancel
    @confirm="deleteItem(false)"
  />

  <CardBoxModal
    v-model="isModalEnableActive"
    title="Are you sure you want to Change status of this Affiliate?"
    button="danger"
    buttonLabel="Yes"
    has-cancel
    @confirm="EnableItem(false)"
  />

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

  <div class="lg:flex justify-between">
    <div class="flex items-start gap-y-4 flex-wrap">
      <div class="relative mr-4">
        <p>filter by:</p>
      </div>
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
            Joining Date
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
            Last login Date
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
            <PremFormControl v-model="lastLoginFilterStartDate" type="date" />
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
          @click="MembershipFilterModelActive = !MembershipFilterModelActive"
          class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
        >
          <p
            role=""
            tabindex="-1"
            class="break-words text-body text-darkSlate01 false flex-grow leading-none"
          >
            Membership Status
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
          @click="nes[1] = !nes[1]"
          class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
        >
          <p
            role=""
            tabindex="-1"
            class="break-words text-body text-darkSlate01 false flex-grow leading-none"
          >
            Products
          </p>
        </div>
        <div
          class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black"
          v-if="nes[1]"
        >
          <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]">
            <PremFormControl
              v-model="productSearchQuery"
              placeholder="Search...."
            />
          </PremFormField>
          <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]">
            <label v-for="item in filteredProducts">
              <input
                type="checkbox"
                :value="item"
                class="my-2"
                v-model="selectedProducts"
              />
              {{ item }}
              <br />
            </label>
          </PremFormField>
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
    <span>{{ filteredItems.length }} learners</span>
  </div>

  <table>
    <thead>
      <tr>
        <th />
        <th>Name</th>
        <th>Email</th>
        <th>Mobile no</th>
        <th>Last Login</th>
        <th>Joined On</th>
        <th>Enabled</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr v-for="learners in filteredItems" :key="learners.id">
        <td class="border-b-0 lg:w-6 before:hidden">
          <UserAvatar
            :username="learners.name"
            class="w-24 h-24 mx-auto lg:w-6 lg:h-6"
          />
        </td>
        <td data-label="Name">
          {{ learners.name }}
        </td>
        <td data-label="Email">
          {{ learners.email }}
        </td>
        <td data-label="Mobile No">
          {{ learners.mobile }}
        </td>
        <td data-label="Last Login" class="lg:w-1 whitespace-nowrap">
          <small
            class="text-gray-500 dark:text-slate-400"
            :title="learners.lastLogin"
            >{{ learners.lastLogin }}</small
          >
        </td>
        <td data-label="Joined" class="lg:w-1 whitespace-nowrap">
          <small
            class="text-gray-500 dark:text-slate-400"
            :title="learners.joinedOn"
            >{{ learners.joinedOn }}</small
          >
        </td>
        <TableLearnerEnabled
          data-label="Enabled"
          :checked="learners.isEnabled"
          @click="EnableItem(true, learners.id)"
        />
        <td class="before:hidden lg:w-1 whitespace-nowrap">
          <BaseButtons type="justify-start lg:justify-end" no-wrap>
            <BaseButton
              color="info"
              :icon="mdiPencil"
              small
              @click="isModalActive = true"
            />
            <BaseButton
              color="danger"
              :icon="mdiTrashCan"
              small
              @click="deleteItem(true, learners.id)"
            />
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
</template>
