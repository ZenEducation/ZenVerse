<script setup>
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import CardBoxClient from "@/components/Cards/CardBoxClient.vue";
import { ref, onMounted } from 'vue';
import { fetchArticles, fetchArticlesByCategory, fetchCategories } from '~/utils/helpKnowledgeAndDocs/api';
import { Categories } from '~/src/models';

const articles = ref([]);
const category = ref('')
// Amplify Hub Start

import { Hub } from "aws-amplify";

const handleDataStoreReady = () => {
  console.log("DataStore is ready. Perform actions here.");
};
const setupDataStoreListener = () => {
  const listener = Hub.listen("datastore", (hubData) => {
    const { event, data } = hubData.payload;
    if (event === "ready") {
      handleDataStoreReady();
      FetchArticles();
    }
  });

  // Clean up the listener when the component is about to be unmounted

  onBeforeUnmount(() => {
    listener();
  });
};
// Set up the listener on component mount
onMounted(() => {
  setupDataStoreListener();
});

// Amplify Hub ending
const FetchArticles = async () => {
  try {
    const fetchedArticles = await fetchArticles();
    articles.value = fetchedArticles;
    console.log("Articles fetched Successfully", fetchedArticles);
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};

// console.log(res);

// const groupedArticles = articles.value.reduce((acc, article) => {
//   console.log("hello");
//   const { category, id, slug } = article;
//   const existingCategory = acc.find((item) => item.category === category);

//   if (existingCategory) {
//     existingCategory.articles.push({ id, slug });
//   } else {
//     acc.push({ category, articles: [{ id, slug }] });
//   }

//   return acc;
// }, []);


const categories = ref([]);


const articlesByCategory = ref([]);
onMounted(async () => {
  try {
    const fetchedCategories = await fetchCategories();
    categories.value = fetchedCategories;
    console.log("Categories fetched Successfully", categories.value);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
    try {
    for (const cat of categories.value) {
      console.log("hello");
      const fetchedArticles = await fetchArticlesByCategory(cat.name);
      articlesByCategory.value.push({ name: cat.name, articles: fetchedArticles });
    }
    console.log(articlesByCategory.value, "tttt");
  } catch (error) {
    console.error('Error fetching articles:', error);
  }
});
</script>

<template>
  <main>
    <NuxtLayout name="zen">
      <div class="w-2/3 m-auto">
       
        <div v-for="topic in articlesByCategory"    :key="topic?.[0]?.name ?? ''" class="mt-10">
           <nuxt-link :to="`articlesInOneCategory/${topic.name}`">
          <SectionTitleLineWithButton
         
            :icon="mdiChartTimelineVariant"
            :title="topic.name"
            :hasSlot="w"
            main
          >
            &nbsp;
          </SectionTitleLineWithButton></nuxt-link>
          <div class="flex flex-wrap gap-4 justify-between">
            <div
              v-for="client in topic?.articles ?? []"
              class="lg:basis-96 grow md:basis-full"
            >
              <CardBoxClient
                :key="client.id"
                :name="client.slug"
                :progress="46"
              />
            </div>
          </div>
        </div>
       
      </div>
    </NuxtLayout>
  </main>
</template>
