<script setup>
import { mdiDotsVertical } from "@mdi/js";
import { mdiDelete,mdiEye } from "@mdi/js";
import { mdiChevronUp, mdiChevronDown,mdiKeyboardBackspace } from "@mdi/js";
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
import { courseMenuOptions } from "@/configs/sampleButtonMenuOptions.js";
import SectionMain from "@/components/Sections/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";
import NotificationBar from "@/components/NotificationBars/NotificationBar.vue";
import uploadImg from "@/assets/img/upload.png";
import PremFormControl from "@/components/Forms/FormControl.vue";
import CourseImgAndDescription from "@/components/LMS/CourseImgandDescription.vue"
import CardBoxWidget from "@/components/Cards/CardBoxWidget.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import adminMenu from "@/configs/adminMenu.js";
import { reactive, ref } from "vue";
import { useMainStore } from "~~/stores/main";
import { useLayoutStore } from "@/stores/layout.js";

const chapterName = ref("Untitled chapter");
const isDivVisible = ref(false);
const isUntitleFieldVisible = ref(true);
const isError = ref(false);
const isSuccess = ref(false);
const isSettings = ref(false);
const editedChapterIndex = ref(-1);
const buttonColor = "danger";
const courseDetails = computed(()=> mainStore.courseDetails)
const course = reactive({
  file: uploadImg,
  errMessage: null
});

const handleError = () => {
  isError.value = false;
  isSuccess.value = false;
};

let className = "grid grid-cols-1 gap-6 xl:grid-cols-2";
let chapters = reactive([]);

const saveChaptrerNames = () => {
  if (!chapterName.value) {
    isError.value = true;
    setTimeout(hideNotification,2000);
    return;
  }

  if (editedChapterIndex.value !== -1) {
    chapters[editedChapterIndex.value] = chapterName.value;
    isSuccess.value = true;
    return;
  }
  if (chapterName.value && isUntitleFieldVisible.value) {
    isDivVisible.value = true;
    isSuccess.value = true;
    chapters.push(chapterName.value);
    className = "grid grid-cols-1 gap-6 xl:grid-cols-3";
    isUntitleFieldVisible.value = false;
  }
  setTimeout(hideNotification,2000);
};

const hideNotification = () => {
  if(isSuccess.value) {
  isSuccess.value = false
  }

  if(isError.value) {
    isError.value = false
  }
}

const discardChapterName = () => {
  chapterName.value = "Untitled chapter";
  if (chapters.length === 0)
    className = "grid grid-cols-1 gap-6 xl:grid-cols-2";
};

const addChapter = () => {
  isUntitleFieldVisible.value = true;
  chapterName.value = "Untitled chapter";
  editedChapterIndex.value = -1;
};

const deleteChaptrerName = () => {
  window.confirm('Are you sure, you want to delete?')
  if (editedChapterIndex.value !== -1) {
    chapters.splice(editedChapterIndex.value, 1);
    editedChapterIndex.value = -1;
    isUntitleFieldVisible.value = false;
    chapterName.value = "Untitled Chapter";
  }
  if (chapters.length === 0) {
    isDivVisible.value = false;
    isUntitleFieldVisible.value = false;
    editedChapterIndex.value = -1;
    chapterName.value = "Untitled Chapter";
    return;
  }
  chapters.filter(item => item != chapterName.value)
};

let limit = chapters.length;
let emp = [];
for (let i = 0; i < limit + 1; i++) {
  emp.push(true);
}

const isAddLessonVisible = ref(emp);

const showAddLessonField = (index) => {
  editedChapterIndex.value = index;
  chapterName.value = chapters[index];
  const temp = [...isAddLessonVisible.value];
  temp[index] = !temp[index];
  isAddLessonVisible.value = temp;
};

const handleChange = (event) => {
  chapterName.value = event.target.value;
};

const checkboxOptions = { content: "Set new lessons to draft by default" };

const mainStore = useMainStore();
const layoutStore = useLayoutStore();

const triggerEvent = (eventname) => {
  if(eventname == "Course Image & Description") {
    isSettings.value = true;
  } else {
    isSettings.value = false;
  }
}

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

const emit = defineEmits(["menu-click"]);

const menuClick = (event, item) => {
  emit("menu-click", event, item);
  if(item.label != "Preview"){
  layoutStore.currAsideMenu = item.label;
  }
};

const previewMenu = {
    icon: mdiEye,
    label: "Preview",
    isAdditional: true,
    menu: [
      {
        label: "ALL COURSES ONLINE",
      },
      {
        label: "COURSES AS AN ENROLLED STUDENTS",
      },
    ],
  }

</script>

