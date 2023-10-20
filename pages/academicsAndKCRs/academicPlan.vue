<!-- component -->
<template>
  <NuxtLayout name="zen" style="margin: 0;padding: 0;height: 
  100%;">

    <div id="main_bar"
      class="flex items-center  relative  aside-scrollbars-light dark:aside-scrollbars-gray shadow-md sm:rounded-lg sm:mx-10   py-5 px-1">
      <div class="">
        <div class="">
          Filter by Status :
        </div>
        <div class="ml-2">
          <PremFormControl help="" placeholder="None" type="list" :options="filterItems" v-model="filterValue"
            @change="filterTable" />
        </div>
      </div>
      <div
        class=" mx-auto flex justify-center items-end grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-3"
        id="Inside_main_bar">
        <div class="p-2">
          <BaseButton label="Physics" type="button" class="uppercase px-0 py-0" small rounded-full
            @click="renderArray(1)" />
        </div>
        <div class="p-2">
          <BaseButton label="Biology" type="button" class="uppercase px-0 py-0" small rounded-full
            @click="renderArray(2)" />
        </div>
        <div class="p-2">
          <BaseButton label="Chemistry" type="button" class="uppercase px-0 py-0" small rounded-full
            @click="renderArray(3)" />
        </div>
        <div class="p-2">
          <BaseButton label="Mathematics" type="button" class="uppercase px-0 py-0" small rounded-full
            @click="renderArray(4)" />
        </div>

      </div>
      <div class="m-2">
        <BaseButton v-if="has_change == '0'" disabled color="info" type="submit" label="Save Changes" />
        <BaseButton v-else color="info" type="submit" label="Save Changes"
          @click="updateAcademicsByUsername(username, toRaw(state.array1), toRaw(state.array2), toRaw(state.array3), toRaw(state.array4))" />
      </div>
    </div>
    <div
      class="flex items-center sm:bg-slate-900 relative  aside-scrollbars-light dark:aside-scrollbars-gray shadow-md sm:rounded-lg sm:mx-10 bg-gray-50  overflow-y-auto dark:text-slate-100"
      style="overflow: auto !important; max-height: 100%;margin: 30px;">
      <table
        class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg sm:shadow-lg text-gray-500 dark:text-gray-400 dark:bg-slate-800  overflow-y-auto"
        style="display: block!important;overflow:scroll; height: 72vh;">

        <tr class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 border-b">
          <th v-for="(value, key) in tableHeadings" class="p-3 text-center" :key="key">
            {{ value }}
          </th>
        </tr>


        <tr v-for="(row, index) in state.selectedArray === 1 ? state.array1 :
          state.selectedArray === 2 ? state.array2 :
            state.selectedArray === 3 ? state.array3 :
              state.selectedArray === 4 ? state.array4 : []"
          class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
          :key="index">
          <td v-for="(colm, id) in row" class="border-grey-light dark:border-gray-300 border  " :key="id">
            <div v-if="typeof colm == 'string'" class="flex items-center justify-center " style="width: 200px;">
              {{ colm }}
            </div>
            <div class=" " v-else>

              <div class="" v-if="colm.type == 'teachingStatus'">
                <select v-model="colm.status" id="underline_select"
                  class="w-full pb-2.5 px-0 text-sm text-gray-500 bg-transparent border-0  appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer teachingDropdown"
                  :class="colm.status" @change="handleChange">
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


              <div class=" " v-else>
                <div v-if="colm.status == filterValue" class="flex items-center justify-center">
                  <select v-model="colm.status" id="underline_select"
                    class="w-[175px]  px-0 text-sm text-gray-500 bg-transparent border-0  appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer module"
                    :class="colm.status" @change="handleChange">
                    <option value="Revising" class="px-3  text-red-500 Revising">Revising</option>
                    <option value="Completed" class="Completed">Completed</option>
                    <option value="on it" class="on">On It</option>
                    <option value="Assigned-Not Started" class="Assigned">
                      Assigned - Not Started
                    </option>
                    <option value="Unassigned" class="Unassigned">Unassigned</option>
                  </select>
                  <div class=" pl-1">
                    <BaseButton label="Open" type="button" color="" class="uppercase px-0 " :style="[]" small
                      @click="openPopupItem(colm)" />
                  </div>
                </div>
                <div v-if="filterValue == 'All'" class="flex items-center justify-center">
                  <select v-model="colm.status" id="underline_select"
                    class="w-[175px]  px-0 text-sm text-gray-500 bg-transparent border-0  appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer module"
                    :class="colm.status" @change="handleChange">
                    <option value="Revising" class="px-3  text-red-500 Revising">Revising</option>
                    <option value="Completed" class="Completed">Completed</option>
                    <option value="on it" class="on">On It</option>
                    <option value="Assigned-Not Started" class="Assigned">
                      Assigned - Not Started
                    </option>
                    <option value="Unassigned" class="Unassigned">Unassigned</option>
                  </select>
                  <div class=" pl-1">
                    <BaseButton label="Open" type="button" color="" class="uppercase px-0 " :style="[]" small
                      @click="openPopupItem(colm)" />
                  </div>
                </div>

              </div>
            </div>
          </td>
        </tr>

      </table>

      <!-- <div style="width:auto; height:auto; overflow:auto;margin: auto; background: steelblue;">
        <table style="width:1000px; height:1px; color:#fff;">
         
        </table>
      </div> -->
      <template>

      </template>

    </div>

    <ModuleOpenPopup class="absolute openPopup" @close="closePopup" v-if="openPopup" :value="currentpopupValue"
      @details-updated="handleDetailsUpdated" />

  </NuxtLayout>
