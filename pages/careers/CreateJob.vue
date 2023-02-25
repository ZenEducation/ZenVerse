<template>
  <div class="w-full">
    <form action="" @submit.prevent="postJob">
      <div class="flex">
        <FormsFormField class="lg:col-span-6 w-5/12">
          <div class="ltr:text-left rtl:text-right grid ml-4">
            <label for="name" class="font-semibold">Job Title</label>
            <FormsFormControl
              name="jobTitle"
              id="jobTitle"
              type="text"
              class="mt-3"
              placeholder="Job Title"
              v-model="jobData.jobTitle"
            />
            <!-- <label v-if="jobData.isJobTitle" class="text-red-700"
            >Please Enter Job Title
          </label> -->
          </div>
        </FormsFormField>
        <FormsFormField class="lg:col-span-6 w-5/12">
          <div class="ltr:text-left rtl:text-right grid ml-4">
            <label for="name" class="font-semibold">Location</label>
            <FormsFormControl
              name="Location"
              id="Location"
              type="text"
              class="mt-3"
              placeholder="Job Title"
              v-model="jobData.location"
            />
            <!-- <label v-if="jobData.isJobLocation" class="text-red-700"
            >Please Enter Job Title
          </label> -->
          </div>
        </FormsFormField>
      </div>
      <div class="flex">
        <FormsFormField class="lg:col-span-6 w-5/12">
          <div class="ltr:text-left rtl:text-right grid ml-4">
            <label for="name" class="font-semibold">Job Description</label>
            <FormsFormControl
              name="jobDescription"
              id="jobDescription"
              type="text"
              class="mt-3"
              placeholder="Job Description"
              v-model="jobData.jobDescription"
            ></FormsFormControl>
            <!-- <label v-if="jobData.isJobDescription" class="text-red-700"
            >Please Enter Job Description
          </label> -->
          </div>
        </FormsFormField>
        <FormsFormField class="lg:col-span-6 w-5/12">
          <div class="ltr:text-left rtl:text-right grid ml-4">
            <label for="name" class="font-semibold">Duties</label>
            <FormsFormControl
              name="duties"
              id="duties"
              type="text"
              class="mt-3"
              placeholder="Job Description"
              v-model="jobData.duties"
            ></FormsFormControl>
            <!-- <label v-if="jobData.isJobDuties" class="text-red-700"
            >Please Enter Job Duties
          </label> -->
          </div>
        </FormsFormField>
      </div>
      <div class="flex">
        <FormsFormField class="lg:col-span-6 w-5/12">
          <div class="ltr:text-left rtl:text-right grid ml-4">
            <label for="name" class="font-semibold">Requirements</label>
            <FormsFormControl
              name="requirements"
              id="requirements"
              type="text"
              class="mt-3"
              placeholder="Job Description "
              v-model="jobData.requirements"
            ></FormsFormControl>
            <!-- <label v-if="jobData.isRequirements" class="text-red-700"
            >Please Enter Job Requirements
          </label> -->
          </div>
        </FormsFormField>
        <FormsFormField class="lg:col-span-6 w-5/12">
          <div class="ltr:text-left rtl:text-right grid ml-4">
            <label for="name" class="font-semibold">Nice To Have</label>
            <FormsFormControl
              name="tohave"
              id="tohave"
              type="text"
              class="mt-3"
              placeholder="Job Description"
              v-model="jobData.tohave"
            ></FormsFormControl>
            <!-- <label v-if="jobData.isToHave" class="text-red-700"
            >Please Enter Nice To Have
          </label> -->
          </div>
        </FormsFormField>
      </div>
      <div class="flex">
        <FormsFormField class="lg:col-span-6 w-5/12">
          <div class="ltr:text-left rtl:text-right grid ml-4">
            <label for="name" class="font-semibold">Benefits</label>
            <FormsFormControl
              name="benefits"
              id="benefits"
              type="text"
              class="mt-3"
              placeholder="Job Description"
              v-model="jobData.benefits"
            ></FormsFormControl>
            <!-- <label v-if="jobData.isBenefits" class="text-red-700"
            >Please Enter Benefits
          </label> -->
          </div>
        </FormsFormField>
        <FormsFormField class="lg:col-span-6 w-5/12">
          <div class="ltr:text-left rtl:text-right grid ml-4">
            <label for="name" class="font-semibold">Salary Range</label>
            <FormsFormControl
              name="salaryRange"
              id="salaryRange"
              type="text"
              class="mt-3"
              placeholder="Job Title"
              v-model="jobData.salaryRange"
            />
            <!-- <label v-if="jobData.isSalaryRange" class="text-red-700"
            >Please Enter Salary Range
          </label> -->
          </div>
        </FormsFormField>
      </div>
      <div class="flex">
        <FormsFormField class="lg:col-span-6 w-5/12">
          <div class="ltr:text-left rtl:text-right grid ml-4">
            <label for="name" class="font-semibold">Department</label>
            <select class="mt-3 rounded-md h-12" v-model="jobData.department">
              <option>B.Sc</option>
              <option>B.C.A</option>
              <option>M.Sc</option>
              <option>B.Tech</option>
              <option>M.Tech</option>
            </select>
            <!-- <label v-if="jobData.isDepartment" class="text-red-700"
            >Please Select Department
          </label> -->
          </div>
        </FormsFormField>

        <FormsFormField class="lg:col-span-6 w-5/12">
          <div class="ltr:text-left rtl:text-right grid ml-4">
            <label for="name" class="font-semibold">Job Type</label>
            <select class="mt-3 rounded-md h-12" v-model="jobData.jobType">
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Freelance</option>
            </select>
            <!-- <label v-if="jobData.isJobType" class="text-red-700"
            >Please Select Job Type
          </label> -->
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
