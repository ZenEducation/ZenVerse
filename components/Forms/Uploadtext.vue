<script setup>
import { computed, useSlots } from "vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
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
  footer : {
    type : String,
    default : null,
  },
  dragText : {
    type :String,
    default :null
  },
  usefiles:Boolean,
  allfiles:Boolean
});
const slots = useSlots();
const fileInput = ref(null);
const fileInputSvg = ref(null)
const fileDownload  = ref(
'You can upload files with extensions: 3g2, 3gp, 3gpp, 3gpp2, asf, asx, avi, dv, f4p,f v4, flv, mjpeg, mkv, mov, movie, mp2, mp3g, mp4, mpe, mpeg, mpg, mpg4, ogg, ogv, ogx, qt, rm, viv, vivo, webm, wm, wmx, wvx, m4v'
)
const selectFile = () => {
  fileInput.value.click();
};

const selectFilesvg = () => {
  fileInputSvg.value.click();
};

const handleFileUpload = (event) => {
  // const files = fileInputRef.value.files;
  // Handle file upload logic here
  const fileInput = event.target;
      const acceptedTypes = fileInput.accept.split(',');
      const extension = '.' + fileInput.files[0].type.split('/')[1]  
      const validFileType = acceptedTypes.includes(extension);
      
      if (!validFileType) {
       alert("File format is invaild file")
      } else {
        fileInput.setCustomValidity('');
      }
      console.log(validFileType);
};
const handleFilesvg = (event) => {
  // const files = fileInputRef.value.files;
  // Handle file upload logic here
  const fileInput = event.target;
      const acceptedTypes = fileInput.accept.split(',');
      
      const extension = '.' + fileInput.files[0].type.split('/')[1]  
     
      const validFileType = acceptedTypes.includes(extension);
      if (!validFileType) {
       alert("File format is invaild file")
      } else {
        fileInput.setCustomValidity('');
      }
      console.log(validFileType);
};
 const handleDrop = (event) => {
  event.preventDefault();
  event.stopPropagation();
      const files = event.dataTransfer.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileType = file.type.split('/')[0];
        if (fileType === 'video' || fileType === 'audio' || fileType === 'application' && file.type === 'application/pdf') {
          // handle the file as needed (e.g. upload to server, display in UI, etc.)
          console.log(file.name);
        } else {
          console.log(`Invalid file type: ${file.type}`);
        }
      }
    }


</script>

<template>
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
      <div class="drag_drop"  @drop="handleDrop" @dragover.prevent>
        <div v-if="slots.default">
          <slot />
        </div>
        <div v-else class="drag_text">{{ dragText }}</div>
        <div :style="{ padding: '1rem' }">
          <strong>Or</strong>
        </div>
        <BaseButton  v-if = "usefiles"  @click="selectFilesvg" label="SELECT FILE" type="submit" color="info" />
        <BaseButton v-else @click="selectFile" label="SELECT FILE" type="submit" color="info" />
        <!-- <input type="file" ref="fileInputRef" style="display: none;" @change="handleFileUpload" /> -->
        
        <input
        v-if = "allfiles"
        ref="fileInput"
      
        class="absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1"
        type="file" accept=".3g2,.3gp,.3gpp,.3gpp2,.asf,.asx,.avi,.dv,.f4p,.fv4,.flv,.mjpeg,.mkv,.mov,.movie,.mp2,.mp3g,.mp4,.mpe,.mpeg,.mpg,.mpg4,.ogg,.ogv,.ogx,.qt,.rm,.viv,.vivo,.webm,.wm,.wmx,.wvx,.m4v"
        @input="handleFileUpload"
        
      />
      <input
        v-if = "usefiles"
        ref="fileInputSvg"
      
        class="absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1"
        type="file" accept=".dmg,.svg,.html"
        @input="handleFilesvg"
        
      />

      </div>
      <div class="footer_text mb-6 last:mb-0" v-if = "allfiles">
        {{ fileDownload }}
        
      </div>
      <div class="footer_text mb-6 last:mb-0" v-if = "usefiles">
        You can upload any type of file except .dmg, .svg, and .html files
    </div>

    </div>
    <div v-if = "footer">
      <div class = "footer_comment">
         Max size 2GB. We suggest compressing you video using <a href = "">HandBrake</a>
      </div>
      <div class = "footer_comment">
       It's all about the details. Pick your thumbnail image, add closed captions, 
       update setting, and track your video performance analytics in the video library.
       <div>
       <a href = "">manage video settings. Learn more about the video library</a></div>
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
  }}
.footer_comment{
  margin-top: 1rem;
  
}
.footer_comment a{
 text-decoration: underline;
  color : blue 
}
.footer_commenttext{

}
</style>
