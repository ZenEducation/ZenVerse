<template>
    <NuxtLayout name="zen">
        <AllJobsPage/>
    </NuxtLayout>
</template>

<script>
// import '@/assets/css/tailwind/allJobs.css'
import AllJobsPage from '~~/components/Careers/AllJobsPage.vue';
export default {
    name: "AllJobs",
    components: {
        AllJobsPage
    },

};
</script>
