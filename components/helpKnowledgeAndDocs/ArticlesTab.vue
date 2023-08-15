<template>
  <div>
    <table>
      <thead has-table class="text-sm">
        <tr>
          <!-- <th v-if="checkable" /> -->
          <th class="p-0">
            <TableCheckboxCell @checked="checked($event, client)" />
          </th>

          <!-- status -->
          <th>
            <DropDown v-model="selectedStatus">
              <template v-slot:title>Status</template>
              <template v-slot:options>
                <ul class="flex flex-col">
                  <li class="articleBtn">
                    <p @click="selectedStatus = 'All'">All</p>
                  </li>
                  <li class="articleBtn">
                    <p @click="selectedStatus = 'DRAFT'">Draft</p>
                  </li>
                  <li class="articleBtn">
                    <p @click="selectedStatus = 'PUBLISHED'">Published</p>
                  </li>
                  <li class="articleBtn">
                    <p @click="selectedStatus = 'ARCHIVED'">Archived</p>
                  </li>
                </ul>
              </template>
            </DropDown>
          </th>

          <!-- languages -->
          <th>
            <DropDown>
              <template v-slot:title> Languages </template>
              <template v-slot:options>
                <ul class="flex flex-col">
                  <li class="articleBtn">
                    <PremFormField>
                      <PremFormControl type="text" placeholder="Search" />
                    </PremFormField>
                  </li>
                  <li class="articleBtn" v-html="languages.usa"></li>
                  <li class="articleBtn flex justify-between">
                    <button class="text-red-600">Clear</button>
                    <BaseButton color="dark" small label="Done" />
                  </li>
                </ul>
              </template>
            </DropDown>
          </th>

          <!-- authors -->
          <th>
            <DropDown>
              <template v-slot:title> Authors </template>
              <template v-slot:options>
                <ul class="flex flex-col">
                  <li class="articleBtn">
                    <PremFormField>
                      <PremFormControl type="text" placeholder="Search" />
                    </PremFormField>
                  </li>
                  <li class="articleBtn" v-html="author.main"></li>
                  <li class="articleBtn flex justify-between">
                    <button class="text-red-600">Clear</button>
                    <BaseButton color="dark" small label="Done" />
                  </li>
                </ul>
              </template>
            </DropDown>
          </th>

          <!-- categories -->
          <th>
            <DropDown>
              <template v-slot:title>Categories</template>
              <template v-slot:options>
                <ul>
                  <li class="articleBtn">
                    <PremFormField>
                      <PremFormControl v-model="searchQuery" type="text" placeholder="Search" />
                    </PremFormField>
                  </li>
                  <li class="articleBtn flex justify-between">
                    <button @click="clearSearch" class="text-red-600">Clear</button>
                    <BaseButton @click="applyFilter" color="dark" small label="Done" />
                  </li>
                </ul>
              </template>
            </DropDown>

          </th>


          <!-- feedback -->
          <th>Feedback</th>

          <!-- visibility -->
          <th>
            <DropDown v-model="selectedVisibility">
              <template v-slot:title>Visibility</template>
              <template v-slot:options>
                <ul class="flex flex-col">
                  <li class="articleBtn">
                    <p @click="selectedVisibility = 'All'">All</p>
                  </li>
                  <li class="articleBtn">
                    <p @click="selectedVisibility = 'PUBLIC'">PUBLIC</p>
                  </li>
                  <li class="articleBtn">
                    <p @click="selectedVisibility = 'PRIVATE'">PRIVATE</p>
                  </li>
                </ul>
              </template>
            </DropDown>
          </th>

          <!-- updated -->
          <th>
            <DropDown class="w-40">
              <template v-slot:title> Updated </template>
              <template v-slot:options style="width: 400px !important;">
                <div class="">
                  <vue-tailwind-datepicker v-model="dateValue" />

                </div>
              </template>
            </DropDown>
          </th>
        </tr>
      </thead>

      <!-- <tbody class="text-[12px] w-full">
            
              <tr @click="publishData" v-for="content in articles" :key=".id" >
                <td class="p-0">
                    <TableCheckboxCell
                       @checked="checked($event, client)"
                     />
                </td>
                <td>New</td>
                <td v-html="content.language"></td>
                <td v-html="content.author"></td>
                <td></td>
                <td class="flex">
                  <BaseButton @click="likes++" small label="&#128077;"/>
                  {{ likes }}
                  <BaseButton @click="dislikes++" small label="&#128078;"/>
                  {{ dislikes }}
                </td>
                <td>{{ content.visibility }}</td>
                <td class="flex justify-start gap-0">
                  <p id="year"></p>
                  <p id="month"></p>
                  <p id="day"></p>
                </td>
              </tr>
            
            </tbody> -->

      <tbody class="text-[12px] w-full">
        <tr v-for="content in filteredArticles.slice().reverse()" :key="content.id">
          <td class="p-0">
            <!-- <TableCheckboxCell 
            :type="isChecked(content.id)"
              
              @click="setChecked(content.id)"
              
            /> -->
            <input type="checkbox" @click="setChecked(content.id)" class="form-checkbox h-5 w-5 text-indigo-600 ml-3"
              :checked="isChecked(content.id)" @change="$emit('update:checked', $event.target.checked)" />
          </td>
          <nuxt-link :to="`ArticleCreatePage/${content.id}`">
            <td @click="publishData(content)" v-html="content.slug"></td>
          </nuxt-link>
          <td v-html="content.language"></td>
          <td v-html="content.author"></td>
          <td v-html="content.category"></td>
          <td class="flex">
            <BaseButton @click="incrementLikes(content)" small label="&#128077;" />
            {{ content.likes }}
            <BaseButton @click="incrementDislikes(content)" small label="&#128078;" />
            {{ content.dislikes }}
          </td>
          <td>{{ content.visibility }}</td>
          <td class="flex justify-start gap-0">
            {{ content.updatedAt }}
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <CardBox v-if="!content" has-table class="text-center p-3"
      >No Documents</CardBox
    > -->

    <BaseButtons v-if="checkedItems.size > 0" class="flex flex-row m-4 justify-end items-center">
      <P class="  p-4">{{ checkedItems.size }} item selected
      </P>
      <BaseButton class="m-1" @click="deleteArticle(id)" color="contrast" label="Delete Selection" />

      <BaseButton class="m-1" @click="unCheck()" color="contrast" label="clear Selection" />
    </BaseButtons>
  </div>
