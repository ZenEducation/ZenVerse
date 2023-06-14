<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const submit = () => {
  console.log("submitted");
};
const checkboxOptions = { free: "Free Test" };
const radioOptions = { one: "Online Test", two: "Offline Test" };

let form = reactive({
  freeTest: false,
});

const onCancel = () => {
  router.push("/examPortal/tests");
};
</script>

<template>
  <NuxtLayout name="lmsadmin">
    <SectionMain>
      <CardBox
        :icon="mdiBallot"
        class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
        is-form
        @submit.prevent="submit"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <CardBoxComponentTitle title="Create Test" class="mb-12" />
          <PremFormField label="Test Title" horizontal>
            <PremFormControl
              :icon-left="mdiAccount"
              help=""
              placeholder="Test Title"
            />
          </PremFormField>
          <PremFormField label="Test Description" horizontal>
            <PremFormControl
              :icon-left="mdiAccount"
              help=""
              placeholder="Test Description"
            />
          </PremFormField>

          <PremFormField label="Test Price" horizontal>
            <PremFormControl
              :icon-left="mdiAccount"
              help=""
              placeholder="Test Price"
              type="number"
            />
          </PremFormField>

          <PremFormField label="" help="" horizontal>
            <FormCheckRadioGroup
              v-model="form.freeTest"
              name="sample-checkbox-two"
              :options="checkboxOptions"
              is-column
            />
          </PremFormField>

          <PremFormField label="Test Mode" help="" horizontal>
            <FormCheckRadioGroup
              v-model="form.radioTwo"
              name="sample-radio-two"
              type="radio"
              :options="radioOptions"
              is-column
            />
          </PremFormField>
        </div>
        <template #footer>
          <PremFormField horizontal grouped>
            <BaseButton label="Submit" type="submit" color="info" />
            <PremButtonMenu label="cancel" color="info" @click="onCancel" />
          </PremFormField>
        </template>
      </CardBox>
    </SectionMain>
  </NuxtLayout>
</template>
