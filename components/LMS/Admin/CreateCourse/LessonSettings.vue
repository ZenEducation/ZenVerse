<template>
  <div class="">
    <div class="text-xl font-medium">Lesson settings</div>
    <div class="flex mt-3">
      <FormCheckRadioGroup
        name="sample-checkbox-one"
        :options="checkboxOptions"
      />

      <BaseIcon
        size="22"
        class="cursor-pointer ml-1 text-gray-400"
        :path="mdiInformationOutline"
     
      />
    </div>
    <div class="text-left mt-3 flex aligns-center">
      <BaseIcon
        size="23"
        class="cursor-pointer text-gray-600"
        :path="mdiLock"

      />
      <div class="pl-1">Make this a prerequisite</div>
      <BaseIcon
        size="22"
        class="cursor-pointer mx-1 text-gray-400"
        :path="mdiInformationOutline"
        color="danger"
      />
      <div
        class="bg-green-700 px-2 text-sm font-bold py-1 rounded cursor-pointer text-white"
      >
        Start
      </div>
    </div>
    <div class="flex mt-3">
      <FormCheckRadioGroup name="sample-checkbox-one" :options="discussions" />
    </div>
    <div class="flex mt-3">
      <FormCheckRadioGroup name="sample-checkbox-one" :options="passingGrade" />
    </div>
    <div class="text-left mt-3 flex aligns-center">
      <BaseIcon
        size="23"
        class="cursor-pointer text-gray-500"
        :path="mdiLock"
        color="danger"
      />
      <div class="pl-1">Randomized questions bank</div>
      <BaseIcon
        size="22"
        class="cursor-pointer mx-1 text-gray-400"
        :path="mdiInformationOutline"
        color="danger"
      />
      <div
        class="bg-green-700 px-2 text-sm font-bold py-1 rounded cursor-pointer text-white"
      >
        Grow
      </div>
    </div>

    <div class="mt-5 font-medium">
      <div class="flex">
        <div class="">Lesson Icon & label</div>
        <div
          class="bg-green-700 px-2 text-sm font-bold py-1 rounded cursor-pointer ml-3 text-white"
        >
          Start
        </div>
      </div>
      <div class="flex mt-3">
        <div class="border py-2 px-2">
          <BaseIcon
            size="22"
            class="cursor-pointer text-gray-400"
            :path="iconType(lesson.type)"
            color="danger"
          />
          <BaseIcon
            size="22"
            class="cursor-pointer mx-1 mt-1 text-gray-400"
            :path="mdiMenuDown"
            color="danger"
          />
        </div>
        <div class="border w-6/12 p-3 text-gray-400 ">{{ lesson.type }}</div>
      </div>
    </div>
    <div
      class="bg-green-100 flex justify-between aligns-center mt-8 p-5 rounded"
    >
      <div class="text-green-800">Upgrade to access more lesson settings</div>

      <div class="flex justify-center aligns-center">
        <BaseIcon
          size="22"
          class="cursor-pointer mx-1 text-green-800"
          :path="mdiHelpCircleOutline"
          color="danger"
        />
        <div class="text-green-800">UPGRADE NOW</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  mdiInformationOutline,
  mdiLock,
  mdiMenuDown,
  mdiHelpCircleOutline,
  mdiVideoOutline,
  mdiFilePdfBox,
  mdiText,
  mdiVolumeHigh,
  mdiDownload,
  mdiPresentationPlay,
  mdiMultimedia,
  mdiBroadcast,
  mdiFormatListCheckbox,
  mdiFormatListChecks,
  mdiTextAccount,
  mdiTextBoxSearchOutline,
} from "@mdi/js";
import BaseIcon from "~~/components/Display/BaseIcon.vue";

import PremFormField from "@/components/Forms/FormField.vue";
import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";
const checkboxOptions = { freePreview: "Make this a free preview lesson" };
const discussions = {
  discussions:
    "Enable discussions for this lesson Apply to all lessons in this curse",
};
const passingGrade = { passingGrade: "This is requires a passing grade" };

const props = defineProps(['lesson'])


const iconType = (type)=>{
  if(type=="Video"){
    return mdiVideoOutline
  }
  if(type=="PDF"){
    return mdiFilePdfBox
  }
  if(type=="Text"){
    return mdiText
  }
  if(type=="Audio"){
    return mdiVolumeHigh
  }
  if(type=="Download"){
    return mdiDownload
  }
  if(type=="PPT"){
    return mdiPresentationPlay
  }
  if(type=="Multimedia"){
    return mdiMultimedia
  }
  if(type=="Live"){
    return mdiBroadcast
  }
  if(type=="Quiz"){
    return mdiFormatListCheckbox
  }
  if(type=="Survey"){
    return mdiFormatListChecks
  }
  if(type=="Assignment"){
    return mdiTextAccount
  }
  if(type=="Exam"){
    return mdiTextBoxSearchOutline
  }
}



</script>

<style></style>
