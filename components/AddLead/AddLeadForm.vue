<script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";
import { reactive, ref } from "vue";
import {
  mdiBallot,
  mdiAccount,
  mdiMail,
  mdiCheck,
  mdiReload,
} from "@mdi/js";
// datastore
import { DataStore } from 'aws-amplify';
import { CRMLead } from "@/src/models";


const popup = ref(false)

const selectFieldOptions = [
  { id: 1, label: "Business development" },
  { id: 2, label: "Marketing" },
  { id: 3, label: "Sales" },
];

const switchOptions = { one: "On" };

const form = reactive({
  firstName: '',
  campaignId: '',
  customerId: '',
  lastName: '',
  email: '',
  phone: '',
  status: '',
  source: '',
  userId: '',
  doNotCall: true,
  industry: '',
  owner: '',
  jobTitle: '',
  history: '',
});

const submitForm =async () => {
  const {
    firstName,
    lastName,
    email,
    phone,
    status,
    industry,
    doNotCall,
    jobTitle,
    source
  } = form;

  
  // save Leads
  const saveLeads = await DataStore.save(new CRMLead({
    id: (Date.now()).toString(),
    firstName,
    lastName,
    email,
    phone,
    status,
    industry: industry.label,
    doNotCall,
    jobTitle,
    source
  }));
  if(saveLeads.email) {
    popup.value = true
  }
}
</script>

<template>
 
     <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4 p-6">
          <CardBox
            :icon="mdiBallot"
            class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
            is-form
            @submit.prevent="submitForm"
          >
             <NotificationBar v-if="popup" color="success" :icon="mdiMonitorCellphone">
              <b>Lead</b> has successfully added 
            </NotificationBar>
            <CardBoxComponentTitle
              title="Add Lead"
              class="mb-12"
            />
            <PremFormField label="Lead Name" horizontal>
              <PremFormControl
                v-model="form.firstName"
                :icon-left="mdiAccount"
                help="Lead First Name"
                placeholder="First Name"
              />
              <PremFormControl
                v-model="form.lastName"
                help="Lead Last Name"
                placeholder="Last Name"
              />
            </PremFormField>

            <PremFormField
              label="Lead Email Address"
              help="Enter lead email address"
              horizontal
            >
            <PremFormControl
                v-model="form.email"
                :icon-left="mdiMail"
                :icon-right="mdiCheck"
                type="email"
                help="Lead e-mail"
                placeholder="Email"
              />
            </PremFormField>

            <PremFormField
              label="Phone Number"
              help="Enter Phone Number"
              horizontal
            >
              <PremFormField addons>
                <PremFormControl
                  type="static"
                  model-value="+44 (0)"
                  first-addon
                />
                <PremFormControl
                  v-model="form.phone"
                  type="tel"
                  placeholder="Lead phone number"
                  expanded
                  middle-addon
                />
                <PremFormControl type="static" model-value="UK" last-addon />
              </PremFormField>
            </PremFormField>

            <PremFormField
              help=""
              horizontal
            >
              <PremFormField label="Status" addons>
                <PremFormControl
                  v-model="form.status"
                  :options="['NEW', 'FOLLOW_UP', 'CONTACTED']"
                  input-w="w-24"
                  last-addon
                />
              </PremFormField>
            </PremFormField>
            
            <PremFormField label="Do Not Call" >
              <FormCheckRadioGroup
                v-model="form.doNotCall"
                name="sample-switch-one"
                type="switch"
                :options="switchOptions"
              />
            </PremFormField>


            <PremFormField help="" horizontal>
              <PremFormField addons>
                <PremFormControl
                  v-model="form.source"
                  type="text"
                  placeholder="Source"
                  expanded
                  last-addon
                />
                <PremFormControl
                  v-model="form.jobTitle"
                  type="text"
                  placeholder="Job Title"
                  expanded
                  last-addon
                />
              </PremFormField>
            </PremFormField>

            <PremFormField label="Department" help="Select lead department" horizontal>
              <PremFormControl
                v-model="form.industry"
                :options="selectFieldOptions"
              />
            </PremFormField>

            <BaseDivider />

            <template #footer>
              <PremFormField horizontal grouped>
                <BaseButton label="Submit" type="submit" color="info" />
              </PremFormField>
            </template>
          </CardBox>

          <CardBox class="lg:col-span-2 xl:col-span-1">
            <CardBoxComponentTitle
              title="Recently Added Leads"
              class="mb-12"
            />
          </CardBox>
        </div>
</template>