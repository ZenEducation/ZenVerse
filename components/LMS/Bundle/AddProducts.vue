<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import { mdiDancePole, mdiInformationBoxOutline, mdiPlus } from "@mdi/js";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import image from "@/assets/img/bundleImage.png";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import TableLearnerEnabled from "~~/components/Tables/TableLearnerEnabled.vue";
import { API, graphqlOperation } from "aws-amplify";
import { listMockTests, listTestSeriesMockTests } from "~~/src/graphql/queries";
import { createTestSeriesMockTest } from "~~/src/graphql/mutations";

const props = defineProps({
  postId: {
    type: String,
    default: null,
  },
  checkable: { type: Boolean, default: false },
});

const items = ref([
]);
const addExistingsList = ref();
const existingListSelectedId = ref();

onMounted(async () => {
  try {
    let MTTests = [];
    let mockTestSeries = await API.graphql({
      query: listTestSeriesMockTests,
      variables: {
        filter: { testSeriesId: { eq: props.postId }, _deleted: { ne: true } },
      },
    });
    mockTestSeries = mockTestSeries.data?.listTestSeriesMockTests?.items;
    console.log(mockTestSeries);
    MTTests = mockTestSeries
      .filter((item) => {
        return (
          !item._deleted && !item.testSeries?._deleted && !item?.mockTest?._deleted
        );
      })
      .map((item) => {
        return { ...item.MockTest, relationId: item.id, version: item._version };
      });

    mockTestSeries = mockTestSeries.map((item) => item.mockTestId);
    console.log(mockTestSeries);

    let allMocks = await API.graphql({
      query: listMockTests,
      variables: { filter: { _deleted: { ne: true } } },
    });
    console.log(allMocks.data?.listMockTests?.items);

    let nonMTTests = [];
    allMocks.data?.listMockTests?.items.forEach((item) => {
      console.log(item.id);
      console.log(mockTestSeries.findIndex((t) => t == item.id));
      if (mockTestSeries.findIndex((t) => t == item.id) > -1) {
      } else {
        nonMTTests.push(item);
      }
    });

    console.log(MTTests, nonMTTests);
    items.value = nonMTTests;
    addExistingsList.value = MTTests;
  } catch (error) {
    console.error("Error fetching admins:", error);
  }
});

const publishDateOptions = ["all", "before", "on", "after", "between"];
const publishingStatusOptions = [
  "all",
  "Live",
  "Unpublished",
  "Scheduled",
];
const typeOptions = ["all", "Mock Test", "Video Lecture", "PDF File"];

const publishingStatusSelectedFilter = ref("all");
const typeSelectedFilter = ref("all");
const searchQuery = ref("");

const perPage = 16;
const totalPages = ref(1);
const currentPage = ref(0);

const typeFilterModelActive = ref(false);
const publishingStatusFilterModelActive = ref(false);
const isFreeFilterActive = ref(false);

const resetfilter = () => {
  publishingStatusSelectedFilter.value = "all";
  typeSelectedFilter.value = "all";
  typeFilterModelActive.value = false;
  publishingStatusFilterModelActive.value = false;
  isFreeFilterActive.value = false;
};

const filteredItems = computed(() => {
  let filtered = items.value;
  const search = new RegExp(searchQuery.value, "i");

  if (searchQuery.value) {
    filtered = filtered.filter((item) => {
      return search
        ? item.shortId.match(search) || item.name.match(search)
        : true;
    });
  }

  if (isFreeFilterActive.value) {
    filtered = filtered.filter((item) => {
      return item.isFree;
    });
  }

  if (publishingStatusSelectedFilter.value !== "all") {
    filtered = filtered.filter((item) => {
      return item.publishingStatus === publishingStatusSelectedFilter.value;
    });
  }

  if (typeSelectedFilter.value !== "all") {
    filtered = filtered.filter((item) => {
      return item.type === typeSelectedFilter.value;
    });
  }

  totalPages.value = Math.ceil(filtered.length / perPage);
  const start = currentPage.value * perPage;
  const end = (currentPage.value + 1) * perPage;

  return filtered.slice(start, end);
});

const EnableItemId = ref("");
const EnabledItemsList = ref([]);

const EnableItem = (popup, id) => {
  EnableItemId.value = id;
  const index = items.value.findIndex((item) => item.id === EnableItemId.value);
  console.log("index is", index);
  if (index !== -1) {
    items.value[index].isEnabled = !items.value[index].isEnabled;
    const indexS = EnabledItemsList.value.findIndex((item) => item === EnableItemId.value);
    if (indexS > -1) {
      EnabledItemsList.value.splice(indexS, 1);
    } else {
      EnabledItemsList.value.push(id);
    }
  }
};

