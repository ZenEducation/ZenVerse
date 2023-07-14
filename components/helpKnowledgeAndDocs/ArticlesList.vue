<script setup>
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import CardBoxClient from "@/components/Cards/CardBoxClient.vue";

defineProps({
  articles: {
    type: Array,
  },
});

const _router = useRouter();
const title = "Introduction Of Javascript";
const clientBarItems = ref([
  {
    id: 1,
    name: "Hello, world!",
    login: true,
    created: "2022-10-21",
    progress: 70,
  },
  {
    id: 1,
    name: "Hello, world!",
    login: true,
    created: "2022-10-21",
    progress: 70,
  },
  {
    id: 1,
    name: "Hello, world!",
    login: true,
    created: "2022-10-21",
    progress: 70,
  },
  {
    id: 1,
    name: "Hello, world!",
    login: true,
    created: "2022-10-21",
    progress: 70,
  },
  {
    id: 1,
    name: "Hello, world!",
    login: true,
    created: "2022-10-21",
    progress: 70,
  },
  {
    id: 1,
    name: "Hello, world!",
    login: true,
    created: "2022-10-21",
    progress: 70,
  },
]);
</script>
<template>
  <SectionTitleLineWithButton :icon="mdiChartTimelineVariant" :title="title" :hasSlot="w" main>
    &nbsp;
  </SectionTitleLineWithButton>
  <div class="flex flex-wrap gap-4 justify-between">
    <div v-for="client in clientBarItems" class="lg:basis-96 grow md:basis-full">
      <CardBoxClient :key="client.id" :name="client.name" :progress="client.progress" />
    </div>
  </div>
</template>
