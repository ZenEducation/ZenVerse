<template>
  <CardBox>
    <CardBoxComponentTitle title="Edit Profile" />
    <BaseDivider />

    <div class="flex justify-center">
      <div class="w-56 rounded-md overflow-hidden">
        <img :src="profilePreview" alt="" v-if="profilePreview" />
        <div class="flex justify-around items-center h-12">
          <BaseButton
            @click="
              () => {
                profilePreview =
                  'https://img.freepik.com/free-icon/user_318-159711.jpg';
              }
            "
            v-if="
              profilePreview &&
              profilePreview !=
                'https://img.freepik.com/free-icon/user_318-159711.jpg'
            "
            color="danger"
            label="REMOVE"
            small
          />
          <BaseButton
            @click="
              () => {
                openFileInput('profileInput');
              }
            "
            color="info"
            label="Update"
            small
          />
          <input
            ref="profileInput"
            type="file"
            @change="handleFileUpload($event, 'profile')"
            accept="image/*"
            class="hidden"
          />
        </div>
      </div>
    </div>

    <PremFormField class="w-full" label="Email">
      <PremFormControl placeholder="Enter your Email" />
    </PremFormField>
    <PremFormField class="w-1/2 inline-block pr-2" label="First Name">
      <PremFormControl placeholder="Enter your First Name" />
    </PremFormField>
    <PremFormField class="w-1/2 inline-block pl-2" label="Last Name">
      <PremFormControl placeholder="Enter your Last Name" />
    </PremFormField>
    <PremFormField class="w-full" label="Company">
      <PremFormControl placeholder="Enter your Company" />
    </PremFormField>
    <PremFormField class="w-full" label="Professional Title">
      <PremFormControl placeholder="Enter your Professional Title" />
    </PremFormField>
    <PremFormField class="w-full" label="Timezone">
      <PremFormControl :options="timeZones" />
    </PremFormField>

    <PremFormField class="w-full" label="Site Language">
      <PremFormControl :options="languages" />
    </PremFormField>

    <div class="my-8">
      <BaseButton label="Save" color="info" />
    </div>
  </CardBox>
</template>

<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import {
  mdiDancePole,
  mdiInformationBoxOutline,
  mdiPlus,
  mdiArrowLeft,
} from "@mdi/js";
import { mdiGrid, mdiFormatListBulleted } from "@mdi/js";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";

const timeZones = [
  "Pacific/Honolulu",
  "America/Los_Angeles",
  "America/Denver",
  "America/Chicago",
  "America/New_York",
  "America/Sao_Paulo",
  "America/Buenos_Aires",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "Europe/Rome",
  "Africa/Johannesburg",
  "Africa/Cairo",
  "Asia/Dubai",
  "Asia/Kolkata",
  "Asia/Shanghai",
  "Asia/Tokyo",
  "Australia/Sydney",
  "Pacific/Auckland",
  "Pacific/Fiji",
  "Pacific/Tongatapu",
];
const languages = [
  "English",
  "Chinese",
  "Spanish",
  "French",
  "Arabic",
  "Hindi",
  "Bengali",
  "Russian",
  "Portuguese",
  "Indonesian",
  "Urdu",
  "German",
  "Japanese",
  "Swahili",
  "Telugu",
  "Marathi",
  "Tamil",
  "Turkish",
  "Italian",
  "Vietnamese",
  "Korean",
  "Polish",
  "Ukrainian",
  "Dutch",
  "Czech",
  "Persian",
  "Thai",
  "Romanian",
  "Greek",
  "Hungarian",
  "Swedish",
];

const profileInput = ref(null);
const profilePreview = ref(
  "https://img.freepik.com/free-icon/user_318-159711.jpg"
);

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
</script>

<style lang="scss" scoped></style>
