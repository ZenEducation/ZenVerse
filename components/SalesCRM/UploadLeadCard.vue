<template>
  <OverlayLayer class="py-5">
    <CardBox
      class="shadow-lg w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
      is-modal
    >
      <CardBoxComponentTitle title="Add Lead"> </CardBoxComponentTitle>

      <div class="space-y-1">
        <PremFormField label="Name">
          <PremFormControl v-model="name" />
        </PremFormField>
        <PremFormField label="Email">
          <PremFormControl v-model="email" />
        </PremFormField>
        <PremFormField label="Phone ">
          <PremFormControl type="number" v-model="phone" />
        </PremFormField>
        <PremFormField horizontal label="Location">
          <PremFormControl v-model="location" />
        </PremFormField>
        <PremFormField horizontal label="Search Source">
          <PremFormControl v-model="searchSource" />
        </PremFormField>
        <slot />
      </div>

      <template #footer>
        <BaseButtons type="justify-between">
          <BaseButton label="Cancel" color="green" @click="hideAddleadmodel" />
          <BaseButton
            label="Add Lead"
            color="info"
            @click="
              pushNewLeadData({
                name,
                email,
                phone,
                location,
                searchSource,
              })
            "
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
  hideAddleadmodel: {
    type: function () {
      return false;
    },
  },
  pushNewLeadData: {
    type: Function,
  },
});

const name = ref("");
const email = ref("");
const phone = ref("");
const location = ref("");
const searchSource = ref("");

const newLeadData = ref({
  name: name.value,
  email: email.value,
  phone: phone.value,
  location: location.value,
  searchSource: searchSource.value,
});
</script>

<style scoped></style>
