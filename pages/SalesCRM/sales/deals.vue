<template>
  <div>
    <NuxtLayout name="sales">
      <SectionMain>
  
        <!-- heading section  -->
        <!-- table view  -->

        <div class="" v-if="tableView">
        <section class="headingMenu px-3">
          <div class="flex justify-between items-center">
            <div class="flex justify-between items-center">
              <BaseIcon
                :path="mdiStar"
                class="cursor-pointer mr-3 text-gray-300"
                size="40"
                h="40"
                w="40"
              />
              <div class="">
                <div class="text-gray-400 text-sm">List View</div>
                <div class="flex justify-between items-center cursor-pointer"
                 @click="ShowNewDealList"
                >
                  <div>Add New Deal</div>
                  <BaseIcon
                    :path="mdiMenuDown"
                    class="cursor-pointer mr-1 text-gray-600 dark:text-gray-50"
                    size="30"
                    h="30"
                    w="30"
                  />
                </div>
                <div class="all_dealpop_UP absolute bg-white dark:bg-slate-800 " 
                v-if="dealList"
                >
                  <AllDealPopup />
           
                </div>
              </div>
            <div>  
              <div class="flex justify-between items-center mx-2 border pl-3 py-1 cursor-pointer rounded"
              @click="showHideListOptions"
              >
                <div class="text-info text-base">List Option</div>
                <BaseIcon
                  :path="mdiMenuDown"
                  class="cursor-pointer mr-1 text-gray-600 dark:text-gray-50 ml-1"
                  size="30"
                  h="30"
                  w="30"
                /></div>

                <div class="listoption absolute bg-white dark:bg-slate-800" v-if="listOptionSow">
                  <ListOptions />
                </div>
              </div>

              <div class="flex justify-between items-center mx-2 border pl-3 py-1 cursor-pointer rounded">
                <BaseIcon
                  :path="mdiContentSave"
                  class="cursor-pointer mr-1 text-gray-600 dark:text-gray-50 ml-1"
                  size="20"
                  h="20"
                  w="20"
                />
                <div class="text-info text-base">Save List</div>
                <BaseIcon
                  :path="mdiMenuDown"
                  class="cursor-pointer mr-1 text-gray-600 dark:text-gray-50 ml-1"
                  size="30"
                  h="30"
                  w="30"
                />
              </div>
            </div>
            <div class="flex justify-between items-center">
              <BaseIcon
                  :path="mdiPoll"
                  class="cursor-pointer text-gray-600 mr-1 dark:text-gray-50 "
                  size="20"
                  h="20"
                  w="20"
                  @click="tableView=false"
                />
              <div class="flex justify-between items-center mx-2 border pl-2 pr-2 py-2 cursor-pointer rounded border-red-600">
                <BaseIcon
                  :path="mdiDeleteOutline"
                  class="cursor-pointer text-gray-600 mr-1 dark:text-gray-50 "
                  size="20"
                  h="20"
                  w="20"
                />
                <div class="text-info text-sm">Delete Sample data</div>
            
              </div>
              <div class=" "> 
              <div class="flex justify-between items-center mx-1 border pl-3 py-1 cursor-pointer rounded" 
              @click="exportShow"
              >
                <div class="text-info text-base">Export</div>
                <BaseIcon
                  :path="mdiMenuDown"
                  class="cursor-pointer mr-1 text-gray-600 dark:text-gray-50 ml-1"
                  size="30"
                  h="30"
                  w="30"
                />
              </div>
              <div class="export absolute bg-white dark:bg-slate-800 ml-2"
              v-if="exportList"
              >
                <ExportPopUp />
              </div>
              </div>
              <div class=""> 
              <div class="flex justify-between items-center mx-1 border pl-3 py-1 cursor-pointer rounded"
              @click="importShow"
              >
                <div class="text-info text-base">Import</div>
                <BaseIcon
                  :path="mdiMenuDown"
                  class="cursor-pointer mr-1 text-gray-600 dark:text-gray-50 ml-1"
                  size="30"
                  h="30"
                  w="30"
                />
              </div>
              <div class="import absolute bg-white dark:bg-slate-800 ml-2" v-if="importList">
                <ImportPopup />
              </div>
            </div>
              <BaseButton
                label="Add New Deal"
                type="button"
                color="info"
                class="uppercase"
                :style="[]"
                @click="newDealAdd=true"
              />
          
        
            
           
            </div>
          </div>
        </section>
