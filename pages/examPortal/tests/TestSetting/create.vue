<script setup>
import BaseIcon from "@/components/Display/BaseIcon.vue";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import BasicSettings from "~~/components/LMS/Bundle/BasicSettings.vue";
import pricingValidity from "~~/components/LMS/Bundle/pricingValidityCreate.vue";
import Publish from "~~/components/LMS/Bundle/Publish.vue";
import { API } from "aws-amplify";
import {
  createMockTest,
  createExam,
  updateExam,
  createTestSeries
} from "~~/src/graphql/mutations";


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
  "Manage Users",
  "Add Products",
  "Manage Order",
  "Content Dripping"
];
const isSidebarActive = ref(false);
const isModalSaveActive = ref(false);
const isModalDeleteActive = ref(false);

const isActive = ref(0);
const item = ref({
  isValidityDays: true,
  isFree: true,
  publishingStatus: "Unpublished",
  price: 0,
  discount: 0,
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

const handleSave = async () => {
  try {
    let {
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
    } = item.value;

    if (validityDays === undefined || validityDays?.length == 0) {
      validityDays = 0;
    }




    if (!(name?.length > 0 && shortId?.length > 0)) {
      window.alert("Mock Test Name and Mock test ID can not be empty");
      console.error("title and shortID can not be empty")
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


    let input = {
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
    };
    console.log(input);



    console.log(input);

    const mock = await API.graphql({
      query: createTestSeries,
      variables: {
        input: { ...input },
      },
    });
    console.log("new mock : ", mock.data.createTestSeries);


    window.alert("changes are saved Successfully");
    // window.location.href = "/ExamPortal/tests/TestDashboard";
  } catch (error) {
    console.error(error);
    window.alert("could not save the data :", error);
  }
};


</script>

<template>
  <CardBoxModal
    v-model="isModalSaveActive"
    title="Are you sure you want to Save Current Changes ?"
    button="danger"
    buttonLabel="Yes"
    has-cancel
    @confirm="
      () => {
        handleSave();
        isModalSaveActive = false;
      }
    "
  />
  <CardBoxModal
    v-model="isModalDeleteActive"
    title="Are you sure you want to delete this Test Series ?"
    button="danger"
    buttonLabel="Yes"
    has-cancel
    @confirm="
      () => {
        isModalDeleteActive = false;
      }
    "
  />
  <NuxtLayout name="lmsadmin">
    <!-- <SectionMain> -->
    <div
      class="relative ml-2"
      style="grid-template-columns: min-content auto"
      :class="{ block: isSidebarActive, grid: !isSidebarActive }"
    >
      <div
        class="w-60 bg-slate-200 dark:bg-transparent overflow-y-hidden"
        style="
          height: calc(100vh - 7rem);
          max-height: calc(100vh - 7rem);
          grid-template-columns: min-content auto;
        "
        :class="{ hidden: isSidebarActive }"
      >
        <div class="">
          <div class="">
            <ul>
              <NuxtLink
                to="/ExamPortal/tests/TestDashboard"
                class="w-full min-w-60 pl-8 h-12 flex gap-1 align-middle justify-start items-center bg-slate-300"
              >
                <BaseIcon :path="mdiArrowLeft" class="cursor-pointer" />
                <p>Back To Test Series</p>
              </NuxtLink>
              <li
                class="cursor-pointer w-full pl-8 h-12 flex gap-1 align-middle justify-start items-center"
                :class="{ 'bg-slate-500': isActive == 0 }"
                @click="() => (isActive = 0)"
              >
                <BaseIcon :path="mdiCogOutline" class="cursor-pointer" />
                <p>Basic Settings</p>
              </li>
              <li
                class="cursor-pointer w-full pl-8 h-12 flex gap-1 align-middle justify-start items-center"
                :class="{ 'bg-slate-500': isActive == 1 }"
                @click="() => (isActive = 1)"
              >
                <BaseIcon :path="mdiCashMultiple" class="cursor-pointer" />
                <p>Pricing & Validity</p>
              </li>
              <li
                class="cursor-pointer w-full pl-8 h-12 flex gap-1 align-middle justify-start items-center"
                :class="{ 'bg-slate-500': isActive == 2 }"
                @click="() => (isActive = 2)"
              >
                <BaseIcon :path="mdiPublish" class="cursor-pointer" />
                <p>Publish Test Series</p>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      <div
        class="overflow-y-scroll"
        style="
          height: calc(100vh - 7rem);
          max-height: calc(100vh - 7rem);
          grid-template-columns: min-content auto;
        "
        st
      >
        <div
          class="flex flex-wrap w-full bg-transparent justify-between items-center px-3 min-h-16 border-b-2 border-slate-800"
        >
          <div class="flex items-center">
            <div class="p-2 bg-red-300 rounded-[50%] mr-4">
              <BaseIcon
                :path="mdiMenu"
                class="cursor-pointer"
                @click="
                  () => {
                    isSidebarActive = !isSidebarActive;
                  }
                "
              />
            </div>
            <p class="text-2xl">{{ tabs[isActive] }}</p>
          </div>
          <div class="flex flex-wrap items-center gap-4 px-4 py-4">
            <p
              @click="
                () => {
                  isModalSaveActive = true;
                }
              "
              class="cursor-pointer rounded-md py-2 px-3 text-white bg-black"
            >
              Create
            </p>

          </div>
        </div>
          <div class="md:p-12 p-3">
            <BasicSettings :data="{
              name: item.name,
              shortId: item.shortId,
              description: item.description,
              shortDescription: item.shortDescription,
            }" @form-data-changes-basic="handleFormDataChangesBasic" v-if="isActive == 0" />
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
          </div>
      </div>
    </div>

    <!-- </SectionMain> -->
  </NuxtLayout>
</template>
