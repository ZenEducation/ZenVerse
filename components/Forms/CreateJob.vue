<template>
  <div
    class="rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 p-6"
    id="reserve-form"
  >
    <h3
      class="mb-4 md:text-4xl text-3xl md:leading-normal leading-normal font-medium"
    >
      Post Your Job
    </h3>
    <div class="container">
      <div class="lg:col-span-6">
        <div class="ltr:text-left rtl:text-right">
          <label for="name" class="font-semibold">Job Title</label>
          <input
            name="jobTitle"
            id="jobTitle"
            type="text"
            class="form-input mt-3"
            placeholder="Job Title"
            v-model="jobTitle"
          />
        </div>
      </div>
      <div class="lg:col-span-6">
        <div class="ltr:text-left rtl:text-right">
          <label for="name" class="font-semibold">Job Location</label>
          <input
            name="jobLocation"
            id="Job Location"
            type="text"
            class="form-input mt-3"
            placeholder="Job Location"
            v-model="jobLocation"
          />
        </div>
      </div>
      <div class="lg:col-span-6">
        <div class="ltr:text-left rtl:text-right">
          <label for="name" class="font-semibold">Job Type</label>
          <br />
          <div class="checkboxes">
            <div>
              <input
                class="checkboxinput"
                type="checkbox"
                name=""
                id=""
                v-model="cbFullTime"
              />
              <label for="" class="font-semibold">Full Time</label>
            </div>
            <div>
              <input
                class="checkboxinput"
                type="checkbox"
                name=""
                id=""
                v-model="cbPartTime"
              />
              <label for="" class="font-semibold"> Part Time</label>
            </div>
            <div>
              <input
                class="checkboxinput"
                type="checkbox"
                name=""
                id=""
                v-model="cbWFH"
              />
              <label for="" class="font-semibold">Work From Home</label>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:col-span-6">
        <div class="ltr:text-left rtl:text-right">
          <label for="name" class="font-semibold">Education Requirments</label>
          <br />
          <div class="checkboxes">
            <div>
              <input
                class="checkboxinput"
                type="checkbox"
                name=""
                id=""
                v-model="cbDiploma"
              />
              <label for="" class="font-semibold">Diploma</label>
            </div>
            <div>
              <input
                class="checkboxinput"
                type="checkbox"
                name=""
                id=""
                v-model="cbBachelors"
              />
              <label for="" class="font-semibold"> Bachelor's</label>
            </div>
            <div>
              <input
                class="checkboxinput"
                type="checkbox"
                name=""
                id=""
                v-model="cbPG"
              />
              <label for="" class="font-semibold">PG</label>
            </div>
            <div>
              <input
                class="checkboxinput"
                type="checkbox"
                name=""
                id=""
                v-model="cbOthers"
              />
              <label for="" class="font-semibold">Others</label>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:col-span-6">
        <div class="ltr:text-left rtl:text-right">
          <label for="name" class="font-semibold">Required Experience</label>
          <input
            name="experience"
            id="experience"
            type="text"
            class="form-input mt-3"
            placeholder="Job Experience"
            v-model="experience"
          />
        </div>
      </div>
      <div class="lg:col-span-6">
        <div class="ltr:text-left rtl:text-right">
          <label for="name" class="font-semibold"
            >Technical Skills Required</label
          >
          <input
            name="technicalSkills"
            id="technicalSkills"
            type="text"
            class="form-input mt-3"
            placeholder="Technical Skills Required"
            v-model="technicalSkills"
          />
        </div>
      </div>
      <div class="lg:col-span-6">
        <div class="ltr:text-left rtl:text-right">
          <label for="name" class="font-semibold">Soft Skills Required</label>
          <input
            name="softSkills"
            id="softSkills"
            type="text"
            class="form-input mt-3"
            placeholder="Soft Skills Required"
            v-model="softSkills"
          />
        </div>
      </div>
      <div class="lg:col-span-6">
        <div class="ltr:text-left rtl:text-right">
          <label for="name" class="font-semibold">Salary Range</label>
          <input
            name="salaryRange"
            id="salaryRange"
            type="text"
            class="form-input mt-3"
            placeholder="Salary Range"
            v-model="salaryRange"
          />
        </div>
      </div>
      <div class="lg:col-span-6">
        <div class="ltr:text-left rtl:text-right">
          <label for="name" class="font-semibold">Job Description</label>
          <textarea
            name="jobDescription"
            id="jobDescription"
            type="text"
            class="form-input mt-3"
            placeholder="Job Description"
            v-model="jobDescription"
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        id="submit"
        name="send"
        @click="postJob"
        class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4"
      >
        Post Job
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobTitle: "",
      jobLocation: "",
      experience: "",
      technicalSkills: "",
      softSkills: "",
      salaryRange: "",
      jobDescription: "",
      cbFullTime: false,
      cbPartTime: false,
      cbWFH: false,
      cbDiploma: false,
      cbBachelors: false,
      cbPG: false,
      cbOthers: false,
      jobType: [],
      Education: [],
      JobDetails: [],
    };
  },
  mounted() {},
  methods: {
    postJob() {
      if ((this.jobTitle = "")) {
        alert("Please Enter valid Job Title");
        return;
      }
      if ((this.jobLocation = "")) {
        alert("Please Enter valid Job Location");
        return;
      }
      if (!this.cbFullTime && !this.cbPartTime && !this.cbWFH) {
        alert("Please Select Job Type");
        return;
      }
      if (
        !this.cbDiploma &&
        !this.cbBachelors &&
        !this.cbPG &&
        !this.cbOthers
      ) {
        alert("Please Select Education Requirements");
        return;
      }
      if ((this.experience = "")) {
        alert("Please Enter valid Experience");
        return;
      }
      if ((this.technicalSkills = "")) {
        alert("Please Enter valid Techical Skills");
        return;
      }
      if ((this.softSkills = "")) {
        alert("Please Enter valid Valid Soft Skills");
        return;
      }
      if ((this.salaryRange = "")) {
        alert("Please Enter Salary Range");
        return;
      }
      if ((this.jobDescription = "")) {
        alert("Please Enter Job Description");
        return;
      }

      this.cbFullTime ? this.jobType.push("Full Time") : "";
      this.cbPartTime ? this.jobType.push("Part Time") : "";
      this.cbWFH ? this.jobType.push("Work From Home") : "";
      this.cbDiploma ? this.Education.push("Full Time") : "";
      this.cbBachelors ? this.Education.push("Part Time") : "";
      this.cbPGs ? this.Education.push("Work From Home") : "";
      this.cbOthers ? this.Education.push("Work From Home") : "";
      this.JobDetails.push({
        jobTitle: this.jobTitle,
        Location: this.jobLocation,
        experience: this.experience,
        technicalSkills: this.technicalSkills,
        softSkills: this.softSkills,
        salaryRange: this.salaryRange,
        jobDescription: this.jobDescription,
        Education: this.Education,
      });
      this.jobTitle = "";
      this.jobLocation = "";
      this.experience = "";
      this.technicalSkills = "";
      this.softSkills = "";
      this.salaryRange = "";
      this.jobDescription = "";
      this.Education = "";
      this.cbFullTime = false;
      this.cbPartTime = false;
      this.cbWFH = false;
      this.cbDiploma = false;
      this.cbBachelors = false;
      this.cbPG = false;
      this.cbOthers = false;
    },
  },
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
</style>
