import { defineStore } from "pinia";
import { DataStore } from "aws-amplify"
import { Companies } from "../../../models/index"

const tableData = [
    {
      id:1,
      values:[ 
        
        {
          id:1,
          value:"Bymond Private Limited",
          icon:""
        },
        {
          id:2,
          value:"8745812457",
          icon:""
        },
        {
          id:3,
          value:"https://bymond.com",
          icon:""
        },
        {
          id:4,
          value:"Injamamul Hoque",
          icon:""
        },
       
     
       ]
    },
    {
      id:2,
      values:[ 
        {
          id:1,
          value:"Golden Egal Private Limited",
          icon:""
        },
        {
          id:2,
          value:"57452312457",
          icon:""
        },
        {
          id:3,
          value:"https://pictogrammers.com",
          icon:""
        },
        {
          id:4,
          value:"Injamamul Hoque",
          icon:""
        },
     
       ]
    },
    {
        id:3,
        values:[ 
          
          {
            id:1,
            value:"Pothik Private Limited",
            icon:""
          },
          {
            id:2,
            value:"57452312457",
            icon:""
          },
          {
            id:3,
            value:"https://bigbluebutton.host",
            icon:""
          },
          {
            id:4,
            value:"Injamamul Hoque",
            icon:""
          },
       
         ]
      },
  ]



const state = () => ({
allCompanies:[],
formShow:false

})

const actions = {
    // add new deal 
    showForm(){
      this.formShow=true
    
        },
     hideForm(){
      this.formShow=false
     },
    
     async addNewCompany(company){
      try {
        await DataStore.save(new Companies(company));
        alert("Saved Successfully");
    } catch (error) {
        console.log("error : ", error);
    }
     },

     async getCompanies() {
      try {
        const data = await DataStore.query(Companies);
        this.allCompanies = data
    } catch (error) {
        console.log("error : ", error);
    }
    },
    async deleteCompany(company) {
      try {
        await DataStore.delete(company);
        alert("Deleted Succefully");
    } catch (error) {
        console.log("error : ", error);
    }
    },
    async updateCompany(original, update){
      try {
        await DataStore.save(Companies.copyOf(original, updated => {
          updated.name = update.name;
          updated.phone = update.phone;
          updated.website = update.website;
          updated.description = update.description;
          updated.street = update.street;
          updated.city = update.city;
          updated.state = update.state;
          updated.country = update.country;
          updated.zip = update.zip;
        }));
        alert("Updated Successfully");
    } catch (error) {
        console.log("error : ", error);
    }
    },
}

const getters = {
 
}

export const companiesStore = defineStore("companies", {
    state,
    getters,
    actions,
  });
  