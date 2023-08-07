import { defineStore } from "pinia";
import { API } from "aws-amplify";
import { listLearners } from "~/src/graphql/queries";
import { createLearner, updateLearner , deleteLearner } from "@/src/graphql/mutations";

const state = () => ({
  learners: [
  ],
});

const getters = {};

const actions = {
  async FetchLearners() {
    try {
      const response = await API.graphql({
        query: listLearners,
        variables:{filter: {_deleted: {ne: true}}}
        
      });
      console.log("response", response.data.listLearners.items);
      this.learners = response.data.listLearners.items;
    } catch (error) {
      console.error("Error fetching learners:", error);
    }
  },
  async CreateNewLearner(name, mobile, email) {
    try {
      const response = await API.graphql({
        query: createLearner,
        variables: {
          input: {
            name: name,
            email: email,
            mobile: mobile,
            lastLogin: new Date().toISOString().substr(0, 10),
            joinedOn: new Date().toISOString().substr(0, 10),
            leadStatus:"Open",
            isEnabled: true,
            userSegment: "Paid",
            products: ["ts1", "bundle1"]

          },
        },
      });

      this.learners.push(response.data.createLearner);
      return [true, response.data.createLearner];
    } catch (error) {
      console.error("Error Creating learner:", error.errors[0].message);
      return [false, error.errors[0].message];
    }
  },
  async UpdateLearnerStatus(id, version, status) {
    try {
      const response = await API.graphql({
        query: updateLearner,
        variables: {
          input: {
            id: id,
            _version: version,
            isEnabled: status,
          },
        },
      });
    } catch (error) {
      console.error("Error Updating learner : ", error);
    }
  },

  async DeleteLearner(id, version) {
    try {
      const response = await API.graphql({
        query: deleteLearner,
        variables: {
          input: {
            id: id,
            _version: version,
          },
        },
      });
      console.log("Successfully deleted", response );
    } catch (error) {
      console.error("Error Deleting learner : ", error);
    }
  },
};

export const useMgmtStore = defineStore("UseMgmtStore", {
  state,
  getters,
  actions,
});
