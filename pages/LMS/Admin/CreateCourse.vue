<script setup>
import { mdiDotsVertical } from "@mdi/js";
import { mdiDelete, mdiEye } from "@mdi/js";
import {
  mdiChevronUp,
  mdiChevronDown,
  mdiKeyboardBackspace,
  mdiMultiplication,
  mdiNotePlusOutline,
} from "@mdi/js";
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
import CourseImgAndDescription from "@/components/LMS/CourseImgandDescription.vue";
import CardBoxWidget from "@/components/Cards/CardBoxWidget.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import adminMenu from "@/configs/adminMenu.js";
import { reactive, ref } from "vue";
import { useMainStore } from "~~/stores/main";
import { useLayoutStore } from "@/stores/layout.js";
import { createCourse } from "~~/stores/createCourse";

// components
import Curriculum from "@/components/LMS/Admin/CreateCourse/Curriculum.vue";
import BulkImporter from "~/components/LMS/Admin/CreateCourse/BulkImporter.vue";
import Settings from "@/components/LMS/Admin/CreateCourse/Settings.vue";
import Drip from "@/components/LMS/Admin/CreateCourse/Dripping.vue";
import Pricing from "@/components/LMS/Admin/CreateCourse/Pricing.vue";
import Publish from "@/components/LMS/Admin/CreateCourse/Publish.vue";

const section = ref("first");

const chapterName = ref("Untitled chapter");
const isDivVisible = ref(false);
const isUntitleFieldVisible = ref(true);
const isError = ref(false);
const isSuccess = ref(false);
const isSettings = ref(false);
const editedChapterIndex = ref(-1);
const buttonColor = "danger";
const courseDetails = computed(() => mainStore.courseDetails);
const course = reactive({
  file: uploadImg,
  errMessage: null,
});

const handleError = () => {
  isError.value = false;
  isSuccess.value = false;
};

let className = "grid grid-cols-1 gap-6 xl:grid-cols-2";
let chapters = reactive([]);
const courseStore = createCourse();
const saveChaptrerNames = () => {
  if (!chapterName.value) {
    isError.value = true;
    setTimeout(hideNotification, 2000);
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
  setTimeout(hideNotification, 2000);
};

const hideNotification = () => {
  if (isSuccess.value) {
    isSuccess.value = false;
  }

  if (isError.value) {
    isError.value = false;
  }
};

const discardChapterName = () => {
  chapterName.value = "Untitled chapter";
  if (chapters.length === 0)
    className = "grid grid-cols-1 gap-6 xl:grid-cols-2";
};

const addChapter = () => {
  // isUntitleFieldVisible.value = true;
  // chapterName.value = "Untitled chapter";
  // editedChapterIndex.value = -1;
  // courseStore.section

  courseStore.addChapter();
};

const addChapterName = () => {
  courseStore.addChapterName(chapterName.value);
};

const deleteChaptrerName = () => {
  window.confirm("Are you sure, you want to delete?");
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
  chapters.filter((item) => item != chapterName.value);
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
  if (eventname == "Course Image & Description") {
    isSettings.value = true;
  } else {
    isSettings.value = false;
  }
};

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
      img.onload = function () {
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
        course.file = croppedImageDataURL;
        course.errMessage = null;

        // do something with the cropped image
        // console.log(croppedImageDataURL);
      };
    } else {
      console.log("Image file type is not accepted");
      course.errMessage = "*Upload only image or gif files";
    }
  };

  reader.readAsDataURL(file);
};

const deleteImg = () => {
  course.file = uploadImg;
};

const emit = defineEmits(["menu-click"]);

const menuClick = (event, item) => {
  emit("menu-click", event, item);
  if (item.label != "Preview") {
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
};
</script>

<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <div class="grid grid-cols-1">
          <div
            class="flex items-center justify-between w-full xl:mx-auto bg-blue-600 py-5 px-5 rounded text-white"
          >
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
          <div class="grid xl:grid-cols-8 md:grid-cols-2 mt-5">
            <NavBarItem
              v-for="(item, index) in adminMenu"
              :key="index"
              :item="item"
              @menu-click="menuClick"
              class="px-0"
            />
          </div>
          <div class="grid xl:grid-cols-1 md:grid-cols-1 mt-5">
            <NavBarItem
              :key="index"
              :item="previewMenu"
              @menu-click="menuClick"
            />
          </div>
        </div>

        <div class="components_sec mt-4">
          <Curriculum v-if="layoutStore.currAsideMenu === 'Curriculum'" />
          <BulkImporter v-if="layoutStore.currAsideMenu === 'Bulk importer'" />
          <Settings v-if="layoutStore.currAsideMenu === 'Settings'" />
          <Drip v-if="layoutStore.currAsideMenu === 'Drip'"  />
          <Pricing v-if="layoutStore.currAsideMenu === 'Pricing'" />
          <Publish v-if="layoutStore.currAsideMenu === 'Publish'" />
        </div>

   

      
      </SectionMain>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.Add_chapter_button {
}
</style>
