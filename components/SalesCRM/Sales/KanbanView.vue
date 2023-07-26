<template>
  <div class="">
    <div
      class="shadow px-6 flex justify-between items-center py-2 dark:bg-slate-900"
    >
      <div class="flex justify-between items-center">
        <BaseIcon
          :path="mdiFilterVariant"
          size="22"
          class="mr-4 cursor-pointer"
        />
        <div class="">
          <div
            class="flex justify-between items-center border px-3 py-2 rounded cursor-pointer"
            @click="overviewmenu = !overviewmenu"
          >
            <div class="pl-1">All Deals</div>
            <BaseIcon :path="mdiMenuDown" size="22" />
          </div>
          <div
            class="absolute bg-white dark:bg-slate-700 shadow"
            v-if="overviewmenu"
          >
            <SearchDownMenu
              :data="searchDownItems"
              headingValue="Public Views"
              addText="Create View"
            />
          </div>
        </div>
  
      </div>
      <div class="flex justify-between items-center">
        <div class="mr-2">Short By</div>
        <div class="mr-2">
          <div
            class="flex justify-between items-center border px-3 py-2 rounded cursor-pointer"
            @click="shortByMenu = !shortByMenu"
          >
            <div class="pl-1">Created Time</div>
            <BaseIcon :path="mdiMenuDown" size="22" />
          </div>
          <div
            class="absolute bg-white dark:bg-slate-700 shadow"
            v-if="shortByMenu"
          >
            <SearchDownMenu
              :data="shortbyItems"
               height="40"
            />
          </div>
        </div>
        <PremButtonMenu
          :options="shortDownItems"
          color="info"
          outline
          right
          :icon="mdiDotsHorizontal"
          class="mr-2"
        />
        <BaseIcon
          :path="mdiViewHeadline"
          size="22"
          class="text-gray-400 mr-2 cursor-pointer"
          @click="closeKanban"
        />
        <PremButtonMenu
          color="info"
          label="Deal"
          class="inline mr-2"
          :icon="mdiPlus"
          :options="componentsMenu"
          center
        />

        <PremButtonMenu
          :options="dotsMenu"
          color="info"
          outline
          right
          :icon="mdiDotsHorizontal"
          class=""
        />
      </div>
    </div>

    <!-- list -->
    <div class="grid grid-cols-6 gap-2 xl:grid-cols-6 mt-4">
      <div class="" v-for="(data, idx) in kanbanTableData" :key="idx">
        <div
          class="flex justify-between items-center shadow bg-white dark:bg-slate-900 topCard px-3 py-2 rounded"
          :class="[{ border_color: data.name == 'Lost' }]"
        >
          <div class="">
            <div class="">{{ data.name }}</div>
            <div class="flex mt-1">
              <div class="">&#x20b9;{{ data.amount }}</div>
              <div class="ml-3 text-gray-400">{{ data.deal }} Deal</div>
            </div>
          </div>
          <div class="">
            <BaseIcon :path="mdiDotsVertical" size="22" />
          </div>
        </div>
        <div class="shadow bg-white dark:bg-slate-900 rounded h-screen mt-2">
          <div
            class="h-full text-gray-400 flex justify-center items-center"
            v-if="filterItems(data.name).length == 0"
          >
            This stage is empty
          </div>
          <div class="" v-else>
            <div
              class="p-2 mb-3 rounded shadow"
              v-for="(item, idx) in filterItems(data.name)"
              :key="idx"
            >
              <div class="">
                <div class="">{{ item.dealName }}</div>
                <div class="text-gray-400">{{ item.companyName }}</div>
                <div class="flex justify-between items-center">
                  <div class="">&#x20b9;{{ item.amount }}</div>

                  <div class="w-4 h-4 rounded-full" :class="item.status"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close"]);
import { reactive, computed } from "vue";
import SearchDownMenu from "@/components/SalesCRM/Sales/SearchDownMenu.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
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
} from "@mdi/js";
const overviewmenu = ref(false);
const closeKanban = () => {
  emit("close", false);
};
const props = defineProps(["data"]);
const tableData = props.data;
const componentsMenu = [
  [
    {
      id: 1,
      icon: mdiTrackpad,
      label: "KPI",
    },
    {
      id: 2,
      icon: mdiChartBar,
      label: "Chart",
    },
  ],
];

const dotsMenu = [
  [
    {
      id: 1,
      icon: mdiFullscreen,
      label: "Vue in Full Screen",
    },
    {
      id: 2,
      icon: mdiDelete,
      label: "Delete",
    },
  ],
];

const shortDownItems=[
  [
    {
      id: 1,
      icon: mdiFullscreen,
      label: "Asc",
    },
    {
      id: 2,
      icon: mdiDelete,
      label: "Desc",
    },
  ],
];

const kanbanTableData = [
  {
    name: "Qualified",
    amount: 10245,
    deal: 0,
  },
  {
    name: "Request for info",
    amount: 10245,
    deal: 0,
  },
  {
    name: "Presentation",
    amount: 10245,
    deal: 0,
  },
  {
    name: "Negotiation",
    amount: 10245,
    deal: 0,
  },
  {
    name: "Won",
    amount: 10245,
    deal: 0,
  },
  {
    name: "Lost",
    amount: 10245,
    deal: 0,
  },
];

const searchDownItems = [
  {
    id: 1,
    name: "All Deals",
  },
  {
    id: 2,
    name: "Closing Next Mont",
  },
  {
    id: 3,
    name: "Closing This Month",
  },
  {
    id: 4,
    name: "My Deals",
  },
  {
    id: 5,
    name: "My Deals Closeing This Month",
  },
  {
    id: 6,
    name: "New Last Week",
  },
  {
    id: 7,
    name: "New This Week",
  },
  {
    id: 8,
    name: "Recently Created Deals",
  },
  {
    id: 8,
    name: "Recently Modified Deals",
  },
  {
    id: 10,
    name: "Not Yet Viewed",
  },
];

const filterItems = (filtername) => {
  const filteredItem = tableData.filter((item) => item.stage == filtername);
  console.log(filteredItem);
  return filteredItem;
};
const shortByMenu =ref(false)

const shortbyItems = [
  {
    id:1,
    name:"Deal Owner"
  },
  {
    id:2,
    name:"Deal Name"
  }, {
    id:3,
    name:"Company Name"
  }, 
  {
    id:4,
    name:"Contact Name"
  },
  
  {
    id:5,
    name:"Amount"
  }, {
    id:6,
    name:"Closing Date"
  }, {
    id:7,
    name:"Created By"
  }, {
    id:8,
    name:"Modified By"
  }, {
    id:9,
    name:"Created Time"
  },
  {
    id:10,
    name:"Modified Time"
  },
  {
    id:11,
    name:"Last Activity Time"
  },
]
</script>

<style scoped>
.topCard {
  border-top: 3px rgb(2, 160, 172) solid;
}

.border_color {
  border-color: rgb(250, 62, 62);
}
.red {
  background: rgb(255, 59, 59);
}
.green {
  background: rgb(14, 202, 14);
}
.yellow {
  background: rgb(255, 255, 34);
}
</style>
