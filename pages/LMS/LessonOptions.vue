<script setup>
import { computed, reactive } from "vue";
import { useRouter } from "vue-router";
import CardBox from "@/components/Cards/CardBox.vue";
import { useMainStore } from "@/stores/main.js";
import SectionMain from "@/components/Sections/SectionMain.vue";
import LessonOptions from "@/components/LMS/Course/LessonOptions.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import { mdiBookOpenPageVariant } from "@mdi/js";

const mainStore = useMainStore();
const lessonItems = computed(() => mainStore.lessonOptions);
const studentItems = computed(() => mainStore.accessStudents);
</script>

<template>
  <div>
    <NuxtLayout name="lmsadmin">
      <SectionMain>
        <SectionTitleLineWithButton
          :icon="mdiBookOpenPageVariant"
          title="Lessons" main
        ></SectionTitleLineWithButton>
        <div class="mb-6 text-xl">
        <h4>Deliver Learning content</h4>
        </div>
            <div class="grid grid-cols-1 xl:grid-cols-2 xl:gap-6 mb-6">
            <LessonOptions
              v-for="(lesson,index) in lessonItems"
              :key="index"
              :heading="lesson.headline"
              :description="lesson.description"
            />
          </div>

          <div class="mb-6 text-xl">
        <h4>Access your students</h4>
        </div>
            <div class="grid grid-cols-1 xl:grid-cols-2 xl:gap-6 mb-6">
            <LessonOptions
              v-for="(student,index) in studentItems"
              :key="index"
              :heading="student.headline"
              :description="student.description"
            />
          </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>