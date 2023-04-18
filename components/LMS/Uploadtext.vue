<script setup>
import { computed, useSlots } from "vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";

import { mdiAccount } from "@mdi/js";
import FormUploadFiles from "@/components/LMS/FormUploadFiles.vue";
defineProps({
  label: {
    type: String,
    default: null,
  },
  labelFor: {
    type: String,
    default: null,
  },
  help: {
    type: String,
    default: null,
  },
  route: {
    type: Object,
    default: null,
  },
  footer: {
    type: String,
    default: null,
  },
  dragText: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
  iconRight: {
    type: String,
    default: null,
  },
  h: {
    type: String,
    default: null,
  },
  width: {
    type: String,
    default: "2.5rem",
  },
  widthDrag: {
    type: String,
    default: "1rem",
  },
  usefiles: Boolean,
  allfiles: Boolean,
  download: Boolean,
  video: Boolean,
  listDisplay: Boolean,
  downloadlist: Boolean,
});
const slots = useSlots();
const fileInput = ref(null);
const fileInputSvg = ref(null);
const fileInputDownload = ref(null);
const fileName = ref([]);
const downloadFile = ref([]);
const listDisplay = ref(false);
const downloadlist = ref(false);
const fileDownload = ref(
  "You can upload files with extensions: 3g2, 3gp, 3gpp, 3gpp2, asf, asx, avi, dv, f4p,f v4, flv, mjpeg, mkv, mov, movie, mp2, mp3g, mp4, mpe, mpeg, mpg, mpg4, ogg, ogv, ogx, qt, rm, viv, vivo, webm, wm, wmx, wvx, m4v"
);
const fileDownloads = ref(
  "You can upload files with the extensions: 3g2, 3gp, 3gpp, 3gpp2, asf, asx, avi, dv, f4p, f4v, flv, mjpeg, mjpg, mkv, mov, movie, mp2, mp3g, mp4, mpe, mpeg, mpg, mpg4, ogg, ogv, ogx, qt, rm, viv, vivo, webm, wm, wmv, wmx, wvx, m4v, aac, mp2, mp3, mpga, ogg, wav, m4a, pdf"
);
const selectFile = () => {
  fileInput.value.click();
};

const selectFilesvg = () => {
  fileInputSvg.value.click();
};
const selectFileDownload = () => {
  fileInputDownload.value.click();
};

//bulk importer
const handleFileUpload = (event) => {
  const fileInput = event.target;
  const acceptedTypes = fileInput.accept.split(",");

  for (const file of fileInput.files) {
    const extension = "." + file.type.split("/")[1];
    const validFileType = acceptedTypes.includes(extension);

    if (!validFileType) {
      alert(`File ${file.name} has an invalid format`);
    } else {
      fileInput.setCustomValidity("");

      console.log("Bulk importer", file.name);
      fileName.value.push(file.name);
      listDisplay.value = true;
    }
  }
};

const handleDrop = (event) => {
  event.preventDefault();
  event.stopPropagation();
  const files = event.dataTransfer.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileType = file.type.split("/")[0];
    if (
      fileType === "video" ||
      fileType === "audio" ||
      fileType === "application"
    ) {
      console.log(file.name);
      fileName.value.push(file.name);
      listDisplay.value = true;
    } else {
      console.log(`Invalid file type: ${file.type}`);
    }
  }
};

const deleteHandler = (i) => {
  if (i === 0) {
    fileName.value.splice(i, 1);
    listDisplay.value = false;
  }
  console.log(i);
  fileName.value.splice(i, 1);
  // Call the splice method if eName is an array
  console.log(fileName.value);
};

//download vidoe

const handleDropFiles = (event) => {
  event.preventDefault();
  event.stopPropagation();
  const files = event.dataTransfer.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileType = file.type.split("/")[0];
    console.log(file.type);
    if (
      !file.type ||
      file.type.match(
        /^(?!application\/x-apple-diskimage|image\/svg\+xml|text\/html)/
      )
    ) {
      console.log(file.name);
      downloadFile.value.push(file.name);
      downloadlist.value = true;
    } else {
      console.log(`Invalid file type: ${file.type}`);
    }
  }
};

