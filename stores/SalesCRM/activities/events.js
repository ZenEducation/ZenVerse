import { defineStore } from "pinia";


const tableData = [
    {
      id:1,
      values:[ 
        
        {
          id:1,
          value:"New Event",
          icon:""
        },
        {
          id:2,
          value:"Jun 28, 2023 02:00 PM",
          icon:""
        },
        {
          id:3,
          value:"Jul 30, 2023 05:30 PM",
          icon:""
        },
        {
          id:4,
          value:"Kohima",
          icon:""
        },
        {
          id:5,
          value:"Kiron",
          icon:""
        },
      
     
       ]
    },
    {
      id:2,
      values:[ 
        {
            id:1,
            value:"School ",
            icon:""
          },
          {
            id:2,
            value:"Jun 28, 2023 02:00 PM",
            icon:""
          },
          {
            id:3,
            value:"Jul 30, 2023 05:30 PM",
            icon:""
          },
          {
            id:4,
            value:"Pothik",
            icon:""
          },
          {
            id:5,
            value:"Kiron",
            icon:""
          },
       
     
       ]
    },
    {
        id:3,
        values:[ 
            {
                id:1,
                value:"College Event ",
                icon:""
              },
              {
                id:2,
                value:"Jun 28, 2023 02:00 PM",
                icon:""
              },
              {
                id:3,
                value:"Jul 30, 2023 05:30 PM",
                icon:""
              },
              {
                id:4,
                value:"Manos",
                icon:""
              },
              {
                id:5,
                value:"Kiron",
                icon:""
              },
         
       
         ]
      },
  ]



const state = () => ({
allEvents:tableData,
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
      this.allEvents.unshift(item)
     }
}

const getters = {
 
}

export const eventStore = defineStore("event", {
    state,
    getters,
    actions,
  });
  