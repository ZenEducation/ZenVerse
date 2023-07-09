<script setup>
import { ref, reactive, computed } from 'vue';
import SectionMain from "@/components/Sections/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue"
import CardBox from "@/components/Cards/CardBox.vue";
import { mdiChartTimelineVariant, mdiMagnify } from "@mdi/js";
import PremFormField from "~~/components/Forms/FormField.vue";
import PremFormControl from "~~/components/Forms/FormControl.vue";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
import { mdiEye, mdiPen } from "@mdi/js";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";



const searchquery = ref('');
const statusFilter = ref('')
const categoryFilter = ref('');
const typeFilter = ref('')

// const startDate = ref('');
// const endDate = ref('');


const items = reactive([
    {
        id: 1213, title: 'Summer Batch', submission: 'https://www.iitiansgravity.com/', type: 'Video',
        category: 'Jee Coaching', status: 'Initial approval Pending',
        submittedOn: 'Mar 3 ,2021',
    },
    {
        id: 1214, title: 'Diwali Offer', submissionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQSzQtgI8a6EE0QHs0ZNuYel_KfRbbze7Dg&usqp=CAU',
        type: 'Graphic', category: 'Neet Coaching', status: 'Editor Submission Pending',
        submittedOn: 'Dec 1, 2021',
    },
    {
        id: 1215, title: 'Winter Batch', submission: 'https://www.aakash.ac.in/',
        type: 'Text', category: 'Neet Coaching ', status: 'Final Approval Pending',
        submittedOn: 'May 18, 2021',
    },
    {
        id: 1216, title: 'New Course', submission: 'https://www.aakash.ac.in/',
        type: 'ACC', category: 'Jee Coaching', status: 'Initial submission Pending',
        submittedOn: 'May 4, 2021',
    },
    {
        id: 1217, title: 'Web Dev Course', submission: 'https://www.aakash.ac.in/', type: 'Online',
        category: 'Coursera', status: 'Not verified', submissionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQSzQtgI8a6EE0QHs0ZNuYel_KfRbbze7Dg&usqp=CAU',
        submittedOn: 'May 19, 2021',
    },
    {
        id: 1218, title: 'New Course', submission: 'https://www.aakash.ac.in/',
        type: 'ACC', category: 'Jee Coaching', status: 'Initial submission Pending',
        submittedOn: 'May 4, 2021',
    },
    {
        id: 1219, title: 'Web Dev Course', submission: 'https://www.aakash.ac.in/', type: 'Online',
        category: 'Coursera', status: 'Not verified',
        submittedOn: 'May 19, 2021',
    },
    {
        id: 1220, title: 'New Course', submission: 'https://www.aakash.ac.in/',
        type: 'ACC', category: 'Jee Coaching', status: 'Initial submission Pending',
        submittedOn: 'May 4, 2021',
    },
    {
        id: 1221, title: 'Diwali Offer', type: 'Graphic', category: 'Neet Coaching', approvee: 'Ram',
        status: 'Editor Submission Pending',
        submittedOn: 'Dec 1, 2021',
    },
    {
        id: 1222, title: 'Web Dev Course', submission: 'https://www.aakash.ac.in/', type: 'Online',
        category: 'Coursera', status: 'Not verified',
        submittedOn: 'May 19, 2021',
    },

    {
        id: 1223, title: 'Web Dev Course', submission: 'https://www.aakash.ac.in/', type: 'Online',
        category: 'Coursera', status: 'Not verified',
        submittedOn: 'May 19, 2021',
    },
    {
        id: 1224, title: 'Diwali Offer', submissionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQSzQtgI8a6EE0QHs0ZNuYel_KfRbbze7Dg&usqp=CAU',
        type: 'Graphic', category: 'Neet Coaching', status: 'Editor Submission Pending',
        submittedOn: 'Dec 1, 2021',
    },
    {
        id: 1225, title: 'Summer Batch', submission: 'https://www.iitiansgravity.com/', type: 'Video',
        category: 'Jee Coaching', status: 'Initial approval Pending',
        submittedOn: 'Mar 3 ,2021',
    },
    {
        id: 1226, title: 'Diwali Offer', submissionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5l2crOvLts0mzw32kIK_nMtQPOYEnEPF_KQ&usqp=CAU',
        type: 'Graphic', category: 'Neet Coaching', status: 'Editor Submission Pending',
        submittedOn: 'Dec 1, 2021',
    },

])




