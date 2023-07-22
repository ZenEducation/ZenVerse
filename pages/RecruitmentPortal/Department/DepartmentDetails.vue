<template>
    <div>
      <NuxtLayout name="zen">
        <!-- hero background  -->
        <section
          class="relative table w-full py-72 bg-no-repeat bg-center bg-cover hero_section"
        >
          <div class="absolute inset-0 bg-slate-900 opacity-80"></div>
        </section>
        <!--end section-->
        <!-- End Hero -->
  
        <!-- Start -->
        <section class="relative md:py-24 py-16 px-3">
          <div class="container">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
              <div class="lg:col-span-4 md:col-span-5">
                <div class="lg:-mt-[330px] -mt-[299px]">
                  <div
                    class="rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"
                  >
                    <div
                      class="text-center py-8 p-6 border-b border-gray-100 dark:border-gray-700"
                    >
                      <img
                        src="https://shreethemes.in/techwind/layouts/assets/images/client/circle-logo.png"
                        class="h-24 w-24 p-4 shadow-md mx-auto rounded-full block"
                        alt=""
                      />
                      <h5 class="mt-5 text-xl font-semibold mb-0">CircleCi</h5>
                      <p class="text-slate-400 mb-0">Internet Services</p>
                    </div>
  
                    <div class="p-6">
                      <h5 class="font-semibold">Company Details :</h5>
                      <ul class="list-none mt-4">
                        <li class="flex mt-2 items-center font-medium">
                          <BaseIcon
                            :path="mdiMapMarkerOutline"
                            class="uil uil-map-marker mr-2 text-orange-500"
                            size="20"
                          /><span class="text-slate-400 mr-3">Location :</span>
                          San Francisco
                        </li>
                        <li class="flex mt-2 items-center font-medium">
                          <BaseIcon
                            :path="mdiLinkVariant"
                            class="uil uil-map-marker mr-2 text-orange-500"
                            size="19"
                          /><span class="text-slate-400 mr-3"
                            >Comapny :</span
                          >
                          circleci.com
                        </li>
                        <li class="flex mt-2 items-center font-medium">
                          <BaseIcon
                            :path="mdiCurrencyUsd"
                            class="uil uil-map-marker mr-2 text-orange-500"
                            size="22"
                          /><span class="text-slate-400 mr-3 "
                            >Revenue :</span
                          >
                          $ 5M / Annual
                        </li>
                        <li class="flex mt-2 items-center font-medium">
                          <BaseIcon
                            :path="mdiAccountMultipleOutline"
                            class="uil uil-map-marker mr-2 text-orange-500"
                            size="22"
                          /><span class="text-slate-400 mr-3"
                            >No. of employees :</span
                          >
                          200
                        </li>
                      </ul>
  
                 
                      <BaseButton label="Apply Now"
                      href="/"
                      color="info"
                      class="mt-6"
                      />
                    </div>
                  </div>
  
                  <div class="w-full leading-[0] border-0 mt-8">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                      style="border: 0"
                      class="w-full h-[500px]"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
  
              <div class="lg:col-span-8 md:col-span-7">
                <h4 class="text-xl font-semibold">About us :</h4>
                <p class="text-gray-500 dark:text-gray-400 mt-4">
                  Almost no business is immune from the need for quality software
                  development. The act of building quality software, and shipping
                  it quickly, has become the core engine of value creation in
                  companies across all industries. CircleCI allows teams to
                  rapidly release code they trust by automating the build, test,
                  and delivery process. Thousands of leading companies, including
                  Samsung, Ford Motor Company, Spotify, Lyft, Coinbase, PagerDuty,
                  Stitch Fix, and BuzzFeed rely on CircleCI to accelerate delivery
                  and improve quality.
                </p>
                <p class="text-gray-500 dark:text-gray-400 mt-4">
                  CircleCI was named a Leader in cloud-native continuous
                  integration by Forrester in 2021 and has been named to multiple
                  Best DevOps Tools lists. CircleCI is the first CI/CD tool to
                  become FedRAMP certified and processes more than 30 million
                  builds each month across Linux, macOS, Docker and Windows build
                  environments.
                </p>
                <p class="text-gray-500 dark:text-gray-400 mt-4">
                  Founded in 2011 and headquartered in San Francisco with a global
                  remote workforce, CircleCI is venture-backed by Scale Venture
                  Partners, Threshold Ventures (formerly DFJ), Baseline Ventures,
                  Top Tier Capital, Industry Ventures, Heavybit, Harrison Metal
                  Capital, Owl Rock Capital Partners, and NextEquity Partners.
                </p>
  
                <h4 class="mt-8 text-xl font-semibold">Join The Team :</h4>
                <p class="text-gray-500 dark:text-gray-400 mt-4">
                  Started in 2011, we have grown to over 200 employees all over
                  the world. Headquartered in San Francisco, we have offices in
                  London, Tokyo, Toronto, Boston, and Denver, with team members
                  working across 50+ cities and 13 countries.
                </p>
  
                <div class="grid lg:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                  <a href="page-job-detail.html">
                    <div
                      class="group flex bg-white dark:bg-slate-900 transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md"
                    >
                      <div
                        class="flex items-center justify-center h-[45px] min-w-[45px]  bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml-3"
                      >
                      <BaseIcon
                            :path="mdiLaptop"
                            class="uil uil-map-marker  text-info-500"
                            size="26"
                          />
                      </div>
                      <div class="content pl-3">
                        <h4
                          class="text-lg font-medium group-hover:text-indigo-600 duration-500 ease-in-out"
                        >
                          Senior Web Developer
                        </h4>
                        <p class="text-slate-400">London, UK</p>
                      </div>
                    </div>
                  </a>
  
                  <a href="page-job-detail.html">
                    <div
                      class="group flex bg-white dark:bg-slate-900 transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md"
                    >
                      <div
                        class="flex items-center justify-center h-[45px] min-w-[45px]  bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml-3"
                      >
                      <BaseIcon
                            :path="mdiCellphoneLink"
                            class="uil uil-map-marker  text-info-500"
                            size="26"
                          />
                      </div>
                      <div class="content pl-3">
                        <h4
                          class="text-lg font-medium group-hover:text-indigo-600 duration-500 ease-in-out"
                        >
                          Front-End Developer
                        </h4>
                        <p class="text-slate-400">Brasilia, Brazil</p>
                      </div>
                    </div>
                  </a>
  
                  <a href="page-job-detail.html">
                    <div
                      class="group flex bg-white dark:bg-slate-900 transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md"
                    >
                      <div
                        class="flex items-center justify-center h-[45px] min-w-[45px]  bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml-3"
                      >
                      <BaseIcon
                            :path="mdiMemory"
                            class="uil uil-map-marker  text-info-500"
                            size="26"
                          />
                      </div>
                      <div class="content pl-3">
                        <h4
                          class="text-lg font-medium group-hover:text-indigo-600 duration-500 ease-in-out"
                        >
                          Back-End Developer
                        </h4>
                        <p class="text-slate-400">Ottawa, Canada</p>
                      </div>
                    </div>
                  </a>
  
                  <a href="page-job-detail.html">
                    <div
                      class="group flex bg-white dark:bg-slate-900 transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md"
                    >
                      <div
                        class="flex items-center justify-center h-[45px] min-w-[45px] bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml-3"
                      >
                      
                      
                         <BaseIcon
                            :path="mdiGuitarPickOutline"
                            class="uil uil-map-marker  text-info-500"
                            size="26"
                          />
                      </div>
                      <div class="content pl-3">
                        <h4
                          class="text-lg font-medium group-hover:text-indigo-600 duration-500 ease-in-out"
                        >
                          UI Designer
                        </h4>
                        <p class="text-slate-400">Beijing, China</p>
                      </div>
                    </div>
                  </a>
  
                  <a href="page-job-detail.html">
                    <div
                      class="group flex bg-white dark:bg-slate-900 transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md"
                    >
                      <div
                        class="flex items-center justify-center h-[45px] min-w-[45px] bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml-3"
                      >
                      
                      <BaseIcon
                            :path="mdiDevices"
                            class="uil uil-map-marker  text-info-500"
                            size="26"
                          />
                      </div>
                      <div class="content pl-3">
                        <h4
                          class="text-lg font-medium group-hover:text-indigo-600 duration-500 ease-in-out"
                        >
                          UX Designer
                        </h4>
                        <p class="text-slate-400">Bogota, Colombia</p>
                      </div>
                    </div>
                  </a>
  
                  <a href="page-job-detail.html">
                    <div
                      class="group flex bg-white dark:bg-slate-900 transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md"
                    >
                      <div
                        class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml-3"
                      >
                      <BaseIcon
                            :path="mdiCrop"
                            class="uil uil-map-marker  text-info-500"
                            size="26"
                          />
                      </div>
                      <div class="content pl-3">
                        <h4
                          class="text-lg font-medium group-hover:text-indigo-600 duration-500 ease-in-out"
                        >
                          Php Developer
                        </h4>
                        <p class="text-slate-400">Havana, Cuba</p>
                      </div>
                    </div>
                  </a>
                </div>
  
                <a
                  href="page-job-grid.html"
                  class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 transition duration-500 mt-6 flex"
                  >See All Jobs   
                  <BaseIcon
                            :path="mdiChevronRight"
                            class="uil uil-map-marker  text-info-500"
                            size="26"
                          />
                 </a>
              </div>
            </div>
            <!--end grid-->
          </div>
          <!--end container-->
  
          <!-- mobile apps section  -->
      <div class="container md:mt-30 mt-16">
        <div class="grid md:grid-cols-12 grid-cols-1 items-center p-3 mt-12">
          <!--  svg image  -->
          <div class="lg:col-span-5 md:col-span-6">
            <img src="@/images/envelope.svg" class="mx-auto d-block" alt="" />
          </div>
          <!--  content  -->
          <div class="lg:col-span-7 md:col-span-6">
            <span
              class="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-1 rounded h-5"
              >Mobile Apps</span
            >
            <h4
              class="md:text-3xl text-2xl lg:leading-normal leading-normal font-medium my-4"
            >
              Available for your <br />
              Smartphones
            </h4>
            <p class="text-slate-400 max-w-xl mb-0">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 30000+
              companies worldwide.
            </p>
            <div class="my-5">
              <a href=""
                ><img
                  src="@/images/app/app.png"
                  class="m-1 inline-block"
                  alt=""
              /></a>

              <a href=""
                ><img
                  src="@/images/app/playstore.png"
                  class="m-1 inline-block"
                  alt=""
              /></a>
            </div>

            <div class="inline-block">
              <div
                class="pt-4 flex items-center border-t border-gray-100 dark:border-gray-700"
              >
                <BaseIcon
                  :path="mdiCellphone"
                  class="uil uil-map-marker text-indigo-600 mr-2"
                  size="45"
                  h="45"
                  w="45"
                />
                <div class="content">
                  <h6 class="mb-0 text-base font-medium">
                    Install app now on your cellphones
                  </h6>
                  <a
                    href=""
                    class="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out flex items-center mt-1"
                  >
                    <span>Learn More</span>
                    <BaseIcon
                      :path="mdiChevronRight"
                      class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                      size="20"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end gird-->
      </div>
          <!--end container-->
        </section>
        <!--end section-->
      </NuxtLayout>
    </div>
  </template>
  
  <script setup>
  // import section
  
  import { mdiMapMarkerOutline, mdiLinkVariant, mdiCurrencyUsd , mdiAccountMultipleOutline,mdiLaptop,mdiCellphoneLink,mdiMemory,mdiDevices,mdiGuitarPickOutline,mdiCrop,mdiChevronRight,mdiCellphone} from "@mdi/js";
  import BaseIcon from "~~/components/Display/BaseIcon.vue";
  import candidateData from "../../../dummyData/jobCandidiatePage/jobCandidateData.json";
  import BaseButton from "@/components/Buttons/BaseButton.vue";
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .hero_section {
    background-image: url("../../images/job.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  </style>
  