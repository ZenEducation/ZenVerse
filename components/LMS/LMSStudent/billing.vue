<template>
  <CardBoxModal v-model="isModalActive" title="" :show-footer=false>
    <header
      class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
    >
      <div class="text-gray-500">
        <BaseIcon v-if="mdiAccountPlus" :path="mdiAccountPlus" :size="32" />
      </div>
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Add Card</h1>
      </div>
      <div class="text-gray-500 cursor-pointer" @click="isModalActive = false">
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>
    <p class="text-red-500">{{isCardError}}</p>
    <CardBox is-form @submit.prevent="addNewCard">
      <FormField label="Card Name">
        <FormControl
          :icon="mdiCard"
          required
          v-model="newCardDetails.name"
          placeholder="Card Name"
        />
      </FormField>
      <FormField label="Card Number">
        <FormControl
          :icon="mdiCard"
          required
          v-model="newCardDetails.CardNo"
          type="number"
          placeholder="Card Number"
        />
      </FormField>
      <FormField label="Expiry" class="w-2/5 inline-block">
        <FormControl type="month" required placeholder="MM" />
      </FormField>
      <FormField label="CVV" class="w-2/5 inline-block">
        <FormControl type="number" v-model="newCardDetails.cvv" required placeholder="CVV" />
      </FormField>
      <div class="flex justify-end py-2">
          <BaseButton
            type="submit"
            color="info"
            label="Add"
          />
      </div>
    </CardBox>
  </CardBoxModal>
  <CardBoxModal
    v-model="isModalCardDangerActive"
    title="Are you sure you want to delete this Card ?"
    button="danger"
    buttonLabel="Yes"
    has-cancel
    @confirm="deleteCard(false)"
  />
  <CardBoxModal
    v-model="isModalSubDangerActive"
    title="Are you sure you want to delete this Subscription ?"
    button="danger"
    buttonLabel="Yes"
    has-cancel
    @confirm="deleteSubscription(false)"
  />
  <CardBoxModal
    v-model="isModalPayDangerActive"
    title="Are you sure you want to delete this Payment ?"
    button="danger"
    buttonLabel="Yes"
    has-cancel
    @confirm="deletePayment(false)"
  />
  <CardBox>
    <CardBoxComponentTitle title="Billing" />
    <BaseDivider />

    <div class="flex justify-between mt-6">
      <p class="text-xl font-bold">Your Card Details</p>
      <BaseButton
        label="Add New Card"
        color="info"
        @click="isModalActive = true"
      />
    </div>
    <BaseDivider />
    <table>
      <thead>
        <tr>
          <th>Card Name</th>
          <th>Card No.</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cardDetails">
          <td data-label=" Card Name">{{ item.name }}</td>
          <td data-label=" Card No.">
            XXXX XXXX XXXX {{ item.CardNo % 10000 }}
          </td>
          <td class="before:hidden lg:w-1 whitespace-nowrap">
            <BaseButtons type="justify-start lg:justify-end" no-wrap>
              <BaseButton
                color="danger"
                :icon="mdiTrashCan"
                small
                @click="deleteCard(true, item.CardNo)"
              />
            </BaseButtons>
          </td>
        </tr>
      </tbody>
    </table>

    <p class="text-xl font-bold mt-6">Subscriptions</p>
    <BaseDivider />
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Start Date</th>
          <th>Expiry Date</th>
          <th>Amount</th>
          <th>Paid Every</th>
          <th>Due Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in SubscriptionsDetails">
          <td data-label="Product Name">{{ item.ProductName }}</td>
          <td data-label="Start Date">{{ item.StartDate }}</td>

          <td data-label="Expiry Date">{{ item.EndDate }}</td>
          <td data-label="Amount">{{ item.Amount }}</td>
          <td data-label="Paid Every">{{ item.PaymentOption }}</td>
          <td data-label="Due Date">{{ item.DueDate }}</td>
          <td class="before:hidden lg:w-1 whitespace-nowrap">
            <BaseButtons type="justify-start lg:justify-end" no-wrap>
              <BaseButton
                color="danger"
                :icon="mdiTrashCan"
                small
                @click="deleteSubscription(true, item.id)"
              />
              <BaseButton
              color="info"
              small
              label="Renew"
            />
            </BaseButtons>
          </td>
        </tr>
      </tbody>
    </table>

    <p class="text-xl font-bold mt-6">Payment Plans</p>
    <BaseDivider />
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Start Date</th>
          <th>Total Amount</th>
          <th>Monthly Due Date</th>
          <th>Price Per Payment</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in PaymentPlans">
          <td data-label="Product Name">{{ item.ProductName }}</td>
          <td data-label="Start Date">{{ item.StartDate }}</td>

          <td data-label="Total Amount">{{ item.Amount }}</td>
          <td data-label="Monthly Due Date">{{ item.DueDate }}</td>
          <td data-label="Price Per Payment">{{ item.PriceForPayment }}</td>
          <td class="before:hidden lg:w-1 whitespace-nowrap">
            <BaseButton
              v-if="item.status == 'unpaid'"
              color="danger"
              small
              label="Pay"
            />
            <p v-else class="p-4 text-green-400 font-semibold">Paid</p>
          </td>
        </tr>
      </tbody>
    </table>
  </CardBox>
