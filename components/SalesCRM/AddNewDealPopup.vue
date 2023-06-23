<template>
    <div class="w-full absolute  pt-2 form_conatiner">

  <div class="form w-6/12  mx-auto  pb-5 dark:bg-slate-900 bg-white form_holder">
   <!-- heading -->
   <div class="flex justify-between px-4 py-4 shadow ">
        <div class="text-xl">New Deal</div>
        <div class="">    <BaseIcon
                  :path="mdiCloseThick"
                  class="cursor-pointer mr-1 text-sky-600 dark:text-gray-500 "
                  size="24"
                  h="24"
                  w="24"
                  @click="closePopup"
                /></div>
    </div>
    <div class="form_items  px-4">
 
    <div class="mt-3">
        <PremFormField label="Deal Name" >
            <!-- :icon-left="mdiAccount" -->
            <!-- :icon-left="mdiMail"
                :icon-right="mdiCheck" -->
              <PremFormControl
                help=""
                placeholder=""
                v-model="dealName"
              />
        
            </PremFormField>
   
    </div>
    <div class="mt-3">
        <PremFormField
              label="Summary"
              
              horizontal
            >
              <PremFormControl
                v-model="summary"
                type="textarea"
                placeholder="Explain how we can help you"
              />
            </PremFormField>
    </div>
    <div class="mt-3">
        <PremFormField label="Company Name" >
          
              <PremFormControl
                help=""
                placeholder="Search for a company"
                :icon-right="mdiChevronDown"
                v-model="companyName"
              />
        
            </PremFormField>
    </div>
    <div class="mt-3">
        <PremFormField label="Primary Contact" >
          
              <PremFormControl
                help=""
                placeholder="Search for a person"
                :icon-right="mdiChevronDown"
                v-model="primaryContact"
              />
        
            </PremFormField>
    </div>
    <div class="mt-3 flex flex-1">
        <div class="flex-auto w-80">
        <PremFormField label="Amount" >
          
              <PremFormControl
                help=""
                placeholder=""
                v-model="amount"
              />
        
            </PremFormField>
        </div>
        <div class="flex-auto w-20 pl-2 pt-6">
            <PremFormField
              label=" "
             
              horizontal
            >
              <PremFormControl
                type="list"
                :options="listBoxOptions"
                v-model="currency"
              />
            </PremFormField>
        </div>
    </div>
    <div class="mt-3">
        <PremFormField label="Pipeline*" >
          
              <PremFormControl
                help=""
                placeholder="Seals Pipeline (default) "
                :icon-right="mdiChevronDown"
                v-model="pipeline"
              />
        
            </PremFormField>
    </div>

    <div class="mt-3">
        <PremFormField label="Stage" >
          
              <PremFormControl
                help=""
                placeholder="Qualified"
                :icon-right="mdiChevronDown"
                type="search"
                v-model="stage"
              />
        
            </PremFormField>
    </div>

    <div class="mt-3">
        <PremFormField label="Owner" >
          
              <PremFormControl
                help=""
                placeholder="Me"
                :icon-right="mdiChevronDown"
                type="search"
                v-model="owner"
              />
        
            </PremFormField>
    </div>
    <div class="mt-3">
   
        <PremFormField label="Probability" >
   
              <PremFormControl
                help=""
                placeholder=""
                :icon-right="mdiChevronDown"
                type="range"
                v-model="probability"
              />
        
            </PremFormField>
         
    </div>
    <div class="mt-3">
        <PremFormField label="Source" >
          
              <PremFormControl
                help=""
                placeholder="None"
                :icon-right="mdiChevronDown"
               v-model="source"
              />
        
            </PremFormField>
    </div>

    <div class="mt-3">
        <PremFormField label="Status" >
          
              <PremFormControl
                help=""
                placeholder="None"
                :icon-right="mdiChevronDown"
               v-model="status"
              />
        
            </PremFormField>
       
    </div>
    <div class="mt-3">
        <PremFormField label="Expected Code" >
          
              <PremFormControl
                help=""
                placeholder=""
               
        v-model="expectedCode"
              />
        
            </PremFormField>
          
    </div>
    <div class="mt-3">
        <PremFormField label="Revenue type" >
          
              <PremFormControl
                help=""
                placeholder="None"
                :icon-right="mdiChevronDown"
               v-model="revenueType"
              />
        
            </PremFormField>
         
    </div>
    <div class="mt-3">
        <PremFormField label="Deal Performance Lane" >
          
              <PremFormControl
                help=""
                placeholder="None"
                :icon-right="mdiChevronDown"
                v-model="dealPerformanceLane"
              />
        
            </PremFormField>
    
    </div>
    <div class="mt-3">
        <PremFormField label="Product Interest" >
          
              <PremFormControl
                help=""
                placeholder="None"
                :icon-right="mdiChevronDown"
                v-model="productInterest"
          
              />
        
            </PremFormField>
          
    </div>
</div>
    <div class="flex justify-between items-center mt-6 px-4 ">
        <div class="">
            Form preferences
        </div>
        <div class="flex">
            <BaseButton
                label="Cancel"
                type="button"
                color=""
                class="uppercase"
                :style="[]"
                @click="closePopup"
              />
              <BaseButton
                label="Save and add another"
                type="button"
                color=""
                class="uppercase mx-2"
                :style="[]"
              />

              <BaseButton
                label="Save"
                type="button"
                color="info"
                class="uppercase"
                :style="[]"
                @click="submitData"
              />
          
        </div>

    </div>
  </div>

    </div>
</template>


<script setup>
const emit = defineEmits(['onAction','getDealData'])


import BaseIcon from "@/components/Display/BaseIcon.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { mdiChevronDown, mdiMenuDown,mdiContentSave,mdiDeleteOutline,mdiTable ,mdiCloseThick} from "@mdi/js";
const listBoxOptions = [
  { id: 1, label: "Indian Rupee" },
  { id: 2, label: "USD",  },
  { id: 3, label: "Sample", },
  
];
const prob = ref(10)
const closePopup =()=>{
    emit('onAction') 
}





// form data 

const dealName =ref(null)
const summary = ref(null)
const companyName = ref(null)
const primaryContact =ref(null)
const amount = ref(null)
const currency = ref('Indian Rupee')
const pipeline = ref(null)
const stage=ref(null)
const owner =ref(null)
const probability = ref(40)
const source = ref(null)
const status=ref(null)
const expectedCode = ref(null)
const revenueType = ref(null)
const dealPerformanceLane = ref(null)
const productInterest=ref(null)

const submitData = ()=>{
  const data ={
    dealName:dealName.value,
    summary:summary.value,
    companyName:companyName.value,
    primaryContact:primaryContact.value,
    weightedForecast:amount.value,
    currency:currency.value,
    pipeline:pipeline.value,
    stage:stage.value,
    owner:owner.value,
    probability:probability.value,
    source:source.value,
    status:status.value,
    expectedCode:expectedCode.value,
    revenueType:revenueType.value,
    dealPerformanceLane:dealPerformanceLane.value,
    productInterest:productInterest.value,
  }

  emit('getDealData',data) 
}





</script>


<style scoped>
.form_conatiner{
    background: rgba(0, 0, 0, 0.623);
    width: 100% !important;
    height: 100vh !important;
    z-index: 50;
   
}
.form{
    height: 95% !important;
}

.form_items{
    max-height: 78% !important;  
    overflow-y: scroll; 
}
.form_holder{
 
}
.bottom_buttons{

}
</style>


