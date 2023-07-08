<template>
  <div class="">
    <div class="flex aligns-center justify-between">
      <div class="text-2xl my-auto">Pricing</div>
      <div class=""><BaseButton color="info" label="SAVE" /></div>
    </div>

    <div class="shadow mt-8">
      <div class="text-2xl">Set Additional Pricing</div>
      <div class="text-gray-500">
        Offer your customers additional pricing options to purchase your
        course.Add as many ads you like
        <a href="https://www.youtube.com/" class="text-blue-500 underline"
          >Learn more</a
        >
      </div>
    </div>

    <PremButtonMenu
      :options="addPriceOptions"
      label="ADD PRICE"
      color="info"
      outline
      left
      :icon="mdiPlus"
      class="mt-5"
      v-model="pricingType"
      @selected="updatePrice"
    />

    <!-- one Time Payment    -->

    <div class="mt-5" v-if="currentItem == 1">
      <div class="">Price</div>
      <div class="w-4/12 flex aligns-center mt-3">
        <div class="my-auto px-3 h-full">$</div>
        <PremFormControl
          type="number"
          placeholder=""
          expanded
          last-addon
          class="w-40 ml-1"
          v-model="amount"
        />
      </div>
      <div class="mt-5">
        <div class="text-xl">Enrollment Duration</div>
        <div class="mt-5 flex">
          <PremFormControl
            type="number"
            placeholder=""
            expanded
            last-addon
            class="w-40 ml-1"
            v-model="duration"
          />
          <PremFormControl
            type="list"
            class="w-40 ml-1"
            :options="durations"
            v-model="durationType"
          />
        </div>
        <div class="mt-3">Leave blank for unlimited access</div>
      </div>
      <div class="text-right">
        <BaseButton
          color="info"
          label="SAVE"
          class="w-fit ml-auto"
          @click="addOneTimePayment"
        />
      </div>
    </div>

    <!-- Subscription / Membership -->

    <div class="mt-5" v-if="currentItem == 2">
      <div class="flex">
        <div class="">
          <div class="">Price</div>
          <div class="flex aligns-center mt-3">
            <div class="my-auto px-3 h-full">$</div>
            <PremFormControl
              type="number"
              placeholder=""
              expanded
              last-addon
              class="w-40 ml-1"
              v-model="subscriptionAmount"
            />
          </div>
        </div>
        <div class="pl-3">
          <div class="">Paid Every</div>
          <div class="mt-3">
            <div class="flex">
              <PremFormControl
                type="number"
                placeholder=""
                expanded
                last-addon
                class="w-40 ml-1"
                v-model="subscriptionDuration"
              />
              <PremFormControl
                type="list"
                class="w-40 ml-1"
                :options="durations"
                v-model="subscriptionDurationType"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5 bg-gray-200 dark:bg-slate-900 p-3 mb-3">
        <div class="flex">
          <div class="">
            <FormCheckRadioGroup
              name="sample-switch-two"
              type="switch"
              :options="switchOptions"
              is-column
            />
          </div>
          <div class="pl-3">
            <div class="text-xl">Free trial period</div>
            <div class="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <div class="">
              <div class="flex mt-3">
                <PremFormControl
                  type="number"
                  placeholder=""
                  expanded
                  last-addon
                  class="w-20 "
                  v-model="freeTrailPeriod"
                
                />
                <PremFormControl
                  type="list"
                  class="w-40 ml-1"
                  :options="durations"
                  v-model="freeTrailPeriodType"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex mt-3 ">
          <div class="">
            <FormCheckRadioGroup
              name="sample-switch-two"
              type="switch"
              :options="switchOptions"
              is-column
            />
          </div>
          <div class="pl-2">
            <div class="text-xl">Custom first payment</div>
            <div class="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <div class="">
              <div class="flex aligns-center mt-3">
            <div class="my-auto px-3 h-full">$</div>
            <PremFormControl
              type="number"
              placeholder=""
              expanded
              last-addon
              class="w-40 ml-1"
              v-model="customFirstPayment"
            />
          </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-right">
        <BaseButton
          color="info"
          label="SAVE"
          class="w-fit ml-auto"
          @click="addSubscription"
        />
      </div>
    </div>

    <!-- Monthly payment plan -->
    <div class="mt-5" v-if="currentItem == 3">
      <div class="flex">
        <div class="">
          <div class="">Price per payment</div>
          <div class="flex aligns-center mt-3">
            <div class="my-auto px-3 h-full">$</div>
            <PremFormControl
              type="number"
              placeholder=""
              expanded
              last-addon
              class="w-40 ml-1"
              v-model="monthlyPaymentAmount"
            />
          </div>
        </div>
        <div class="pl-3">
          <div class="">Total Months</div>
          <div class="mt-3">
            <div class="flex">
              <PremFormControl
                type="number"
                placeholder=""
                expanded
                last-addon
                class="w-40 ml-1"
                v-model="totalMonths"
              />
          
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5 bg-gray-200 dark:bg-slate-900 p-3 mb-3">
        <div class="flex">
        
          <div class="pl-3">
           
            <div class="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <div class="text-xl">Enrollment duration</div>
            <div class="">
              <div class="flex mt-3">
                <PremFormControl
                  type="number"
                  placeholder=""
                  expanded
                  last-addon
                  class="w-20 "
                  v-model="enrollmentduration"
                />
                <PremFormControl
                  type="list"
                  class="w-40 ml-1"
                  :options="durations"
                  v-model="enrollmentdurationType"
                />
              </div>
              <div class="text-sm text-gray-500">
                Maximum 60 days
              </div>
            </div>
          </div>
        </div>
        <div class="flex mt-3 ">
       
          <div class="pl-2">
            <div class="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <div class="text-xl">Buy Button text label</div>

            <div class="">
              <div class="flex aligns-center mt-3">
      
            <PremFormControl
              type="text"
              placeholder=""
              expanded
              last-addon
              class="w-40 ml-1"
              v-model="buttonLabel"
            />
          </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-right">
        <BaseButton
          color="info"
          label="SAVE"
          class="w-fit ml-auto"
          @click="monthlyPayment"
        />
      </div>
    </div>
   


   
   
    <!-- table  -->
    <table class="table-auto mt-5" v-if="pricingData.length>0">
      <thead>
        <tr>
          <th class="uppercase font-normal text-md">PRICE TYPE</th>
          <th class="uppercase font-normal text-md">
            Amount / price per payment
          </th>
          <th class="uppercase font-normal text-md">
            Enrollment Duration / paid every
          </th>
          <th class="uppercase font-normal text-md">Edit</th>
          <th class="uppercase font-normal text-md">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in pricingData" :key="idx">
          <td>{{ item.priceType }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.duration }} {{ item.durationType }}</td>
          <td>
            <BaseIcon :path="mdiSquareEditOutline" :size="22" />
          </td>
          <td>
            <BaseIcon :path="mdiDeleteOutline" :size="22" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import BaseButton from "@/components/Buttons/BaseButton.vue";
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";

