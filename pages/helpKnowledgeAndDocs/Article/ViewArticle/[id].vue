<template>
    <div>
        <NuxtLayout name="zen">
            <nav class="flex items-center justify-start p-5 ml-5" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                        <nuxt-link :to="`/helpKnowledgeAndDocs/Article/categoriesWithListOfArticles`"
                            class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">

                            All Categories
                        </nuxt-link>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 9 4-4-4-4" />
                            </svg>
                            <nuxt-link :to="`/helpKnowledgeAndDocs/Article/articlesInOneCategory/${article.category}`"
                                class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">{{
                                    article.category }}</nuxt-link>
                        </div>
                    </li>
                      <li>
                            <div class="flex items-center">
                                <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="m1 9 4-4-4-4" />
                                </svg>
                                <nuxt-link :to="``"
                                    class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">{{
                                        article.slug }}</nuxt-link>
                            </div>
                        </li>
                </ol>
            </nav>
            <SectionMain>
                <CardBox>
                    <CreatedArticle />
                </CardBox>
                 <CardBox>
          <div class="flex justify-center items-center ">
          <!-- <BaseButton  class="m-3" large label="&#128077" /> -->
          <button class="m-3" @click="toggleLike1">&#128077</button>
    <button class="m-3" @click="toggleLike2">&#128078</button>
          <!-- <BaseButton   class="m-3" large label="&#128078" /> -->
        </div>
        <h2 class="text-center" >{{ article.likes }} out {{ article.dislikes + article.likes }} liked this article </h2>
        </CardBox>
            </SectionMain>
        </NuxtLayout>
    </div>
</template>

<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
// import { useRoute } from "vue-router";
import CreatedArticle from "@/components/helpKnowledgeAndDocs/CreatedArticle.vue"
import {
    findArticleById,
    updateArticleById,
} from "~/utils/helpKnowledgeAndDocs/api";
const isLiked = ref(false)
const isDisliked = ref(false)
const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const date = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${date}`;
};
const toggleLike1 = async() => {
    isLiked._value = !isLiked._value;
     if (isLiked.value == true) {
        const like = article._value.likes + 1;
        const res = await updateArticleById(article._value.id, { ...article._value, likes: like, updatedAt: getCurrentDate() })
        console.log("sucuundn", res);
        isLiked.value = false
         article.value = await findArticleById(route.params.id);
    }
    if (isLiked.value == false) {
        console.log("i am working now" , article._value.likes - 1);
        const like = article._value.likes - 1;
        const res = await updateArticleById(article._value.id, { ...article._value, likes: like, updatedAt: getCurrentDate() })
        console.log("sucuundn", res);
         article.value = await findArticleById(route.params.id);
    }
};
const toggleLike2 = async() => {
    isDisliked._value = !isDisliked._value;
     if (isDisliked.value == true) {
        const like = article._value.dislikes + 1;
        try {
            const res = await updateArticleById(article._value.id, { ...article._value, dislikes: like, updatedAt: getCurrentDate() })
            console.log(updatedArticleData);
        }
        catch (err) {
            console.log(err);
        }
        isDisliked.value = false
    article.value = await findArticleById(route.params.id);
    }
    if (isDisliked.value == false) {
        console.log("i am working now", article._value.dislikes - 1);
        const like = article._value.dislikes - 1;
        try {
            const res = await updateArticleById(article._value.id, { ...article._value, dislikes: like, updatedAt: getCurrentDate() })
            console.log(res);
        }
        catch (err) {
            console.log(err);
        }
        article.value = await findArticleById(route.params.id);
    }
};

const article = ref()
const updatedArticleData = {
    // id: articleId,
    imageUrl: article.imageUrl,
    likes: article.likes,
    metaDescription: "",
    relatedArticles: article.relatedArticles,
    slug: article.slug,
    status: article.status,
    title: "",
    author: article.author,
    updatedAt: getCurrentDate(),
    visibility: article.visibility,
    language: "",
    dislikes: 10,
    content: JSON.parse(localStorage.getItem("content")),
    category: article.category,
};


const updateLikes =async() => {
    console.log("value of liked", isLiked.value);
    console.log("value of dilike", isDisliked.value);
}

const route = useRoute();
onBeforeMount(async () => {

    console.log(route.params.id);
    try {
        article.value = await findArticleById(route.params.id);
        console.log("sucussaaa", article.value);
    }
    catch (err) {
        console.log("error in fetching artilce", err);
    }
})

</script>