</template>

<script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import TableCheckboxCell from "@/components/Tables/TableCheckboxCell.vue";
import DropDown from "~~/components/HelpKnowledgeAndDocs/DropDown.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import { mdiCalendar } from "@mdi/js";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { ref, onMounted } from "vue";

import { fetchArticles } from "~/utils/helpKnowledgeAndDocs/api";

import { deleteArticleById } from "~/utils/helpKnowledgeAndDocs/api";
import { onBeforeUnmount } from "vue";
import VueTailwindDatepicker from 'vue-tailwind-datepicker'


// Amplify Hub Start

import { Hub } from "aws-amplify";
const id = ref("76150941-ab18-414e-8beb-cf1cc8b185b9")
const handleDataStoreReady = () => {
  console.log("DataStore is ready. Perform actions here.");
};

const dateValue = ref([])
const isOpen = ref(false)
watch(dateValue, (newDateValue, oldDateValue) => {
  console.log('Date value changed:', newDateValue);
});
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

const articles = ref([]);
const likes = ref(0);
const dislikes = ref(0);

const selectedStatus = ref('All');
const selectedVisibility = ref('All');

const filteredArticles = computed(() => {
  let filtered = articles.value;

  if (selectedStatus.value !== 'All') {
    filtered = filtered.filter(article => article.status === selectedStatus.value);
  }
  if (selectedVisibility.value !== 'All') {
    filtered = filtered.filter(article => article.visibility === selectedVisibility.value);
  }

  if (searchQuery.value) {
    filtered = filtered.filter(article => article.category.includes(searchQuery.value));
  }

  if (dateValue.value.length === 2) {
    const startDate = new Date(dateValue.value[0]);
    const endDate = new Date(dateValue.value[1]);

    filtered = filtered.filter(article => {
      if (!article.updatedAt) {
        return false;
      }

      const updatedAt = new Date(article.updatedAt);
      return updatedAt >= startDate && updatedAt <= endDate;
    });
  }


  return filtered;
});