const handleFilesvg = (event) => {
  const file = event.target.files[0];
  if (
    !file.type ||
    !file.type.match(
      /^(?!application\/x-apple-diskimage|image\/svg\+xml|text\/html)/
    )
  ) {
    alert("Invalid file type");
    return;
  }
  downloadFile.value.push(file.name);
  downloadlist.value = true;
  console.log(`Selected file: ${file.name}`);
};

const deleteHandlerDownload = (i) => {
  if (i === 0) {
    downloadFile.value.splice(i, 1);
    downloadlist.value = false;
  }
  downloadFile.value.splice(i, 1);
};

const handleFileDownload = (event) => {
  const fileInput = event.target;
  const acceptedTypes = fileInput.accept.split(",");
  const extension = "." + fileInput.files[0].type.split("/")[1];
  const validFileType = acceptedTypes.includes(extension);

  if (!validFileType) {
    alert("File format is invaild file");
  } else {
    fileInput.setCustomValidity("");
  }
  console.log(validFileType);
};

const handleDropVideo = (event) => {
  event.preventDefault();
  event.stopPropagation();
  const files = event.dataTransfer.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileType = file.type.split("/")[0];
    if (fileType === "video") {
      // handle the file as needed (e.g. upload to server, display in UI, etc.)
      console.log(file.name);
    } else {
      console.log(`Invalid file type: ${file.type}`);
    }
  }
};
</script>

