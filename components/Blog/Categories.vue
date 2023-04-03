<template>
  <div class="wdiget widget_catagory">
    <h4 class="widget-title">Categories</h4>

    <ul class="list-item space-y-4" v-if="categories.length">

      <li class="block" @click="setCategory">
        <NuxtLink href="/blog?category=all"
          class="flex justify-between  py-[17px] px-5 rounded transition-all duration-150 border-2 border-gray-300">
          <span>All</span>
          <span class="text-2xl">

          </span>
        </NuxtLink>
      </li>
      <li class="block" v-for="category in categories" @click="setCategory">
        <NuxtLink :href="`/blog?category=${category.id}`"
          class="flex justify-between  py-[17px] px-5 rounded transition-all duration-150 border-2 border-gray-300">
          <span>{{ category.name }}</span>
          <span class="text-2xl">

          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { fetchCategoris } from '@/API/category'
import { useBlog } from '@/stores/blog'
const props = defineProps({
  changeCategory: Function
})
const { changeCategory } = toRefs(props);
const setCategory = () => {
  changeCategory.value()
}
let categories = ref([]);
const blogStore = useBlog()
onMounted(async () => {
  categories.value = await fetchCategoris()
  blogStore.categories = categories.items
})
</script>