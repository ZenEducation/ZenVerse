<template>
    <div class="h-screen">
        <NuxtLayout name="zen">
            <SectionMain>
                <SectionTitle custom>
                   <h1 class="text-5xl lg:text-6xl font-black">Hmmmmmm...</h1>
                   <p class="text-lg mt-5">Looks like you don't have a property</p>
                   <p class="text-lg mt-5 font-bold">Create your first property here</p>
                    <div>
                      <BaseButton
                       label="Add Property"
                        href=""
                        color="contrast"
                        :icon="mdiAbugidaDevanagari"
                        target="_blank"
                        rounded-md
                        class="mt-10" />
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
