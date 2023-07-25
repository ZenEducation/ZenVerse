<template>
    <div
      class="w-screen h-screen fixed top-0 left-0 z-50 holder flex justify-end"
    >
      <div class="w-5/12 bg-white dark:bg-slate-900 h-screen opacity-100 p-5">
        <div class="text-3xl">Create Event</div>
        <div
          class="h-5/6 overflow-auto scrollbar-thin dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-600 scrollbar-track-gray-400 scrollbar-thumb-rounded pr-8"
        >
          <div class="flex justify-between items-center mt-8">
            <div class="font-medium text-xl">Event  Information</div>
            <div class="flex justify-center items-center">
              <div class="mr-3">Host</div>
              <div
                class="flex justify-center items-center border py-1 px-2 rounded cursor-pointer"
              >
                <div
                  class="mr-2 bg-slate-200 dark:bg-slate-600 text-xs w-5 h-5 text-center rounded-full p-1 flex justify-center items-center"
                >
                  IH
                </div>
                <div class="">User Name</div>
                <BaseIcon :path="mdiMenuDown" size="22" class="cursor-pointer" />
              </div>
            </div>
          </div>
          <div class="mt-5">
            <PremFormField label="Title">
              <PremFormControl type="text" v-model="title" />
            </PremFormField>
  
            <PremFormField label="Date & Time" horizontal class="">
              <PremFormControl type="date" v-model="fdate" />
              <PremFormControl type="time" v-model="ftime" />
              <div class="">to</div>
              <PremFormControl type="time" v-model="ttime" />
              <PremFormControl type="date" v-model="tdate" />

            </PremFormField>
            <PremFormField label="" horizontal>
              <FormCheckRadioGroup
                name="sample-checkbox-two"
                :options="checkboxOptions"
                is-column
                v-model="productActive"
              />
            </PremFormField>
            
            <PremFormField label="Location">
              <PremFormControl type="text" v-model="location" />
            </PremFormField>
            <PremFormField label="Related To">
              <PremFormControl type="text" v-model="RelatedTo" />
            </PremFormField>
            <PremFormField label="Participants">
              <PremFormControl
                type="text"
                placeholder="A few word about the Product"
                v-model="Participants"
              />
            </PremFormField>
            <PremFormField label="Description">
              <PremFormControl
                type="text"
                placeholder="A few word about the Product"
                v-model="discription"
              />
            </PremFormField>
  
        
    
          </div>
        </div>
        <div class="absulate bottom-0 flex justify-between items-center h-1/6">
          <div class="">Customize Fields</div>
          <div class="flex justify-between items-center">
            <BaseButton
              label="Cancle"
              type="button"
              color="info"
              class="uppercase mr-2"
              :style="[]"
              outline
              @click="getEvents.hideForm()"
            />
            <BaseButton
              label="Save"
              type="button"
              color="info"
              class="uppercase"
              :style="[]"
              @click="saveItem()"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import {
    mdiMenuDown,
    mdiViewHeadline,
    mdiFullscreen,
    mdiSquareEditOutline,
    mdiPrinterOutline,
    mdiChartBar,
    mdiDeleteOutline,
    mdiTrackpad,
    mdiPlus,
    mdiLockOutline,
    mdiDotsHorizontal,
    mdiReload,
    mdiDotsVertical,
    mdiMenuUp,
    mdiDialpad,
    mdiFileDocumentMultipleOutline,
    mdiDelete,
    mdiFilterVariant,
    mdiTagOutline,
    mdiTableArrowRight,
    mdiTable,
    mdiCartOutline,
    mdiDomain,
    mdiNoteOutline,
    mdiFormSelect,
    mdiContentDuplicate,
    mdiContactsOutline,
    mdiTrayArrowDown,
    mdiEmailSyncOutline,
    mdiMail,
    mdiCheck,
    mdiChevronDown,
    mdiCurrencyRupee,
  } from "@mdi/js";
  import BaseIcon from "@/components/Display/BaseIcon.vue";
  import PremFormField from "@/components/Forms/FormField.vue";
  import PremFormControl from "@/components/Forms/FormControl.vue";
  import BaseButton from "@/components/Buttons/BaseButton.vue";
  
  import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";
  import { eventStore} from "@/stores/SalesCRM/activities/events"

  const getEvents = eventStore();
  
  const addressInfoShow = ref(false);
  const selectFieldOptions = ["Hardware", "Software", "CRM Applications"];
  const checkboxOptions = { Repeat: "Repeat" ,Reminder:"Reminder" };
  const checkboxOptions2 = { highPriority: "Mark as High Priority" ,compleated:"Mark as compleated" };
  const title = ref(null);
  const fdate = ref(null);
  const ftime = ref(null);
  const tdate = ref(null)
  const ttime =ref(null)
  const location = ref(null)
  const RelatedTo = ref(null);
  const Participants = ref(null)
  const discription = ref(null);
  const productActive = ref(false);
  const Street = ref(null);
  const City = ref(null);
  const State = ref(null);
  const Cuntry = ref(null);
  const Zip = ref(null);
  
  const productStatus = () => {};
  
  const saveItem = () => {
    const allData = getEvents.allEvents;
    let id = 1;
    if (allData.length > 0) {
      const lastItem = allData[allData.length - 1];
      id = lastItem.id + 1;
    }
  
  
    const newItem = {
      id,
      values: [
        {
          id: 1,
          value: title.value,
          icon: "",
        },
        {
          id: 2,
          value: fdate.value + ", " + ftime.value,
          icon: "",
        },
        {
          id: 3,
          value: tdate.value + ", " + ttime.value,
          icon: "",
        },
        {
          id: 4,
          value:RelatedTo.value,
          icon: "",
        },
        {
          id:5,
          value:RelatedTo.value,
          icon:""
        },
        // {
        //   id:5,
        //   value:discription.value,
        //   icon:""
        // },
        //               {
        //     id:6,
        //     value:discription.value,
        //     icon:""
        //   },     {
        //     id:7,
        //     value:mStreet.value,
        //     icon:""
        //   },     {
        //     id:8,
        //     value:mCity.value,
        //     icon:""
        //   },     {
        //     id:9,
        //     value:mState.value,
        //     icon:""
        //   },     {
        //     id:10,
        //     value:mCuntry.value,
        //     icon:""
        //   },
        //   {
        //     id:11,
        //     value:mZip.value,
        //     icon:""
        //   }
      ],
    };
  
    // console.log(newItem)
    getEvents.addNewItem(newItem);
    // console.log(newItem)
    getEvents.hideForm();
  };
  </script>
  
  <style scoped>
  .holder {
    background: rgba(11, 46, 78, 0.521);
  }
  </style>
  