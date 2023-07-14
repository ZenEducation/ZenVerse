<script setup>
    import { ref, toRef } from 'vue';
    import SectionMain from "@/components/Sections/SectionMain.vue";
    import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
    import BaseButton from "@/components/Buttons/BaseButton.vue"
    import CardBox from "@/components/Cards/CardBox.vue";
    import {mdiChartTimelineVariant, mdiMagnify} from "@mdi/js";
    import TableViewCreator from "@/components/CMS/TableViewCreator.vue";
    import PremFormField from "~~/components/Forms/FormField.vue";
    import PremFormControl from "~~/components/Forms/FormControl.vue";
    import BaseButtons from "~~/components/Buttons/BaseButtons.vue";

    const searchquery = ref('');
    const sentData = toRef(searchquery);
</script>

<template>
    <div>
        <NuxtLayout name="zen">
            <SectionMain>
                <SectionTitleLineWithButton
                    :icon="mdiChartTimelineVariant"
                    title="Creator Dashbaord"
                    main
                    >
                    <BaseButton
                        label="Create Content"
                        color="contrast"
                    />
                    

                </SectionTitleLineWithButton>
                    <CardBox
                        class="mb-6 g:mb-0 lg:col-span-2 xl:col-span-3"
                        if-from
                        @submit.prevent="submit">
                        <PremFormField horizontal>
                            <PremFormControl
                                v-model="searchquery"
                                :icon="mdiMagnify"
                                placeholder="Search by Title or ID"
                            />
                        </PremFormField>
                        <PremFormField label="Filter By:" horizontal>
                            <BaseButtons>
                                <BaseButton
                                    color="info"
                                    label="Status"
                                    outline
                                    small
                                />
                                <BaseButton
                                    label="Category"
                                    color="info"
                                    outline
                                    small
                                />
                                <BaseButton
                                    label="Type"
                                    color="info"
                                    outline
                                    small
                                />
                                <BaseButton
                                    label="Submitted On"
                                    color="info"
                                    outline
                                    small
                                />
                            </BaseButtons>
                            <div style="align-items: right; text-align: right; text-decoration: underline;"><a href="../../CMS/creatordashboard">Reset Filters</a></div>
                        </PremFormField>
                    </CardBox>
                    <CardBox
                        class="mb-6 g:mb-0 lg:col-span-2 xl:col-span-3"
                        if-from
                        @submit.prevent="submit"
                        >
                        <TableViewCreator :data="sentData"/>

                    </CardBox>

            </SectionMain>
        </NuxtLayout>
    </div>
</template>