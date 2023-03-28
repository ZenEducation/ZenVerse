<template>
  <div class="wdiget widget_catagory">
    <h4 class="widget-title">Categories</h4>

    <ul class="list-item space-y-4" v-if="blogStore.categories.length" v-for="category in blogStore.categories">


      <li class="block">
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
const blogStore = useBlog()
let categories;
onMounted(async () => {
  categories = await fetchCategoris()
  blogStore.categories = categories.items
})
</script>