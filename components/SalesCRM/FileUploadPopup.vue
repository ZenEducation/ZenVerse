<template>
  <OverlayLayer class="py-5">
    <CardBox
      class="shadow-lg w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
      is-modal
    >
      <CardBoxComponentTitle title="Upload Lead"> </CardBoxComponentTitle>

      <div class="space-y-1">
        <h3 class="font-xl"></h3>
      </div>

      <PremFormField
        label="Select File (CSV only)"
        horizontal
        class="mt-5 bg-green"
      >
        <FormFilePicker label="Choose File" v-model="csvFile" />
      </PremFormField>
      <p v-if="UploadError" class="text-[#CE5941]">
        Please select a csv file to upload
      </p>
      <template #footer>
        <BaseButtons type="justify-between">
          <BaseButton
            label="Cancel"
            color="green"
            @click="hidefileUploadPopUpModel"
          />
          <BaseButton
            label="Upload Lead"
            color="info"
            @click="
              pushNewLeadData({
                name,
                email,
                phone,
                location,
                searchSource,
              })
            "
          />
        </BaseButtons>
      </template>
    </CardBox>
  </OverlayLayer>
</template>
<script setup>
import OverlayLayer from "@/components/Asidemenu/OverlayLayer.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import FormFilePicker from "@/components/Forms/FormFilePicker.vue";
import { ref, defineProps } from "vue";
import Papa from "papaparse";

const props = defineProps({
  hidefileUploadPopUpModel: {
    type: function () {
      return false;
    },
  },
  pushDataFromCSV: {
    type: Function,
  },
});

const csvFile = ref(null);
const UploadError = ref(false);
// console.log(csvFile);

const setData = () => {
  console.log(data);
};

const pushNewLeadData = () => {
  // console.log(csvFile.value);
  // hidefileUploadPopUpModel();
  UploadError.value = false;
  if (csvFile.value == null) {
    UploadError.value = true;
    return;
  }

  // read csv file data and push to the database
  Papa.parse(csvFile.value, {
    header: true,
    complete: function (results) {
      // console.log(results);
      // console.log(results.data);
      // console.log(results.errors);
      // console.log(results.meta);

      // push data to parent component

      const csvValues = results.data;

      props.pushDataFromCSV(csvValues);
      props.hidefileUploadPopUpModel();
    },
  });
};
</script>

<style scoped></style>
