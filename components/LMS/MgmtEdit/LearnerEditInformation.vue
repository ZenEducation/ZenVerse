<template>
  <div class=" max-w-3xl">
    <h2 class="text-2xl font-semibold">Profile Details</h2>
    <div class="p-6 bg-slate-100 dark:bg-transparent mt-5">
      <FormField label="Name">
        <FormControl
          :model-value="learner.profile.name"
          placeholder="Enter learner Name"
        />
      </FormField>

      <FormField label="E-mail">
        <FormControl
          :model-value="learner.profile.email"
          placeholder="Enter learner email"
        />
      </FormField>

      <FormField label="Mobile">
        <FormControl
          :model-value="learner.profile.mobile"
          placeholder="Enter learner Mobile"
        />
      </FormField>
      <FormField label="Role">
        <FormControl
          :model-value="learner.profile.role"
          :options="options.profileRoles"
        />
      </FormField>
      <FormField label="State">
        <FormControl
          :model-value="learner.profile.state"
          :options="options.state"
        />
      </FormField>
      <FormField label="Language">
        <FormControl
          :model-value="learner.profile.language"
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
          :model-value="learner.AdditionalDetails.UserSegment"
          :options="options.UserSegment"
        />
      </FormField>
      <FormField label="Lead Status">
        <FormControl
          :model-value="learner.AdditionalDetails.LeadStatus"
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

    <h2 class="text-2xl mt-8 font-semibold">Unblock Learner on iOS</h2>
    <div class="p-6 bg-slate-100 dark:bg-transparent mt-5">
      <p>
        Learner's accounts are blocked if they try to take more than 3 screenshots in the iOS app.
On every screenshot taken, they are presented with the warning of account blockage.
You can click on the below button to unblock the account
      </p>
      <br>
      <h2>Total screenshots taken : <span class="text-blue-400">0</span></h2>
      <div class="flex mt-4">
        <BaseButton color="info" label="Unblock Learner" />
      </div>
    </div>

    <h2 class="text-2xl mt-8 font-semibold">Login Details</h2>
    <div class="p-6 bg-slate-100 dark:bg-transparent mt-5">
      <p class="py-2">Number of Logins : <span class="font-bold">60</span></p>
      <p class="py-2">Login Device Reset Count : <span class="font-bold">4</span></p>
      <p class="py-2">last login date : <span class="font-bold">{{new Date("Mar 03 , 2023")}}</span></p>

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
          <tr v-for="item in learner.LoginDetails['last logins']" :key="item['login ip']">
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

    <h2 class="text-2xl mt-8 font-semibold">Downloaded Courses</h2>
    <div class="p-6 bg-slate-100 dark:bg-transparent mt-5">
      No Downloaded Courses
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
      <p v-for="(value , key) in learner.ReferralDetails" class="py-2">{{key}}: <span class="font-bold">{{value}}</span></p>

    </div>

    <h2 class="text-2xl mt-8 font-semibold">UTM Details</h2>
    <div class="p-6 bg-slate-100 dark:bg-transparent mt-5">
      <p v-for="(value , key) in learner.UTMDetails" class="py-2">{{key}}: <span class="font-bold">{{value}}</span></p>

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
  learner: {
    type: Object,
    required: true,
  },
  options: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
