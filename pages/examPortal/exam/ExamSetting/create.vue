<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import BasicSettings from "~~/components/ExamPortal/examSetting/BasicSettings.vue";
import pricingValidity from "~~/components/ExamPortal/examSetting/pricingValiditycreate.vue";
import Publish from "~~/components/ExamPortal/examSetting/Publish.vue";
import ManageUser from "~~/components/ExamPortal/examSetting/ManageUser.vue";
import { getMockTest } from "@/src/graphql/queries";
import { API } from "aws-amplify";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
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
import { deleteMockTest, createMockTest } from "~~/src/graphql/mutations";
import { MenuItems } from "@headlessui/vue";
import { Item } from "paper/dist/paper-core";

const tabs = [
  "Basic Settings",
  "Pricing & Validity",
  "Publish mock test",
  "Manage Users",
  "Add Products",
  "Manage Order",
];
const isSidebarActive = ref(false);
const isModalSaveActive = ref(false);
const isModalDeleteActive = ref(false);

const isActive = ref(0);
const item = ref({
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
    
    let { name , shortId , description , shortDescription , isFree , price , discount , isValidityDays , validityDays,  expiryDate ,publishingDate , publishingStatus } = item.value;
    let input = { name , shortId , description , shortDescription , isFree , price , discount , isValidityDays, validityDays , expiryDate ,publishingDate , publishingStatus };
    console.log(input);
    const response = await API.graphql({
      query:createMockTest,
      variables:{input : input },
    })
    console.log(response.data.updateMockTest);
    console.log(item.value);
    window.alert("changes are saved Successfully")
    window.location.href = "/ExamPortal/exam/ExamDashboard";
  } catch (error) {
    console.error(error);
    window.alert("could not save the data ")
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
                to="/ExamPortal/exam/ExamDashboard"
                class="w-full min-w-60 pl-8 h-12 flex gap-1 align-middle justify-start items-center bg-slate-300"
              >
                <BaseIcon :path="mdiArrowLeft" class="cursor-pointer" />
                <p>Back To mock test</p>
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
                <p>Publish mock test</p>
              </li>
              <li
                class="cursor-pointer w-full pl-8 h-12 flex gap-1 align-middle justify-start items-center"
                :class="{ 'bg-slate-500': isActive == 3 }"
                @click="() => (isActive = 3)"
              >
                <BaseIcon :path="mdiAccountCog" class="cursor-pointer" />
                <p>Manage Users</p>
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
          <BasicSettings
            :data="{
              name: item.name,
              shortId: item.shortId,
              description: item.description,
              shortDescription: item.shortDescription,
            }"
            @form-data-changes-basic="handleFormDataChangesBasic"
            
            v-if="isActive == 0 "
          />
          <pricingValidity
            :data="{
              id:item.id,
              isFree: item.isFree,
              price: item.price,
              discount: item.discount,
              isValidityDays: item.isValidityDays,
              validityDays: item.validityDays,
              expiryDate: item.expiryDate,
            }"
            @form-data-changes-pricing="handleFormDataChangesPricing"
            v-if="isActive == 1"
          />
          <Publish :data="{
            publishingDate: item.publishingDate,
            publishingStatus : item.publishingStatus,
          }"
          @form-data-changes-publish="handleFormDataChangesPublish" 
          v-if="isActive == 2" />
          <ManageUser v-if="isActive == 3" />
        </div>
      </div>
    </div>

    <!-- </SectionMain> -->
  </NuxtLayout>
</template>
