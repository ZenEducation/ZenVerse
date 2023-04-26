<template>
    <div>
        <QuillEditor :modules="modules" toolbar="full" theme="snow" v-model:content="content" />
    </div>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
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
  data(){
    return {
    }
  },
  computed: {
    content: {
      get(){
        return ''
      },
      set(data){
        console.log(data.ops?.[0]?.insert)
        this.$emit('value', data.ops?.[0]?.insert)
      }
    }
  }
})
</script>