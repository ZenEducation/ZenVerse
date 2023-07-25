import { defineStore } from "pinia";


const tableData = [
    {
      id:1,
      values:[ 
        
        {
          id:1,
          value:"Call with Kiron",
          icon:""
        },
        {
          id:2,
          value:"Normal",
          icon:""
        },
        {
          id:3,
          value:"Jul 25 , 2023, 6:00 PM",
          icon:""
        },
        {
          id:4,
          value:"30 min",
          icon:""
        },
        {
          id:5,
          value:"New website",
          icon:""
        },
        {
          id:6,
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
            value:"Normal",
            icon:""
          },
          {
            id:3,
            value:"Jul 25 , 2023, 8:00 PM",
            icon:""
          },
          {
            id:4,
            value:"30 min",
            icon:""
          },
          {
            id:5,
            value:"New website",
            icon:""
          },
          {
            id:6,
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
                value:"Developer call",
                icon:""
              },
              {
                id:2,
                value:"Normal",
                icon:""
              },
              {
                id:3,
                value:"Jul 25 , 2023, 8:00 PM",
                icon:""
              },
              {
                id:4,
                value:"45 min",
                icon:""
              },
              {
                id:5,
                value:"New website",
                icon:""
              },
              {
                id:6,
                value:"Injamamul Hoque",
                icon:""
              },
       
         ]
      },
  ]



const state = () => ({
allCalls:tableData,
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
      this.allCalls.unshift(item)
     }
}

const getters = {
 
}

export const callStore = defineStore("calls", {
    state,
    getters,
    actions,
  });
  