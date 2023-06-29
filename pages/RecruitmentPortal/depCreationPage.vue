<script setup>
import { reactive } from "vue";
import {
  mdiAccount,
  mdiMail,
  mdiAsterisk,
  mdiFormTextboxPassword,
  mdiCreditCardOutline,
  mdiFileDocumentOutline,
  mdiLocationEnter,
} from "@mdi/js";
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import FormFilePicker from "@/components/Forms/FormFilePicker.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";

const profileForm = reactive({
  name: "",
  description: "",
  location: "",
  logoUri: "",
});

const createDepartment = async () => {
  const mutation = `
    mutation CreateDepartment($name: String!, $description: String!, $location: String!, $logoUri: String!) {
      createDepartment(input: {
        name: $name,
        description: $description,
        location: $location,
        logoUri: $logoUri
        departmentId: 123
      }) {
        departmentId
        name
        location
        description
        logoUri
        createdAt
        updatedAt
      }
    }
  `;

  const variables = {
    name: profileForm.name,
    location: profileForm.location,
    description: profileForm.description,
    logoUri: profileForm.logoUri || "https://example.com/logo.png",
  };

  const response = await fetch('https://aljw4fgbzrgkjkntp2yvc2dzgm.appsync-api.ap-south-1.amazonaws.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'da2-abaq7ccxdnf6vb7w4tux65kg5q',
    },
    body: JSON.stringify({ query: mutation, variables }),
  });

  const { data } = await response.json();
  console.log(data.createDepartment); // Handle the response data as needed
};
</script>

<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CardBox is-form @submit.prevent="createDepartment">
            <FormField label="logo" help="Max 500kb">
              <FormFilePicker label="Upload" accept=".jpg,.jpeg,.png" v-model="profileForm.logoUri" />
            </FormField>

            <FormField label="Name" help="Your name required.">
              <FormControl :icon="mdiAccount" v-model="profileForm.name" name="username" required
                autocomplete="username" />
            </FormField>
            <FormField label="Location" help="Location required.">
              <FormControl :icon="mdiLocationEnter" v-model="profileForm.location" name="location" required
                autocomplete="location" />
            </FormField>
            <FormField label="Description" help="Description required.">
              <FormControl :icon="mdiFileDocumentOutline" v-model="profileForm.description" name="description" required
                type="textarea" />
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
