import { defineStore } from "pinia";
import { DataStore } from "aws-amplify"
import { Tasks } from "../../../models/index"

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
allTasks:[],
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
    
     async addNewTask(task){
      try {
        await DataStore.save(new Tasks(task));
        alert("Saved Successfully");
    } catch (error) {
        console.log("error : ", error);
    }
     },

     async getTasks() {
      try {
        const data = await DataStore.query(Tasks);
        this.allTasks = data
    } catch (error) {
        console.log("error : ", error);
    }
    },
    async deleteTask(task) {
      try {
        await DataStore.delete(task);
        alert("Deleted Succefully");
    } catch (error) {
        console.log("error : ", error);
    }
    },
    async updateTask(original, update){
      try {
        await DataStore.save(Tasks.copyOf(original, updated => {
          updated.name = update.name;
          updated.due_date = update.due_date;
          updated.status = update.status;
          updated.priority = update.priority;
          updated.related_to = update.related_to;
          updated.task_owner = update.task_owner;
          updated.description = update.description;
        }));
        alert("Updated Successfully");
    } catch (error) {
        console.log("error : ", error);
    }
    },
}

const getters = {
 
}

export const taskStore = defineStore("tasks", {
    state,
    getters,
    actions,
  });
  