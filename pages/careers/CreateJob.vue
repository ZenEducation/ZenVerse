<template>
  <div class="w-full">
    <form action="" @submit.prevent="postJob">
      <div class="flex">
        <FormsFormField
          label="Job Title"
          :help="helpJob"
          class="lg:col-span-6 w-6/12 ml-4 mr-4"
        >
          <FormsFormControl
            name="jobTitle"
            id="jobTitle"
            type="text"
            class="mt-3"
            placeholder="Job Title"
            v-model="jobData.jobTitle"
            autocomplete="off"
          />
        </FormsFormField>
        <FormsFormField
          label="Job Location"
          :help="helpLocation"
          class="lg:col-span-6 w-6/12 ml-4 mr-4"
        >
          <FormsFormControl
            name="Location"
            id="Location"
            type="text"
            class="mt-3"
            placeholder="Job Location"
            v-model="jobData.location"
            autocomplete="off"
          />
        </FormsFormField>
      </div>
      <div class="flex">
        <FormsFormField
          label="Job Description"
          :help="description"
          class="lg:col-span-6 w-6/12 ml-4 mr-4"
        >
          <FormsFormControl
            name="jobDescription"
            id="jobDescription"
            class="mt-3"
            placeholder="Job Description"
            v-model="jobData.jobDescription"
            autocomplete="off"
            type="textarea"
          ></FormsFormControl>
        </FormsFormField>
        <FormsFormField
          label="Job Duties"
          :help="duties"
          class="lg:col-span-6 w-6/12 ml-4 mr-4"
        >
          <FormsFormControl
            name="duties"
            id="duties"
            type="textarea"
            class="mt-3"
            placeholder="Job Duties"
            v-model="jobData.duties"
            autocomplete="off"
          ></FormsFormControl>
        </FormsFormField>
      </div>
      <div class="flex">
        <FormsFormField
          label="Job Requirements"
          :help="requirements"
          class="lg:col-span-6 w-6/12 ml-4 mr-4"
        >
          <FormsFormControl
            name="requirements"
            id="requirements"
            type="textarea"
            class="mt-3"
            placeholder="Job Requirements "
            v-model="jobData.requirements"
            autocomplete="off"
          ></FormsFormControl>
        </FormsFormField>
        <FormsFormField
          label="Nice To Have"
          :help="have"
          class="lg:col-span-6 w-6/12 ml-4 mr-4"
        >
          <FormsFormControl
            name="tohave"
            id="tohave"
            type="textarea"
            class="mt-3"
            placeholder="Nice To Have"
            v-model="jobData.tohave"
            autocomplete="off"
          ></FormsFormControl>
        </FormsFormField>
      </div>
      <div class="flex">
        <FormsFormField
          label="Benefits"
          :help="benefits"
          class="lg:col-span-6 w-6/12 ml-4 mr-4"
        >
          <FormsFormControl
            name="benefits"
            id="benefits"
            type="textarea"
            class="mt-3"
            placeholder="Benefits"
            v-model="jobData.benefits"
            autocomplete="off"
          ></FormsFormControl>
        </FormsFormField>
        <FormsFormField
          label="Salary Range"
          :help="salaryRange"
          class="lg:col-span-6 w-6/12 ml-4 mr-4"
        >
          <FormsFormControl
            name="salaryRange"
            id="salaryRange"
            type="text"
            class="mt-3"
            placeholder="Salary Range"
            v-model="jobData.salaryRange"
            autocomplete="off"
          />
        </FormsFormField>
      </div>
      <div class="flex">
        <FormsFormField
          label="Department"
          :help="department"
          class="lg:col-span-6 w-6/12 ml-4 mr-4"
        >
          <div class="ltr:text-left rtl:text-right grid">
            <select class="mt-3 rounded-md h-12" v-model="jobData.department">
              <option>B.Sc</option>
              <option>B.C.A</option>
              <option>M.Sc</option>
              <option>B.Tech</option>
              <option>M.Tech</option>
            </select>
          </div>
        </FormsFormField>
        <FormsFormField
          label="Job Type"
          :help="jobType"
          class="lg:col-span-6 w-6/12 ml-4 mr-4"
        >
          <div class="ltr:text-left rtl:text-right grid">
            <select class="mt-3 rounded-md h-12" v-model="jobData.jobType">
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Freelance</option>
            </select>
          </div>
        </FormsFormField>
      </div>
      <div class="w-full flex justify-center">
        <BaseButtons>
          <BaseButton type="submit" color="info" label="Submit" />
        </BaseButtons>
      </div>
    </form>
  </div>
</template>

<script setup>
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import { reactive } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
const helpJob = ref("");
const helpLocation = ref("");
const description = ref("");
const duties = ref("");
const requirements = ref("");
const have = ref("");
const benefits = ref("");
const salaryRange = ref("");
const department = ref("");
const jobType = ref("");
const jobData = reactive({
  jobTitle: "",
  location: "",
  jobDescription: "",
  duties: "",
  requirements: "",
  tohave: "",
  benefits: "",
  salaryRange: "",
  department: "",
  jobType: "",
});
const rules = {
  jobTitle: { required },
  location: { required },
  jobDescription: { required },
  duties: { required },
  requirements: { required },
  tohave: { required },
  benefits: { required },
  salaryRange: { required },
  department: { required },
  jobType: { required },
};
const v$ = useVuelidate(rules, jobData);
const postJob = async () => {
  helpJob.value = "";
  helpLocation.value = "";
  description.value = "";
  duties.value = "";
  requirements.value = "";
  have.value = "";
  benefits.value = "";
  salaryRange.value = "";
  department.value = "";
  jobType.value = "";
  if (!jobData.jobTitle) {
    helpJob.value = "Please Enter Job Title";
    return;
  }
  if (!jobData.location) {
    helpLocation.value = "Please Enter Job Location";
    return;
  }
  if (!jobData.jobDescription) {
    description.value = "Please Enter Job Description";
    return;
  }
  if (!jobData.duties) {
    duties.value = "Please Enter Job Duties";
    return;
  }
  if (!jobData.requirements) {
    requirements.value = "Please Enter Job requirements";
    return;
  }
  if (!jobData.tohave) {
    have.value = "Please Enter Nice to have field";
    return;
  }
  if (!jobData.benefits) {
    benefits.value = "Please Enter Benifits";
    return;
  }
  if (!jobData.salaryRange) {
    salaryRange.value = "Please Enter Salary Range";
    return;
  }
  if (!jobData.department) {
    department.value = "Please Select Department";
    return;
  }
  if (!jobData.jobType) {
    jobType.value = "Please Select Job Type";
    return;
  }
  const result = await v$.value.$validate();
  if (result) {
    alert("form was submitted");
    jobData.jobTitle = "";
    jobData.location = "";
    jobData.jobDescription = "";
    jobData.duties = "";
    jobData.requirements = "";
    jobData.tohave = "";
    jobData.benefits = "";
    jobData.salaryRange = "";
    jobData.department = "";
    jobData.jobType = "";
  }
};
</script>

<style></style>
