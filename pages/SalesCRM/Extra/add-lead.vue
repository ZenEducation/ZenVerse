<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <section class="relative bg-gray-50 dark:bg-slate-800 my-5">
          <!-- filter and button section -->

          <div
            class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[10px] px-3"
          >
            <div>
              <!-- input field -->
              <PremFormField horizontal>
                <PremFormControl
                  help=""
                  placeholder="Search by Name , Email , Phone , Location"
                  v-model="searchInputValue"
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

            <div
              class="text-right flex justify-self-center align-middle flex-wrap"
            >
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
                @click="fileUploadWarningModel = true"
              />
            </div>
          </div>
        </section>
        <section class="relative bg-gray-50 dark:bg-slate-800">
          <LeadsTable :data="computedLeadsData" />
        </section>

        <UploadLeadCardVue
          v-if="addleadModel"
          :hideAddleadmodel="hideAddleadmodel"
          :pushNewLeadData="pushNewLeadData"
        />
        <FileCheckWaning
          v-if="fileUploadWarningModel"
          :hidefileUploadWarningModel="hidefileUploadWarningModel"
          :showfileUploadPopUpModel="showfileUploadPopUpModel"
        />
        <FileUploadPopup
          v-if="fileUploadPopUpModel"
          :hidefileUploadPopUpModel="hidefileUploadPopUpModel"
          :pushDataFromCSV="pushDataFromCSV"
        />
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
import FileUploadPopup from "@/components/SalesCRM/FileUploadPopup.vue";
import { ref, defineProps, computed } from "vue";
const documentsType = "All Documents";
const modalOneActive = true;
const addleadModel = ref(false);
const fileUploadWarningModel = ref(false);
const fileUploadPopUpModel = ref(false);
const searchInputValue = ref("");
const leadsData = ref([
  {
    id:1,
    settingName: "Kiron",
    channelName: "Eduaboard Trail",
    extraChannels: "Sunil(+2)",
    date: "22 March 2021",
    time: "05:12:00 PM",
    delayedBy: "2 Days",
    email: "injamam.kiron@gmail.com",
    phone: "7854875895",
    location: "India",
    status: "Followup",
    someHelpText: "Going to Canada",
  },
  {
    id:2,
    settingName: "Mamon",
    channelName: "Eduaboard Trail",
    extraChannels: "Sunil(+2)",
    date: "2 April 2021",
    time: "08:12:00 AM",
    delayedBy: "2 Days",
    email: "injamamul@gmail.com",
    phone: "8745871254",
    location: "Dubai",

    status: "Visa Process Started",
    someHelpText: "Some help",
  },
  {
    id:3,
    settingName: "Mohit",
    channelName: "Eduaboard Trail",
    extraChannels: "guru(+2)",
    date: "12 December 2021",
    time: "05:12:00 PM",
    delayedBy: "2 Days",
    email: "kiron@gmail.com",
    phone: "4589789635",
    location: "Kolkata",
    status: "Pending",
    someHelpText: "31/05/24 -  1 Task",
  },
]);

// functions
// hide add lead model
const hideAddleadmodel = () => {
  addleadModel.value = false;
};
// hide file upload warning model
const hidefileUploadWarningModel = () => {
  fileUploadWarningModel.value = false;
};
// hide file upload popup model
const hidefileUploadPopUpModel = () => {
  fileUploadPopUpModel.value = false;
  fileUploadWarningModel.value = false;
};

// show file upload popup model
const showfileUploadPopUpModel = () => {
  fileUploadPopUpModel.value = true;
  fileUploadWarningModel.value = false;
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
    status: "Followup",
    someHelpText: "Going to Canada",
  });
  addleadModel.value = false;
};

const pushDataFromCSV = (newData) => {
  console.log("pushDataFromCSV");
  console.log(newData);

  leadsData.value = [...leadsData.value, ...newData];
};

// filter data

const filterData = () => {
  if (searchInputValue.value == null || searchInputValue.value == "") {
    return leadsData.value;
  } else {
    console.log(searchInputValue.value);
    leadsData.value = leadsData.value.filter((item) => {
      return (
        item.settingName
          .toLowerCase()
          .includes(searchInputValue.value.toLowerCase()) ||
        item.email
          .toLowerCase()
          .includes(searchInputValue.value.toLowerCase()) ||
        item.phone.includes(searchInputValue.value.toLowerCase()) ||
        item.location
          .toLowerCase()
          .includes(searchInputValue.value.toLowerCase())
      );
    });
  }
};

// computed

const computedLeadsData = computed(() => {
  if (searchInputValue.value == null || searchInputValue.value == "") {
    return leadsData.value;
  } else {
    // console.log(searchInputValue.value);
    const filteredValue = leadsData.value.filter((item) => {
      return (
        item.settingName
          .toLowerCase()
          .includes(searchInputValue.value.toLowerCase()) ||
        item.email
          .toLowerCase()
          .includes(searchInputValue.value.toLowerCase()) ||
        item.phone
          .toLowerCase()
          .includes(searchInputValue.value.toLowerCase()) ||
        item.location
          .toLowerCase()
          .includes(searchInputValue.value.toLowerCase())
      );
    });

    return filteredValue;
  }
});

// watch
</script>
