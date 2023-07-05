
<template>
  <div>
<div :class="{ dark: styleStore.darkMode, 'overflow-hidden lg:overflow-visible': layoutStore.isAsideMobileExpanded }">
  <div :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': layoutStore.isAsideMobileExpanded }]"
    class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
        <!-- The Navbar -->
        <NavBar :menu="menuNavBar" :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': layoutStore.isAsideMobileExpanded }]"
          @menu-click="menuClick">
          <NavBarItemPlain display="flex lg:hidden" @click.prevent="layoutStore.asideMobileToggle()">
            <BaseIcon :path="layoutStore.isAsideMobileExpanded ? mdiBackburger : mdiForwardburger" size="24" />
          </NavBarItemPlain>
          <NavBarItemPlain display="hidden lg:flex xl:hidden" @click.prevent="layoutStore.asideLgToggle()">
            <BaseIcon :path="layoutStore.isAsideLgActive ? mdiBackburger : mdiMenu" size="24" />
          </NavBarItemPlain>
          <NavBarItemPlain use-margin>
            <FormControl placeholder="Search (ctrl+k)" ctrl-k-focus transparent borderless v-model="searchQuery"
              class="text-m w-60 h-8" />
          </NavBarItemPlain>
        </NavBar>

        <PremAsideMenu :menu="menuAside" @menu-click="menuClick" />
 <div class="mobile-view">
     
    </div>
        <div class="approval-page">
          <div class="header">
            <div class="header-content">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNACCdEsX-Kr8ph3knqv14gsaeGYop-uiO4g&usqp=CAU" alt="Header Image" style="width: 70px; height: auto;">
              <h1 :class="{'dark-mode-title': styleStore.darkMode}">{{ title }}</h1>
            </div>
            <hr style="height: 4.5px; border: none; margin: 0; background-color: grey;">
          </div>
        </div>

        <div class="search-filter">
          <input
            type="text"
            v-model="searchQuery"
            placeholder=" Search by Approvee name, Title, ID, Type, or Category "
          />
         <div>
      <label for="filterBy">Filter by Approvee:</label>
      <select id="filterBy" v-model="filterBy">
        <option value="id">ID</option>
        <option value="title">Title</option>
        <option value="type">Type</option>
        <option value="category">Category</option>
        <option value="approvee">Approvee</option>
        <option value="status">Status</option>
        <option value="submittedOn">Submitted On</option>
      </select>
    </div>
          <button class="reset-button" @click="resetFilters">Reset</button>
        </div>
  

    <div class="table-container mobileView">
      <table class="data-table">
            <thead>
              <tr>
                <th><b>ID</b></th>
                <th><b>Title</b></th>
                <th><b>Submission</b></th>
                <th><b>Type</b></th>
                <th><b>Category</b></th>
                <th><b>Approvee</b></th>
                <th><b>Status</b></th>
                <th><b>Submitted on</b></th>
                <th><b>Actions</b></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in paginatedRows" :key="row.id">
                <td data-label="Id">{{ row.id }}</td>
               <td data-label="Title">{{ row.title }}</td>
               <td data-label="Submission">
              <a :href="row.submission" target="_blank" data-label="Submission">Link</a>
              <img v-if="row.submissionImage" :src="row.submissionImage" style="display: block; margin: 0 35px; width: 130px; height: auto;" />
                </td>
                <td data-label="Type">{{ row.type }}</td>
               <td data-label="Category">{{ row.category }}</td>
               <td data-label="Approvee"> <div class="approvee-avatar">
              <img :src="row.avatar" alt="Approvee Avatar" />
            <span>{{ row.approvee }}</span>
              </div></td>
                <td data-label="Status">{{ row.status }}</td>
                 <td data-label="Submission Date">{{ row.submittedOn }}</td>
                  <td>
                  <button class="small-button transparent-button" @click="view(row)">
                       <span class="mdi mdi-eye"></span> </button>
                       <button class="small-button transparent-button with-border" @click="approve(row)"> Approve</button>
                       <button class="small-button transparent-button" @click="edit(row)">
                       <span class="mdi mdi-pencil"></span> </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="pagination">
  <button
    v-for="page in totalPages"
    :key="page"
    :class="{ active: currentPage === page }"
    @click="goToPage(page)"
    class="pagination-button"
  >
    {{ page }}
     </button>
     </div>

  </div>

        <!-- FooterBar -->
        <FooterBar>
          <a href="#" target="_blank" class="text-blue-600">Photon Ecademy</a>
        </FooterBar>
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed } from "vue";
import { mdiForwardburger, mdiBackburger, mdiMenu } from "@mdi/js";
import { useRouter } from "vue-router";
import menuAside from "@/configs/menuAside.js";
import menuNavBar from "@/configs/menuNavBar.js";
import { useMainStore } from "@/stores/main.js";
import { useLayoutStore } from "@/stores/layout.js";
import { useStyleStore } from "@/stores/style.js";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import PremAsideMenu from "@/components/Asidemenu/AsideMenu.vue";
import NavBarItemPlain from "@/components/NavBar/NavBarItemPlain.vue";
import FooterBar from "@/components/Footers/FooterBar.vue";
import { useAuthStore } from "@/stores/authStore";
import '@mdi/font/css/materialdesignicons.min.css';

