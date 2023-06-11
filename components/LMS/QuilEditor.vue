<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import BlotFormatter from 'quill-blot-formatter'
import ImageUploader from 'quill-image-uploader';
import axios from 'axios';
import QuillBetterTable from 'quill-better-table'
const toolbarOptions = [
        [{'direction': 'rtl'}],
        [{'size': ['small', false, 'large', 'huge']}],
        [{'header':[1,2,3,4,5,6,false]}],
        [{'font': []}],
        [{'header':1},{'header':2}],
        [{'color':[]},{'background':[]}],
        ['bold','italic','underline','strike'],
        [{'script': 'sub'}, {'script': 'super'}],
        [{'list':'ordered'},{'list':'bullet'}],
        [{'align':[]}],
        [{'indent':'-1'},{'indent':'+1'}],
        ['blockquote'],
        ['image','video','link'],
        ['code-block'],
        ['clean']
    ]
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
      <QuillEditor style="min-height: 30vh;" theme="snow" :toolbar="toolbarOptions"/>
</template>