import { defineStore } from "pinia";


const tableData =[
    {
      dealName:"My deal",
      companyName:"Bymond",
      summary:"Some text here",
      amount:"1000",
      currency:{
        id:1,
        level:"USD",
        symbol:"$"
      },
      status:"red",
      pipeline:"somthing",
      stage:"Qualified",
      source:"Website",
      owner:"Bhavya",
      nextTask:"",
      nextTaskDue:"",
      lossresion:"",
      lossresionNote:"",
      weightedForecast:"25,150.00"
      
    },
    {
      dealName:"App Develop",
      companyName:"Bymond",
      summary:"Some text here",
      amount:"1000",
      currency:{
        id:1,
        level:"USD",
        symbol:"$"
      },
      status:"green",
      pipeline:"somthing",
      stage:"Request for info",
      source:"Website",
      owner:"Bhavya",
      nextTask:"",
      nextTaskDue:"",
      lossresion:"",
      lossresionNote:"",
      weightedForecast:"25,150.00"
      
    },
    {
      dealName:"Graphics Manager",
      companyName:"Bymond",
      summary:"Some text here",
      amount:"1000",
      currency:{
        id:1,
        level:"USD",
        symbol:"$"
      },
      status:"red",
      pipeline:"someting",
      stage:"Presentation",
      source:"Website",
      owner:"Bhavya",
      nextTask:"",
      nextTaskDue:"",
      lossresion:"",
      lossresionNote:"",
      weightedForecast:"25,150.00"
      
    },
    {
      dealName:"Potik",
      companyName:"Bymond",
      summary:"Some text here",
      amount:"1000",
      currency:{
        id:1,
        level:"USD",
        symbol:"$"
      },
      status:"yellow",
      pipeline:"somthing",
      stage:"Won",
      source:"Website",
      owner:"Bhavya",
      nextTask:"",
      nextTaskDue:"",
      lossresion:"",
      lossresionNote:"",
      weightedForecast:"25,150.00"
      
    },
    {
      dealName:"New Website Create",
      companyName:"Bymond",
      summary:"Some text here",
      amount:"1000",
      currency:{
        id:1,
        level:"USD",
        symbol:"$"
      },
      status:"green",
      pipeline:"somthing",
      stage:"Lost",
      source:"Website",
      owner:"Bhavya",
      nextTask:"",
      nextTaskDue:"",
      lossresion:"",
      lossresionNote:"",
      weightedForecast:"25,150.00"
      
    },
    {
      dealName:"New Website Create",
      companyName:"Bymond",
      summary:"Some text here",
      amount:"1000",
      currency:{
        id:1,
        level:"USD",
        symbol:"$"
      },
      status:"green",
      pipeline:"somthing",
      stage:"Negotiation",
      source:"Website",
      owner:"Bhavya",
      nextTask:"",
      nextTaskDue:"",
      lossresion:"",
      lossresionNote:"",
      weightedForecast:"25,150.00"
      
    }
  ]
  



const state = () => ({
allDeals:tableData
})

const actions = {
    // add new deal 
addNewDeal(item){
this.allDeals.unshift(item)
}
}

const getters = {
 
}

export const dealStore = defineStore("deal", {
    state,
    getters,
    actions,
  });
  