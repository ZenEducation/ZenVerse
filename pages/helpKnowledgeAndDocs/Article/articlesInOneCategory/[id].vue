<template>
    <div>
        <NuxtLayout name="zen">
          
  <nav class="flex items-center justify-start p-5 ml-5" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
  <nuxt-link :to="`/helpKnowledgeAndDocs/Article/categoriesWithListOfArticles`" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
         
          All Categories
  </nuxt-link>
      </li>
      <li>
        <div class="flex items-center">
          <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
         <nuxt-link :to="``" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">{{ tittle }}</nuxt-link>
        </div>
      </li>
    </ol>
  </nav>

       <h1 class="text-center leading-tight p-3 text-2xl">{{ tittle }}</h1>
            <div class="w-2/3 m-auto my-16">
                 <div class="flex flex-wrap gap-4 justify-between">
               <div v-for="client in articles" class="lg:basis-96 grow md:basis-full">
        <CardBoxClient
         @click="publishData(client)"
                  :key="client.id"
          :name="client.slug"
          :progress="45"
        />
        </div>
              </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import {fetchArticlesByCategory} from "~/utils/helpKnowledgeAndDocs/api"
import ArticlesList from "@/components/HelpKnowledgeAndDocs/ArticlesList.vue";
import { sampleArticlesByCategory } from "@/configs/helpKnowledgeAndDocs/sampleArticles.js";
import CardBoxClient from "~/components/Cards/CardBoxClient.vue";
import { useArticleStore } from "~~/stores/helpKnowledgeAndDocs/article";
const articles = ref();
const route = useRoute();

onMounted(async () => {
    try {
        const fetchedArticles = await fetchArticlesByCategory(route.params.id);
        articles.value = fetchedArticles;
        console.log("sucuss", fetchedArticles);
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
});
const View = (data) => {
  const articleStore = useArticleStore();
  articleStore.updateArticleContent(data);
  localStorage.setItem("content", JSON.stringify(data));
  this.$router.push("./ViewArticle");
}
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
const tittle = ref(route.params.id)

onMounted(() => {
    // Update the store here based on the received prop (e.g., aprop)
    if (route.params) {
        console.log(route.params.id, "id is ....");
    }
    console.log(route.params.id);
    // getArticleVersion(route.params.id);
    // console.log("yess");
});
</script>
<script>
import { onMounted, ref } from "vue";
import { API, graphqlOperation } from "aws-amplify";
import { useArticleStore } from "~~/stores/helpKnowledgeAndDocs/article";

export default {
  setup() {
    return {
      articles,
    };
  },
  methods: {
    publishData(data) {
      const articleStore = useArticleStore();
      articleStore.updateArticleContent(data.content);
      localStorage.setItem("content", JSON.stringify(data.content));
      this.$router.push(`/helpKnowledgeAndDocs/Article/ViewArticle/${data.id}`);
    },
  },
};
</script>