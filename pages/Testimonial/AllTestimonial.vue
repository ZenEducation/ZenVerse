<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import SectionMain from "@/components/Sections/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue"
import CardBox from "@/components/Cards/CardBox.vue";
import { mdiChartTimelineVariant, mdiMagnify } from "@mdi/js";
import PremFormField from "~~/components/Forms/FormField.vue";
import PremFormControl from "~~/components/Forms/FormControl.vue";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
import SvgIcon from "@jamescoyle/vue-icon"
import { mdiEye, mdiPen } from "@mdi/js";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import { DataStore } from "@aws-amplify/datastore"
import { TestimonialData } from "@/src/models/index.js"




const searchquery = ref('');
const categoryFilter = ref('');
const dateFilter = ref('');
const publishedFilter = ref('');

const onDate = ref('');
const beforeDate = ref('');
const afterDate = ref('');
const startDate = ref('');
const endDate = ref('');



// const items = reactive(DummyData)
// const items = reactive([])
const items = ref([])
const category = ref([])

onMounted(() => {
    items.value = []
    handleGetData()
    getCategory()
})

const handleGetData = async () => {
    try {
        const testimonial = await DataStore.query(TestimonialData);
        items.value = testimonial.sort((a, b) => a.testiminial_no - b.testiminial_no); // Sort by blogNo in increasing order
        const uniqueCategories = [...new Set(items.value.map(item => item.category))];
        category.value = uniqueCategories;

    } catch (err) {
        console.error(err);
    }
};

const getCategory = async () => {
    try {
        items.value.map((item) => {
            category.value.push(category.value.includes(item.category))
        })

    } catch (error) {
        console.error(error);
    }
}


const isModalActive = ref(false);

const isModalDangerActive = ref(false);

const perPage = ref(4);

const currentPage = ref(0);

const checkedRows = ref([]);

const isCategoryDropdownOpen = ref(false);
const isPublishedDropdown = ref(false)
const isDateInputOpen = ref(false);

const toggleCategoryDropdown = () => {
    isCategoryDropdownOpen.value = !isCategoryDropdownOpen.value;
    isPublishedDropdown.value = false;
    isDateInputOpen.value = false;
    publishedFilter.value = ""
    dateFilter.value = ""
};

const togglePublishedInput = () => {
    isPublishedDropdown.value = !isPublishedDropdown.value
    isCategoryDropdownOpen.value = false;
    isDateInputOpen.value = false;
    categoryFilter.value = ""
    dateFilter.value = ""
};

const toggleDateInput = () => {
    isDateInputOpen.value = !isDateInputOpen.value;
    isCategoryDropdownOpen.value = false;
    isPublishedDropdown.value = false;
    categoryFilter.value = ""
    publishedFilter.value = ""
};

const filteredItems = computed(() => {
    const trimmedSearchQuery = searchquery.value.trim().toLowerCase();
    const trimmedCategoryFilter = categoryFilter.value.trim().toLowerCase();
    const trimmedPublishedFilter = publishedFilter.value.trim().toLowerCase();
    const trimmedDateFilter = dateFilter.value.trim().toLowerCase();

    const data = items.value;
    if (trimmedSearchQuery) {
        const filteredData = data.filter((item) => {
            return (
                item.testiminial_no.toString().includes(trimmedSearchQuery) ||
                item.student_name.toLowerCase().includes(trimmedSearchQuery) ||
                item.sub_title.toLowerCase().includes(trimmedSearchQuery)
            );
        });
        return filteredData.slice((perPage.value * currentPage.value), (perPage.value * (currentPage.value + 1)));
    } else if (trimmedCategoryFilter) {
        const filteredData = data.filter((item) => {
            return (
                item.category.toLowerCase().includes(trimmedCategoryFilter)
            )
        });
        return filteredData.slice((perPage.value * currentPage.value), (perPage.value * (currentPage.value + 1)));
    } else if (trimmedPublishedFilter) {
        const filteredData = data.filter((item) => {
            return (
                item.isPublished.toString().toLowerCase().includes(trimmedPublishedFilter)
            )
        });
        return filteredData.slice((perPage.value * currentPage.value), (perPage.value * (currentPage.value + 1)))
    } else if (trimmedDateFilter) {
        if (trimmedDateFilter === "on") {
            const filteredData = data.filter(
                (item) =>
                    new Date(item.publishDate).toDateString() === new Date(onDate.value).toDateString()
            );
            return filteredData.slice((perPage.value * currentPage.value), (perPage.value * (currentPage.value + 1)))
        } else if (trimmedDateFilter === "before") {
            const filteredData = data.filter(
                (item) => new Date(item.publishDate) < new Date(beforeDate.value)
            );
            return filteredData.slice((perPage.value * currentPage.value), (perPage.value * (currentPage.value + 1)))
        } else if (trimmedDateFilter === "after") {
            const filteredData = data.filter(
                (item) => new Date(item.publishDate) > new Date(afterDate.value)
            );
            return filteredData.slice((perPage.value * currentPage.value), (perPage.value * (currentPage.value + 1)))
        } else if (trimmedDateFilter === "between") {
            const filteredData = data.filter(
                (item) =>
                    new Date(item.publishDate) >= new Date(startDate.value) &&
                    new Date(item.publishDate) <= new Date(endDate.value)
            );
            return filteredData.slice((perPage.value * currentPage.value), (perPage.value * (currentPage.value + 1)))
        }
    } else {
        return data.slice((perPage.value * currentPage.value), (perPage.value * (currentPage.value + 1)));
    }
});

