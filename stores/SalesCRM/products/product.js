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
tableData : [],
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
      const data = this.allProducts;
  const fields = {"name" : 1, "code" : 2, "category" : 3, "unit_price" : 4, "description" : 5}
  let products = [];
        for(const deal in data) {
          let product = {id : Number(deal)+1, values : []}
          let entry = data[deal]
          for(const value in fields) {
            let field = {}
            field["id"] = fields[value]
            field["value"] = entry[value]
            field["icon"] = ""
            product.values.push(field)
          }
          products.push(product)
        }
        console.log(products);
        this.tableData = products
    },
     async addNewProduct(product){
      try {
        await DataStore.save(new Products(product));
        alert("Saved Successfully");
        await this.getProducts()
    } catch (error) {
        console.log("error : ", error);
    }
     },

     async getProducts() {
      try {
        const data = await DataStore.query(Products);
        this.allProducts = data
        this.gettableData()
    } catch (error) {
        console.log("error : ", error);
    }
    },
    async deleteProduct(product) {
      try {
        await DataStore.delete(product);
        alert("Deleted Succefully");
        await this.getProducts()
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
        await this.getProducts()
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
  