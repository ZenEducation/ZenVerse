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
});
const slots = useSlots();
const fileInputRef = ref(null);

const selectFile = () => {
  fileInputRef.value.click();
};

const handleFileUpload = () => {
  const files = fileInputRef.value.files;
  // Handle file upload logic here
};
const handleDragOver = (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.dataTransfer.dropEffect = "copy";
};

const handleDrop = (e) => {
  e.preventDefault();
  e.stopPropagation();
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const fileContent = reader.result;
      // Do something with the file content, like send it to a server
      //console.log("File content:", fileContent);
    };

    reader.DONE(file);
  }
};
onMounted(() => {
  console.log('Component mounted!');
});

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
      <div class="drag_drop"  @dragover="handleDragOver" @drop="handleDrop">
        <div v-if="slots.default">
          <slot />
        </div>
        <div v-else class="drag_text">Drag & drop PDF file here</div>
        <div :style="{ padding: '1rem' }">
          <strong>Or</strong>
        </div>
        <BaseButton @click="selectFile" label="SELECT FILE" type="submit" color="info" />
        <input type="file" ref="fileInputRef" style="display: none;" @change="handleFileUpload" />
      </div>
      <div class="footer_text mb-6 last:mb-0">
        
          You can upload files with extensions: 3g2, 3gp, 3 gpp,3gpp2,
          asf,asx,avi,dv,f4p,fv4,flv,mjpeg,mkv,mov,movie,mp2,mp3g,mp4,mpe
          ,mpeg,mpg,mpg4,ogg,ogv,ogx,qt,rm,viv,vivo,webm,wm,wmx,wvx,m4v
        
      </div>

    </div>
    <div>
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
