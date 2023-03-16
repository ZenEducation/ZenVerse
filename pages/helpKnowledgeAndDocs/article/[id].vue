<script setup>
import { sampleArticles } from "@/configs/sampleArticles.js";
const _route = useRoute();
const _router = useRouter();
const article_id = _route.params.id;
const article = sampleArticles[article_id];
</script>
<template>
  <div>
    <NuxtLayout name="zen">
      <div class="w-2/3 m-auto my-16">
        <div
          class="border-2 border-gray-200 dark:border-gray-600 rounded dark:bg-slate-900/70 bg-white px-6 flex-col flex-wrap py-6 "
        >
          <div>
            <span
              class="text-blue-600 hover:underline"
              @click="_router.push('/helpKnowledgeAndDocs')"
              >&larr; back to articles
            </span>
          </div>
          <div class="mt-12 dark:text-gray-200" v-html="article.article">
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
