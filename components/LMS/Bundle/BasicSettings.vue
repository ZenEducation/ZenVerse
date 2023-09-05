<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";

import image from "@/assets/img/bundleImage.png";

const profileInput = ref(null);
const profilePreview = ref(image);

const handleFileUpload = (event, type) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = () => {
      profilePreview.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const openFileInput = (inputRef) => {
  const fileInput = profileInput.value;
  fileInput.value = "";
  fileInput.click();
};

const props = defineProps({
  data: Object,
});
const emit = defineEmits(["form-data-changes"]);

const formData = ref(props.data);
console.log(formData.value);
let { name, shortId, description, shortDescription } = formData.value;
// console.log("basic" , name , shortId);

const emitFormDataChanges = () => {
  emit("form-data-changes-basic", {
    name: name,
    shortId,
    description,
    shortDescription,
  });
};
</script>
<template>
  <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4">
    <CardBox class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3" is-form @submit.prevent="submit">
      <PremFormField label="Test Series Name *">
        <PremFormControl required type="text" v-model="name" @input="emitFormDataChanges" />
      </PremFormField>

      <PremFormField label="Test Series ID *">
        <PremFormControl required type="text" v-model="shortId" @input="emitFormDataChanges" />
      </PremFormField>

      <PremFormField label="Short Description ">
        <PremFormControl type="textarea" v-model="shortDescription" @input="emitFormDataChanges" />
      </PremFormField>
      <PremFormField label="Description ">
        <PremFormControl type="textarea" v-model="description" @input="emitFormDataChanges" />
      </PremFormField>

      <p class="font-bold">Test Series Image</p>
      <p class="text-sm mb-7">
        Upload a relatable Test Series image for visual presentation
      </p>

      <div class="w-56 border rounded-md overflow-hidden">
        <img :src="profilePreview" alt="" v-if="profilePreview" />
        <div class="flex justify-around items-center h-12">
          <BaseButton @click="() => {
              profilePreview = '';
            }
            " v-if="profilePreview" color="danger" label="REMOVE" small />
          <BaseButton @click="() => {
              openFileInput('profileInput');
            }
            " color="info" label="Update" small />
          <input ref="profileInput" type="file" @change="handleFileUpload($event, 'profile')" accept="image/*"
            class="hidden" />
        </div>
      </div>
    </CardBox>
  </div>
</template>

<style lang="scss" scoped></style>
