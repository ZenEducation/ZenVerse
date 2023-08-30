<script setup>
import { computed, ref, onMounted } from "vue";
import { useMainStore } from "@/stores/main.js";



const chartData = ref(null);


onMounted(() => {

});
const mainStore = useMainStore();

</script>

<template>
    <div>
        <NuxtLayout name="zen">
            <h1 class="text-center p-4 text-4xl font-bold mt-1">Welcome to Educarer Dashboard</h1>
        </NuxtLayout>
    </div>
</template>
