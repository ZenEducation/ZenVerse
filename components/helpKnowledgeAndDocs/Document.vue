<template>
  <div>
    <!-- slug -->
    <PremFormField label="Slug" horizontal>
      <PremFormControl type="text" :icon="mdiLink" v-model="docForm.slug" />
    </PremFormField>

    <!-- status -->
    <PremFormField label="Status" v-model="docForm.status">
      <SelectDropdown>
        <template v-slot:title>
          {{ docForm.status }}
        </template>
        <template v-slot:options>
          <ul class="flex flex-col">
            <li @click="docForm.status = 'Published'" class="selectDdBtn">
              <p>Published</p>
            </li>
            <li @click="docForm.status = 'Draft'" class="selectDdBtn">
              <p>Draft</p>
            </li>
            <li @click="docForm.status = 'Archive'" class="selectDdBtn">
              <p>Archive</p>
            </li>
          </ul>
        </template>
      </SelectDropdown>
    </PremFormField>

    <!-- visibility -->
    <PremFormField label="Visibility" class="flex flex-col">
      <div class="flex gap-10">
        <div>
          <input type="radio" value="Public" v-model="docForm.visibility" />
          <label class="ml-2" for="public">Public</label>
        </div>
        <div>
          <input type="radio" value="Private" v-model="docForm.visibility" />
          <label class="ml-2" for="private">Private</label>
        </div>
      </div>
    </PremFormField>

    <!-- Category start -->
    <div>
      <PremFormField class="grid md:grid-cols-1" label="Category" v-model="docForm.category">
        <SelectDropdown @click="categoryModal = true">
          <template v-slot:title>
            {{ docForm.category }}
          </template>
        </SelectDropdown>
      </PremFormField>
      <div v-if="categoryModal === true"
        class="fixed top-0 bottom-0 left-0 w-full h-[100vh] bg-gray-700/50 grid place-items-center z-50">
        <CardBox class="rounded-sm w-11/12 md:w-6/12 opacity-100">
          <div class="flex justify-between pb-6">
            Categories
            <!-- Icon -->
            <BaseIcon @click="categoryModal = false" :path="mdiClose" class="cursor-pointer" w="w-12" />
          </div>

          <PremFormField>
            <PremFormControl type="text" placeholder="Search" />
          </PremFormField>

          <hr>
          <div>
            <p class="text-center py-4">No available category</p>
            <hr>

            <!-- category table start-->
            <table>
              <tbody class="text-[12px]">
                <tr>
                  <td id="title">{{ categories.name }} <p class="text-green-600" v-if="primary === true">-Primary</p>
                  </td>
                  <td>
                    <BaseButton @click="primary = !primary" label="Make Primary" />
                  </td>
                  <td>
                    <BaseIcon :path="mdiCog" />
                  </td>
                  <td>
                    <BaseIcon :path="mdiImage" />
                  </td>
                  <td>
                    <FormControl type="radio" />
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- category table end-->

            <!-- category form start-->
            <div v-if="openCategoryForm === true" class="p-5 h-[400px] overflow-auto bg-gray-100 dark:bg-gray-900">
              <PremFormField label="Category Name">
                <PremFormControl type="text" placeholder="Enter category name" v-model="categories.name" />
              </PremFormField>

              <PremFormField>
                <PremFormField label="Slug">
                  <PremFormControl type="text" placeholder="Enter slug" v-model="categories.slug" />
                </PremFormField>

                <!-- PARENT CATEGORY -->
                <PremFormField label="Parent Category" v-model="categories.level">
                  <SelectDropdown>
                    <template v-slot:title>
                      <div>{{ categories.level }}</div>
                    </template>
                    <template v-slot:options>
                      <ul class="flex flex-col">
                        <li class="selectDdBtn">
                          <PremFormField>
                            <PremFormControl type="text" placeholder="Search" />
                          </PremFormField>
                        </li>
                        <li @click="docForm.language = docForm.language" class="selectDdBtn">{{ category.level }}</li>
                      </ul>
                    </template>
                  </SelectDropdown>
                </PremFormField>
              </PremFormField>

              <PremFormField label="Description" horizontal>
                <PremFormControl type="textarea" v-model="categories.description" />
              </PremFormField>

              <BaseButtons class="py-4 flex justify-end">
                <BaseButton @click="openCategoryForm = false" color="info" label="Cancel" :outline="!isMain" />
                <BaseButton color="info" label="Save" />
              </BaseButtons>
            </div>
            <!-- category form end-->


            <!-- category form event start-->
            <div>
              <button v-if="openCategoryForm === false" @click="openCategoryForm = true" class="flex items-center py-4">
                <BaseIcon :path="mdiPlus" class="cursor-pointer" w="w-12" />
                Add Category
              </button>


            </div>
            <!-- category form event end-->

          </div>
        </CardBox>
      </div>
    </div>
    <!-- Category end -->

    <!-- Language -->
    <PremFormField class="mt-5" label="Language" v-model="docForm.language">
      <SelectDropdown>
        <template v-slot:title>
          <div v-html="docForm.language"></div>
        </template>
        <template v-slot:options>
          <ul class="flex flex-col">
            <li class="selectDdBtn">
              <PremFormField>
                <PremFormControl type="text" placeholder="Search" />
              </PremFormField>
            </li>
            <li @click="docForm.language = docForm.language" class="selectDdBtn" v-html="docForm.language"></li>
          </ul>
        </template>
      </SelectDropdown>
    </PremFormField>

    <!-- Author -->
    <PremFormField label="Author" v-model="docForm.author">
      <SelectDropdown>
        <template v-slot:title>
          <div v-html="docForm.author"></div>
        </template>
        <template v-slot:options>
          <ul class="flex flex-col">
            <li class="selectDdBtn">
              <PremFormField>
                <PremFormControl type="text" placeholder="Search" />
              </PremFormField>
            </li>
            <li @click="docForm.author = docForm.author" class="selectDdBtn" v-html="docForm.author"></li>
          </ul>
        </template>
      </SelectDropdown>
    </PremFormField>

    <!-- meta description -->
    <PremFormField label="Meta Description" horizontal>
      <PremFormControl type="textarea" v-model="docForm.meta" />
    </PremFormField>

    <!-- img URL -->
    <div label="Social Media Banner" horizontal>
      <h1 class="text-md font-bold">Social Media Banner</h1>
      <div class="flex flex-col">
        <p class="my-2">Image URL</p>
        <PremFormControl class="mb-2" type="text" :icon="mdi" v-model="docForm.imageUrl" />
      </div>

    </div>
    <BaseButtons>
      <BaseButton label="Upload" color="contrast" small />
      <BaseButton label="Gallery" color="contrast" small />
    </BaseButtons>
    <br>
    <br>

    <!-- related articles -->
    <PremFormField label="Related Articles" v-model="docForm.articles">
      <SelectDropdown>
        <template v-slot:title>
          <div>{{ docForm.articles }} Articles Selected</div>
        </template>
        <template v-slot:options>
          <ul class="flex flex-col">
            <li class="selectDdBtn">
              <PremFormField>
                <PremFormControl type="text" placeholder="Search" />
              </PremFormField>
            </li>
            <li class="selectDdBtn flex justify-between">
              <button class="text-red-600">Clear</button>
              <BaseButton label="Done" />
            </li>
          </ul>
        </template>
      </SelectDropdown>
    </PremFormField>

    <!-- <button type="submit" @click="submit">submit</button> -->
  </div>
