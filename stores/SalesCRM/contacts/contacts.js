import { defineStore } from "pinia";


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
allContacts:tableData,
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

 addNewItem(item){
  this.allContacts.unshift(item)
 }
}

const getters = {
 
}

export const contactStore = defineStore("contact", {
    state,
    getters,
    actions,
  });
  