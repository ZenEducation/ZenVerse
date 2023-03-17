<script setup>
   import {ref} from 'vue';
   import BaseButtons from '@/components/Buttons/BaseButtons.vue';
   import BaseButton from '@/components/Buttons/BaseButton.vue';
   import CardBoxModal from '@/components/Cards/CardBoxModal.vue';

   const isModalActive = ref(false);
</script>

<template>
   <CardBoxModal v-model="isModalActive" title="Create Article">
      <p>Do you <b>article</b> Create ?</p>
   </CardBoxModal>
   <div id="article-sidebar" class="absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px md:translate-x-0 transition-transform duration-200 ease-in-out">
      <div class="sticky top-0 bg-white overflow-x-hidden rounded-tl-lg overflow-y-auto no-scrollbar shrink-0 border-r border-slate-200 md:w-72 xl:w-80 h-screen dark:border-slate-800 dark:bg-gray-900 dark:text-gray-200">
         <div>
            <div class="sticky top-0 z-10">
               <div
                  class="flex items-center bg-white border-b rounded-tl-lg dark:border-slate-800 px-5 h-16 dark:text-gray-200 dark:bg-gray-800"
               >
                  <p>Article list</p>
               </div>
            </div>
            <div class="px-5 py-4">
               <form class="relative">
                  <label for="article-search" class="sr-only">Search</label>
                  <input id="article-search" 
                     class="form-input w-full pl-9 focus:border-slate-300 rounded-md"
                     type="search"
                     placeholder="Search..."
                  />
               </form>
            </div>
            <div class="px-5 py-4">
               <BaseButtons type="justify-start lg:justify-middle" no-wrap>
                  <BaseButton label="Create" color="primary" :icon="mdiPlus" @click="isModalActive = true"/>
               </BaseButtons>
            </div>
         </div>
      </div>
   </div>
</template>