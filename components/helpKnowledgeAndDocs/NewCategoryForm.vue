<template>
            <div>
              <CardBox class="rounded-sm">
                <div class=" flex justify-between pb-6">
                <div class="flex items-center gap-10">
                <NuxtLink to="ArticleListPage">
                  <button class="flex items-center">
                    <BaseIcon :path="mdiArrowLeftBold" class="cursor-pointer"/>
                    <p>Back</p>
                  </button>
                </NuxtLink>
                <div class="p-2 rounded-md bg-gray-300" v-html="category.language"></div>
                </div>

                  <BaseButton @click="saveCategory" label="Create Category" color="info"/>
                </div>
                  
                  <!-- category form start-->
                  <div class="p-5">
                  <div class="flex mb-5">

                      <!-- add icon and sort order -->
                      <div class="flex flex-col justify-between gap-2 pr-3 text-[12px]">
                      <button class="w-[120px] h-[80px] rounded-md text-blue-500 bg-blue-500/20 dark:bg-white border flex flex-col justify-center items-center">
                      <BaseIcon :path="mdiImage" class="cursor-pointer"/>
                      Add Icon
                      </button>
                      <button class="w-[120px] h-[80px] rounded-md bg-blue-500 text-white">Sort Order</button>
                      </div>

                    <div>
                  <FormField label="Category Name"
                  >
                    <PremFormControl
                    v-model="categoryData.name"
                    type="text"
                    placeholder="Enter category name"
                    />
                    <p>Make it easy for your customers to find what they're looking for by categorizing articles with a similar theme.</p>
                  </FormField>

                    <FormField label="Slug">
                    <PremFormControl
                    v-model="categoryData.slug"
                    type="text"
                    placeholder="Enter slug"
                    />
                    <p>The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.</p>
                  </FormField>
                    </div>
                  </div>

                    
                    <!-- PARENT CATEGORY -->
                      <FormField
                        label="Parent Category"
                        >
                            <SelectDropdown>
                              <template v-slot:title>
                                <div>{{ categoryData.level}}</div>
                              </template>
                              <template v-slot:options>
                                <ul class="flex flex-col">
                                    <li class="selectDdBtn">
                                      <FormField>
                                        <PremFormControl
                                        type="text"
                                        placeholder="Search"
                                        />
                                      </FormField>
                                    </li>
                                  <li class="selectDdBtn">{{ categoryData.level}}</li>
                                </ul>
                              </template>
                            </SelectDropdown>
                            <p> </p>
                      </FormField>


                  <!-- description -->
                  <FormField
                    label="Description"
                    horizontal
                    >
                      <PremFormControl
                        type="textarea"
                        v-model="categoryData.description"
                      />
                      <p>The description is will be displayed under each, Category, and in the meta data for each category page.</p>
                  </FormField>
                  </div>
                   <!-- category form end-->
              </CardBox>
            </div>
</template>

<script setup>
import { mdiArrowLeftBold, mdiImage } from "@mdi/js";
import CardBox from "@/components/Cards/CardBox.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import FormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import SelectDropdown from "~~/components/helpKnowledgeAndDocs/SelectDropdown.vue";


import { ref } from 'vue';
import { saveContent } from '~/utils/helpKnowledgeAndDocs/api';

const categoryData = ref({
  description: '',
  level: 'The top level',
  name: '',
  slug: ''
});

const saveCategory = async () => {
  try {
    const savedCategory = await saveContent(categoryData.value);
    console.log('Category saved:', savedCategory);
  } catch (error) {
    console.error('Error saving category:', error);
  }
};
</script>

<script>
export default {
    data(){
        return{
            category: {
               language: '<div>&#127482;&#127480;</div>',
               name: '',
               slug: '',
               level: 'Top level category',
               description: '',
            }
        }
    },

    methods:{
        publishCategory(){
          const data = {...this.category}
          console.log(data,'------ category data')
          localStorage.setItem('category',JSON.stringify(data, null, 2))
          this.$router.push('./ArticleListPage')
        }
    }
}
</script>


