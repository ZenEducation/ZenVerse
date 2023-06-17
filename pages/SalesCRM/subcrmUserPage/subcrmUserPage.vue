<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import SectionMain from "@/components/Sections/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import { useMainStore } from "@/stores/main.js";
import { useLayoutStore } from "@/stores/layout.js";
import { useStyleStore } from "@/stores/style.js";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import Sub from "@/components/SalesCRM/SubCRMUserPage/user.vue"; 


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
    router.push("/");
  }
};


</script>

<script>
export default
{
  methods:{
    onCRMClick(){
      this.$router.push('/SalesCRM/dashBoard/dashboardUI');
    },
  },

}
</script>
<template>
    <div>
        <NuxtLayout name="zen">
            <div>
                <SectionMain class="py-20 bg-white dark:bg-slate-800">
        
                    <SectionTitleLineWithButton
                    title="Training Platform"
                    class="text-5xl text-blue-800 font-bold mt-0 dark:text-slate-300"
                    >
                    <div class="flex space-x-1">
                    
                    <Button @click.prevent="onCRMClick()"
                            class="rounded p-3 mt-0 font-normal text-base text-white transition-colors duration-150 bg-cyan-600  focus:shadow-outline hover:bg-cyan-800 mr-1" >Move to CRM
                    </Button>    
                    <Button 
                            class="rounded p-3 mt-0 font-normal text-base text-white transition-colors duration-150 bg-cyan-600  focus:shadow-outline hover:bg-cyan-800" >Publish
                    </Button>   
                    </div>   
                        
                    </SectionTitleLineWithButton>
                
                </SectionMain>

                <SectionMain class="bg-gray-200  dark:bg-slate-700">
                    <div>
                        <SectionTitleLineWithButton
                        title="SUBCRM Users"
                        class="text-2xl">
                        <CardBoxModal
                        button="hi"
                        buttonLabel="hi"/>
                        <label class="control_panel">
                            Control Panel
                            </label>
                        <ul class="breadcrumb">
                            <li class="dark:bg-slate-700"><a href="#">Home</a></li>
                            <li class="text-gray-500 dark:bg-slate-700">SUBCRM Users</li>
                            </ul>
                        </SectionTitleLineWithButton>
                        </div>
                        <div>
                      <Sub class="justify-center"/>

                        </div>
                    </SectionMain>
                    
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped>
.control_panel{
  text-align: left;
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

</style>