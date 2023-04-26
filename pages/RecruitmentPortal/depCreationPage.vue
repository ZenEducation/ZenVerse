<script setup>
import { reactive } from "vue";
import { useMainStore } from "@/stores/main";
import {
  mdiAccount,
  mdiMail,
  mdiAsterisk,
  mdiFormTextboxPassword,
  mdiCreditCardOutline,
  mdiFileDocumentOutline,
} from "@mdi/js";
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import BaseDivider from "~~/components/NavBar/BaseDivider.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import FormFilePicker from "@/components/Forms/FormFilePicker.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import UserCard from "~~/components/Cards/UserCard.vue";

import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";

const mainStore = useMainStore();

const profileForm = reactive({
  name: mainStore.userName,
  email: mainStore.userEmail,
});

const submitProfile = () => {
  mainStore.setUser(profileForm);
};

const submitPass = () => {
  //
};
</script>

<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CardBox is-form @submit.prevent="submitProfile">
            <FormField label="logo" help="Max 500kb">
              <FormFilePicker label="Upload" accept=".jpg,.jpeg,.png" />
            </FormField>

            <FormField label="Name" help="Your name required.">
              <FormControl
                :icon="mdiAccount"
                name="username"
                required
                autocomplete="username"
              />
            </FormField>
            <FormField label="Description" help="Descrption required.">
              <FormControl
                :icon="mdiFileDocumentOutline"
                name="description"
                required
                type="textarea"
              />
            </FormField>

            <template #footer>
              <BaseButtons>
                <BaseButton color="info" type="submit" label="Department" />
              </BaseButtons>
            </template>
          </CardBox>
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
