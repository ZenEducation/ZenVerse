<template>
  <div>
    <CardBoxModal
      v-model="isModalDangerActive"
      title="Are you sure you want to delete this Course?"
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

    <div class="lg:flex justify-between mt-6">
      <div class="w-full ">
        <div class="relative mt-4 inline-block mr-4 max-sm:w-full sm:w-1/3 lg:w-1/5">
          <p>filter by:</p>
        </div>
        <div class="relative mt-4 inline-block mr-4 max-sm:w-full sm:w-1/3 lg:w-1/5">
            <FormField class="xl:mb-0  min-w-[50%] xl:min-w-[20%] " label="Status" >
                <FormControl
                  :options="['all', 'enabled' , 'disabled']"
                  v-model="enabledFilterStatus"
                />
            </FormField>
        </div>
        <div class="relative mt-4 inline-block mr-4 max-sm:w-full sm:w-1/3 lg:w-1/5">
            <FormField class="xl:mb-0  min-w-[50%] xl:min-w-[20%] " label="Joining Date">
                <FormControl
                
                v-model="joinedFilterDate"
                type="date"
                />
            </FormField>
        </div>
        <div class="relative mt-4 inline-block mr-4 max-sm:w-full sm:w-1/3 lg:w-1/5">
            <FormField class="xl:mb-0  min-w-[50%] xl:min-w-[20%] " label="Expiry Date" >
                <FormControl
                v-model="expiryFilterDate"
                type="date"
              />
            </FormField>
        </div>

      </div>

      <div
        class="flex-end mr-4 p-[0.6rem] underline cursor-pointer leading-none flex items-center"
        @click="resetfilter"
      >
        <p
          role=""
          tabindex="-1"
          class="break-words text-body text-darkSlate01 false"
        >
          Reset Filters
        </p>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Course Id</th>
          <th>Course Title</th>
          <th>Joined On</th>
          <th>Expiry Date</th>
          <th>Enabled</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredItems" :key="item['Course Id']">
          <td data-label="Course Id">
            {{ item["Course Id"] }}
          </td>
          <td data-label="'Course Title'">
            {{ item["Course Title"] }}
          </td>

          <td data-label="Joined" class="lg:w-1 whitespace-nowrap">
            <small
              class="text-gray-500 dark:text-slate-400"
              :title="item['Joined On']"
              >{{ item["Joined On"] }}</small
            >
          </td>
          <td data-label="Expiry Date" class="lg:w-1 whitespace-nowrap">
            <small
              class="text-gray-500 dark:text-slate-400"
              :title="item['Expiry Date']"
              >{{ item["Expiry Date"] }}</small
            >
          </td>
          <TableLearnerEnabled
            data-label="Enabled"
            :checked="item.Enabled"
            @click="EnableItem(true, item['Course Id'])"
          />
          <td class="before:hidden lg:w-1 whitespace-nowrap">
            <BaseButtons type="justify-start lg:justify-end" no-wrap>
              <BaseButton
                color="danger"
                :icon="mdiTrashCan"
                small
                @click="deleteItem(true, item['Course Id'])"
              />
            </BaseButtons>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import TableLearnerEnabled from "@/components/Tables/TableLearnerEnabled.vue";
import { mdiTrashCan } from "@mdi/js";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";

const EnrolledCourses = ref([
  {
    "Course Id": "FC123",
    "Course Title": "Foundation Course",
    "Joined On": "Mar 03 , 2023",
    "Expiry Date": "Mar 07 , 2024",
    Enabled: false,
  },
  {
    "Course Id": "NEET123",
    "Course Title": "NEET Course",
    "Joined On": "Mar 15 , 2023",
    "Expiry Date": "Mar 16 , 2024",
    Enabled: true,
  },
]);

const searchQuery = ref("");
const joinedFilterDate = ref("");
const expiryFilterDate = ref("");
const enabledFilterStatus = ref('all');
const isJoinedFilter = ref(false);
const isExpiryFilter = ref(false);
const isEnabledFilter = ref(false);

const resetfilter = () => {
  searchQuery.value = ""
  joinedFilterDate.value = "";
  expiryFilterDate.value = "";
  enabledFilterStatus.value = "all";
  isJoinedFilter.value = false;
  isExpiryFilter.value = false;
  isEnabledFilter.value = false;
};

const filteredItems = computed(() => {
  let filtered = EnrolledCourses.value;
  const search = new RegExp(searchQuery.value, "i");

  if (searchQuery.value) {
    filtered = filtered.filter((item) => {
      return search
        ? item["Course Id"].match(search) || item["Course Title"].match(search)
        : true;
    });
  }
  if (enabledFilterStatus.value != 'all') {
    if(enabledFilterStatus.value == 'enabled'){
        filtered = filtered.filter(
      (item) => item.Enabled == true
    );
    }else{
        filtered = filtered.filter(
      (item) => item.Enabled == false
    );
    }
  }

  if (joinedFilterDate.value) {
    const joinDate = new Date(joinedFilterDate.value);


    filtered = filtered.filter((item) => {
      const present = new Date(item["Joined On"]);
      return joinDate.toDateString() == present.toDateString();
    });
  }

  if (expiryFilterDate.value) {
    const expiryDate = new Date(expiryFilterDate.value);

    filtered = filtered.filter((item) => {
      const present = new Date(item["Expiry Date"]);
      return expiryDate.toDateString() == present.toDateString();
    });
  }

  return filtered;
});

const deleteItemId = ref("");
const isModalDangerActive = ref(false);

const deleteItem = (popup, id) => {
  if (popup) {
    isModalDangerActive.value = true;
    deleteItemId.value = id;
    return;
  }
  const index = EnrolledCourses.value.findIndex(
    (item) => item["Course Id"] === deleteItemId.value
  );
  if (index !== -1) {
    EnrolledCourses.value.splice(index, 1);
  }
};

const isModalEnableActive = ref(false);
const EnableItemId = ref("");
const EnableItem = (popup, id) => {
  if (popup) {
    isModalEnableActive.value = true;
    EnableItemId.value = id;
    return;
  }
  const index = EnrolledCourses.value.findIndex(
    (item) => item["Course Id"] === EnableItemId.value
  );
  if (index !== -1) {
    EnrolledCourses.value[index].Enabled =
      !EnrolledCourses.value[index].Enabled;
  }
};
</script>

<style lang="scss" scoped></style>
