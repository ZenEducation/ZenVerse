<template>
  <!-- Start Hero -->
  <section
    class="relative table py-36 lg:py-44 w-full bg-no-repeat bg-center bg-cover heroSection"
  >
    <div class="absolute inset-0 bg-slate-900 opacity-80"></div>
    <div class="container mx-auto">
      <div class="grid grid-cols-1 pb-8 text-center mt-12">
        <h3
          class="md:text-4xl z-10 text-3xl md:leading-normal tracking-wide leading-normal font-small text-white"
        >
          {{ title }}
        </h3>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->

    <!-- breadcrumb start  -->
    <div class="absolute text-center z-10 bottom-10 right-0 left-0 mx-3">
      <ul class="mb-0 inline-block">
        <li
          class="inline uppercase breadcrumb-item text-[13px] font-bold ease-in-out text-white/50 px-1"
          v-for="(link, index) in previousLink"
          :key="index"
          :class="{}"
        >
          <NuxtLink
            :to="link.link"
            class="hover:text-white duration-500 inline pb-2"
          >
            {{ link.name }}
          </NuxtLink>
        </li>

        <li
          class="inline uppercase text-[13px] font-bold duration-500 ease-in-out text-white px-2"
          aria-current="page"
        >
          {{ props.links[props.links.length - 1].name }}
        </li>
      </ul>
    </div>
    <!-- breadcrumb end  -->
  </section>
  <!--end section-->
  <!-- curve svg  -->
  <div class="relative curve_svg_section">
    <div
      class="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden text-gray-50 dark:text-slate-800"
    >
      <svg
        id="wave"
        style="transform: rotate(0deg); transition: 0.3s"
        viewBox="0 0 1440 280"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          style="transform: translate(0, 0px); opacity: 1"
          fill="currentColor"
          d="M0,168L120,177.3C240,187,480,205,720,205.3C960,205,1200,187,1440,177.3C1680,168,1920,168,2160,144.7C2400,121,2640,75,2880,65.3C3120,56,3360,84,3600,88.7C3840,93,4080,75,4320,98C4560,121,4800,187,5040,196C5280,205,5520,159,5760,135.3C6000,112,6240,112,6480,121.3C6720,131,6960,149,7200,135.3C7440,121,7680,75,7920,56C8160,37,8400,47,8640,42C8880,37,9120,19,9360,18.7C9600,19,9840,37,10080,65.3C10320,93,10560,131,10800,158.7C11040,187,11280,205,11520,177.3C11760,149,12000,75,12240,37.3C12480,0,12720,0,12960,9.3C13200,19,13440,37,13680,65.3C13920,93,14160,131,14400,154C14640,177,14880,187,15120,158.7C15360,131,15600,65,15840,32.7C16080,0,16320,0,16560,0C16800,0,17040,0,17160,0L17280,0L17280,280L17160,280C17040,280,16800,280,16560,280C16320,280,16080,280,15840,280C15600,280,15360,280,15120,280C14880,280,14640,280,14400,280C14160,280,13920,280,13680,280C13440,280,13200,280,12960,280C12720,280,12480,280,12240,280C12000,280,11760,280,11520,280C11280,280,11040,280,10800,280C10560,280,10320,280,10080,280C9840,280,9600,280,9360,280C9120,280,8880,280,8640,280C8400,280,8160,280,7920,280C7680,280,7440,280,7200,280C6960,280,6720,280,6480,280C6240,280,6000,280,5760,280C5520,280,5280,280,5040,280C4800,280,4560,280,4320,280C4080,280,3840,280,3600,280C3360,280,3120,280,2880,280C2640,280,2400,280,2160,280C1920,280,1680,280,1440,280C1200,280,960,280,720,280C480,280,240,280,120,280L0,280Z"
        ></path>
      </svg>
    </div>
  </div>

  <!-- End Hero  -->
</template>

<script setup>
//imports
import { defineProps } from "vue";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import { computed } from "vue";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import { mdiBookmarkOutline, mdiMapMarker, mdiChevronRight } from "@mdi/js";
// props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  links: {
    type: Array,
    required: true,
  },
});

// previous links
const previousLink = computed(() => {
  return props.links.slice(0, props.links.length - 1);
});
</script>

<style scoped>
.heroSection {
  background-image: url("../../../images/job.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* height: 80vh !important; */
}

.breadcrumb-item::after {
  content: ">";
  margin-left: 0.5rem;
  /* color: #fff; */
}
.curve_svg_section {
  margin-top: 4% !important;
}
</style>