import {
  mdiPlus,
  mdiDialpad,
  mdiFileDocumentMultipleOutline,
  mdiReload,
  mdiCreditCardOutline,
  mdiAccountMultipleCheck,
  mdiCalendarMonth,
  mdiSquareEditOutline,
  mdiDeleteOutline,
} from "@mdi/js";
const switchOptions = { one: "" };
const addPriceOptions = [
  [
    {
      id: 1,
      icon: mdiCreditCardOutline,
      label: "One Time Payment",
    },
    {
      id: 2,
      icon: mdiAccountMultipleCheck,
      label: "Subscription / Membership",
    },
    {
      id: 3,
      icon: mdiCalendarMonth,
      label: "Monthly payment plan",
    },
  ],
];

const durations = ["Days", "Month", "Year"];


const priceType = ref(null);
const currentItem = ref(null);

const updatePrice = (price) => {
  console.log(price);
  priceType.value = price;
  currentItem.value = price.id;
};

// constances

const amount = ref(0);
const duration = ref(null);
const durationType = ref("Days");
const durationTypesubscription = ref("Days");
let pricingData =ref([]);

const addOneTimePayment = () => {
  const data = {
   
    priceType: priceType.value.label,
    amount:amount.value,
    duration:duration.value,
    durationType:durationType.value
  };
  pricingData.value.value = pricingData.value.push(data)

  currentItem.value=null
};

const items = computed(()=>{
   return itedwdw
})

// subscriotion
const subscriptionAmount = ref(0)
const subscriptionDuration =ref(0)
const subscriptionDurationType = ref("Days")
const freeTrailPeriod=ref(0)
const freeTrailPeriodType = ref("Days")
const customFirstPayment=ref(0)
const addSubscription =()=>{
  const data = {
    priceType: priceType.value.label,
    amount:subscriptionAmount.value,
    duration:subscriptionDuration.value,
    durationType:subscriptionDurationType.value,
    freeTrailPeriod:freeTrailPeriod.value,
    freeTrailPeriodType:freeTrailPeriodType.value,
    customFirstPayment:customFirstPayment.value
  };
  pricingData.value.push(data);
  currentItem.value=null

}


// monthly payment plan 

const monthlyPaymentAmount = ref(0)
const totalMonths =ref(0)
const enrollmentduration=ref(0)
const enrollmentdurationType =ref("Days")
const buttonLabel = ref("Buy Now")

const monthlyPayment = ()=>{
  const data = {
    priceType: priceType.value.label,
    amount:monthlyPaymentAmount.value,
    duration:totalMonths.value,
    durationType:"Month(s)",
    enrollmentduration: enrollmentduration.value,
    enrollmentdurationType:enrollmentdurationType.value,
    buttonLabel:buttonLabel.value
  };
  pricingData.value.push(data);
  currentItem.value=null

}
</script>

<style></style>
