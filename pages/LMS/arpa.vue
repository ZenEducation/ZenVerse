<script setup>
import { mdiTrashCan } from "@mdi/js";
import { ref } from 'vue';
import SectionMain from "~~/components/Sections/SectionMain.vue";
import CardBox from "~~/components/Cards/CardBox.vue";
import CardBoxComponentTitle from "~~/components/Cards/CardBoxComponentTitle.vue";
import BaseDivider from "~~/components/NavBar/BaseDivider.vue";
import PremFormField from "~~/components/Forms/FormField.vue";
import PremFormControl from "~~/components/Forms/FormControl.vue";
import BaseButton from "~~/components/Buttons/BaseButton.vue";



const adminList = ref([
    { id: 1, label: "Admin 1", active: true },
    { id: 2, label: "Admin 2", active: false },
    { id: 3, label: "Admin 3", active: true },
    { id: 4, label: "Admin 4", active: false },
    { id: 5, label: "Admin 5", active: true },
    { id: 6, label: "Admin 6", active: true },
])

const affiliateList = ref([
    { id: 1, label: "Affiliate 1", active: true },
    { id: 2, label: "Affiliate 2", active: false },
    { id: 3, label: "Affiliate 3", active: true },
    { id: 4, label: "Affiliate 4", active: false },
    { id: 5, label: "Affiliate 5", active: true },
    { id: 6, label: "Affiliate 6", active: true },
])

const revenueList = ref([
    { id: 1, label: "Partner 1", active: true , percentage:8},
    { id: 2, label: "Partner 2", active: false, percentage:8 },
    { id: 3, label: "Partner 3", active: true, percentage:3 },
    { id: 4, label: "Partner 4", active: false, percentage:8 },
    { id: 5, label: "Partner 5", active: true, percentage:8 },
    { id: 6, label: "Partner 6", active: true, percentage:8 },
])



const adminPart = ref('');
const revenuePart = ref('');
const revenueSelectedForPercentage = ref('')
const affiliatePart = ref('');

const addToRevenuePercentage = ()=>{
    revenueSelectedForPercentage.value = revenuePart.value
}



const addToActiveAdmin = (id) => {
    const admin = adminList.value.find((item) => item.id === id);
    if (admin) {
        admin.active = true;
    }
};

const removeFromActiveAdmin = (id) => {
    const admin = adminList.value.find((item) => item.id === id);
    if (admin) {
        admin.active = false;

    }
};

const addToActiveRevenue = () => {
    const id = revenueSelectedForPercentage.value.id;
    const percentage = revenueSelectedForPercentage.value.percentage ; 
    if(!percentage) return
    const revenue = revenueList.value.find((item) => item.id === id);
    if (revenue) {
        revenue.active = true;
        revenue.percentage = percentage;
    }
    revenueSelectedForPercentage.value = '';
};


const addToActiveAffiliate = (id) => {
    const affiliate = affiliateList.value.find((item) => item.id === id);
    if (affiliate) {
        affiliate.active = true;
    }
};

const removeFromActiveRevenue = (id) => {
    const revenue = revenueList.value.find((item) => item.id === id);
    if (revenue) {
        revenue.percentage = null;
        revenue.active = false;
        
    }
};

const saveRevenuePercentage = (id) => {
    const revenue = revenueList.value.find((item) => item.id === id);
    if (revenue) {
        revenue.percentage = null;
        revenue.active = false;
        
    }
};

const removeFromActiveAffiliate = (id) => {
    const affiliate = affiliateList.value.find((item) => item.id === id);
    if (affiliate) {
        affiliate.active = false;
    }
};


// const adminActive = adminList.filter((item)=>item.active === true );
const adminActive = computed(() => {
  return adminList.value.filter((item) => item.active === true);
});
const revenueActive = computed(() => {
  return revenueList.value.filter((item) => item.active === true);
});
const affiliateActive = computed(() => {
  return affiliateList.value.filter((item) => item.active === true);
});

const adminUnactive = computed(() => {
  return adminList.value.filter((item) => item.active === false);
});
const revenueUnactive = computed(() => {
  return revenueList.value.filter((item) => item.active === false);
});
const affiliateUnactive = computed(() => {
  return affiliateList.value.filter((item) => item.active === false);
});


</script>

