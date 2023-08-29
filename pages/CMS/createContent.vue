<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import FormFilePicker from "@/components/Forms/FormFilePicker.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxWidget from "@/components/Cards/CardBoxWidget.vue";
import {
  mdiArrowRight,
  mdiArrowRightTopBold,
  mdiBallot,
  mdiCloseBoxOutline,
} from "@mdi/js";
import DragDrop from "@/components/CMS/DragDrop.vue";
import Editor from "@/components/CMS/Editor.vue";
import { DataStore } from "@aws-amplify/datastore";
import { UntitledModel } from "../../models";
</script>

<template>
  <NuxtLayout name="cmslayout">
    <!--Form-->
    <SectionMain>
      <form>
        <div>
          <CardBox
            :icon="mdiBallot"
            class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
            is-form
            @submit.prevent="submit"
          >
            <div class="text-center">
              <b>
                <CardBoxComponentTitle
                  horizontal
                  title="Create Content"
                  class="text-black dark:text-white"
                >
                  <BaseDivider />
                </CardBoxComponentTitle>
              </b>
            </div>
            <BaseDivider class="bg-white" />
            <div
              class="flex flex-col justify-center grid-cols-1 gap-10 mb-0 xl:grid-cols-2 xl:flex-row"
            >
              <div>
                <PremFormField label="Title">
                  <PremFormControl placeholder="" type="text" v-model="title" />
                </PremFormField>

                <div
                  class="mt-3 mb-3 grid grid-cols-1 gap-6 xl:grid-rows-1 xl:grid-cols-4"
                >
                  <PremFormField
                    label="Type :"
                    class="dark:text-white text-base"
                  >
                    <select
                      class="dark:bg-gray-700"
                      v-model="selectedType"
                      @change="handleSelect"
                    >
                      <option class="text-xs" value="">--Select--</option>
                      <option class="text-xs">Video</option>
                      <option class="text-xs">Graphic</option>
                      <option class="text-xs">Text</option>
                      <option class="text-xs">ACC</option>
                    </select>
                  </PremFormField>

                  <PremFormField label="Status">
                    <input
                      class="p-2 border-2 border-black dark:bg-gray-700"
                      v-model="text"
                      placeholder="Initial Approval Pending"
                      readonly
                    />
                  </PremFormField>

                  <PremFormField label="Role :">
                    <select
                      label="Role :"
                      @change="onChange($event)"
                      class="form-select form-control dark:bg-gray-700"
                    >
                      <option class="text-xs" value="">--Select--</option>
                      <option class="text-xs" value="Creator Approval Pending">
                        Creator
                      </option>
                      <option class="text-xs" value="Editor Approval Pending">
                        Editor
                      </option>
                    </select>
                  </PremFormField>
                  <PremFormField label="Assign To :">
                    <select
                      label="Assign To :"
                      v-model="assignie"
                      @change="handleAssign"
                      class="form-select form-control dark:bg-gray-700"
                    >
                      <option class="text-xs" value="">--Select--</option>
                      <option class="text-xs" value="Ram">Ram</option>
                      <option class="text-xs" value="Sam">Sam</option>
                    </select>
                  </PremFormField>
                </div>
                <div
                  class="grid grid-cols-1 gap-6 mb-0 xl:grid-rows-1 xl:grid-cols-2"
                >
                  <PremFormField label="Category" v-if="!addCategory">
                    <div class="flex">
                      <select
                        v-model="selectedCategory"
                        @change="handleCategory()"
                      >
                        <option class="text-xs" value="">--Select--</option>
                        <option
                          v-for="option in categoryOptions"
                          :key="option.value"
                          :value="option.value"
                        >
                          {{ option.label }}
                        </option>
                      </select>
                      <button
                        @click="handleToggle"
                        class="p-2 mx-3 border-2 border-slate-600"
                      >
                        add category
                      </button>
                    </div>
                  </PremFormField>
                  <PremFormField label="Category :" v-else>
                    <PremFormControl
                      placeholder=""
                      type="text"
                      v-model="newAddCategory"
                    />
                    <button
                      @click="handleNewcategory"
                      class="p-2 px-5 border-2 border-slate-600 mt-2"
                    >
                      add
                    </button>
                  </PremFormField>
                  <PremFormField label="Publish: ">
                    <input
                      class="p-2 border-2 border-black dark:bg-gray-300 mb-3"
                      v-model="published"
                      placeholder="NO"
                      readonly
                    />
                  </PremFormField>
                </div>
                <PremFormField label="Content :">
                  <div class="p-3 container border-2 border-slate-600">
                    <DragDrop ref="childComponentRef"/>
                    <Editor />
                    <PremFormField label="URL :">
                      <PremFormControl
                        placeholder=""
                        type="text"
                        v-model="url"
                      />
                    </PremFormField>
                  </div>
                </PremFormField>
                <BaseDivider />
              </div>
              <div>
                <PremFormField class="">
                  <BaseButton
                    @click.prevent="handleSubmitForm()"
                    class="align-center"
                    label="Save"
                    type="submit"
                    color="info"
                  />
                </PremFormField>
              </div>
            </div>
          </CardBox>
        </div>
      </form>
    </SectionMain>
  </NuxtLayout>
</template>

<script>
export default {
  data() {
    return {
      selectedType: "",
      title: "",
      selectedCategory: "",
      addCategory: false,
      newAddCategory: "",
      text: "",
      assignie: "",
      published: "NO",
      categoryOptions: [
        { value: "Jee Coaching", label: "Jee Coaching" },
        { value: "Neet Coaching", label: "Neet Coaching" },
        { value: "Coursera", label: "Coursera" },
      ],
    };
  },
  methods: {
    handleSelect() {
      console.log(this.selectedType);
    },
    handleCategory() {
      console.log(this.selectedCategory);
    },
    onChange(e) {
      console.log(e.target.value);
      this.text = e.target.value;
    },
    handleToggle() {
      this.addCategory = !this.addCategory;
    },
    handleNewcategory() {
      console.log(this.newAddCategory);
      if (this.newAddCategory.length > 0) {
        this.categoryOptions.push({
          value: this.newAddCategory,
          label: this.newAddCategory,
        });
      }
      this.addCategory = !this.addCategory;
    },
    handleAssign() {
      console.log(this.assignie);
    },
    async handleSubmitForm() {
      const jsDate = new Date();
      const year = jsDate.getFullYear();
      const month = String(jsDate.getMonth() + 1).padStart(2, "0");
      const day = String(jsDate.getDate()).padStart(2, "0");
      const awsDateFormat = `${year}-${month}-${day}`;

      await DataStore.save(
        new UntitledModel({
          title: this.title,
          type: this.selectedType,
          category: this.selectedCategory,
          published: this.published,
          status: this.text,
          submittedOn: awsDateFormat,
          assigned_to: this.assignie,
        })
      );
      this.$refs.childComponentRef.submitFiles();
      this.$router.push("/CMS/allContent");
    },
  },
};
</script>
