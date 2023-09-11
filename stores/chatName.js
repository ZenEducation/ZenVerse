import { defineStore } from "pinia";
import { DataStore } from '@aws-amplify/datastore';
import { Messsage } from '@/src/models/index';


export const useMyStore = defineStore("myStore", {

  state: () => ({
    name : "",
    data: [],
  }),

  actions: {
    async setName(selectedName)
    {
      this.name=selectedName;
      const newData = await DataStore.query(Messsage, (item) => item.sender.eq(selectedName));
      this.data=newData;
      console.log(this.data);
    },
  },
});
