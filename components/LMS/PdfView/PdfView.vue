<script>
import VuePdfEmbed from "vue-pdf-embed";
export default {
  components: {
    VuePdfEmbed
  },
  data() {

    return {
      isLoading: true,
      page: 1,
      pageCount: 1,
      pdfSource:
        'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf',
      showAllPages: false
    }
  },
  methods: {
    handleDocumentRender(args) {
      // console.log(this.$refs);
      this.isLoading = false
      this.pageCount = this.$refs.pdfRef.pageCount
    },
    handlePasswordRequest(callback, retry) {
      callback(prompt(retry ? 'Enter password again' : 'Enter password'))
    },
    progress(progress) {
        console.log(progress)
        // callback(value);
    }
  }
}
</script>
<template>
<div class="app-header">
    
    <template v-if="isLoading"> Loading... </template>

    <template v-else>
      <div class="grid md:grid-cols-3 gap-16" >
        <button :disabled="page <= 1" @click="page--">❮</button>

        <span style="text-align:center">{{ page }} / {{ pageCount }}</span>

        <button :disabled="page >= pageCount" @click="page++">❯</button>
      </div>
    </template>
  </div>

  <div class="app-content">
    <vue-pdf-embed
      ref="pdfRef"
      :source="pdfSource"
      :page="page"
      @password-requested="handlePasswordRequest"
      @rendered="handleDocumentRender"
      @progress="progress"
    />
  </div>
</template>