watch(searchquery, () => {
    currentPage.value = 0;
});



//Pagination Function
//for pages in pagination based on data max 4 data will show per page
const numPages = computed(() => {
    const trimmedSearchQuery = searchquery.value.trim().toLowerCase();
    const trimmedCategoryFilter = categoryFilter.value.trim().toLowerCase();
    const trimmedPublishedFilter = publishedFilter.value.toLowerCase();
    const trimmedDateFilter = dateFilter.value.trim().toLowerCase();
    const data = items.value;
    let filteredData = data;


    if (trimmedSearchQuery) {
        filteredData = data.filter((item) => {
            return (
                item.testiminial_no.toString().includes(trimmedSearchQuery) ||
                item.student_name.toLowerCase().includes(trimmedSearchQuery) ||
                item.sub_title.toLowerCase().includes(trimmedSearchQuery)
            );
        });
    }
    if (trimmedCategoryFilter) {
        filteredData = data.filter((item) => {
            return (

                item.category.toLowerCase().includes(trimmedCategoryFilter)
            )
        });
    }
    if (trimmedPublishedFilter) {
        filteredData = data.filter((item) => {
            return (
                item.isPublished.toString().toLowerCase().includes(trimmedPublishedFilter)
            )
        });

    }
    if (trimmedDateFilter === "on") {
        filteredData = data.filter(
            (item) =>
                new Date(item.publishDate).toDateString() === new Date(onDate.value).toDateString()
        );
    } else if (trimmedDateFilter === "before") {
        filteredData = data.filter(
            (item) => new Date(item.publishDate) < new Date(beforeDate.value)
        );
    } else if (trimmedDateFilter === "after") {
        filteredData = data.filter(
            (item) => new Date(item.publishDate) > new Date(afterDate.value)
        );
    } else if (trimmedDateFilter === "between") {
        filteredData = data.filter(
            (item) =>
                new Date(item.publishDate) >= new Date(startDate.value) &&
                new Date(item.publishDate) <= new Date(endDate.value)
        );
    }

    return Math.ceil(filteredData.length / perPage.value);

});



const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
    const pagesList = [];

    for (let i = 0; i < numPages.value; i++) {
        pagesList.push(i);
    }

    return pagesList;
});

const clearResult = () => {
    searchquery.value = ""

    categoryFilter.value = ""

    publishedFilter.value = ""
    dateFilter.value = ""
    onDate.value = ""
    beforeDate.value = ""
    afterDate.value = ""
    startDate.value = ""
    endDate.value = ""

    isCategoryDropdownOpen.value = false;

    isPublishedDropdown.value = false;
    isDateInputOpen.value = false;
}
</script>

