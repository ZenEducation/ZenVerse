<template>
    <div>
      <NuxtLayout name="zen">
        <!-- hero background  -->
        <section
    class="w-full h-[150px] bg-no-repeat bg-center bg-cover heroSection"
  >
    <div class="w-full h-full  bg-slate-900 opacity-80">
     
    </div>
    
    <!--end container-->


    <!-- breadcrumb end  -->
  </section>
  <section>

  <div class="details_section container flex">
    <div class="bg-red-500 ">
        <!-- image card -->
        <div class="comanyDetails ">
            <div class="rounded-full shadow mx-auto p-4 text-center ">
                <img src="https://images.pexels.com/photos/7573994/pexels-photo-7573994.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="w-12 h-12 rounded-full" >
            </div>
            <div class="text-center bg-green-500">
                CircleCi

            </div>
            <div class="text-center">
                Internet Services
            </div>
        </div>
    </div>
    <div class="bg-blue-500  content_section ">
xaxaxa

    </div>

  </div>
 

  </section>


  
        <!-- mobile apps section  -->
        <div class="container md:mt-30 mt-16">
          <div class="grid md:grid-cols-12 grid-cols-1 items-center p-3">
            <!--  svg image  -->
            <div class="lg:col-span-5 md:col-span-6">
              <img src="@/images/envelope.svg" class="mx-auto d-block" alt="" />
            </div>
            <!--  content  -->
            <div class="lg:col-span-7 md:col-span-6">
              <span
                class="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5"
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
      </NuxtLayout>
    </div>
  </template>
  
  <script setup>
  import { mdiChevronRight, mdiCellphone, mdiArrowRight } from "@mdi/js";
  import BaseIcon from "~~/components/Display/BaseIcon.vue";
  import candidateData from "../../dummyData/jobCandidiatePage/jobCandidateData.json";
  import BaseButton from "@/components/Buttons/BaseButton.vue";


  // breadcrumb links

  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  .heroSection {
    height: 80vh;
  background-image: url("../../images/job.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* height: 80vh !important; */
}

.details_section{
    position: relative;
    /* margin-top: -200px; */
    width: 1200px;
    background: green;
}
.comanyDetails{
    height: 200px;
}.details_section{
    width: 40%;
}
.content_section{
    /* margin-top: 20px; */
    width: 60%;
}
  </style>
  