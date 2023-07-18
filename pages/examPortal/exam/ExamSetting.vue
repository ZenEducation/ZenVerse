<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import BasicSettings from "~~/components/ExamPortal/examSetting/BasicSettings.vue";
import pricingValidity from "~~/components/ExamPortal/examSetting/pricingValidity.vue";
import Publish from "~~/components/ExamPortal/examSetting/Publish.vue";
import ManageUser from "~~/components/ExamPortal/examSetting/ManageUser.vue";

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
  "Publish mock test",
  "Manage Users",
  "Add Products",
  "Manage Order",
];
const isSidebarActive = ref(false);
const isModalSaveActive = ref(false);
const isModalDeleteActive = ref(false);

const isActive = ref(0);
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
        isModalSaveActive = false;
      }
    "
  />
  <CardBoxModal
    v-model="isModalDeleteActive"
    title="Are you sure you want to delete this mock test ?"
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
              <a  href="/examportal/exam/edit-page"
              class="cursor-pointer rounded-md py-2 px-3 text-white bg-blue-500"
              >
              Edit Mock Test
            </a>
            <p
              @click="
                () => {
                  isModalSaveActive = true;
                }
              "
              class="cursor-pointer rounded-md py-2 px-3 text-white bg-black"
            >
              Save
            </p>
            <p
              @click="() => (isModalDeleteActive = true)"
              class="cursor-pointer rounded-md py-2 px-3 text-white bg-red-500"
            >
              Delete mock test
            </p>
          </div>
        </div>
        <div class="md:p-12 p-3">
          <BasicSettings v-if="isActive == 0" />
          <pricingValidity v-if="isActive == 1" />
          <Publish v-if="isActive == 2" />
          <ManageUser v-if="isActive == 3" />
        </div>
      </div>
    </div>

    <!-- </SectionMain> -->
  </NuxtLayout>
</template>
