<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import { mdiPencil, mdiTrashCan } from "@mdi/js";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import TableLearnerEnabled from "@/components/Tables/TableLearnerEnabled.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import UserAvatar from "@/components/Avatars/UserAvatar";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";

defineProps({
  checkable: { type: Boolean, default: false },
});

const mainStore = useMainStore();

const items = ref(mainStore.learners);

const isModalActive = ref(false);

const isModalDangerActive = ref(false);

const searchValue = ref("");

const perPage = ref(5);

const currentPage = ref(0);

const itemsPaginated = computed(() => {
  return items.value
    .slice(
      perPage.value * currentPage.value,
      perPage.value * (currentPage.value + 1)
    )
    .filter((item) => {
      return searchValue.value
        ? item.name.includes(searchValue.value) ||
            item.email.includes(searchValue.value) ||
            item.mobile.includes(searchValue.value)
        : true;
    });
});

const numPages = computed(() => Math.ceil(items.value.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }

  return pagesList;
});

const buildDropDown = (list, key, header) => {
  const uniqueList = [
    ...new Map(list.value.map((item) => [item[key], item])).values(),
  ];
  return uniqueList.reduce((acc, cur, idx) => {
    if (!acc.length) acc.push({ id: 0, label: header });
    if (!acc.includes(cur[key])) acc.push({ id: idx, label: cur[key] });

    return acc;
  }, []);
};

const filterByJoinedOptions = computed(() =>
  buildDropDown(itemsPaginated, "joinedOn", "Date Joined")
);

const filterByisMemberOptions = computed(() =>
  buildDropDown(itemsPaginated, "isEnabled", "Status")
);

const filterByLastLoginOptions = computed(() =>
  buildDropDown(itemsPaginated, "lastLogin", "Last Login")
);
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

  <form class="relative" @submit.prevent="submit">
    <label for="msg-search" class="sr-only">Search</label>
    <input
      id="msg-search"
      class="form-input w-full pl-9 focus:border-slate-300"
      type="search"
      v-model="searchValue"
      placeholder="Search by Name, Email or Mobile Number"
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
  <div class="flex flex-col gap-4 xl:flex-row xl:gap-10 items-center flex-wrap">
    <h3>Filter By:</h3>
    <PremFormField horizontal class="mb-0 min-w-[50%] xl:min-w-[20%]">
      <PremFormControl
        @change="dropDownChange"
        v-model="filterByJoinedOptions[0]"
        :options="filterByJoinedOptions"
      />
    </PremFormField>
    <PremFormField horizontal class="mb-0 min-w-[50%] xl:min-w-[20%]">
      <PremFormControl
        v-model="filterByisMemberOptions[0]"
        :options="filterByisMemberOptions"
      />
    </PremFormField>
    <PremFormField horizontal class="min-w-[50%] xl:min-w-[20%]">
      <PremFormControl
        v-model="filterByLastLoginOptions[0]"
        :options="filterByLastLoginOptions"
      />
    </PremFormField>
  </div>

  <div class="text-gray-500 dark:text-white">
    <span>{{ itemsPaginated.length }} learners</span>
  </div>

  <table>
    <thead>
      <tr>
        <th />
        <th>Name</th>
        <th>Email</th>
        <th>Mobile no</th>
        <th>Last Login</th>
        <th>Joined On</th>
        <th>Enabled</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr v-for="learners in itemsPaginated" :key="learners.id">
        <td class="border-b-0 lg:w-6 before:hidden">
          <UserAvatar
            :username="learners.name"
            class="w-24 h-24 mx-auto lg:w-6 lg:h-6"
          />
        </td>
        <td data-label="Name">
          {{ learners.name }}
        </td>
        <td data-label="Email">
          {{ learners.email }}
        </td>
        <td data-label="Mobile No">
          {{ learners.mobile }}
        </td>
        <td data-label="Last Login" class="lg:w-1 whitespace-nowrap">
          <small
            class="text-gray-500 dark:text-slate-400"
            :title="learners.lastLogin"
            >{{ learners.lastLogin }}</small
          >
        </td>
        <td data-label="Joined" class="lg:w-1 whitespace-nowrap">
          <small
            class="text-gray-500 dark:text-slate-400"
            :title="learners.joinedOn"
            >{{ learners.joinedOn }}</small
          >
        </td>
        <TableLearnerEnabled
          data-label="Enabled"
          :checked="learners.isEnabled"
        />
        <td class="before:hidden lg:w-1 whitespace-nowrap">
          <BaseButtons type="justify-start lg:justify-end" no-wrap>
            <BaseButton
              color="info"
              :icon="mdiPencil"
              small
              @click="isModalActive = true"
            />
            <BaseButton
              color="danger"
              :icon="mdiTrashCan"
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
