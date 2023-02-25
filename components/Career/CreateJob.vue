<template>
  <div class="w-full">
    <div class="flex">
      <div class="lg:col-span-6 w-5/12">
        <div class="ltr:text-left rtl:text-right grid ml-4">
          <label for="name" class="font-semibold">Job Title</label>
          <input
            name="jobTitle"
            id="jobTitle"
            type="text"
            class="form-input mt-3"
            placeholder="Job Title"
            v-model="jobData.jobTitle"
          />
          <label v-if="jobData.isJobTitle" class="text-red-700"
            >Please Enter Job Title
          </label>
        </div>
      </div>
      <div class="lg:col-span-6 w-5/12">
        <div class="ltr:text-left rtl:text-right grid ml-4">
          <label for="name" class="font-semibold">Location</label>
          <input
            name="Location"
            id="Location"
            type="text"
            class="form-input mt-3"
            placeholder="Job Title"
            v-model="jobData.location"
          />
          <label v-if="jobData.isJobLocation" class="text-red-700"
            >Please Enter Job Title
          </label>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="lg:col-span-6 w-5/12">
        <div class="ltr:text-left rtl:text-right grid ml-4">
          <label for="name" class="font-semibold">Job Description</label>
          <textarea
            name="jobDescription"
            id="jobDescription"
            type="text"
            class="form-input mt-3 overflow-hidden"
            placeholder="Job Description"
            v-model="jobData.jobDescription"
          ></textarea>
          <label v-if="jobData.isJobDescription" class="text-red-700"
            >Please Enter Job Description
          </label>
        </div>
      </div>
      <div class="lg:col-span-6 w-5/12">
        <div class="ltr:text-left rtl:text-right grid ml-4">
          <label for="name" class="font-semibold">Duties</label>
          <textarea
            name="duties"
            id="duties"
            type="text"
            class="form-input mt-3 overflow-hidden"
            placeholder="Job Description"
            v-model="jobData.duties"
          ></textarea>
          <label v-if="jobData.isJobDuties" class="text-red-700"
            >Please Enter Job Duties
          </label>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="lg:col-span-6 w-5/12">
        <div class="ltr:text-left rtl:text-right grid ml-4">
          <label for="name" class="font-semibold">Requirements</label>
          <textarea
            name="requirements"
            id="requirements"
            type="text"
            class="form-input mt-3 overflow-hidden"
            placeholder="Job Description overflow-hidden"
            v-model="jobData.requirements"
          ></textarea>
          <label v-if="jobData.isRequirements" class="text-red-700"
            >Please Enter Job Requirements
          </label>
        </div>
      </div>
      <div class="lg:col-span-6 w-5/12">
        <div class="ltr:text-left rtl:text-right grid ml-4">
          <label for="name" class="font-semibold">Nice To Have</label>
          <textarea
            name="tohave"
            id="tohave"
            type="text"
            class="form-input mt-3 overflow-hidden"
            placeholder="Job Description"
            v-model="jobData.tohave"
          ></textarea>
          <label v-if="jobData.isToHave" class="text-red-700"
            >Please Enter Nice To Have
          </label>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="lg:col-span-6 w-5/12">
        <div class="ltr:text-left rtl:text-right grid ml-4">
          <label for="name" class="font-semibold">Benefits</label>
          <textarea
            name="benefits"
            id="benefits"
            type="text"
            class="form-input mt-3 overflow-hidden"
            placeholder="Job Description"
            v-model="jobData.benefits"
          ></textarea>
          <label v-if="jobData.isBenefits" class="text-red-700"
            >Please Enter Benefits
          </label>
        </div>
      </div>
      <div class="lg:col-span-6 w-5/12">
        <div class="ltr:text-left rtl:text-right grid ml-4">
          <label for="name" class="font-semibold">Salary Range</label>
          <input
            name="salaryRange"
            id="salaryRange"
            type="text"
            class="form-input mt-3"
            placeholder="Job Title"
            v-model="jobData.salaryRange"
          />
          <label v-if="jobData.isSalaryRange" class="text-red-700"
            >Please Enter Salary Range
          </label>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="lg:col-span-6 w-5/12">
        <div class="ltr:text-left rtl:text-right grid ml-4">
          <label for="name" class="font-semibold">Department</label>
          <select class="form-input mt-3" v-model="jobData.department">
            <option>B.Sc</option>
            <option>B.C.A</option>
            <option>M.Sc</option>
            <option>B.Tech</option>
            <option>M.Tech</option>
          </select>
          <label v-if="jobData.isDepartment" class="text-red-700"
            >Please Select Department
          </label>
        </div>
      </div>

      <div class="lg:col-span-6 w-5/12">
        <div class="ltr:text-left rtl:text-right grid ml-4">
          <label for="name" class="font-semibold">Job Type</label>
          <select class="form-input mt-3" v-model="jobData.jobType">
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Freelance</option>
          </select>
          <label v-if="jobData.isJobType" class="text-red-700"
            >Please Select Job Type
          </label>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <button
        type="submit"
        id="submit"
        name="send"
        @click="postJob"
        class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4 w-48"
      >
        Post Job
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
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
  isJobTitle: false,
  isJobLocation: false,
  isJobDescription: false,
  isJobDuties: false,
  isRequirements: false,
  isToHave: false,
  isBenefits: false,
  isSalaryRange: false,
  isDepartment: false,
  isJobType: false,
});

const postJob = () => {
  jobData.isJobTitle = false;
  jobData.isJobDescription = false;
  jobData.isJobLocation = false;
  jobData.isRequirements = false;
  jobData.isToHave = false;
  jobData.isBenefits = false;
  jobData.isSalaryRange = false;
  jobData.isDepartment = false;
  jobData.isJobType = false;
  if (!jobData.jobTitle) {
    jobData.isJobTitle = true;
    return;
  }
  if (!jobData.location) {
    jobData.isJobLocation = true;
    return;
  }
  if (!jobData.jobDescription) {
    jobData.isJobDescription = true;
    return;
  }
  if (!jobData.duties) {
    jobData.isJobDuties = true;
    return;
  }
  if (!jobData.requirements) {
    jobData.isRequirements = true;
    return;
  }
  if (!jobData.tohave) {
    jobData.isToHave = true;
    return;
  }
  if (!jobData.benefits) {
    jobData.isBenefits = true;
    return;
  }
  if (!jobData.salaryRange) {
    jobData.isSalaryRange = true;
    return;
  }
  if (!jobData.department) {
    jobData.isDepartment = true;
    return;
  }
  if (!jobData.jobType) {
    jobData.isJobType = true;
    return;
  }
  console.log(jobData);
};
</script>

<style>
.form-input {
  height: 2.5rem;
  width: 100%;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: inherit;
  background-color: transparent;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.font-semibold {
  font-weight: 600 !important;
}
.btn {
  display: inline-block;
  border-width: 1px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  text-align: center;
  vertical-align: middle;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.025em;
}
.checkboxes {
  display: flex;
}
.container {
  width: 90%;
  align-items: center;
}
.checkboxinput {
  margin-inline: 10px;
}
textarea {
  height: 400px;
}
</style>
