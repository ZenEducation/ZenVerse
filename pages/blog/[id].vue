<template>
    <NuxtLayout name="zen">
        <NuxtLayout name="zen">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <button class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mx-2  float-right my-4"
                    @click="toHome"> Home </button>
                <button class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mx-2  float-right my-4"
                    @click="deleteBlogFunc">
                    Delete Blog</button>
                <SingleBlogMain v-if="blog" :blog="blog" />
            </div>
        </NuxtLayout>
    </NuxtLayout>
</template>

<script setup>
import { useRouter } from "vue-router";
import { updateBlog, fetchBlog } from '../../API/blog';
import { useBlog } from "~~/stores/blog";

const router = useRouter();
const blogStore = useBlog()
const route = useRoute();

let blogId = route.params.id
let blog = ref({})
onMounted(async () => {
    blog.value = await fetchBlog(blogId)
    blogStore.blogView = blog.value;
})
const toHome = () => {
    router.push('/blog?category=all')

}
const deleteBlogFunc = async () => {
    const updated = await updateBlog({ id: blogId, isDeleted: true, _version: blog.value._version })
    router.push('/blog?category=all')
}
</script>