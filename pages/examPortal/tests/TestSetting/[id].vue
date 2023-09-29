<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import BasicSettings from "~~/components/LMS/Bundle/BasicSettings.vue";
import pricingValidity from "~~/components/LMS/Bundle/pricingValidity.vue";
import Publish from "~~/components/LMS/Bundle/Publish.vue";
import ManageUser from "~~/components/LMS/Bundle/ManageUser.vue";
import AddProducts from "~~/components/LMS/Bundle/AddProducts.vue";
import ManageOrder from "~~/components/LMS/Bundle/ManageOrder.vue";
import Dripping from "~~/components/LMS/Bundle/dripping.vue";
import { getTestSeries } from "@/src/graphql/queries";
import { deleteTestSeries, updateTestSeries } from "~~/src/graphql/mutations";

import { API } from "aws-amplify";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
let tabRequest = route.query.tab || 0;
const postId = route.params.id;

import {
  mdiAccountCog,
  mdiArrowLeft,
  mdiCashMultiple,
  mdiCogOutline,
  mdiDatabaseCogOutline,
  mdiFilePlus,
  mdiMenu,
  mdiPublish,
} from "@mdi/js";

const tabs = [
  "Basic Settings",
  "Pricing & Validity",
  "Publish Test Series",
  "Manage Learners",
  "Manage Admins",
  "Manage Affiliates",
  "Manage Instructors",
  "Add Products",
  "Manage Order",
  "Content Dripping"
];
const isSidebarActive = ref(false);
const isModalSaveActive = ref(false);
const isModalDeleteActive = ref(false);

const isActive = ref(tabRequest);
const item = ref({});

const isDataLoaded = ref(false);
const FetchMockTests = async () => {
  try {
    const response = await API.graphql({
      query: getTestSeries,
      variables: { id: postId },
    });
    console.log("response", response.data.getTestSeries);
    item.value = response.data.getTestSeries;
    isDataLoaded.value = true;
  } catch (error) {
    console.error(error);
    window.alert("Error fetching Test Series Data:", error?.errors?.[0]?.message);
  }
};

onMounted(() => {
  FetchMockTests();
});

const handleFormDataChangesBasic = (formData) => {
  console.log("FormData1 : ", formData);
  item.value.name = formData?.name;
  item.value.shortId = formData?.shortId;
  item.value.description = formData?.description;
  item.value.shortDescription = formData?.shortDescription;
};

const handleFormDataChangesPricing = (formData) => {
  console.log("FormData2 : ", formData);
  item.value.isFree = formData?.isFree;
  item.value.price = formData?.price;
  item.value.discount = formData?.discount;
  item.value.isValidityDays = formData?.isValidityDays;
  item.value.validityDays = formData?.validityDays;
  item.value.expiryDate = formData?.expiryDate;
};

const handleFormDataChangesPublish = (formData) => {
  console.log("FormData3 : ", formData);
  item.value.publishingDate = formData?.publishingDate;
  item.value.publishingStatus = formData?.publishingStatus;
};

const handleFormDataChangesDripping = (formData) => {
  console.log("FormData4 : ", formData);
  item.value.isDripping = formData?.isDripping;
  item.value.isDrippingFixedDate = formData?.isDrippingFixedDate;
  item.value.drippingFixedDate = formData?.drippingFixedDate;
  item.value.drippings = formData?.drippings;
};

const handleSave = async () => {
  try {
    let {
      id,
      _version,
      name,
      shortId,
      description,
      shortDescription,
      isFree,
      price,
      discount,
      isValidityDays,
      validityDays,
      expiryDate,
      publishingDate,
      publishingStatus,
      isDripping,
      isDrippingFixedDate,
      drippingFixedDate,
      drippings,

    } = item.value;
    let input = {
      id,
      _version,
      name,
      shortId,
      description,
      shortDescription,
      isFree,
      price,
      discount,
      isValidityDays,
      validityDays,
      expiryDate,
      publishingDate,
      publishingStatus,
      isDripping,
      isDrippingFixedDate,
      drippingFixedDate,
      drippings,
    };

    if (!(name?.length > 0 && shortId?.length > 0)) {
      window.alert("Mock Test Name and Mock test ID can not be empty");
      console.error("Mock Test Name and Mock test ID can not be empty")
      return
    }

    if (price == undefined || price == null || price < 0 || !price) {
      price = 0;
    }
    if (discount == undefined || discount == null || discount < 0 || !discount) {
      discount = 0;
    }
    if (validityDays == undefined || validityDays == null || validityDays < 0 || !validityDays) {
      validityDays = 0;
    }
    if (!isValidityDays && !expiryDate) {
      window.alert("Expiry date can not be null");
      console.error("title and shortID can not be empty")
      return
    }
    if (isDripping && isDrippingFixedDate && !drippingFixedDate) {
      window.alert("Enter Fixed Start Date in Dripping");
      console.error("Enter Fixed Start Date in Dripping")
      return
    }

    console.log(input);
    const response = await API.graphql({
      query: updateTestSeries,
      variables: { input: input },
    });
    console.log(response.data.updateTestSeries);
    item.value = response.data.updateTestSeries;
    console.log(item.value);
    window.alert("changes are saved Successfully");
  } catch (error) {
    console.error(error);
    window.alert("could not save the data ");
  }
};

