<template>
  <NuxtLayout name="zen">
    <div class="text-base text-black dark:text-white dark:bg-slate-900">
      <!-- Start Hero -->
      <section
        class="relative table w-full py-36 lg:py-44 bg-black opacity-80 bg-no-repeat bg-center bg-cover"
      >
        <div>
          <div class="grid grid-cols-1 pb-8 text-center mt-10">
            <h3
              class="mb-4 md:text-4xl text-xl md:leading-normal leading-normal font-medium text-white"
            >
              Departments
            </h3>
          </div>
          <!--end grid-->
        </div>
        <!--end container-->
      </section>
      <!--end section-->
      <!-- End Hero -->

      <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div class="container relative w-full">
          <div
            class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]"
          >
            <SingleDepartment
              v-for="dept in data.departmentData"
              :deptData="dept"
            />
          </div>
          <!--end grid-->
        </div>
        <!--end container-->
      </section>
    </div></NuxtLayout
  >
</template>

<script setup>
import SingleDepartment from "~~/components/Careers/SingleDepartment.vue";
const data = {
  departmentData: [
    {
      name: "Google",
      image:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      location: "U.S.A",
      link: "https://www.google.com",
    },

    {
      name: "Amazon",
      image: "https://www.amazon.com/favicon.ico",
      location: "U.S.A",
      link: "https://www.amazon.com",
    },

    {
      name: "Netflix",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      location: "U.S.A",
      link: "https://www.netflix.com",
    },

    {
      name: "Microsoft",
      image: "https://www.microsoft.com/favicon.ico",
      location: "U.S.A",
      link: "https://www.microsoft.com",
    },

    {
      name: "Twitter",
      image: "https://abs.twimg.com/favicons/twitter.ico",
      location: "U.S.A",
      link: "https://twitter.com",
    },

    {
      name: "LinkedIn",
      image: "https://www.amazon.com/favicon.ico",
      location: "U.S.A",
      link: "https://www.linkedin.com",
    },

    {
      name: "YouTube",
      image: "https://www.amazon.com/favicon.ico",
      location: "U.S.A",
      link: "https://www.youtube.com",
    },

    {
      name: "Instagram",
      image: "https://www.amazon.com/favicon.ico",
      location: "U.S.A",
      link: "https://www.instagram.com",
    },

    {
      name: "Apple",
      image: "https://www.amazon.com/favicon.ico",
      location: "U.S.A",
      link: "https://www.apple.com",
    },

    {
      name: "Snapchat",
      image: "https://www.snapchat.com/favicon.ico",
      location: "U.S.A",
      link: "https://www.snapchat.com",
    },

    {
      name: "TikTok",
      image: "https://www.amazon.com/favicon.ico",
      location: "China",
      link: "https://www.tiktok.com",
    },

    {
      name: "WhatsApp",
      image: "https://www.amazon.com/favicon.ico",
      location: "U.S.A",
      link: "https://www.whatsapp.com",
    },
  ],
};
</script>
<style scoped>
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 12px;
  padding-left: 12px;
}
@media (min-width: 540px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
    padding-right: 1rem;
    padding-left: 1rem;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    padding-right: 45px;
    padding-left: 45px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
    padding-right: 5rem;
    padding-left: 5rem;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
    padding-right: 13rem;
    padding-left: 13rem;
  }
}
</style>
