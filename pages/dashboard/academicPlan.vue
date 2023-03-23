<template>
  <NuxtLayout name="zen">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-10 p-10">
      <table
        class="w-full text-left text-sm text-gray-500 dark:text-gray-400 p-30"
      >
        <thead
          class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th
              scope="col"
              class="px-6 py-3"
              v-for="(value, key) in studentTasks.data[0]"
            >
            
            <div class="flex items-center text-center justify-center">
              {{ key }}

            </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
            v-for="row in studentTasks.data"
          >
            <td class="px-6 py-4" v-for="colm in row">
              <div v-if="typeof colm == 'string'" class="flex items-center justify-center">
                {{ colm }}
              </div>
              <div class="grid" style="grid-template-columns: auto auto;" v-else>
                <div class="flex items-center justify-center">
                  <a :href="colm.link">
                    <BaseIcon :path="mdiLink" class="cursor-pointer" w="w-12" />
                  </a>
                </div>
                <div class="flex items-center justify-center" >
                  <!-- {{ colm.status }} -->
                  <select v-model="colm.status" id="underline_select" class="w-[100px] py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option value="not started">Not Started</option>
                    <option value="on it">On It</option>
                    <option value="done">Done</option>
                    <option value="revising">Revising</option>
                </select>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </NuxtLayout>
</template>

<script setup>
import BaseIcon from "@/components/Display/BaseIcon.vue";
import {
  mdiLink,
  mdiChevronRightCircleOutline,
  mdiChevronLeftCircleOutline,
} from "@mdi/js";

const studentTasks = reactive({
  data: [
    {
      Chapter: "kinematics",
      "Teaching Status": "done",
      module1: {
        link: "www.google.com",
        status: "done",
      },
      module2: {
        link: "www.google.com",
        status: "on it",
      },
      module3: {
        link: "www.google.com",
        status: "done",
      },
      module4: {
        link: "www.google.com",
        status: "on it",
      },      module5: {
        link: "www.google.com",
        status: "done",
      },
      module6: {
        link: "www.google.com",
        status: "on it",
      },      module7: {
        link: "www.google.com",
        status: "done",
      },
      module8: {
        link: "www.google.com",
        status: "on it",
      },      module9: {
        link: "www.google.com",
        status: "done",
      },
      module10: {
        link: "www.google.com",
        status: "on it",
      },
    },
    {
      Chapter: "nlm",
      "Teaching Status": "ongoing",
      module1: {
        link: "www.google.com",
        status: "revising",
      },
      module2: {
        link: "www.google.com",
        status: "done",
      },
    },
    {
      Chapter: "rotation",
      "Teaching Status": "un-done",
      module1: {
        link: "www.google.com",
        status: "not started",
      },
      module2: {
        link: "www.google.com",
        status: "not started",
      },
    },
  ],
});
function getColSpan(item) {
  if (typeof item === "string") {
    return 1;
  } else {
    return Object.keys(item).length;
  }
}
</script>
