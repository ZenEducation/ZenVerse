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
            <FormControl placeholder="Search (ctrl+k)" ctrl-k-focus transparent borderless v-model="searchQuery" />
          </NavBarItemPlain>
        </NavBar>
        <!-- The Premium Aside Menu -->
        <PremAsideMenu :menu="menuAside" @menu-click="menuClick" />

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
      placeholder="Search by Approvee name, Title, or ID"
    />
    <button @click="resetFilters">Reset</button>
  </div>

     <div class="table-container">
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
              <tr v-for="row in filteredRows" :key="row.id">
                <td>{{ row.id }}</td>
               <td>{{ row.title }}</td>
               <td>{{ row.submission }}</td>
                <td>{{ row.type }}</td>
               <td>{{ row.category }}</td>
               <td> <div class="approvee-avatar">
               <img :src="row.avatar" alt="Approvee Avatar" />
                <span>{{ row.approvee }}</span>
                </div></td>
               <td>{{ row.status }}</td>
               <td>{{ row.submittedOn }}</td>
                <td>
                  <button class="small-button transparent-button" @click="view(row)">
                       <span class="mdi mdi-eye"></span> View</button>
                       <button class="small-button transparent-button with-border" @click="approve(row)"> Approve</button>
                       <button class="small-button transparent-button" @click="edit(row)">
                       <span class="mdi mdi-pencil"></span> Edit </button>
                </td>
              </tr>
            </tbody>
          </table>
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
         id: 1213,
          title: 'Summer Batch',
          submission: 'https://www.iitiansgravity.com/',
          type: 'Video',
          category: 'Jee Coaching',
          approvee: ' Sam',
          status: 'Initial approval Pending',
          submittedOn: 'Mar 3 ,2021',
          avatar: 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk',
        },
        {
          id: 1214,
          title: 'Diwali Offer',
          submission: 'https://ww.facebook.com',
          type: 'Graphic',
          category: 'Neet Coaching',
          approvee: 'Ram',
          status: 'Editor Submission Pending',
          submittedOn: 'Dec 1, 2021',
          avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
        },
        {
         id: 1215,
         title: 'Winter Batch',
         submission: 'https://www.google.com',
         type: 'Text',
         category: 'Neet Coaching ',
        approvee: 'Sid',
        status: 'Final Approval Pending',
        submittedOn: 'May 18, 2021',
        avatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
        },
        {
       id: 1216,
       title: 'New Course',
       submission: 'https://www.makemytrip.com',
       type: 'ACC',
       category: 'Jee coachin',
      approvee: 'Ross',
      status: 'Initial submission Pending',
      submittedOn: 'May 4, 2021',
      avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
   },
];

const searchQuery = ref("");

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



</script>

<style>
.header-content {
  display: flex;
  align-items: center;
}
.header-content {
  margin-bottom: 50px;
  color: #000; 
  margin-left: 30px;
}

.approval-page {
  padding: 15px;
  color:black;
}

.darkMode .header-title {
  color: #fff; /* Text color for dark mode */
}

.header {
  padding: 15px;
  color:black;
  font: 1em sans-serif;
  font-size: 35px;
   text-align: left;
}
.search-filter {
  display: flex;
  align-items: center;
  gap: 660px;
  padding-left: 20px;
  margin-bottom: 40px;
}

.table-container {
  width: 100%;
  border-collapse: collapse;
}

.table-container th,
.approval-table td {
  padding: 10px;
  border-bottom: 2px solid lightblue;
}

.data-table th {
  text-align: left;
}

.approval-table td:last-child {
  text-align: center;
}

button {
  padding: 6px 10px;
  background-color: #007bff;
  border: none;
    border-radius: 5px;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #4b84c1;
}

.button-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
}

.small-button {
  font-size: 14px;
  padding: 9px 12px;
}

.small-button {
  font-size: 14px;
  padding: 6px 10px;
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
  width: 300px;
  font-size: 16px;
}

.dark-mode-title {
  color: #fff; /* Text color for dark mode */
}

.approvee-avatar {
  display: flex;
  align-items: center;
  gap: 8px;
}

.approvee-avatar img {
  width: 24px; /* Adjust the size as needed */
  height: 24px;
  border-radius: 50%;
}
</style>