const addProductHandler = async () => {
  try {

    if (EnabledItemsList.value.length == 0) {
      window.alert('first Enable Some Products');
      return;
    }

    for (let item of EnabledItemsList.value) {
      let temp = await API.graphql({
        query: createTestSeriesMockTest,
        variables: {
          input: {
            testSeriesId: props.postId,
            mockTestId: item,
          }
        }
      })
      console.log(props.postId, item,)
      console.log(temp.data.createTestSeriesMockTest);
    }
    window.alert('products Saved Successfully ');
    for (let item of EnabledItemsList.value) {
      let index = items.value.findIndex((temp) => temp.id == item);
      items.value.splice(index, 1);
    }

  } catch (error) {
    window.alert('Error in saving data ')

  }
}
</script>
<template>
  <div>

    <div class="flex flex-wrap justify-between items-center">
      <div>
        <p class="font-bold text-xl" @click="addProductHandler">Add Products</p>
        <p class="text-sm">Select and add products to your Test Series</p>
      </div>
      <div class="flex flex-wrap gap-4 items-center">
        <BaseButton @click="addProductHandler" color="info" label="Add Product" small />
        <BaseButton color="lightDark" label="Cancel" small />
      </div>
    </div>

    <form class="relative my-4" @submit.prevent="submit">
      <label for="msg-search" class="sr-only">Search</label>
      <input id="msg-search" class="form-input w-full pl-9 focus:border-slate-300" type="search" v-model="searchQuery"
        placeholder="Search by Title , MT ID " />
      <button class="absolute inset-0 right-auto group" aria-label="Search">
        <svg class="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2" viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
          <path
            d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
        </svg>
      </button>
    </form>

    <div class="lg:flex justify-between">
      <div class="flex items-start gap-y-4 flex-wrap">
        <div class="relative mr-4">
          <p>filter by:</p>
        </div>

        <div class="relative mr-4">
          <div @click="publishingStatusFilterModelActive = !publishingStatusFilterModelActive"
            class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white">
            <p role="" tabindex="-1" class="break-words text-body text-darkSlate01 false flex-grow leading-none">
              Status
            </p>
          </div>
          <div class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black"
            v-if="publishingStatusFilterModelActive">
            <PremFormControl :options="publishingStatusOptions" v-model="publishingStatusSelectedFilter" />
          </div>
        </div>


        <div class="relative mr-4">
          <div @click="isFreeFilterActive = !isFreeFilterActive" :class="{ 'bg-green-100': isFreeFilterActive }"
            class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white">
            <p role="" tabindex="-1" class="break-words text-body text-darkSlate01 false flex-grow leading-none">
              Free
            </p>
          </div>
        </div>
      </div>

      <div class="flex-end mr-4 p-[0.6rem] underline cursor-pointer leading-none" @click="resetfilter">
        <p role="" tabindex="-1" class="break-words text-body text-darkSlate01 false">
          Reset Fiters
        </p>
      </div>
    </div>

    <BaseDivider />

    <div class="text-gray-500 mb-7 dark:text-white">
      <span>{{ filteredItems.length }} Mock Tests </span>
    </div>

    <table>
      <thead>
        <tr>
          <th />
          <th>MockTest ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Status</th>
          <th>Items Count</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredItems" :key="item.shortId">
          <td class="border-b-0 lg:w-6 before:hidden">
            <TableLearnerEnabled data-label="Enabled" :checked="item.isEnabled" @click="EnableItem(true, item.id)" />
          </td>
          <td data-label="Mock test ID">
            {{ item.shortId }}
          </td>
          <td data-label="Title">
            <img :src="image" class=" h-12 inline pr-2" alt="">
            {{ item.name }}
          </td>
          <td data-label="Price">
            <template v-if="item.isFree">
              Free
            </template>
            <template v-else>
              {{ item.price }}
            </template>
          </td>
          <td data-label="Status">
            {{ item.publishingStatus }}
          </td>
          <td data-label="Items Count">
            1 Mock
          </td>
        </tr>
      </tbody>
    </table>

    <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
      <BaseLevel>
        <BaseButtons>
          <BaseButton v-for="page in totalPages" :key="page" :active="page - 1 === currentPage" :label="page"
            :color="page - 1 === currentPage ? 'lightDark' : 'whiteDark'" small @click="currentPage = page - 1" />
        </BaseButtons>
        <small>Page {{ currentPage + 1 }} of {{ totalPages }}</small>
      </BaseLevel>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
