<template>
    <NuxtLayout name="zen">
        <NuxtLayout name="zen">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <button class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mx-4 mx-auto float-right my-4"
                    @click="deleteBlogFunc">
                    Delete Blog</button>
                    <SingleBlogMain/>
            </div>
        </NuxtLayout>
    </NuxtLayout>
</template>

<script setup>
import { useRouter } from "vue-router";
import { updateBlog, fetchBlog } from '../../API/blog';
const router = useRouter();

const route = useRoute();
let blogId = route.params.id
let blog;
onMounted(async () => {
    blog = await fetchBlog(blogId)
})
const deleteBlogFunc = async () => {
    const updated = await updateBlog({ id: blogId, isDeleted: true, _version: blog._version })
    router.push('/blog')
}
</script>