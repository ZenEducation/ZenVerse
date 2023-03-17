<template>
<body class="font-nunito text-base text-black dark:text-white dark:bg-slate-900">

    <!-- Start Hero -->
    <section class="relative table w-full py-36 lg:py-44 bg-no-repeat bg-center bg-cover">
        <div class="absolute inset-0 bg-black opacity-80"></div>
        <div class="container">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="mb-4 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Job Listings</h3>

            </div>
            <!--end grid-->
        </div>
        <!--end container-->
    </section>
    <!--end section-->
    <div class="relative">
        <div class="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden text-white dark:text-slate-900">
            <svg class="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!-- End Hero -->

    <!-- Start Section-->
    <section class="relative md:py-24 py-16">
        <!-- form container start -->
        <div class="container">
            <div class="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
                <div class="lg:col-start-2 lg:col-span-10">
                    <div class="bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded p-3 -mt-[150px]">
                        <form action="#">
                            <div class="registration-form text-dark text-start">
                                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                    <div class="filter-search-form relative filter-border">
                                        <i class="uil uil-briefcase-alt icons"></i>
                                        <input v-model="currentdata.keyword" name="name" type="text" id="job-keyword" class="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your keywords">
                                    </div>

                                    <div class="filter-search-form relative filter-border flex justify-center items-center">
                                        <i class="uil uil-map-marker icons"></i>
                                        <select v-model="currentdata.location" class="form-select" data-trigger name="choices-location" id="choices-location" aria-label="Default select example">
                                            <option value="none" selected>Select</option>
                                            <option v-for="location in sortedLocations" :value="location">{{ location }}</option>
                                        </select>
                                    </div>

                                    <div class="filter-search-form relative filter-border flex justify-center items-center">
                                        <i class="uil uil-briefcase-alt icons"></i>
                                        <select v-model="currentdata.type" class="form-select " data-trigger name="choices-type" id="choices-type" aria-label="Default select example">
                                            <option value="none" selected>Select</option>
                                            <option v-for="location in sortedTypes" :value="location">{{ location }}</option>
                                        </select>
                                    </div>

                                    <input type="submit" @click.prevent="searchHandler()" id="search" name="search" style="height: 60px;" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white searchbtn submit-btn w-100" value="Search">
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
            <div class="container">
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
                                <a href="#" class="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 ltr:rounded-l-lg rtl:rounded-r-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                    <i class="uil uil-angle-left text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                                </a>
                            </li>
                            <li v-for="i in totalPages" :key="i" @click="currentPage = i">
                                <a href="#" v-if="i == currentPage" aria-current="page" class="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600">{{i}}</a>
                                <a href="#" v-else class="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">{{i}}</a>
                            </li>
                            <li v-if="currentPage != totalPages" @click="currentPage++">
                                <a href="#" class="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 ltr:rounded-r-lg rtl:rounded-l-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                    <i class="uil uil-angle-right text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="container">
                <div class="flex justify-center items-center p-10 mt-8 gap-[30px] ">
                    <h2 class="text-center" >Sorry , There are currently no job openings that match the selected filter.</h2>
                </div>

            </div>
        </div>

        <div class="fixed top-[30%] -right-2 z-50">
            <span class="relative inline-block rotate-90">
                <input type="checkbox" class="checkbox opacity-0 absolute" id="chk" @click="darkModeToggle" />
                <label class="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk">
                    <i class="uil uil-moon text-[20px] text-yellow-500"></i>
                    <i class="uil uil-sun text-[20px] text-yellow-500"></i>
                    <span class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
                </label>
            </span>
        </div>

    </section>
    <!--end section-->
    <!-- End Section-->

</body>
</template>

<script>
import SingleJobCard from '@/components/Careers/SingleJobCard.vue'
import {
    useStyleStore
} from "@/stores/style.js";

