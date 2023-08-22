<script setup>
import { adminPanelButtonMenu } from "@/configs/adminPanelButtonMenu.js";
import { useMainStore } from "@/stores/main";
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
import {
  mdiPencil,
  mdiTrashCan,
  mdiClose,
  mdiPlusCircleOutline,
  mdiMinusCircleOutline,
} from "@mdi/js";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormCheckRadio from "@/components/Forms/FormCheckRadio.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
import { onMounted } from "vue";
import { API } from "aws-amplify";
import { createAffiliate, createMockTestAffiliate } from "@/src/graphql/mutations";
import { listMockTestAffiliates, listAffiliates } from "@/src/graphql/queries";
import { useMgmtStore } from "@/stores/usermgmtAPI";
import TableLearnerEnabled from "@/components/Tables/TableLearnerEnabled.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import UserAvatar from "@/components/Avatars/UserAvatar";
import PremFormField from "@/components/Forms/PremFormField.vue";
import PremFormControl from "@/components/Forms/PremFormControl.vue";

const props = defineProps({
  postId: {
    type: String,
    default: null,
  },
  checkable: { type: Boolean, default: false },
});

const mainStore = useMainStore();
const userMgmtStore = useMgmtStore();

const name = ref("");
const mobile = ref("");
const email = ref("");
const commission = ref(0);
const error = ref("");

// function submitProfile() {
//   isModalActive.value = false;
//   useMainStore().addAffiliate({
//     id: uuid4(),
//     avatar: "https://avatars.dicebear.com/v2/gridy/Howell-Hand.svg",
//     login: "percy64",
//     name: name.value,
//     email: email.value,
//     mobile: mobile.value,
//     lastLogin: "Mar 03, 2021",
//     joinedOn: "Mar 03, 2021",
//     isEnabled: true,
//   });
// }
const isModalActive = ref(false);
const items = ref(userMgmtStore.affiliates);
const addExistingsList = ref();
const existingListSelectedId = ref();
const isModalExistingActive = ref(false);

const submitProfile = async () => {
  try {
    const resp = await API.graphql({
      query: createAffiliate,
      variables: {
        input: {
            name: name.value,
            email: email.value,
            mobile: mobile.value,
            lastLogin: new Date().toISOString().substr(0, 10),
            joinedOn: new Date().toISOString().substr(0, 10),
            leadStatus: "Open",
            isEnabled: true,
            commitionRate: commission.value,
            isLifelong: true,
            userSegment: "Paid",
            products: ["ts1", "bundle1"],
            role:"Student",
            language:"English",
            state:"Delhi",
            userNote:""
          },
      },
    });

    if (resp && resp.data) {
      let relation = await API.graphql({
        query: createMockTestAffiliate,
        variables: {
          input: {
            mockTestId: props.postId,
            affiliateId: resp.data.createAffiliate.id,
          },
        },
      });
      items.value.push(resp.data.createAffiliate);
    }

    if (resp.data) {
      error.value = "";
      isModalActive.value = false;
    } else {
      error.value = resp.errors.items[0];
    }
  } catch (error) {
    console.error("Error Creating affiliate:", error);
    error.value = error.data;
  }
};
const addExistingAffiliate = async () => {
  try {
    let relation = await API.graphql({
      query: createMockTestAffiliate,
      variables: {
        input: {
          mockTestId: props.postId,
          affiliateId: existingListSelectedId.value,
        },
      },
    });

    console.log(existingListSelectedId.value);
    let index = addExistingsList.value.findIndex(
      (item) => item.id == existingListSelectedId.value
    );
    console.log(index);
    if (index > -1) {
      items.value.push(addExistingsList.value[index]);
      addExistingsList.value.splice(index, 1);
    } else {
      console.error("there is an error in finding item in existing list ");
    }
    isModalExistingActive.value = false;
  } catch (error) {
    console.error("Error Creating affiliate:", error);
  }
};

onMounted(async () => {
  try {
    let mockTestAffiliates = await API.graphql({
      query: listMockTestAffiliates,
      variables: {
        filter: { mockTestId: { eq: props.postId } },
      },
    });
    mockTestAffiliates = mockTestAffiliates.data?.listMockTestAffiliates?.items;
    console.log(mockTestAffiliates);
    mockTestAffiliates = mockTestAffiliates.map((item) => item.affiliateId);
    console.log(mockTestAffiliates);

    let allAffiliates = await API.graphql({
      query: listAffiliates,
      variables: { filter: { _deleted: { ne: true } } },
    });
    console.log(allAffiliates.data?.listAffiliates?.items);

    let MTAffiliates = [];
    let nonMTAffiliates = [];
    allAffiliates.data?.listAffiliates?.items.forEach((item) => {
      console.log(item.id);
      console.log(mockTestAffiliates.findIndex((t) => t == item.id));
      if (mockTestAffiliates.findIndex((t) => t == item.id) > -1) {
        MTAffiliates.push(item);
      } else {
        nonMTAffiliates.push(item);
      }
    });

    console.log(MTAffiliates, nonMTAffiliates);
    items.value = MTAffiliates;
    addExistingsList.value = nonMTAffiliates;
  } catch (error) {
    console.error("Error fetching affiliates:", error);
  }
});
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
const nes = ref([]);

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

