<template>
  <div class="bg-white shadow-box12 rounded-[8px] transition duration-100 hover:shadow-box13">
    <div class="course-thumb h-[260px] rounded-t-[8px]  relative">
      <img src="../../assets/images/all-img/blog-3.png" alt="" class=" w-full h-full object-cover rounded-t-[8px]">
      <span class="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">Education</span>
    </div>
    <div class="course-content p-8">
      <div class="flex   lg:space-x-10 space-x-5 mb-5">
        <!-- <a class=" flex items-center space-x-2" href="blog-single.html"> -->
          <img src="../../assets/images/svg/admin.svg" alt="Not Available">
          <!-- <span>Admin</span> -->
        <!-- </a> -->
        <!-- <a class=" flex items-center space-x-2" href="blog-single.html"> -->
          <img src="../../assets/images/svg/calender.svg" alt="">
          <span>{{ `${new Date(blog.createdAt).getDate()} - ${new Date(blog.createdAt).getMonth()} - ${new Date(blog.createdAt).getFullYear()}`  }}</span>
        <!-- </a> -->
      </div>
      <h4 class=" text-xl mb-5 font-bold">
        <!-- <a href="blog-single.html" class=" hover:text-primary transition duration-150"> -->
          {{ blog.title }}
        <!-- </a> -->
      </h4>
      <a href="blog-single.html" class=" text-black font-semibold hover:underline transition duration-150">Read More</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blog']
}
</script>