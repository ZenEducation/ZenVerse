<template>
   <NuxtLayout name="zen">
      <SectionMain>
         <div class="flex h-screen">
            <div
             ref="contentArea"
             class="relative flex flex-col flex-1 rounded-lg overflow-x-hidden overflow-y-hidden">
               <main>
                  <div class="relative flex bg-blue-700">
                     <!-- Article Create Page Sidebar-->
                     <ArticleSideBar/>

                     <!-- Article Panel -->
                     <div
                      class="grow relative flex flex-col md:translate-x-0 transition-transform duration-300 ease-in-out h-screen bg-gray-100 dark:bg-gray-800"
                      >
                        <div>
                           <ArticleHeader/>
                        </div>
                        <div class="px-4 py-5">
                           <FormField label="Title" horizontal>
                              <FormControl v-model="article.title"  horizontal></FormControl>
                           </FormField>
                           <FormField label="SubTitle" horizontal>
                              <FormControl v-model="article.subtitle"  horizontal></FormControl>
                           </FormField>
                        </div>
                        <div class="px-4 py-5">
                           <div class="pt-3">
                              <p>Text</p>
                           </div>
                           <QuillEditor theme="snow" :options="editorOptions" v-model="editorValue"></QuillEditor>
                        </div>
                     </div>
                  </div>
               </main>
            </div>
         </div>
      </SectionMain>
   </NuxtLayout>
</template>
<script setup>
import { reactive, ref } from "vue";
import SectionMain from "@/components/Sections/SectionMain.vue";
import ArticleSideBar from "@/components/Article/ArticleSidebar.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import FormField from "@/components/Forms/FormField.vue";
import { QuillEditor } from "@vueup/vue-quill"
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const article = reactive({
   title:'Your Title',
   subtitle: '',
})

const editorValue = ref('');

const editorOptions = {
   modules: {
      toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'code-block'],
      ['link', 'image', 'video'],
      ['clean'],
      ]
   }
}
</script>