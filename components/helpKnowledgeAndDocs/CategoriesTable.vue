<template>
  <div>
    <table>
      <thead has-table class="text-sm">
        <tr>
          <!-- <th v-if="checkable" /> -->
          <th class="p-0">
            <TableCheckboxCell @checked="checked($event, client)" />
          </th>
          <th>Title</th>
          <th>Desciption</th>
          <th>Languages</th>
          <th>Icon</th>
          <th>Slug</th>
          <th>Count</th>
        </tr>
      </thead>

      <tbody class="text-[12px] ">
        <tr v-for="category in categories" :key="category.id">
          <td class="p-0">
            <TableCheckboxCell @checked="checked($event, client)" />
          </td>
          <td>{{ category.name }}</td>
          <td>{{ category.description }}</td>
          <td v-html="category.language"></td>
          <td v-html="category.icon"></td>
          <td>{{ category.slug }}</td>
          <td>{{ category.count }}</td>
        </tr>
      </tbody>
    </table>
    <CardBox has-table class="text-center p-3">No Categories</CardBox>
  </div>
</template>

<script setup>
import TableCheckboxCell from "@/components/Tables/TableCheckboxCell.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import { Category } from "@/src/models";
import { DataStore } from "aws-amplify";

const categories = ref('')

onMounted(() => {
  // console.log('------categories')
  // console.log(localStorage.getItem('category'))
  // category.value = JSON.parse(localStorage.getItem('category'))  // import single category from local storage using category key

  // import multiple categories from local storage using categories key
  // console.log('------categories')
  // console.log(localStorage.getItem('categories'))
  // categories.value = JSON.parse(localStorage.getItem('categories'))
  try {
    DataStore.query(Category).then((models) => {
      console.log(models, '------models')
      categories.value = models.reverse()
    })
  } catch (err) {
    console.log(err)
  }
})
</script>
