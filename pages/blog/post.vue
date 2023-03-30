<template>
    <NuxtLayout name="zen">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <form>
                            <div class="mb-4">
                                <label class="text-xl text-gray-600">Title <span class="text-red-500">*</span></label><br />
                                <input type="text" class="border-2 border-gray-300 p-2 w-full" name="title" id="title"
                                    required v-model="form.title">
                            </div>

                            <div class="mb-4">
                                <label class="text-xl text-gray-600">category</label><br />
                                <!-- <input type="text" class="border-2 border-gray-300 p-2 w-full" name="description"
                                    v-model="form.category" id="description"> -->
                                <select class="form-select"  v-model="form.blogPostCategoryId" 
                                    aria-label="Default select example" style='color: black; width: 200px' id='sub-event'>
                                    <option :value="category.id" v-for="category in categories">{{category.name}}</option>
                                   
                                </select>`
                            </div>

                            <div class="mb-8">
                                <label class="text-xl text-gray-600">Content <span
                                        class="text-red-500">*</span></label><br />
                                <textarea name="content" class="border-gray-500" v-model="form.content" cols="108"
                                    rows="20">

                                                                                                                                    </textarea>
                            </div>

                            <div class="flex p-1">

                                <button role="submit" class="p-3 bg-blue-500 text-white hover:bg-blue-400 mx-1"
                                    @click.prevent="onSubmit" required>Publish</button>

                                <button role="submit" class="p-3 bg-blue-500 text-white hover:bg-blue-400 mx-1"
                                    @click.prevent="onCancel" required>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </NuxtLayout>
</template>

<script setup>
import { useRouter } from "vue-router";
import { createBlog } from '@/API/blog'
import { fetchCategoris } from '~~/API/category';
const router = useRouter();
const form = ref({
    title: '',
    content: '',
    blogPostCategoryId: '',

})
let categories = ref([]);
onMounted(async () => {
    categories.value = await fetchCategoris();
    console.log(categories.value)
})
const onCancel = () => {
    router.push('/blog?category=all')
}
const onSubmit = async () => {
    try {
        const input = {
            title: form.value.title,
            content: form.value.content,
            blogPostCategoryId: form.value.blogPostCategoryId,
            isDeleted: false
        }
        const addPost = await createBlog(input)
        router.push('/blog?category=all')
    } catch (error) {
        console.log(error)
    }
}
</script>