<template>
    <div class="table_Holder ">
      
      <!-- table section  -->
      <table class="bg-gray-100 dark:bg-slate-900">
        <thead>
          <tr class="bg-gray-200 dark:bg-slate-700 ">
        
            <th v-for="(head,idx) in heading" :key="idx" class="">
              <div class="text-center flex  font-light items-center ">
           
                <FormCheckRadioGroup
                  name="sample-checkbox-two"
                  :options="{ i: '' }"
                  component-class="check-radio-success"
                  class=""
                  v-if="idx==0"
                />
                <div class="flex">
                    <div class="font-medium">
                {{ head.name }}
            </div>
                <BaseIcon
                  :path="mdiUnfoldMoreHorizontal "
                  class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                  size="16"
                  h="16"
                  w="16"
                /></div>
              </div>
            </th>
            <th>
                <BaseIcon
                  :path="mdiPlus"
                  class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100"
                  size="16"
                  h="16"
                  w="16"
                />
      
            </th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in data" :key="idx" class="tableRow ">
          
            <td v-for="(value ,index) in item.values" :key="index" class="">
                <div class="flex">
                <FormCheckRadioGroup
                name="sample-checkbox-two"
                :options="{ i: '' }"
                component-class="check-radio-success"
                v-if="index==0"
                class="ml-1  "
              />

            {{ value.value }}
        </div>
            </td>
            <td class="">
                <div class="w-20 ">
                    <div class="action_Section">
                <BaseIcon
                  :path="mdiPencil  "
                  class="cursor-pointer ml-1 text-gray-600 dark:text-gray-100 "
                  size="20"
                  h="1"
                  w="16"
                  @click="update(item, idx)"
                />
                <PremButtonMenu
          :index="idx"
          :options="dotItems"
          color="info"
          outline
          right
          small
          :icon="mdiDotsVertical"
          class=" ml-3  my-0 py-0"
        />
    </div>
    </div>
            </td>
           
         
        
       
  
          </tr>
        </tbody>
      </table>
      <!-- end table  -->
  
      <!-- pagination  -->
      <!-- <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <BaseLevel>
          <BaseButtons>
            <BaseButton
              v-for="page in pagesList"
              :key="page"
              :active="page === currentPage"
              :label="page + 1"
              :color="page === currentPage ? 'lightDark' : 'whiteDark'"
              small
              @click="currentPage = page"
            />
          </BaseButtons>
          <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
        </BaseLevel>
      </div> -->
      <!-- end pagination -->
    </div>
    <AddTaskForm v-if="addTask" @on-action="closePopup('task')" :data="updateData" :new="false" :index="updateIndex"/>
    <AddEventForm v-if="addEvent" @on-action="closePopup('event')" :data="updateData" :new="false" :index="updateIndex"/>
    <AddCallsForm v-if="addCall" @on-action="closePopup('call')" :data="updateData" :new="false" :index="updateIndex"/>
    <AddProductForm v-if="addProduct" @on-action="closePopup('product')" :data="updateData" :new="false" :index="updateIndex"/>
    <AddCompanyForm v-if="addCompany" @on-action="closePopup('company')" :data="updateData" :new="false" :index="updateIndex"/>
    <AddContactsForm v-if="addContact" @on-action="closePopup('contact')" :data="updateData" :new="false" :index="updateIndex"/>
  </template>
  
  <script setup>
  // imports
  import {
    mdiEye,
    mdiCardAccountDetailsOutline,
    mdiSquareEditOutline,
    mdiUnfoldMoreHorizontal ,
    mdiPlus ,
    mdiDotsVertical,
    mdiTagOutline ,
    mdiPencil 
  
  } from "@mdi/js";
  import BaseIcon from "@/components/Display/BaseIcon.vue";
  import BaseButtons from "@/components/Buttons/BaseButtons.vue";
  import BaseButton from "@/components/Buttons/BaseButton.vue";
  import { defineProps, computed } from "vue";
  import BaseLevel from "@/components/Buttons/BaseLevel.vue";
  import PremFormField from "@/components/Forms/FormField.vue";
  import PremFormControl from "@/components/Forms/FormControl.vue";
  import { useRouter } from "vue-router";
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
import AddTaskForm from "@/components/SalesCRM/Sales/activities/AddTaskForm.vue"
import AddEventForm from "@/components/SalesCRM/Sales/activities/AddEventForm.vue"
import AddCallsForm from "@/components/SalesCRM/Sales/activities/AddCallsForm.vue"
import AddProductForm from "@/components/SalesCRM/Sales/products/AddProductForm.vue"
import AddCompanyForm from "@/components/SalesCRM/Sales/companies/AddCompanyForm.vue"
import AddContactsForm from "@/components/SalesCRM/Sales/contacts/AddContactsForm.vue"
  import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";
  
  import {
    mdiStar,
    mdiMenuDown,
    mdiContentSave,
    mdiDeleteOutline,
    mdiTable,
    mdiChevronDown,
    mdiCheckCircleOutline,
    mdiTableArrowRight
  } from "@mdi/js";
  const props = defineProps({
    data: {
      type: Array,
      required: true,
      default: [],
    },
    heading:{
        type: Array,
      required: true,
      default: [],
    },
    type:{
      type: String,
      required : true,
      default: ""
    },
    dotItems:{
      type: Array,
      required: true,
      default: [
  [
    {
      id: 1,
      icon: mdiCheckCircleOutline ,
      label: "Mark as completed",
    },
    {
      id: 2,
      icon: mdiDeleteOutline,
      label: "Delete",
    },
  ],
],  
    }
  });
  const router = useRouter();
  const items = props.data;
  const updateData = ref(null);
  const updateIndex = ref(null);
  const addTask = ref(false)
