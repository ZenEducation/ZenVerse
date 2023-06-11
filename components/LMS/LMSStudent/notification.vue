<template>
  <CardBox>
    <CardBoxComponentTitle title="General Notification Setting" />
    <BaseDivider />

    <FormCheckRadio class="w-full my-3 font-semibold" label="send me a weekly reminder email" >
    </FormCheckRadio>
    
    <FormCheckRadio class="w-full my-3 font-semibold" label="Recive an email when someone replies to my discussion">
    </FormCheckRadio>


    <div class="my-8">
      <BaseButton label="Save Changes" color="info" />
    </div>
  </CardBox>
</template>

<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import FormCheckRadio from "~~/components/Forms/FormCheckRadio.vue";
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
