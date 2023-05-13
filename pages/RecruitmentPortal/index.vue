<template>
    <!-- <Navbar /> -->
    <NuxtLayout name="zen">
        <SectionMain>

    <!-- Start Hero -->
    <section class="relative table w-full py-72 bg-no-repeat bg-center bg-cover image1" >
      <div class="absolute inset-0 bg-black opacity-80"></div>
    </section>
    <!--end section-->
    <!-- End Hero -->


    <!-- Start -->
    <section class="relative md:py-24 py-16">
        <Container/>
    </section><!--end section-->
    <!-- End -->

    <!-- Back to top -->
    <a href="#" onclick="topFunction()" id="back-to-top" class="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 ltr:right-5 rtl:left-5 h-9 w-9 text-center bg-indigo-600 text-white leading-9"><i class="uil uil-arrow-up"></i></a>
    <!-- Back to top -->
    </SectionMain>
</NuxtLayout>
</template>

<script>
import SectionMain from "@/components/Sections/SectionMain.vue";
import Container from "@/components/RecruitmentPortal/Container.vue";

export default {
  components: {
    SectionMain,
    Container,
},
};
</script>

<style scoped>
.image1{
  background-image: url(../../images/job.jpg);
}
</style>