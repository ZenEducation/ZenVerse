<template>
  <div class="bg-white shadow-box12 rounded-[8px] transition duration-100 hover:shadow-box13 cursor-pointer"
    @click.prevent="toBlogPage(blog.id)">
    <div class="course-thumb h-[260px] rounded-t-[8px]  relative">
      <img src="" alt="Not Available" class=" w-full h-full object-cover rounded-t-[8px]">
      <span class="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">Education</span>
    </div>
    <div class="course-content p-8">
      <div class="flex   lg:space-x-10 space-x-5 mb-5">
       <span>By Admin</span>
        <span>{{ `${new Date(blog.createdAt).getDate()} - ${new Date(blog.createdAt).getMonth()} - ${new
          Date(blog.createdAt).getFullYear()}` }}</span>
      </div>
      <h4 class=" text-xl mb-5 font-bold">
        {{ blog.title }}
      </h4>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  blog: Object
})

const { blog } = toRefs(props);
const router = useRouter();

const toBlogPage = (id) => {
  router.push(`/blog/${id}`)
}


</script>