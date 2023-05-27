<script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import { mdiPlus, mdiTrashCan , mdiWindowClose } from "@mdi/js";
import CardBoxModal from "~~/components/Cards/CardBoxModal.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";

const pricingOptions = ref([
  { id: 0, label: "Make this a free bundle", value: "free" },
  { id: 1, label: "make this a paid bundle", value: "paid" },
]);


const isPaid = ref(pricingOptions.value[0].label);

const validityOptions = ref([
  { id: 0, label: "Set Validity", value: "" },
  { id: 1, label: "Set Expiry", value: "" },
]);

const list = ref([
  {
    id: 0,
    courseValidity:2344,
    coursePrice:3499,
    discountPrice:2000,
  },
  {
    id: 1,
    courseValidity:2321,  
    coursePrice:1999,
    discountPrice:1000,
  }
])
const isAddDataActive = ref(false);
const NewFormData = ref({
  courseValidity:0,  
  coursePrice:0,
  discountPrice:0,
})
const addNewFormData = ()=>{
  list.value.push(NewFormData.value);
  isAddDataActive.value = false;
}
const validitySelected = ref(validityOptions.value[0].label)

const deleteItemId = ref(-1);
const isModalDangerActive = ref(false);
const deleteItem = (popup, id) => {
  if (popup) {
    isModalDangerActive.value = true;
    deleteItemId.value = id;
    return;
  }
  if (deleteItemId.value !== -1) {
    list.value.splice(deleteItemId.value, 1);
  }
};


</script>
<template>
  <CardBoxModal v-model="isAddDataActive" :showFooter="false" title="">
    <header
      class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
    >
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Add New Pricing </h1>
      </div>
      <div class="text-gray-500 cursor-pointer" @click="isAddDataActive = false">
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>
    <CardBox is-form @submit.prevent="submitProfile">
      <PremFormField label="Validity (Days)">
        <PremFormControl
        v-model="NewFormData.courseValidity"
        type="number"
        />
      </PremFormField>
      <PremFormField label="Course Price (Rs.)">
        <PremFormControl
        v-model="NewFormData.coursePrice"
        type="number"
        />
      </PremFormField>
      <PremFormField label="Discount Price (Rs.)">
        <PremFormControl
        v-model="NewFormData.discountPrice"
        type="number"
        />
      </PremFormField>


      <div class="flex justify-end py-2">
        <BaseButtons>
          <BaseButton color="info" label="Submit" @click="addNewFormData" />
        </BaseButtons>
      </div>
    </CardBox>
  </CardBoxModal>

  <CardBoxModal
  v-model="isModalDangerActive"
  title="Are you sure you want to delete this ?"
  button="danger"
  buttonLabel="Yes"
  has-cancel
  @confirm="deleteItem(false)"
/>

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
      @click="isAddDataActive = true"
      />

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
            <th>{{item.courseValidity}} Days</th>
            <th>Rs. {{ item.coursePrice }}</th>
            <th>Rs. {{ item.discountPrice }}</th>
            <th>
              <template v-if="index==0">
                Default
                </template>
              <template v-else>

                <BaseButton
                color="danger"
                :icon="mdiTrashCan"
                small
                @click="deleteItem(true, index)"
              />
              </template>
            </th>
          </tr>
        </tbody>
      </table>

    </CardBox>
  </div>
</template>

<style lang="scss" scoped></style>
