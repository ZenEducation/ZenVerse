<script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import { mdiPlus } from "@mdi/js";

const pricingOptions = ref([
  { id: 0, label: "Make this a free bundle", value: "free" },
  { id: 1, label: "make this a paid bundle", value: "paid" },
]);


const isPaid = ref(pricingOptions.value[0].label);

const validityOptions = ref([
  { id: 0, label: "Set Validity", value: "" },
  { id: 1, label: "Set Expiry", value: "" },
]);

const validitySelected = ref(validityOptions.value[0].label)
</script>
<template>
  <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4">
    <CardBox
      class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
      is-form
      @submit.prevent="submit"
    >
      <p class="font-bold text-lg">Bundle Selling Type</p>
      <p class="text-xs mb-4">
        Select a bundle selling type ans make it either free/paid bundle
      </p>
      <template v-for="i in pricingOptions">
        <input type="radio" v-model="isPaid" :value="i.label" />
        <p class="inline p-4  leading-8">
            {{ i.label }}
        </p>
        <br />
      </template>

      <p class="font-bold text-lg mt-4">Pricing</p>
      <p class="text-xs mb-4">
        Set bundle price for your learners
      </p>


      <PremFormField label="Bundle Price ₹ *">
        <PremFormControl required type="number" placeholder="4999" />
      </PremFormField>

      <PremFormField label="Discounted Price ₹ *">
        <PremFormControl required type="number" placeholder="Enter the Discounted price" />
      </PremFormField>

      <p class="font-bold text-lg mt-4">Validity</p>
      <p class="text-xs mb-4">
        Set a bundle validity or expiry for your bundle
      </p>

      <template v-for="i in validityOptions">
        <input type="radio" v-model="validitySelected" :value="i.label" />
        <p class="inline p-4  leading-8">
            {{ i.label }}
        </p>
            <PremFormControl v-if="i.id==0" required type="number" placeholder="Day(s)" />

            <PremFormControl v-if="i.id==1" required type="Date"  />

        <br />
      </template>

      <p class="font-bold text-lg mt-4">Variable Pricing </p>
      <p class="text-xs mb-4">
        Set a variable pricing for your bundle based on different validity
      </p>

      <BaseButton
      :icon="mdiPlus"
      :label="'Add Pricing'"
      :color="'info'"
      />



    </CardBox>
  </div>
</template>

<style lang="scss" scoped></style>
