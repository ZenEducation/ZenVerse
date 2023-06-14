<template>
  <NuxtLayout name="zen">
    <div class="max-w-3xl mx-auto py-10">
      <div class="flex px-8 justify-between items-center">
        <p class="text-2xl font-semibold">Profile Picture</p>
        <div class="w-24 h-24 relative">
          <img
            :src="profilePreview"
            class="w-full h-full rounded-[50%] overflow-hidden"
            alt=""
          />
          <div
            class="absolute right-0 bottom-0 cursor-pointer rounded-[50%] w-8 h-8 bg-slate-400 flex items-center justify-center"
            @click="
              () => {
                openFileInput('profileInput');
              }
            "
          >
            <BaseIcon :path="mdiCamera" />
          </div>
          <input
            ref="profileInput"
            type="file"
            @change="handleFileUpload($event, 'profile')"
            accept="image/*"
            class="hidden"
          />
        </div>
      </div>
      <h2 class="text-2xl font-semibold">Profile Details</h2>
      <div class="p-6 bg-slate-100 dark:bg-transparent mt-5">
        <FormField label="Name">
          <FormControl
            :model-value="user.profile.name"
            placeholder="Enter user Name"
          />
        </FormField>

        <FormField label="E-mail">
          <FormControl
            :model-value="user.profile.email"
            placeholder="Enter user email"
          />
        </FormField>

        <div class="flex flex-row-reverse">
          <BaseButton color="info" label="Save" />
        </div>
      </div>

      <h2 class="text-2xl mt-8 font-semibold">Communication email</h2>
      <p class="text-xs">
        All communication like billing , product update , important notification
        will be sent to this email address
      </p>
      <div class="p-6 bg-slate-100 dark:bg-transparent mt-5">
        <FormField label="Communication E-mail">
          <FormControl placeholder="Enter user email" />
        </FormField>

        <div class="flex flex-row-reverse">
          <BaseButton color="info" label="Save" />
        </div>
      </div>
      <h2 class="text-2xl mt-8 font-semibold">Billing Details</h2>
      <div class="p-6 bg-slate-100 dark:bg-transparent mt-5">
        <FormField label="Billing Name">
          <FormControl placeholder="Enter Billing Name" />
        </FormField>
        <FormField label="Billing Address">
          <FormControl type="textarea" placeholder="Enter Billing Name" />
        </FormField>
        <FormField label="Country">
          <FormControl :options="options.Countries" />
        </FormField>
        <FormField label="Mobile">
          <FormControl
            :model-value="user.profile.mobile"
            placeholder="Enter user Mobile"
          />
        </FormField>
        <FormField label="City">
          <FormControl placeholder="Enter City" />
        </FormField>
        <FormField label="State">
          <FormControl
            :model-value="user.profile.state"
            :options="options.state"
          />
        </FormField>
        <FormField label="Zip Code">
          <FormControl type="number" placeholder="Enter Zip Code" />
        </FormField>
        <FormField label="GST Number">
          <FormControl placeholder="GST Number" />
        </FormField>

        <div class="flex flex-row-reverse">
          <BaseButton color="info" label="Save" />
        </div>
      </div>

      <h2 class="text-2xl mt-8 font-semibold">Change Password</h2>
      <div class="p-6 bg-slate-100 dark:bg-transparent mt-5">
        <FormField label="Current Password">
          <FormControl placeholder="Current Password" />
        </FormField>

        <FormField label="New Password">
          <FormControl placeholder="New Password" />
        </FormField>

        <FormField
          label="Retype new Password"
          help="Minimum 6 characters required"
        >
          <FormControl placeholder="Retype new Password" />
        </FormField>

        <div class="flex flex-row-reverse">
          <BaseButton color="info" label="Save" />
        </div>
      </div>

      <h2 class="text-2xl mt-8 font-semibold">Account Deletion</h2>
      <div class="p-6 bg-slate-100 dark:bg-transparent mt-5">
        <p>
          By changing this security setting , your account would no longer
          exists.Your user would not be access your website , course and apps.
        </p>
        <div class="flex flex-row-reverse mt-4">
          <BaseButton color="info" label="Delete" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import FormField from "@/components/Forms/FormField.vue";
import FormCheckRadio from "@/components/Forms/FormCheckRadio.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
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
  mdiCamera,
} from "@mdi/js";

import image from "@/assets/img/indexremovebgpreview.png";

const profileInput = ref(null);
const profilePreview = ref(image);

const handleFileUpload = (event, type) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = () => {
      profilePreview.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const openFileInput = (inputRef) => {
  const fileInput = profileInput.value;
  fileInput.value = "";
  fileInput.click();
};

const options = {
  profileRoles: [
    "student",
    "super admin",
    "sub admin",
    "affiliate",
    "instructor",
  ],
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
  Countries: [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
  ],
};

const user = {
  profile: {
    name: "user",
    icon: mdiInformationSlabCircleOutline,
    email: "user@ps.com",
    mobile: "1234567890",
    role: "student",
    state: "Delhi",
    language: "hindi",
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
    "Total Referred users": 0,
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
</script>

<style lang="scss" scoped></style>
