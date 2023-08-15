<template>
  <NuxtLayout name="zen">
    <div class="text-base text-black dark:text-white dark:bg-slate-900">
      <section class="relative table w-full py-36 lg:py-44 bg-black opacity-80 bg-no-repeat bg-center bg-cover">
        <div>
          <div class="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 class="mb-4 md:text-4xl text-xl md:leading-normal leading-normal font-medium text-white">
              Job Listings
            </h3>
          </div>
        </div>
      </section>

      <section class="relative md:py-24 py-16">
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
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div v-if="getPaginatedData().length">
          <div class=" pl-5 pr-5 md:p-16">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
              <SingleJobCard v-for="job in getPaginatedData()" :data="job" />
            </div>
          </div>

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
            <!-- <div class="job-card">
              <h3>{{ data.title }}</h3>
              <p>{{ data.description }}</p>
              <p>Duties: {{ data.duties }}</p>
              <p>Requirements: {{ data.requirements }}</p>
              <p>Benefits: {{ data.benefits }}</p>
              <p>Job Type: {{ data.jobType }}</p>
              <p>Job Mode: {{ data.jobMode }}</p>
              <p>Location: {{ data.location }}</p>
              <p>Min Salary: {{ data.minSalary }}</p>
              <p>Max Salary: {{ data.maxSalary }}</p>
              <p>Department ID: {{ data.departmentId }}</p>
            </div> -->
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
  components: {
    SingleJobCard,
    BaseIcon,
  },
  data() {
    return {
      currentdata: {
        keyword: "",
        location: "none",
        type: "none",
      },
      jobs: [], // Array to store the list of jobs fetched from DataStore
      currentPage: 1,
      jobsPerPage: 6,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.jobs.length / this.jobsPerPage);
    },
  },
  async mounted() {
    await this.fetchJobs(); // Fetch the jobs when the component is mounted
  },
  methods: {
    async fetchJobs() {
      try {
        const fetchedJobs = await DataStore.query(Job);
        console.log("jobs", fetchedJobs);
        this.jobs = fetchedJobs;
      } catch (error) {
        console.log("Error fetching jobs:", error);
      }
    },
    getPaginatedData() {
      const startIndex = (this.currentPage - 1) * this.jobsPerPage;
      const endIndex = startIndex + this.jobsPerPage;
      return this.jobs.slice(startIndex, endIndex);
    },
    searchHandler() {
      // Implement your search functionality here if needed
      // For example, you can filter the jobs based on the currentdata properties
      // and update the this.jobs array with the filtered results
    },
  },
};

</script>
