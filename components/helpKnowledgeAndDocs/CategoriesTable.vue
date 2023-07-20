<template>
    <div>
        <table>
          <thead has-table class="text-sm">
            <tr>
              <!-- <th v-if="checkable" /> -->
              <th class="p-0">
                  <TableCheckboxCell
                  
                     @checked="checked($event, client)"
                   />
              </th>
              <th>Title</th>
              <th>Desciption</th>
              <th>Languages</th>
              <th>Icon</th>
              <th>Slug</th>
              <th>Count</th>
            </tr>
          </thead>
          
          <tbody  class="text-[12px] ">
            <tr v-for="category in categories.slice().reverse()" :key="category.id">
              <td class="p-0">
                  <TableCheckboxCell
                     @checked="checked($event, client)"
                   />
              </td>
              <td>{{ category.name}}</td>
              <td>{{ category.description}}</td>
              <td v-html="category.language"></td>
              <td v-html="category.icon"></td>
              <td>{{ category.slug}}</td>
              <td>{{0}}</td>
            </tr>
          </tbody>
        </table>
        <!-- <CardBox has-table class="text-center p-3">No Categories</CardBox> -->
    </div>
</template>

<script setup>
import TableCheckboxCell from "@/components/Tables/TableCheckboxCell.vue";
import CardBox from "@/components/Cards/CardBox.vue";

import { ref, onMounted } from 'vue';
import { fetchCategories } from '~/utils/api';
import { Categories } from '~/src/models';

const categories = ref([]);
const category = ref('')

onMounted(async () => {
  try {
    const fetchedCategories = await fetchCategories();
    categories.value = fetchedCategories;
    console.log("sucuss", categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
});




</script>
