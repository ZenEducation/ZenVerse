import { defineStore } from "pinia";
import { API } from "aws-amplify";
import { listLearners , listAdmins , listAffiliates , listInstructors } from "~/src/graphql/queries";
import { createLearner, createAdmin ,createAffiliate , createInstructor, updateLearner ,updateAdmin , updateAffiliate , updateInstructor , deleteLearner , deleteAdmin ,deleteAffiliate , deleteInstructor } from "@/src/graphql/mutations";

const state = () => ({
  learners: [
  ],
  admins:[],
  instructors:[],
  affiliates:[]

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
  async FetchAdmins() {
    try {
      const response = await API.graphql({
        query: listAdmins,
        variables:{filter: {_deleted: {ne: true}}}
        
      });
      console.log("response", response.data.listAdmins.items);
      this.admins = response.data.listAdmins.items;
    } catch (error) {
      console.error("Error fetching Admins:", error);
    }
  },
  async CreateNewAdmin(name, mobile, email , role) {
    try {
      const response = await API.graphql({
        query: createAdmin,
        variables: {
          input: {
            name: name,
            email: email,
            mobile: mobile,
            lastLogin: new Date().toISOString().substr(0, 10),
            joinedOn: new Date().toISOString().substr(0, 10),
            isEnabled: true,
            role: role,
            products: ["ts1", "bundle1"]

          },
        },
      });

      this.admins.push(response.data.createAdmin);
      return [true, response.data.createAdmin];
    } catch (error) {
      console.error("Error Creating learner:", error.errors[0].message);
      return [false, error.errors[0].message];
    }
  },
  async UpdateAdminStatus(id, version, status) {
    try {
      const response = await API.graphql({
        query: updateAdmin,
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

  async DeleteAdmin(id, version) {
    try {
      const response = await API.graphql({
        query: deleteAdmin,
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
  async FetchAffiliates() {
    try {
      const response = await API.graphql({
        query: listAffiliates,
        variables:{filter: {_deleted: {ne: true}}}
        
      });
      console.log("response", response.data.listAffiliates.items);
      this.affiliates = response.data.listAffiliates.items;
    } catch (error) {
      console.error("Error fetching Affiliates:", error);
    }
  },
  async CreateNewAffiliate(name, mobile, email, commitionRate) {
    try {
      const response = await API.graphql({
        query: createAffiliate,
        variables: {
          input: {
            name: name,
            email: email,
            mobile: mobile,
            lastLogin: new Date().toISOString().substr(0, 10),
            joinedOn: new Date().toISOString().substr(0, 10),
            leadStatus:"Open",
            isEnabled: true,
            commitionRate:commitionRate,
            isLifelong:true,
            userSegment: "Paid",
            products: ["ts1", "bundle1"]

          },
        },
      });

      this.affiliates.push(response.data.createAffiliate);
      return [true, response.data.createAffiliate];
    } catch (error) {
      console.error("Error Creating Affiliate:", error.errors[0].message);
      return [false, error.errors[0].message];
    }
  },
  async UpdateAffiliateStatus(id, version, status) {
    try {
      const response = await API.graphql({
        query: updateAffiliate,
        variables: {
          input: {
            id: id,
            _version: version,
            isEnabled: status,
          },
        },
      });
    } catch (error) {
      console.error("Error Updating Affiliate : ", error);
    }
  },

  async DeleteAffiliate(id, version) {
    try {
      const response = await API.graphql({
        query: deleteAffiliate,
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
  async FetchInstructors() {
    try {
      const response = await API.graphql({
        query: listInstructors,
        variables:{filter: {_deleted: {ne: true}}}
        
      });
      console.log("response", response.data.listInstructors.items);
      this.instructors = response.data.listInstructors.items;
    } catch (error) {
      console.error("Error fetching listInstructors:", error);
    }
  },
  async CreateNewInstructor(name, mobile, email) {
    try {
      const response = await API.graphql({
        query: createInstructor,
        variables: {
          input: {
            name: name,
            email: email,
            mobile: mobile,
            lastLogin: new Date().toISOString().substr(0, 10),
            joinedOn: new Date().toISOString().substr(0, 10),
            isEnabled: true,
            products: ["ts1", "bundle1"]

          },
        },
      });

      this.instructors.push(response.data.createInstructor);
      return [true, response.data.createInstructor];
    } catch (error) {
      console.error("Error Creating instructors :", error.errors[0].message);
      return [false, error.errors[0].message];
    }
  },
  async UpdateInstructorStatus(id, version, status) {
    try {
      const response = await API.graphql({
        query: updateInstructor,
        variables: {
          input: {
            id: id,
            _version: version,
            isEnabled: status,
          },
        },
      });
    } catch (error) {
      console.error("Error Updating Instructor : ", error);
    }
  },

  async DeleteInstructor(id, version) {
    try {
      const response = await API.graphql({
        query: deleteInstructor,
        variables: {
          input: {
            id: id,
            _version: version,
          },
        },
      });
      console.log("Successfully deleted", response );
    } catch (error) {
      console.error("Error Deleting Instructor : ", error);
    }
  },
};

export const useMgmtStore = defineStore("UseMgmtStore", {
  state,
  getters,
  actions,
});
