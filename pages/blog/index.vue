<template>
    <NuxtLayout name="zen">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <button class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mx-4 mx-auto float-right my-4" @click="toCreate">
                Create Blog</button>
            <div v-if="blogStore.blogs.length">

                <BlogList :blogs="blogStore.blogs" />
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { API } from 'aws-amplify'
import { listBlogPosts } from '../../src/graphql/queries'
import { useBlog } from '@/stores/blog'
import { useRouter } from "vue-router";
const router = useRouter();

const blogStore = useBlog();
const getBlogs = async () => {
    const blogs = await (await API.graphql({ query: listBlogPosts })).data.listBlogPosts
    blogStore.blogs = blogs.items
}

onMounted(async () => {
    await getBlogs();
})

const toCreate = () => {
    router.push('/blog/post')
}
</script>