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
import PremFormField from "@/components/Forms/PremFormField.vue";
import PremFormControl from "@/components/Forms/PremFormControl.vue";

defineProps({
  checkable: { type: Boolean, default: false },
});
const mainStore = useMainStore();
const deleteItemId = ref("");
const EnableItemId = ref("");


const isModalActive = ref(false);
const isModalDangerActive = ref(false);
const isModalEnableActive = ref(false);


const items = ref(mainStore.learners);
const joinDateOptions = ["all", "before", "on", "after", "between"];
const membershipOptions = ["all", "enabled", "disabled"];
const membershipSelectedFilter  = ref("all")
const searchQuery = ref("");
const joinedFilterOption = ref("all");
const joinedFilterDate = ref("");
const joinedFilterStartDate = ref("");
const joinedFilterEndDate = ref("");
const lastLoginFilterOption = ref("all");
const lastLoginFilterDate = ref("");
const lastLoginFilterStartDate = ref("");
const lastLoginFilterEndDate = ref("");
const perPage = 25;
const totalPages = ref(1);
const currentPage = ref(0);

const filteredItems = computed(() => {
  let filtered = items.value;
  console.log(joinDateOptions);
  console.log(joinedFilterOption);
  console.log(joinedFilterDate);
  console.log( joinedFilterOption !== 'all' && joinedFilterOption !== 'between');
  console.log(totalPages.value);
  console.log(membershipSelectedFilter.value);

  if (searchQuery.value) {
    filtered = filtered.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  if(membershipSelectedFilter.value == 'enabled'){
    filtered = filtered.filter((item) => item.isEnabled);
  }
  if(membershipSelectedFilter.value == 'disabled'){
    filtered = filtered.filter((item) => !item.isEnabled );
  }



  if (joinedFilterOption.value !== "all") {
    filtered = filtered.filter((item) => {
      const joinedDate = new Date(item.joinedOn);

      if (joinedFilterOption.value === "on") {
        const filterDate = new Date(joinedFilterDate.value);
        return joinedDate.toDateString() === filterDate.toDateString();
      }

      if (joinedFilterOption.value === "before") {
        const filterDate = new Date(joinedFilterDate.value);
        return joinedDate < filterDate;
      }

      if (joinedFilterOption.value === "after") {
        const filterDate = new Date(joinedFilterDate.value);
        return joinedDate > filterDate;
      }

      if (joinedFilterOption.value === "between") {
        const startDate = new Date(joinedFilterStartDate.value);
        const endDate = new Date(joinedFilterEndDate.value);
        return joinedDate >= startDate && joinedDate <= endDate;
      }
    });
  }

  if (lastLoginFilterOption.value !== "all") {
    filtered = filtered.filter((item) => {
      const lastLoginDate = new Date(item.lastLogin);

      if (lastLoginFilterOption.value === "on") {
        const filterDate = new Date(lastLoginFilterDate.value);
        return lastLoginDate.toDateString() === filterDate.toDateString();
      }

      if (lastLoginFilterOption.value === "before") {
        const filterDate = new Date(lastLoginFilterDate.value);
        return lastLoginDate < filterDate;
      }

      if (lastLoginFilterOption.value === "after") {
        const filterDate = new Date(lastLoginFilterDate.value);
        return lastLoginDate > filterDate;
      }

      if (lastLoginFilterOption.value === "between") {
        const startDate = new Date(lastLoginFilterStartDate.value);
        const endDate = new Date(lastLoginFilterEndDate.value);
        return lastLoginDate >= startDate && lastLoginDate <= endDate;
      }
    });
  }
  totalPages.value = Math.ceil(filtered.length / perPage);
  const start = currentPage.value * perPage;
  const end = (currentPage.value + 1) * perPage;

  return filtered.slice(start, end);
});



const EnableItem = (popup, id) => {
  if (popup) {
    isModalEnableActive.value = true;
    console.log("id is",id);
    EnableItemId.value = id;
    return;
  }
  const index = items.value.findIndex(
    (item) => item.id ===  EnableItemId.value
  );
  console.log("index is",index);
  if (index !== -1) {
    items.value[index].isEnabled = !items.value[index].isEnabled;
  }
};

const deleteItem = (popup, id) => {
  if (popup) {
    isModalDangerActive.value = true;
    deleteItemId.value = id;
    return;
  }
  const index = items.value.findIndex(
    (item) => item.id === deleteItemId.value
  );
  if (index !== -1) {
    items.value.splice(index, 1);
  }
};

</script>

<template>
  <CardBoxModal
    v-model="isModalActive"
    title="Edit Learners"
    buttonLabel="Okay"
  >
    <p>You can edit learner details here.(WIP)</p>
  </CardBoxModal>

  <CardBoxModal
    v-model="isModalDangerActive"
    title="Are you sure you want to delete this learner?"
    button="danger"
    buttonLabel="Yes"
    has-cancel
    @confirm="deleteItem(false)"
  />

  <CardBoxModal
  v-model="isModalEnableActive"
  title="Are you sure you want to Change status of this learner?"
  button="danger"
  buttonLabel="Yes"
  has-cancel
  @confirm="EnableItem(false)"
/>

  <form class="relative" @submit.prevent="submit">
    <label for="msg-search" class="sr-only">Search</label>
    <input
      id="msg-search"
      class="form-input w-full pl-9 focus:border-slate-300"
      type="search"
      v-model="searchQuery"
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
  <div
    class="flex flex-col mt-3 gap-4 xl:flex-row xl:gap-10 items-center flex-wrap"
  >
    <h3>Filter By:</h3>
    <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]">
      <PremFormControl
        :options="joinDateOptions"
        v-model="joinedFilterOption"
        help="Joined On"
      />
    </PremFormField>
    <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]" v-if= "joinedFilterOption != 'all' && joinedFilterOption != 'between' " >
      <PremFormControl
        
        v-model="joinedFilterDate"
        type="date"
        help="Joined On"
      />
    </PremFormField>
    <PremFormField
      class="xl:mb-0 min-w-[50%] xl:min-w-[20%]"
      v-if="joinedFilterOption == 'between'"
    >
      <PremFormControl
        v-model="joinedFilterStartDate"
        type="date"
        help="Start"
      />
    </PremFormField>
    <PremFormField
      class="xl:mb-0 min-w-[50%] xl:min-w-[20%]"
      v-if="joinedFilterOption == 'between'"
    >
      <PremFormControl
        v-model="joinedFilterEndDate"
        type="date"
        help="End"
      />
    </PremFormField>

    <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]">
      <PremFormControl :options="membershipOptions" v-model="membershipSelectedFilter" help="&nbsp" />
    </PremFormField>

    <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]">
      <PremFormControl
        :options="joinDateOptions"
        v-model="lastLoginFilterOption"
        help="Joined On"
      />
    </PremFormField>
    <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]"
    v-if="
    lastLoginFilterOption != 'all' && lastLoginFilterOption != 'between'
  ">
      <PremFormControl

        v-model="lastLoginFilterDate"
        type="date"
        help="Last Login on"
      />
    </PremFormField>
    <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]" v-if="lastLoginFilterOption == 'between'">
      <PremFormControl
        
        v-model="lastLoginFilterStartDate"
        type="date"
        help="Start"
      />
    </PremFormField>
    <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]" v-if="lastLoginFilterOption == 'between'" >
      <PremFormControl
        
        v-model="lastLoginFilterEndDate"
        type="date"
        help="End"
      />
    </PremFormField>

    <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]">
      <PremFormControl
        class="w-1/2"
        buttonLabel="More"
        buttonColor="info"
        help="&nbsp"
      />
    </PremFormField>
  </div>

  <div class="text-gray-500 dark:text-white">
    <span>{{ filteredItems.length }} learners</span>
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
      <tr v-for="learners in filteredItems" :key="learners.id">
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
          @click="EnableItem(true , learners.id)"
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
              @click="deleteItem(true, learners.id)"
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
          v-for="page in totalPages"
          :key="page"
          :active="page-1 === currentPage"
          :label="page "
          :color="page-1 === currentPage ? 'lightDark' : 'whiteDark'"
          small
          @click="currentPage = page-1"
        />
      </BaseButtons>
      <small>Page {{ currentPage+1 }} of {{ totalPages }}</small>
    </BaseLevel>
  </div>
</template>