const handleDelete = async () => {
  try {
    console.log(item.value.id, item.value._version);
    await API.graphql({
      query: deleteTestSeries,
      variables: {
        input: { id: item.value.id, _version: item.value._version },
      },
    });
    window.location.href = "/ExamPortal/exam/ExamDashboard";
  } catch (error) {
    console.error(error);
    window.alert("could not delete");
  }
};
</script>

<template>
  <CardBoxModal v-model="isModalSaveActive" title="Are you sure you want to Save Current Changes ?" button="danger"
    buttonLabel="Yes" has-cancel @confirm="() => {
      handleSave();

      isModalSaveActive = false;
    }
      " />
  <CardBoxModal v-model="isModalDeleteActive" title="Are you sure you want to delete this Test Series ?" button="danger"
    buttonLabel="Yes" has-cancel @confirm="() => {
      handleDelete();
      isModalDeleteActive = false;
    }
      " />
  <NuxtLayout name="lmsadmin">
    <!-- <SectionMain> -->
    <div class="relative ml-2" style="grid-template-columns: min-content auto"
      :class="{ block: isSidebarActive, grid: !isSidebarActive }">
      <div class="w-60 bg-slate-200 dark:bg-transparent overflow-y-hidden" style="
          height: calc(100vh - 7rem);
          max-height: calc(100vh - 7rem);
          grid-template-columns: min-content auto;
        " :class="{ hidden: isSidebarActive }">
        <div class="">
          <div class="">
            <ul>
              <NuxtLink :to="'/ExamPortal/tests/test/' + postId"
                class="w-full min-w-60 pl-8 h-12 flex gap-1 align-middle justify-start items-center bg-slate-300">
                <BaseIcon :path="mdiArrowLeft" class="cursor-pointer" />
                <p>Back To Test Series</p>
              </NuxtLink>
              <li class="cursor-pointer w-full pl-8 h-12 flex gap-1 align-middle justify-start items-center"
                :class="{ 'bg-slate-500': isActive == 0 }" @click="() => (isActive = 0)">
                <BaseIcon :path="mdiCogOutline" class="cursor-pointer" />
                <p>Basic Settings</p>
              </li>
              <li class="cursor-pointer w-full pl-8 h-12 flex gap-1 align-middle justify-start items-center"
                :class="{ 'bg-slate-500': isActive == 1 }" @click="() => (isActive = 1)">
                <BaseIcon :path="mdiCashMultiple" class="cursor-pointer" />
                <p>Pricing & Validity</p>
              </li>
              <li class="cursor-pointer w-full pl-8 h-12 flex gap-1 align-middle justify-start items-center"
                :class="{ 'bg-slate-500': isActive == 2 }" @click="() => (isActive = 2)">
                <BaseIcon :path="mdiPublish" class="cursor-pointer" />
                <p>Publish Test Series</p>
              </li>
              <li class="cursor-pointer w-full pl-8 h-12 flex gap-1 align-middle justify-start items-center"
                :class="{ 'bg-slate-500': isActive == 3 }" @click="() => (isActive = 3)">
                <BaseIcon :path="mdiAccountCog" class="cursor-pointer" />
                <p>Manage Learners</p>
              </li>
              <li class="cursor-pointer w-full pl-8 h-12 flex gap-1 align-middle justify-start items-center"
                :class="{ 'bg-slate-500': isActive == 4 }" @click="() => (isActive = 4)">
                <BaseIcon :path="mdiAccountCog" class="cursor-pointer" />
                <p>Manage Admins</p>
              </li>
              <li class="cursor-pointer w-full pl-8 h-12 flex gap-1 align-middle justify-start items-center"
                :class="{ 'bg-slate-500': isActive == 5 }" @click="() => (isActive = 5)">
                <BaseIcon :path="mdiAccountCog" class="cursor-pointer" />
                <p>Manage Affiliates</p>
              </li>
              <li class="cursor-pointer w-full pl-8 h-12 flex gap-1 align-middle justify-start items-center"
                :class="{ 'bg-slate-500': isActive == 6 }" @click="() => (isActive = 6)">
                <BaseIcon :path="mdiAccountCog" class="cursor-pointer" />
                <p>Manage Instructors</p>
              </li>
              <li class="cursor-pointer w-full pl-8 h-12 flex gap-1 align-middle justify-start items-center"
                :class="{ 'bg-slate-500': isActive == 7 }" @click="() => (isActive = 7)">
                <BaseIcon :path="mdiFilePlus" class="cursor-pointer" />
                <p>Add Products</p>
              </li>
              <li class="cursor-pointer w-full pl-8 h-12 flex gap-1 align-middle justify-start items-center"
                :class="{ 'bg-slate-500': isActive == 8 }" @click="() => (isActive = 8)">
                <BaseIcon :path="mdiDatabaseCogOutline" class="cursor-pointer" />
                <p>Manage Order</p>
              </li>
              <li class="cursor-pointer w-full pl-8 h-12 flex gap-1 align-middle justify-start items-center"
                :class="{ 'bg-slate-500': isActive == 9 }" @click="() => (isActive = 9)">
                <BaseIcon :path="mdiDatabaseCogOutline" class="cursor-pointer" />
                <p>Content Dripping</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="overflow-y-scroll" style="
          height: calc(100vh - 7rem);
          max-height: calc(100vh - 7rem);
          grid-template-columns: min-content auto;
        " st>
        <div
          class="flex flex-wrap w-full bg-transparent justify-between items-center px-3 min-h-16 border-b-2 border-slate-800">
          <div class="flex items-center">
            <div class="p-2 bg-red-300 rounded-[50%] mr-4">
              <BaseIcon :path="mdiMenu" class="cursor-pointer" @click="() => {
                isSidebarActive = !isSidebarActive;
              }
                " />
            </div>
            <p class="text-2xl">{{ tabs[isActive] }}</p>
          </div>
          <div class="flex flex-wrap items-center gap-4 px-4 py-4">
            <p @click="() => {
              isModalSaveActive = true;
            }
              " class="cursor-pointer rounded-md py-2 px-3 text-white bg-black">
              Save
            </p>
            <p @click="() => (isModalDeleteActive = true)"
              class="cursor-pointer rounded-md py-2 px-3 text-white bg-red-500">
              Delete Test Series
            </p>
          </div>
        </div>
        <div class="md:p-12 p-3">
          <BasicSettings :data="{
            name: item.name,
            shortId: item.shortId,
            description: item.description,
            shortDescription: item.shortDescription,
          }" @form-data-changes-basic="handleFormDataChangesBasic" v-if="isActive == 0 && isDataLoaded" />
          <pricingValidity :data="{
            id: item.id,
            isFree: item.isFree,
            price: item.price,
            discount: item.discount,
            isValidityDays: item.isValidityDays,
            validityDays: item.validityDays,
            expiryDate: item.expiryDate,
          }" @form-data-changes-pricing="handleFormDataChangesPricing" v-if="isActive == 1" />
          <Publish :data="{
            publishingDate: item.publishingDate,
            publishingStatus: item.publishingStatus,
          }" @form-data-changes-publish="handleFormDataChangesPublish" v-if="isActive == 2" />
          <ExamPortalTestManageLearner :postId="postId" v-if="isActive == 3" />
          <ExamPortalTestManageAdmin :postId="postId" v-if="isActive == 4" />
          <ExamPortalTestManageAffiliate :postId="postId" v-if="isActive == 5" />
          <ExamPortalTestManageInstructor :postId="postId" v-if="isActive == 6" />
          <AddProducts :post-id="postId" v-if="isActive == 7" />
          <ManageOrder :post-id="postId" v-if="isActive == 8" />
          <Dripping :data="{
            id: item.id,
            isDripping: item.isDripping,
            isDrippingFixedDate: item.isDrippingFixedDate,
            drippingFixedDate: item.drippingFixedDate,
            drippings: item.drippings,
          }" @form-data-changes-dripping="handleFormDataChangesDripping" v-if="isActive == 9" />
        </div>
      </div>
    </div>

    <!-- </SectionMain> -->
  </NuxtLayout>
</template>
