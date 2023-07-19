<template>
    <div>
        <NuxtLayout name="zen">
            <SectionMain>
                <CardBox>
                    <CreatedArticle/>
                </CardBox>
            </SectionMain>
        </NuxtLayout>
    </div>
</template>

<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import CreatedArticle from "@/components/helpKnowledgeAndDocs/CreatedArticle.vue"

</script>
