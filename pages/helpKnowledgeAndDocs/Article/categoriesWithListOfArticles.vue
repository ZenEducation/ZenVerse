<script setup>
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import CardBoxClient from "@/components/Cards/CardBoxClient.vue";

const topics = ref([
  {
    title: "Introduction Of Javascript",
    subTitles: [
      {
        id: 1,
        name: "Hello, world!",
        login: true,
        created: "2022-10-21",
        progress: 70,
      },
      {
        id: 2,
        name: "CodeEditors!",
        login: true,
        created: "2022-10-21",
        progress: 70,
      },
    ],
  },
  {
    title: "Javascript fundamentals",
    subTitles: [
      {
        id: 1,
        name: "Type Conversion",
        login: true,
        created: "2022-10-21",
        progress: 70,
      },
      {
        id: 2,
        name: "Loops while and for",
        login: true,
        created: "2022-10-21",
        progress: 70,
      },
    ],
  },
  {
    title: "Code Quality",
    subTitles: [
      {
        id: 1,
        name: "Debugging In The Browser",
        login: true,
        created: "2022-10-21",
        progress: 70,
      },
      {
        id: 2,
        name: "Comments",
        login: true,
        created: "2022-10-21",
        progress: 70,
      },
    ],
  },
]);
</script>

<template>
  <main>
    <NuxtLayout name="zen">
      <div class="w-2/3 m-auto">
        <div v-for="topic in topics" :key="topic?.[0]?.title ?? ''" class="mt-10">
          <SectionTitleLineWithButton
            :icon="mdiChartTimelineVariant"
            :title="topic?.title ?? ''"
            :hasSlot="w"
            main
          >
            &nbsp;
          </SectionTitleLineWithButton>
          <div class="flex flex-wrap gap-4 justify-between">
            <div
              v-for="client in topic?.subTitles ?? []"
              class="lg:basis-96 grow md:basis-full"
            >
              <CardBoxClient
                :key="client.id"
                :name="client.name"
                :progress="client.progress"
              />
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </main>
</template>
