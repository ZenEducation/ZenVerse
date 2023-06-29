<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import { mdiEye, mdiPen } from "@mdi/js";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";

defineProps({
  checkable: { type: Boolean, default: true },
});

const mainStore = useMainStore();

const items = computed(() => mainStore.created);

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

const numPages = computed(() => Math.ceil(items.value.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }

  return pagesList;
});

const remove = (arr, cb) => {
  const newArr = [];

  arr.forEach((item) => {
    if (!cb(item)) {
      newArr.push(item);
    }
  });

  return newArr;
};

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client);
  } else {
    checkedRows.value = remove(
      checkedRows.value,
      (row) => row.id === client.id
    );
  }
};
</script>

<template>
  <CardBoxModal v-model="isModalActive" title="Sample modal">
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <CardBoxModal
    v-model="isModalDangerActive"
    title="Please confirm"
    button="danger"
    has-cancel
  >
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <div v-if="checkedRows.length" class="p-3 bg-gray-100/50 dark:bg-slate-800">
    <span
      v-for="checkedRow in checkedRows"
      :key="checkedRow.id"
      class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"
    >
      {{ checkedRow.name }}
    </span>
  </div>

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Submission</th>
        <th>Type</th>
        <th>Category</th>
        <th>Status</th>
        <th>Submitted On</th>
        <th>Actions</th>
        
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(client, index) in itemsPaginated"
        :key="client.id"
        class="border-b-0 lg:w-6 before:hidden"
      >
        <td data-label="Client ID" class="border-b-0 lg:w-6 before:hidden">
          {{ client.id }}
        </td>
        <td data-label="Title">
          {{ client.title }}
        </td>

        <td v-if = "index === 1" data-label="Submission">
          <img :src="client.avatar" alt="Avatar" width="150" height="150"/>
        </td>
        <td v-else data-label="Submission">
          {{ client.sub }}
        </td>

        <td data-label="Type">
          {{ client.type }}
        </td>
        <td data-label="Category">
          {{ client.category     }}
        </td>
        <td data-label="Status">
            {{ client.status }}
        </td>
        <td data-label="Submitted" class="lg:w-1 whitespace-nowrap">
          <small
            class="text-gray-500 dark:text-slate-400"
            :title="client.submitted"
            >{{ client.submitted }}</small
          >
        </td>
        <td class="before:hidden lg:w-1 whitespace-nowrap">
          <BaseButtons type="justify-start lg:justify-end" no-wrap>
            <BaseButton
              color="info"
              :icon="mdiEye"
              small
              @click="isModalActive = true"
            />
            <BaseButton
              color="info"
              :icon="mdiPen"
              small
              @click="isModalDangerActive = true"
            />
          </BaseButtons>
        </td>
      </tr>
    </tbody>
  </table>
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
</template>