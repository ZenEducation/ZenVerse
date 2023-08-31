<template>
  <NuxtLayout name="accounts">
    <div class="p-6">
      <!-- filter  -->
      <div class="flex items-center gap-3">
        <div class="w-2/12">
          <PremFormField label="Select Year" help="" horizontal>
            <PremFormControl
              type="list"
              :options="listBoxOptionsYears"
              v-model="year"
            />
          </PremFormField>
        </div>
        <div class="w-2/12">
          <PremFormField label="Select Type" help="" horizontal>
            <PremFormControl
              type="list"
              :options="listBoxOptionsType"
              v-model="type"
            />
          </PremFormField>
        </div>
        <div class="w-2/12">
          <PremFormField label="Select Month" help="" horizontal>
            <PremFormControl
              type="list"
              :options="listBoxOptionsMonth"
              v-model="month"
            />
          </PremFormField>
        </div>
        <BaseButton label="Go" color="info" class="mt-8" />
      </div>

      <!-- table  -->

      <div class="mt-4">
        <div v-for="(item, idx) in tableData" :key="idx" class="mb-5">
          <div class="flex py-3 px-6 w-8/12">
            <div class="w-4/12 font-semibold px-2">Sales from</div>
            <div class="w-3/12 font-semibold">Clients</div>
            <div class="w-3/12 font-semibold">Amount</div>
            <div class="w-3/12 font-semibold">No. of Invoices</div>
          </div>
          <div class="flex  py-3 px-6 w-8/12 cursor-pointer "  @click="showExpand(idx+1)" >
            <div class="w-4/12 font-semibold px-2">{{ item.fontValue[0] }}</div>
            <div class="w-3/12 font-semibold">{{ item.fontValue[1] }}</div>
            <div class="w-3/12 font-semibold">{{ item.fontValue[2] }}</div>
            <div class="w-3/12 font-semibold">{{ item.fontValue[3] }}</div>
          </div>

          <div class="bg-gray-200 dark:bg-gray-900 w-8/12 rounded" v-if="item.expandValue.show">
            <div class="text-center p-5 font-bold">{{ item.expandValue.heading }}</div>
            <div
              class="flex  py-3 px-6 "
              v-for="(value, index) in item.expandValue.data"
              :key="index"
            >
              <div
                class="font-semibold "
                :class="[index2 == 0 ? `w-4/12 px-2` : `w-3/12`]"
                v-for="(data, index2) in value.items"
                :key="index2"
              >
                {{ data }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import BaseButton from "@/components/Buttons/BaseButton.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
const year = ref("2023");
const type = ref("Month");
const month = ref("July");
const listBoxOptionsYears = ["2020", "2021", "2022", "2023", "2024"];
const listBoxOptionsType = ["Day", "Month", "Year"];
const listBoxOptionsMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];





const tableData = ref([
  {
    id:1,
    fontValue: ["July 2023", "00.0", "00.0", "00.0"],
    expandValue: {
      heading: "Bifurcation of clients in July",
      show:false,
      data: [
        {
          items: ["From New Clients", "00.0", "00.0", "00.0"],
        },
        {
          items: ["From Old Clients", "00.0", "00.0", "00.0"],
        },
        {
          items: ["June", "00.0", "00.0", "00.0"],
        },
        {
          items: ["May", "00.0", "00.0", "00.0"],
        },
        {
          items: ["LQ", "00.0", "00.0", "00.0"],
        },
        {
          items: ["Last 6 Months", "00.0", "00.0", "00.0"],
        },
        {
          items: ["LY", "00.0", "00.0", "00.0"],
        },
      ],
    },
  },
  {
    id:2,
    fontValue: ["June 2023", "00.0", "00.0", "00.0"],
    expandValue: {
      heading: "Bifurcation of clients in June",
      show:false,
      data: [
        {
          items: ["From New Clients", "00.0", "00.0", "00.0"],
        },
        {
          items: ["From Old Clients", "00.0", "00.0", "00.0"],
        },
        {
          items: ["June", "00.0", "00.0", "00.0"],
        },
        {
          items: ["May", "00.0", "00.0", "00.0"],
        },
        {
          items: ["LQ", "00.0", "00.0", "00.0"],
        },
        {
          items: ["Last 6 Months", "00.0", "00.0", "00.0"],
        },
        {
          items: ["LY", "00.0", "00.0", "00.0"],
        },
      ],
    },
  },
  {
    id:3,
    fontValue: ["May 2023", "00.0", "00.0", "00.0"],
    expandValue: {
      heading: "Bifurcation of clients in May",
      show:false,
      data: [
        {
          items: ["From New Clients", "00.0", "00.0", "00.0"],
        },
        {
          items: ["From Old Clients", "00.0", "00.0", "00.0"],
        },
        {
          items: ["June", "00.0", "00.0", "00.0"],
        },
        {
          items: ["May", "00.0", "00.0", "00.0"],
        },
        {
          items: ["LQ", "00.0", "00.0", "00.0"],
        },
        {
          items: ["Last 6 Months", "00.0", "00.0", "00.0"],
        },
        {
          items: ["LY", "00.0", "00.0", "00.0"],
        },
      ],
    },
  },
])

const showExpand=(id)=>{
  tableData.value.map((item)=>{
    if(item.id==id){
   
      if(item.expandValue.show==true){
        item.expandValue.show=false
      }else{
        item.expandValue.show=true
      }
    }
    return item
  })

}
</script>
