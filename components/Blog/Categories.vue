<template>
  <div class="wdiget widget_catagory">
    <h4 class="widget-title">Categories</h4>

    <ul class="list-item space-y-4" v-if="categories.length" >


      <li class="block" v-for="category in categories">
        <a href="#"
          class="flex justify-between  py-[17px] px-5 rounded transition-all duration-150 border-2 border-gray-300">
          <span>{{ category.name }}</span>
          <span class="text-2xl">

          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { fetchCategoris } from '@/API/category'
import { useBlog } from '@/stores/blog'
let categories = ref([]);
const blogStore = useBlog()
onMounted(async () => {
  categories.value = await fetchCategoris()
  console.log(categories.value)
  blogStore.categories = categories.items
})
</script>