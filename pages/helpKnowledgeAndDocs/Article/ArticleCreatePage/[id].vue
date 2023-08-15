<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
          <!-- control sidebar -->
          <CardBox has-table class="md:col-span-1 p-2 text-sm rounded-sm">
            <!-- <NuxtLink to="ArticleListPage"> -->
            <button @click="goBack" class="flex items-center mb-5">
              <BaseIcon :path="mdiArrowLeftBold" class="cursor-pointer" />
              <p>Back to</p>
              
            </button>
            <!-- </NuxtLink> -->

            <BaseButtons>
              <BaseButton label="Save Draft" color="contrast" small />
              <BaseButton
                label="Publish"
                color="contrast"
                small
                @click="updateArticleHandler()"
              />
            </BaseButtons>

            <CardBox has-table class="p-2 mt-6 rounded-sm">
              <ul class="grid grid-cols-2 mb-6">
                <li
                  @click="document"
                  id="document"
                  class="articleChangeBtn hover:activeArticleChangeBtn"
                >
                  Document
                </li>
                <li
                  @click="block"
                  class="articleChangeBtn hover:activeArticleChangeBtn"
                >
                  Block
                </li>
              </ul>

              <div>
                <!-- <Document
                  v-if="activeTab === 'document'"
                  ref="documentComp"
                  @value="getValue1"
                /> -->
                <Block v-if="activeTab === 'block'" />
              </div>
            </CardBox>
          </CardBox>

          <!-- text editor -->
          <CardBox has-table class="mb-6 p-4 rounded-md lg:mb-0 md:col-span-3">
            <ArticleEditor ref="content" @value="getValue" />
          </CardBox>
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { mdiArrowLeftBold, mdiLink } from "@mdi/js";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import SectionMain from "@/components/Sections/SectionMain.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import FormCheckRadio from "@/components/Forms/FormCheckRadio.vue";
import SelectDropdown from "/components/helpKnowledgeAndDocs/SelectDropdown.vue";
import Document from "@/components/HelpKnowledgeAndDocs/Document.vue";
import Block from "@/components/HelpKnowledgeAndDocs/Block.vue";
import ArticleEditor from "@/components/HelpKnowledgeAndDocs/ArticleEditor.vue";

import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import {
  createArticle,
  findArticleById,
  updateArticleById,
} from "~/utils/helpKnowledgeAndDocs/api";
import { useGlobalStore } from "~~/stores/helpKnowledgeAndDocs/helpKnowledgeanddocs";
import { useArticleStore } from "~~/stores/helpKnowledgeAndDocs/article";
import { API, graphqlOperation } from "aws-amplify";
import {} from "~~/src/graphql/mutations";

const route = useRoute();
const router = useRouter();
const articleVersion = ref(null);
// const id = ref(route.params.id)
const articleDetails = ref(null);
onMounted(async () => {
  // Update the store here based on the received prop (e.g., aprop)
  if (route.params.id) {
    console.log("jqeb");
  }
  try {
    articleDetails.value = await findArticleById(route.params.id);
    console.log("sucussaaa", articleDetails.value);
    const articleStore = useGlobalStore();
    articleStore.updateGlobalStore(articleDetails.value);
    const store = useGlobalStore();
    const docFormData = ref({ ...store.$state })._value;
    console.log(docFormData, "updated one ...");
  } catch (err) {
    console.log(err, "error");
  }
  getArticleVersion(route.params.id);
  // console.log("yess");
});

async function getArticleVersion(id) {
  const query = `
    query MyQuery($id: ID!) {
      getArticle(id: $id) {
        _version
      }
    }
  `;

  try {
    console.log("this is id", id);
    const response = await API.graphql(graphqlOperation(query, { id }));
    // const { _version } = response.data.getArticle
    // articleVersion.value = _version
    console.log("sucuss", response);
  } catch (error) {
    console.error("Error fetching article version:", error);
  }
}

const goBack = () => {
  router.back();
};
const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const date = String(currentDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${date}`;
};
const articleId = ref(route.params.id);
// const store = useGlobalStore();
// const docFormData = ref({ ...store.$state })._value;
// const updatedArticleData = ref({
//   // id: articleId,
//   imageUrl: docFormData.imageUrl,
//   likes: 10,
//   metaDescription: "",
//   relatedArticles: docFormData.relatedArticles,
//   slug: docFormData.slug,
//   status: docFormData.status,
//   title: "",
//   updatedAt: getCurrentDate(),
//   visibility: docFormData.visibility,
//   language: "",
//   dislikes: 10,
//   content: JSON.parse(localStorage.getItem("content")),
//   category: docFormData.category,
// });
// const content = ref(data().content);
const updateArticleHandler = async () => {
  const store = useGlobalStore();
  const docFormData = { ...store.$state };
  const relatedArticles = [...docFormData.relatedArticles];
  const updatedArticleData = {
    // id: articleId,
    imageUrl: docFormData.imageUrl,
    likes: 10,
    metaDescription: "",
    relatedArticles: relatedArticles,
    slug: docFormData.slug,
    status: docFormData.status,
    title: "",
    author: docFormData.author,
    updatedAt: getCurrentDate(),
    visibility: docFormData.visibility,
    language: "",
    dislikes: 10,
    content: JSON.parse(localStorage.getItem("content")),
    category: docFormData.category,
  };
  try {
    // Call the updateArticle utility function to update the article
    const updatedArticle = await updateArticleById(
      articleId.value,
      updatedArticleData
    );
    console.log("Article updated:", updatedArticle);
  } catch (error) {
    console.error("Error updating article:", error);
  }
};
</script>

<script>
export default {
  data() {
    return {
      activeTab: "document",
      content: "",
      year: "",
      month: "",
      day: "",
    };
  },

  methods: {
    document() {
      this.activeTab = "document";
    },

    block() {
      this.activeTab = "block";
    },

    getValue(value) {
      this.content = value;
      localStorage.setItem("content", JSON.stringify(value));
    },
    getValue1(value) {
      // console.log("---------> I am a hero", value);
      // this.content = value
    },
    getCurrentDate() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const date = String(currentDate.getDate()).padStart(2, "0");
      return `${year}-${month}-${date}`;
    },
    async publishData() {
      const store = useGlobalStore();
      const docFormData = ref({ ...store.$state })._value;
      console.log("hello");
      console.log(docFormData, "this is sent data");
      const data = {
        category: docFormData.category,
        dislikes: 1,
        imageUrl: docFormData.imageUrl,
        language: docFormData.language,
        likes: 8,
        metaDescription: docFormData.meta,
        updatedAt: this.getCurrentDate(),
        relatedArticles: [...docFormData.articles],
        slug: docFormData.slug,
        status: docFormData.status,
        tittle: "Tittle",
        visibility: docFormData.visibility,
        content: this.content,
      };
      // console.log(data, "this is sending data");
      try {
        const newArticle = await createArticle(data);
        console.log("New Article created:", newArticle);
        const article = useArticleStore();
        article.updateArticleContent(data.content);
        localStorage.setItem("content", JSON.stringify(data.content));
        // console.log("article, content", {...article.$state});
        // console.log(data, "---------> All data");
        this.$router.push("./ViewArticle");
      } catch (error) {
        console.error("Error creating article:", error);
      }
    },
  },
};
</script>