const isModalActive = ref(false);

const isModalDangerActive = ref(false);

const perPage = ref(4);

const currentPage = ref(0);

const checkedRows = ref([]);

const isStatusDropdownOpen = ref(false);
const isCategoryDropdownOpen = ref(false);
const isTypeDropdownOpen = ref(false);
const isDateInputOpen = ref(false);

const toggleStatusDropdown = () => {
    isStatusDropdownOpen.value = !isStatusDropdownOpen.value;
    isCategoryDropdownOpen.value = false;
    isTypeDropdownOpen.value = false;
    isDateInputOpen.value = false;
    categoryFilter.value = ""
    typeFilter.value = ""
};

const toggleCategoryDropdown = () => {
    isCategoryDropdownOpen.value = !isCategoryDropdownOpen.value;
    isStatusDropdownOpen.value = false;
    isTypeDropdownOpen.value = false;
    isDateInputOpen.value = false;
    statusFilter.value = "";
    typeFilter.value = ""
};

const toggleTypeDropdown = () => {
    isTypeDropdownOpen.value = !isTypeDropdownOpen.value;
    isStatusDropdownOpen.value = false;
    isCategoryDropdownOpen.value = false;
    isDateInputOpen.value = false;
    statusFilter.value = ""
    categoryFilter.value = ""
};

const toggleDateInput = () => {
    isDateInputOpen.value = !isDateInputOpen.value;
    isStatusDropdownOpen.value = false;
    isCategoryDropdownOpen.value = false;
    isTypeDropdownOpen.value = false;
};




const itemsPaginated = computed(() => {
    const trimmedSearchQuery = searchquery.value.trim().toLowerCase();
    const trimmedStatusFilter = statusFilter.value.trim().toLowerCase();
    const trimmedCategoryFilter = categoryFilter.value.trim().toLowerCase();
    const trimmedTypeFilter = typeFilter.value.trim().toLowerCase();


    if (trimmedSearchQuery.length > 0) {
        return items
            .filter(
                (item) =>
                (item.id.toString().includes(trimmedSearchQuery) ||
                    item.title.toLowerCase().includes(trimmedSearchQuery))
            )
            .slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1));
    }

    if (trimmedStatusFilter.length > 0) {
        return items
            .filter((item) => item.status.toLowerCase().includes(trimmedStatusFilter))
            .slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1));
    }
    if (trimmedCategoryFilter.length > 0) {
        return items
            .filter((item) => item.category.toLowerCase().includes(trimmedCategoryFilter))
            .slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1));
    }
    if (trimmedTypeFilter.length > 0) {
        return items
            .filter((item) => item.type.toLowerCase().includes(trimmedTypeFilter))
            .slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1));
    }



    return items.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1));
});


watch(searchquery, () => {
    currentPage.value = 0;
});



