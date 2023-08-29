import { defineStore } from "pinia";
import { DataStore } from "aws-amplify"
import { Events } from "../../../models/index"

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
allEvents:[],
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
      const data = this.allEvents;
  const fields = {"title" : 1, "from_date" : 2, "from_time" : 3, "to_date" : 4, "to_time" : 5, "location" : 6, "related_to" : 7, "participants" : 8,"description" : 9}
  let events = [];
        for(const deal in data) {
          let event = {id : Number(deal)+1, values : []}
          let entry = data[deal]
          for(const value in fields) {
            let field = {}
            field["id"] = fields[value]
            field["value"] = entry[value]
            field["icon"] = ""
            event.values.push(field)
          }
          events.push(event)
        }
        console.log(events);
        this.tableData = events
    },
     async addNewEvent(task){
      try {
        await DataStore.save(new Events(task));
        alert("Saved Successfully");
        await this.getEvents()
    } catch (error) {
        console.log("error : ", error);
    }
     },

     async getEvents() {
      try {
        const data = await DataStore.query(Events);
        this.allEvents = data
        this.gettableData()
    } catch (error) {
        console.log("error : ", error);
    }
    },
    async deleteEvent(task) {
      try {
        await DataStore.delete(task);
        alert("Deleted Succefully");
        await this.getEvents()
    } catch (error) {
        console.log("error : ", error);
    }
    },
    async updateEvent(original, update){
      try {
        await DataStore.save(Events.copyOf(original, updated => {
          updated.title = update.title;
          updated.from_date = update.from_date;
          updated.from_time = update.from_time;
          updated.to_date = update.to_date;
          updated.to_time = update.to_time;
          updated.location = update.location;
          updated.related_to = update.related_to;
          updated.participants = update.participants;
          updated.description = update.description;
        }));
        alert("Updated Successfully");
        await this.getEvents()
    } catch (error) {
        console.log("error : ", error);
    }
    },
}

const getters = {
 
}

export const eventStore = defineStore("event", {
    state,
    getters,
    actions,
  });
  