import { defineStore } from "pinia";


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
allProducts:tableData,
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
    
     addNewItem(item){
      this.allProducts.unshift(item)
     }
}

const getters = {
 
}

export const productStore = defineStore("product", {
    state,
    getters,
    actions,
  });
  