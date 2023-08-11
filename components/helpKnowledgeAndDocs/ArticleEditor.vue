<template>
    <div>
        <QuillEditor
        :modules="modules"
        toolbar="full"
        theme="snow"
        :options="editorOption"
        v-model:content="content"
        content-type="html"
         />
    </div>
</template>
<script>
import { ref, defineComponent } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import BlotFormatter from 'quill-blot-formatter'

export default defineComponent({
  components: {
    QuillEditor,
  },
  
  setup: () => {
    const modules = {
      name: 'blotFormatter',  
      module: BlotFormatter, 
      options: {/* options */}
    }
    return { modules }
  },

  data: () => ({
      editorOption: {
        debug: 'info',
        placeholder: 'Create your article...',
        readonly: true,
      },
      delta: true,
  }),

  computed: {
    content: {
      get(){
        return JSON.parse(localStorage.getItem("content"))
      },
      set(data){
        console.log(data,'data')
        this.$emit('value', data)
      }
    },
  }
  
})
</script>

<style>
.ql-editor {
  height: 90vh;
}

.ql-size-huge {
  font-size: 32.5px;
}

.ql-size-small {
  font-size: 9.75px;
}

h1 {
  font-size: 26px;
}

h2, .ql-size-small {
  font-size: 19.5px;
}

h3 {
  font-size: 15.21px;
}

h4 {
  font-size: 13px;
}

h5 {
  font-size: 10.79px;
}

h6 {
  font-size: 8.71px;
}
</style>