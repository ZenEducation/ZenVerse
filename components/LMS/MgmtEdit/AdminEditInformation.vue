<template>
  <div class=" max-w-3xl">
    <h2 class="text-2xl font-semibold">Profile Details</h2>
    <div class="p-6 bg-slate-100 dark:bg-transparent mt-5">
      <FormField label="Name">
        <FormControl
          :model-value="Admin.profile.name"
          placeholder="Enter Admin Name"
        />
      </FormField>

      <FormField label="E-mail">
        <FormControl
          :model-value="Admin.profile.email"
          placeholder="Enter Admin email"
        />
      </FormField>

      <FormField label="Mobile">
        <FormControl
          :model-value="Admin.profile.mobile"
          placeholder="Enter Admin Mobile"
        />
      </FormField>
      <FormField label="Role">
        <FormControl
          :model-value="Admin.profile.role"
          :options="options.profileRoles"
        />
      </FormField>
      <FormField label="State">
        <FormControl
          :model-value="Admin.profile.state"
          :options="options.state"
        />
      </FormField>
      <FormField label="Language">
        <FormControl
          :model-value="Admin.profile.language"
          :options="options.language"
        />
      </FormField>
      <div class="flex flex-row-reverse">
        <BaseButton color="info" label="Save" />
      </div>
    </div>

    <h2 class="text-2xl mt-8 font-semibold">Additional Details</h2>
    <div class="p-6 bg-slate-100 dark:bg-transparent mt-5">
      <FormField label="User Segment">
        <FormControl
          :model-value="Admin.AdditionalDetails.UserSegment"
          :options="options.UserSegment"
        />
      </FormField>
      <FormField label="Lead Status">
        <FormControl
          :model-value="Admin.AdditionalDetails.LeadStatus"
          :options="options.LeadStatus"
        />
      </FormField>
      <FormField label="User Notes">
        <FormControl
          type="textarea"
        />
      </FormField>
      <div class="flex flex-row-reverse">
        <BaseButton color="info" label="Save" />
      </div>
    </div>

    <h2 class="text-2xl mt-8 font-semibold">Change Password</h2>
    <div class="p-6 bg-slate-100 dark:bg-transparent mt-5">
      <FormField label="New Password">
        <FormControl
          placeholder="New Password"
        />
      </FormField>

      <FormField label="Retype new Password">
        <FormControl
          placeholder="Retype new Password"
        />
      </FormField>

      <div class="flex flex-row-reverse">
        <BaseButton color="info" label="Save" />
      </div>
    </div>

    <h2 class="text-2xl mt-8 font-semibold">Referral Details</h2>
    <div class="p-6 bg-slate-100 dark:bg-transparent mt-5">
      <p v-for="(value , key) in Admin.ReferralDetails" class="py-2">{{key}}: <span class="font-bold">{{value}}</span></p>

    </div>

    <h2 class="text-2xl mt-8 font-semibold">UTM Details</h2>
    <div class="p-6 bg-slate-100 dark:bg-transparent mt-5">
      <p v-for="(value , key) in Admin.UTMDetails" class="py-2">{{key}}: <span class="font-bold">{{value}}</span></p>

    </div>

    <h2 class="text-2xl mt-8 font-semibold">Login Details</h2>
    <div class="p-6 bg-slate-100 dark:bg-transparent mt-5">
      <p class="py-2">Number of Logins : <span class="font-bold">60</span></p>
      <p class="py-2">Login Device Reset Count : <span class="font-bold">4</span></p>
      <p class="py-2">last login date : <span class="font-bold">{{new Date("Mar 03 , 2023")}}</span></p>

      <form class="relative" @submit.prevent="submit">
        <label for="msg-search" class="sr-only">Search</label>
        <input
          id="msg-search"
          class="form-input w-full pl-9 focus:border-slate-300"
          type="search"
          v-model="searchQuery"
          placeholder="Search by IP address"
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
          <tr>
            <th>Login Date</th>
            <th>IP</th>
            <th>Status</th>
            <th>Times</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredItems" :key="item['login ip']">
            <td data-label="Login Date" class="lg:w-1 whitespace-nowrap">
              <small
                class="text-gray-500 dark:text-slate-400"
                :title="item['login date']"
                >{{ item["login date"] }}</small
              >
            </td>

            <td data-label="IP">
              {{ item["login ip"] }}
            </td>
            <td data-label="Status">
              {{ item["login status"] }}
            </td>
            <td data-label="Times">
              {{ item["times"] }}
            </td>
          </tr>
        </tbody>
      </table>

    </div>


  </div>
</template>

<script setup>
import FormField from "@/components/Forms/FormField.vue";
import FormCheckRadio from "@/components/Forms/FormCheckRadio.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";

const props = defineProps({
  Admin: {
    type: Object,
    required: true,
  },
  options: {
    type: Object,
    required: true,
  },
});
const searchQuery = ref("");

const items = ref(props?.Admin?.LoginDetails?.['last logins'])

const filteredItems = computed(()=>{
  let filtered = items.value;
  const search = new RegExp(searchQuery.value, "i");

  if (searchQuery.value) {
    filtered = filtered.filter((item) => {
      return search
        ? item["login ip"].match(search) 
        : true;
    });
  }
  return filtered
})
</script>

<style lang="scss" scoped></style>
