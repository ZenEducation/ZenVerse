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
import ArticlesList from "@/components/HelpKnowledgeAndDocs/ArticlesList.vue";
import { sampleArticlesByCategory } from "@/configs/helpKnowledgeAndDocs/sampleArticles.js";
const articles = ref(sampleArticlesByCategory);
const route = useRouter()
onMounted(() => {
    // Update the store here based on the received prop (e.g., aprop)
    if (route.params.id) {
        console.log(route.params.id, "id is ....");
    }
    console.log("hrerst.....");
    getArticleVersion(route.params.id);
    // console.log("yess");
});
</script>
