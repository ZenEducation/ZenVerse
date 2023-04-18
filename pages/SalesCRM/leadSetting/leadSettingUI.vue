<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import SectionMain from "@/components/Sections/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import SwitchButton from "@/components/SalesCRM/LeadSettings/leadsettingsSwitchButton.vue";
import SwitchButtonOff from "@/components/SalesCRM/LeadSettings/leadsettingsSwitchButtonOff.vue";
import PremAsideMenu from "@/components/SalesCRM/DashBoard/dashboardAsideMenu.vue";
import menuAside from "@/components/SalesCRM/DashBoard/dashboardMenuAside.js";
import NavBar from "@/components/NavBar/NavBar.vue";
import menuNavBar from "@/configs/menuNavBar.js";
import FooterBar from "@/components/Footers/FooterBar.vue";
import { useMainStore } from "@/stores/main.js";
import { useLayoutStore } from "@/stores/layout.js";
import { useStyleStore } from "@/stores/style.js";

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

// const GraphqlAPIStore = useGraphqlAPIStore();
router.beforeEach(() => {
  layoutStore.isAsideMobileExpanded = false;
});

const menuClick = (event, item) => {
  if (item.isToggleLightDark) {
    styleStore.setDarkMode();
  }

  if (item.isLogout) {
    AuthStore.logout();
    // console.log("Clicked On Logout");
    router.push("leadSetting/leadSettingUI");
  }
};
</script>

<script>
export default{
  methods:{
    onCRMClick(){
      this.$router.push('/SalesCRM/dashBoard/dashboardUI');
    },
  },
}
</script>

