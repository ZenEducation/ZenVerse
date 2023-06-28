<!-- component -->
<template>
  <NuxtLayout name="zen">

    <div class="flex items-center  relative overflow-x-auto aside-scrollbars-light dark:aside-scrollbars-gray shadow-md sm:rounded-lg sm:mx-10   py-5 px-1">
      <div class="">
        Filter by Status :
      </div> 
      <div class="ml-2">
        <PremFormControl help=""
              placeholder="None"
              type="list"
              :options="filterItems"
              v-model="filterValue"
              @change="filterTable"
          />
      </div> 
   
    </div>
    <div
      class="flex items-center sm:bg-slate-900 relative overflow-x-auto aside-scrollbars-light dark:aside-scrollbars-gray shadow-md sm:rounded-lg sm:mx-10 bg-gray-50 dark:text-slate-100 overflow-x-auto"
    >
      <table
        class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg sm:shadow-lg text-gray-500 dark:text-gray-400 dark:bg-slate-800 table-auto overflow-x-auto"
      >
       
          <tr
            class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 border-b"
          >
            <th
              v-for="(value, key) in tableHeadings"
              class="p-3 text-center"
              :key="key"
            >
              {{ value }}
            </th>
          </tr>
    
 
          <tr
            v-for="(row, index) in studentTasks.data"
            class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
            :key="index"
          >
            <td
              v-for="(colm, id) in row"
              class="border-grey-light dark:border-gray-300 border  "
              :key="id"
            >
              <div
                v-if="typeof colm == 'string'"
                class="flex items-center justify-center "
              >
                {{ colm }}
              </div>
              <div class=" " v-else>
                <!-- teaching status  -->
                <div class="" v-if="colm.type == 'teachingStatus'">
                  <select
                    v-model="colm.status"
                    id="underline_select"
                    class="w-full pb-2.5 px-0 text-sm text-gray-500 bg-transparent border-0  appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer teachingDropdown"
                    :class="colm.status"
                  >
                    <option value="Unassigned" class="text-red-500 Unassigned">
                      Unassigned
                    </option>
                    <option value="In Progress" class="redText Progress">
                      In Progress
                    </option>
                    <option value="Completed" class="blueText Completed">
                      Completed
                    </option>
                  </select>
                </div>

                <!-- Module drop down  -->
                <div class=" " v-else>
                  <div  v-if="colm.status==filterValue" class="flex items-center justify-center">
                  <select
                    v-model="colm.status"
                    id="underline_select"
                    class="w-[175px]  px-0 text-sm text-gray-500 bg-transparent border-0  appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer module"
                    :class="colm.status"
                  >
                    <option value="Revising" class="px-3  text-red-500 Revising">Revising</option>
                    <option value="Completed" class="Completed">Completed</option>
                    <option value="on it" class="on">On It</option>
                    <option
                      value="Assigned-Not Started"
                      class="Assigned"
                    >
                      Assigned - Not Started
                    </option>
                    <option value="Unassigned" class="Unassigned">Unassigned</option>
                  </select>
                  <div class=" pl-1">
                    <BaseButton
                      label="Open"
                      type="button"
                      color=""
                      class="uppercase px-0 "
                      :style="[]"
                      small
                      @click="openPopupItem(colm)"
                    />
                  </div>
                </div>
                <div  v-if="filterValue=='All'" class="flex items-center justify-center">
                  <select
                    v-model="colm.status"
                    id="underline_select"
                    class="w-[175px]  px-0 text-sm text-gray-500 bg-transparent border-0  appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer module"
                    :class="colm.status"
                  >
                    <option value="Revising" class="px-3  text-red-500 Revising">Revising</option>
                    <option value="Completed" class="Completed">Completed</option>
                    <option value="on it" class="on">On It</option>
                    <option
                      value="Assigned-Not Started"
                      class="Assigned"
                    >
                      Assigned - Not Started
                    </option>
                    <option value="Unassigned" class="Unassigned">Unassigned</option>
                  </select>
                  <div class=" pl-1">
                    <BaseButton
                      label="Open"
                      type="button"
                      color=""
                      class="uppercase px-0 "
                      :style="[]"
                      small
                      @click="openPopupItem(colm)"
                    />
                  </div>
                </div>
              
              </div>
              </div>
            </td>
          </tr>

      </table>
    </div>
    <ModuleOpenPopup
      class="absolute openPopup"
      @close="closePopup"
      v-if="openPopup"
      :value="currentpopupValue"
    />
  </NuxtLayout>
