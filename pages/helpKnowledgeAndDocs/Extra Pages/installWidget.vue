<template>
    <div class="h-screen">
        <NuxtLayout name="zen">
            <SectionMain>
                <SectionTitle custom>
                    <div>
                       <p class="text-2xl mb-5">Install Widget</p>
                       <p class="text-md text-gray-400 mb-10">Step 2 of 2</p>
                    </div>
                       <p class="text-md mb-5">To install tawk.to, you can place this code before the <strong> body tag </strong> tag on every page of your website.</p>
                    <CardBox
                    class="md:w-7/12 lg:w-10/12 md:mx-auto text-left"
                    is-form
                    >
                    <div class="text-sm">

                    <CardBox @mouseenter="copyScript = !copyScript" class="relative max-h-auto overflow-auto">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam obcaecati maxime sunt laborum? Cupiditate fugiat facere omnis, asperiores sit saepe unde aliquam ducimus dolorum veritatis in! Perferendis, quod nulla.</p>
                        <div v-if="copyScript" class="absolute top-0 bottom-0 left-0 h-full bg-blue-900/50 w-full grid place-items-center">
                            <BaseButton
                            color="contrast"
                            label="Copy to clipboard" />
                        </div>
                    </CardBox>        
                    <BaseDivider />    

                    <div>
                        <PremFormField class="flex flex-col" label="Or you can also use a tawk.to plugin for one of the popular platforms">
                          <PremFormControl
                          type="select"
                          last-addon
                          :options="['Big Commerce', 'Drupal', 'Joomia', 'Magento 1.x', 'Magento 2', 'Opencart 1.x', 'Opencart 1.5.6x', 'Opencart 2.0, 2.1, && 2.2', 'Opencart 2.3.0.x', 'Prestashop', 'Shopify', 'WHMCS', 'Wordpress', 'ZenCart']"
                          placeholder="Enter property name"/>
                        </PremFormField>
                        <BaseButton
                            color="contrast"
                            label="Download"
                            :icon="mdiDownload"
                          />
                    </div>

                    <BaseDivider />

                    <div>
                        <PremFormField label="You may also send these instructions to your developer">
                        <PremFormControl
                        type="email"
                          placeholder="Enter your developer's Email here"/>
                        </PremFormField>
                        <BaseButton
                            color="contrast"
                            label="Send"
                            :icon="mdiUpload"
                          />
                    </div>

                    <div class="w-full grid place-items-center">
                      <BaseButton
                       label="Done"
                        href=""
                        color="contrast"
                        target="_blank"
                        rounded-md
                        class="mt-10" />
                    </div>
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
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from '@/components/Buttons/BaseButton.vue';
import BaseButtons from '@/components/Buttons/BaseButtons.vue';
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import { mdiEye, mdiDownload, mdiUpload } from "@mdi/js";
</script>

<script>
export default {
    data(){
        return{
            copyScript: false
        }
    },
}
</script>

