<!-- component -->
<template>
  <NuxtLayout name="zen">
    <div
      class="flex items-center sm:bg-slate-900 relative overflow-x-auto aside-scrollbars-light dark:aside-scrollbars-gray  shadow-md sm:rounded-lg sm:m-10 bg-gray-50  dark:text-slate-100 "
    >
      <table
        class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg sm:shadow-lg  text-gray-500 dark:text-gray-400 dark:bg-slate-800"
      >
        <thead class="sm:table-header-group bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr
            v-for="row in studentTasks.data"
            class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 border-b"
          >
            <th v-for="(value, key) in row" class="p-3 text-center ">
              {{ key }}
            </th>
          </tr>

        </thead>
        <tbody class="flex-1 lg:flex-none">
          <tr
            v-for="row in studentTasks.data"
            class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
          >
            <td
              v-for="colm in row"
              class="border-grey-light dark:border-gray-300 border p-3 min-w-20"
            >
              <div
                v-if="typeof colm == 'string'"
                class="flex items-center justify-center"
              >
                {{ colm }}
              </div>
              <div class="grid" style="grid-template-columns: auto auto" v-else>
                <div class="flex items-center justify-center">
                  <a :href="colm.link">
                    <BaseIcon :path="mdiLink" class="cursor-pointer" w="w-12" />
                  </a>
                </div>
                <div class="flex items-center justify-center">
                  <select
                    v-model="colm.status"
                    id="underline_select"
                    class="w-[100px] py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  >
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
} from "@mdi/js";

