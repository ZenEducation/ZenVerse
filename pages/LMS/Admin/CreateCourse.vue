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
  mdiDotsVertical,
} from "@mdi/js";
import SectionMain from "@/components/Sections/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";

// const selectFieldOptions = [
//   { id: 1, label: "Business development" },
//   { id: 2, label: "Marketing" },
//   { id: 3, label: "Sales" },
// ];

// const listBoxOptions = [
//   { id: 1, label: "Howell Hand", unavailable: false },
//   { id: 2, label: "Hope Howe", unavailable: false },
//   { id: 3, label: "Nelson Jerde", unavailable: false },
//   { id: 4, label: "Kim Weimann (disabled)", unavailable: true },
//   { id: 5, label: "Lenna Smitham", unavailable: false },
// ];

// const form = reactive({
//   name: "John Doe",
//   email: "john.doe@example.com",
//   pass: "secret",
//   phone: "",
//   amount: 1024,
//   ipv6: "fe80::/10",
//   ipv4: "127.0.0.1",
//   currency: "USD",
//   department: selectFieldOptions[0],
//   person: listBoxOptions[0],
//   question: "Textarea",
//   subject: "",
//   checkboxOne: ["lorem"],
//   checkboxTwo: ["lorem"],
//   radioOne: "one",
//   radioTwo: "one",
//   switchOne: ["one"],
//   switchTwo: ["one"],
//   file: null,
// });

// const formLower = reactive({
//   name: "John Doe",
//   email: "john.doe@example.com",
//   department: selectFieldOptions[0],
//   person: listBoxOptions[0],
//   question: "Error state",
// });

// const passShowHideClicked = ref(false);

// const mainStore = useMainStore();

// const submit = () => {
//   mainStore.pushMessage("Done! Demo only...", "contrast");
// };

// const formErrorHasError = ref(false);

// const formErrorSubmit = () => {
//   formErrorHasError.value = true;

//   setTimeout(() => {
//     formErrorHasError.value = false;
//   }, 2000);
// };
</script>

<template>
  <div>
    <NuxtLayout name="admin">
      <SectionMain>
        <SectionTitleLineWithButton title="New Chapter: Untitled Chapter" main>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div class="hidden sm:block">
              <BaseButton color="info" label="Discard changes" outline />
            </div>
            <div>
              <BaseButton color="info" type="submit" label="Save" />
            </div>
          </div>
        </SectionTitleLineWithButton>

        <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4">
          <CardBox class="lg:col-span-2 xl:col-span-1">
            <div class="flex justify-center">
              <BaseButton label="Untitled Chapter" color="contrast" />
            </div>

            <BaseDivider />

            <p><b>Pro tip</b></p>

            <p class="opacity-75 text-xs">
              You can cusomize the course completion experience with a
              certificate or a custom completion page
            </p>

            <p
              class="text-sm text-blue-700 my-3 cursor-pointer hover:underline"
            >
              <b>course completion certificate</b>
            </p>

            <BaseDivider />
            <BaseButtons type="justify-center " no-wrap>
              <BaseButton color="info" type="submit" label="Add chapter" />
              <BaseButton color="info" :icon="mdiDotsVertical" small />
            </BaseButtons>
          </CardBox>
          <CardBox
            :icon="mdiBallot"
            class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
            is-form
            @submit.prevent="submit"
          >
            <CardBoxComponentTitle class="mb-12" />
            <PremFormField label="Chapter title" horizontal>
              <PremFormControl
                help="Enter chapter name"
                placeholder="Untitled chapter"
              />
            </PremFormField>
          </CardBox>
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