</template>

<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import {
  mdiDancePole,
  mdiInformationBoxOutline,
  mdiPlus,
  mdiArrowLeft,
  mdiWindowClose,
  mdiTrashCan,
  mdiCard,
} from "@mdi/js";
import { mdiGrid, mdiFormatListBulleted } from "@mdi/js";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import image from "@/assets/img/BundleImage.png";
import { useLayoutStore } from "@/stores/layout.js";
import CardBoxModal from "~~/components/Cards/CardBoxModal.vue";

const cardDetails = ref([
  {
    name: "SBI Credit Card",
    CardNo: 1234567891231,
  },
  {
    name: "HDFC Credit Card",
    CardNo: 9876543213987,
  },
]);

const SubscriptionsDetails = ref([
  {
    id: "alcn#786sdf",
    ProductName: "Neet Foundation",
    StartDate: "Mar 3, 2021",
    EndDate: "Mar 3, 2022",
    Amount: 20000,
    PaymentOption: "2 months",
    DueDate: "June 3, 2021",
  },
  {
    id: "xyz#123",
    ProductName: "Gym Membership",
    StartDate: "Jan 1, 2023",
    EndDate: "Dec 31, 2023",
    Amount: 5000,
    PaymentOption: "Annual",
    DueDate: "Jan 1, 2023",
  },
]);

const PaymentPlans = ref([
  {
    id: "alndvk#adf",
    ProductName: "Neet Foundation",
    StartDate: "Mar 3, 2021",
    Amount: 20000,
    PaymentOption: "2 months",
    DueDate: "June 3, 2021",
    PriceForPayment: 2000,
    status: "paid",
  },
  {
    id: "xyz#123",
    ProductName: "Gym Membership",
    StartDate: "Jan 1, 2023",
    Amount: 5000,
    PaymentOption: "Annual",
    DueDate: "Jan 1, 2023",
    PriceForPayment: 5000,
    status: "unpaid",
  },
]);

const isModalActive = ref(false);
const newCardDetails = ref({
  name: "",
  CardNo: "",
  cvv:"",
});
const isCardError = ref("");

const addNewCard = () => {
  let temp = newCardDetails.value;
  console.log(temp.CardNo , temp.CardNo >= 100000000000 , temp.CardNo <= 9999999999999 );
  if(temp.CardNo >= 1000000000000000 & temp.CardNo < 10000000000000000 & temp.cvv>=100 & temp.cvv < 1000 ){
    if(cardDetails.value.find((item)=>{
      return item.CardNo == temp.CardNo;
    })){
      isCardError.value = "Card Number Already Exists";
    }
    else{
      cardDetails.value.push(temp);
      isCardError.value = "";
      isModalActive.value = false;
    }
  }else{
    isCardError.value = "Invalid Card Number";
  }
};

const isModalCardDangerActive = ref(false);
const isModalSubDangerActive = ref(false);
const isModalPayDangerActive = ref(false);

const deleteItemCardId = ref();
const deleteItemSubId = ref();
const deleteItemPayId = ref();

const perPage = 25;
const totalPages = ref(1);
const currentPage = ref(0);
const filteredItems = computed(() => {
  let filtered = items.value;
  totalPages.value = Math.ceil(filtered.length / perPage);
  const start = currentPage.value * perPage;
  const end = (currentPage.value + 1) * perPage;

  return filtered.slice(start, end);
});

const deleteCard = (popup, id) => {
  if (popup) {
    isModalCardDangerActive.value = true;
    deleteItemCardId.value = id;
    return;
  }
  const index = cardDetails.value.findIndex(
    (item) => item.CardNo === deleteItemCardId.value
  );
  if (index !== -1) {
    cardDetails.value.splice(index, 1);
  }
};

const deleteSubscription = (popup, id) => {
  if (popup) {
    isModalSubDangerActive.value = true;
    deleteItemSubId.value = id;
    return;
  }
  const index = SubscriptionsDetails.value.findIndex(
    (item) => item.id === deleteItemSubId.value
  );
  if (index !== -1) {
    SubscriptionsDetails.value.splice(index, 1);
  }
};

const deletePayment = (popup, id) => {
  if (popup) {
    isModalPayDangerActive.value = true;
    deleteItemPayId.value = id;
    return;
  }
  const index = PaymentPlans.value.findIndex(
    (item) => item.id === deleteItemPayId.value
  );
  if (index !== -1) {
    PaymentPlans.value.splice(index, 1);
  }
};
</script>

<style lang="scss" scoped></style>