<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <div class="grid grid-cols-1"> 
      <div class="flex items-center justify-between w-full xl:mx-auto bg-blue-600 py-5 px-5 rounded text-white">
          <div>
            <BaseIcon :path="mdiKeyboardBackspace" :size="24" />
          </div>
          <div class="flex">New course</div> 
          <div>
            <input
              id="msg-search"
              class="form-input w-full pl-9 border-slate-300 focus:border-slate-100 placeholder-white rounded-md bg-blue-600 text-white"
              type="search"
              placeholder="Search"
            />
          </div>
        </div>
      </div> 
      <div class="flex flex-col md:flex-row">
      <div class="grid xl:grid-cols-8 md:grid-cols-1 mt-5"> 
        <NavBarItem v-for="(item, index) in adminMenu" :key="index" :item="item" @menu-click="menuClick" /> 
      </div>
      <div class="grid xl:grid-cols-1 md:grid-cols-1 mt-5">
        <NavBarItem :key="index" :item="previewMenu" @menu-click="menuClick" /> 
      </div> 
      </div>
        <SectionTitleLineWithButton main>
          <!-- <div v-if="layoutStore.currAsideMenu === 'Curriculum'" v-bind:class="className">
            <div v-if="isDivVisible">
              <BaseButton
                color="danger"
                type="button"
                :icon="mdiDelete"
                label="DELETE"
                @click="deleteChaptrerName"
              /> 
            </div>
            <div class="hidden sm:block">
              <BaseButton
                color="info"
                label="Discard changes"
                type="button"
                outline
                @click="discardChapterName"
              />
            </div>
            <div>
              <BaseButton
                color="info"
                type="button"
                label="Save"
                @click="saveChaptrerNames"
              />
            </div>
          </div> -->
        </SectionTitleLineWithButton>
        <div v-if="layoutStore.currAsideMenu === 'Curriculum'" class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-6">
          <CardBox class="lg:col-span-3 xl:col-span-2 overflow-y-auto" style="height: 400px;">
            <div> 
              <BaseButton
                v-if="isUntitleFieldVisible"
                :label="chapterName ? chapterName : 'New Chapter'"
                color="contrast"
              :styles="['w-full', 'font-medium']"
              />
            </div>
            <BaseDivider />
            <div v-for="(item, index) in chapters" :key="index">
              <div>
                <BaseButton
                  :icon="
                    !isAddLessonVisible[index] ? mdiChevronDown : mdiChevronUp
                  "
                  :label="editedChapterIndex === index ? chapterName : item"
                  color="contrast"
                  @click="() => showAddLessonField(index)"
                  :styles="[
                    'w-full',
                    'flex-row-reverse',
                    'justify-between',
                    'font-medium',
                  ]"
                />
              </div>
              <div
                class="flex justify-between items-center gap-4 mt-4"
                v-if="isDivVisible && isAddLessonVisible[index]"
              >
                <div>
                  <BaseButton color="info" type="submit" label="Add lesson" />
                </div>
                <div class="hidden sm:block">
                  <BaseButton color="info" label="Copy lesson from" outline />
                </div>
              </div>
              <BaseDivider />
            </div>
            <p
              class="text-sm text-blue-700 my-3 cursor-pointer hover:underline"
            >
              <b>course completion certificate</b>
            </p>

            <BaseDivider />
            <BaseButtons type="justify-between" no-wrap>
              <BaseButton
                color="info"
                type="submit"
                label="Add chapter"
                @click="addChapter"
                :styles="['w-full']"
              />
              <PremButtonMenu
                :options="courseMenuOptions"
                :icon="mdiDotsVertical"
                small
              />
            </BaseButtons>
          </CardBox>

          <CardBox
            :icon="mdiBallot"
            class="mb-6 lg:mb-0 lg:col-span-3 xl:col-span-4"
            is-form
            @submit.prevent="submit"
          >
            <CardBoxComponentTitle
              class="mb-12"
              :title="
                editedChapterIndex !== -1
                  ? 'Edit' + ' : ' + chapterName
                  : 'New Chapter' + ' : ' + chapterName
              "
            /> 
            <PremFormField label="Chapter title" horizontal>
              <input
                v-model="chapterName"
                @change="handleChange"
                help="Enter chapter name"
                placeholder="Untitled chapter"
                required
                type="text"
                class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 bg-white dark:bg-slate-800"
              />
            </PremFormField>
            <FormCheckRadioGroup
              v-if="isDivVisible"
              name="sample-checkbox-one"
              class="pb-3"
              :options="checkboxOptions"
            />

            <div v-if="layoutStore.currAsideMenu === 'Curriculum'" class="flex item-center my-10 flex-wrap xs:grid grid-cols-1 gap-3">
            <div v-if="isDivVisible">
              <BaseButton
                color="danger"
                type="button"
                :icon="mdiDelete"
                label="Delete"
                @click="deleteChaptrerName"
              /> 
            </div>
            <div>
              <BaseButton
                color="info"
                label="Discard changes"
                type="button"
                outline
                @click="discardChapterName"
              />
            </div>
            <div>
              <BaseButton
                color="info"
                type="button"
                label="Save"
                @click="saveChaptrerNames"
              />
            </div>
          </div>

            <NotificationBar color="danger" v-if="isError" @click="handleError">
              Chapter name is required
            </NotificationBar>

            <NotificationBar color="info" v-if="isSuccess" @click="handleError">
              Successfully created the
              <b>Chapter</b></NotificationBar
            >
          </CardBox>
        </div>
        
        <div v-if="layoutStore.currAsideMenu === 'Settings'" class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-6">
         <CardBox class="lg:col-span-3 xl:col-span-2">
           <div class="py-3 xl text-gray-500" v-for="(item,index) in mainStore.settingOptions" :key="index" @click="triggerEvent(item.name)">
            <b class="cursor-pointer hover:underline">{{ item.name }}</b>
          </div>
         </CardBox>
         <CardBox v-if="isSettings" class="mb-6 lg:mb-0 lg:col-span-3 xl:col-span-4">
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
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
