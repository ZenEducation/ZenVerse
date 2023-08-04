<template>
  <NuxtLayout name="zen">
    <div class="text-base text-black dark:text-white dark:bg-slate-900">
      <!-- Start Hero -->
      <section class="relative table w-full py-36 lg:py-44 bg-black opacity-80 bg-no-repeat bg-center bg-cover">
        <div>
          <div class="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 class="mb-4 md:text-4xl text-xl md:leading-normal leading-normal font-medium text-white">
              Job Listings
            </h3>
          </div>
          <!--end grid-->
        </div>
        <!--end container-->
      </section>
      <!--end section-->
      <!-- End Hero -->

      <!-- Start Section-->
      <section class="relative md:py-24 py-16">
        <!-- form container start -->
        <div>
          <div class="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
            <div class="lg:col-start-2 lg:col-span-10">
              <div class="bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded p-3  -mt-[150px]">
                <form action="#">
                  <div class="registration-form text-dark text-start">
                    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                      <div class="filter-search-form relative filter-border flex justify-center items-center">
                        <input v-model="currentdata.keyword" name="name" type="text" id="job-keyword"
                          class="form-input w-full md:w-auto filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                          placeholder="Search your keywords" />
                      </div>

                      <div class="filter-search-form relative filter-border flex justify-center items-center">
                        <select v-model="currentdata.location"
                          class="form-select w-full md:w-auto bg-gray-50 dark:bg-slate-800" data-trigger
                          name="choices-location" id="choices-location" aria-label="Default select example">
                          <option value="none" selected>Select</option>
                          <option v-for="location in sortedLocations" :value="location">
                            {{ location }}
                          </option>
                        </select>
                      </div>

                      <div class="filter-search-form relative filter-border flex justify-center items-center ">
                        <select v-model="currentdata.type"
                          class="form-select w-full md:w-auto  bg-gray-50 dark:bg-slate-800" data-trigger
                          name="choices-type" id="choices-type" aria-label="Default select example">
                          <option value="none" selected>Select</option>
                          <option v-for="location in sortedTypes" :value="location">
                            {{ location }}
                          </option>
                        </select>
                      </div>

                      <input type="submit" @click.prevent="searchHandler()" id="search" name="search" style="height: 60px"
                        class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white searchbtn submit-btn"
                        value="Search" />
                    </div>
                    <!--end grid-->
                  </div>
                  <!--end container-->
                </form>
              </div>
            </div>
            <!--ed col-->
          </div>
          <!--grid-->
        </div>
        <!--end container-->
        <!-- form container ends -->
        <div v-if="getPaginatedData().length">
          <div class=" pl-5 pr-5 md:p-16">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
              <SingleJobCard v-for="job in getPaginatedData()" :data="job" />
            </div>
            <!--end grid-->
          </div>
          <!--end container-->

          <div class="grid md:grid-cols-12 grid-cols-1 mt-8">
            <div class="md:col-span-12 text-center">
              <nav aria-label="Page navigation example">
                <ul class="inline-flex items-center -space-x-px">
                  <li v-if="currentPage != 1" @click="currentPage--">
                    <a href="#"
                      class="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 ltr:rounded-l-lg rtl:rounded-r-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                      <i class="uil uil-angle-left text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                      <BaseIcon :path="mdiChevronLeft" />
                    </a>
                  </li>
                  <li v-for="i in totalPages" :key="i" @click="currentPage = i">
                    <a href="#" v-if="i == currentPage" aria-current="page"
                      class="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600">{{
                        i }}</a>
                    <a href="#" v-else
                      class="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">{{
                        i }}</a>
                  </li>
                  <li v-if="currentPage != totalPages" @click="currentPage++">
                    <a href="#"
                      class="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 ltr:rounded-r-lg rtl:rounded-l-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                      <i class="uil uil-angle-right text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                      <BaseIcon :path="mdiChevronRight" />

                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="container">
            <div class="flex justify-center items-center p-10 mt-8 gap-[30px]">
              <h2 class="text-center">
                Sorry , There are currently no job openings that match the
                selected filter.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <!--end section-->
      <!-- End Section-->
    </div>
  </NuxtLayout>
</template>

