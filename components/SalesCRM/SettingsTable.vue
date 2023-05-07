<template>
  <div>
    <!-- sub heading -->
    <h2 class="text-xl mb-2">Settings</h2>
    <!-- table section  -->
    <table>
      <thead>
        <tr>
          <th class="w-20 lg:w-18 text-center">Sr No</th>
          <th>Setting Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in data" :key="idx">
          <td class="text-center" data-label="Sr No">
            {{ idx + 1 }}
          </td>
          <td data-label="Name">
            {{ item }}
          </td>

          <td class="lg:w-1 whitespace-nowrap" data-label="Action">
            <BaseButtons type="justify-start lg:justify-end" no-wrap>
              <BaseButton color="info" label="View" small />
            </BaseButtons>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- end table  -->

    <!-- pagination  -->
    <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
      <BaseLevel>
        <BaseButtons>
          <BaseButton
            v-for="page in pagesList"
            :key="page"
            :active="page === currentPage"
            :label="page + 1"
            :color="page === currentPage ? 'lightDark' : 'whiteDark'"
            small
            @click="currentPage = page"
          />
        </BaseButtons>
        <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
      </BaseLevel>
    </div>
    <!-- end pagination -->
  </div>
</template>

<script setup>
// imports
import { mdiEye } from "@mdi/js";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { defineProps, computed } from "vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const items = props.data;

const isModalActive = ref(false);

const isModalDangerActive = ref(false);

const perPage = ref(5);

const currentPage = ref(0);

const checkedRows = ref([]);

const itemsPaginated = computed(() =>
  items.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() => Math.ceil(items.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }

  return pagesList;
});
</script>

<style></style>
