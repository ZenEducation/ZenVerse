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
            <DropDown>
              <template v-slot:title>Status</template>
              <template v-slot:options>
                <ul class="flex flex-col">
                  <li class="articleBtn">
                    <p>All</p>
                  </li>
                  <li class="articleBtn">
                    <p>Draft</p>
                  </li>
                  <li class="articleBtn">
                    <p>Published</p>
                  </li>
                  <li class="articleBtn">
                    <p>Archived</p>
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
              <template v-slot:title> Categories </template>
              <template v-slot:options>
                <ul>
                  <li class="articleBtn">
                    <PremFormField>
                      <PremFormControl type="text" placeholder="Search" />
                    </PremFormField>
                  </li>
                  <li class="articleBtn flex justify-between">
                    <button class="text-red-600">Clear</button>
                    <BaseButton color="dark" small label="Done" />
                  </li>
                </ul>
              </template>
            </DropDown>
          </th>

          <!-- feedback -->
          <th>Feedback</th>

          <!-- visibility -->
          <th>
            <DropDown>
              <template v-slot:title> Visibility </template>
              <template v-slot:options>
                <ul class="flex flex-col">
                  <li class="articleBtn">
                    <p>All</p>
                  </li>
                  <li class="articleBtn">
                    <p>Public</p>
                  </li>
                  <li class="articleBtn">
                    <p>Private</p>
                  </li>
                </ul>
              </template>
            </DropDown>
          </th>

          <!-- updated -->
          <th>
            <DropDown>
              <template v-slot:title> Updated </template>
              <template v-slot:options>
                <div class="relative max-w-sm">
                  <input type="date"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date" />
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
        <tr @click="publishData(content.content)" v-for="content in articles.slice().reverse()" :key="content.id">
          <td class="p-0">
            <TableCheckboxCell @checked="checked($event, content)" />
          </td>
          <td v-html="content.status"></td>
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
  </div>
</template>

<script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import TableCheckboxCell from "@/components/Tables/TableCheckboxCell.vue";
import DropDown from "~~/components/helpKnowledgeAndDocs/DropDown.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import { mdiCalendar } from "@mdi/js";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { ref, onMounted } from 'vue';

import { fetchArticles } from '~/utils/api'; 
import {onBeforeUnmount } from 'vue';

// Amplify Hub Start

import { Hub } from 'aws-amplify';

const handleDataStoreReady = () => {
  console.log('DataStore is ready. Perform actions here.');
};
const setupDataStoreListener = () => {
  const listener = Hub.listen('datastore', hubData => {
    const { event, data } = hubData.payload;
    if (event === 'ready') {
      handleDataStoreReady();
      FetchArticles()
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

const content = ref("");


const FetchArticles = async() => {
  try {
    const fetchedArticles = await fetchArticles();
    articles.value = fetchedArticles;
    console.log("Articles fetched Successfully", fetchedArticles);
  } catch (error) {
    console.error('Error fetching articles:', error);
  }
}

onMounted(async() => {

  try {
    const fetchedArticles = await fetchArticles();
    articles.value = fetchedArticles;
    console.log("Articles fetched Successfully", fetchedArticles);


  } catch (error) {
    console.error('Error fetching articles:', error);
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
import { onMounted, ref } from 'vue';
import { API, graphqlOperation } from 'aws-amplify';
import { useArticleStore } from "~~/stores/article";

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
      this.$router.push('./ViewArticle')
    },
  },
};
</script>


