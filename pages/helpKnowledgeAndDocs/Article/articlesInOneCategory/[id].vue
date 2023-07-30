<template>
    <div>
        <NuxtLayout name="zen">
       <h1 class="text-center leading-tight p-3 text-2xl">{{ tittle }}</h1>
            <div class="w-2/3 m-auto my-16">
                 <div class="flex flex-wrap gap-4 justify-between">
               <div v-for="client in articles" class="lg:basis-96 grow md:basis-full">
        <CardBoxClient
         @click="publishData(client.content)"
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
      articleStore.updateArticleContent(data);
      localStorage.setItem("content", JSON.stringify(data));
      this.$router.push("/helpKnowledgeAndDocs/Article/ViewArticle");
    },
  },
};
</script>