</template>
<script setup>
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import ModuleOpenPopup from "~~/components/AcademicsAndKCRs/ModuleOpenPopup.vue";
import { mdiLink } from "@mdi/js";
import PremFormControl from "@/components/Forms/FormControl.vue";
import PremFormField from "@/components/Forms/FormField.vue";


const openPopup = ref(false);
const currentpopupValue = ref(null);
const openPopupItem = (item) => {
  openPopup.value = true;
  currentpopupValue.value = item;
  console.log(item);
};
const closePopup = () => {
  openPopup.value = false;

};




// table sample data 

const sampleData = reactive(
  {
    data:[

    ]
  }
)











const tableHeadings = [
  "Chapter",
  "Teaching Status",
  "module 1",
  "module 2",
  "module 3",
  "module 4",
  "module 5",
  "module 6",
  "module 7",
  "module 8",
  "module 9",
  "module 10",
  "module 11",
  "module 12",
  "module 13",
  "module 14",
];

const studentTasks = reactive({
  data: [
    {
      Chapter: "kinematics",
      teachingStatus: {
        status: "Unassigned",
        type: "teachingStatus",
      },
      module1: {
        id: 1,
        link: "https://www.google.com",
        status: "Unassigned",
      },
      module2: {
        id: 2,
        link: "https://www.google.com",
        status: "on it",
      },
      module3: {
        id: 3,
        link: "https://www.google.com",
        status: "Completed",
      },
      module4: {
        id: 4,
        link: "https://www.google.com",
        status: "Unassigned",
      },
      module5: {
        id: 5,
        link: "https://www.google.com",
        status: "Revising",
      },
      module6: {
        id: 6,
        link: "https://www.google.com",
        status: "on it",
      },
      module7: {
        id: 7,
        link: "https://www.google.com",
        status: "Completed",
      },
      module8: {
        id: 8,
        link: "https://www.google.com",
        status: "on it",
      },
      module9: {
        id: 9,
        link: "https://www.google.com",
        status: "Revising",
      },
      module10: {
        id: 10,
        link: "https://www.google.com",
        status: "Unassigned",
      },
      module11: {
        id: 11,
        link: "https://www.google.com",
        status: "Completed",
      },
      module12: {
        id: 12,
        link: "https://www.google.com",
        status: "Assigned-Not Started",
      },
      module13: {
        id: 13,
        link: "https://www.google.com",
        status: "Completed",
      },
      module14: {
        id: 14,
        link: "https://www.google.com",
        status: "on it",
      },
    },
    {
      Chapter: "NLM",
      teachingStatus: {
        status: "In Progress",
        type: "teachingStatus",
      },
      module1: {
        id: 1,
        link: "https://www.google.com",
        status: "Completed",
      },
      module2: {
        id: 2,
        link: "https://www.google.com",
        status: "on it",
      },
      module3: {
        id: 3,
        link: "https://www.google.com",
        status: "Completed",
      },
      module4: {
        id: 4,
        link: "https://www.google.com",
        status: "on it",
      },
      module5: {
        id: 5,
        link: "https://www.google.com",
        status: "Completed",
      },
      module6: {
        id: 6,
        link: "https://www.google.com",
        status: "on it",
      },
      module7: {
        id: 7,
        link: "https://www.google.com",
        status: "Completed",
      },
      module8: {
        id: 8,
        link: "https://www.google.com",
        status: "on it",
      },
      module9: {
        id: 9,
        link: "https://www.google.com",
        status: "Revising",
      },
      module10: {
        id: 10,
        link: "https://www.google.com",
        status: "Assigned-Not Started",
      },
      module11: {
        id: 11,
        link: "https://www.google.com",
        status: "Completed",
      },
      module12: {
        id: 12,
        link: "https://www.google.com",
        status: "on it",
      },
      module13: {
        id: 13,
        link: "https://www.google.com",
        status: "Revising",
      },
      module14: {
        id: 14,
        link: "https://www.google.com",
        status: "Unassigned",
      },
    },
    {
      Chapter: "Work Power ",
      teachingStatus: {
        status: "Completed",
        type: "teachingStatus",
      },
      module1: {
        link: "https://www.google.com",
        status: "Assigned - Not Started",
      },
      module1: {
        id: 1,
        link: "https://www.google.com",
        status: "Completed",
      },
      module2: {
        id: 2,
        link: "https://www.google.com",
        status: "on it",
      },
      module3: {
        id: 3,
        link: "https://www.google.com",
        status: "Completed",
      },
      module4: {
        id: 4,
        link: "https://www.google.com",
        status: "on it",
      },
      module5: {
        id: 5,
        link: "https://www.google.com",
        status: "Assigned-Not Started",
      },
      module6: {
        id: 6,
        link: "https://www.google.com",
        status: "Unassigned",
      },
      module7: {
        id: 7,
        link: "https://www.google.com",
        status: "Revising",
      },
      module8: {
        id: 8,
        link: "https://www.google.com",
        status: "on it",
      },
      module9: {
        id: 9,
        link: "https://www.google.com",
        status: "Completed",
      },
      module10: {
        id: 10,
        link: "https://www.google.com",
        status: "Unassigned",
      },
      module11: {
        id: 11,
        link: "https://www.google.com",
        status: "Completed",
      },
      module12: {
        id: 12,
        link: "https://www.google.com",
        status: "on it",
      },
      module13: {
        id: 13,
        link: "https://www.google.com",
        status: "Assigned-Not Started",
      },
      module14: {
        id: 14,
        link: "https://www.google.com",
        status: "Revising",
      },
    },
    {
      Chapter: "kinematics",
      teachingStatus: {
        status: "Unassigned",
        type: "teachingStatus",
      },
      module1: {
        id: 1,
        link: "https://www.google.com",
        status: "Completed",
      },
      module2: {
        id: 2,
        link: "https://www.google.com",
        status: "on it",
      },
      module3: {
        id: 3,
        link: "https://www.google.com",
        status: "Revising",
      },
      module4: {
        id: 4,
        link: "https://www.google.com",
        status: "Unassigned",
      },
      module5: {
        id: 5,
        link: "https://www.google.com",
        status: "on it",
      },
      module6: {
        id: 6,
        link: "https://www.google.com",
        status: "on it",
      },
      module7: {
        id: 7,
        link: "https://www.google.com",
        status: "Assigned-Not Started",
      },
      module8: {
        id: 8,
        link: "https://www.google.com",
        status: "on it",
      },
      module9: {
        id: 9,
        link: "https://www.google.com",
        status: "Completed",
      },
      module10: {
        id: 10,
        link: "https://www.google.com",
        status: "on it",
      },
      module11: {
        id: 11,
        link: "https://www.google.com",
        status: "Revising",
      },
      module12: {
        id: 12,
        link: "https://www.google.com",
        status: "Completed",
      },
      module13: {
        id: 13,
        link: "https://www.google.com",
        status: "Assigned-Not Started",
      },
      module14: {
        id: 14,
        link: "https://www.google.com",
        status: "on it",
      },
    },
    {
      Chapter: "kinematics",
      teachingStatus: {
        status: "In Progress",
        type: "teachingStatus",
      },
      module1: {
        id: 1,
        link: "https://www.google.com",
        status: "Completed",
      },
      module2: {
        id: 2,
        link: "https://www.google.com",
        status: "Revising",
      },
      module3: {
        id: 3,
        link: "https://www.google.com",
        status: "Completed",
      },
      module4: {
        id: 4,
        link: "https://www.google.com",
        status: "on it",
      },
      module5: {
        id: 5,
        link: "https://www.google.com",
        status: "on it",
      },
      module6: {
        id: 6,
        link: "https://www.google.com",
        status: "on it",
      },
      module7: {
        id: 7,
        link: "https://www.google.com",
        status: "on it",
      },
      module8: {
        id: 8,
        link: "https://www.google.com",
        status: "on it",
      },
      module9: {
        id: 9,
        link: "https://www.google.com",
        status: "Completed",
      },
      module10: {
        id: 10,
        link: "https://www.google.com",
        status: "on it",
      },
      module11: {
        id: 11,
        link: "https://www.google.com",
        status: "Completed",
      },
      module12: {
        id: 12,
        link: "https://www.google.com",
        status: "on it",
      },
      module13: {
        id: 13,
        link: "https://www.google.com",
        status: "Completed",
      },
      module14: {
        id: 14,
        link: "https://www.google.com",
        status: "Revising",
      },
    },
    {
      Chapter: "kinematics",
      teachingStatus: {
        status: "Completed",
        type: "teachingStatus",
      },
      module1: {
        id: 1,
        link: "https://www.google.com",
        status: "Assigned-Not Started",
      },
      module2: {
        id: 2,
        link: "https://www.google.com",
        status: "on it",
      },
      module3: {
        id: 3,
        link: "https://www.google.com",
        status: "Completed",
      },
      module4: {
        id: 4,
        link: "https://www.google.com",
        status: "on it",
      },
      module5: {
        id: 5,
        link: "https://www.google.com",
        status: "Completed",
      },
      module6: {
        id: 6,
        link: "https://www.google.com",
        status: "on it",
      },
      module7: {
        id: 7,
        link: "https://www.google.com",
        status: "Revising",
      },
      module8: {
        id: 8,
        link: "https://www.google.com",
        status: "on it",
      },
      module9: {
        id: 9,
        link: "https://www.google.com",
        status: "Completed",
      },
      module10: {
        id: 10,
        link: "https://www.google.com",
        status: "on it",
      },
      module11: {
        id: 11,
        link: "https://www.google.com",
        status: "Completed",
      },
      module12: {
        id: 12,
        link: "https://www.google.com",
        status: "on it",
      },
      module13: {
        id: 13,
        link: "https://www.google.com",
        status: "Completed",
      },
      module14: {
        id: 14,
        link: "https://www.google.com",
        status: "Revising",
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
const filterValue = ref("All")

const filterItems = [
  "All",
  "Completed",
  "Revising",
  "on it",
  "Assigned-Not Started",
  "Unassigned",
];






const filterTable = ()=>{

   const filterArray = studentTasks.data
console.log(filterArray)
  // studentTasks.value= studentTasks.value.filter((item)=>{
  //   item.status=filterValue.value
  //   return item
  // })
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

/* .teachingDropdown option:first-child{
  color: green;
} */

.Completed {
  color: #41bb41 !important;
  background: transparent !important;
  padding: 0.5rem !important;
  cursor: pointer;
}

.Progress,.on{
  color: #f99a33;
  background: transparent !important;
  padding: 0.5rem !important;
  cursor: pointer;
}

.Unassigned {
  color: #EC6AB8;
  background: transparent !important;
  padding: 0.5rem !important;
  cursor: pointer;
}

.openPopup {
  position: fixed;
  top: 0;
  left: 0;
}



/* module  */
.Revising{
  color: #6d81ff;
  background: transparent !important;
  padding: 0.5rem !important;
  cursor: pointer;
}
.Assigned{
  color: #EC6AB8;
  background: transparent !important;
  padding: 0.5rem !important;
  cursor: pointer;
}
</style>
