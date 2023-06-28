<template>
  <NuxtLayout name="zen">
    <div class="text-base text-black dark:text-white dark:bg-slate-900">
      <!-- Start Hero -->
      <section class="relative table w-full py-36 lg:py-44 bg-black opacity-80 bg-no-repeat bg-center bg-cover">
        <div>
          <div class="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 class="mb-4 md:text-4xl text-xl md:leading-normal leading-normal font-medium text-white">
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
          <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
            <SingleDepartment v-for="dept in departmentData" :deptData="dept" />
          </div>
          <!--end grid-->
        </div>
        <!--end container-->
      </section>
    </div>
  </NuxtLayout>
</template>
<script setup>
import SingleDepartment from "@/components/RecuitmentPortal/DepartmentCard.vue";

import { ref, onMounted } from "vue";

const departmentData = ref([]);

onMounted(() => {
  fetch("https://aljw4fgbzrgkjkntp2yvc2dzgm.appsync-api.ap-south-1.amazonaws.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "da2-abaq7ccxdnf6vb7w4tux65kg5q",
    },
    body: JSON.stringify({
      query: `
        query ListDepartments {
          departments: listDepartments {
            items {
              departmentId
              name
              location
              description
              logoUri
              createdAt
              updatedAt
            }
          }
        }
      `,
    }),
  })
    .then(response => response.json())
    .then(data => {
      departmentData.value = data.data.departments.items; // Assign queried department data to departmentData array
    })
    .catch(error => {
      console.error("GraphQL query error:", error);
    });
});
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
