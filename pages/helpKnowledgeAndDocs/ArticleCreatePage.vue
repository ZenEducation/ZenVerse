<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
          <!-- control sidebar -->
          <CardBox has-table class="md:col-span-1 p-2 text-sm rounded-sm">
            <div>
              <NuxtLink to="ArticleViewPage">
                <BaseButton
                  class="mb-4"
                  label="Back"
                  :icon="mdiArrowLeftBoldCircle"
                  color="contrast"
                  small
                />
              </NuxtLink>
              <BaseButtons>
                <BaseButton label="Save Draft" color="contrast" small />
                <BaseButton
                  label="Publish"
                  color="contrast"
                  small
                  @click="publishData"
                />
              </BaseButtons>
            </div>

            <CardBox has-table class="p-2 mt-6 rounded-sm">
              <ul class="grid grid-cols-2 mb-6">
                <li
                  @click="document"
                  id="document"
                  class="articleChangeBtn hover:activeArticleChangeBtn"
                >
                  Document
                </li>
                <li
                  @click="block"
                  class="articleChangeBtn hover:activeArticleChangeBtn"
                >
                  Block
                </li>
              </ul>

              <div>
                <Document v-if="activeTab === 'document'" ref="documentComp" />
                <Block v-if="activeTab === 'block'" />
              </div>
            </CardBox>
          </CardBox>

          <!-- text editor -->
          <CardBox has-table class="mb-6 p-4 rounded-md lg:mb-0 md:col-span-3">
            <ArticleEditor ref="content"  @value="getValue" />
          </CardBox>
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>

<script>
import SectionMain from "@/components/Sections/SectionMain.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import { mdiArrowLeftBoldCircle, mdiLink } from "@mdi/js";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import FormCheckRadio from "@/components/Forms/FormCheckRadio.vue";
import SelectDropdown from "~~/components/helpKnowledgeAndDocs/SelectDropdown.vue";
import Document from "@/components/helpKnowledgeAndDocs/Document.vue";
import Block from "@/components/helpKnowledgeAndDocs/Block.vue";
import ArticleEditor from "@/components/helpKnowledgeAndDocs/ArticleEditor.vue";

export default {
    components: {
        SectionMain,
        BaseButtons,
        BaseButton,
        CardBox,
        PremFormField,
        PremFormControl,
        FormCheckRadio,
        SelectDropdown,
        Document,
        Block,
        ArticleEditor,
        mdiArrowLeftBoldCircle,
        mdiLink
    },

  data() {
    return {
      activeTab: "document",
      editorData: "",
      content: '',
          year: [],
          month: [],
          day: [],
    };
  },

  methods: {
    document() {
      this.activeTab = "document";
    },

    block() {
      this.activeTab = "block";
    },

    getValue(value) {
        console.log('value')
      this.content = value
    },

    publishData(){
      console.log(this.$refs.documentComp, "documentcomp");
      console.log(this.$refs.content, "content");
      const data = {...this.$refs.documentComp.docForm, year: this.year, month: this.month, day: this.day, content: this.content}
      console.log(data,'------ yaah data')
      localStorage.setItem('content',JSON.stringify(data))
      this.$router.push('/ArticleViewPage')
    }
  },
};
</script>