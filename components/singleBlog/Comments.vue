<template>
    <div class=" mt-14">

        <ul class="comments space-y-4">
            <li class="block border-b border-[#ECECEC] pb-6 mt-6 last:border-0 last:pb-0" v-for="comment in comments">
                <div class="flex">
                    <div class="flex-1">
                        <div class="flex flex-wrap justify-between mb-2">
                            <div>
                                <span class="text-xl  font-semibold text-black block mb-1">Admin
                                </span>
                                <span class=" block">Oct 09, 2021</span>
                            </div>
                        </div>
                        <p>
                           {{ comment.content }}
                        </p>
                    </div>
                    <hr />
                </div>

            </li>

        </ul>
        <br />
        <input type="text" class="border-2 border-gray-300 p-2 w-full" required v-model="form.content">
        <button role="submit" class="p-3 bg-blue-500 text-white hover:bg-blue-400 mx-1 float-right my-3"
            @click.prevent="comment" required>Add Comment</button>
    </div>
</template>

<script setup>

import { fetchComments, addComment } from '@/API/comment'
const route = useRoute();

let blogId = route.params.id

let form = ref({
    content: ''
})

let comments = ref([])

let fetchData = async (id) => {
    comments.value = await fetchComments(id)
}

onMounted(async () => {
    await fetchData(blogId);
})

const comment = async () => {
    const input = {
        blogPostCommentId: blogId,
        content: form.value.content
    }
    await addComment(input)
    fetchData(blogId)
    form.value.content = ''
}
</script>