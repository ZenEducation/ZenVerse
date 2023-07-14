<template>
    <div>
        <div class="relative">
            <div @click="status = !status">
                <div class="selectDdBtn w-full min-w-40 rounded-sm border-[0.3px] border-black dark:border-gray-700">
                    <slot name="title" />
                </div>
            </div>
            <div v-if="status" class="absolute flex flex-col shadow-xl mt-1 w-full z-10">
                <div class="w-full">
                    <slot name="options" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            status: false
        }
    }
}
</script>