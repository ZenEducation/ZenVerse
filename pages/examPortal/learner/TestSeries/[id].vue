<template>
  <NuxtLayout name="lmsstudent">
    <div class="flex max-md:block">
      <div class="w-2/3 max-md:w-full max-md:h-auto h-screen p-10 pb-30">
        <NuxtLink to="/examportal/learner/Dashboard">
          <div class="text-[13px] flex items-center cursor-pointer">
            <img class="w-[14px] h-[14px] cursor-pointer"
              src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/cb_back.svg" alt="" />
            <p class="p-2.5 cursor-pointer">Back</p>
          </div>
        </NuxtLink>
        <p class="capitalize font-bold text-2xl">{{ testTitle }}</p>
        <p class="mt-2 font-semibold text-lg">
        </p>
        <div class="mt-4 border">
          <div class="p-3 border-b flex justify-between">
            <PremFormControl placeholder="Search in Tests ....." v-model="searchQuery" />
            <PremFormControl selected="JEE" :options="options" v-model="publishingStatusSelectedFilter" class=" w-32" />
          </div>
          <div class="h-80 max-md:h-auto overflow-y-scroll scrollbar-thin">
            <NuxtLink :to="'/examportal/learner/mocktest/' + item.mockTestExamId" class="flex p-3"
              v-for="item in filteredItems">
              <img :src="image" class="w-1/4 rounded" alt="" />
              <div class="p-3">
                <p class="text-lg">{{ item.name }}</p>
                <p class="text-xs">Test + Live</p>
              </div>
            </NuxtLink>
          </div>
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
      </div>
      <div class="w-1/3 max-md:w-full max-md:h-auto h-screen pt-20 text-xs px-4">
        <CardBox class="max-w-sm">
          <img :src="image" alt="" srcset="" />

          <p class="border-b-2 pb-2 pt-2 flex items-center">
            <BaseIcon :path="mdiTimerOutline" />
            <span v-if="isValidityDays">
              {{ `Valid for ${validityDays} Days` }}</span>
            <span v-else> {{ `Valid Till ${expiryDate}` }} </span>
          </p>

          <p class="py-2 font-medium">What's Included</p>
          <p class="pb-2 flex items-center">
            <BaseIcon :path="mdiFileOutline" /><span class="font-medium">
              {{ items.length }}</span>
            Tests
          </p>
        </CardBox>
      </div>
    </div>
  </NuxtLayout>
</template>
  
<script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import {
  mdiFile,
  mdiFileOutline,
  mdiPlus,
  mdiTimer,
  mdiTimerOutline,
  mdiTrashCan,
  mdiWindowClose,
} from "@mdi/js";
import CardBoxModal from "~~/components/Cards/CardBoxModal.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import VerticalBarChart from "~~/components/Charts/VerticalBarChart.vue";
import HorizontalBarChart from "~~/components/Charts/HorizontalBarChart.vue";
import image from "@/assets/img/bundleImage.png";
import { API, graphqlOperation } from "aws-amplify";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const id = route.params.id;

const items = ref([

]);
const orders = ref([])
const dripps = ref([])

const testTitle = ref("");
const isValidityDays = ref();
const validityDays = ref();
const expiryDate = ref();

const isDripping = ref(false);
const isDrippingFixedDate= ref(false);
const drippingFixedDate = ref(null);



onMounted(async () => {
  const myQuery = `
  query MyQuery($id: ID!) {
    getTestSeries(id: $id) {
      MockTests {
        items {
          _version
          mockTest {
            id
            name
            price
            isFree
            mockTestExamId
          }
        }
      }
      orders {
        id
        order
      }
      id
      _version
      name
      isValidityDays
      validityDays
      expiryDate
      isDripping
      isDrippingFixedDate
      drippingFixedDate
      drippings{
        id
        days
      }
    }
  }
`;

  const response = await API.graphql(
    graphqlOperation(myQuery, { id: id })
  );
  console.log(response.data.getTestSeries);

  testTitle.value = response.data.getTestSeries.name;
  isValidityDays.value = response.data.getTestSeries.isValidityDays;
  validityDays.value = response.data.getTestSeries.validityDays;
  expiryDate.value = response.data.getTestSeries.expiryDate;
  isDripping.value = response.data.getTestSeries.isDripping || false;
  isDrippingFixedDate.value = response.data.getTestSeries.isDrippingFixedDate || false;
  drippingFixedDate.value = response.data.getTestSeries.drippingFixedDate ;


  orders.value = response?.data?.getTestSeries?.orders || [];
  dripps.value = response?.data?.getTestSeries?.drippings || [];


  items.value = response.data.getTestSeries.MockTests.items.map((element) => { return { ...element.mockTest, order: null , dripDays : 0 } });

  orders.value.forEach((order) => {
    let index = items.value.findIndex(item => item.id == order.id)
    items.value[index].order = order.order;
  })

  dripps.value.forEach((order) => {
    let index = items.value.findIndex(item => item.id == order.id)
    items.value[index].dripDays = order.days;
  })

  items.value.sort((a, b) => {
    const nameA = a?.order || ""; // ignore upper and lowercase
    const nameB = b?.order || ""; // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  })

  console.log(items.value);
})

const perPage = 16;
const totalPages = ref(1);
const currentPage = ref(0);

const searchQuery = ref('');
const options = ['all', 'live', 'completed', 'upcoming']
const publishingStatusSelectedFilter = ref(options[0])
const filteredItems = computed(() => {
  let filtered = items.value;
  const search = new RegExp(searchQuery.value, "i");

  if (searchQuery.value) {
    filtered = filtered.filter((item) => {
      return search
        ? item.name.match(search)
        : true;
    });
  }

  if (isDripping.value && isDrippingFixedDate.value) {
    filtered = filtered.filter((item) => {
      let fixedDate = new Date(drippingFixedDate.value)
      let desired = new Date(drippingFixedDate.value);
      console.log( "desired :" ,  desired);
      desired.setDate(fixedDate.getDate() + item.dripDays);
      const today = new Date()
      console.log( "filter date : " , today , desired);
      return today >= desired
    })
  }


  if (publishingStatusSelectedFilter.value !== "all") {
    filtered = filtered.filter((item) => {
      return item.publishingStatus === publishingStatusSelectedFilter.value;
    });
  }

  totalPages.value = Math.ceil(filtered.length / perPage);
  const start = currentPage.value * perPage;
  const end = (currentPage.value + 1) * perPage;

  return filtered.slice(start, end);
});
</script>
  
<style lang="scss" scoped></style>
  