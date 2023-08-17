import { defineStore } from "pinia";
import { DataStore } from "aws-amplify"
import { Deals } from "../../models/index"


  



const state = () => ({
allDeals:[],
totalDeals:0
})

const actions = {
    // add new deal 
async addNewDeal(item){
  try {
    await DataStore.save(new Deals(item));
    console.log("Saved");
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
      console.log(data[deal]);
      total += Number(data[deal]["amount"]);
    }
    this.totalDeals = total
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
  