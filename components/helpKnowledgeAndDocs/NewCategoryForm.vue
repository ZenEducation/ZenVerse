<template>
  <div>
    <CardBox class="rounded-sm">
      <div class=" flex justify-between pb-6">
        <div class="flex items-center gap-10">
          <NuxtLink to="ArticleListPage">
            <button class="flex items-center">
              <BaseIcon :path="mdiArrowLeftBold" class="cursor-pointer" />
              <p>Back</p>
            </button>
          </NuxtLink>
          <div class="p-2 rounded-md bg-gray-300" v-html="category.language"></div>
        </div>

        <BaseButton @click="publishCategory" label="Create Category" color="info" />
      </div>

      <!-- category form start-->
      <div class="p-5">
        <div class="flex mb-5">

          <!-- add icon and sort order -->
          <div class="flex flex-col justify-between gap-2 pr-3 text-[12px]">
            <button
              class="w-[120px] h-[80px] rounded-md text-blue-500 bg-blue-500/20 dark:bg-white border flex flex-col justify-center items-center">
              <BaseIcon :path="mdiImage" class="cursor-pointer" />
              Add Icon
            </button>
            <button class="w-[120px] h-[80px] rounded-md bg-blue-500 text-white">Sort Order</button>
          </div>

          <div>
            <FormField label="Category Name">
              <PremFormControl v-model="category.name" type="text" placeholder="Enter category name" />
              <p>Make it easy for your customers to find what they're looking for by categorizing articles with a similar
                theme.</p>
            </FormField>

            <FormField label="Slug">
              <PremFormControl v-model="category.slug" type="text" placeholder="Enter slug" />
              <p>The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only
                letters, numbers, and hyphens.</p>
            </FormField>
          </div>
        </div>


        <!-- PARENT CATEGORY -->
        <FormField label="Parent Category">
          <SelectDropdown>
            <template v-slot:title>
              <div>{{ category.level }}</div>
            </template>
            <template v-slot:options>
              <ul class="flex flex-col">
                <li class="selectDdBtn">
                  <FormField>
                    <PremFormControl type="text" placeholder="Search" />
                  </FormField>
                </li>
                <li class="selectDdBtn">{{ category.level }}</li>
              </ul>
            </template>
          </SelectDropdown>
          <p> </p>
        </FormField>


        <!-- description -->
        <FormField label="Description" horizontal>
          <PremFormControl type="textarea" v-model="category.description" />
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
import { Amplify, DataStore } from 'aws-amplify'
import { Category } from '@/src/models'
</script>

<script>
export default {
  data() {
    return {
      category: {
        language: '<div>&#127482;&#127480;</div>',
        name: '',
        slug: '',
        level: 'Top level category',
        description: '',
      }
    }
  },

  methods: {
    async publishCategory() {
      const data = { ...this.category }
      console.log(data, '------ category data')
      // localStorage.setItem('category',JSON.stringify(data, null, 2)) -> this will override the old item
      // first load old items from local storage and then push new item
      // const oldItems = JSON.parse(localStorage.getItem('categories')) || []
      // oldItems.push(data)
      // localStorage.setItem('categories', JSON.stringify(oldItems, null, 2))
      // put validation here
      if (!data.name || !data.slug || !data.description) {
        alert('Please fill all the fields')
        return
      }
      Amplify.Logger.LOG_LEVEL = 'DEBUG'
      try {
        console.log('saving category')
        const result = await DataStore.save(new Category(data))
        console.log(result, '------ category saved')
      }
      catch (error) {
        console.log(error)
      }

      this.$router.push('./ArticleListPage')
    }
  }
}
</script>