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
import CourseImgAndDescription from "@/components/LMS/Course/CourseImgandDescription.vue"

const mainStore = useMainStore();
const courseDetails = computed(()=> mainStore.courseDetails)
const course = reactive({
  file: uploadImg,
  errMessage: null
});

function checkImageFileType(file) {
  // define the file types we want to check
  const acceptedImageTypes = ["jpg", "jpeg", "png", "bmp", "gif"];

  // get the file extension
  const fileExtension = file.name.split(".").pop().toLowerCase();

  // check if the file type is accepted
  const isAcceptedFileType = acceptedImageTypes.indexOf(fileExtension) > -1;

  // return the result
  return isAcceptedFileType;
}

const uploadImage = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    if (checkImageFileType(file)) {
     console.log("Image file type is accepted");
     const img = new Image();
     img.src = URL.createObjectURL(file);

  // create a new Canvas element and get its context
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // set the canvas dimensions to 760x420 pixels
  canvas.width = 760;
  canvas.height = 420;

  // draw the image onto the canvas
  img.onload = function() {
    // calculate the crop region
    const aspectRatio = img.width / img.height;
    let cropWidth, cropHeight, x, y;
    if (aspectRatio > 760 / 420) {
      cropWidth = img.height * (760 / 420);
      cropHeight = img.height;
      x = (img.width - cropWidth) / 2;
      y = 0;
    } else {
      cropWidth = img.width;
      cropHeight = img.width * (420 / 760);
      x = 0;
      y = (img.height - cropHeight) / 2;
    }

    // crop the image to the specified dimensions
    ctx.drawImage(img, x, y, cropWidth, cropHeight, 0, 0, 760, 420);

    // get the cropped image as a data URL
    const croppedImageDataURL = canvas.toDataURL();
    course.file = croppedImageDataURL
    course.errMessage = null;

    // do something with the cropped image
    // console.log(croppedImageDataURL);
  };
  } else {
     console.log("Image file type is not accepted");
     course.errMessage = "*Upload only image or gif files"
  }
  };

  reader.readAsDataURL(file);
};

const deleteImg = () => {
    course.file = uploadImg
}

const buttonColor = "danger";
</script>

<template>
 
      <div class=" mb-6 ">
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
              <div class="flex my-3 lg:justify-end">
               <span>{{ course.errMessage }}</span>
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
  
</template>