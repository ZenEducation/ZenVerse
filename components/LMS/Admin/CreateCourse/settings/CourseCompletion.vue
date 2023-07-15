<script setup>

import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";

</script>

<template>
  <div>

        <div class=" mb-6 ">

          <CardBox
            class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
            is-form
            @submit.prevent="submit"
          >
            <div class="flex justify-between">
              <h1 class="text-3xl">Course Progress & completion</h1>
              <BaseButton
                type="submit"
                to="/dashboard"
                color="info"
                label="SAVE"
              />
            </div>
            <BaseDivider />

            <b>Course completion</b><br />

            <input type="checkbox" name="certificate" id="certificate" />
            <label for="certificate" class="px-3 mb-3"
              >Generate Certificate after Course Completion </label
            ><br />

            <p class="font-bold pt-8">Social Sharing</p>
            <br />
            <p class="mt-0">
              Social sharing Allows your students to share a link to the course
              landing page with their network. These settings can be changed for
              all courses at once in your
              <span class="text-blue-400 underline"
                >learning content setting</span
              >
            </p>

            <p class="py-3">
              Your course link will be added to the end of the social sharing
              text
            </p>

            <input type="checkbox" name="certificate" id="certificate" />
            <label for="certificate" class="px-3 py-3"
              >Social Sharing at chapter completion </label
            ><br />

            <p class="text-sm py-3 mb-3">
              Allow your students to share the course with their network at the
              completions of each chapter
            </p>

            <input type="checkbox" name="certificate" id="certificate" />
            <label for="certificate" class="px-3 mb-3"
              >Generate Certificate after Course Completion </label
            ><br />
            <p class="text-sm py-3 mb-3">
              Allow your students to share the course with their network when
              they reach 100% completions of your course
            </p>

            <div class="p-4">
              <PremFormField label="Social Sharing text">
                <PremFormControl class="" type="textarea" />
              </PremFormField>
            </div>
            <p class="text-sm pb-3 mb-3">
              Used as default content for Twitter. Can be copied and shared on
              facebook and linkedIn
            </p>
          </CardBox>
        </div>
    
  </div>
</template>