<template>
    <div>
        <NuxtLayout name="zen">
            <SectionMain>
                <SectionTitleLineWithButton :icon="mdiChartTimelineVariant" title="All Testimonial" main>

                    <NuxtLink to="/AA/blog/createblog"><button
                            class="w-36 h-[40px] text-sm px-1 bg-gray-800 text-white dark:bg-white dark:text-black "> Create
                            Content
                        </button>
                    </NuxtLink>


                </SectionTitleLineWithButton>
                <CardBox class="mb-6 g:mb-0 lg:col-span-2 xl:col-span-3" if-from @submit.prevent="submit">
                    <PremFormField horizontal>
                        <PremFormControl v-model="searchquery" :icon="mdiMagnify"
                            placeholder="Search by Title or ID or Qualification" />
                    </PremFormField>
                    <PremFormField label="Filter By:" horizontal>

                        <BaseButtons>


                            <BaseButton label="Category" color="info" class="   text-white font-bold py-2 px-4 rounded "
                                outline small @click="toggleCategoryDropdown" :active="isCategoryDropdownOpen" />



                            <BaseButton label="Published" color="info" class="   text-white font-bold py-2 px-4 rounded "
                                outline small @click="togglePublishedInput" :active="isPublishedDropdown" />

                            <BaseButton label="Created On" color="info" class="   text-white font-bold py-2 px-4 rounded "
                                outline small @click="toggleDateInput" :active="isDateInputOpen" />
                        </BaseButtons>



                        <!-- Category Dropdown -->
                        <div v-if="isCategoryDropdownOpen" class="mt-2 py-2 bg-white rounded shadow-lg text-center">
                            <select name="status" id="status" v-model="categoryFilter" class="w-1/2">
                                <option value="">Select Category</option>
                                <option v-for="categoryItem in category" :value="categoryItem" :key="categoryItem">
                                    {{ categoryItem }}
                                </option>
                            </select>
                        </div>



                        <!-- Published Dropdown -->
                        <div v-if="isPublishedDropdown" class="mt-2 py-2 bg-white rounded shadow-lg text-center">
                            <select name="status" id="status" v-model="publishedFilter" class="w-1/2">
                                <option value=""> Select Type </option>
                                <option value="true">True</option>
                                <option value="false">False</option>


                            </select>
                        </div>

                        <!-- Submitted On Date Input -->
                        <div v-if="isDateInputOpen" class="mt-2 py-2 bg-white rounded shadow-lg text-center">
                            <div>
                                <select name="status" id="status" v-model="dateFilter" class="w-1/2 ">
                                    <option value=""> Select Date Filter </option>

                                    <option value="on">On</option>
                                    <option value="before">Before</option>
                                    <option value="after">After</option>
                                    <option value="between">Between</option>

                                </select>
                            </div>

                            <div class="block">
                                <input v-if="dateFilter == 'on'" type="date" name="" id="" v-model="onDate">
                                <input v-if="dateFilter == 'before'" type="date" name="" id="" v-model="beforeDate">
                                <input v-if="dateFilter == 'after'" type="date" name="" id="" v-model="afterDate">
                                <input v-if="dateFilter == 'between'" type="date" name="" id="" v-model="startDate">
                                <p v-if="dateFilter == 'between'">To</p>
                                <input v-if="dateFilter == 'between'" type="date" name="" id="" v-model="endDate">
                            </div>

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
                                <th>Category</th>
                                <th>Qualification</th>
                                <th>Published</th>
                                <th>Created On</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(client, index) in filteredItems" :key="client.id"
                                class="border-b-0 lg:w-6 before:hidden">
                                <td data-label="Client ID" class="border-b-0 lg:w-6 before:hidden">
                                    {{ client.testiminial_no }}
                                </td>
                                <td data-label="Title">
                                    {{ client.student_name }}
                                </td>


                                <td data-label="Category">
                                    {{ client.category }}
                                </td>
                                <td data-label="Created_By">
                                    {{ client.sub_title }}
                                </td>
                                <td data-label="Published">
                                    {{ client.isPublished }}
                                </td>

                                <td data-label="Submitted" class="lg:w-1 whitespace-nowrap">
                                    <small class="text-gray-500 dark:text-slate-400">{{
                                        client.publishDate }}</small>
                                </td>
                                <td class="before:hidden lg:w-1 whitespace-nowrap">

                                    <div class=" flex justify-center gap-2">
                                        <NuxtLink :to="'/Testimonial/SingleTestimonial/' + client.id"><button
                                                class="full p-1 bg-blue-400 text-white border-0"><svg-icon type="mdi"
                                                    :path="mdiEye"></svg-icon></button>
                                        </NuxtLink>
                                        <NuxtLink :to="'/Testimonial/EditTestimonial/' + client.id"><button
                                                class="full p-1 bg-blue-400 text-white border-0"><svg-icon type="mdi"
                                                    :path="mdiPen"></svg-icon></button>
                                        </NuxtLink>
                                    </div>
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