<template>
    <div>
    <NuxtLayout name="zen">
    <SectionMain>
        <NewCategoryForm />
    </SectionMain>
    </NuxtLayout>
    </div>
</template>

<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import NewCategoryForm from "@/components/HelpKnowledgeAndDocs/NewCategoryForm.vue";
</script>