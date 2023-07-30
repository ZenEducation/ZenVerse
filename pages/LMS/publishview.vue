<script setup>
import {
  mdiBallot,
} from "@mdi/js";
import SectionMain from "@/components/Sections/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";

const radioOptions = [
    {label:"  Draft", description:"Students cannot purchase or enroll in this course. For students that are already enrolled, this course will not appear on their Student Dashboard."},
    {label:"  Pre-Order", description:"Students can pre-order and enroll in this course but cannot access its contents. For students enrolled in this course, a course card will appear in their Student Dashboard with a \"Comming soon\" label"},
    {label:"  Published", description:"Students can purchase, enroll in, and access the content of this course. For students that are enrolled, this course will appear on their Student Dashboard."}
        ]; 

</script>

<template>
  <div>
    <NuxtLayout name="lmsadmin">
      <SectionMain>
        <SectionTitleLineWithButton
          title="Publish"
          main
        >
          <BaseButton
            href=""
            label="SAVE"
            color="contrast"
            rounded-full
            medium
          />
        </SectionTitleLineWithButton>

        <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4">
          <CardBox
            :icon="mdiBallot"
            class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
            is-form
            @submit.prevent="submit"
          >
            <CardBoxComponentTitle
              title="Course Publish Status"
              class="mb-12"
            />
            <PremFormField horizontal>
              <div 
              v-for="(options,key) in radioOptions"
              :key="key"
              >
              <br>
              <label>
                <input type="radio" name="radioButton">{{options.label}}
              </label>
              <br>
              <label class="text-gray-500 dark:text-slate-400">{{options.description}}</label>

              </div>
            </PremFormField>
          </CardBox>
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>