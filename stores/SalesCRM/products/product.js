import { defineStore } from "pinia";
import { DataStore } from "aws-amplify"
import { Products } from "../../../models/index"

const tableData = [
    {
      id:1,
      values:[ 
        
        {
          id:1,
          value:"Bike",
          icon:""
        },
        {
          id:2,
          value:"B54879",
          icon:""
        },
        {
          id:3,
          value:"Active",
          icon:""
        },
        {
          id:4,
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
            value:"Car",
            icon:""
          },
          {
            id:2,
            value:"B548774",
            icon:""
          },
          {
            id:3,
            value:"Active",
            icon:""
          },
          {
            id:4,
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
                value:"Cycle",
                icon:""
              },
              {
                id:2,
                value:"B5487",
                icon:""
              },
              {
                id:3,
                value:"Active",
                icon:""
              },
              {
                id:4,
                value:"Injamamul Hoque",
                icon:""
              },
         ]
      },
  ]



const state = () => ({
allProducts:[],
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
    
     async addNewProduct(product){
      try {
        await DataStore.save(new Products(product));
        alert("Saved Successfully");
    } catch (error) {
        console.log("error : ", error);
    }
     },

     async getProducts() {
      try {
        const data = await DataStore.query(Products);
        this.allProducts = data
    } catch (error) {
        console.log("error : ", error);
    }
    },
    async deleteProduct(product) {
      try {
        await DataStore.delete(product);
        alert("Deleted Succefully");
    } catch (error) {
        console.log("error : ", error);
    }
    },
    async updateProduct(original, update){
      try {
        await DataStore.save(Products.copyOf(original, updated => {
          updated.name = update.name;
          updated.code = update.code;
          updated.category = update.category;
          updated.unit_price = update.unit_price;
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

export const productStore = defineStore("product", {
    state,
    getters,
    actions,
  });
  