<template>
  <div>
    <NuxtLayout name="zen">
      <SectionsSectionMain>
        <div class="w-full">
          <form action="" @submit.prevent="createJob">
            <div class="sm:grid md:flex">
              <FormsFormField label="Job Title" :help="helpJob" class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="jobTitle" id="jobTitle" type="text" class="mt-3" placeholder="Job Title"
                  v-model="jobData.jobTitle" autocomplete="off" />
              </FormsFormField>
              <FormsFormField label="Job Location" :help="helpLocation"
                class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="jobLocation" id="jobLocation" type="text" class="mt-3" placeholder="Job Type"
                  v-model="jobData.location" :options="typeOptions" />
              </FormsFormField>
              <!-- <FormsFormField label="Job Location" :help="helpLocation"
                class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="Location" id="Location" type="text" class="mt-3" placeholder="Job Location"
                  v-model="jobData.location" autocomplete="off" />
              </FormsFormField> -->
            </div>
            <div class="sm:grid md:flex">
              <FormsFormField label="Job Description" :help="description"
                class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="jobDescription" id="jobDescription" class="mt-3" placeholder="Job Description"
                  v-model="jobData.jobDescription" autocomplete="off" type="textarea"></FormsFormControl>
              </FormsFormField>
              <FormsFormField label="Job Duties" :help="duties" class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="duties" id="duties" type="textarea" class="mt-3" placeholder="Job Duties"
                  v-model="jobData.duties" autocomplete="off"></FormsFormControl>
              </FormsFormField>
            </div>
            <div class="sm:grid md:flex">
              <FormsFormField label="Job Requirements" :help="requirements"
                class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="requirements" id="requirements" type="textarea" class="mt-3"
                  placeholder="Job Requirements " v-model="jobData.requirements" autocomplete="off"></FormsFormControl>
              </FormsFormField>
              <FormsFormField label="Nice To Have" :help="have" class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="tohave" id="tohave" type="textarea" class="mt-3" placeholder="Nice To Have"
                  v-model="jobData.tohave" autocomplete="off"></FormsFormControl>
              </FormsFormField>
            </div>
            <div class="sm:grid md:flex">
              <FormsFormField label="Benefits" :help="benefits" class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="benefits" id="benefits" type="textarea" class="mt-3" placeholder="Benefits"
                  v-model="jobData.benefits" autocomplete="off"></FormsFormControl>
              </FormsFormField>
              <!-- <FormsFormField label="Salary Range" :help="salaryRange"
                class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="salaryRange" id="salaryRange" type="text" class="mt-3" placeholder="Salary Range"
                  v-model="jobData.salaryRange" autocomplete="off" />
              </FormsFormField> -->
            </div>
            <div class="sm:grid md:flex">
              <FormsFormField label="Min Salary" :help="benefits" class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="benefits" id="benefits" type="number" class="mt-3" placeholder="Benefits"
                  v-model="jobData.minSalary" autocomplete="off"></FormsFormControl>
              </FormsFormField>
              <FormsFormField label="Max Salary" :help="salaryRange" class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="salaryRange" id="salaryRange" type="number" class="mt-3"
                  placeholder="Salary Range" v-model="jobData.maxSalary" autocomplete="off" />
              </FormsFormField>
            </div>


            <div class="sm:grid md:flex">
              <FormsFormField label="Job Type" :help="jobTypeOptions" class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="currencyForSalary" id="jobType" type="text" class="mt-3" placeholder="Currency "
                  v-model="jobData.jobType" :options="jobTypeOptions" />
              </FormsFormField>
              <FormsFormField label="Currency Type" :help="currencyForSalary"
                class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="currencyForSalary" id="jobType" type="text" class="mt-3" placeholder="Currency "
                  v-model="jobData.currencyForSalary" :options="currencyOptions" />
              </FormsFormField>
            </div>


            <div class="sm:grid md:flex">
              <FormsFormField label="Department" :help="department" class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="department" id="department" type="text" class="mt-3" v-model="jobData.department"
                  autocomplete="off" :options="depOptions" />
              </FormsFormField>
              <FormsFormField label="Salary Period" :help="salaryperiod"
                class="lg:col-span-6 sm:w-6/12 md:w-full ml-4 mr-4">
                <FormsFormControl name="jobType" id="jobType" type="text" class="mt-3" placeholder="Job Type"
                  v-model="jobData.salaryperiod" :options="salaryperiodOptions" />
              </FormsFormField>
            </div>
            <div class="w-full flex justify-center mt-2">
              <BaseButtons>
                <BaseButton type="submit" color="info" label="Submit" />
              </BaseButtons>
            </div>
          </form>
        </div>
      </SectionsSectionMain>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { API } from 'aws-amplify';
// import { createNewJob, createNewDepartment } from '~/shared/api';
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import { reactive } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
const depOptions = ["B.C.A", "123", "B.Sc", "M.Sc", "B.Tech", "M.Tech"];
const salaryperiodOptions = ["Mo", "Yr"];
const typeOptions = ["Onsite", "Remote", "Hybrid"];
const currencyOptions = ["INR", "EUR", "USD"];
const jobTypeOptions = ['Full_Time', 'Half_Time', 'Part_Time', 'Internship'];
const helpJob = ref("");
const helpLocation = ref("");
const description = ref("");
const duties = ref("");
const requirements = ref("");
const have = ref("");
const minSalary = ref("");
const maxSalary = ref("");
const currencyForSalary = ref("");
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
  minSalary: "",
  maxSalary: "",
  currencyForSalary: ""
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
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const createJob = async () => {
  try {
    const client = new ApolloClient({
      uri: 'https://aljw4fgbzrgkjkntp2yvc2dzgm.appsync-api.ap-south-1.amazonaws.com/graphql',
      headers: {
        'x-api-key': 'da2-abaq7ccxdnf6vb7w4tux65kg5q',
      },
    });
    console.log(jobData.requirements, jobData.duties, jobData.jobDescription)

    const response = await client.mutate({
      mutation: gql`
    mutation CreateJob($input: CreateJobInput!) {
      createJob(input: $input) {
        jobId
        title
        description
      }
    }
  `,
      variables: {
        input: {
          jobId: "13124",
          title: jobData.jobTitle,
          description: jobData.jobDescription,
          duties: "Job duties",
          requirements: jobData.requirements,
          niceToHave: jobData.jobDescription,
          jobLocation: jobData.location,
          location: "Office location",
          jobType: jobData.jobType,
          minSalary: jobData.minSalary,
          maxSalary: jobData.maxSalary,
          salaryperiod: jobData.salaryperiod,
          currencyForSalary: jobData.currencyForSalary,
          jobDepartmentId: "123"

        },
      },
    });

    console.log(response.data);
    console.log('Created Job:', response.data.createJob);
  } catch (error) {
    console.error(error);
    // Handle the error
  }
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
