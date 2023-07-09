<template>
  <div class="">
    <div class="flex aligns-center justify-between">
      <div class="text-2xl my-auto">Pricing</div>
      <div class=""><BaseButton color="info" label="SAVE" class="" /></div>
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
            <BaseIcon :path="mdiSquareEditOutline" :size="22" class="cursor-pointer" @click="showModel(item)"  />
          </td>
          <td>
            <BaseIcon :path="mdiDeleteOutline" :size="22" @click="deleteItem(item)" class="cursor-pointer" />
          </td>
        </tr>
      </tbody>
    </table>


   <!-- update -->

 <!-- one Time Payment    -->

 <div class="model bg-black-500 flex justify-center items-center" v-if="modelShowOneTime" >
 <div class="mt-5  bg-slate-900 h-fit px-5 py-5" >
   <div class="text-xl mb-3">Update - One Time Payment</div>
      <div class="">Price</div>
      <div class="w-4/12 flex items-center mt-3">
        <div class="my-auto px-3 h-full">$</div>
        <PremFormControl
          type="number"
          placeholder=""
          expanded
          last-addon
          class="w-40 ml-1"
          v-model="amountUpdate"
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
            v-model="durationUpdate"
          />
          <PremFormControl
            type="list"
            class="w-40 ml-1"
            :options="durations"
            v-model="durationTypeUpdated"
          />
        </div>
        <div class="mt-3">Leave blank for unlimited access</div>
      </div>
      <div class="flex justify-between mt-5">
        <BaseButton
          color="info"
          label="Cancel"
          class="w-fit "
          @click="modelHide"
          outline
        />
        <BaseButton
          color="info"
          label="UPDATE"
          class="w-fit ml-auto"
          @click="UpdateOneTimePayment"
        />
      </div>
    </div>

  </div>
<!-- update subscription  -->
  <div class="model bg-black-500 flex justify-center items-center" v-if="modelShowSubscription" >
 <div class="mt-5  bg-slate-900 h-fit px-5 py-5" >
   <div class="text-xl mb-3">Update - Subscription / Membership</div>
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
              v-model="subscriptionAmountUpdate"
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
                v-model="subscriptionDurationUpdate"
              />
              <PremFormControl
                type="list"
                class="w-40 ml-1"
                :options="durations"
                v-model="subscriptionDurationTypeUpdate"
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

      <div class="text-right flex">
        <BaseButton
          color="info"
          label="Cancel"
          class="w-fit "
          @click="modelShowSubscription=false"
          outline
        />
        <BaseButton
          color="info"
          label="UPDATE"
          class="w-fit ml-auto"
          @click="UpdateSubPayment"
        />
      </div>
    </div>

  </div>

  <!-- monthly updated  -->
  <div class="model bg-black-500 flex justify-center items-center" v-if="modelShowMonths" >
 <div class="mt-5  bg-slate-900 h-fit px-5 py-5" >
   <div class="text-xl mb-3">Update - One Time Payment</div>
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
              v-model="monthlyPaymentAmountUpdate"
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
                v-model="totalMonthsUpdate"
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

   
      <div class="flex justify-between mt-5">
        <BaseButton
          color="info"
          label="Cancel"
          class="w-fit "
          @click="modelShowMonths=false"
          outline
        />
        <BaseButton
          color="info"
          label="UPDATE"
          class="w-fit ml-auto"
          @click="UpdateMonthPayment"
        />
      </div>
    </div>

  </div>
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
let id = null;
 if(pricingData.value.length > 0) {
  const lastItem=pricingData.value[pricingData.value.length-1]
  console.log(lastItem)
  id=lastItem.id+1
 } else {
  id=0
 }


  const data = {
   id,
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
  let id = null;
 if(pricingData.value.length > 0) {
  const lastItem=pricingData.value[pricingData.value.length-1]
  console.log(lastItem)
  id=lastItem.id+1
 } else {
  id=0
 }
  const data = {
    id,
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
  let id = null;
 if(pricingData.value.length > 0) {
  const lastItem=pricingData.value[pricingData.value.length-1]
  console.log(lastItem)
  id=lastItem.id+1
 } else {
  id=0
 }
  const data = {
    id,
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





// delete Ltem 

const deleteItem = (data)=>{
 const confirmData = confirm("Dow you really want to delete ?");
 if(confirmData==false){
  return false
 }

  const findIndexValue= pricingData.value.findIndex((item)=>item.id==data.id)
  console.log(findIndexValue)
  if (findIndexValue > -1) { // only splice array when item is found
    pricingData.value.splice(findIndexValue, 1); // 2nd parameter means remove one item only
}
}


// update 

const showModel = (item)=>{
console.log(item.priceType)
if(item.priceType=="One Time Payment")
{
  showOnetimeModel(item)
}
if(item.priceType=="Subscription / Membership"){
  showSubModel(item)
}
if(item.priceType=="Monthly payment plan"){
  showMonthModel(item)
}
}


// one time 

const modelShowOneTime = ref(false)
const updateItem = ref(null)
const amountUpdate= ref(0)
const durationUpdate= ref(0)
const durationTypeUpdated= ref(null)
const showOnetimeModel = (item)=>{
  modelShowOneTime.value=true
  updateItem.value=item
  amountUpdate.value=item.amount
  durationUpdate.value= item.duration
  durationTypeUpdated.value= item.durationType
}
const modelHide=()=>{
  modelShowOneTime.value=false
}


const UpdateOneTimePayment =()=>{
  let item = updateItem.value
  modelShowOneTime.value=true

 const dataItem= pricingData.value.map((data)=>{
    if(data.id==item.id){
      console.log(amountUpdate.value)
      data.amount= amountUpdate.value
      data.duration= durationUpdate.value
      data.durationType= durationTypeUpdated.value
    }
    return data
  })
  console.log(dataItem)
  modelShowOneTime.value=false
}


/// subscription 
const modelShowSubscription = ref(false)
const subscriptionAmountUpdate = ref(0)
const subscriptionDurationUpdate = ref(0)
const subscriptionDurationTypeUpdate =ref(null)
const showSubModel = (item)=>{
  modelShowSubscription.value=true
  updateItem.value=item
  subscriptionAmountUpdate.value=item.amount
  subscriptionDurationUpdate.value= item.duration
  subscriptionDurationTypeUpdate.value= item.durationType
}

const UpdateSubPayment =()=>{
  let item = updateItem.value
 

pricingData.value.map((data)=>{
    if(data.id==item.id){
     
      data.amount= subscriptionAmountUpdate.value
      data.duration= subscriptionDurationUpdate.value
      data.durationType= subscriptionDurationTypeUpdate.value
    }
    return data
  })

  modelShowSubscription.value=false
}





// per month update 
const modelShowMonths = ref(false)
const monthlyPaymentAmountUpdate = ref(0)
const totalMonthsUpdate =ref(0)
const showMonthModel = (item)=>{
  modelShowMonths.value=true
  updateItem.value=item
  monthlyPaymentAmountUpdate.value=item.amount
  totalMonthsUpdate.value= item.duration
 
}

const UpdateMonthPayment =()=>{
  let item = updateItem.value
 

pricingData.value.map((data)=>{
    if(data.id==item.id){
     
      data.amount= monthlyPaymentAmountUpdate.value
      data.duration= totalMonthsUpdate.value
     
    }
    return data
  })

  modelShowMonths.value=false
}


</script>

<style scoped>

.model{
  width: 100vw;
  height: 100vh;
  position:fixed;
  top: 0;
  left: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.61);
}
</style>