<!-- table sec -->
  <div class="tablesec bg-gray-100 px-3 py-1 mt-3 dark:bg-slate-900">
      <!-- filtered text section  -->
  <div class="filtedsection flex  justify-between items-center mt-3">
    <div class="flex  justify-between items-center">
    <div class=" flex justify-between items-center">
    <div class="text-sm">Filtered Total :</div>
    <div class="text-green-600 pl-2 text-2xl">₹416,050.00 </div>

    </div>
    <div class=" flex justify-between items-center pl-3">
      <div class="text-sky-500 text-sm">All active Deals :</div>
    <div class="text-green-600 pl-2 text-2xl">₹290,500.00.00 </div> 
    </div>

    </div>
    <div class="">
      <div class="border px-3 py-1 text-sm bg-white text-sky-500 dark:bg-transparent">
        Compare to Past
      </div>
    </div>

  </div>

  <!-- add remove column  -->
  <div class="flex justify-between items-center mt-4">
    <div class="text-sm font-extralight		"> <i> Select records to apply bulk actions</i></div>
    <div class="flex justify-between items-center">
      <div class="text-sm ">7 matches out of 7</div>
      <div class="">
        <div class="flex justify-between items-center mx-2 border border-sky-500   cursor-pointer rounded bg-white dark:bg-transparent">
          <BaseIcon
                  :path="mdiTable"
                  class="cursor-pointer  text-sky-500 dark:text-sky-500 ml-2"
                  size="23"
                  h="23"
                  w="23"
                />  
          <div class="text-info text-sm pl-1 text-sky-500">Add remove Columns</div>
                <BaseIcon
                  :path="mdiMenuDown"
                  class="cursor-pointer mr-1 text-sky-600 dark:text-gray-500 "
                  size="25"
                  h="25"
                  w="25"
                />
              </div>
      </div>

    </div>
  </div>

  <!-- deal table  -->
  <DealTable class="mt-5" :data="getDeal.allDeals" />
  </div>
<AddNewDealPopup 
class="add_new_deal_popup"
 v-if="newDealAdd"
  @on-action="closePopup"
  @get-deal-data="getDealItems"/>

</div>
  <!-- kannan view -->

  <KanbanView @close="closeKanban" :data="getDeal.allDeals" v-else />



      </SectionMain>
    </NuxtLayout>
  </div>
</template>

<script setup>
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import SectionMain from "@/components/Sections/SectionMain.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import DealTable from "@/components/SalesCRM/DealTable.vue"
import AllDealPopup from "@/components/SalesCRM/AllDealPopup.vue"
import ListOptions from "@/components/SalesCRM/ListOptions.vue"
import ExportPopUp from "@/components/SalesCRM/ExportPopUp.vue"
import ImportPopup from "@/components/SalesCRM/ImportPopup.vue"
import AddNewDealPopup from "@/components/SalesCRM/AddNewDealPopup.vue"
import { mdiStar, mdiMenuDown,mdiContentSave,mdiDeleteOutline,mdiTable ,mdiPoll  } from "@mdi/js";
import KanbanView from "@/components/SalesCRM/Sales/KanbanView.vue"
import {dealStore} from "@/stores/SalesCRM/deals"

const getDeal=dealStore()

