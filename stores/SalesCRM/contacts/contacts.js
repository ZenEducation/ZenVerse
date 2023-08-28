import { defineStore } from "pinia";
import { DataStore } from "aws-amplify"
import { Contact } from "../../../models/index"

const tableData = [
    {
      id:1,
      values:[ 
        
        {
          id:1,
          value:"Ted Watson",
          icon:""
        },
        {
          id:2,
          value:"Pothik Private limited",
          icon:""
        },
        {
          id:3,
          value:"kiron@gmail.com",
          icon:""
        },
        {
          id:4,
          value:"5874874589",
          icon:""
        },
        {
          id:5,
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
            value:"Pothik",
            icon:""
          },
          {
            id:2,
            value:"Pothik Private limited",
            icon:""
          },
          {
            id:3,
            value:"dj@gmail.com",
            icon:""
          },
          {
            id:4,
            value:"5874874589",
            icon:""
          },
          {
            id:5,
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
                value:"Mamon",
                icon:""
              },
              {
                id:2,
                value:"Punjab Private limited",
                icon:""
              },
              {
                id:3,
                value:"pnb@gmail.com",
                icon:""
              },
              {
                id:4,
                value:"5874874589",
                icon:""
              },
              {
                id:5,
                value:"Sumon",
                icon:""
              },
       
         ]
      },
  ]



const state = () => ({
allContacts:[],
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

 async addNewContact(contact){
  try {
    await DataStore.save(new Contact(contact));
    alert("Saved Successfully");
} catch (error) {
    console.log("error : ", error);
}
 },

 async getContacts() {
  try {
    const data = await DataStore.query(Contact);
    this.allContacts = data
} catch (error) {
    console.log("error : ", error);
}
},
async deleteContact(contact) {
  try {
    await DataStore.delete(contact);
    alert("Deleted Succefully");
} catch (error) {
    console.log("error : ", error);
}
},
async updateContact(original, update){
  try {
    await DataStore.save(Contact.copyOf(original, updated => {
      updated.fname = update.fname;
      updated.lname = update.lname;
      updated.title = update.title;
      updated.email = update.email;
      updated.company_name = update.company_name;
      updated.phone = update.phone;
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

export const contactStore = defineStore("contact", {
    state,
    getters,
    actions,
  });
  