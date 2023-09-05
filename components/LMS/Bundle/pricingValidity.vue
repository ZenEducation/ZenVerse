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
  { id: 0, label: "Make this a free Test Series", value: true },
  { id: 1, label: "make this a paid Test Series", value: false },
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

const deleteItemId = ref(-1);
const isModalDangerActive = ref(false);

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

const isAddDataActive = ref(false);
const NewFormData = ref({
  days: 0,
  price: 0,
  discountPrice: 0,
});
const addNewFormData = async () => {
  try {
    const response = await API.graphql({
      query: createVariablePricing,
      variables: {
        input: {
          days: NewFormData.value.days,
          price: NewFormData.value.price,
          discountPrice: NewFormData.value.discountPrice,
          testseriesID: id,
        },
      },
    });
    console.log("new vp", response.data.createVariablePricing);
    list.value.push(NewFormData.value);
    isAddDataActive.value = false;
  } catch (error) {
    console.error(error);
  }
};

const deleteItem = async (popup, id) => {
  try {
    if (popup) {
      isModalDangerActive.value = true;
      deleteItemId.value = id;
      return;
    }
    if (deleteItemId.value !== -1) {
      await API.graphql({
        query: deleteVariablePricing,
        variables: { input: { id: list.value[deleteItemId.value].id, _version: list.value[deleteItemId.value]._version } }
      });
      list.value.splice(deleteItemId.value, 1);
    }
  } catch (error) { }
};

const fillVariablePricing = async () => {
  try {
    const response = await API.graphql({
      query: listVariablePricings,
      variables: { filter: { _deleted: { ne: true }, testseriesID: { eq: id } } },
    });
    console.log("vp", response);
    list.value = response.data.listVariablePricings.items;
  } catch (error) {
    console.error("error in getting variable pricing", error);
  }
};

onMounted(() => {
  fillVariablePricing();
});
</script>
<template>
  <CardBoxModal v-model="isAddDataActive" :showFooter="false" title="">
    <header class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded">
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Add New Pricing</h1>
      </div>
      <div class="text-gray-500 cursor-pointer" @click="isAddDataActive = false">
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>
    <CardBox is-form @submit.prevent="submitProfile">
      <PremFormField label="Validity (Days)">
        <PremFormControl v-model="NewFormData.days" type="number" />
      </PremFormField>
      <PremFormField label="Course Price (Rs.)">
        <PremFormControl v-model="NewFormData.price" type="number" />
      </PremFormField>
      <PremFormField label="Discount Price (Rs.)">
        <PremFormControl v-model="NewFormData.discountPrice" type="number" />
      </PremFormField>

      <div class="flex justify-end py-2">
        <BaseButtons>
          <BaseButton color="info" label="Submit" @click="addNewFormData" />
        </BaseButtons>
      </div>
    </CardBox>
  </CardBoxModal>

  <CardBoxModal v-model="isModalDangerActive" title="Are you sure you want to delete this ?" button="danger"
    buttonLabel="Yes" has-cancel @confirm="deleteItem(false)" />

  <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4">
    <CardBox class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3" is-form @submit.prevent="submit">
      <p class="font-bold text-lg">Test Series Selling Type</p>
      <p class="text-xs mb-4">
        Select a Test Series selling type ans make it either free/paid Test Series
      </p>
      <template v-for="i in pricingOptions">
        <input type="radio" v-model="isPaid" :value="i.value" @change="emitFormDataChanges" />
        <p class="inline p-4 leading-8">
          {{ i.label }}
        </p>
        <br />
      </template>

      <p class="font-bold text-lg mt-4">Pricing</p>
      <p class="text-xs mb-4">Set Test Series price for your learners</p>

      <PremFormField label="Test Series Price ₹ *">
        <PremFormControl required type="number" placeholder="4999" v-model="price" @input="emitFormDataChanges" />
      </PremFormField>

      <PremFormField label="Discounted Price ₹ *">
        <PremFormControl required type="number" placeholder="Enter the Discounted price" v-model="discount"
          @input="emitFormDataChanges" />
      </PremFormField>

      <p class="font-bold text-lg mt-4">Validity</p>
      <p class="text-xs mb-4">
        Set a Test Series validity or expiry for your Test Series
      </p>

      <template v-for="i in validityOptions">
        <input type="radio" v-model="validitySelected" :value="i.value" @change="emitFormDataChanges" />
        <p class="inline p-4 leading-8">
          {{ i.label }}
        </p>
        <PremFormControl v-if="i.id == 0" required type="number" placeholder="Day(s)" v-model="validityDays"
          @input="emitFormDataChanges" />

        <PremFormControl v-if="i.id == 1" required type="Date" v-model="expiryDate" @input="emitFormDataChanges" />

        <br />
      </template>

      <p class="font-bold text-lg mt-4">Variable Pricing</p>
      <p class="text-xs mb-4">
        Set a variable pricing for your Test Series based on different validity
      </p>

      <BaseButton :icon="mdiPlus" :label="'Add Pricing'" :color="'info'" @click="isAddDataActive = true" />

      <table>
        <thead>
          <tr>
            <th>Course Validity</th>
            <th>Course Price</th>
            <th>Discount Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="index">
            <th>{{ item.days }} Days</th>
            <th>Rs. {{ item.price }}</th>
            <th>Rs. {{ item.discountPrice }}</th>
            <th>
              <template v-if="index == 0"> Default </template>
              <template v-else>
                <BaseButton color="danger" :icon="mdiTrashCan" small @click="deleteItem(true, index)" />
              </template>
            </th>
          </tr>
        </tbody>
      </table>
    </CardBox>
  </div>
</template>

<style lang="scss" scoped></style>