const numPages = computed(() => {
    const filteredItems = items.filter((item) => {
        const trimmedSearchQuery = searchquery.value.trim().toLowerCase();
        const trimmedStatusFilter = statusFilter.value.trim().toLowerCase();
        const trimmedCategoryFilter = categoryFilter.value.trim().toLowerCase();
        const trimmedTypeFilter = typeFilter.value.trim().toLowerCase();

        const matchesSearchQuery =
            trimmedSearchQuery.length === 0 ||
            item.id.toString().includes(trimmedSearchQuery) ||
            item.title.toLowerCase().includes(trimmedSearchQuery);

        const matchesStatusFilter =
            trimmedStatusFilter.length === 0 ||
            item.status.toLowerCase().includes(trimmedStatusFilter);

        const matchesCategoryFilter =
            trimmedCategoryFilter.length === 0 ||
            item.status.toLowerCase().includes(trimmedCategoryFilter);

        const matchesTypeFilter =
            trimmedTypeFilter.length === 0 ||
            item.status.toLowerCase().includes(trimmedTypeFilter);


        return matchesSearchQuery && matchesStatusFilter && matchesCategoryFilter && matchesTypeFilter;
    });

    return Math.ceil(filteredItems.length / perPage.value);
});

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
    const pagesList = [];

    for (let i = 0; i < numPages.value; i++) {
        pagesList.push(i);
    }

    return pagesList;
});

const remove = (arr, cb) => {
    const newArr = [];

    arr.forEach((item) => {
        if (!cb(item)) {
            newArr.push(item);
        }
    });

    return newArr;
};

const checked = (isChecked, client) => {
    if (isChecked) {
        checkedRows.value.push(client);
    } else {
        checkedRows.value = remove(
            checkedRows.value,
            (row) => row.id === client.id
        );
    }
};

const clearResult = () => {
    searchquery.value = ""
    statusFilter.value = ""
    categoryFilter.value = ""
    typeFilter.value = ""
    isDateInputOpen.value = false;
    isStatusDropdownOpen.value = false;
    isCategoryDropdownOpen.value = false;
    isTypeDropdownOpen.value = false;
}
</script>

