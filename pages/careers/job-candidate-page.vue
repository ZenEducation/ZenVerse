<template>
  <NuxtLayout>
    <!-- hero background  -->
    <HeroBackground :title="title" :links="links" />

    <!-- candidate card section -->
    <section class="relative md:py-5 py-10 bg-gray-50 dark:bg-slate-800">
      <div class="container mx-auto">
        <div
          class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] px-3 md:px-10"
        >
          <!-- cards -->
          <CardCandidate
            v-for="(item, idx) in candidate"
            :key="idx"
            :item="item"
          />
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
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
          <div class="my-5">
            <a href=""
              ><img src="@/images/app/app.png" class="m-1 inline-block" alt=""
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
    <!-- footer -->
    <FooterBar />
  </NuxtLayout>
</template>

<script setup>
// import section
import HeroBackground from "@/components/HeroBackground/HeroBackground.vue";
import CardCandidate from "~~/components/Cards/CardCandidate.vue";
import { mdiChevronRight, mdiCellphone } from "@mdi/js";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import NuxtLayout from "~~/layouts/default.vue";
import FooterBar from "~~/components/Footers/FooterBar.vue";
import candidateData from "./candidate-date.json";

const candidate = candidateData.values;

const title = "Company List";

// breadcrumb links
const links = [
  {
    name: "Techwind",
    link: "/",
  },
  {
    name: "Job",
    link: "/careers/index-job",
  },
  {
    name: "Companies",
    link: "",
  },
];
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
