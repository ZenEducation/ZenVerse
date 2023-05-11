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
          
          <tbody class="text-[12px]" v-for="(category, index) in categoryData" :key="index"> 
            <tr>
              <td class="p-0">
                  <TableCheckboxCell
                     @checked="checked($event, client)"
                   />
              </td>
              <td>{{category.name}}</td>
              <td>{{category.description}}</td>
              <td v-html="category.language"></td>
              <td v-html="category.icon"></td>
              <td>{{category.slug}}</td>
              <td>{{category.count}}</td>
            </tr>
          </tbody>
        </table>
        <!-- <CardBox has-table class="text-center p-3">No Categories</CardBox> -->
    </div>
</template>

<script setup>
import TableCheckboxCell from "@/components/Tables/TableCheckboxCell.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import { useCategoryStore } from '@/stores/categoryData.js';

const categoryStore = useCategoryStore()
const categoryData = computed(() => categoryStore.categories);
// const category = ref('')

// onMounted(() => {
//   console.log('------categories')
//   console.log(localStorage.getItem('category'))
//   category.value = JSON.parse(localStorage.getItem('category'))
// })
</script>
