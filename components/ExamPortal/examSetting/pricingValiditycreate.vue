<script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import { mdiPlus, mdiTrashCan, mdiWindowClose } from "@mdi/js";
import CardBoxModal from "~~/components/Cards/CardBoxModal.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import { API } from "aws-amplify";
import {
  createVariablePricing,
  deleteVariablePricing,
} from "@/src/graphql/mutations";
import { listVariablePricings } from "@/src/graphql/queries";

const pricingOptions = ref([
  { id: 0, label: "Make this a free mock test", value: true },
  { id: 1, label: "make this a paid mock test", value: false },
]);

const isPaid = ref(pricingOptions.value[0].value);

const validityOptions = ref([
  { id: 0, label: "Set Validity", value: true },
  { id: 1, label: "Set Expiry", value: false },
]);

const list = ref([
  {
    id: 0,
    days: 2344,
    price: 3499,
    discountPrice: 2000,
  },
  {
    id: 1,
    days: 2321,
    price: 1999,
    discountPrice: 1000,
  },
]);

const validitySelected = ref(validityOptions.value[0].value);


const props = defineProps({
  data: Object,
});
const emit = defineEmits(["form-data-changes-pricing"]);

const formData = ref(props.data);
console.log(formData.value);
let { isFree, price, discount, isValidityDays, validityDays, expiryDate, id } =
  formData.value;
isPaid.value = isFree;
validitySelected.value = isValidityDays;
// console.log("basic" , name , shortId);

const emitFormDataChanges = () => {
  emit("form-data-changes-pricing", {
    isFree: isPaid.value,
    price,
    discount,
    isValidityDays: validitySelected.value,
    validityDays,
    expiryDate,
  });
};





</script>
<template>


  <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4">
    <CardBox
      class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
      is-form
      @submit.prevent="submit"
    >
      <p class="font-bold text-lg">mock test Selling Type</p>
      <p class="text-xs mb-4">
        Select a mock test selling type ans make it either free/paid mock test
      </p>
      <template v-for="i in pricingOptions">
        <input
          type="radio"
          v-model="isPaid"
          :value="i.value"
          @change="emitFormDataChanges"
        />
        <p class="inline p-4 leading-8">
          {{ i.label }}
        </p>
        <br />
      </template>

      <p class="font-bold text-lg mt-4">Pricing</p>
      <p class="text-xs mb-4">Set mock test price for your learners</p>

      <PremFormField label="mock test Price ₹ *">
        <PremFormControl
          required
          type="number"
          placeholder="4999"
          v-model="price"
          @input="emitFormDataChanges"
        />
      </PremFormField>

      <PremFormField label="Discounted Price ₹ *">
        <PremFormControl
          required
          type="number"
          placeholder="Enter the Discounted price"
          v-model="discount"
          @input="emitFormDataChanges"
        />
      </PremFormField>

      <p class="font-bold text-lg mt-4">Validity</p>
      <p class="text-xs mb-4">
        Set a mock test validity or expiry for your mock test
      </p>

      <template v-for="i in validityOptions">
        <input type="radio" v-model="validitySelected" :value="i.value" @change="emitFormDataChanges" />
        <p class="inline p-4 leading-8">
          {{ i.label }}
        </p>
        <PremFormControl
          v-if="i.id == 0"
          required
          type="number"
          placeholder="Day(s)"
          v-model="validityDays"
          @input="emitFormDataChanges"
        />

        <PremFormControl
          v-if="i.id == 1"
          required
          type="Date"
          v-model="expiryDate"
          @input="emitFormDataChanges"
        />

        <br />
      </template>

    </CardBox>
  </div>
</template>

<style lang="scss" scoped></style>
