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
import TableEditorsSample from "@/components/Tables/TableEditorsSample.vue";

const isModalActive = ref(false);
const mainStore = useMainStore();

const name = ref("");
const mobile = ref("");
const email = ref("");

function submitProfile() {
  isModalActive.value = false;
  useMainStore().addLearner({
    id: uuid4(),
    avatar: "https://avatars.dicebear.com/v2/gridy/Howell-Hand.svg",
    login: "percy64",
    name: name.value,
    email: email.value,
    mobile: mobile.value,
    lastLogin: "Mar 03, 2021",
    joinedOn: "Mar 03, 2021",
    isEnabled: true,
  });
}
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
        <h1 class="font-bold">Add Editor</h1>
        <h3 class="text-xs">Enter details to create Editor manually</h3>
      </div>
      <div class="text-gray-500 cursor-pointer" @click="isModalActive = false">
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>
    <CardBox is-form @submit.prevent="submitProfile">
      <FormField label="Name">
        <FormControl
          :icon="mdiAccount"
          name="username"
          required
          v-model="name"
          autocomplete="username"
          placeholder="Enter Editor name"
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
          placeholder="Enter Editor email"
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
          placeholder="Enter Editor mobile"
        />
      </FormField>
      <FormField label="Current password">
        <FormControl
          :icon="mdiAsterisk"
          name="password_current"
          type="password"
          required
          autocomplete="current-password"
          placeholder="Set password for Editor"
        />
      </FormField>
      <FormCheckRadio
        name="notifyUser"
        label="Send email to User"
        :input-value="true"
      />
      <div class="flex justify-end py-2">
        <BaseButtons>
          <BaseButton type="submit" color="info" label="Submit" />
        </BaseButtons>
      </div>
    </CardBox>
  </CardBoxModal>
  <div>
    <NuxtLayout name="cmslayout">
      <div
        class="flex justify-between border-b border-gray-300 p-2 mt-5 xl:max-w-7xl xl:mx-auto bg-gray-100 rounded dark:bg-gray-700"
      >
        <div class="heading">
          <h1 class="font-bold text-2xl">Editor Management</h1>
          <h3 class="font-thin text-xs text-gray-500 py-1 dark:text-white">
            Manage your learning community. Learn More.
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
        <TablesTableEditorsSample />
      </div>
    </NuxtLayout>
  </div>
</template>
