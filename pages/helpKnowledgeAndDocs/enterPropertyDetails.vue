<template>
    <div class="h-screen">
        <NuxtLayout name="zen">
            <SectionMain>
                <SectionTitle custom>
                    <div>
                       <p class="text-2xl mb-5">Enter Property Details</p>
                       <p class="text-md text-gray-400 mb-10">Step 1 of 2</p>
                    </div>
                    <CardBox
                    class="md:w-7/12 lg:w-10/12 md:mx-auto text-left"
                    is-form
                    >
                    <PremFormField label="Property name">
                        <PremFormControl 
                          placeholder="Enter property name"/>
                    </PremFormField>

                    <PremFormField label="Site URL">
                        <PremFormControl 
                          placeholder="Enter Site URL"/>
                    </PremFormField>

                    <PremFormField label="Enter Widget name">
                        <PremFormControl 
                          placeholder="Enter Widget name"/>
                    </PremFormField>
                    <div class="w-full grid place-items-center">
                      <BaseButton
                       label="Next"
                        href=""
                        color="contrast"
                        target="_blank"
                        rounded-md
                        class="mt-10" />
                    </div>
                    </CardBox>
                </SectionTitle>
            </SectionMain>
        </NuxtLayout>
    </div>
</template>

<script setup>
import SectionTitle from "@/components/Sections/SectionTitle.vue";
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import BaseButton from '@/components/Buttons/BaseButton.vue';
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue"
</script>
