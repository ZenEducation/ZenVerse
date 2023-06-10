<template>
  <CardBox>
    <CardBoxComponentTitle title="Change Password" />
    <BaseDivider />

    <PremFormField class="w-full" label="New Password">
      <PremFormControl placeholder="Enter your New Password" />
    </PremFormField>
    <PremFormField class="w-full" label="Re-Enter Password">
      <PremFormControl placeholder="Enter your Re-Enter Password" />
    </PremFormField>
    <PremFormField class="w-full" label="Current Password">
      <PremFormControl placeholder="Enter your Current Password" />
    </PremFormField>
    <p class="text-sm">
      (We need your current password to confirm your changes)
    </p>

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
import image from "@/assets/img/bundleImage.png";
import { useLayoutStore } from "@/stores/layout.js";
</script>

<style lang="scss" scoped></style>
