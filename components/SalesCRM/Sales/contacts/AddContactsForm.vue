<template>
  <div
    class="w-screen h-screen fixed top-0 left-0 z-50 holder flex justify-end"
  >

    <div class="w-5/12 bg-white dark:bg-slate-900 h-screen opacity-100 p-5">
      <div class="text-2xl">Create Contact</div>
      <div
        class="h-5/6 overflow-auto scrollbar-thin dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-600 scrollbar-track-gray-400 scrollbar-thumb-rounded pr-8"
      >
        <div class="flex justify-between items-center mt-8">
          <div class="font-medium">Contact Information</div>
          <div class="flex justify-center items-center">
            <div class="mr-3">Owner</div>
            <div
              class="flex justify-center items-center border py-1 px-2 rounded cursor-pointer"
            >
              <div
                class="mr-2  bg-slate-200 dark:bg-slate-600 text-xs w-5 h-5 text-center rounded-full p-1 flex justify-center items-center"
              >
                IH
              </div>
              <div class="">User Name</div>
              <BaseIcon :path="mdiMenuDown" size="22" class="cursor-pointer" />
            </div>
          </div>
        </div>
        <div class="mt-5">
          
          <PremFormField label="First Name">
            <PremFormControl type="text" placeholder="First name" v-model="fName" />
          </PremFormField>
          <PremFormField label="Last Name"  >
            <PremFormControl type="text" placeholder="Last name" v-model="lName"  />
          </PremFormField>
          <PremFormField label="Title">
            <PremFormControl type="text" placeholder="Title" v-model="title" />
          </PremFormField>
          <PremFormField label="Email">
            <PremFormControl type="email" placeholder="Email" v-model="email" />
          </PremFormField>
          <PremFormField label="Company Name">
            <PremFormControl type="text" placeholder="Company Name" v-model="companyName" />
          </PremFormField>
          <PremFormField label="Phone">
            <PremFormControl type="number" placeholder="Phone no" v-model="phone" />
          </PremFormField>
          <PremFormField label="Description">
            <PremFormControl
              type="text"
              placeholder="Some few word about the contact"
              v-model="discription"
            />
          </PremFormField>
          <div class="font-medium flex items-center cursor-pointer mb-5" @click="addressInfoShow= !addressInfoShow">
            Address Information
            <BaseIcon :path="mdiChevronDown" size="22" class="cursor-pointer" />
          </div>
          <div class="mb-5" v-if="addressInfoShow">
            <PremFormField label="Mailing Street">
              <PremFormControl type="text" placeholder="Mailing Street"  v-model="mStreet" />
            </PremFormField>
            <PremFormField label="Mailing City">
              <PremFormControl type="text" placeholder="Mailing City"  v-model="mCity" />
            </PremFormField>
            <PremFormField
              label="Mailing State"
            >
              <PremFormControl
                type="text"
                placeholder="Mailing State"
                v-model="mState"
              />
            </PremFormField>
            <PremFormField
              label="Mailing Country"
            >
              <PremFormControl type="text" placeholder="Mailing Country"  v-model="mCuntry" />
            </PremFormField>
            <PremFormField
              label="Mailing Zip"
            >
              <PremFormControl type="text" placeholder="Mailing Zip"  v-model="mZip" />
            </PremFormField>
          </div>
        </div>
      </div>
      <div class="absulate bottom-0 flex justify-between items-center h-1/6">
        <div class="">Customize Fields</div>
        <div class="flex justify-between items-center">
          <BaseButton
            label="Cancle"
            type="button"
            color="info"
            class="uppercase mr-2"
            :style="[]"
            outline
            @click="getContacts.hideForm()"
          />
          <BaseButton
            label="Save"
            type="button"
            color="info"
            class="uppercase"
            :style="[]"
            @click="saveItem()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  mdiMenuDown,
  mdiViewHeadline,
  mdiFullscreen,
  mdiSquareEditOutline,
  mdiPrinterOutline,
  mdiChartBar,
  mdiDeleteOutline,
  mdiTrackpad,
  mdiPlus,
  mdiLockOutline,
  mdiDotsHorizontal,
  mdiReload,
  mdiDotsVertical,
  mdiMenuUp,
  mdiDialpad,
  mdiFileDocumentMultipleOutline,
  mdiDelete,
  mdiFilterVariant,
  mdiTagOutline,
  mdiTableArrowRight,
  mdiTable,
  mdiCartOutline,
  mdiDomain,
  mdiNoteOutline,
  mdiFormSelect,
  mdiContentDuplicate,
  mdiContactsOutline,
  mdiTrayArrowDown,
  mdiEmailSyncOutline,
  mdiMail,
  mdiCheck,
  mdiChevronDown,
} from "@mdi/js";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import {contactStore} from "@/stores/SalesCRM/contacts/contacts"
const getContacts=contactStore()
const addressInfoShow=ref(false)


const fName=ref(null)
const lName=ref(null)
const title=ref(null)
const email=ref(null)
const companyName=ref(null)
const phone=ref(null)
const discription=ref(null)
const mStreet=ref(null)
const mCity = ref(null)
const mState = ref(null)
const mCuntry = ref(null)
const mZip =ref(null)


const saveItem = ()=>{
  
    const allData = getContacts.allContacts
    let id = 1
    if(allData.length>0){
        const lastItem = allData[allData.length-1]
        id = lastItem.id+1
    }

    const newItem = {
        id,
        values:[ 
              {
                id:1,
                value:fName.value + " " + lName.value,
                icon:""
              },
              {
                id:2,
                value:companyName.value,
                icon:""
              },
              {
                id:3,
                value:email.value,
                icon:""
              },
              {
                id:4,
                value:phone.value,
                icon:""
              },
              {
                id:5,
                value:title.value,
                icon:""
              },   
            //               {
            //     id:6,
            //     value:discription.value,
            //     icon:""
            //   },     {
            //     id:7,
            //     value:mStreet.value,
            //     icon:""
            //   },     {
            //     id:8,
            //     value:mCity.value,
            //     icon:""
            //   },     {
            //     id:9,
            //     value:mState.value,
            //     icon:""
            //   },     {
            //     id:10,
            //     value:mCuntry.value,
            //     icon:""
            //   },
            //   {
            //     id:11,
            //     value:mZip.value,
            //     icon:""
            //   }
         ]
    }

// console.log(newItem)
    getContacts.addNewItem(newItem) 
    getContacts.hideForm()
}




</script>

<style scoped>
.holder {
  background: rgba(11, 46, 78, 0.521);
}
</style>
