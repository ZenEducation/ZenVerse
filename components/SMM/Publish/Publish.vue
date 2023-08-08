<template>
  <div>
    <BaseButton :icon="mdiPlus" color="info" class="mt-10" />

    <div class="mt-10 relative w-4/6">
      <PremFormControl
        type="textarea"
        placeholder="Enter message here..."
       
        
      />
      <div class="text-right w-full absolute bottom-2 pr-3">
        <BaseIcon
          :path="mdiCommentEditOutline"
          w=""
          size="22"
          class="text-gray-500 mx-1 cursor-pointer"
        />
        <BaseIcon
          :path="mdiFormatBold"
          w=""
          size="22"
          class="text-gray-500 mx-1 cursor-pointer"
        />
        <BaseIcon
          :path="mdiFormatItalic"
          w=""
          size="22"
          class="text-gray-500 mx-1 cursor-pointer"
        />
        <BaseIcon
          :path="mdiEmoticonHappyOutline"
          w=""
          size="22"
          class="text-gray-500 mx-1 cursor-pointer"
        />
        <BaseIcon :path="mdiPound" w="" size="22" class="text-gray-500 mx-1 cursor-pointer" />
      </div>
    </div>
    <div
      class="w-4/6 bg-gray-200 dark:bg-slate-700 h-40 flex justify-center items-center text-center mt-10 rounded uploadSec"
    >
      <div class="">
        <div class="uploadTextSec">
          <BaseIcon
            :path="mdiMultimedia"
            w=""
            size="40"
            class="text-blue-400 mx-1"
          />
          <div class="text-xl text-blue-500 font-bold">
            Click or Drop Images or a Video
          </div>
        </div>
        <div class="uploadButton">
        <div class="flex ">
          <div class=" bg-red-100 ml-6 w-11 h-11 flex items-center justify-center rounded-full cursor-pointe cursor-pointer">
            <BaseIcon
          :path="mdiImagePlus "
          w=""
          size="26"
          class=" text-red-600"
        />
          </div>
          <div class=" bg-blue-100 ml-6 w-11 h-11 flex items-center justify-center rounded-full cursor-pointe cursor-pointer">
            <BaseIcon
          :path="mdiImageMultiple "
          w=""
          size="26"
          class="text-blue-600 "
        />
          </div>       <div class=" bg-pink-100 ml-6 w-11 h-11 flex items-center justify-center rounded-full cursor-pointe cursor-pointer">
            <BaseIcon
          :path="mdiVideoPlus  "
          w=""
          size="26"
          class=" text-pink-800"
        />
          </div>       <div class=" bg-yellow-100 ml-6 w-11 h-11 flex items-center justify-center rounded-full cursor-pointe cursor-pointer">
            <BaseIcon
          :path="mdiMagnify  "
          w=""
          size="26"
          class=" text-yellow-600"
        />
          </div>
        </div>
      </div>
      </div>
    </div>

    <div class="flex items-center w-4/6 mt-10">
      <div class="px-3">
      <PremFormField
          label="Category"
          class="w-40"
          horizontal
        >
          <PremFormControl type="list" :options="categoryOptions" />
        </PremFormField>
        </div>
      <div class="px-3">
        <PremFormField
          label="Watermark"
          class="w-40"
          horizontal
        >
          <PremFormControl type="list" :options="categoryOptions" />
        </PremFormField>
      </div>
      <div class="">
        <PremFormField
          label="Repost"
          class="w-40"
          horizontal
        >
          <PremFormControl type="list" :options="categoryOptions" />
        </PremFormField>
      </div>
      <div class="">
        <div class="mt-8 bg-blue-500 ml-6 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer "
        
      

        >
        <BaseIcon
          :path="mdiEmailOutline "
          w=""
          size="30"
          class=" "
        /></div>
      </div>
    </div>
    <div class="mt-10 flex mb-10">
    <BaseButton  color="info" class=""  label="Add to Queue" />
    <div class="ml-1 bg-blue-500 py-1 rounded">
    <BaseButton  color="info" class=""  :icon="mdiChevronDown " />
  </div>
 


    </div>
  </div>
</template>

<script setup>
import BaseButton from "@/components/Buttons/BaseButton.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import menuNavBar from "@/configs/menuNavBar.js";
import DownMenu from "@/components/SMM/DownMenu.vue";
import {
  mdiBallot,
  mdiBallotOutline,
  mdiAccount,
  mdiMail,
  mdiCheck,
  mdiProgressCheck,
  mdiReload,
  mdiCreditCardOutline,
  mdiSendVariant,
  mdiPlusBoxMultiple,
  mdiFormatListBulletedSquare,
  mdiFile,
  mdiCalendarMonthOutline,
  mdiFileDownloadOutline,
  mdiRss,
  mdiPlus,
  mdiCommentEditOutline,
  mdiFormatBold,
  mdiFormatItalic,
  mdiEmoticonHappyOutline,
  mdiPound,
  mdiMultimedia,
  mdiEmailOutline ,
  mdiChevronDown ,
  mdiImagePlus,
  mdiImageMultiple,
  mdiVideoPlus ,
  mdiMagnify ,
  mdiMenuDown
} from "@mdi/js";

const categoryOptions = ["Main", "Sample"];
const searchDownItems = [
  {
    id: 1,
    name: "All Tasks",
  },
  {
    id: 2,
    name: "Closed Tasks",
  },

  {
    id: 3,
    name: "My Open Tasks",
  },
  {
    id: 4,
    name: "Next 7 Days'+ Overdue",
  },
  {
    id: 5,
    name: "Open Tasks",
  },
  {
    id: 6,
    name: "Overdue Tasks",
  },
  {
    id: 7,
    name: "Today + Overdue Tasks",
  },
  {
    id: 8,
    name: "Today's Tasks",
  },
  {
    id: 9,
    name: "Tomorrow's Tasks",
  },

];
</script>

<style scoped>
.uploadButton{
  display: none;

}
.uploadTextSec{


}
.uploadSec:hover .uploadButton{
display: block;
}
.uploadSec:hover .uploadTextSec{
  display: none;
}
</style>
