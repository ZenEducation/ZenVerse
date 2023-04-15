<script setup>
    import { ref } from "vue";
    import { mdiTrashCan } from "@mdi/js";
    import SectionMain from "@/components/Sections/SectionMain.vue";
    import CardBox from "@/components/Cards/CardBox.vue";
    import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
    import BaseDivider from "@/components/NavBar/BaseDivider.vue";
    import PremFormField from "@/components/Forms/FormField.vue";
    import PremFormControl from "@/components/Forms/FormControl.vue";
    import FormField from "@/components/Forms/FormField.vue";
    import FormCheckRadioGroup from "~~/components/Forms/FormCheckRadioGroup.vue";
    import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
    import BaseButton from "~~/components/Buttons/BaseButton.vue";

    const instructorOptions = [
        { id: 2, label: "Zenith", unavailable: false},
        { id: 3, label: "Einstien", unavailable: false},
        { id: 4, label: "Newton", unavilable: false},
        { id: 5, label: "Tesla", unavailable: false}
    ];

    const checkbox1_Options = {
        one: "Private course",
        two: "Hidden course",

    }

    const checkbox2_Options = {
        one: "Disable text copying",
    }

    const msg = ref('');
</script>

<template>
    <div>
        <NuxtLayout name="zen">
            <SectionMain>
                <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4">
                    <CardBox
                        class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
                        if-from
                        @submit.prevent="submit"
                        >
                        <CardBoxComponentTitle
                            title="Course Settings"
                            class="mb-12"
                        />
                        <BaseDivider/>
                        <PremFormField label="Course Name" horizontal>
                            <PremFormControl
                                placeholder="Course Name"
                            />
                            <!-- <PremFormControl/> -->
                        </PremFormField>
                        <PremFormField label="Course URL" horizontal>
                            <PremFormControl
                                v-model="msg"
                                placeholder="e.g. first-course"
                            />
                            <h4 class="text-gray-700 dark:text-slate-400">https://www.photonecademy.edu/courses/{{ msg }}</h4>
                        </PremFormField>
                        <PremFormField label="Choose your instructor" horizontal>
                            <PremFormControl
                                placeholder="-- Select Instructor --"
                                :options="instructorOptions"
                            />
                            <!-- <PremFormControl/> -->
                        </PremFormField>
                        <FormField label="Access">
                            <FormCheckRadioGroup
                                name="checkbox1-course-settings"
                                :options="checkbox1_Options"
                                is-column
                            />
                        </FormField>
                        <FormField label="Security">
                            <FormCheckRadioGroup
                                name="checkbox2-course-settings"
                                :options="checkbox2_Options"
                                is-column
                            />
                        </FormField>
                        <BaseDivider/>
                        <BaseButtons>
                            <BaseButton type="submit" color="contrast" label="SAVE"/>
                            <BaseButton type="submit" color="danger" :icon="mdiTrashCan" label="DELETE LESSON" outline/> 
                        </BaseButtons>
                    </CardBox>
                </div>
            </SectionMain>
        </NuxtLayout>
    </div>
</template>