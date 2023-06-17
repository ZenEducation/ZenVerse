<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import FormFilePicker from "@/components/Forms/FormFilePicker.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxWidget from "@/components/Cards/CardBoxWidget.vue";
import { mdiArrowRight,mdiArrowRightTopBold,
  mdiBallot,
mdiCloseBoxOutline,
} from "@mdi/js";

</script>

<template>

<div class="grid mb-2 grid-cols-3 :grid-rows-3 ">
  <CardBoxWidget class="mb-1 overflow-auto rounded-lg shadow"
    color="text-orange-500 dark:text-white"
    :icon="mdiArrowRightTopBold"
    :number="tableLength"
    label="Users">
    <BaseButton label="hello" color="bg-blue-700"></BaseButton>
  </CardBoxWidget>
</div>
<div class="grid mb-2 grid-cols-3 :grid-rows-3">                      
     <button @click.prevent="scrollDown()" class="bg-red-600 rounded p-3 mt-0 mb-2 font-normal text-base text-white transition-colors duration-150 bg-orange-750  focus:shadow-outline hover:bg-orange-800">Add New</button>  
</div>
<NuxtLayout>
  <!--Table-->
<SectionMain>
    <div>
    <div  class=" overflow-auto rounded-lg shadow ">
        <table class="table table-striped w-auto items-stretch">
            <thead>
                <tr>
                    <th v-for="(column,index) in column" :key="index">
                                  {{ column }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in productObj" :key="data.id">
                    <td data-cell="sr No">{{ data.id }}</td>
                    <td data-cell="name">{{data.name}}</td>
                    <td data-cell="username">{{data.username}}</td>
                    
                    <td data-cell="action">
                        <div class="flex space-x-1">
                            <button class="rounded p-2 mt-0 font-normal text-base text-white transition-colors duration-150 bg-cyan-600  focus:shadow-outline hover:bg-cyan-800 ">Change Password</button>
                            <button class="rounded p-2 mt-0 font-normal text-base text-white transition-colors duration-150 bg-cyan-600  focus:shadow-outline hover:bg-cyan-800 ">Settings</button>
                            <button class="rounded p-2 mt-0 font-normal text-base text-white transition-colors duration-150 bg-cyan-600  focus:shadow-outline hover:bg-cyan-800 "  @click="getData(data.id),scrollDown()">Edit Details</button>
                            <button class="rounded p-2 mt-0 font-normal text-base text-white transition-colors duration-150 bg-green-600  focus:shadow-outline hover:bg-green-800 ">Send Mail</button>
                           
                        </div>
                    </td>
                    <td data-cell="links">
                        <div class="flex space-x-1">
                            <button class="rounded p-2 mt-0 font-normal text-base text-white transition-colors duration-150 bg-cyan-600  focus:shadow-outline hover:bg-cyan-800 ">Login Link</button>
                            <button class="rounded p-2 mt-0 font-normal text-base text-white transition-colors duration-150 bg-cyan-600  focus:shadow-outline hover:bg-cyan-800 ">Abroad SubCRM Link</button>
                        </div>
                    </td>
                    <td data-cell="status">
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" checked>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                        </label>                  
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</SectionMain>

<!--Form-->
<SectionMain>
        <form>
          <div class="flex justify-center grid grid-rows-1 gap-6 mb-0 :grid-rows-3">
          
              <CardBox
              :icon="mdiBallot"
              class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
              is-form
              @submit.prevent="submit"
            >
              <div class="text-center">
                  <b>
                      <CardBoxComponentTitle horizontal
                      title="Add New User"
                      class="text-red-600"
                      >
                      <BaseButton :icon="mdiCloseBoxOutline" @click.prevent="scrollUp()" class="mx-2 bg-blue dark:bg-white">
                      </BaseButton>
                      </CardBoxComponentTitle>
                  </b>
              </div>
              <BaseDivider />
              <PremFormField label="Name:">
                <PremFormControl
                  placeholder="Type Here..." type="text" v-model="name"
                />
              </PremFormField>
              <PremFormField label="Username:">
                <PremFormControl
                  placeholder="Type Here..." type="text" v-model="username"
                />
              </PremFormField>
              <PremFormField
                label="Password"
                horizontal
              >
                <PremFormControl
                  type="password"
                  name="password" v-model="password"
                  placeholder="Type Here..."
                  :tip-right="passShowHideClicked ? null : 'Click to show/hide'"
                  @right-icon-click="passShowHideClicked = true"
                />
              </PremFormField>
              <PremFormField label="Hide Task Settings:" horizontal>
                <PremFormControl
                  :options="selectFieldOptions"
                />
              </PremFormField>
              <PremFormField label="Email Id (Optional):">
                <PremFormControl
                  placeholder="Type Here..." type="text" v-model="email"
                />
              </PremFormField>
              <PremFormField label="Phone Number (Optional):">
                <PremFormControl
                  placeholder="Type Here..." type="text" v-model="phone"
                />
              </PremFormField>
              <PremFormField label="Logo (Optional):">
                <FormFilePicker v-model="file" label="Upload" />
              </PremFormField>
              <PremFormField label="School Code (Optional):">
                <PremFormControl
                  placeholder="Type Here..." type="text" v-model="schoolcode"
                />
              </PremFormField>
              <BaseDivider />
              <template #footer>
                <PremFormField class="">
                  <BaseButton  @click.prevent="saveData(haveID), scrollUp()"  class="align-center" label="Submit" type="submit" color="info" />
                </PremFormField>
              </template>
          </CardBox>
          </div>
        </form>
</SectionMain> 
</NuxtLayout>
</template>


<script>

const selectFieldOptions = [
  { sid: 1, label: "All SUBCCRM status Active configured (Recommended for internal Employees)" },
  { sid: 2, label: "All SUBCCRM status Hide (Recommended for agents)" },
  { sid: 3, label: "All SUBCCRM status changes blocked (Recommended for agents)" },
];

export default {
    component:{
            selectFieldOptions
        },
    data(){ 
        return {
            showForm: true,
            column: ["Sr No.","Name","Username","Action","Links","Status (Deactive/Active)"],
            name: '',
            username: '',
            password: '',
            tasksetting: '',
            email: '',
            phone: '',
            logo: null,
            schoolcode: '',
            haveID: null,
            productObj:[
              // Dummy data
                {
                id: 1,
                name: 'Ankit Tiwari',
                username: 'Tiwari',
                password: '123456',
                tasksetting: 0,
                email: 'tiwari@gmail.com',
                phone: '9876515658',
                logo: null,
                schoolcode: '555',
            },
            {
                id: 2,
                name: 'Ramesh',
                username: 'Ram',
                password: '21466',
                tasksetting: 0,
                email: 'ram@yahoo.com',
                phone: '9567895132',
                logo: null,
                schoolcode: '111',
            },
            
        ]
        }
    },
    computed: {
    tableLength: function() {
      return this.productObj.length;
    }
  },
    methods:{
      scrollUp(){
        window.scrollTo(0,90)
      },
      scrollDown(){
        window.scrollTo(0,555)
      },
        
        getData(id){
            this.haveID = id
           var dataObj = this.productObj.filter((data) => (data.id == id))
            //assign to input
            this.name = dataObj[0].name
            this.username = dataObj[0].username
            this.password = dataObj[0].password
            this.tasksetting = dataObj[0].selectFieldOptions
            this.email = dataObj[0].email
            this.phone = dataObj[0].phone
            this.logo = dataObj[0].file
            this.schoolcode = dataObj[0].schoolcode


        },
        saveData(haveID){
            if(haveID){
                //Update data
                var dataObj = this.productObj.filter((data) => (data.id == haveID))
                dataObj[0].name = this.name
                dataObj[0].username = this.username
                dataObj[0].password = this.password
                dataObj[0].selectFieldOptions = this.tasksetting
                dataObj[0].email = this.email
                dataObj[0].phone = this.phone
                dataObj[0].file = this.logo
                dataObj[0].schoolcode = this.schoolcode
                alert('Updated User Successfully')
            }
            else{
                //Add data
            const id = this.productObj.length + 1
            const data = {
                id: id,
                name: this.name,
                username: this.username,
                password: this.password,
                tasksetting: this.selectFieldOptions,
                email: this.email,
                phone: this.phone,
                logo: this.file,
                schoolcode: this.schoolcode
            }
            this.productObj.push(data);
            alert('Successfully Added New User');
        }

        }

    }
}
</script>

<style>
table {
  width: 100%;
}

th,
td {
  padding: 1rem;
}

@media (max-width:1140px) {
  th {
    display: none;
  }
  tr {
    margin-bottom: 15px;
  }
  td {
    text-align: right;
    padding-left: 50%;
    text-align: right;
    position: relative;
    display: grid;
    
  }

  td:first-child {
    padding-top: 2rem;
  }

  td:last-child {
    padding-bottom: 2rem;
  }

  td::before {
    content: attr(data-cell) " : ";
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-size: 16px;
    font-weight: 700;
    text-transform: capitalize;
  }
}
</style>