<template>
    <div>
        <NuxtLayout name="zen">
            <SectionMain>
                <div class="grid gird-cols-1 gap-6 mb-6 xl:grid-cols-4">
                    <CardBox class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3" if-from @submit.prevent="submit">
                        <CardBoxComponentTitle title="Admins, Revenue Partners & Affiliates" class="mb-12" />
                        <h4 class="text-gray-700 dark:text-slate-400">Manage Course Admin, Revenue Partner, and Affiliate
                            settings for this specific course. You can assign a role to a user in their user settings.</h4>
                        <BaseDivider />
                        <PremFormField label="Add Course Admins">
                            <h4 class="text-gray-700 dark:text-slate-400">Course Admins can create new courses, edit
                                existing courses they're assigned to, or create new instructors.</h4>
                        </PremFormField>
                        <PremFormField>
                            <PremFormControl v-model="adminPart" :options="adminUnactive" />
                            <BaseButton type="submit" color="info" label="ADD" @click="addToActiveAdmin(adminPart.id)" outline />
                        </PremFormField>
                        <BaseDivider />
                        <PremFormField v-for="item in adminActive" :key="item.id">
                            <h4 class="text-gray-700 dark:text-slate-400">{{ item.label }}</h4>
                            <BaseButton type="submit" color="danger" :icon="mdiTrashCan"
                                @click="removeFromActiveAdmin(item.id)" outline />
                        </PremFormField>
                        <BaseDivider />
                        <PremFormField label="Add Revenue Partners">
                            <h4 class="text-gray-700 dark:text-slate-400">If this course was a joint effort, easily split a
                                percentage of the sales amongst all your creators/instructors. You can add them to this
                                course and set their payout below.</h4>
                        </PremFormField>
                        <PremFormField label="When I sell this course, I want to pay:">
                            <PremFormControl v-model="revenuePart" :options="revenueUnactive" />
                            <BaseButton type="submit" color="info"  @click="addToRevenuePercentage" label="ADD" outline />
                        </PremFormField>
                        <div class="grid grid-cols-3">
                            <span class="text-gray-700 dark:text-slate-400" style="margin-right: 33%;">Name</span>
                            <span class="text-gray-700 dark:text-slate-400" style="margin-right: 33%;">Percentage</span>
                            <div style="text-align: center;">
                                <BaseButton v-if="revenueSelectedForPercentage" type="submit" label="SAVE"  @click="addToActiveRevenue" color="info" outline />
                            </div>

                          

                        </div>
                        <div class="grid grid-cols-3" v-if="revenueSelectedForPercentage" >
                            <div>
                                <h4 class="text-gray-900 dark:text-slate-400">{{ revenueSelectedForPercentage?.label }}</h4>
                            </div>
                            <div >  <input type="number" class="dark:text-slate-200 dark:bg-slate-900  " style="width: 30%; border-radius: 4px;" v-model="revenueSelectedForPercentage.percentage" /> 
                                <button style="padding: 3%; border-radius: 4px; font-weight: 600;">%</button>
                            </div>
                            <div style="text-align: center;">
                            </div>
                        </div>  
                        <BaseDivider  />
                        <div class="grid grid-cols-3 py-2" v-for="item in revenueActive" :key="item.id">
                            <div>
                                <h4 class="text-gray-900 dark:text-slate-400">{{ item?.label }}</h4>
                            </div>
                            <div >
                                <h3  class=" text-left" >{{item.percentage}}%</h3>
                            </div>
                            <div style="text-align: center;">
                                <BaseButton type="submit" :icon="mdiTrashCan" @click="removeFromActiveRevenue(item.id)" color="danger" outline />
                            </div>
                        </div>
                        <BaseDivider />
                        <PremFormField label="Add Affiliate">
                            <h4 class="text-gray-700 dark:text-slate-400">An affiliate can earn percentage or dollar
                                commissions for promoting your courses! They will have access to basic account settings like
                                a Student as well as an Affiliate Dashboard</h4>
                        </PremFormField>
                        <PremFormField>
                            <PremFormControl v-model="affiliatePart" :options="affiliateUnactive" />
                            <BaseButton type="submit" color="info" @click="addToActiveAffiliate(affiliatePart.id)" label="ADD" outline />
                        </PremFormField>
                        <BaseDivider />
                        <PremFormField v-for="item in affiliateActive " :key="item.id" >
                            <h4 class="text-gray-700 dark:text-slate-400">{{ item.label }}</h4>
                            <BaseButton type="submit" color="danger" @click="removeFromActiveAffiliate(item.id)"  :icon="mdiTrashCan" outline />
                        </PremFormField>
                    </CardBox>
                </div>
            </SectionMain>
        </NuxtLayout>

    </div>
</template>