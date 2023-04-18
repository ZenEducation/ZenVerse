<script setup>
import { computed } from "vue";
import { ref, reactive } from "vue";
import { useMainStore } from "@/stores/main.js";
import { useRouter } from "vue-router";
import PremAsideMenu from "@/components/SalesCRM/DashBoard/dashboardAsideMenu.vue";
import NavBarItemPlain from "@/components/NavBar/NavBarItemPlain.vue";
import FooterBar from "@/components/Footers/FooterBar.vue";
import menuAside from "@/components/SalesCRM/DashBoard/dashboardMenuAside.js";
import menuNavBar from "@/configs/menuNavBar.js";
import { mdiMagnify} from "@mdi/js";
import SectionMain from "@/components/Sections/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import CardBoxWidget from "@/components/Cards/CardBoxWidget.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";

import { useLayoutStore } from "@/stores/layout.js";
import { useStyleStore } from "@/stores/style.js";
import { useAuthStore } from "@/stores/authStore";

const selectBranchOptions = [
  { id: 1, label: "Business development" },
  { id: 2, label: "Marketing" },
  { id: 3, label: "Sales" },
  { id: 4, label: "IT" },
  { id: 5, label: "Tech Support" },
  { id: 6, label: "Human Rerouces" },
];

const selectSubCRMOptions = [
  { id: 1, label: "Howell Hand" },
  { id: 2, label: "Hope Howe" },
  { id: 3, label: "Nelson Jerde"},
  { id: 4, label: "Kim Weimann (disabled)" },
  { id: 5, label: "Lenna Smitham" },
  { id: 6, label: "Alex" },
];

const selectTagsOptions = [
  { id: 1, label: "Howell Hand"},
  { id: 2, label: "Hope Howe"},
  { id: 3, label: "Nelson Jerde" },
  { id: 4, label: "Kim Weimann (disabled)" },
  { id: 5, label: "Lenna Smitham" },
];

const styleStore = useStyleStore();

const layoutStore = useLayoutStore();
const AuthStore = useAuthStore();

const router = useRouter();

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
    router.push("dashBoard/dashboardUI");
  }
};
</script>

<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain class="bg-blue-100  dark:bg-slate-800">
        <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4">
          <CardBox
            :icon="mdiBallot"
            class="grid grid-cols-1 mb-6 lg:mb-0 lg:col-span-auto xl:col-span-4 "
            is-form
            @submit.prevent="submit"
          >   
          <SectionTitleLineWithButton
          :icon="mdiMagnify"
          title="Filter Leads"
          class="underline"
          >
          <B>
              <BaseButton
              class="h-10 px-0 mt-4 text-red-700"           
              label="Clear Filter"         
              color=""
              text-red-500
              bg-red-500
              small
              />
          </B>
          </SectionTitleLineWithButton>                         
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 mb-6">  
              <PremFormField label="Select Branch"  horizontal>
                <PremFormControl
                  type="list"
                  :options="selectBranchOptions"          
                />
              </PremFormField>   
              <PremFormField
                label="Select SubCRM"
                horizontal
              >
                <PremFormControl
                  type="list"
                  :options="selectSubCRMOptions"                
                />
              </PremFormField>
              
              <PremFormField label="Search By Date" horizontal>
                <PremFormControl type="date"  />
              </PremFormField>

              <PremFormField label="Search By Delayed Days">
                <PremFormControl
                placeholder="Days Delayed"/>

              </PremFormField>

              <PremFormField
                label="Search By Tags"
                horizontal
              >
              <PremFormControl
                  type="list"
                  :options="selectTagsOptions"                
                />
              </PremFormField>
              <PremFormField>
                <button class="h-10 px-5 mt-9 text-red-100 transition-colors duration-150 bg-red-700  focus:shadow-outline hover:bg-red-800">Filter</button>             
              </PremFormField>

            </div>

           </CardBox>
          </div> 
        
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 mb-6 mt-8 ">
          <CardBoxWidget class="blue"
            :number="7"
            label="Total Leads"
          />
          <CardBoxWidget class="blue"
            :number="3"
            label="Pending Leads"
          />
          <CardBoxWidget class="red"
            :number="3"
            label="Pending Tasks"
          />
          <CardBoxWidget class="green"
            :number="0"
            label="Unread Communictions"
          />

          <CardBoxWidget class="blue"
            :number="5"
            label="Total Profiles"
          />
          <CardBoxWidget class="blue"
            :number="0"
            label="Under Review Documents"
          />
          <CardBoxWidget class="blue"
            :number="0"
            label="Followup"
          />
          <CardBoxWidget class="blue"
            :number="0"
            label="Recommendation Given"
          />

          <CardBoxWidget class="blue"
            :number="0"
            label="Documents Pending"
          />
          <CardBoxWidget class="blue"
            :number="0"
            label="Documents Submitted"
          />
          <CardBoxWidget class="blue"
            :number="1"
            label="Application Submitted"
          />
          <CardBoxWidget class="blue"
            :number="1"
            label="Offer Letter Received"
          />

          <CardBoxWidget class="blue"
            :number="1"
            label="Visa Process Started"
          />
        </div>

        <CardBox has-table class="mb-6">
          <TableSampleClients />
        </CardBox>

      </SectionMain>
    </NuxtLayout>
  </div>

</template>

<style scoped>
.blue{
  background-color: rgb(19, 84, 163);
}
.red{
background-color: rgb(126, 1, 1);
}
.green{
background-color: rgb(4, 98, 4);
}
.underline{
  
  text-decoration: underline;
  text-decoration-color: rgb(179, 32, 32);
}
</style>