import { defineStore } from "pinia";
import { DataStore } from "aws-amplify"
import { Deals } from "../../models/index"


  



const state = () => ({
allDeals:[],
totalDeals:0
})

const actions = {
    // add new deal 
async addNewDeal(deal){
  try {
    await DataStore.save(new Deals(deal));
    console.log("Saved");
} catch (error) {
    console.log("error : ", error);
}
},

async updateDeal(original, update){
  try {
    await DataStore.save(Deals.copyOf(original, updated => {
      updated.dealName = update.dealName;
      updated.companyName = update.companyName;
      updated.summary = update.summary;
      updated.amount = update.amount;
      updated.status = update.status;
      updated.pipeline = update.pipeline;
      updated.stage = update.stage;
      updated.source = update.source;
      updated.owner = update.owner;
      updated.primaryContact = update.primaryContact;
      updated.weightedForecast = update.weightedForecast;
      updated.probability = update.probability;
      updated.expectedClose = update.expectedClose;
      updated.revenueType = update.revenueType;
      updated.dealPerformanceLane = update.dealPerformanceLane;
      updated.productInterest = update.productInterest;
    }));
    alert("Updated Successfully");
} catch (error) {
    console.log("error : ", error);
}
},

async getDeals() {
  try {
    const data = await DataStore.query(Deals);
    this.allDeals = data;
    let total = 0;
    for(const deal in data) {
      total += Number(data[deal]["amount"]);
    }
    this.totalDeals = total
} catch (error) {
    console.log("error : ", error);
}
},

async deleteDeal(deal) {
  try {
    await DataStore.delete(deal);
    alert("Deleted Succefully");
} catch (error) {
    console.log("error : ", error);
}
}
}

const getters = {
 
}

export const dealStore = defineStore("deal", {
    state,
    getters,
    actions,
  });
  