<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import BlotFormatter from 'quill-blot-formatter'
import ImageUploader from 'quill-image-uploader';
import axios from 'axios';
import QuillBetterTable from 'quill-better-table'
const modules = { 
        module: BlotFormatter, 
        module: ImageUploader,
      
        options: {
          upload: file => {
          
    
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
            );
          }, 3500);
        });
      
    
          }
        }}
</script>
<template>
    <QuillEditor  toolbar="full" :modules="modules" theme="snow" />
</template>