<template>
  <div >
   <!-- The  Navbar -->
   <NavBar
          :menu="menuNavBar"
          :class="[
            layoutAsidePadding,
            { 'ml-60 lg:ml-0': layoutStore.isAsideMobileExpanded },
          ]"
          @menu-click="menuClick"
        >
        </NavBar>
        <NuxtLayout>
      <SectionMain class="py-20 bg-white dark:bg-slate-800">
        
        <SectionTitleLineWithButton
        title="Training Platform"
        class="text-6xl text-blue-800 font-bold mt-0 dark:text-slate-300"
        >
        <div>
          <Button
                class="h-8 px-2 mt-0 font-normal text-base text-white transition-colors duration-150 bg-cyan-600  focus:shadow-outline hover:bg-cyan-800 mr-1" >Back to Settings
          </Button>    
          <Button @click.prevent="onCRMClick()"
                class="h-8 px-2 mt-0 font-normal text-base text-white transition-colors duration-150 bg-cyan-600  focus:shadow-outline hover:bg-cyan-800" >Back to CRM
          </Button>    
        </div>   
              
        </SectionTitleLineWithButton>
      
      </SectionMain>
      
        <SectionMain class="bg-gray-200  dark:bg-slate-700">
          <div>
          <SectionTitleLineWithButton
          title="Lead Settings"
          class="text-3xl">
          <label class="control_panel">
              Control Panel
            </label>
          <ul class="breadcrumb">
            <li class="dark:bg-slate-700"><a href="#">Home</a></li>
            <li class="text-gray-500 dark:bg-slate-700">Leads Settings</li>
            </ul>
            </SectionTitleLineWithButton>
            </div>
          <SectionTitleLineWithButton>
          <div> 
            <Button
                  class="h-8 px-2 mt-0 text-base text-white transition-colors duration-150 bg-cyan-600  focus:shadow-outline hover:bg-cyan-800 mr-1" >Add Leads Status
            </Button>    
            <Button
                  class="h-8 px-2 mt-0 text-base text-white transition-colors duration-150 bg-cyan-600  focus:shadow-outline hover:bg-cyan-800" >Change Serial
            </Button>    
          </div>           
          </SectionTitleLineWithButton>
          <BaseDivider/>

          <table class="t">
            <thead>
              <h1 class="text-xl">Programs</h1>
              <tr>
                <th>Sr No.</th>
                <th>Status Name</th>
                <th>Action</th>
                <th>Default (Lead DashBoard)</th>
                <th>Default (Abroad DashBoard)</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Followup</td>
                <td>
                  <button class="h-8 px-4 mt-0 mb-0 text-orange-100 transition-colors duration-150 bg-orange-700  focus:shadow-outline hover:bg-orange-900">Delete</button>             
               </td>
                <td>
                  <SwitchButton>
                    
                  </SwitchButton> 
                </td>
                <td>
                  <SwitchButton/> 
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Recommendation Given</td>
                <td>
                  <button class="h-8 px-4 mt-0 mb-0 text-orange-100 transition-colors duration-150 bg-orange-700  focus:shadow-outline hover:bg-orange-900">Delete</button>             
                </td>
                <td>
                  <SwitchButton/> 
                </td>
                <td>
                  <SwitchButton/> 
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Documents Pending</td>
                <td>
                  <button class="h-8 px-4 mt-0 mb-0 text-orange-100 transition-colors duration-150 bg-orange-700  focus:shadow-outline hover:bg-orange-900">Delete</button>             
                </td>
                <td>
                  <SwitchButton/> 
                </td>
                <td>
                  <SwitchButton/> 
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Documents Submitted</td>
                <td>
                  <button class="h-8 px-4 mt-0 mb-0 text-orange-100 transition-colors duration-150 bg-orange-700  focus:shadow-outline hover:bg-orange-900">Delete</button>             
                </td>
                <td>
                  <SwitchButton/>                   
                </td>
                <td>
                  <SwitchButton/> 
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Application Submitted</td>
                <td>
                  <button class="h-8 px-4 mt-0 mb-0 text-orange-100 transition-colors duration-150 bg-orange-700  focus:shadow-outline hover:bg-orange-900">Delete</button>             
                </td>
                <td>
                  <SwitchButton/> 
                </td>
                <td>
                  <SwitchButtonOff/>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Offer Letter Received</td>
                <td>
                  <button class="h-8 px-4 mt-0 mb-0 text-orange-100 transition-colors duration-150 bg-orange-700  focus:shadow-outline hover:bg-orange-900">Delete</button>             
                </td>
                <td>
                  <SwitchButton/> 
                </td>
                <td>
                  <SwitchButtonOff/>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Visa Process Started</td>
                <td>
                  <button class="h-8 px-4 mt-0 mb-0 text-orange-100 transition-colors duration-150 bg-orange-700  focus:shadow-outline hover:bg-orange-900">Delete</button>             
                </td>
                <td>
                  <SwitchButton/> 
                </td>
                <td>
                  <SwitchButton/> 
                </td>
              </tr>
            </tbody>
          </table>

        </SectionMain>
    <!-- The  Premium Aside Menu -->
    <PremAsideMenu :menu="menuAside" @menu-click="menuClick" />
        <slot />
        <!-- FooterBar-->
        <FooterBar>
          <a href="#" target="_blank" class="text-blue-600"> Photon Ecademy</a>
        </FooterBar>
      </NuxtLayout>
    
  </div>
</template>

<style scoped>
.control_panel{
  color: gray;
  font-size: 16px;
  padding: 0px 0px;
}
ul.breadcrumb {
  padding: 0px 0px;
  list-style: none;
}
ul.breadcrumb li {
  display: inline;
  font-size: 13px;
}
ul.breadcrumb li+li:before {
  padding: 4px;
  color: rgb(156, 151, 151);
  content: ">\00a0";
}
ul.breadcrumb li a {
  text-emphasis-color: red;
  color: #031524;
  text-decoration: none;
}
ul.breadcrumb li a:hover {
  color: #008e9b;
  text-decoration: underline;
}
table.t{
  
  padding: 20px 90px;
  list-style: none;

}
</style>