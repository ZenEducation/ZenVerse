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
      const data = this.allTasks;
      const fields = {"name" : 1, "due_date" : 2, "status" : 3, "priority" : 4, "related_to" : 5, "task_owner" : 6, "description" : 7}
      let tasks = [];
            for(const deal in data) {
              let task = {id : Number(deal)+1, values : []}
              let entry = data[deal]
              for(const value in fields) {
                let field = {}
                field["id"] = fields[value]
                field["value"] = entry[value]
                field["icon"] = ""
                task.values.push(field)
              }
              tasks.push(task)
            }
            console.log(tasks);
            this.tableData = tasks
    },
     async addNewTask(task){
      try {
        await DataStore.save(new Tasks(task));
        alert("Saved Successfully");
        await this.getTasks()
    } catch (error) {
        console.log("error : ", error);
    }
     },

     async getTasks() {
      try {
        const data = await DataStore.query(Tasks);
        this.allTasks = data
        this.gettableData()
    } catch (error) {
        console.log("error : ", error);
    }
    },
    async deleteTask(task) {
      try {
        await DataStore.delete(task);
        alert("Deleted Succefully");
        await this.getTasks()
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
        await this.getTasks()
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
  