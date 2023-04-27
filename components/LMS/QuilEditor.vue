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
              const formData = new FormData();
              formData.append("image", file);

              axios.post('/upload-image', formData)
              .then(res => {
                console.log(res)
                resolve(res.data.url);
              })
              .catch(err => {
                reject("Upload failed");
                console.error("Error:", err)
              })
            })
          }
        }}
</script>
<template>
    <QuillEditor  toolbar="full" :modules="modules" theme="snow" />
</template>