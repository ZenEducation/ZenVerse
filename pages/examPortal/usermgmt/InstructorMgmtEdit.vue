<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import InformationTab from "@/components/LMS/MgmtEdit/InstuctorEditInformation.vue";
import CoursesTab from "@/components/LMS/MgmtEdit/LearnerEditCourses.vue";
import PurchaseTab from "@/components/LMS/MgmtEdit/LearnerEditPurchase.vue";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";

import {
  mdiClose,
  mdiChevronRightCircleOutline,
  mdiChevronLeftCircleOutline,
  mdiArrowLeft,
  mdiInformationBoxOutline,
  mdiInformationBox,
  mdiInformationSlabCircleOutline,
  mdiTextBoxMultipleOutline,
  mdiCreditCard,
  mdiMenu,
} from "@mdi/js";

const tabs = ["Information", "Enrolled Courses", "Purchase History"];
const isSidebarActive = ref(false);
const options = {
  profileRoles: ["student", "super admin", "Admin", "affiliate", "instructor"],
  state: [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ],
  language: ["hindi", "English"],
  UserSegment: ["free", "paid", "trial", "returning"],
  LeadStatus: ["Open", "follow up", "Converted", "Not Interested"],
};

const Instructor = {
  profile: {
    name: "Instructor",
    icon: mdiInformationSlabCircleOutline,
    email: "Instructor@ps.com",
    mobile: "1234567890",
    role: "instructor",
    state: "Delhi",
    language: "hindi",
    choose: {
      "Can Edit Published Courses": true,
      "Need Approval for Publishing Courses": true,
      "Access of Live class Recordings": false,
      "Access of Sales Dashboard": false,
      "Access of Messenger": false,
      "Access of Bandwidth Reports": false,
      "Access of Usage Reports": false,
      "Access of Live tests Reports": false,
      "Access of Live class Reports": false,
      "Access to Learner Details": false,
      "Access to Download Quiz/Live Test": false,
      "Access to enroll learners in any course": false,
    },
  },
  AdditionalDetails: {
    UserSegment: "free",
    LeadStatus: "Open",
  },
  LoginDetails: {
    "Number of Logins": 60,
    "Login Device Reset Count": 4,
    "last login date": new Date("Mar 03 , 2023"),
    "last logins": [
      {
        "login date": "Mar 03 , 2023",
        "login ip": "192.168.0.1",
        "login status": "success",
        times: 43,
      },
      {
        "login date": "Mar 24 , 2023",
        "login ip": "192.167.0.1",
        "login status": "success",
        times: 4,
      },
      {
        "login date": "Mar 03 , 2023",
        "login ip": "192.1665.0.1",
        "login status": "success",
        times: 42,
      },
      {
        "login date": "Mar 24 , 2023",
        "login ip": "192.150.0.1",
        "login status": "success",
        times: 34,
      },
    ],
  },
  screenShots: 3,
  ReferralDetails: {
    Source: "NA",
    "Refer Code": "RERY2W",
    "Referral Code Used while signup": null,
    "Total Referred Instructors": 0,
  },
  UTMDetails: {
    "Utm Source": "NA",
    "Utm Medium": "NA",
    "Utm Campaign": "NA",
    "Utm Term": "NA",
    "Utm Content": "NA",
  },
  EnrolledCourses: [
    {
      "Course Id": "FC123",
      "Course Title": "Foundation Course",
      "Joined On": "Mar 03 , 2023",
      "Expiry Date": "Mar 07 , 2024",
      Enabled: true,
    },
    {
      "Course Id": "NEET123",
      "Course Title": "NEET Course",
      "Joined On": "Mar 15 , 2023",
      "Expiry Date": "Mar 16 , 2024",
      Enabled: true,
    },
  ],
  PurchaseHistory: [
    {
      Date: "Mar 03 , 2023",
      "Order ID/TXN ID": "avds12432432",
      Amount: 500,
      Status: "Paid",
      Items: 4,
    },
    {
      Date: "Mar 23 , 2023",
      "Order ID/TXN ID": "avds124fwfedf432",
      Amount: 400,
      Status: "failed",
      Items: 4,
    },
    {
      Date: "Mar 13 , 2023",
      "Order ID/TXN ID": "avds1sadvad32432",
      Amount: 1200,
      Status: "Paid",
      Items: 4,
    },
  ],
};

