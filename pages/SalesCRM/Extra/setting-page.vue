<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <!-- heading Section -->
        <section class="relative bg-gray-50 dark:bg-slate-800">
          <!-- grid start -->
          <div class="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
            <div>
              <h1 class="text-3xl">
                Abroad Settings <small class="text-xl"> Control panel</small>
              </h1>
            </div>
            <div class="flex align-right text-right justify-end">
              <BaseIcon
                :path="mdiPalette"
                class="uil uil-map-marker text-indigo-600"
                size="22"
              />
              <!-- breadcrumb -->
              <ul class="inline text-sm">
                <li
                  class="inline px-2 font-bold text-black/50 hover:text-indigo-600 dark:text-white/50 dark:hover:text-white"
                >
                  <NuxtLink to="/" class="duration-500 inline pb-2">
                    Home
                  </NuxtLink>
                </li>
                <li class="inline dark:text-white/50">></li>

                <li
                  class="inline pl-2 font-bold duration-500 ease-in-out dark:text-white"
                >
                  Abroad Settings
                </li>
              </ul>
            </div>
          </div>
          <!-- grid end  -->
        </section>

        <!-- table section  -->
        <CardBox class="mb-6 mt-6">
          <!-- setting component  -->
          <SettingsTable :data="settingData" />
        </CardBox>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>

<script setup>
// imports
import SectionMain from "@/components/Sections/SectionMain.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import { mdiChevronRight, mdiCellphone, mdiPalette } from "@mdi/js";
import CardBox from "@/components/Cards/CardBox.vue";
import SettingsTable from "@/components/SalesCRM/SettingsTable.vue";

// table sample data

const settingData = [
  "Main Tab Settings",
  "Source Code Get",
  "Vuetify Settings",
  "Bookmark Test",
  "Pothik on go",
];
</script>
<!-- style section  -->
<style scoped></style>
