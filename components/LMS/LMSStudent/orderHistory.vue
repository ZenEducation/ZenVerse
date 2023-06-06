<template>
  <CardBox>
    <CardBoxComponentTitle title="Order History" />
    <BaseDivider />

    <form class="relative my-4" @submit.prevent="submit">
      <label for="msg-search" class="sr-only">Search</label>
      <input
        id="msg-search"
        class="form-input w-full pl-9 focus:border-slate-300"
        type="search"
        v-model="searchQuery"
        placeholder="Search "
      />
      <button class="absolute inset-0 right-auto group" aria-label="Search">
        <svg
          class="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
          />
          <path
            d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
          />
        </svg>
      </button>
    </form>

    <table>
      <thead>
        <th>order</th>
        <th>product</th>
        <th>date</th>
        <th>expires</th>
        <th>status</th>
        <th>currentValue</th>
      </thead>
      <tbody>
        <tr v-for="item in filteredItems">
          <td data-label="order">
            {{ item.order }}
          </td>
          <td data-label="product">
            {{ item.product }}
          </td>
          <td data-label="date">
            {{ item.date }}
          </td>
          <td data-label="expires">
            {{ item.expires }}
          </td>
          <td data-label="status">
            {{ item.status }}
          </td>
          <td data-label="currentValue">
            {{ item.currentValue }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
      <BaseLevel>
        <BaseButtons>
          <BaseButton
            v-for="page in totalPages"
            :key="page"
            :active="page - 1 === currentPage"
            :label="page"
            :color="page - 1 === currentPage ? 'lightDark' : 'whiteDark'"
            small
            @click="currentPage = page - 1"
          />
        </BaseButtons>
        <small>Page {{ currentPage + 1 }} of {{ totalPages }}</small>
      </BaseLevel>
    </div>
  </CardBox>
</template>

<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import {
  mdiDancePole,
  mdiInformationBoxOutline,
  mdiPlus,
  mdiArrowLeft,
} from "@mdi/js";
import { mdiGrid, mdiFormatListBulleted } from "@mdi/js";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import image from "@/assets/img/bundleImage.png";
import { useLayoutStore } from "@/stores/layout.js";
const searchQuery = ref("");


const items = ref([
  {
    order: "#001",
    product: "Product A",
    date: "2023-05-30",
    expires: "2023-06-30",
    status: "Pending",
    currentValue: 50.99,
  },
  {
    order: "#002",
    product: "Product B",
    date: "2023-05-28",
    expires: "2023-06-28",
    status: "Shipped",
    currentValue: 25.5,
  },
  {
    order: "#003",
    product: "Product C",
    date: "2023-05-25",
    expires: "2023-06-25",
    status: "Delivered",
    currentValue: 15.75,
  },
  {
    order: "#004",
    product: "Product D",
    date: "2023-05-27",
    expires: "2023-06-27",
    status: "Pending",
    currentValue: 40.25,
  },
  {
    order: "#005",
    product: "Product E",
    date: "2023-05-29",
    expires: "2023-06-29",
    status: "Shipped",
    currentValue: 12.99,
  },
  {
    order: "#006",
    product: "Product F",
    date: "2023-05-24",
    expires: "2023-06-24",
    status: "Delivered",
    currentValue: 8.75,
  },
  {
    order: "#007",
    product: "Product G",
    date: "2023-05-26",
    expires: "2023-06-26",
    status: "Delivered",
    currentValue: 18.5,
  },
  {
    order: "#008",
    product: "Product H",
    date: "2023-05-31",
    expires: "2023-06-31",
    status: "Pending",
    currentValue: 60.0,
  },
]);

const perPage = 25;
const totalPages = ref(1);
const currentPage = ref(0);
const filteredItems = computed(() => {
  let filtered = items.value;
  const search = new RegExp(searchQuery.value, "i");


  if (searchQuery.value) {
    filtered = filtered.filter((item) => {
      return search
        ? item.product.match(search) ||
        item.order.match(search)
        : true;
    });
  }

  totalPages.value = Math.ceil(filtered.length / perPage);
  const start = currentPage.value * perPage;
  const end = (currentPage.value + 1) * perPage;

  return filtered.slice(start, end);
});
</script>

<style lang="scss" scoped></style>