const studentTasks = reactive({
  data: [
    {
      Chapter: "kinematics",
      "Teaching Status": "done",
      module1: {
        link: "https://www.google.com",
        status: "done",
      },
      module2: {
        link: "https://www.google.com",
        status: "on it",
      },
      module3: {
        link: "https://www.google.com",
        status: "done",
      },
      module4: {
        link: "https://www.google.com",
        status: "on it",
      },
      module5: {
        link: "https://www.google.com",
        status: "done",
      },
      module6: {
        link: "https://www.google.com",
        status: "on it",
      },
      module7: {
        link: "https://www.google.com",
        status: "done",
      },
      module8: {
        link: "https://www.google.com",
        status: "on it",
      },
      module9: {
        link: "https://www.google.com",
        status: "done",
      },
      module10: {
        link: "https://www.google.com",
        status: "on it",
      },
      module11: {
        link: "https://www.google.com",
        status: "done",
      },
      module12: {
        link: "https://www.google.com",
        status: "on it",
      },
      module13: {
        link: "https://www.google.com",
        status: "done",
      },
      module14: {
        link: "https://www.google.com",
        status: "on it",
      },
    },    {
      Chapter: "NLM",
      "Teaching Status": "done",
      module1: {
        link: "https://www.google.com",
        status: "done",
      },
      module2: {
        link: "https://www.google.com",
        status: "on it",
      },
      module3: {
        link: "https://www.google.com",
        status: "done",
      },
      module4: {
        link: "https://www.google.com",
        status: "on it",
      },
      module5: {
        link: "https://www.google.com",
        status: "done",
      },
      module6: {
        link: "https://www.google.com",
        status: "on it",
      },
      module7: {
        link: "https://www.google.com",
        status: "done",
      },
      module8: {
        link: "https://www.google.com",
        status: "on it",
      },
      module9: {
        link: "https://www.google.com",
        status: "done",
      },
      module10: {
        link: "https://www.google.com",
        status: "on it",
      },
      module11: {
        link: "https://www.google.com",
        status: "done",
      },
      module12: {
        link: "https://www.google.com",
        status: "on it",
      },
      module13: {
        link: "https://www.google.com",
        status: "done",
      },
      module14: {
        link: "https://www.google.com",
        status: "on it",
      },
    },    {
      Chapter: "Work Power",
      "Teaching Status": "done",
      module1: {
        link: "https://www.google.com",
        status: "done",
      },
      module2: {
        link: "https://www.google.com",
        status: "on it",
      },
      module3: {
        link: "https://www.google.com",
        status: "done",
      },
      module4: {
        link: "https://www.google.com",
        status: "on it",
      },
      module5: {
        link: "https://www.google.com",
        status: "done",
      },
      module6: {
        link: "https://www.google.com",
        status: "on it",
      },
      module7: {
        link: "https://www.google.com",
        status: "done",
      },
      module8: {
        link: "https://www.google.com",
        status: "on it",
      },
      module9: {
        link: "https://www.google.com",
        status: "done",
      },
      module10: {
        link: "https://www.google.com",
        status: "on it",
      },
      module11: {
        link: "https://www.google.com",
        status: "done",
      },
      module12: {
        link: "https://www.google.com",
        status: "on it",
      },
      module13: {
        link: "https://www.google.com",
        status: "done",
      },
      module14: {
        link: "https://www.google.com",
        status: "on it",
      },
    },    {
      Chapter: "Rotation",
      "Teaching Status": "done",
      module1: {
        link: "https://www.google.com",
        status: "done",
      },
      module2: {
        link: "https://www.google.com",
        status: "on it",
      },
      module3: {
        link: "https://www.google.com",
        status: "done",
      },
      module4: {
        link: "https://www.google.com",
        status: "on it",
      },
      module5: {
        link: "https://www.google.com",
        status: "done",
      },
      module6: {
        link: "https://www.google.com",
        status: "on it",
      },
      module7: {
        link: "https://www.google.com",
        status: "done",
      },
      module8: {
        link: "https://www.google.com",
        status: "on it",
      },
      module9: {
        link: "https://www.google.com",
        status: "done",
      },
      module10: {
        link: "https://www.google.com",
        status: "on it",
      },
      module11: {
        link: "https://www.google.com",
        status: "done",
      },
      module12: {
        link: "https://www.google.com",
        status: "on it",
      },
      module13: {
        link: "https://www.google.com",
        status: "done",
      },
      module14: {
        link: "https://www.google.com",
        status: "on it",
      },
    },    {
      Chapter: "kinematics",
      "Teaching Status": "done",
      module1: {
        link: "https://www.google.com",
        status: "done",
      },
      module2: {
        link: "https://www.google.com",
        status: "on it",
      },
      module3: {
        link: "https://www.google.com",
        status: "done",
      },
      module4: {
        link: "https://www.google.com",
        status: "on it",
      },
      module5: {
        link: "https://www.google.com",
        status: "done",
      },
      module6: {
        link: "https://www.google.com",
        status: "on it",
      },
      module7: {
        link: "https://www.google.com",
        status: "done",
      },
      module8: {
        link: "https://www.google.com",
        status: "on it",
      },
      module9: {
        link: "https://www.google.com",
        status: "done",
      },
      module10: {
        link: "https://www.google.com",
        status: "on it",
      },
      module11: {
        link: "https://www.google.com",
        status: "done",
      },
      module12: {
        link: "https://www.google.com",
        status: "on it",
      },
      module13: {
        link: "https://www.google.com",
        status: "done",
      },
      module14: {
        link: "https://www.google.com",
        status: "on it",
      },
    },    {
      Chapter: "kinematics",
      "Teaching Status": "done",
      module1: {
        link: "https://www.google.com",
        status: "done",
      },
      module2: {
        link: "https://www.google.com",
        status: "on it",
      },
      module3: {
        link: "https://www.google.com",
        status: "done",
      },
      module4: {
        link: "https://www.google.com",
        status: "on it",
      },
      module5: {
        link: "https://www.google.com",
        status: "done",
      },
      module6: {
        link: "https://www.google.com",
        status: "on it",
      },
      module7: {
        link: "https://www.google.com",
        status: "done",
      },
      module8: {
        link: "https://www.google.com",
        status: "on it",
      },
      module9: {
        link: "https://www.google.com",
        status: "done",
      },
      module10: {
        link: "https://www.google.com",
        status: "on it",
      },
      module11: {
        link: "https://www.google.com",
        status: "done",
      },
      module12: {
        link: "https://www.google.com",
        status: "on it",
      },
      module13: {
        link: "https://www.google.com",
        status: "done",
      },
      module14: {
        link: "https://www.google.com",
        status: "on it",
      },
    },    {
      Chapter: "kinematics",
      "Teaching Status": "done",
      module1: {
        link: "https://www.google.com",
        status: "done",
      },
      module2: {
        link: "https://www.google.com",
        status: "on it",
      },
      module3: {
        link: "https://www.google.com",
        status: "done",
      },
      module4: {
        link: "https://www.google.com",
        status: "on it",
      },
      module5: {
        link: "https://www.google.com",
        status: "done",
      },
      module6: {
        link: "https://www.google.com",
        status: "on it",
      },
      module7: {
        link: "https://www.google.com",
        status: "done",
      },
      module8: {
        link: "https://www.google.com",
        status: "on it",
      },
      module9: {
        link: "https://www.google.com",
        status: "done",
      },
      module10: {
        link: "https://www.google.com",
        status: "on it",
      },
      module11: {
        link: "https://www.google.com",
        status: "done",
      },
      module12: {
        link: "https://www.google.com",
        status: "on it",
      },
      module13: {
        link: "https://www.google.com",
        status: "done",
      },
      module14: {
        link: "https://www.google.com",
        status: "on it",
      },
    },    {
      Chapter: "kinematics",
      "Teaching Status": "done",
      module1: {
        link: "https://www.google.com",
        status: "done",
      },
      module2: {
        link: "https://www.google.com",
        status: "on it",
      },
      module3: {
        link: "https://www.google.com",
        status: "done",
      },
      module4: {
        link: "https://www.google.com",
        status: "on it",
      },
      module5: {
        link: "https://www.google.com",
        status: "done",
      },
      module6: {
        link: "https://www.google.com",
        status: "on it",
      },
      module7: {
        link: "https://www.google.com",
        status: "done",
      },
      module8: {
        link: "https://www.google.com",
        status: "on it",
      },
      module9: {
        link: "https://www.google.com",
        status: "done",
      },
      module10: {
        link: "https://www.google.com",
        status: "on it",
      },
      module11: {
        link: "https://www.google.com",
        status: "done",
      },
      module12: {
        link: "https://www.google.com",
        status: "on it",
      },
      module13: {
        link: "https://www.google.com",
        status: "done",
      },
      module14: {
        link: "https://www.google.com",
        status: "on it",
      },
    },    {
      Chapter: "kinematics",
      "Teaching Status": "done",
      module1: {
        link: "https://www.google.com",
        status: "done",
      },
      module2: {
        link: "https://www.google.com",
        status: "on it",
      },
      module3: {
        link: "https://www.google.com",
        status: "done",
      },
      module4: {
        link: "https://www.google.com",
        status: "on it",
      },
      module5: {
        link: "https://www.google.com",
        status: "done",
      },
      module6: {
        link: "https://www.google.com",
        status: "on it",
      },
      module7: {
        link: "https://www.google.com",
        status: "done",
      },
      module8: {
        link: "https://www.google.com",
        status: "on it",
      },
      module9: {
        link: "https://www.google.com",
        status: "done",
      },
      module10: {
        link: "https://www.google.com",
        status: "on it",
      },
      module11: {
        link: "https://www.google.com",
        status: "done",
      },
      module12: {
        link: "https://www.google.com",
        status: "on it",
      },
      module13: {
        link: "https://www.google.com",
        status: "done",
      },
      module14: {
        link: "https://www.google.com",
        status: "on it",
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
<style scoped>
html,
body {
  height: 100%;
}
thead {
  display: block;
}
th {
  height: 3rem;
  overflow: hidden;
  line-height: 2rem;
  min-width: 150px;
}
td {
  position: relative;
  height: 3rem;
}
td .grid {
  position: absolute;
  right: 3px;
  top: 0;
  padding-left: 6px;
}

@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  thead tr:not(:first-child) {
    display: none;
  }
  td {
    display: table-cell;
    text-align: left;
  }
  thead {
    display: table-header-group;
  }
}

td:not(:last-child) {
  border-bottom: 0;
}

th:not(:last-child) {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

</style>
