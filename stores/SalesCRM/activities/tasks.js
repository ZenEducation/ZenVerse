import { defineStore } from "pinia";


const tableData = [
    {
      id:1,
      values:[ 
        
        {
          id:1,
          value:"New Tasks",
          icon:""
        },
        {
          id:2,
          value:"Not Started",
          icon:""
        },
        {
          id:3,
          value:"Jul 25 , 2023",
          icon:""
        },
        {
          id:4,
          value:"Normal",
          icon:""
        },
        {
          id:5,
          value:"Zylker Yearly Subscriotion",
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
          value:"Website create",
          icon:""
        },
        {
          id:2,
          value:"Started",
          icon:""
        },
        {
          id:3,
          value:"Jul 30 , 2023",
          icon:""
        },
        {
          id:4,
          value:"Normal",
          icon:""
        },
        {
          id:5,
          value:"some text",
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
            value:"App developent",
            icon:""
          },
          {
            id:2,
            value:"Completed",
            icon:""
          },
          {
            id:3,
            value:"May 5, 2023",
            icon:""
          },
          {
            id:4,
            value:"Normal",
            icon:""
          },
          {
            id:5,
            value:"some text",
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
allTasks:tableData,
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
      this.allTasks.unshift(item)
     }
}

const getters = {
 
}

export const taskStore = defineStore("tasks", {
    state,
    getters,
    actions,
  });
  