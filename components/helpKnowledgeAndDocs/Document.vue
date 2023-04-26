<template>
    <div>
        <!-- slug -->
        <PremFormField
            label="Slug"
            horizontal
          >
            <PremFormControl
              type="text"
              :icon="mdiLink"
              v-model="docForm.slug"
            />
        </PremFormField>

        <!-- status -->
        <PremFormField
        label="Status"
        v-model="docForm.status"
        >
            <SelectDropdown>
              <template v-slot:title>
                {{ docForm.status }}
              </template>
              <template v-slot:options>
                <ul class="flex flex-col">
                  <li @click="docForm.status = 'Published'" class="selectDdBtn"><p>Published</p></li>
                  <li @click="docForm.status = 'Draft'" class="selectDdBtn"><p>Draft</p></li>
                  <li @click="docForm.status = 'Archive'" class="selectDdBtn"><p>Archive</p></li>
                </ul>
              </template>
            </SelectDropdown>
        </PremFormField>

        <!-- visibility -->
        <PremFormField
        label="Visibility"
        class="flex flex-col"
        >
        <div class="flex gap-10">
        <div>
        <input type="radio" value="Public" v-model="docForm.visibility"/>
        <label class="ml-2" for="public">Public</label>
        </div>
        <div>
        <input type="radio" value="Private" v-model="docForm.visibility"/>
        <label class="ml-2" for="private">Private</label>
        </div>
        </div>
        </PremFormField>

        <!-- Language -->
        <PremFormField
          label="Language"
          v-model="docForm.language"
          >
              <SelectDropdown>
                <template v-slot:title>
                  <div v-html="docForm.language"></div>
                </template>
                <template v-slot:options>
                  <ul class="flex flex-col">
                      <li class="selectDdBtn">
                        <PremFormField>
                          <PremFormControl
                          type="text"
                          placeholder="Search"
                          />
                        </PremFormField>
                      </li>
                    <li @click="docForm.language = docForm.language" class="selectDdBtn" v-html="docForm.language"></li>
                  </ul>
                </template>
              </SelectDropdown>
        </PremFormField>

        <!-- Author -->
        <PremFormField
          label="Author"
          v-model="docForm.author"
          >
              <SelectDropdown>
                <template v-slot:title>
                  <div v-html="docForm.author"></div>
                </template>
                <template v-slot:options>
                  <ul class="flex flex-col">
                      <li class="selectDdBtn">
                        <PremFormField>
                          <PremFormControl
                          type="text"
                          placeholder="Search"
                          />
                        </PremFormField>
                      </li>
                    <li @click="docForm.author = docForm.author" class="selectDdBtn" v-html="docForm.author"></li>
                  </ul>
                </template>
              </SelectDropdown>
        </PremFormField>

        <!-- meta description -->
        <PremFormField
          label="Meta Description"
          horizontal
          >
            <PremFormControl
              type="textarea"
              v-model="docForm.meta"
            />
        </PremFormField>

        <!-- img URL -->
        <div
            label="Social Media Banner"
            horizontal
          >
          <h1 class="text-md font-bold">Social Media Banner</h1>
          <div class="flex flex-col">
              <p class="my-2">Image URL</p>
            <PremFormControl
              class="mb-2"
              type="text"
              :icon="mdi"
              v-model="docForm.imageUrl"
            />
          </div>
                                
        </div>
        <BaseButtons>
        <BaseButton label="Upload" color="contrast" small/>
        <BaseButton label="Gallery" color="contrast" small/>
        </BaseButtons>
        <br>
        <br>

        <!-- related articles -->
        <PremFormField
          label="Related Articles"
          v-model="docForm.articles"
          >
              <SelectDropdown>
                <template v-slot:title>
                  <div>{{ docForm.articles }} Articles Selected</div>
                </template>
                <template v-slot:options>
                  <ul class="flex flex-col">
                      <li class="selectDdBtn">
                        <PremFormField>
                          <PremFormControl
                          type="text"
                          placeholder="Search"
                          />
                        </PremFormField>
                      </li>
                    <li class="selectDdBtn flex justify-between">
                        <button class="text-red-600">Clear</button>
                        <BaseButton label="Done"/>
                    </li>
                  </ul>
                </template>
              </SelectDropdown>
        </PremFormField>

        <button type="submit" @click="submit">submit</button>
    </div>
</template>

<script>
import { ref, defineComponent } from 'vue'
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { mdiArrowLeftBoldCircle, mdiLink } from "@mdi/js";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import FormCheckRadio from "@/components/Forms/FormCheckRadio.vue";
import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";
import SelectDropdown from "~~/components/helpKnowledgeAndDocs/SelectDropdown.vue";

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
      mdiArrowLeftBoldCircle,
      mdiLink,
    },

    data(){
        return{
          docForm: {
            slug: '',
            status: 'Draft',
            visibility: 'all',
            language: '<p><span class="mr-2 w-6">&#127482;&#127480;</span> English(US)</p>',
            author: '<p><span class="mr-2 p-2 text-[10px] rounded-sm bg-green-700 text-white">N</span> Name(You)</p>',
            meta: '',
            imageUrl: '',
            articles: 0,
          },
            
        }
    },

    methods: {
      submit(){
        console.log('docForm', this.docForm)
      }
    },

  //   computed: {
  //   form: {
  //     get(){
  //       return {}
  //     },
  //     set(data){
  //       console.log(data.ops?.[0]?.insert)
  //       this.docForm.content = data.ops?.[0]?.insert
  //       this.$emit('value', data.ops?.[0]?.insert)
  //     }
  //   }
  // }
})
</script>