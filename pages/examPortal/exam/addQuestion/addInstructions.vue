<template>
  <div class="absolute top-0 left-0 w-full min-h-[48px] bg-white">
    <div class="border-b w-full flex justify-between items-center px-5 py-2">
      <NuxtLink to="/examportal/exam/edit-page">
        <div
          class="text-[13px] flex items-center justify-center cursor-pointer"
        >
          <img
            class="w-[14px] h-[14px]"
            src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/cb_back.svg"
            alt=""
          />
          <p class="p-2.5">Test Name | Q1</p>
        </div>
      </NuxtLink>
      <div class="pr-16">
        <BaseButton label="New" color="info" />
      </div>
    </div>
    <div class="border-b w-full flex justify-between items-center px-16 py-2">
      <div class="flex justify-center items-center"></div>
      <div class="flex justify-center items-center gap-5">
        <BaseButton :icon="mdiTrashCan" color="danger" />
        <BaseButton label="Save" color="info" />
      </div>
    </div>
  </div>
  <div class="pt-28 h-screen w-full flex">
    <!-- sidebar -->
    <div class="w-1/4 px-4 py-6 overflow-y-auto scroll-m-0 scrollbar-w-1">
      <!-- if Settings  -->

      <div class="w-full" v-html="instruction" />
      
    </div>
    <div class="w-3/4 p-4 overflow-y-auto scroll-m-0 scrollbar-w-1">
      <!-- Main Content -->
      <QuilEditor v-model="instruction" styleP="height: 60vh;"  />

    </div>
  </div>
</template>
<script setup>
import {
  mdiAbacus,
  mdiTrashCan,
  mdiTrashCanOutline,
  mdiCloseCircleMultipleOutline,
  mdiPlusCircleOutline,
  mdiMinusCircleOutline,
} from "@mdi/js";
import BaseButton from "~~/components/Buttons/BaseButton.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import PremFormControlIcon from "~~/components/Forms/PremFormControlIcon.vue";
import PremFormControl from "~~/components/Forms/PremFormControl.vue";
import PremFormField from "~~/components/Forms/PremFormField.vue";
import QuilEditor from "~~/components/ExamPortal/QuilEditor.vue";
import { ref } from "vue";
import CardBox from "@/components/Cards/CardBox.vue";

const instruction = ref("s");

</script>
