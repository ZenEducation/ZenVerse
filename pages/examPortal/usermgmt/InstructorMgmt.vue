<script setup>
import { adminPanelButtonMenu } from "@/configs/adminPanelButtonMenu.js";
import { useMainStore } from "@/stores/main";
import uuid4 from "uuid4";
import {
  mdiDotsVertical,
  mdiAccountPlus,
  mdiWindowClose,
  mdiAccount,
  mdiMail,
  mdiCellphone,
  mdiAsterisk,
  mdiFormTextboxPassword,
} from "@mdi/js";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormCheckRadio from "@/components/Forms/FormCheckRadio.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
import TableLearnersSample from "@/components/Tables/TableLearnersSample.vue";
import { useMgmtStore } from "@/stores/usermgmtAPI";
const userMgmtStore = useMgmtStore();

const isModalActive = ref(false);
const mainStore = useMainStore();

const name = ref("");
const mobile = ref("");
const email = ref("");
const error = ref("");


// function submitProfile() {
//   isModalActive.value = false;
//   useMainStore().addInstructor({
//     id: uuid4(),
//     avatar: "https://avatars.dicebear.com/v2/gridy/Howell-Hand.svg",
//     login: "percy64",
//     name: name.value,
//     email: email.value,
//     mobile: mobile.value,
//     lastLogin: "Mar 03, 2021",
//     joinedOn: "Mar 03, 2021",
//     isEnabled: true,
//   });
// }

const submitProfile  = async () => {
  try {
    let resp = await userMgmtStore.CreateNewInstructor(name.value , mobile.value , email.value);
    if(resp[0]){
      error.value="";
      isModalActive.value = false;
    }else{
      error.value = resp[1];
    }
  } catch (error) {
    console.error("Error Creating Instructor:", error);
    error.value = error.data;
  }
};
</script>

<template>
  <CardBoxModal v-model="isModalActive" :showFooter="false" title="">
    <header
      class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
    >
      <div class="text-gray-500">
        <BaseIcon v-if="mdiAccountPlus" :path="mdiAccountPlus" :size="32" />
      </div>
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Add Instructor</h1>
        <h3 class="text-xs">Enter details to create Instructor manually</h3>
      </div>
      <div class="text-gray-500 cursor-pointer" @click="isModalActive = false">
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>
    <p v-if="error" class="text-red-600">{{`error creating new Instructor : ${error}`}}</p>
    <CardBox is-form @submit.prevent="submitProfile">
      <FormField label="Name">
        <FormControl
          :icon="mdiAccount"
          name="username"
          required
          v-model="name"
          autocomplete="username"
          placeholder="Enter Instructor name"
        />
      </FormField>
      <FormField label="E-mail">
        <FormControl
          :icon="mdiMail"
          type="email"
          name="email"
          v-model="email"
          required
          autocomplete="email"
          placeholder="Enter Instructor email"
        />
      </FormField>
      <FormField label="Mobile">
        <FormControl
          :icon="mdiCellphone"
          name="phone"
          type="phone"
          v-model="mobile"
          required
          autocomplete="current-phone"
          placeholder="Enter Instructor mobile"
        />
      </FormField>
      <FormField label="Current password">
        <FormControl
          :icon="mdiAsterisk"
          name="password_current"
          type="password"
          required
          autocomplete="current-password"
          placeholder="Set password for Instructor"
        />
      </FormField>
      <FormCheckRadio
        name="notifyUser"
        label="Send email to User"
        :input-value="true"
      />
      <br />
      <FormCheckRadio
        name="publishingCourse"
        label="Editing of Published courses"
        :input-value="true"
      />
      <br />
      <FormCheckRadio
        name="askpublish"
        label="Ask for approval for published cources"
        :input-value="true"
      />
      <br />

      <FormCheckRadio
        name="accesslive"
        label="Access of live recording"
        :input-value="true"
      />
      <br />

      <FormCheckRadio
        name="accessdash"
        label="Access to live dashboard"
        :input-value="true"
      />
      <br />

      <FormCheckRadio
        name="accessmessanger"
        label="Access to messenger"
        :input-value="true"
      />
      <br />

      <FormCheckRadio
        name="accessband"
        label="Access to bandwidth reports"
        :input-value="true"
      />
      <br />

      <FormCheckRadio
        name="accessusage"
        label="Access to usage reports"
        :input-value="true"
      />
      <br />

      <FormCheckRadio
        name="accessreport"
        label="Access to live test reports"
        :input-value="true"
      />
      <br />

      <FormCheckRadio
        name="accesslearner"
        label="Access to learner details"
        :input-value="true"
      />
      <br />

      <FormCheckRadio
        name="accessdownload"
        label="Access to download quiz/live tests"
        :input-value="true"
      />
      <br />

      <div class="flex justify-end py-2">
        <BaseButtons>
          <BaseButton type="submit" color="info" label="Submit" />
        </BaseButtons>
      </div>
    </CardBox>
  </CardBoxModal>
  <div>
    <NuxtLayout name="lmsadmin">
      <div
        class="flex justify-between border-b border-gray-300 p-2 mt-5 xl:max-w-7xl xl:mx-auto bg-gray-100 rounded dark:bg-gray-700"
      >
        <div class="heading">
          <h1 class="font-bold text-2xl">Instructor Management</h1>
          <h3 class="font-thin text-xs text-gray-500 py-1 dark:text-white">
            Manage your community. Learn More.
          </h3>
        </div>
        <BaseButtons type="ml-auto xl:mr-4 mr-1">
          <BaseButton
            class="flex-1"
            type="submit"
            label="+ Add"
            :icon="mdiMessageBadge"
            color="info"
            @click="isModalActive = true"
          />
        </BaseButtons>
        <div class="flex items-center justify-center">
          <PremButtonMenu
            :options="adminPanelButtonMenu"
            :icon="mdiDotsVertical"
          />
        </div>
      </div>
      <div class="flex flex-col gap-4 mx-10 xl:max-w-7xl xl:mx-auto pt-10">
        <TablesTableInstructorSample />
      </div>
    </NuxtLayout>
  </div>
</template>
