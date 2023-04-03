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
                            <PremFormField label="File" horizontal>
                                <FormFilePicker v-model="form.file" label="Upload" v-on:change="onFileChange" />
                            </PremFormField>
                            <img :src="form.previewImage" alt='' loading="lazy" />
                            <div class="mb-4">
                                <label class="text-xl text-gray-600">category</label><br />

                                <select class="form-select" v-model="form.blogPostCategoryId"
                                    aria-label="Default select example" style='color: black; width: 200px' id='sub-event'>
                                    <option :value="category.id" v-for="category in categories">{{ category.name }}</option>

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
import PremFormField from "@/components/Forms/FormField.vue";
import FormFilePicker from "@/components/Forms/FormFilePicker.vue";
import { createBlog } from '@/API/blog'

import { fetchCategoris } from '~~/API/category';
import uploadFileToS3 from '~~/Zen Extras/uploadFileToS3'
const router = useRouter();
const form = ref({
    title: '',
    content: '',
    blogPostCategoryId: '',
    file: '',
    previewImage: ''
})
function onFileChange(e) {
    var files = e.target.files || e.dataTransfer.files;
    if (!files.length)
        return;
    form.value.file = files[0]
    form.value.previewImage = URL?.createObjectURL(event?.target?.files[0])
}
let categories = ref([]);
onMounted(async () => {
    categories.value = await fetchCategoris();
})
const onCancel = () => {
    router.push('/blog?category=all')
}
const onSubmit = async () => {
    try {
        let fileUrl = await uploadFileToS3(form.value.file)
        const input = {
            title: form.value.title,
            content: form.value.content,
            blogPostCategoryId: form.value.blogPostCategoryId,
            isDeleted: false,
            coverImage: fileUrl
        }
        console.log(input)
        const addPost = await createBlog(input)
        router.push('/blog?category=all')
    } catch (error) {
        console.log(error)
    }
}
</script>