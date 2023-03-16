<script setup>
defineProps({
  articles: {
    type: Array,
  },
});

const _router = useRouter();
</script>
<template>
  <div
    class="border-2 border-gray-200 dark:border-gray-600 rounded dark:bg-slate-900/70 bg-white px-6 flex  flex-wrap gap-16 py-2 bg-"
  >
    <ul
      class="list-disc list-outside ml-4 mt-3"
      v-for="(article_info, category) in articles"
    >
      <li>
        <span class="text-xl text-ellipsis ">{{ category }}</span>
        <ul class="list-decimal list-outside ml-4 mt-3 flex flex-col gap-3">
          <li v-for="(article, article_id) in article_info" :key="article_id">
            <span
              class="text-blue-600 hover:cursor-pointer hover:underline ml-2 text-ellipsis tracking-wider"
              @click="
                _router.push(`/helpKnowledgeAndDocs/article/${article_id}`)
              "
            >
              {{ article.title }}
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
