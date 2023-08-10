<script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import { mdiPlus } from "@mdi/js";

const publishOptions = ref([
  { id: 0, label: "Live", info: "It will Publish mock test for learner to enroll & access" },
  { id: 1, label: "Unpublished", info: "Unpublished mock test will not be visible to learners" },
  { id: 2, label: "Scheduled", info: "Unpublished mock test will not be visible to learners" },
]);

const selectedPublish = ref(publishOptions.value[0].label);

const props = defineProps({
  data: Object,
});
const emit = defineEmits(["form-data-changes-publish"]);

const formData = ref(props.data);
console.log(formData.value);
let { publishingDate, publishingStatus } = formData.value;
selectedPublish.value = publishingStatus ;



const emitFormDataChanges = () => {
  console.log("selected pub " , selectedPublish.value );
  emit("form-data-changes-publish", {
    publishingStatus : selectedPublish.value ,
    publishingDate,
  });
};

</script>
<template>
  <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4">
    <CardBox
      class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
      is-form
      @submit.prevent="submit"
    >
      <p class="font-bold text-lg">Publish mock test</p>
      <p class="text-xs mb-4">
        Publish/Unpublish the mock test for your learners
      </p>
      <template v-for="i in publishOptions">
        <div class="border rounded-md my-2 p-3" :class="{'border-green-400 border-2' : i.label == selectedPublish}">
            <input type="radio" v-model="selectedPublish" :value="i.label" @change="emitFormDataChanges" />
            <p class="inline p-4 font-semibold leading-8">
                {{ i.label }}
            </p>
            <p  class="text-xs mb-4">
                {{ i.info }}
            </p>
            <p v-if="i.id==2">
                Set Release Date 
                <PremFormControl type="Date" class=" max-w-sm" v-model="publishingDate" @input="emitFormDataChanges"/>
            </p>
        </div>
      </template>

     


    </CardBox>
  </div>
</template>

<style lang="scss" scoped></style>