const searchQuery = ref('');


const clearSearch = () => {
  searchQuery.value = '';
};

const applyFilter = () => {
  // Apply any additional logic when the "Done" button is clicked
  // You can access the filteredArticles array here
};

const content = ref("");

const FetchArticles = async () => {
  try {
    const fetchedArticles = await fetchArticles();
    articles.value = fetchedArticles;
    console.log("Articles fetched Successfully", fetchedArticles);
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};

const checkedItems = reactive(new Set()); // Array to store the IDs of checked items
async function deleteArticle(articleId) {
  // const isSuccess = await deleteArticleById(articleId);
  // if (isSuccess) {
  //  console.log("sucuss");
  // } else {
  //   console.log("error");
  // }
  const listener = Hub.listen("datastore", (hubData) => {
    const { event, data } = hubData.payload;
    if (event === "ready") {
      handleDataStoreReady();
      FetchArticles();
    }
  });
  const articleIdsToDelete = Array.from(checkedItems);
  // articleIdsToDelete.forEach((id) => deleteArticleById(id));
  for (const articleId of articleIdsToDelete) {
    if (articleId != articleIdsToDelete[articleIdsToDelete.length - 1]) {
      const savedCategory = await deleteArticleById(articleId);
      // console.log(savedCategory, "finall");
    }
    console.log(`Article with ID ${articleId} could not be deleted`);

    listener();
  }
  const savedCategory = await deleteArticleById(articleIdsToDelete[articleIdsToDelete.length - 1]);
  console.log(savedCategory, "finall");
  try {
    const fetchedArticles = await fetchArticles();
    articles.value = fetchedArticles;
    console.log("Articles fetched Successfully", fetchedArticles);
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
  // location.reload();
  setupDataStoreListener();
  checkedItems.clear();
  console.log(articleIdsToDelete);
}


const setChecked = (itemId) => {
  checkedItems.add(itemId);

  console.log("Checked Items:", checkedItems);
};
const unCheck = () => {
  console.log("helloooooooooo");
  checkedItems.clear();
}
const isChecked = (id) => {
  return checkedItems.has(id);
}
onMounted(async () => {
  try {
    const fetchedArticles = await fetchArticles();
    articles.value = fetchedArticles;
    console.log("Articles fetched Successfully", fetchedArticles);
  } catch (error) {
    console.error("Error fetching articles:", error);
  }

  // date
  const y = new Date();

  content.year = y.getFullYear() + "/";
  content.month = y.getMonth() + 1 + "/";
  content.day = y.getDate();

  document.getElementById("year").innerHTML = content.year;
  document.getElementById("month").innerHTML = content.month;
  document.getElementById("day").innerHTML = content.day;

  console.log(content.year);
  console.log(content.month);
  console.log(content.day);
});
</script>
<script>
import { onMounted, ref } from "vue";
import { API, graphqlOperation } from "aws-amplify";
import { useArticleStore } from "~~/stores/helpKnowledgeAndDocs/article";
import { useGlobalStore } from "~~/stores/helpKnowledgeanddocs/helpKnowledgeanddocs";

export default {
  setup() {
    return {
      articles,
    };
  },
  methods: {
    publishData(data) {
      const store = useGlobalStore();
      store.updateGlobalStore(data);
      const articleStore = useArticleStore();
      articleStore.updateArticleContent(data.content);
      localStorage.setItem("content", JSON.stringify(data.content));
      // this.$router.push("./ViewArticle");
    },
  },
};
</script>