const addEvent = ref(false)
const addCall = ref(false)
const addProduct = ref(false)
const addCompany = ref(false)
const addContact = ref(false)
const type = props.type;
console.log(type);
  // status list
  
  const listBoxOptions = [
    "Pending",
    "Followup",
    "Recommendation Given",
    "Documents Pending",
    "Documents Submitted",
    "Offer Letter Received",
    "Visa Process Started",
  ];

  const isModalActive = ref(false);
  
  const isModalDangerActive = ref(false);
  
  const perPage = ref(5);
  
  const currentPage = ref(0);
  
  const checkedRows = ref([]);
  
  const itemsPaginated = computed(() =>
    items.value.slice(
      perPage.value * currentPage.value,
      perPage.value * (currentPage.value + 1)
    )
  );
  
  const numPages = computed(() => Math.ceil(items.length / perPage.value));
  
  const currentPageHuman = computed(() => currentPage.value + 1);
  
  const pagesList = computed(() => {
    const pagesList = [];
  
    for (let i = 0; i < numPages.value; i++) {
      pagesList.push(i);
    }
  
    return pagesList;
  });
  
  // goto action page
  
  const goToAction = (id) => {
    router.push("/salesCRM/actions/" + id);
  };

function closePopup(type) {
  if(type == "task") {
    addTask.value = false;
  }
  else if(type == "event") {
    addEvent.value = false;
  }
  else if(type == "call") {
    addCall.value = false;
  }
  else if(type == "product") {
    addProduct.value = false;
  }
  else if(type == "company") {
    addCompany.value = false;
  }
  else if(type == "contact") {
    addContact.value = false;
  }
}
  const update = async (task, index) => {
    const format = (fields) => {
      let data = {}
  for(const field in fields) {
    let entry = task.values[field]
    data[fields[field]] = entry["value"]
  }
  updateData.value = data;
  console.log("data : ", data);
  updateIndex.value = index;
    }
    let fields = {};
    if(type == "task") {
      fields = {0 : "name", 1 : "due_date", 2 : "status", 3 : "priority", 4 : "related_to", 5 : "task_owner", 6 : "description"}
      format(fields)
      addTask.value = true;
    }
    else if(type == "event") {
      fields = {0 : "title", 1 : "from_date", 2 : "from_time", 3 : "to_date", 4 : "to_time", 5 : "location", 6 : "related_to", 7 : "participants", 8 : "description"}
      format(fields)
      addEvent.value = true;
    }
    else if(type == "call") {
    fields = {0 : "to_from", 1 : "start_date", 2 : "start_time", 3 : "type", 4 : "related_to", 5 : "agenda"}
    format(fields)
    addCall.value = true;
  }
  else if(type == "product") {
    fields = {0 : "name", 1 : "code", 2 : "category", 3 : "unit_price", 4 : "description"}
    format(fields)
    addProduct.value = true;
  }
  else if(type == "company") {
    fields = {0 : "name", 1 : "phone", 2 : "website", 3 : "description", 4 : "street", 5 : "city", 6 : "state", 7 : "country", 8 : "zip"}
    format(fields)
    addCompany.value = true;
  }
  else if(type == "contact") {
    fields = {0 : "fname", 1 : "lname", 2 : "title", 3 : "email", 4 : "company_name", 5 : "phone", 6 : "description", 7 : "street", 8 : "city", 9 : "state", 10 : "country", 11 : "zip"}
    format(fields)
    addContact.value = true;
  }
}

  const dotsMenu = [
  [
    {
      id: 1,
      icon: mdiCheckCircleOutline ,
      label: "Mark as completed",
    },
    {
      id: 2,
      icon: mdiTableArrowRight,
      label: "Delete",
    },
  ],
];
  </script>
  
  <style scoped>
  .table_Holder {
    width: 100% !important;
    z-index: 0 !important;
  }
  
  table {
    /* table-layout: fixed; */
    width: 100%;
    overflow: auto !important;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    height: 500px;
   

  }
  
  table thead {
    /* width:100%; */
    /* display:table-header-group !important; */
    /* display: table-header-group !important;
    width: 100%; */
  }
  
  th {
    /* white-space: nowrap; */
    padding: 0.5rem 1rem !important;
  }
  td {
    width: 100% !important;

  }
  tr {
    page-break-inside: avoid;
  }
.action_Section{
opacity: 0;
}
  .tableRow:hover .action_Section{
opacity: 1;
    
  } 

  td:hover,tr:hover{
    /* background: none !important; */
    /* padding:0 !important;
    margin: 0 !important; */
    
  }


  </style>
  