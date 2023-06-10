<script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import Profile from "@/components/LMS/LMSStudent/profile.vue";
import Password from "@/components/LMS/LMSStudent/password.vue";
import Notification from "@/components/LMS/LMSStudent/notification.vue";
import Billing from "@/components/LMS/LMSStudent/billing.vue";
import OrderHistory from "@/components/LMS/LMSStudent/orderHistory.vue";

const tabs = [
  "Profile",
  "Passwords",
  "Notifications",
  "Billings",
  "Order History",
];
const currentTab = ref(tabs[0]);
</script>
<template>
  <NuxtLayout name="lmsstudent">
    <div
      class="w-full mt-12 mx-auto px-[15px] sm:max-w-[540px] sm:px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px]"
    >
      <div class="lg:w-1/4 w-full block lg:inline-block">
        <div
          class="flex lg:flex-col max-sm:flex-col md:flex-row gap-0 lg:w-56 lg:border-r lg:border-b max-sm:w-56 max-sm:border-r max-sm:border-b"
        >
          <div
            v-for="i in tabs"
            class="lg:w-full max-sm:w-full h-8 flex items-center pl-4 max-lg:pr-4 max-sm:pr-0 lg:ml-6 lg:my-2 max-sm:ml-6 max-sm:my-2 cursor-pointer lg:hover:border-l-2 max-sm:hover:border-l-2 max-lg:border max-sm:border-0"
            :class="{
              'max-lg:border-b-transparent max-sm:border-l-4 max-sm:border-l-black border-l-4 border-l-black':
                i == currentTab,
            }"
            @click="currentTab = i"
          >
            <p>{{ i }}</p>
          </div>
        </div>
      </div>
      <div class="lg:w-3/4 w-full block lg:inline-block lg:p-7 max-lg:pt-4">
          <Profile v-if="currentTab == tabs[0]" />
          <Password v-if="currentTab == tabs[1]" />
          <Notification v-if="currentTab == tabs[2]" />
          <Billing v-if="currentTab == tabs[3]" />
          <OrderHistory v-if="currentTab == tabs[4]" />
        
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped></style>
