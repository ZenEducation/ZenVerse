import { defineStore } from "pinia";


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
allCompani:tableData,
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
      this.allCompani.unshift(item)
     }
}

const getters = {
 
}

export const companiesStore = defineStore("companies", {
    state,
    getters,
    actions,
  });
  