const selectBranchOptions = [
  { id: 1, label: "All deals" },
  { id: 2, label: "Marketing" },
  { id: 3, label: "Sales" },
  { id: 4, label: "IT" },
  { id: 5, label: "Tech Support" },
  { id: 6, label: "Human Rerouces" },
];
const dealList =ref(false)
const listOptionSow =ref(false)
const exportList =ref(false)
const importList =ref(false)
const newDealAdd =ref(false)
const tableView=ref(true)
const tableData =ref([
  {
    dealName:"My deal",
    companyName:"Bymond",
    summary:"Some text here",
    amount:"1000",
    currency:{
      id:1,
      level:"USD",
      symbol:"$"
    },
    status:"red",
    pipeline:"somthing",
    stage:"Qualified",
    source:"Website",
    owner:"Bhavya",
    nextTask:"",
    nextTaskDue:"",
    lossresion:"",
    lossresionNote:"",
    weightedForecast:"25,150.00"
    
  },
  {
    dealName:"App Develop",
    companyName:"Bymond",
    summary:"Some text here",
    amount:"1000",
    currency:{
      id:1,
      level:"USD",
      symbol:"$"
    },
    status:"green",
    pipeline:"somthing",
    stage:"Request for info",
    source:"Website",
    owner:"Bhavya",
    nextTask:"",
    nextTaskDue:"",
    lossresion:"",
    lossresionNote:"",
    weightedForecast:"25,150.00"
    
  },
  {
    dealName:"Graphics Manager",
    companyName:"Bymond",
    summary:"Some text here",
    amount:"1000",
    currency:{
      id:1,
      level:"USD",
      symbol:"$"
    },
    status:"red",
    pipeline:"someting",
    stage:"Presentation",
    source:"Website",
    owner:"Bhavya",
    nextTask:"",
    nextTaskDue:"",
    lossresion:"",
    lossresionNote:"",
    weightedForecast:"25,150.00"
    
  },
  {
    dealName:"Potik",
    companyName:"Bymond",
    summary:"Some text here",
    amount:"1000",
    currency:{
      id:1,
      level:"USD",
      symbol:"$"
    },
    status:"yellow",
    pipeline:"somthing",
    stage:"Won",
    source:"Website",
    owner:"Bhavya",
    nextTask:"",
    nextTaskDue:"",
    lossresion:"",
    lossresionNote:"",
    weightedForecast:"25,150.00"
    
  },
  {
    dealName:"New Website Create",
    companyName:"Bymond",
    summary:"Some text here",
    amount:"1000",
    currency:{
      id:1,
      level:"USD",
      symbol:"$"
    },
    status:"green",
    pipeline:"somthing",
    stage:"Lost",
    source:"Website",
    owner:"Bhavya",
    nextTask:"",
    nextTaskDue:"",
    lossresion:"",
    lossresionNote:"",
    weightedForecast:"25,150.00"
    
  },
  {
    dealName:"New Website Create",
    companyName:"Bymond",
    summary:"Some text here",
    amount:"1000",
    currency:{
      id:1,
      level:"USD",
      symbol:"$"
    },
    status:"green",
    pipeline:"somthing",
    stage:"Negotiation",
    source:"Website",
    owner:"Bhavya",
    nextTask:"",
    nextTaskDue:"",
    lossresion:"",
    lossresionNote:"",
    weightedForecast:"25,150.00"
    
  }
])


const ShowNewDealList=()=>{
  dealList.value = !dealList.value
}
const showHideListOptions=()=>{
  listOptionSow.value = !listOptionSow.value
}
const exportShow=()=>{
  exportList.value= !exportList.value
}
const importShow=()=>{
  importList.value= !importList.value
}

const closePopup =()=>{
  newDealAdd.value=false
}

const getDealItems =(item)=>{
  newDealAdd.value=false
  // console.log(item)

  tableData.value.unshift(item)
}

const closeKanban = (data)=>{

  tableView.value=!data
}
</script>


<style scoped>
.all_dealpop_UP{
  width: 425px;
  margin-top: 0.5rem;
  z-index: 1;
  box-shadow: 1px 2px 14px 0px rgba(135,135,135,0.67);
-webkit-box-shadow: 1px 2px 14px 0px rgba(135,135,135,0.67);
-moz-box-shadow: 1px 2px 14px 0px rgba(135,135,135,0.67);
}

.listoption{
  width: 280px;
  margin-top: 0.5rem;
  z-index: 1;
  box-shadow: 1px 2px 14px 0px rgba(135,135,135,0.67);
-webkit-box-shadow: 1px 2px 14px 0px rgba(135,135,135,0.67);
-moz-box-shadow: 1px 2px 14px 0px rgba(135,135,135,0.67);
}

.export,.import{
  width: 160px;
  margin-top: 0.5rem;
  z-index: 2;
  box-shadow: 1px 2px 14px 0px rgba(135,135,135,0.67);
-webkit-box-shadow: 1px 2px 14px 0px rgba(135,135,135,0.67);
-moz-box-shadow: 1px 2px 14px 0px rgba(135,135,135,0.67); 
}

.import{
  width: 200px;
}

.add_new_deal_popup{
  position: absolute;
  top: 0;
  left: 0;
}
</style>
