<template>
  <div>
    <NuxtLayout name="zen">
      <div
        class="font-nunito text-base text-black dark:text-white dark:bg-slate-900"
      >
        <!-- Start Hero -->
        <section
          class="relative table w-full py-72 bg-no-repeat bg-top bg-cover"
        >
          <div class="absolute inset-0 bg-black opacity-80 dark:bg-white"></div>
        </section>
        <!--end section-->
        <!-- End Hero -->

        <!-- Start -->
        <section class="relative md:py-24 py-16">
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
                        src="../../images/user-64-09.jpg"
                        class="h-24 w-24 p-1 shadow-md dark:shadow-gray-800 mx-auto rounded-full block"
                        alt=""
                      />
                      <h5 class="mt-5 text-xl font-semibold mb-0">
                        {{ candidateData.name }}
                      </h5>
                      <p class="text-slate-400 mb-0">
                        {{ candidateData.position }}
                      </p>
                    </div>

                    <div class="p-6">
                      <h5 class="font-semibold">Company Details :</h5>
                      <ul class="list-none mt-4">
                        <li class="flex mt-2 items-center font-medium">
                          <i
                            data-feather="mail"
                            class="h-4 w-4 text-amber-500 ltr:mr-3 rtl:ml-3"
                          ></i
                          ><span class="text-slate-400 ltr:mr-3 rtl:ml-3"
                            >Email :</span
                          >
                          {{ candidateData.Email }}
                        </li>
                        <li class="flex mt-2 items-center font-medium">
                          <i
                            data-feather="gift"
                            class="h-4 w-4 text-amber-500 ltr:mr-3 rtl:ml-3"
                          ></i
                          ><span class="text-slate-400 ltr:mr-3 rtl:ml-3"
                            >D.O.B. :</span
                          >
                          {{ candidateData.birthDay }}
                        </li>
                        <li class="flex mt-2 items-center font-medium">
                          <i
                            data-feather="home"
                            class="h-4 w-4 text-amber-500 ltr:mr-3 rtl:ml-3"
                          ></i
                          ><span class="text-slate-400 ltr:mr-3 rtl:ml-3"
                            >Address :</span
                          >
                          {{ candidateData.address }}
                        </li>
                        <li class="flex mt-2 items-center font-medium">
                          <i
                            data-feather="map-pin"
                            class="h-4 w-4 text-amber-500 ltr:mr-3 rtl:ml-3"
                          ></i
                          ><span class="text-slate-400 ltr:mr-3 rtl:ml-3"
                            >City :</span
                          >
                          {{ candidateData.city }}
                        </li>
                        <li class="flex mt-2 items-center font-medium">
                          <i
                            data-feather="globe"
                            class="h-4 w-4 text-amber-500 ltr:mr-3 rtl:ml-3"
                          ></i
                          ><span class="text-slate-400 ltr:mr-3 rtl:ml-3"
                            >Country :</span
                          >
                          {{ candidateData.country }}
                        </li>
                        <li class="flex mt-2 items-center font-medium">
                          <i
                            data-feather="server"
                            class="h-4 w-4 text-amber-500 ltr:mr-3 rtl:ml-3"
                          ></i
                          ><span class="text-slate-400 ltr:mr-3 rtl:ml-3"
                            >Postal Code :</span
                          >
                          {{ candidateData.postalCode }}
                        </li>
                        <li class="flex mt-2 items-center font-medium">
                          <i
                            data-feather="phone"
                            class="h-4 w-4 text-amber-500 ltr:mr-3 rtl:ml-3"
                          ></i
                          ><span class="text-slate-400 ltr:mr-3 rtl:ml-3"
                            >Mobile :</span
                          >
                          {{ candidateData.mobile }}
                        </li>
                      </ul>


                      <a
                        href="#0"
                        class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6"
                        >Contact Me</a
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-8 md:col-span-7">
                <h4 class="text-xl font-semibold">About us :</h4>
                <p class="text-slate-400 mt-4">{{ candidateData.about }}</p>
                <h4 class="mt-8 text-xl font-semibold">Skills :</h4>

                <CandidateSkillSingle
                  v-for="skill in candidateData.skills"
                  :skillName="skill.skillName"
                  :num="skill.num"
                />

                <h4 class="mt-8 text-xl font-semibold">Experience :</h4>

                <CandidateExperienceSingle
                  v-for="exp in candidateData.experience"
                  :data="exp"
                />

                <h4 class="mt-8 text-xl font-semibold">Projects :</h4>

                <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-8">
                  <CandidateProjectSingle
                    v-for="project in candidateData.projects"
                    :data="project"
                  />
                </div>
              </div>
            </div>
            <!--end grid-->
          </div>
          <!--end container-->
        </section>
        <!-- <CandidateSkillSingle /> -->
        <!-- <CandidateExperienceSingle /> -->
        <!-- <CandidateProjectSingle /> -->
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import CandidateSkillSingle from "@/components/Careers/CandidateSkillSingle.vue";
import CandidateProjectSingle from "@/components/Careers/CandidateProjectSingle.vue";
import CandidateExperienceSingle from "@/components/Careers/CandidateExperienceSingle.vue";

const candidateData = {
  name: "Thomas Brewer",
  position: "Senior Web Developer",
  Email: "thomas@mail.com",
  birthDay: "31st Dec, 1996",
  address: "15 Razy street",
  city: "London",
  country: "UK",
  postalCode: "521452",
  mobile: "(+125) 1542 - 8452",
  about:
    "Obviously I'M Web Developer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.",
  skills: [
    {
      skillName: "WordPress",
      num: "84",
    },
    {
      skillName: "JavaScript",
      num: "79",
    },
    {
      skillName: "HTML",
      num: "95",
    },
  ],
  experience: [
    {
      id: 1,
      position: "Full Stack Developer",
      companyName: "Shreethemes",
      location: "India",
      logo: "",
      startYear: "2019",
      endYear: "22",
      details:
        "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.",
    },
    {
      id: 2,
      position: "Back-end Developer",
      companyName: "Shreethemes",
      location: "U.S.",
      logo: "",
      startYear: "2019",
      endYear: "22",
      details:
        "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.",
    },
  ],
  projects: [
    {
      image: "../../images/project-main-image.jpg",
      name: "project 1",
    },
    {
      image: "../../images/project-main-image.jpg",
      name: "project 2",
    },
    {
      image: "../../images/project-main-image.jpg",
      name: "project 3",
    },
    {
      image: "../../images/project-main-image.jpg",
      name: "project 4",
    },
  ],
};
</script>

<style scoped src="@/assets/css/tailwind/techwind.css"></style>
