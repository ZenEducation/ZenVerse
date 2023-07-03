<template>
  <div>
    <NuxtLayout name="zen">
      <!-- hero background  -->
      <HeroBackground
        :title="title"
        :links="links"
        :location="location"
        :degegnation="degegnation"
      />

      <!-- candidate card section -->
      <section
        class="relative md:py-5 py-10 bg-gray-50 dark:bg-slate-800 md:px-12"
      >
        <div class="container mx-auto px-4 md:px-12">
          <div class="mb-4 text-xl font-normal">Description:</div>
          <div class="text-gray-500 dark:text-gray-400">
            Our vision is to provide the next billion people with access to
            products that exemplify the ideals of Techwind. These ideals - which
            include peer-to-peer transactions, decentralization, censorship
            resistance, and permissionless-ness - support economic freedom.<br /><br />

            Our approach is to develop and promote widely accessible products
            that support economic freedom. For example, our digital wallet -
            which has 16 million downloads - provides people with an
            easy-to-use, non-custodial method for buying, selling, storing,
            sending, receiving, and trading cryptocurrencies.
          </div>
          <div class="mb-4 text-xl font-normal mt-5">Duties:</div>
          <div class="flex">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Work alongside Product, Engineering, Design and Marketing to build
              world-class cryptocurrency applications and experiences
            </div>
          </div>
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Provide produce vision and strategy for the team
            </div>
          </div>

          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Design and lead a multi-year roadmap in accordance with company's
              OKRs, strategy and vision
            </div>
          </div>
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Build and lead an exceptional engineering team to innovate,
              invent, implement and deploy complex software solutions in
              mission-critical environment
            </div>
          </div>
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Understand customer needs and gather product requirements.
              Identify market opportunities and define product vision and
              strategy
            </div>
          </div>

          <div class="mb-4 text-xl font-normal mt-5">Requirements</div>

          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              5+ years of Product Management, Product Marketing or Product
              Growth experience with creating product roadmaps from conception
              to launch, driving product vision and defining go-to-market
              strategy
            </div>
          </div>
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Has experience designing, implementing and/or integrating IAM
              solutions
            </div>
          </div>
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Has managed engineering teams, designers, and collaborated with
              other product people
            </div>
          </div>
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Strong project management skills and ability to work across
              different product teams
            </div>
          </div>
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Strong leadership skills
            </div>
          </div>
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Agile mindset to improve iteratively, rather than placing big long
              term bets
            </div>
          </div>
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Excellent communication skills
            </div>
          </div>
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Communicates well in both written and verbal English
            </div>
          </div>

          <div class="mb-4 text-xl font-normal mt-5">Nice To Have</div>

          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Strong understanding of blockchain, both technical and practical
            </div>
          </div>
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Cryptocurrency or financial services product management is a big
              plus
            </div>
          </div>
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Experience in KYC (know your customer), AML (anti-money
              laundering) and IAM services
            </div>
          </div>
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Understanding of custodial vs non-custodial aspects of
              cryptocurrency financial products
            </div>
          </div>
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Financial/payment apps experience
            </div>
          </div>

          <div class="mb-4 text-xl font-normal mt-5">Benefits
</div>
<div class="text-gray-500 dark:text-gray-400">
  Bitcoin.com is paving the way for the next generation of financial technology products and platforms. We're bringing cryptocurrency and the future of money to the masses. We’d love to have you on board. <br> <br>
  We are serious about what we do, but more importantly, we have a lot of fun doing it. Our work culture is modern, meaning we strive for work experiences based on transparency, productivity, trust, and passion. For all employees, benefits include:
            </div>

            <div class="flex mt-4">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Flexible work hours
            </div>
          </div>


      
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Remote work

            </div>
          </div>
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Health insurance reimbursement

            </div>
          </div>
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Wellness program (gym, etc.)

            </div>
          </div>
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Yoga classes

            </div>
          </div>
          <div class="flex mt-1">
            <div class="pr-2">
              <BaseIcon
                :path="mdiArrowRight"
                class="uil uil-map-marker text-indigo-600 ltr:mr-1 rtl:ml-1"
                size="18"
              />
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              Japanese classes

            </div>
          </div>
          <div class="text-gray-500 dark:text-gray-400 mt-4">
            For employees residing in Japan, we offer "permanent employment" status (正社員) and the option to be paid in yen. <br> <br>
            Employees residing outside of Japan are classified as Independent Contractors and are paid in the cryptocurrency of their choice.


            </div>
            <div class="mt-4">
            <BaseButton
            href="/"
            label="Apply Now"
            :icon="mdiCreditCardOutline"
            color="info"
            class=""
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
// import section
import HeroBackground from "~~/components/RecuitmentPortal/JobCandidiatePage/HeroBackground.vue";
import CardCandidate from "~~/components/RecuitmentPortal/JobCandidiatePage/CardCandidate.vue";
import { mdiChevronRight, mdiCellphone, mdiArrowRight } from "@mdi/js";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import candidateData from "../../../dummyData/jobCandidiatePage/jobCandidateData.json";
import BaseButton from "@/components/Buttons/BaseButton.vue";
const candidate = candidateData.values;
const title = "Senior Web Developer";
const location = " London, UK ";
const degegnation = "Full Time";
// breadcrumb links
const links = [
  {
    name: "TECHWIND",
    link: "/",
  },
  {
    name: "JOB",
    link: "/careers/index-job",
  },
  {
    name: "JOB DETAIL",
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
