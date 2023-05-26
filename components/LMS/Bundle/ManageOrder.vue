<template>
    <div>
      <p class="font-bold text-xl">Manage Order</p>
      <p class="text-sm mb-6">Change the order of the products based on priority</p>
    </div>
  <table>

      <VueDraggableNext
        class="dragArea list-group w-full"
        @change="log"
        tag="tbody"
        :list="items"
      >
        <tr v-for="(item,index) in items" :key="item.CourseID" class="cursor-move">

          <td data-label="Drag">
            <DisplayBaseIcon
            :path="mdiDotsGrid"
            />
          </td>
          <td data-label="Index">
            {{ index + 1}}
          </td>
          <td data-label="Title">
            <img :src="image" class="h-12 inline pr-2" alt="" />
            {{ item.title }}
          </td>
          <td data-label="Price">
            <template v-if="item.isFree"> Free </template>
            <template v-else>
              {{ item.price }}
            </template>
          </td>

          <td data-label="Type">
            {{ item.type }}
          </td>
          <td data-label="Settings">
            <DisplayBaseIcon
            :path="mdiDotsVertical"
            />
          </td>
        </tr>
      </VueDraggableNext>
  </table>
</template>

<script setup>
import { ref } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import image from '@/assets/img/bundleImage.png'
import { mdiDotsGrid, mdiDotsVertical } from "@mdi/js";

const list = ref([
  { name: "John", id: 1 },
  { name: "Joao", id: 2 },
  { name: "Jean", id: 3 },
  { name: "Gerard", id: 4 },
]);

const items = ref([
  {
    CourseID: "course1",
    type: "Mock Test",
    title: "Mechanics: Newton's Laws of Motion",
    days: 234,
    status: "Published",
    PublishedDate: "2021-10-01",
    isFree: true,
    price: 200,
    isEnabled: true,
  },
  {
    CourseID: "course2",
    type: "Video Lecture",
    title: "Thermodynamics: Heat and Temperature",
    days: 123,
    status: "Unpublished",
    PublishedDate: "2022-01-15",
    isFree: false,
    price: 1800,
    isEnabled: false,
  },
  {
    CourseID: "course3",
    type: "PDF File",
    title: "Optics: Geometrical Optics and Reflection",
    days: 456,
    status: "Coming Soon",
    PublishedDate: "2023-05-01",
    isFree: true,
    price: 1500,
    isEnabled: false,
  },
  {
    CourseID: "course4",
    type: "Mock Test",
    title: "Electricity and Magnetism: Electric Circuits",
    days: 789,
    status: "Scheduled",
    PublishedDate: "2023-08-10",
    isFree: false,
    price: 2000,
    isEnabled: false,
  },
  {
    CourseID: "course5",
    type: "Mock Test",
    title: "Waves: Wave Properties and Sound",
    days: 567,
    status: "Published",
    PublishedDate: "2023-03-25",
    isFree: true,
    price: 1500,
    isEnabled: false,
  },
  {
    CourseID: "course6",
    type: "Mock Test",
    title: "Modern Physics: Quantum Mechanics",
    days: 345,
    status: "Published",
    PublishedDate: "2022-06-20",
    isFree: true,
    price: 2000,
    isEnabled: false,
  },
  {
    CourseID: "course7",
    type: "Video Lecture",
    title: "Electromagnetism: Magnetic Fields and Induction",
    days: 678,
    status: "Unpublished",
    PublishedDate: "2023-01-05",
    isFree: false,
    price: 1500,
    isEnabled: false,
  },
  {
    CourseID: "course8",
    type: "PDF File",
    title: "Astrophysics: Stars and Galaxies",
    days: 456,
    status: "Coming Soon",
    PublishedDate: "2024-02-14",
    isFree: true,
    price: 2000,
    isEnabled: false,
  },
  {
    CourseID: "course9",
    type: "Video Lecture",
    title: "Nuclear Physics: Radioactivity and Nuclear Reactions",
    days: 987,
    status: "Published",
    PublishedDate: "2022-12-01",
    isFree: true,
    price: 1500,
    isEnabled: false,
  },
  {
    CourseID: "course10",
    type: "Video Lecture",
    title: "Fluid Mechanics: Fluid Dynamics and Bernoulli's Principle",
    days: 543,
    status: "Published",
    PublishedDate: "2023-09-30",
    isFree: true,
    price: 2000,
    isEnabled: false,
  },
]);

function log(event) {
  console.log(list.value);
}
</script>