</template>
<script setup>
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import ModuleOpenPopup from "~~/components/AcademicsAndKCRs/ModuleOpenPopup.vue";
import { mdiLink } from "@mdi/js";
import PremFormControl from "@/components/Forms/FormControl.vue";
import { reactive, ref, computed } from 'vue';
import PremFormField from "@/components/Forms/FormField.vue";
import { PhysicsChapters } from "../../store/academicsAndKCRs/physicsChapters"
import { BiologyChapters } from "../../store/academicsAndKCRs/biologyChapters"
import { MathematicsChapters } from "../../store/academicsAndKCRs/mathematicsChapters"
import { ChemistryChapters } from "../../store/academicsAndKCRs/chemistryChapters"
import { Predicates } from "@aws-amplify/datastore";
import { DataStore } from "@aws-amplify/datastore";
import { Academics } from "~/src/models";

const has_change = ref("0")

const handleChange = () => {
  // console.log("hello", studentTasks._value.data);
  has_change.value = "1"
}
const username = JSON.parse(localStorage.getItem("User-profile")).attributes.email
const handleDetailsUpdated = (itm) => {
  // This function is called when the subcomponent emits the 'details-updated' event
  console.log('Details updated in subcomponent:', itm);
  const moduleIndex = 0;
  if (moduleIndex >= 0) {
    // Update the status of the module based on itm.id
    const propertyName = `module${itm.props.id}`;
    const id = itm.row_id - 1;
    // const proxyArray = toRef(itm, 'comments');
    const normalArray = Array.from(itm.comments);
    console.log(propertyName, "is updated with", itm.comments, "and id is", id);
    console.log(toRaw(state.array1)[id][propertyName], "testing testi ng");
    console.log("normal array is ", normalArray);
    if (state.selectedArray == 1) {
      toRaw(state.array1)[id][propertyName].status = itm.status;
      toRaw(state.array1)[id][propertyName].assignedOn = itm.AssignedOn;
      toRaw(state.array1)[id][propertyName].dueOn = itm.DueOn;
      toRaw(state.array1)[id][propertyName].comments = normalArray;
    } else if (state.selectedArray == 2) {
      toRaw(state.array2)[id][propertyName].status = itm.status;
      toRaw(state.array2)[id][propertyName].assignedOn = itm.AssignedOn;
      toRaw(state.array2)[id][propertyName].dueOn = itm.DueOn;
      toRaw(state.array2)[id][propertyName].comments = normalArray;
    }
    else if (state.selectedArray == 3) {
      toRaw(state.array3)[id][propertyName].status = itm.status;
      toRaw(state.array3)[id][propertyName].assignedOn = itm.AssignedOn;
      toRaw(state.array3)[id][propertyName].dueOn = itm.DueOn;
      toRaw(state.array3)[id][propertyName].comments = normalArray;
    }
    else if (state.selectedArray == 4) {
      toRaw(state.array4)[id][propertyName].status = itm.status;
      toRaw(state.array4)[id][propertyName].assignedOn = itm.AssignedOn;
      toRaw(state.array4)[id][propertyName].dueOn = itm.DueOn;
      toRaw(state.array4)[id][propertyName].comments = normalArray;
    }
    has_change.value = "1"
    closePopup();
  } else {
    console.error('Invalid itm.id:', itm.props.id);
  }
};
const state = reactive({
  array1: ref([]),
  array2: ref([]),
  array3: ref([]),
  array4: ref([]),
  selectedArray: 1
});
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
const Headings = [
  "Chapter",
  "teachingStatus",
  "module1",
  "module2",
  "module3",
  "module4",
  "module5",
  "module6",
  "module7",
  "module8",
  "module9",
  "module10",
  "module11",
  "module12",
  "module13",
  "module14",
];
const reorderDataBasedOnHeadings = (data, tableHeadings) => {
  return data.map((item) => {
    const reorderedItem = {};
    tableHeadings.forEach((key) => {
      reorderedItem[key] = item[key];
    });
    return reorderedItem;
  });
};
async function createArticle() {
  try {
    const newArticle = await DataStore.save(new Academics({ username: username, biology: JSON.stringify(BiologyChapters().data.data), chemistry: JSON.stringify(ChemistryChapters().data.data), mathematics: JSON.stringify(MathematicsChapters().data.data), physics: JSON.stringify(PhysicsChapters().data.data) }));
    console.log("created entry sucussfully", newArticle);
  } catch (error) {
    console.error("Error creating article:", error);
    throw error;
  }
}
onBeforeMount(async () => {
  console.log(username, "this is username");
  // createArticle();
  const res = await findAacedemicsByUsername(username);
  // console.log(res);
  console.log(JSON.parse(res[0].biology), "biology");
  console.log(JSON.parse(res[0].chemistry), "chemistry");
  console.log(JSON.parse(res[0].mathematics), "mathematics");
  console.log(JSON.parse(res[0].physics), "physics");
  // console.log("this is correct", PhysicsChapters().data);
  // console.log("this is reordered adat", reorderDataBasedOnHeadings(JSON.parse(res[0].physics), Headings));
  state.array1 = reorderDataBasedOnHeadings(JSON.parse(res[0].physics), Headings);
  state.array2 = reorderDataBasedOnHeadings(JSON.parse(res[0].biology), Headings);
  state.array3 = reorderDataBasedOnHeadings(JSON.parse(res[0].chemistry), Headings);
  state.array4 = reorderDataBasedOnHeadings(JSON.parse(res[0].mathematics), Headings);
  // console.log(toRaw(state.array1), "this is my sree");
})


