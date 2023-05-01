
<script setup>
import { adminPanelButtonMenu } from "@/configs/adminPanelButtonMenu.js";
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

const isModalActive = ref(false);
</script>

<template>
  <CardBoxModal v-model="isModalActive" :showFooter="false">
    <header
      class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
    >
      <div class="text-gray-500">
        <BaseIcon v-if="mdiAccountPlus" :path="mdiAccountPlus" :size="32" />
      </div>
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Add Learner</h1>
        <h3 class="text-xs">Enter details to create learner manually</h3>
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
          autocomplete="username"
          placeholder="Enter learner name"
        />
      </FormField>
      <FormField label="E-mail">
        <FormControl
          :icon="mdiMail"
          type="email"
          name="email"
          required
          autocomplete="email"
          placeholder="Enter learner email"
        />
      </FormField>
      <FormField label="Mobile">
        <FormControl
          :icon="mdiCellphone"
          name="phone"
          type="phone"
          required
          autocomplete="current-phone"
          placeholder="Enter learner mobile"
        />
      </FormField>
      <FormField label="Current password">
        <FormControl
          :icon="mdiAsterisk"
          name="password_current"
          type="password"
          required
          autocomplete="current-password"
          placeholder="Set password for learner"
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
    <NuxtLayout name="zen">
      <SectionMain>
        <div
          class="flex justify-between border-b border-gray-300 p-2 mt-5 xl:max-w-7xl xl:mx-auto bg-gray-100 rounded dark:bg-gray-700"
        >
          <div class="heading">
            <h1 class="font-bold text-2xl">Learners</h1>
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
          <TableLearnersSample />
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
