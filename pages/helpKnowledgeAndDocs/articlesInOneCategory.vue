<template>
  <div>
    <NuxtLayout name="zen">
      <div class="w-2/3 m-auto my-16">
        <ArticlesList :articles="articles" />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import ArticlesList from "@/components/helpKnowledgeAndDocs/ArticlesList.vue";
import { sampleArticlesByCategory } from "@/configs/sampleArticles.js";
const articles = ref(sampleArticlesByCategory);
</script>