const rows = [
        {
         id: 1213,title: 'Summer Batch',submission: 'https://www.iitiansgravity.com/', type: 'Video',
          category: 'Jee Coaching', approvee: ' Sam',status: 'Initial approval Pending', 
          submittedOn: 'Mar 3 ,2021',avatar: 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk',
        },
        {
          id: 1214, title: 'Diwali Offer', submissionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQSzQtgI8a6EE0QHs0ZNuYel_KfRbbze7Dg&usqp=CAU',
        type: 'Graphic',category: 'Neet Coaching',approvee: 'Ram',status: 'Editor Submission Pending',
        submittedOn: 'Dec 1, 2021', avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
        },
        {
         id: 1215, title: 'Winter Batch',submission: 'https://www.aakash.ac.in/',
         type: 'Text', category: 'Neet Coaching ', approvee: 'Sid', status: 'Final Approval Pending',
         submittedOn: 'May 18, 2021',avatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
        },
        {
       id: 1216,title: 'New Course',submission: 'https://www.aakash.ac.in/',
       type: 'ACC',category: 'Jee coachin',approvee: 'Ross',status: 'Initial submission Pending',
      submittedOn: 'May 4, 2021',avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
   },
   {
       id: 1217,title: 'Web Dev Course',submission: 'https://www.aakash.ac.in/', type: 'Online',
       category: 'Coursera',approvee: 'Shub', status: 'Not verified',submissionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQSzQtgI8a6EE0QHs0ZNuYel_KfRbbze7Dg&usqp=CAU',
      submittedOn: 'May 19, 2021', avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
   },
   {
       id: 1218, title: 'New Course', submission: 'https://www.aakash.ac.in/',
       type: 'ACC',category: 'Jee coachin',approvee: 'Ross',status: 'Initial submission Pending',
      submittedOn: 'May 4, 2021',avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
   },
   {
       id: 1219,title: 'Web Dev Course',submission: 'https://www.aakash.ac.in/', type: 'Online',
       category: 'Coursera',approvee: 'Shub', status: 'Not verified',
      submittedOn: 'May 19, 2021', avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
   },
   {
       id: 1220, title: 'New Course', submission: 'https://www.aakash.ac.in/',
       type: 'ACC',category: 'Jee coachin',approvee: 'Ross',status: 'Initial submission Pending',
      submittedOn: 'May 4, 2021',avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
   },
   {
          id: 1221, title: 'Diwali Offer', type: 'Graphic',category: 'Neet Coaching',approvee: 'Ram',
          status: 'Editor Submission Pending',
        submittedOn: 'Dec 1, 2021', avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
        },
   {
       id: 1222,title: 'Web Dev Course',submission: 'https://www.aakash.ac.in/', type: 'Online',
       category: 'Coursera',approvee: 'Shub', status: 'Not verified',
      submittedOn: 'May 19, 2021', avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
   },

   {
       id: 1223,title: 'Web Dev Course',submission: 'https://www.aakash.ac.in/', type: 'Online',
       category: 'Coursera',approvee: 'Shub', status: 'Not verified',
      submittedOn: 'May 19, 2021', avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
   },
   {
          id: 1224, title: 'Diwali Offer', submissionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQSzQtgI8a6EE0QHs0ZNuYel_KfRbbze7Dg&usqp=CAU',
        type: 'Graphic',category: 'Neet Coaching',approvee: 'Ram',status: 'Editor Submission Pending',
        submittedOn: 'Dec 1, 2021', avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
        },
    {
         id: 1225,title: 'Summer Batch',submission: 'https://www.iitiansgravity.com/', type: 'Video',
          category: 'Jee Coaching', approvee: ' Sam',status: 'Initial approval Pending', 
          submittedOn: 'Mar 3 ,2021',avatar: 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk',
        },
        {
          id: 1226, title: 'Diwali Offer', submissionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5l2crOvLts0mzw32kIK_nMtQPOYEnEPF_KQ&usqp=CAU',
        type: 'Graphic',category: 'Neet Coaching',approvee: 'Ram',status: 'Editor Submission Pending',
        submittedOn: 'Dec 1, 2021', avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
        },
  
];

const searchQuery = ref("");
const filterBy = ref("id");