<template>
    <div>
        <NuxtLayout name="zen">
            <SectionMain>
                <SectionTitleLineWithButton :icon="mdiChartTimelineVariant" title="Editor Dashbaord" main>
                    <BaseButton label="Create Content" color="contrast" />


                </SectionTitleLineWithButton>
                <CardBox class="mb-6 g:mb-0 lg:col-span-2 xl:col-span-3" if-from @submit.prevent="submit">
                    <PremFormField horizontal>
                        <PremFormControl v-model="searchquery" :icon="mdiMagnify" placeholder="Search by Title or ID" />
                    </PremFormField>
                    <PremFormField label="Filter By:" horizontal>

                        <BaseButtons>
                            <BaseButton label="Status" color="info" class="   text-white font-bold py-2 px-4 rounded "
                                outline small @click="toggleStatusDropdown" :active="isStatusDropdownOpen" />
                            <BaseButton label="Category" color="info" class="   text-white font-bold py-2 px-4 rounded "
                                outline small @click="toggleCategoryDropdown" :active="isCategoryDropdownOpen" />
                            <BaseButton label="Type" color="info" class="   text-white font-bold py-2 px-4 rounded " outline
                                small @click="toggleTypeDropdown" :active="isTypeDropdownOpen" />
                            <BaseButton label="Submitted On" color="info" class="   text-white font-bold py-2 px-4 rounded "
                                outline small @click="toggleDateInput" :active="isDateInputOpen" />
                        </BaseButtons>

                        <!-- Status Dropdown -->
                        <div v-if="isStatusDropdownOpen" class="mt-2 py-2 bg-white rounded shadow-lg text-center">
                            <select name="status" id="status" v-model="statusFilter" class="w-1/2">
                                <option value=""> Select Status </option>
                                <option value="initial submission pending">Initial Submission Pending</option>
                                <option value="initial approval pending">Initial Approval Pending</option>
                                <option value="editor submission pending">Editor Submission Pending</option>
                                <option value="final approval pending">Final Approval Pending</option>
                                <option value="not verified">Not Verified</option>
                            </select>
                        </div>

                        <!-- Category Dropdown -->
                        <div v-if="isCategoryDropdownOpen" class="mt-2 py-2 bg-white rounded shadow-lg text-center">
                            <select name="status" id="status" v-model="categoryFilter" class="w-1/2">
                                <option value=""> Select Category </option>
                                <option value="jee coaching">JEE Coaching</option>
                                <option value="neet coaching">Neet Coaching</option>
                                <option value="coursera">Coursera</option>

                            </select>
                        </div>

                        <!-- Type Dropdown -->
                        <div v-if="isTypeDropdownOpen" class="mt-2 py-2 bg-white rounded shadow-lg text-center">
                            <select name="status" id="status" v-model="typeFilter" class="w-1/2">
                                <option value=""> Select Type </option>
                                <option value="video">Video</option>
                                <option value="graphic">Graphic</option>
                                <option value="text">Text</option>
                                <option value="acc">ACC</option>
                                <option value="online">Online</option>

                            </select>
                        </div>

                        <!-- Submitted On Date Input -->
                        <div v-if="isDateInputOpen" class="mt-2">
                            <!-- <label for="start-date">Start Date:</label>
                            <input type="date" id="start-date" v-model="startDate" @change="applyDateFilter" />

                            <label for="end-date">End Date:</label>
                            <input type="date" id="end-date" v-model="endDate" @change="applyDateFilter" /> -->

                        </div>



                        <div style="align-items: right; text-align: right; text-decoration: underline;"><button
                                @click="clearResult">Reset Filters</button></div>
                    </PremFormField>
                </CardBox>
                <CardBox class="mb-6 g:mb-0 lg:col-span-2 xl:col-span-3" if-from @submit.prevent="submit">
                    <!-- <TableViewCreator :data="newData" /> -->
                    <CardBoxModal v-model="isModalActive" title="Sample modal">
                        <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
                        <p>This is sample modal</p>
                    </CardBoxModal>

                    <CardBoxModal v-model="isModalDangerActive" title="Please confirm" button="danger" has-cancel>
                        <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
                        <p>This is sample modal</p>
                    </CardBoxModal>

                    <div v-if="checkedRows.length" class="p-3 bg-gray-100/50 dark:bg-slate-800">
                        <span v-for="checkedRow in checkedRows" :key="checkedRow.id"
                            class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700">
                            {{ checkedRow.name }}
                        </span>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Submission</th>
                                <th>Type</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Submitted On</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(client, index) in itemsPaginated" :key="client.id"
                                class="border-b-0 lg:w-6 before:hidden">
                                <td data-label="Client ID" class="border-b-0 lg:w-6 before:hidden">
                                    {{ client.id }}
                                </td>
                                <td data-label="Title">
                                    {{ client.title }}
                                </td>



                                <td v-if="client.submissionImage" data-label="submission">
                                    <img :src="client.submissionImage" alt="Avatar" width="150" height="150" />

                                </td>
                                <td v-else data-label="Submission">

                                    {{ client.submission }}
                                </td>

                                <td data-label="Type">
                                    {{ client.type }}
                                </td>
                                <td data-label="Category">
                                    {{ client.category }}
                                </td>
                                <td data-label="Status">
                                    {{ client.status }}
                                </td>
                                <td data-label="Submitted" class="lg:w-1 whitespace-nowrap">
                                    <small class="text-gray-500 dark:text-slate-400" :title="client.submitted">{{
                                        client.submittedOn }}</small>
                                </td>
                                <td class="before:hidden lg:w-1 whitespace-nowrap">
                                    <BaseButtons type="justify-start lg:justify-end" no-wrap>
                                        <BaseButton color="info" :icon="mdiEye" small @click="isModalActive = true" />
                                        <BaseButton color="info" :icon="mdiPen" small @click="isModalDangerActive = true" />
                                    </BaseButtons>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
                        <BaseLevel>
                            <BaseButtons>
                                <BaseButton v-for="page in pagesList" :key="page" :active="page === currentPage"
                                    :label="page + 1" :color="page === currentPage ? 'lightDark' : 'whiteDark'" small
                                    @click="currentPage = page" />
                            </BaseButtons>
                            <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
                        </BaseLevel>
                    </div>

                </CardBox>

            </SectionMain>
        </NuxtLayout>
    </div>
</template>



