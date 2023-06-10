<template>
    <NuxtLayout name="zen">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <button class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mx-4 mx-auto float-right my-4"
                @click="toCreate">
                Create Blog</button>
            <div>

                <BlogList :blogs="blogStore.blogs" :changeCategory="changeCategory" />
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { fetchBlogs } from '@/API/blog'
import { useBlog } from '@/stores/blog'
import { useRouter } from "vue-router";
const router = useRouter();
const blogStore = useBlog();
const getBlogs = async (categoryId) => {
    const blogs = await fetchBlogs(categoryId)
    blogStore.blogs = blogs.items
}

let { query } = useRoute()
let categoryId = ref(query.category)
let bool = ref(false)
const changeCategory = () => {
    bool.value = !bool.value
   
}
watch(bool, async () => {
    let { query } = useRoute()
    categoryId = ref(query.category)
    await getBlogs(categoryId.value);
});

onMounted(async () => {
    await getBlogs(categoryId.value);
})

const toCreate = () => {
    router.push('/blog/post')
}
</script>