<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue"
import MessageSidebar from "@/components/messages/MessagesSidebar.vue"
import { QuillEditor } from "@vueup/vue-quill"
import '@vueup/vue-quill'
</script>
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
                     <MessageSidebar/>

                     <!-- Article Panel -->
                     <div
                      class="grow relative flex flex-col md:translate-x-0 transition-transform duration-300 ease-in-out h-screen bg-gray-100 dark:bg-gray-800">
                        <QuillEditor theme="snow" toolbar="minimal"></QuillEditor>
                     </div>
                  </div>
               </main>
            </div>
         </div>
      </SectionMain>
   </NuxtLayout>
</template>