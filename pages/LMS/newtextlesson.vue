<script setup>
    import SectionMain from "@/components/Sections/SectionMain.vue";
    import CardBox from "@/components/Cards/CardBox.vue";
    import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
    import BaseDivider from "@/components/NavBar/BaseDivider.vue";
    import PremFormField from "@/components/Forms/FormField.vue";
    import PremFormControl from "@/components/Forms/FormControl.vue";
    import FormCheckRadioGroup from "~~/components/Forms/FormCheckRadioGroup.vue";
    import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
    import BaseButton from "~~/components/Buttons/BaseButton.vue";
    import SectionTitleLineWithButton from "~~/components/Sections/SectionTitleLineWithButton.vue";
    import { QuillEditor } from "@vueup/vue-quill";
    import '@vueup/vue-quill/dist/vue-quill.snow.css';

    const draftOption= {
        one: "Draft"
    }

</script>

<template>
    <div>
        <NuxtLayout name="zen">
            <SectionMain>
                <SectionTitleLineWithButton
                    main
                >
                    <FormCheckRadioGroup
                        class="font-bold"
                        :options="draftOption"
                    />
                </SectionTitleLineWithButton>
                <div class="gird gird-cols-1 gap-6 mb-6 xl:grid-cols-4">
                    <CardBox 
                        class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
                        if-from
                        @submit.prevent="submit"    
                    >
                        <CardBoxComponentTitle
                            title="New Lesson"
                            class="mb-12"
                        />
                        <BaseDivider/>
                        <PremFormField label="Title">
                            <PremFormControl
                                placeholder="First Lesson"
                            />
                        </PremFormField>
                        <PremFormField label="Content">
                            <QuillEditor style="height: 300px;" theme="snow" toolbar="full"/>
                        </PremFormField>
                        <BaseDivider/>
                        <BaseButtons>
                            <BaseButton type="submit" color="contrast" label="SAVE"/>
                            <BaseButton type="submit" color="danger" :icon="mdiTrashCan" label="DISCARD CHANGES" outline/> 
                        </BaseButtons>

                    </CardBox>
                </div>
            </SectionMain>
        </NuxtLayout>
    </div>
</template>