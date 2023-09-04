<template>

  <div class="absolute top-0 left-0 w-full min-h-[48px] bg-white">
    <div class="border-b w-full flex justify-between items-center px-5 py-2">
      <NuxtLink :to="'/examportal/Exam/edit-page/' + examId " >
        <div
          class="text-[13px] flex items-center justify-center cursor-pointer"
        >
          <img
            class="w-[14px] h-[14px]"
            src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/cb_back.svg"
            alt=""
          />
          <p class="p-2.5">Back </p>
        </div>
      </NuxtLink>
      <div class="pr-16 flex gap-3 items-center">
      </div>
    </div>
  </div>
  <div class="pt-14 h-screen w-full flex max-md:block max-md:overflow-y-scroll">
    <!-- sidebar -->
    <div
      class="w-1/5 max-md:w-full  px-4 py-6 overflow-y-auto scroll-m-0 scrollbar-w-1 border-r-2"
    >
      <!-- if Settings  -->
      <p class="font-semibold text-lg uppercase">Test Attachments</p>
      <PremFormField label="Title">
        <PremFormControl value="Test 1"  v-model="examData.title"/>
      </PremFormField>
      <PremFormField label="Short Description" class="pt-3">
        <PremFormControl type="textarea" value="Test 1" v-model="examData.description" />
      </PremFormField>
      <BaseButton label="Save" color="info" class="pt-6" @click="saveHandler" />
    </div>
    <div class="w-4/5 max-md:w-full  p-4 overflow-y-scroll scroll-m-0 scrollbar-w-0">
      <!-- Main Content -->
      <div class="flex flex-col gap-3">
        <div class="px-2 flex justify-between pt-8 pb-2">
          <p class="capitalize font-semibold text-lg">LESSON THUMBNAIL</p>
          <div class="flex gap-2">
            <BaseButton
              label="Upload Image"
              @click="
                () => {
                  openFileInput('profileInput');
                }
              "
            />
            <BaseButton
              label="Remove Image"
              @click="
                () => {
                  profilePreview = '';
                }
              "
            />
          </div>
        </div>
        <input
          ref="profileInput"
          type="file"
          @change="handleFileUpload($event, 'profile')"
          accept="image/*"
          class="hidden"
        />

        <img class="w-48" :src="profilePreview" alt="" v-if="profilePreview" />

        <p class="p-3 rounded-md bg-blue-200 border border-blue-700 capitalize">
          this feature will soon be implemented on learner side as well
        </p>
        <div class="px-2 flex justify-between pt-8 pb-2">
          <p class="capitalize font-semibold text-lg">LESSON URL</p>
        </div>

        <p class="font-light text-xs pb-2">
          Copy and use lesson URL anywhere in the school to embed as content.
        </p>
        <p class="font-semibold pb-2">
          Lesson URL can be copied and used within Curriculum, Newsfeeds and
          Community posts.
        </p>
        <BaseButton label="COPY LESSON URL" color="info" />

        <div class="px-2 flex justify-between py-8">
          <p class="capitalize font-semibold text-lg">ATTACHMENTS</p>
          <div class="flex gap-2">
            <BaseButton label="Upload From URL" />
            <BaseButton label="Add Link" />
          </div>
        </div>
        <p class="font-light text-xs py-2">
          You can upload up to 10 attachments.
        </p>
      </div>
      <Uploadtext
        allfiles
        :icon="mdiDragVertical"
        :iconRight="mdiTrashCanOutline"
        dragText="Drag & Drop files here"
        :icon-left="mdiAccount"
        placeholder="Upload your Attachments"
      />
    </div>
  </div>
</template>
<script setup>
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import Uploadtext from "@/components/LMS/Uploadtext.vue";

import {
  mdiAbacus,
  mdiTrashCan,
  mdiTrashCanOutline,
  mdiCloseCircleMultipleOutline,
  mdiPlusCircleOutline,
  mdiMinusCircleOutline,
  mdiCheck,
  mdiWindowClose,
  mdiChevronRightBoxOutline,
  mdiChevronLeftBoxOutline,
  mdiReload,
  mdiChevronRight,
} from "@mdi/js";
import BaseButton from "~~/components/Buttons/BaseButton.vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import PremFormControlIcon from "~~/components/Forms/PremFormControlIcon.vue";
import PremFormControl from "~~/components/Forms/PremFormControl.vue";
import PremFormField from "~~/components/Forms/PremFormField.vue";
import QuilEditor from "~~/components/ExamPortal/QuilEditor.vue";
import { ref } from "vue";
import CardBox from "@/components/Cards/CardBox.vue";
import { API, graphqlOperation } from "aws-amplify";
import { useRouter, useRoute } from "vue-router";
import { updateExam } from "~~/src/graphql/mutations";
const route = useRoute();
import image from "@/assets/img/bundleImage.png";

const profileInput = ref(null);
const profilePreview = ref(image);


const handleFileUpload = (event, type) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = () => {
      profilePreview.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const openFileInput = (inputRef) => {
  const fileInput = profileInput.value;
  fileInput.value = "";
  fileInput.click();
};
const examId = route.params.id;

const examData = ref({
  title:"Loading...",
  description:"Loading..."
});

const fetchExamData = async () => {
  try {
    const myQuery = `
  query MyQuery($id: ID!) {
    getExam(id: $id) {
      title
      instructions
      id
      description
      _version
    }
  }
`;

    const response = await API.graphql(
      graphqlOperation(myQuery, { id: examId })
    );
    // console.log("response : " , response);

    console.log("response", response.data.getExam);
    examData.value = response.data.getExam;
  } catch (error) {
    console.error(error);
    window.alert("Error fetching Exam :", error?.errors?.[0]?.message);
  }
};

onMounted(async () => {
  await fetchExamData();
  console.log(examData.value);
});

const saveHandler = async () => {
  try {
    await API.graphql({
      query: updateExam,
      variables: {
        input: {
          id: examData?.value?.id,
          _version: examData?.value?._version,
          description:examData?.value?.description
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
};







</script>