const isModalDeactivateActive = ref(false);
const isModalDeleteActive = ref(false);

const isActive = ref(0);
</script>

<template>
  <CardBoxModal
    v-model="isModalDeactivateActive"
    title="Are you sure you want to Deactivate this account ?"
    button="danger"
    buttonLabel="Yes"
    has-cancel
    @confirm="
      () => {
        isModalDeactivateActive = false;
      }
    "
  />
  <CardBoxModal
    v-model="isModalDeleteActive"
    title="Are you sure you want to delete this account?"
    button="danger"
    buttonLabel="Yes"
    has-cancel
    @confirm="
      () => {
        isModalDeleteActive = false;
      }
    "
  />
  <NuxtLayout name="lmsadmin">
    <!-- <SectionMain> -->
    <div
      class="relative ml-2"
      style="grid-template-columns: min-content auto"
      :class="{ block: isSidebarActive, grid: !isSidebarActive }"
    >
      <div
        class="w-60 bg-slate-200 dark:bg-transparent overflow-y-hidden"
        style="
          height: calc(100vh - 7rem);
          max-height: calc(100vh - 7rem);
          grid-template-columns: min-content auto;
        "
        :class="{ hidden: isSidebarActive }"
      >
        <div class="pt-8">
          <div class="w-full flex justify-center h-full">
            <img
              class="rounded-[50%] w-20 h-20"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIMAdgMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQUGBwIECAP/xABDEAABAwMABQcJBAcJAAAAAAABAAIDBAURBhIhMUEHE1FhgZGhFRYiQlJxk8HRFDNWsSMyYnKSovAkQ0RTVFWywuH/xAAaAQACAwEBAAAAAAAAAAAAAAAAAwECBAUG/8QAIREAAwACAgICAwAAAAAAAAAAAAECAxEEEiExQVEFE1L/2gAMAwEAAhEDEQA/ALxQhCABeVRPFTROmqJGRxsGXPecAdqatJNI6Ow04Mx5yoeP0cDTtd1noHWqqvV8r71UGSulJYDlkTdjGe4fM7VeYbKt6Jzd+UKjgc6O2QOqnjZzj/QZ2cT4KKV2mV8rCf7XzDD6sDdXHbv8VH0JqhIo22bM1dWTnM9XPIf25XH8yvAEg5BIPSFjlGVbRBu091uNOcwV9VHj2ZnY/NPlv07vNKQKh0dWzokbh3ePoVFsoUOUydstmy6bWu5FsU5NHUHZqykapPU7d34UnBzuXP6kWjWl1bZXthlLqmi3GJx2s/dPy3e5LrH9FlX2W+halsuNLdKRlVRSiSJ/Hi09BHArbSi4IQhAAmXSm/Q2G3mVwD6h/owxE/rHpPUE61E8dNBJPO8MijaXPcdwAVKaQ3eW93SWslyGH0YmH1GDcPmesq8TtlaejUraueuqpKmrlMk0hy5x/rcvHKRInixcpC4NBLjgDeSkc4NGs44ATJW1jql2q3LYhuGd/WVWq6osls3prpEw4jaZD05wF4+V3f5Lf4v/ABNqEj9lDOiHynuEMx1T+jf0O49q28qMJzttaSRDKc+y75FMnJvwylRryh0ylWKVNKDto5famxVwnhJdC4gTQ52PH16Crjt9bBcKOKrpX68Uoy0/I9aoZS7k8vpt9x8n1D/7LVOw3O5knDv3dyXc/JaXrwWohCEkYQnlOuhp7bDbo3YfVO1pMew36nHcVWSkGnlaazSeq25ZBiFvVjf4kqPLRC0hTe2KkSEpCVYg1rm8tpXY9YhqZyx4DDqOw/Ops/W242dO1PFwbr0j+kbR2KcaEWiiueilufVxa76arfNE7iCH7vccbll5F9PI/DPbwRO7aD3q3RCVkQq49UF3MbXM2bQW7+7KjO4kHeDgrohNF60btV6BdW0zeexsnj9GQdvHtysccj+jTWH6KOWWq9rWyapAJOq7gSN+PBT8cmj23OMfbmvt20vONWUdAxu7fBavKXQwUMlko6OMRwshkYxo/eb47d6cssukkKeNpNsaona8bX+00HwWa82+i0NG4DCyBXQMhmlBIIIJBG0ELHKAUAXdotc/K9jpqtxBlLdSXHtt2Hv39qFEuSmtOa+gcdnozMH8p/6oWalpjU/BBrjMai41U5P3kz397iVrEodkEg71iVoFASkJSEpCVIG9ZGQTXejiq2NfBJKGva7cc7PmrD0VtT7LbZLe92s2KokMTj6zCctPv24PWCqtbI5j2uacOacg9BVtWO7QXihZPC5okwOdjztjd0fRYOan4fwa+M1tocEIQucbAUb0is0dfdYrhWgGjoaKU4PrSHd3AZ9+FJFFdOrxFT299uheHVE+A9rT92zec+/YO9NwqnaUi8jSnbICCcbUoKwDkoK7ZzD0BSrAFKoAfNFbibbcpJg7GtCWb+tp+SRNETHvdhm04SKrnZJsXiE092rYSMc3USNx7nFaZUo5RqE0mkssoGGVLGyj37j4jxUWKlegYhKwJSkrAlSQISpFoHcG0l8EMh1Y6pnN54a29vzHao0Stm07btQdP2mL/mFTIlUNMvD1SaLpQsWO1ht3jYVkuGdQxkkZEx0kjg1jAXOcdwA3lU3cq019xqas5/TSFwB4DgO7CtLSY5sNyYP9LIT/AAlVBuK6HClabMfJfpHqCs2leLSvRpXQZkPQFZLAFZBQSSXQW3+UrtLGRkNp3O/makUn5KaEso6yvcPvXiNh6m7T4nwSpVV5LpeDe5SbQa+yirhbmajJfs3lh/WH5HsVSFdEPa17S1wBaRgg8QqW0ysDrFdXtYD9kmJdC7o6W9iMb+CKRHSsA0vdqsBc47g0ZJT9YrMysaamqB5rOGsBxrdZPQpNT00FM3VgiZGP2W4T1Ozn5+bON9UtshVLo/canBMQhYfWlOPDepDYNFYW3OF00z5DCRKceiMggjxwnlZ0NQ2kr9eTZHI3VJ6P6wq5pf6319iMHNq80q3qdj7IHNfrM4jak52T2QvYYcMjaOBRgLgHqjWnpGVlHUU8+dWoY5j8dBGFXdVooQ+RlPUYkY4tLZBs7x9FZU80dPEZJXBrR49SjTHmWSWYjHOPLsLpcBN736ON+WzvF16PyQSps9fSZMtM4tHrs9IeC1GqyVq1Vuo6sHn4GOJ9YDDu8LoODnY/yP8AaIIF7QRSVE0cMLdeSRwa1o4k7ls3a3Ot1SGBxdE8ZY4jb7vepnyZ6PF8vlmqZ6DdlMDxPF3yHal0+p04pWlU+id2K3MtNppqGP8AumAOPtO3uPacoW+hZx4Juvloprzb5KSqb6LtrXDe08CE4oQBW7LbLaoo6Kba6MY1hud1pVPK+hhrojHM3Psu4hRK42mooXElpfHwe0fmtUZE1pnC5fCuadz5TNBYuaHtw7cskJpzzKmqaqkGrC8Oj9h/BbJvFXjDaeMHpzlaiEmuPip7aNWPnciJ6zXgSZ01U8PqZNbG5o3BLwwhCbMqVpGe7q3untghABJAAyTwCerXYZKgiSqBZH7PE/RRVKfZfDgvM9Shqg0c8vT05ny2lhfrPPt/shT6GJkMTIomhrGDDWjcAiGJkMbY42hrRuAXost12ez0WDCsMKAQhCoOBC5et2lWmdwbIYNJqtpj3h8uNmCRw6j3LZZfdNy5gdpRVMDjhxL3HV9LB2Bm3hu38M4JVujIOmEjmhwwRkLnaWo0/jkaPOmcxl4YX86cgk9AafA7OOwEpjr9MtL6Grkpn6TVz5InFsmq/YHA8MjaOvijqwOj62wUlQS6PMTzxbuTPUaO1cZJiLZB3FUB5+aXfiK4fEH0R5+aXfiK4fEH0TF2XyZ8nFw5PaLyfbK1h9Knf2bVgKGqJx9nk7lSHn5pd+Irh8QfRJ5+aXfiK4fEH0V+9GZ/jcP2y9YrTXSHZAR79icKbRuZxBnlDB0N3rnvz80u/EVw+IPojz80u/EVw+IPoodWxkcDBPnWzp+itNLSAFjA5/tO2lb2FyrBpvplPMyKHSC4Oe84aOdAz3rd84eUD/d7j8dnX19R7kpy37NiSlaSOnkLl86R8oAdqm73LOM/fM3ZI+RWfnBygYz5Zr+P+Jj4bxv6kdGTs6dQuV6vTLTWjm5mpv8AXskxnAna7Zu3tyOBQjow2RYbDkbCjJ6ShCYAcc8UIQgAQhCCAQhCABCEIAEmB0BCEAGqOgJcIQpJBCEKAP/Z"
              alt="Instructor"
            />
          </div>
          <div class="w-full flex justify-center h-full">
            <h4 class="font-semibold text-xl">Instructor 1</h4>
          </div>
          <div class="w-full flex justify-center h-full">
            <h4 class="font-semibold text-sm">Instructor@ps.com</h4>
          </div>

          <div class="flex justify-center mt-3">
            <h4 class="max-w-min font-semibold text-sm bg-slate-300">
              Created:2023/04/21
            </h4>
          </div>

          <div class="mt-12">
            <ul>
              <NuxtLink
                to="/examportal/usermgmt/InstructorMgmt"
                class="w-full min-w-60 pl-8 h-12 flex gap-1 align-middle justify-start items-center bg-slate-300"
              >
                <BaseIcon :path="mdiArrowLeft" class="cursor-pointer" />
                <p>Back To Instructors</p>
              </NuxtLink>
              <li
                class="cursor-pointer w-full pl-8 h-12 flex gap-1 align-middle justify-start items-center"
                :class="{ 'bg-slate-500': isActive == 0 }"
                @click="() => (isActive = 0)"
              >
                <BaseIcon
                  :path="mdiInformationSlabCircleOutline"
                  class="cursor-pointer"
                />
                <p>Information</p>
              </li>
              <li
                class="cursor-pointer w-full pl-8 h-12 flex gap-1 align-middle justify-start items-center"
                :class="{ 'bg-slate-500': isActive == 1 }"
                @click="() => (isActive = 1)"
              >
                <BaseIcon
                  :path="mdiTextBoxMultipleOutline"
                  class="cursor-pointer"
                />
                <p>Courses</p>
              </li>
              <li
                class="cursor-pointer w-full pl-8 h-12 flex gap-1 align-middle justify-start items-center"
                :class="{ 'bg-slate-500': isActive == 2 }"
                @click="() => (isActive = 2)"
              >
                <BaseIcon :path="mdiCreditCard" class="cursor-pointer" />
                <p>Purchase History</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="overflow-y-scroll"
        style="
          height: calc(100vh - 7rem);
          max-height: calc(100vh - 7rem);
          grid-template-columns: min-content auto;
        "
        st
      >
        <div
          class="flex w-full bg-transparent justify-between items-center px-3 h-16 border-b-2 border-slate-800"
        >
          <div class="flex items-center">
            <div class="p-2 bg-red-300 rounded-[50%] mr-4">
              <BaseIcon
                :path="mdiMenu"
                class="cursor-pointer"
                @click="
                  () => {
                    isSidebarActive = !isSidebarActive;
                  }
                "
              />
            </div>
            <p class="text-2xl">{{ tabs[isActive] }}</p>
          </div>
          <div v-if="isActive == 0" class="flex items-center gap-2">
            <p
              @click="
                () => {
                  isModalDeactivateActive = true;
                }
              "
              class="cursor-pointer hover:bg-slate-200 p-1 border border-black"
            >
              Deactivate
            </p>
            <p
              @click="() => (isModalDeleteActive = true)"
              class="cursor-pointer hover:bg-slate-200 p-1 border border-black"
            >
              Delete
            </p>
          </div>
        </div>
        <div class="md:p-12 p-3">
          <InformationTab
            :Instructor="Instructor"
            :options="options"
            v-if="isActive == 0"
          />
          <CoursesTab v-if="isActive == 1" />
          <PurchaseTab v-if="isActive == 2" />
        </div>
      </div>
    </div>

    <!-- </SectionMain> -->
  </NuxtLayout>
</template>