</template>

<script setup>
import { mdiArrowLeftBoldCircle, mdiLink, mdiClose, mdiPlus, mdiCog, mdiImage } from "@mdi/js";
</script>

<script>
import { ref, defineComponent } from 'vue'
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import FormCheckRadio from "@/components/Forms/FormCheckRadio.vue";
import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";
import SelectDropdown from "~~/components/helpKnowledgeAndDocs/SelectDropdown.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";


export default defineComponent({
  name: 'Document',

  components: {
    BaseButtons,
    BaseButton,
    PremFormField,
    PremFormControl,
    FormCheckRadio,
    FormCheckRadioGroup,
    SelectDropdown,
    CardBox,
    BaseIcon,
  },

  data() {
    return {
      primary: false,
      docForm: {
        slug: '',
        status: 'Draft',
        visibility: 'all',
        category: 'No Primary Category',
        language: '<p><span class="mr-2 w-6">&#127482;&#127480;</span> English(US)</p>',
        author: '<p><span class="mr-2 p-2 text-[10px] rounded-sm bg-green-700 text-white">N</span> Name(You)</p>',
        meta: '',
        imageUrl: '',
        articles: 0,
      },

      categories: {
        name: '',
        slug: '',
        level: 'Top level category',
        description: ''
      },

      openCategoryForm: false,
      categoryModal: false,

    }
  },


  methods: {
    submit() {
      console.log('docForm', this.docForm)
    },
    primary() {

    }
  },

  computed: {
    form: {
      get() {
        return {}
      },
      set(data) {
        console.log(data.docForm)
        this.docForm.content = data.ops?.[0]?.insert
        this.$emit('value', data)
      }
    }
  }
})
</script>