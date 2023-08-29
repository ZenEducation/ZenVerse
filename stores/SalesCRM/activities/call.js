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
      const data = this.allCalls;
  const fields = {"to_from" : 1, "start_date" : 2, "start_time" : 3, "type" : 4, "related_to" : 5, "agenda" : 6}
  let calls = [];
        for(const deal in data) {
          let call = {id : Number(deal)+1, values : []}
          let entry = data[deal]
          for(const value in fields) {
            let field = {}
            field["id"] = fields[value]
            field["value"] = entry[value]
            field["icon"] = ""
            call.values.push(field)
          }
          calls.push(call)
        }
        console.log(calls);
        this.tableData = calls
    },
     async addNewCall(call){
      try {
        await DataStore.save(new Calls(call));
        alert("Saved Successfully");
        await this.getCalls()
    } catch (error) {
        console.log("error : ", error);
    }
     },

     async getCalls() {
      try {
        const data = await DataStore.query(Calls);
        this.allCalls = data
        this.gettableData()
    } catch (error) {
        console.log("error : ", error);
    }
    },
    async deleteCall(call) {
      try {
        await DataStore.delete(call);
        alert("Deleted Succefully");
        await this.getCalls()
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
        await this.getCalls()
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
  