<script>
import SingleJobCard from "@/components/RecuitmentPortal/SingleJobCard.vue";
import { useStyleStore } from "@/stores/style.js";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import { mdiBriefcase, mdiChevronRight, mdiChevronLeft } from '@mdi/js';
import Amplify from "@aws-amplify/core";
import { DataStore } from "aws-amplify";
import { Job } from "~~/models";


export default {
  name: "AllJobs",
  components: {
    SingleJobCard,
    BaseIcon
  },
  data() {
    return {
      mdiBriefcase: mdiBriefcase,
      mdiChevronLeft: mdiChevronLeft,
      mdiChevronRight: mdiChevronRight,
      filterdata: {
        keyword: "",
        location: "none",
        type: "none",
      },
      currentdata: {
        keyword: "",
        location: "none",
        type: "none",
      },
      jobsdata: [
        {
          jobtitle: "Software Engineering",
          daysafterposted: 3,
          jobtype: "Full Time",
          salarystart: 950,
          salaryend: 1100,
          salaryperiod: "mo",
          companyname: "Facebook Ltd.",
          location: "Australia",
          joblink: "#0",
          companyicon: "",
        },
        // {
        //   jobtitle: "Web Developer",
        //   daysafterposted: 5,
        //   jobtype: "Part Time",
        //   salarystart: 700,
        //   salaryend: 800,
        //   salaryperiod: "wk",
        //   companyname: "Google Inc.",
        //   location: "United States",
        //   joblink: "#1",
        //   companyicon: "",
        // },
        // {
        //   jobtitle: "Data Analyst",
        //   daysafterposted: 1,
        //   jobtype: "Contract",
        //   salarystart: 1200,
        //   salaryend: 1300,
        //   salaryperiod: "wk",
        //   companyname: "Amazon Web Services",
        //   location: "United Kingdom",
        //   joblink: "#2",
        //   companyicon: "",
        // },
        // {
        //   jobtitle: "Frontend Developer",
        //   daysafterposted: 2,
        //   jobtype: "Full Time",
        //   salarystart: 1000,
        //   salaryend: 1200,
        //   salaryperiod: "mo",
        //   companyname: "Apple Inc.",
        //   location: "Canada",
        //   joblink: "#3",
        //   companyicon: "",
        // },
        // {
        //   jobtitle: "UI/UX Designer",
        //   daysafterposted: 7,
        //   jobtype: "Contract",
        //   salarystart: 800,
        //   salaryend: 900,
        //   salaryperiod: "wk",
        //   companyname: "Microsoft Corporation",
        //   location: "Germany",
        //   joblink: "#4",
        //   companyicon: "",
        // },
        // {
        //   jobtitle: "Mobile App Developer",
        //   daysafterposted: 4,
        //   jobtype: "Full Time",
        //   salarystart: 1100,
        //   salaryend: 1300,
        //   salaryperiod: "mo",
        //   companyname: "Samsung Electronics",
        //   location: "South Korea",
        //   joblink: "#5",
        //   companyicon: "",
        // },
        // {
        //   jobtitle: "Backend Developer",
        //   daysafterposted: 6,
        //   jobtype: "Part Time",
        //   salarystart: 900,
        //   salaryend: 1000,
        //   salaryperiod: "wk",
        //   companyname: "Oracle Corporation",
        //   location: "Japan",
        //   joblink: "#6",
        //   companyicon: "",
        // },
        // {
        //   jobtitle: "Database Administrator",
        //   daysafterposted: 2,
        //   jobtype: "Contract",
        //   salarystart: 1000,
        //   salaryend: 1100,
        //   salaryperiod: "wk",
        //   companyname: "IBM Corporation",
        //   location: "United States",
        //   joblink: "#7",
        //   companyicon: "",
        // },
        // {
        //   jobtitle: "Software Engineering",
        //   daysafterposted: 3,
        //   jobtype: "Full Time",
        //   salarystart: 950,
        //   salaryend: 1100,
        //   salaryperiod: "mo",
        //   companyname: "Facebook Ltd.",
        //   location: "Australia",
        //   joblink: "#0",
        //   companyicon: "",
        // },
        // {
        //   jobtitle: "Web Developer",
        //   daysafterposted: 5,
        //   jobtype: "Part Time",
        //   salarystart: 700,
        //   salaryend: 800,
        //   salaryperiod: "wk",
        //   companyname: "Google Inc.",
        //   location: "United States",
        //   joblink: "#1",
        //   companyicon: "",
        // },
        // {
        //   jobtitle: "Data Analyst",
        //   daysafterposted: 1,
        //   jobtype: "Contract",
        //   salarystart: 1200,
        //   salaryend: 1300,
        //   salaryperiod: "wk",
        //   companyname: "Amazon Web Services",
        //   location: "United Kingdom",
        //   joblink: "#2",
        //   companyicon: "",
        // },
        // {
        //   jobtitle: "Frontend Developer",
        //   daysafterposted: 2,
        //   jobtype: "Full Time",
        //   salarystart: 1000,
        //   salaryend: 1200,
        //   salaryperiod: "mo",
        //   companyname: "Apple Inc.",
        //   location: "Canada",
        //   joblink: "#3",
        //   companyicon: "",
        // },
        // {
        //   jobtitle: "UI/UX Designer",
        //   daysafterposted: 7,
        //   jobtype: "Contract",
        //   salarystart: 800,
        //   salaryend: 900,
        //   salaryperiod: "wk",
        //   companyname: "Microsoft Corporation",
        //   location: "Germany",
        //   joblink: "#4",
        //   companyicon: "",
        // },
        // {
        //   jobtitle: "Mobile App Developer",
        //   daysafterposted: 4,
        //   jobtype: "Full Time",
        //   salarystart: 1100,
        //   salaryend: 1300,
        //   salaryperiod: "mo",
        //   companyname: "Samsung Electronics",
        //   location: "South Korea",
        //   joblink: "#5",
        //   companyicon: "",
        // },
        // {
        //   jobtitle: "Backend Developer",
        //   daysafterposted: 6,
        //   jobtype: "Part Time",
        //   salarystart: 900,
        //   salaryend: 1000,
        //   salaryperiod: "wk",
        //   companyname: "Oracle Corporation",
        //   location: "Japan",
        //   joblink: "#6",
        //   companyicon: "",
        // },
        // {
        //   jobtitle: "Database Administrator",
        //   daysafterposted: 2,
        //   jobtype: "Contract",
        //   salarystart: 1000,
        //   salaryend: 1100,
        //   salaryperiod: "wk",
        //   companyname: "IBM Corporation",
        //   location: "United States",
        //   joblink: "#7",
        //   companyicon: "",
        // },
      ],
      currentPage: 1,
      perPage: 6,
    };
  },
  computed: {
    sortedLocations() {
      const locations = this.jobsdata.map((job) => job.location);
      return [...new Set(locations)].sort();
    },
    sortedTypes() {
      const jobtypes = this.jobsdata.map((job) => job.jobtype);
      return [...new Set(jobtypes)].sort();
    },
    filteredJobs() {
      let filteredJobs = this.jobsdata;

      if (this.filterdata.keyword != "") {
        filteredJobs = filteredJobs.filter((job) => {
          return job.jobtitle
            .toLowerCase()
            .includes(this.filterdata.keyword.toLowerCase());
        });
      }

      if (this.filterdata.location != "none") {
        filteredJobs = filteredJobs.filter((job) => {
          return job.location === this.filterdata.location;
        });
      }

      if (this.filterdata.type != "none") {
        filteredJobs = filteredJobs.filter((job) => {
          return job.jobtype === this.filterdata.type;
        });
      }

      return filteredJobs;
    },
    totalPages() {
      const total = Math.ceil(this.filteredJobs.length / this.perPage);
      console.log(this.filteredJobs.length, this.perPage);
      return total;
    },
  },
  methods: {
    getPaginatedData() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      const paginated = this.filteredJobs.slice(start, end);
      return paginated;
    },
    searchHandler() {
      const filteredData = Object.assign({}, this.currentdata);
      this.filterdata = filteredData;
      return;
    },
    async fetchJobs() {
      try {
        const result = await DataStore.query(Job);
        console.log(result);
        // this.jobsdata = result;
      } catch (error) {
        console.log('Error fetching jobs:', error);
      }
    },
  },
  setup() {
    const styleStore = useStyleStore();

    const setStyle = (style) => {
      styleStore.setStyle(style);
      styleStore.setDarkMode(false);
    };

    const darkModeToggle = () => {
      console.log("dark called");
      styleStore.setDarkMode();
    };

    return {
      setStyle,
      darkModeToggle,
    };
  },
  created() {
    this.fetchJobs();
  },
};
</script>