const filteredRows = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  if (!query) {
    return rows;
  } else {
    return rows.filter(
      (row) =>
        row.approvee.toLowerCase().includes(query) ||
        row.title.toLowerCase().includes(query) ||
        row.id.toString().includes(query) ||
        row.type.toLowerCase().includes(query) ||
        row.status.toLowerCase().includes(query) ||
        row.category.toLowerCase().includes(query)
    );
  }
});

const resetFilters = () => {
  searchQuery.value = "";
  filterBy.value = "id";
};

useMainStore().setUser({
  name: "Zenith Physics",
  email: "zenith@physics.com",
  avatar:
    "https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93",
});

const layoutAsidePadding = computed(() =>
  layoutStore.isAsideLgActive ? "lg:pl-20" : "xl:pl-20"
);


const styleStore = useStyleStore();

const layoutStore = useLayoutStore();

const router = useRouter();

const AuthStore = useAuthStore();

router.beforeEach(() => {
  layoutStore.isAsideMobileExpanded = false;
});


const menuClick = (event, item) => {
  if (item.isToggleLightDark) {
    styleStore.setDarkMode();
  }

  if (item.isLogout) {
    AuthStore.logout();
    router.push("/auth/login");
  }
};


const view = (row) => {
  // Perform view action for the row
};

const approve = (row) => {
  // Perform approve action for the row
};

const edit = (row) => {
  // Perform edit action for the row
};

const title = computed(() => {
  return styleStore.darkMode ? 'Approvals ' : 'Approvals';
});

const currentPage = ref(1);  
const itemsPerPage = 4;   

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage);

const endIndex = computed(() => startIndex.value + itemsPerPage);

const paginatedRows = computed(() => filteredRows.value.slice(startIndex.value, endIndex.value));

const totalPages = computed(() => Math.ceil(filteredRows.value.length / itemsPerPage));
const goToPage = (page) => {
  currentPage.value = page;
};

</script>

<style>

.header-content {
  display: flex;
  align-items: center;
}

.header-content {
  margin-bottom: 10px;
  color: #000;
  margin-left: 20px;
}

.approval-page {
  padding: 10px;
  color: black;
}

.darkMode .header-title {
  color: #fff; /* Text color for dark mode */
}

.header {
  padding: 10px;
  color: black;
  font: 1em sans-serif;
  font-size: 35px;
  text-align: left;
}

.search-filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 220px;
  padding: 10px 20px;
  margin-bottom: 20px;
  margin-left: 20px; /* Add left margin */
  margin-right: 20px; /* Add right margin */
}

.search-filter input[type='text'] {
  flex: 1;
  padding: 12px;
  border: 1px solid grey;
  border-radius: 40px;
  font-size: 16px;
}

.search-filter label {
  font-weight: bold;
  margin-right: 10px;
}

.search-filter select {
  padding: 10px;
  border: 1px solid grey;
  border-radius: 4px;
  font-size: 14px;
}

.search-filter button {
  padding: 6px 10px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}

.search-filter button:hover {
  background-color: #4b84c1;
}

@media (max-width: 768px) {
  .search-filter {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .search-filter input[type='text'] {
    width: 100%;
  }
}

.reset-button {
  padding: 6px 10px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}

@media (max-width: 768px) {
  .search-filter {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .reset-button {
    width: 100%;
  }
}

.table-container {
  width: 100%;
  overflow-x: auto; /* Enable horizontal scrolling on small screens */
}

.table-container th,
.table-container td {
  padding: 10px;
}

.data-table th {
  text-align: left;
}

.table-container td:last-child {
  text-align: center;
}

.approval-table td:last-child {
  text-align: center;
}

.button-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.small-button {
  font-size: 14px;
  padding: 9px 12px;
}

.transparent-button {
  background: transparent;
  border: none;
  color: lightseagreen;
}

.with-border {
  border: 1px solid #000;
}

input[type='text'] {
  padding: 12px;
  border: 1px solid grey;
  border-radius: 40px;
  width: 100%; /* Adjust the width value to your preference */
  font-size: 16px;
}

.dark-mode-title {
  color: #fff; /* Text color for dark mode */
}

.approvee-avatar {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center; /* Center the approvee images */
}

.approvee-avatar img {
  width: 24px; /* Adjust the size as needed */
  height: 24px;
  border-radius: 50%;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 25px;
  gap: 25px;
}

.pagination-button {
  padding: 7px 12px;
  margin: 0 8px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-button.active {
  background-color: black;
  color: #fff;
}

.pagination-button:hover {
  border: 1px solid #333;
  padding: 6px 11px;
}

.submission-text {
  display: flex;
  align-items: center;
  gap: 8px;
}
.mobileView{
  padding: 1rem;
  width: 99%;
}
.mobileView tr{
  padding:.3rem;
}

</style>