const isLifelongFilterOn = ref(false);

const resetfilter = () => {
  membershipSelectedFilter.value = "all";
  joinedFilterOption.value = "all";
  lastLoginFilterOption.value = "all";
  JoinedOnFilterModelActive.value = false;
  MembershipFilterModelActive.value = false;
  LastLoginFilterModelActive.value = false;
  userSegmentSelected.value = "All";
  leadStatusSelected.value = "All";
  selectedProducts.value = [];
  nes.value[7] = false;
  nes.value[6] = false;
  nes.value[1] = false;
  isLifelongFilterOn.value = false;
};

const filteredItems = computed(() => {
  let filtered = items.value;
  const search = new RegExp(searchQuery.value, "i");

  if (searchQuery.value) {
    filtered = filtered.filter((item) => {
      return search
        ? item.name.match(search) ||
            item.email.match(search) ||
            item.mobile.match(search) ||
            item.commitionRate.toString().match(search)
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

  if (leadStatusSelected.value != "All") {
    filtered = filtered.filter((item) => {
      return item.leadStatus == leadStatusSelected.value;
    });
  }
  if (userSegmentSelected.value != "All") {
    filtered = filtered.filter((item) => {
      return item.userSegment == userSegmentSelected.value;
    });
  }
  if (isLifelongFilterOn.value) {
    filtered = filtered.filter((item) => item.isLifelong);
  }

  totalPages.value = Math.ceil(filtered.length / perPage);
  const start = currentPage.value * perPage;
  const end = (currentPage.value + 1) * perPage;

  return filtered.slice(start, end);
});

const EnableItem = async (popup, id) => {
  if (popup) {
    isModalEnableActive.value = true;
    console.log("id is", id);
    EnableItemId.value = id;
    return;
  }
  const index = items.value.findIndex((item) => item.id === EnableItemId.value);
  console.log("index is", index);
  if (index !== -1) {
    await userMgmtStore.UpdateAffiliateStatus(
      EnableItemId.value,
      items.value[index]._version,
      !items.value[index].isEnabled
    );
    items.value[index].isEnabled = !items.value[index].isEnabled;
  }
};

const deleteItem = async (popup, id) => {
  if (popup) {
    isModalDangerActive.value = true;
    deleteItemId.value = id;
    return;
  }
  const index = items.value.findIndex((item) => item.id === deleteItemId.value);
  if (index !== -1) {
    await userMgmtStore.DeleteAffiliate(
      deleteItemId.value,
      items.value[index]._version
    );
    items.value.splice(index, 1);
  }
};

const isMoreModalActive = ref(true);
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
        <h1 class="font-bold">Add Affiliate</h1>
        <h3 class="text-xs">Enter details to create Affiliate manually</h3>
      </div>
      <div class="text-gray-500 cursor-pointer" @click="isModalActive = false">
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>
    <p v-if="error" class="text-red-600">
      {{ `error creating new Affiliate : ${error}` }}
    </p>
    <CardBox is-form @submit.prevent="submitProfile">
      <FormField label="Name">
        <FormControl
          :icon="mdiAccount"
          name="username"
          required
          v-model="name"
          autocomplete="username"
          placeholder="Enter Affiliate name"
        />
      </FormField>
      <FormField label="E-mail">
        <FormControl
          :icon="mdiMail"
          type="email"
          name="email"
          v-model="email"
          required
          autocomplete="email"
          placeholder="Enter Affiliate email"
        />
      </FormField>
      <FormField label="Mobile">
        <FormControl
          :icon="mdiCellphone"
          name="phone"
          type="phone"
          v-model="mobile"
          required
          autocomplete="current-phone"
          placeholder="Enter Affiliate mobile"
        />
      </FormField>
      <FormField label="Current password">
        <FormControl
          :icon="mdiAsterisk"
          name="password_current"
          type="password"
          required
          autocomplete="current-password"
          placeholder="Set password for Affiliate"
        />
      </FormField>
      <FormField label="Commission rate">
        <FormControl
          name="commission-rate"
          type="number"
          v-model="commission"
          required
          placeholder="Enter Commission"
        />
      </FormField>

      <FormCheckRadio
        name="allowCommission"
        label="Allow commission on all courses"
        :input-value="true"
      />

      <FormField label="">
        <FormControl
          :icon="mdiSearchWeb"
          type="search"
          name="courses"
          placeholder="Search by course title"
        />
      </FormField>

      <FormCheckRadio
        name="linkAffiliate"
        label="Link Affiliate for Limited Days"
        :input-value="true"
      />

      <FormField label="">
        <FormControl
          type="number"
          name="numberOfDays"
          placeholder="Enter number of days"
        />
      </FormField>

      <FormCheckRadio
        name="notifyUser"
        label="Send email to User"
        :input-value="true"
      />
      <div class="flex justify-end py-2">
        <BaseButtons>
          <BaseButton type="submit" color="info" label="Submit" />
        </BaseButtons>
      </div>
    </CardBox>
  </CardBoxModal>
  <CardBoxModal v-model="isModalExistingActive" :showFooter="false" title="">
    <header
      class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
    >
      <div class="text-gray-500">
        <BaseIcon v-if="mdiAccountPlus" :path="mdiAccountPlus" :size="32" />
      </div>
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Add Affiliate</h1>
      </div>
      <div
        class="text-gray-500 cursor-pointer"
        @click="isModalExistingActive = false"
      >
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>
    <p v-if="error" class="text-red-600">
      {{ `error creating new affiliate : ${error}` }}
    </p>
    <CardBox is-form @submit.prevent="addExistingAffiliate">
      <select required name="" id="" v-model="existingListSelectedId">
        <option v-for="item in addExistingsList" :value="item.id">
          {{ item.name }}
        </option>
      </select>

      <div class="flex justify-end py-2">
        <BaseButtons>
          <BaseButton type="submit" color="info" label="Add" />
        </BaseButtons>
      </div>
    </CardBox>
  </CardBoxModal>

  <div>
    <div
      class="flex justify-between border-b border-gray-300 p-2 mt-5 xl:max-w-7xl xl:mx-auto bg-gray-100 rounded dark:bg-gray-700"
    >
      <div class="heading">
        <h1 class="font-bold text-2xl">Affiliate Management</h1>
        <h3 class="font-thin text-xs text-gray-500 py-1 dark:text-white">
          Manage your community. Learn More.
        </h3>
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
          label="+ Add Existing"
          :icon="mdiMessageBadge"
          color="info"
          @click="isModalExistingActive = true"
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
          placeholder="Search by Name, Email , commission rate or Mobile Number"
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
          <div class="relative mr-4">
            <div
              @click="nes[6] = !nes[6]"
              class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
            >
              <p
                role=""
                tabindex="-1"
                class="break-words text-body text-darkSlate01 false flex-grow leading-none"
              >
                Lead Status
              </p>
            </div>
            <div
              class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black"
              v-if="nes[6]"
            >
              <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]">
                <label v-for="item in leadStatusOptions">
                  <input
                    type="radio"
                    :value="item"
                    class="my-2"
                    v-model="leadStatusSelected"
                  />
                  {{ item }}
                  <br />
                </label>
              </PremFormField>
            </div>
          </div>
          <div class="relative mr-4">
            <div
              @click="nes[7] = !nes[7]"
              class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
            >
              <p
                role=""
                tabindex="-1"
                class="break-words text-body text-darkSlate01 false flex-grow leading-none"
              >
                User Segment
              </p>
            </div>
            <div
              class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black"
              v-if="nes[7]"
            >
              <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]">
                <label v-for="item in userSegmentOptions">
                  <input
                    type="radio"
                    :value="item"
                    class="my-2"
                    v-model="userSegmentSelected"
                  />
                  {{ item }}
                  <br />
                </label>
              </PremFormField>
            </div>
          </div>
          <div class="relative mr-4">
            <div
              @click="isLifelongFilterOn = !isLifelongFilterOn"
              :class="{ 'bg-green-200': isLifelongFilterOn }"
              class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
            >
              <p
                role=""
                tabindex="-1"
                class="break-words text-body text-darkSlate01 false flex-grow leading-none"
              >
                LifeLong
              </p>
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
        <span>{{ filteredItems.length }} Affiliates</span>
      </div>

      <table>
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Email</th>
            <th>Commission Rate</th>
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
            <td data-label="Commission Rate">
              {{ learners.commitionRate + " %" }}
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
            <td class="before:hidden whitespace-nowrap flex gap-2">
              <NuxtLink
                :to="'/examportal/usermgmt/AffiliateMgmt/edit/' + learners.id"
              >
                <BaseButton color="info" :icon="mdiPencil" small />
              </NuxtLink>
              <BaseButton
                color="danger"
                :icon="mdiTrashCan"
                small
                @click="deleteItem(true, learners.id)"
              />
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
</template>