<template>
  <div>
    <div class="listing_cover" v-if="listDisplay">
      <div
        v-for="(item, index) in fileName"
        :key="index"
        class="mb-6 flex items-center listing"
      >
        <IconRounded
          v-if="icon && main"
          :icon="icon"
          color="light"
          class="mr-3"
          bg
        />
        <BaseIcon
          v-else-if="icon"
          :path="icon"
          class="mr-2 cursor-pointer"
          size="70"
        />
        <FormUploadFiles
          v-model="fileName[index]"
          :icon-left="mdiAccount"
          help="Title"
        />
        <IconRounded
          v-if="icon && main"
          :icon="icon"
          color="light"
          class="ml-3"
          bg
        />
        <BaseIcon
          v-else-if="iconRight"
          :path="iconRight"
          @click="deleteHandler(index)"
          class="ml-2 cursor-pointer"
          size="30"
        />
      </div>
    </div>
    <div class="mb-6 last:mb-0">
      <div
        class="box dark:bg-slate-900/70 bg-white"
        :style="{
          boxSizing: 'border-box',
          border: '1px dashed #C28D00',
          width: '100%',
          height: '30%',
          borderRadius: '4px',
          textAlign: 'center',
        }"
      >
        <!-- bulk importer -->
        <div
          class="drag_drop"
          v-if="allfiles"
          @drop="handleDrop"
          @dragover.prevent
        >
          <div v-if="slots.default">
            <slot />
          </div>
          <div v-else class="drag_text">{{ dragText }}</div>
          <div :style="{ padding: '1rem' }">
            <strong>Or</strong>
          </div>
          <BaseButton
            @click="selectFile"
            label="SELECT FILE"
            type="submit"
            color="info"
          />
          <!-- <input type="file" ref="fileInputRef" style="display: none;" @change="handleFileUpload" /> -->

          <input
            multiple
            ref="fileInput"
            class="absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1"
            type="file"
            accept=".3g2,.3gp,.3gpp,.3gpp2,.asf,.asx,.avi,.dv,.f4p,.f4v,.flv,.mjpeg,.mjpg,.mkv,.mov,.movie,.mp2,.mp3g,.mp4,.mpe,.mpeg,.mpg,.mpg4,.ogg,.ogv,.ogx,.qt,.rm,.viv,.vivo,.webm,.wm,.wmv,.wmx,.wvx,.m4v,.aac,.mp2,.mp3,.mpga,.ogg,.wav,.m4a,.pdf"
            @input="handleFileUpload"
          />
        </div>

        <!-- Download lesson-->
        <div
          class="drag_drop"
          v-else-if="download"
          @drop="handleDropVideo"
          @dragover.prevent
        >
          <div v-if="slots.default">
            <slot />
          </div>
          <div v-else class="drag_text">{{ dragText }}</div>
          <div :style="{ padding: '1rem' }">
            <strong>Or</strong>
          </div>
          <BaseButton
            @click="selectFileDownload"
            label="SELECT FILE"
            type="submit"
            color="info"
          />

          <!-- <input type="file" ref="fileInputRef" style="display: none;" @change="handleFileUpload" /> -->

          <input
            ref="fileInputDownload"
            class="absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1"
            type="file"
            accept=".3g2,.3gp,.3gpp,.3gpp2,.asf,.asx,.avi,.dv,.f4p,.fv4,.flv,.mjpeg,.mkv,.mov,.movie,.mp2,.mp3g,.mp4,.mpe,.mpeg,.mpg,.mpg4,.ogg,.ogv,.ogx,.qt,.rm,.viv,.vivo,.webm,.wm,.wmx,.wvx,.m4v"
            @input="handleFileDownload"
          />
        </div>

        <!-- video/download lesson  -->

        <div
          class="drag_drop"
          v-else-if="video"
          @drop="handleDropFiles"
          @dragover.prevent
        >
          <div v-if="slots.default">
            <slot />
          </div>
          <div v-else class="drag_text">{{ dragText }}</div>
          <div :style="{ padding: '1rem' }">
            <strong>Or</strong>
          </div>
          <BaseButton
            @click="selectFilesvg"
            label="SELECT FILE"
            type="submit"
            color="info"
          />
          <input
            ref="fileInputSvg"
            class="absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1"
            type="file"
            accept="!application/x-apple-diskimage,!image/svg+xml,!text/html"
            @input="handleFilesvg"
          />
        </div>

        <div class="footer_text mb-6 last:mb-0" v-if="allfiles">
          {{ fileDownloads }}
        </div>
        <div class="footer_text mb-6 last:mb-0" v-if="download">
          {{ fileDownload }}
        </div>
        <div class="footer_text mb-6 last:mb-0" v-else-if="video">
          You can upload any type of file except .dmg, .svg, and .html files
        </div>
      </div>
      <div class="listing_cover_downlaod" v-if="downloadlist">
        <div
          v-for="(item, index) in downloadFile"
          :key="index"
          class="mb-6 flex items-center listing"
        >
          <IconRounded
            v-if="icon && main"
            :icon="icon"
            color="light"
            class="mr-3"
            bg
          />
          <BaseIcon
            v-else-if="icon"
            :path="icon"
            class="mr-2 cursor-pointer"
            size="70"
          />
          <FormUploadFiles
            v-model="downloadFile[index]"
            :icon-left="mdiAccount"
            help="Title"
          />
          <IconRounded
            v-if="icon && main"
            :icon="icon"
            color="light"
            class="ml-3"
            bg
          />
          <BaseIcon
            v-else-if="iconRight"
            :path="iconRight"
            @click="deleteHandlerDownload(index)"
            class="ml-2 cursor-pointer"
            size="30"
          />
        </div>
      </div>
      <div v-if="footer">
        <div class="footer_comment">
          Max size 2GB. We suggest compressing you video using
          <a href="">HandBrake</a>
        </div>
        <div class="footer_comment">
          It's all about the details. Pick your thumbnail image, add closed
          captions, update setting, and track your video performance analytics
          in the video library.
          <div>
            <a href=""
              >manage video settings. Learn more about the video library</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.drag_drop {
  padding: 2rem;
}
.footer_text {
  background-color: #fff8e6;
  padding: 1rem !important;
  color: #c28d00;
  word-wrap: break-word;
}
.listing_cover {
  padding: 10px;
  margin-bottom: 25px;
  background-color: #f2f3f5;
}
.listing_cover_downlaod {
  margin-top: 25px;
  padding: 10px;
  margin-bottom: 25px;
  background-color: #f2f3f5;
}
.listing {
  margin-top: 20px;
}
@media only screen and (max-width: 768px) {
  .footer_text {
    font-size: 0.9rem;
    line-height: 1.3;
  }
}

@media only screen and (max-width: 576px) {
  .footer_text {
    font-size: 0.8rem;
    line-height: 1.2;
  }
}
.footer_comment {
  margin-top: 1rem;
}
.footer_comment a {
  text-decoration: underline;
  color: blue;
}
</style>
