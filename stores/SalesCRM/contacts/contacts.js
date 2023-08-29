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
tableData:[],
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
 gettableData() {
  const data = this.allContacts;
  const fields = {"fname" : 1, "lname" : 2, "title" : 3, "email" : 4, "company_name" : 5, "phone" : 6, "description" : 7, "street" : 8, "city" : 9, "state" : 10, "country" : 11, "zip" : 12}
  let contacts = [];
        for(const deal in data) {
          let contact = {id : Number(deal)+1, values : []}
          let entry = data[deal]
          for(const value in fields) {
            let field = {}
            field["id"] = fields[value]
            field["value"] = entry[value]
            field["icon"] = ""
            contact.values.push(field)
          }
          contacts.push(contact)
        }
        console.log(contacts);
        this.tableData = contacts
},
 async addNewContact(contact){
  try {
    await DataStore.save(new Contact(contact));
    alert("Saved Successfully");
    await this.getContacts()
} catch (error) {
    console.log("error : ", error);
}
 },

 async getContacts() {
  try {
    const data = await DataStore.query(Contact);
    this.allContacts = data
    this.gettableData()
} catch (error) {
    console.log("error : ", error);
}
},
async deleteContact(contact) {
  try {
    await DataStore.delete(contact);
    alert("Deleted Succefully");
    await this.getContacts()
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
    await this.getContacts()
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
  