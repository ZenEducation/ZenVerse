<script setup>
import { ref, reactive } from "vue";
import { useMainStore } from "@/stores/main.js";
import {
  mdiBallot,
  mdiBallotOutline,
  mdiAccount,
  mdiMail,
  mdiCheck,
  mdiProgressCheck,
  mdiReload,
  mdiCreditCardOutline,
  mdiFileUploadOutline
} from "@mdi/js";
import { buttonMenuOptions } from "@/configs/sampleButtonMenuOptions.js";
import SectionMain from "@/components/Sections/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";
import FormFilePicker from "@/components/Forms/FormFilePicker.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import SectionTitle from "@/components/Sections/SectionTitle.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";

const selectFieldOptions = [
  { id: 1, label: "Business development" },
  { id: 2, label: "Marketing" },
  { id: 3, label: "Sales" },
];

const listBoxOptions = [
  { id: 1, label: "Howell Hand", unavailable: false },
  { id: 2, label: "Hope Howe", unavailable: false },
  { id: 3, label: "Nelson Jerde", unavailable: false },
  { id: 4, label: "Kim Weimann (disabled)", unavailable: true },
  { id: 5, label: "Lenna Smitham", unavailable: false },
];

const checkboxOptions = { lorem: "Lorem", ipsum: "Ipsum", dolore: "Dolore" };
const radioOptions = { one: "One", two: "Two" };
const switchOptions = { one: "One", two: "Two" };

const form = reactive({
  name: "John Doe",
  email: "john.doe@example.com",
  pass: "secret",
  phone: "",
  amount: 1024,
  ipv6: "fe80::/10",
  ipv4: "127.0.0.1",
  currency: "USD",
  department: selectFieldOptions[0],
  person: listBoxOptions[0],
  question: "Textarea",
  subject: "",
  checkboxOne: ["lorem"],
  checkboxTwo: ["lorem"],
  radioOne: "one",
  radioTwo: "one",
  switchOne: ["one"],
  switchTwo: ["one"],
  file: null,
});

const formLower = reactive({
  name: "John Doe",
  email: "john.doe@example.com",
  department: selectFieldOptions[0],
  person: listBoxOptions[0],
  question: "Error state",
});

const passShowHideClicked = ref(false);

const mainStore = useMainStore();

const submit = () => {
  mainStore.pushMessage("Done! Demo only...", "contrast");
};

const formErrorHasError = ref(false);

const formErrorSubmit = () => {
  formErrorHasError.value = true;

  setTimeout(() => {
    formErrorHasError.value = false;
  }, 2000);
};
</script>

<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <SectionTitleLineWithButton  
         :icon="mdiFileUploadOutline"       
          title="New Lesson"
          main
        >
          <BaseButton
            label="SAVE"
            :icon="mdiCreditCardOutline"
            color="contrast"
            rounded-full
            small
          />
        </SectionTitleLineWithButton>

        <div class="grid grid-cols-1 gap-6 mb-6">
          <CardBox
            :icon="mdiBallot"
            class="mb-6 lg:mb-0 xl:col-span-3"
            is-form
            @submit.prevent="submit"
          >
            <PremFormField label="Title" horizontal>
              <PremFormControl
                v-model="form.name"
                :icon-left="mdiAccount"
                help="Your full name"
                placeholder="Name"
              />
            </PremFormField>

         
            

            <template #footer>
              <PremFormField horizontal grouped>
                <BaseButton label="Submit" type="submit" color="info" />
                <PremButtonMenu
                  :options="buttonMenuOptions"
                  label="Options"
                  color="info"
                  outline
                  left
                />
              </PremFormField>
            </template>
          </CardBox>

        </div>


       
      </SectionMain>
    </NuxtLayout>
  </div>
</template>