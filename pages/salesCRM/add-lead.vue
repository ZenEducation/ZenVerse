<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <section class="relative bg-gray-50 dark:bg-slate-800 my-5">
          <div
            class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[10px] px-3"
          >
            <div>
              <PremFormField horizontal>
                <PremFormControl
                  help=""
                  placeholder="Search by Name , Email , Phone , Location"
                />
              </PremFormField>
            </div>
            <div>
              <PremFormField label="" help="" horizontal>
                <PremFormControl
                  type="list"
                  :options="[
                    'All Documents',
                    'Under Review Document',
                    'Approved Documents',
                  ]"
                  v-model="documentsType"
                />
              </PremFormField>
            </div>

            <div class="">
              <BaseButton
                color="info"
                label="Forwards leads"
                class="inline mx-1 my-1"
              />
              <BaseButton
                color="info"
                label="Add Lead"
                class="inline mx-1 my-1"
                @click="addleadModel = true"
              />
              <BaseButton
                color="info"
                label="Upload"
                class="inline mx-1 my-1"
              />
            </div>
          </div>
        </section>
        <section class="relative bg-gray-50 dark:bg-slate-800">
          <LeadsTable :data="leadsData" />
        </section>

        <UploadLeadCardVue
          v-if="addleadModel"
          :hideAddleadmodel="hideAddleadmodel"
          :pushNewLeadData="pushNewLeadData"
        />
        <FileCheckWaning v-if="fileUploadWarningModer" />
      </SectionMain>
    </NuxtLayout>
  </div>
</template>

<script setup>
// imports
import SectionMain from "@/components/Sections/SectionMain.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import { mdiChevronRight, mdiCellphone, mdiPalette } from "@mdi/js";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import LeadsTable from "@/components/SalesCRM/LeadsTable.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import OverlayLayer from "@/components/Asidemenu/OverlayLayer.vue";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import UploadLeadCardVue from "@/components/SalesCRM/UploadLeadCard.vue";
import FileCheckWaning from "@/components/SalesCRM/FileCheckWarning.vue";
const documentsType = "All Documents";
const modalOneActive = true;
const addleadModel = ref(false);
const fileUploadWarningModer = ref(false);
const leadsData = ref([
  {
    settingName: "Kiron",
    channelName: "Eduaboard Trail",
    extraChannels: "Sunil(+2)",
    date: "22 March 2021",
    time: "05:12:00 PM",
    delayedBy: "2 Days",
    email: "",
    phone: "",
    location: "",
    status: {
      label: "Followup",
      value: "Followup",
      helpText: "Write Comment",
    },
  },
  {
    settingName: "Mamon",
    channelName: "Eduaboard Trail",
    extraChannels: "Sunil(+2)",
    date: "2 April 2021",
    time: "08:12:00 AM",
    delayedBy: "2 Days",
    email: "",
    phone: "",
    location: "",
    status: {
      label: "Visa Process Started",
      value: "Visa Process Started",
      helpText: "19-07-2022  ",
    },
  },
  {
    settingName: "Mohit",
    channelName: "Eduaboard Trail",
    extraChannels: "guru(+2)",
    date: "12 December 2021",
    time: "05:12:00 PM",
    delayedBy: "2 Days",
    email: "",
    phone: "",
    location: "",
    status: {
      label: "Pending",
      value: "Pending",
      helpText: "Write Comment",
    },
  },
]);

// functions
// hide add lead model
const hideAddleadmodel = () => {
  addleadModel.value = false;
};
// push new data in  leadsData  array

const pushNewLeadData = (data) => {
  //   console.log(data);
  leadsData.value.push({
    settingName: data.name,
    channelName: "Eduaboard Trail",
    extraChannels: "Sunil(+2)",
    date: "22 March 2021",
    time: "06:12:00 PM",
    delayedBy: "2 Days",
    email: data.email,
    phone: data.phone,
    location: data.location,
    status: {
      label: "Followup",
      value: "Followup",
      helpText: "Write Comment",
    },
  });
  addleadModel.value = false;
};

// computed

// watch
</script>
