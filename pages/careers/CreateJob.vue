<template>
  <div class="w-full">
    <form action="" @submit.prevent="postJob">
      <div class="flex">
        <FormsFormField label="Job Title" class="lg:col-span-6 w-5/12 ml-4">
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
        <FormsFormField label="Job Location" class="lg:col-span-6 w-5/12 ml-4">
          <FormsFormControl
            name="Location"
            id="Location"
            type="text"
            class="mt-3"
            placeholder="Job Title"
            v-model="jobData.location"
            autocomplete="off"
          />
        </FormsFormField>
      </div>
      <div class="flex">
        <FormsFormField
          label="Job Description"
          class="lg:col-span-6 w-5/12 ml-4"
        >
          <FormsFormControl
            name="jobDescription"
            id="jobDescription"
            type="text"
            class="mt-3"
            placeholder="Job Description"
            v-model="jobData.jobDescription"
          ></FormsFormControl>
        </FormsFormField>
        <FormsFormField label="Job Duties" class="lg:col-span-6 w-5/12 ml-4">
          <FormsFormControl
            name="duties"
            id="duties"
            type="text"
            class="mt-3"
            placeholder="Job Duties"
            v-model="jobData.duties"
          ></FormsFormControl>
        </FormsFormField>
      </div>
      <div class="flex">
        <FormsFormField
          label="Job Requirements"
          class="lg:col-span-6 w-5/12 ml-4"
        >
          <FormsFormControl
            name="requirements"
            id="requirements"
            type="text"
            class="mt-3"
            placeholder="Job Requirements "
            v-model="jobData.requirements"
          ></FormsFormControl>
        </FormsFormField>
        <FormsFormField label="Nice To Have" class="lg:col-span-6 w-5/12 ml-4">
          <FormsFormControl
            name="tohave"
            id="tohave"
            type="text"
            class="mt-3"
            placeholder="Nice To Have"
            v-model="jobData.tohave"
          ></FormsFormControl>
        </FormsFormField>
      </div>
      <div class="flex">
        <FormsFormField label="Benefits" class="lg:col-span-6 w-5/12 ml-4">
          <FormsFormControl
            name="benefits"
            id="benefits"
            type="text"
            class="mt-3"
            placeholder="Benefits"
            v-model="jobData.benefits"
          ></FormsFormControl>
        </FormsFormField>
        <FormsFormField label="Salary Range" class="lg:col-span-6 w-5/12 ml-4">
          <FormsFormControl
            name="salaryRange"
            id="salaryRange"
            type="text"
            class="mt-3"
            placeholder="Salary Range"
            v-model="jobData.salaryRange"
          />
        </FormsFormField>
      </div>
      <div class="flex">
        <FormsFormField label="Department" class="lg:col-span-6 w-5/12 ml-4">
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
        <FormsFormField label="Job Type" class="lg:col-span-6 w-5/12 ml-4">
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
        <button
          type="submit"
          id="submit"
          name="send"
          class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4 w-48 h-12"
        >
          Post Job
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
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
  const result = await v$.value.$validate();
  if (result) {
    alert("form was submitted");
  } else {
    alert("Form was not submitted");
  }
};
</script>

<style></style>
