<template>
  <OverlayLayer class="py-5">
    <CardBox
      class="shadow-lg w-11/12 md:w-3/5 lg:w-2/5 xl:w-5/12 z-50"
      is-modal
    >
      <CardBoxComponentTitle title="Information"> </CardBoxComponentTitle>

      <div class="space-y-1">
        <h3 class="font-xl">Do Note this Points</h3>
        <ul class="pl-7 py-2">
          <li>1. Name only Allowed Characters and Whitespaces</li>
          <li>2. If email id exists in file, it should be in proper format</li>
          <li>
            3. If Phone number exists in file, it should be in proper format
          </li>
          <li>
            4. If Email Id exists already in your CRM that row will be skipped
          </li>
        </ul>
        <p class="text-red-500">
          <strong>*Note : </strong> If file have blank columns like Name of have
          Invalid Email Id row will be skipped from uploadation.Please check the
          file before uploading.
        </p>
      </div>

      <template #footer>
        <BaseButtons type="justify-between">
          <BaseButton
            label="Cancel"
            color="green"
            @click="hidefileUploadWarningModel"
          />
          <BaseButton
            label="I have checked my File"
            color="info"
            @click="showfileUploadPopUpModel"
          />
        </BaseButtons>
      </template>
    </CardBox>
  </OverlayLayer>
</template>
<script setup>
import OverlayLayer from "@/components/Asidemenu/OverlayLayer.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";

import { ref, defineProps } from "vue";

const props = defineProps({
  hidefileUploadWarningModel: {
    type: function () {
      return false;
    },
  },
  showfileUploadPopUpModel: {
    type: function () {
      return false;
    },
  },
});
</script>

<style scoped></style>
