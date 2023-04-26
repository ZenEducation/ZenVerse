<template>
    <div>
        <div class="relative">
            <div @click="status = !status">
                <div class="articleBtn max-w-40 rounded-sm"><slot name="title"/></div>
            </div>
            <div v-if="status" class="absolute flex flex-col shadow-xl mt-4 z-10">
                <div class="w-40"><slot name="options"/></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            status: false
        }
    }
}
</script>