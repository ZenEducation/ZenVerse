<template>
  <div>
    <NuxtLayout name="zen">
      <SectionsSectionMain>
        <div class="w-full">
          <form @submit.prevent="postJob">
            <div class="sm:grid md:flex">
              <FormsFormField label="Department ID" :help="departmentId"
                class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="departmentId" id="departmentId" type="text" class="mt-3"
                  placeholder="Department ID" v-model="jobData.departmentId" autocomplete="off" />
              </FormsFormField>
            </div>
            <div class="sm:grid md:flex">
              <FormsFormField label="Title" :help="title" class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="title" id="title" type="text" class="mt-3" placeholder="title"
                  v-model="jobData.title" autocomplete="off" />
              </FormsFormField>
              <FormsFormField label="Job Description" :help="description"
                class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="jobDescription" id="jobDescription" class="mt-3" placeholder="Job Description"
                  v-model="jobData.description" autocomplete="off" type="textarea">
                </FormsFormControl>
              </FormsFormField>
            </div>
            <div class="sm:grid md:flex">
              <FormsFormField label="Job Duties" :help="duties" class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="duties" id="duties" type="textarea" class="mt-3" placeholder="Job Duties"
                  v-model="jobData.duties" autocomplete="off"></FormsFormControl>
              </FormsFormField>
              <FormsFormField label="Job Requirements" :help="requirements"
                class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="requirements" id="requirements" type="textarea" class="mt-3"
                  placeholder="Job Requirements " v-model="jobData.requirements" autocomplete="off"></FormsFormControl>
              </FormsFormField>
            </div>
            <div class="sm:grid md:flex">
              <FormsFormField label="Nice To Have" :help="niceToHave" class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="niceToHave" id="niceToHave" type="textarea" class="mt-3"
                  placeholder="Nice To Have" v-model="jobData.niceToHave" autocomplete="off">
                </FormsFormControl>
              </FormsFormField>
              <FormsFormField label="Benefits" :help="benefits" class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="benefits" id="benefits" type="textarea" class="mt-3" placeholder="Benefits"
                  v-model="jobData.benefits" autocomplete="off"></FormsFormControl>
              </FormsFormField>
            </div>
            <div class="sm:grid md:flex">
              <FormsFormField label="Min Salary" :help="minSalary" class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="minSalary" id="minSalary" type="number" class="mt-3" placeholder="Min Salary"
                  v-model="jobData.minSalary" autocomplete="off" />
              </FormsFormField>
              <FormsFormField label="Max Salary" :help="maxSalary" class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="maxSalary" id="maxSalary" type="number" class="mt-3" placeholder="Max Salary"
                  v-model="jobData.maxSalary" autocomplete="off" />
              </FormsFormField>
            </div>
            <div class="sm:grid md:flex">
              <FormsFormField label="Job Type" class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="jobType" id="jobType" type="text" class="mt-3" placeholder="Job Type"
                  v-model="jobData.jobType" :options="jobType" />
              </FormsFormField>
              <FormsFormField label="Job Mode" class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="jobMode" id="jobMode" type="text" class="mt-3" placeholder="Job Mode"
                  v-model="jobData.jobMode" :options="jobMode" />
              </FormsFormField>
              <FormsFormField label="Job Location" :help="location" class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="location" id="location" type="text" class="mt-3" placeholder="Location"
                  v-model="jobData.location" autocomplete="off" />
              </FormsFormField>
            </div>
            <div class="w-full flex justify-center mt-2">
              <BaseButtons>
                <BaseButton type="submit" color="info" label="Submit" @onClick="postJob" />
              </BaseButtons>
            </div>
          </form>
        </div>
      </SectionsSectionMain>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { DataStore } from "aws-amplify";
import { Job } from "~~/models";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import { reactive } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
// const depOptions = ["BRANDING", "SALES", "EDUCARE", "CONTENT", "TECHDEVELOPMENT"];
// const typeOptions = ["Full Time", "Half Time", "Part Time", "Internship"];
const jobType = ["FULL_TIME", "HALF_TIME", "PART_TIME", "INTERNSHIP"];
const jobMode = ["ONSITE", "REMOTE", "HYBRID"];
// const salaryPeriod = ["Mo", "Yr"];
const title = ref("");
const location = ref("");
const description = ref("");
const duties = ref("");
const requirements = ref("");
const niceToHave = ref("");
const benefits = ref("");
const minSalary = ref("");
const maxSalary = ref("");
const departmentId = ref("");
// const department = ref("");
const jobData = reactive({
  title: "",
  description: "",
  duties: "",
  requirements: "",
  niceToHave: "",
  benefits: "",
  minSalary: "",
  maxSalary: "",
  jobType: "",
  jobMode: "",
  location: "",
  // salaryPeriod: "",
  departmentId: "",
});
const rules = {
  title: { required },
  description: { required },
  duties: { required },
  requirements: { required },
  niceToHave: { required },
  benefits: { required },
  jobType: { required },
  jobMode: { required },
  location: { required },
  minSalary: { required },
  maxSalary: { required },
  // salaryPeriod: { required },
  departmentId: { required },
};
const v$ = useVuelidate(rules, jobData);

const postJob = async () => {
  title.value = "";
  description.value = "";
  (duties.value = ""), (requirements.value = "");
  niceToHave.value = "";
  benefits.value = "";
  (jobType.value = ""), (jobMode.value = ""), (location.value = "");
  minSalary.value = "";
  maxSalary.value = "";
  // salaryPeriod.value = ""
  departmentId.value = "";
  if (!jobData.title) {
    alert("Please Enter Job Title");
    return;
  }
  if (!jobData.description) {
    alert("Please Enter Job Description");
    return;
  }
  if (!jobData.duties) {
    alert("Please Enter Job Duties");
    return;
  }
  if (!jobData.requirements) {
    alert("Please Enter Job requirements");
    return;
  }
  if (!jobData.niceToHave) {
    alert("Please Enter Nice to have field");
    return;
  }
  if (!jobData.benefits) {
    alert("Please Enter Benefits");
    return;
  }
  if (!jobData.jobType) {
    alert("Please Select Job Type");
    return;
  }
  if (!jobData.jobMode) {
    alert("Please Select Job Type");
    return;
  }
  if (!jobData.location) {
    alert("Please Enter Job Location");
    return;
  }
  if (!jobData.minSalary) {
    alert("Please Enter Minimum Range");
    return;
  }
  if (!jobData.maxSalary) {
    alert("Please Enter Maximum Range");
    return;
  }
  // if (!jobData.salaryPeriod) {
  //   alert("Please Enter Salary Period");
  //   return;
  // }
  if (!jobData.departmentId) {
    alert("Please Select Department ID");
    return;
  }
  const result = await v$.value.$validate();
  // if (result)
  //   alert("Form submitted");

  // taking values from the user
  const input = {
    title: jobData.title,
    description: jobData.description,
    duties: jobData.duties,
    requirements: jobData.requirements,
    niceToHave: jobData.niceToHave,
    benefits: jobData.benefits,
    jobType: jobData.jobType,
    jobMode: jobData.jobMode,
    location: jobData.location,
    minSalary: jobData.minSalary,
    maxSalary: jobData.maxSalary,
    departmentId: jobData.departmentId,
    jobDepartmentId: jobData.departmentId,
  };

  try {
    console.log("input", input);
    const result = await DataStore.save(new Job(input));

    console.log("Result", result);

  } catch (error) {
    console.log("Error creating job:", error);
  }
};
</script>

<style></style>
