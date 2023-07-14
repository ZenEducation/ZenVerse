<template>
    <div class="h-screen">
        <NuxtLayout name="zen">
            <SectionMain>
                <SectionTitle custom>
                    <h1 class="text-5xl lg:text-6xl font-black">Set up a Knowledge Base</h1>
                    <p class="text-lg mt-5">Help your customers help themselves with a fully customizable hosted Knowledge
                        Base solution built directly into the www.tawk.to platform.</p>
                    <div>
                        <BaseButton label="Set up Knowledge Base" href="/helpKnowledgeAndDocs/article/articleListPage"
                            color="contrast" :icon="mdiAbugidaDevanagari" target="_blank" rounded-md class="mt-10" />
                    </div>
                </SectionTitle>
            </SectionMain>
        </NuxtLayout>
    </div>
</template>

<script setup>
import SectionTitle from "@/components/Sections/SectionTitle.vue";
import SectionMain from "@/components/Sections/SectionMain.vue";
import BaseButton from '@/components/Buttons/BaseButton.vue';
</script>
