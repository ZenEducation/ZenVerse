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
  mdiArrowRight, mdiArrowRightTopBold,
  mdiBallot,
  mdiCloseBoxOutline,
} from "@mdi/js";
import DragDrop from "@/components/CMS/DragDrop.vue";
import Editor from "@/components/CMS/Editor.vue";

</script>

<template>
  <NuxtLayout name="cmslayout">
    <!--Form-->
    <SectionMain>
      <form>
        <div>
          <CardBox :icon="mdiBallot" class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3" is-form @submit.prevent="submit">
            <div class="text-center">
              <b>
                <CardBoxComponentTitle horizontal title="Create Content" class="text-black dark:text-white">
                  <BaseDivider />
                </CardBoxComponentTitle>
              </b>
            </div>
            <BaseDivider class="bg-white" />
            <div class="flex justify-center grid-cols-2 gap-10 mb-0 xl:grid-cols-2">
              <div>

                <PremFormField label="Title">
                  <PremFormControl placeholder="" type="text" v-model="title" />
                </PremFormField>


                <div class="flex justify-center grid grid-cols-3 gap-6 mb-0 xl:grid-rows-1">
                  <PremFormField label="Type :" class="dark:text-white text-base">
                    <select class="dark:bg-gray-700">
                      <option class="text-xs" value="">--Select--</option>
                      <option class="text-xs">Video</option>
                      <option class="text-xs">Graphic</option>
                      <option class="text-xs">Text</option>
                      <option class="text-xs">ACC</option>
                    </select>
                  </PremFormField>

                  <PremFormField label="Status">
                    <input class="p-2 border-2 border-black dark:bg-gray-700" v-model=text
                      placeholder="Initial Approval Pending" readonly />
                  </PremFormField>

                  <PremFormField label="Role :">
                    <select label="Role :" @change="onChange($event)" class="form-select form-control dark:bg-gray-700">
                      <option class="text-xs" value="">--Select--</option>
                      <option class="text-xs" value="Creator Approval Pending">Creator</option>
                      <option class="text-xs" value="Editor Approval Pending">Editor</option>
                    </select>
                  </PremFormField>
                </div>

                <PremFormField label="Category">
                  <PremFormControl placeholder="" type="text" v-model="category" />
                </PremFormField>

                <PremFormField label="Content :">

                  <div class="p-3 container border-2 border-slate-600">
                    <DragDrop />
                    <Editor />

                    <PremFormField label="URL :">
                      <PremFormControl placeholder="" type="text" v-model="url" />
                    </PremFormField>
                  </div>

                </PremFormField>
                <BaseDivider />
              </div>
              <div>
                <PremFormField class="">
                  <BaseButton @click.prevent="" class="align-center" label="Save" type="submit" color="info" />
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
      text: '',
      onChange(e) {
        console.log(e.target.value);
        this.text = e.target.value;
      }
    }
  },
}
</script>