async function findAacedemicsByUsername(username) {
  try {
    const allAcademics = await DataStore.query(Academics);
    console.log(allAcademics, "complete data");
    // Filter the results to find academics with the matching username
    const academicsByUsername = allAcademics.filter(academic => academic.username === username);
    console.log(academicsByUsername, "data");
    return academicsByUsername;
  } catch (error) {
    console.error(`Error finding articles by username ${username}:`, error);
    throw error;
  }
}
async function updateAcademicsByUsername(username, physics, chemistry, biology, mathematics) {
  try {
    // console.log("given input", username, physics);
    const allAcademics = await DataStore.query(Academics);
    const filteredAcademics = allAcademics.filter(academic => academic.username === username);
    if (!filteredAcademics || filteredAcademics.length === 0) {
      throw new Error(`No academics found for username ${username}`);
    }
    const updatedAcademics = await Promise.all(filteredAcademics.map(async (academic) => {
      return DataStore.save(
        Academics.copyOf(academic, (updated) => {
          updated.physics = physics;
          updated.chemistry = chemistry;
          updated.mathematics = mathematics;
          updated.biology = biology;
        })
      );
    }));
    has_change.value = "0"
    window.alert("Details Updated Successfully")
    // console.log(updatedAcademics);
  } catch (error) {
    console.error(`Error updating academics for username ${username}:`, error);
    throw error;
  }
}

const openPopup = ref(false);
const currentpopupValue = ref(null);
const openPopupItem = (item) => {
  openPopup.value = true;
  currentpopupValue.value = item;
  // console.log(item);
};
const closePopup = () => {
  openPopup.value = false;

};




const renderArray = (arrayIndex) => {
  state.selectedArray = arrayIndex;
  console.log(state.selectedArray, "current index is ");
};

const studentTasks = computed(() => {
  switch (state.selectedArray) {
    case 1:
      return state.array1;
    case 2:
      return state.array2;
    case 3:
      return state.array3;
    case 4:
      return state.array4;
    default:
      return state.array1;
  }
});




const filterTable = () => {
  console.log(studentTasks.data);
}



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

@media (max-width: 767px) {
  #main_bar {
    flex-direction: column !important;
  }

  #Inside_main_bar {
    padding: 30px !important;
  }
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

.Progress,
.on {
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
.Revising {
  color: #6d81ff;
  background: transparent !important;
  padding: 0.5rem !important;
  cursor: pointer;
}

.Assigned {
  color: #EC6AB8;
  background: transparent !important;
  padding: 0.5rem !important;
  cursor: pointer;
}
</style>