export default {
    name: "AllJobs",
    components: {
        SingleJobCard
    },
    data() {
        return {
            filterdata: {
                keyword: "",
                location: "none",
                type: "none"

            },
            currentdata: {
                keyword: "",
                location: "none",
                type: "none"
            },
            jobsdata: [{
                    "jobtitle": "Software Engineering",
                    "daysafterposted": 3,
                    "jobtype": "Full Time",
                    "salarystart": 950,
                    "salaryend": 1100,
                    "salaryperiod": "mo",
                    "companyname": "Facebook Ltd.",
                    "location": "Australia",
                    "joblink": "#0",
                    "companyicon": ""
                },
                {
                    "jobtitle": "Web Developer",
                    "daysafterposted": 5,
                    "jobtype": "Part Time",
                    "salarystart": 700,
                    "salaryend": 800,
                    "salaryperiod": "wk",
                    "companyname": "Google Inc.",
                    "location": "United States",
                    "joblink": "#1",
                    "companyicon": ""
                },
                {
                    "jobtitle": "Data Analyst",
                    "daysafterposted": 1,
                    "jobtype": "Contract",
                    "salarystart": 1200,
                    "salaryend": 1300,
                    "salaryperiod": "wk",
                    "companyname": "Amazon Web Services",
                    "location": "United Kingdom",
                    "joblink": "#2",
                    "companyicon": ""
                },
                {
                    "jobtitle": "Frontend Developer",
                    "daysafterposted": 2,
                    "jobtype": "Full Time",
                    "salarystart": 1000,
                    "salaryend": 1200,
                    "salaryperiod": "mo",
                    "companyname": "Apple Inc.",
                    "location": "Canada",
                    "joblink": "#3",
                    "companyicon": ""
                },
                {
                    "jobtitle": "UI/UX Designer",
                    "daysafterposted": 7,
                    "jobtype": "Contract",
                    "salarystart": 800,
                    "salaryend": 900,
                    "salaryperiod": "wk",
                    "companyname": "Microsoft Corporation",
                    "location": "Germany",
                    "joblink": "#4",
                    "companyicon": ""
                },
                {
                    "jobtitle": "Mobile App Developer",
                    "daysafterposted": 4,
                    "jobtype": "Full Time",
                    "salarystart": 1100,
                    "salaryend": 1300,
                    "salaryperiod": "mo",
                    "companyname": "Samsung Electronics",
                    "location": "South Korea",
                    "joblink": "#5",
                    "companyicon": ""
                },
                {
                    "jobtitle": "Backend Developer",
                    "daysafterposted": 6,
                    "jobtype": "Part Time",
                    "salarystart": 900,
                    "salaryend": 1000,
                    "salaryperiod": "wk",
                    "companyname": "Oracle Corporation",
                    "location": "Japan",
                    "joblink": "#6",
                    "companyicon": ""
                },
                {
                    "jobtitle": "Database Administrator",
                    "daysafterposted": 2,
                    "jobtype": "Contract",
                    "salarystart": 1000,
                    "salaryend": 1100,
                    "salaryperiod": "wk",
                    "companyname": "IBM Corporation",
                    "location": "United States",
                    "joblink": "#7",
                    "companyicon": ""
                },
                {
                    "jobtitle": "Software Engineering",
                    "daysafterposted": 3,
                    "jobtype": "Full Time",
                    "salarystart": 950,
                    "salaryend": 1100,
                    "salaryperiod": "mo",
                    "companyname": "Facebook Ltd.",
                    "location": "Australia",
                    "joblink": "#0",
                    "companyicon": ""
                },
                {
                    "jobtitle": "Web Developer",
                    "daysafterposted": 5,
                    "jobtype": "Part Time",
                    "salarystart": 700,
                    "salaryend": 800,
                    "salaryperiod": "wk",
                    "companyname": "Google Inc.",
                    "location": "United States",
                    "joblink": "#1",
                    "companyicon": ""
                },
                {
                    "jobtitle": "Data Analyst",
                    "daysafterposted": 1,
                    "jobtype": "Contract",
                    "salarystart": 1200,
                    "salaryend": 1300,
                    "salaryperiod": "wk",
                    "companyname": "Amazon Web Services",
                    "location": "United Kingdom",
                    "joblink": "#2",
                    "companyicon": ""
                },
                {
                    "jobtitle": "Frontend Developer",
                    "daysafterposted": 2,
                    "jobtype": "Full Time",
                    "salarystart": 1000,
                    "salaryend": 1200,
                    "salaryperiod": "mo",
                    "companyname": "Apple Inc.",
                    "location": "Canada",
                    "joblink": "#3",
                    "companyicon": ""
                },
                {
                    "jobtitle": "UI/UX Designer",
                    "daysafterposted": 7,
                    "jobtype": "Contract",
                    "salarystart": 800,
                    "salaryend": 900,
                    "salaryperiod": "wk",
                    "companyname": "Microsoft Corporation",
                    "location": "Germany",
                    "joblink": "#4",
                    "companyicon": ""
                },
                {
                    "jobtitle": "Mobile App Developer",
                    "daysafterposted": 4,
                    "jobtype": "Full Time",
                    "salarystart": 1100,
                    "salaryend": 1300,
                    "salaryperiod": "mo",
                    "companyname": "Samsung Electronics",
                    "location": "South Korea",
                    "joblink": "#5",
                    "companyicon": ""
                },
                {
                    "jobtitle": "Backend Developer",
                    "daysafterposted": 6,
                    "jobtype": "Part Time",
                    "salarystart": 900,
                    "salaryend": 1000,
                    "salaryperiod": "wk",
                    "companyname": "Oracle Corporation",
                    "location": "Japan",
                    "joblink": "#6",
                    "companyicon": ""
                },
                {
                    "jobtitle": "Database Administrator",
                    "daysafterposted": 2,
                    "jobtype": "Contract",
                    "salarystart": 1000,
                    "salaryend": 1100,
                    "salaryperiod": "wk",
                    "companyname": "IBM Corporation",
                    "location": "United States",
                    "joblink": "#7",
                    "companyicon": ""
                }
            ],
            currentPage: 1,
            perPage: 6,
        }
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
                    return job.jobtitle.toLowerCase().includes(this.filterdata.keyword.toLowerCase());
                });
            }

            if (this.filterdata.location != 'none') {
                filteredJobs = filteredJobs.filter((job) => {
                    return job.location === this.filterdata.location;
                });
            }

            if (this.filterdata.type != 'none') {
                filteredJobs = filteredJobs.filter((job) => {
                    return job.jobtype === this.filterdata.type;
                });
            }

            return filteredJobs;
        },
        totalPages() {
            const total = Math.ceil(this.filteredJobs.length / this.perPage);
            console.log(this.filteredJobs.length, this.perPage)
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
        }
    },
    setup() {
        const styleStore = useStyleStore();

        const setStyle = (style) => {
            styleStore.setStyle(style);
            styleStore.setDarkMode(false);
        };

        const darkModeToggle = () => {
            console.log("dark called")
            styleStore.setDarkMode();
        };

        return {
            setStyle,
            darkModeToggle
        };
    },
};
</script>

<style scoped src="@/assets/css/tailwind/allJobs.css"></style>
