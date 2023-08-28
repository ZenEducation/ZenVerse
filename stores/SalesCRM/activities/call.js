import { defineStore } from "pinia";
import { DataStore } from "aws-amplify"
import { Calls } from "../../../models/index"

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
allCalls:[],
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
    
     async addNewCall(call){
      try {
        await DataStore.save(new Calls(call));
        alert("Saved Successfully");
    } catch (error) {
        console.log("error : ", error);
    }
     },

     async getCalls() {
      try {
        const data = await DataStore.query(Calls);
        this.allCalls = data
    } catch (error) {
        console.log("error : ", error);
    }
    },
    async deleteCall(call) {
      try {
        await DataStore.delete(call);
        alert("Deleted Succefully");
    } catch (error) {
        console.log("error : ", error);
    }
    },
    async updateCall(original, update){
      try {
        await DataStore.save(Calls.copyOf(original, updated => {
          updated.to_from = update.to_from;
          updated.start_date = update.start_date;
          updated.start_time = update.start_time;
          updated.type = update.type;
          updated.related_to = update.related_to;
          updated.call_agenda = update.call_agenda;
        }));
        alert("Updated Successfully");
    } catch (error) {
        console.log("error : ", error);
    }
    },
}

const getters = {
 
}

export const callStore = defineStore("calls", {
    state,
    getters,
    actions,
  });
  