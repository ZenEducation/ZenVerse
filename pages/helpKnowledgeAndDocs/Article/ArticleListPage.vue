<template>
    <div>
        <NuxtLayout name="zen">
            <SectionMain>
                <div class="flex">
                    <PremFormField class="w-full">
                        <PremFormControl type="text" placeholder="Search articles" />
                    </PremFormField>
                    <NuxtLink to="ArticleCreatePage">
                        <BaseButton class="ml-2" color="contrast" label="New Article" />
                    </NuxtLink>
                </div>

                <div class="flex justify-between">
                    <BaseButtons>
                        <BaseButton @click="activeTab = 'Articles'" class="m-1" color="contrast" label="Articles" />

                        <BaseButton @click="activeTab = 'Categories'" class="m-1" color="contrast" label="Categories" />

                        <BaseButton v-if="activeTab === 'Categories'" class="m-1" color="contrast" label="New Category"
                            to="NewCategoryPage" />
                    </BaseButtons>

                    <BaseButtons>
                        <BaseButton class="m-1" color="contrast" label="Configure" />

                        <BaseButton class="m-1" color="contrast" label="View Site" />
                    </BaseButtons>
                </div>

                <CardBox has-table v-if="activeTab === 'Articles'" class="my-5 p-2 rounded-sm">
                    <ArticlesTab />
                </CardBox>
                <CardBox has-table v-if="activeTab === 'Categories'" class="my-5 p-2 rounded-sm">
                    <CategoriesTable />
                </CardBox>
            </SectionMain>
        </NuxtLayout>
    </div>
</template>

<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseButton from '@/components/Buttons/BaseButton.vue';
import BaseButtons from '@/components/Buttons/BaseButtons.vue';
import CardBox from "@/components/Cards/CardBox.vue";
import TableCheckboxCell from "@/components/Tables/TableCheckboxCell.vue";
import CategoriesTable from "@/components/HelpKnowledgeAndDocs/CategoriesTable.vue";
import ArticlesTab from "@/components/HelpKnowledgeAndDocs/ArticlesTab.vue"
</script>

<script>
export default {
    data() {
        return {
            activeTab: 'Articles'
        }
    }
}
</script>

