<script setup>
import { computed, reactive } from "vue";
import { useRouter } from "vue-router";
import { useMainStore } from "@/stores/main.js";
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { mdiDelete } from "@mdi/js";
import FormFilePicker from "@/components/Forms/FormFilePicker.vue";
import uploadImg from "@/assets/img/upload.png";
import CourseImgAndDescription from "@/components/LMS/CourseImgandDescription.vue"

const mainStore = useMainStore();
const courseDetails = computed(()=> mainStore.courseDetails)
const course = reactive({
  file: uploadImg,
});

const uploadImage = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    course.file = reader.result;
  };

  reader.readAsDataURL(file);
};

const deleteImg = () => {
    course.file = uploadImg
}

const buttonColor = "danger";
</script>

<template>
  <NuxtLayout name="zen">
    <SectionMain>
      <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4">
        <CardBox
          :icon="mdiBallot"
          class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
          is-form
          @submit.prevent="submit"
        >
          <div class="grid grid-cols-1 mb-6 lg:grid-cols-2 gap-3">
            <div class="text-3xl mb-4">Course image & description</div>
            <div class="flex lg:justify-end">
              <BaseButton label="Save" type="submit" color="info" />
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 mb-8">
            <CourseImgAndDescription :heading="courseDetails[0].heading" :description="courseDetails[0].description" />
            <div class="flex flex-col lg:justify-end">
              <div class="flex mb-3 lg:justify-end">
                <input
                  type="file"
                  ref="fileInput"
                  style="display: none"
                  @change="uploadImage"
                />
                <img
                  style="width: 200px; height: auto"
                  :src="course.file"
                  @click="$refs.fileInput.click()"
                />
              </div>
              <div class="flex lg:justify-end">
                <BaseButton  @click="deleteImg()"
                  label="Delete"
                  :color="buttonColor"
                  :icon="mdiDelete"
                />
              </div>
            </div>
          </div>

          <div class="grid grid-col-1 lg:grid-cols-2 mb-8">
            <CourseImgAndDescription :heading="courseDetails[1].heading" :description="courseDetails[1].description" />
          </div>

          <div>
            <PremFormControl
              error
              type="textarea"
              placeholder="Course description"
            />
          </div>
        </CardBox>
      </div>
    </SectionMain>
  </NuxtLayout>
</template>