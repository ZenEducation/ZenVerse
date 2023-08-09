import { defineStore } from "pinia";
import { API } from "aws-amplify";
import {
  listLearners,
  getLearner,
  listAdmins,
  getAdmin,
  listAffiliates,
  getAffiliate,
  listInstructors,
  getInstructor,
} from "~/src/graphql/queries";
import {
  createLearner,
  createAdmin,
  createAffiliate,
  createInstructor,
  updateLearner,
  updateAdmin,
  updateAffiliate,
  updateInstructor,
  deleteLearner,
  deleteAdmin,
  deleteAffiliate,
  deleteInstructor,
} from "@/src/graphql/mutations";
import { Learner } from "~~/src/models";

const state = () => ({
  learners: [],
  admins: [],
  instructors: [],
  affiliates: [],
});

const getters = {};

const actions = {
  async FetchLearners() {
    try {
      const response = await API.graphql({
        query: listLearners,
        variables: { filter: { _deleted: { ne: true } } },
      });
      console.log("response", response.data.listLearners.items);
      this.learners = response.data.listLearners.items;
    } catch (error) {
      window.alert("Error fetching learners:", error?.errors[0]?.message);
    }
  },

  async FetchSingleLearner(id) {
    try {
      const response = await API.graphql({
        query: getLearner,
        variables:  { id: id } ,
      });

      console.log("response", response.data.getLearner);
      return [true, response.data.getLearner];
    } catch (error) {
      window.alert("Error fetching learner:", error?.errors[0]?.message);
      return [false, error.errors[0].message];
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
            leadStatus: "Open",
            isEnabled: true,
            userSegment: "Paid",
            products: ["ts1", "bundle1"],
            role:"Student",
            language:"English",
            state:"Delhi",
            userNote:""
          },
        },
      });

      this.learners.push(response.data.createLearner);
      return [true, response.data.createLearner];
    } catch (error) {
      window.alert("Error Creating learner:", error.errors[0].message);
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
      window.alert("Error Updating learner : ", error?.errors[0]?.message);
    }
  },
  async UpdateLearnerProfile(id , version , name , email , language , role , state , mobile) {
    try {
      const response = await API.graphql({
        query: updateLearner,
        variables: {
          input: {
            id: id,
            _version: version,
            name: name,
            email:email,
            language:language,
            role:role,
            state:state,
            mobile:mobile
          },
        },
      });
      if(response){
        const index = this.learners.findIndex((item) => item.id === id );
        if(index > -1){
          this.learners[index] = response.data.updateLearner;
        }
      }
    } catch (error) {
      window.alert("Error Updating learner cc : ", error?.errors[0]?.message);
      window.alert(error?.errors[0]?.message)
    }
  },
  async UpdateLearnerAdditionalDetails(id, version, userSegment , leadStatus) {
    try {
      const response = await API.graphql({
        query: updateLearner,
        variables: {
          input: {
            id: id,
            _version: version,
            userSegment: userSegment,
            leadStatus : leadStatus,
          },
        },
      });
      if(response){
        const index = this.learners.findIndex((item) => item.id === id );
        if(index > -1){
          this.learners[index] = response.data.updateLearner;
        }
      }
    } catch (error) {
      window.alert("Error Updating learner : ", error?.errors[0]?.message);
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
      console.log("Successfully deleted", response);
    } catch (error) {
      window.alert("Error Deleting learner : ", error?.errors[0]?.message);
    }
  },
  async FetchAdmins() {
    try {
      const response = await API.graphql({
        query: listAdmins,
        variables: { filter: { _deleted: { ne: true } } },
      });
      console.log("response", response.data.listAdmins.items);
      this.admins = response.data.listAdmins.items;
    } catch (error) {
      window.alert("Error fetching Admins:", error?.errors[0]?.message);
    }
  },

  async FetchSingleAdmin(id) {
    try {
      const response = await API.graphql({
        query: getAdmin,
        variables:  { id: id } ,
      });

      console.log("response", response.data.getAdmin);
      return [true, response.data.getAdmin];
    } catch (error) {
      window.alert("Error fetching Admin:", error?.errors[0]?.message);
      return [false, error.errors[0].message];
    }
  },
  async FetchSingleAffiliate(id) {
    try {
      const response = await API.graphql({
        query: getAffiliate,
        variables:  { id: id } ,
      });

      console.log("response", response.data.getAffiliate);
      return [true, response.data.getAffiliate];
    } catch (error) {
      window.alert("Error fetching Affiliate:", error?.errors[0]?.message);
      return [false, error.errors[0].message];
    }
  },
  async FetchSingleInstructor(id) {
    try {
      const response = await API.graphql({
        query: getInstructor,
        variables:  { id: id } ,
      });

      console.log("response", response.data.getInstructor);
      return [true, response.data.getInstructor];
    } catch (error) {
      window.alert("Error fetching Instructor:", error?.errors[0]?.message);
      return [false, error.errors[0].message];
    }
  },

  async CreateNewAdmin(name, mobile, email, role) {
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
            products: ["ts1", "bundle1"],
            language:"English",
            state:"Delhi",
            userNote:""
          },
        },
      });

      this.admins.push(response.data.createAdmin);
      return [true, response.data.createAdmin];
    } catch (error) {
      window.alert("Error Creating learner:", error.errors[0].message);
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
      window.alert("Error Updating learner : ", error?.errors[0]?.message);
    }
  },

  async UpdateAdminProfile(id , version , name , email , language , role , state , mobile) {
    try {
      const response = await API.graphql({
        query: updateAdmin,
        variables: {
          input: {
            id: id,
            _version: version,
            name: name,
            email:email,
            language:language,
            role:role,
            state:state,
            mobile:mobile
          },
        },
      });
      if(response){
        const index = this.admins.findIndex((item) => item.id === id );
        if(index > -1){
          this.admins[index] = response.data.updateAdmin;
        }
      }
    } catch (error) {
      window.alert("Error Updating admin : ", error?.errors[0]?.message);
    }
  },
  async UpdateAdminAdditionalDetails(id, version, userSegment , leadStatus) {
    try {
      const response = await API.graphql({
        query: updateAdmin,
        variables: {
          input: {
            id: id,
            _version: version,
            userSegment: userSegment,
            leadStatus : leadStatus,
          },
        },
      });
      if(response){
        const index = this.admins.findIndex((item) => item.id === id );
        if(index > -1){
          this.admins[index] = response.data.updateAdmin;
        }
      }
    } catch (error) {
      window.alert("Error Updating admin : ", error?.errors[0]?.message);
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
      console.log("Successfully deleted", response);
    } catch (error) {
      window.alert("Error Deleting learner : ", error?.errors[0]?.message);
    }
  },
  async FetchAffiliates() {
    try {
      const response = await API.graphql({
        query: listAffiliates,
        variables: { filter: { _deleted: { ne: true } } },
      });
      console.log("response", response.data.listAffiliates.items);
      this.affiliates = response.data.listAffiliates.items;
    } catch (error) {
      window.alert("Error fetching Affiliates:", error?.errors[0]?.message);
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
            leadStatus: "Open",
            isEnabled: true,
            commitionRate: commitionRate,
            isLifelong: true,
            userSegment: "Paid",
            products: ["ts1", "bundle1"],
            role:"Student",
            language:"English",
            state:"Delhi",
            userNote:""
          },
        },
      });

      this.affiliates.push(response.data.createAffiliate);
      return [true, response.data.createAffiliate];
    } catch (error) {
      window.alert("Error Creating Affiliate:", error.errors[0].message);
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
      window.alert("Error Updating Affiliate : ", error?.errors[0]?.message);
    }
  },

  
  async UpdateAffiliateProfile(id , version , name , email , language , role , state , mobile , commission) {
    try {
      const response = await API.graphql({
        query: updateAffiliate,
        variables: {
          input: {
            id: id,
            _version: version,
            name: name,
            email:email,
            language:language,
            role:role,
            state:state,
            mobile:mobile,
            commitionRate:commission
          },
        },
      });
      if(response){
        const index = this.affiliates.findIndex((item) => item.id === id );
        if(index > -1){
          this.affiliates[index] = response.data.updateAffiliate;
        }
      }
    } catch (error) {
      window.alert("Error Updating affiliate : ", error?.errors[0]?.message);
    }
  },
  async UpdateAffiliateAdditionalDetails(id, version, userSegment , leadStatus) {
    try {
      const response = await API.graphql({
        query: updateAffiliate,
        variables: {
          input: {
            id: id,
            _version: version,
            userSegment: userSegment,
            leadStatus : leadStatus,
          },
        },
      });
      if(response){
        const index = this.affiliates.findIndex((item) => item.id === id );
        if(index > -1){
          this.affiliates[index] = response.data.updateAffiliate;
        }
      }
    } catch (error) {
      window.alert("Error Updating affiliate : ", error?.errors[0]?.message);
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
      console.log("Successfully deleted", response);
    } catch (error) {
      window.alert("Error Deleting learner : ", error?.errors[0]?.message);
    }
  },
  async FetchInstructors() {
    try {
      const response = await API.graphql({
        query: listInstructors,
        variables: { filter: { _deleted: { ne: true } } },
      });
      console.log("response", response.data.listInstructors.items);
      this.instructors = response.data.listInstructors.items;
    } catch (error) {
      window.alert("Error fetching listInstructors:", error?.errors[0]?.message);
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
            products: ["ts1", "bundle1"],
            role:"Student",
            language:"English",
            state:"Delhi",
            userNote:""
          },
        },
      });

      this.instructors.push(response.data.createInstructor);
      return [true, response.data.createInstructor];
    } catch (error) {
      window.alert("Error Creating instructors :", error.errors[0].message);
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
      window.alert("Error Updating Instructor : ", error?.errors[0]?.message);
    }
  },

  async UpdateInstructorProfile(id , version , name , email , language , role , state , mobile ) {
    try {
      const response = await API.graphql({
        query: updateInstructor,
        variables: {
          input: {
            id: id,
            _version: version,
            name: name,
            email:email,
            language:language,
            role:role,
            state:state,
            mobile:mobile,
          },
        },
      });
      if(response){
        const index = this.instructors.findIndex((item) => item.id === id );
        if(index > -1){
          this.instructors[index] = response.data.updateInstructor;
        }
      }
    } catch (error) {
      window.alert("Error Updating affiliate : ", error?.errors[0]?.message);
    }
  },
  async UpdateInstructorAdditionalDetails(id, version, userSegment , leadStatus) {
    try {
      const response = await API.graphql({
        query: updateInstructor,
        variables: {
          input: {
            id: id,
            _version: version,
            userSegment: userSegment,
            leadStatus : leadStatus,
          },
        },
      });
      if(response){
        const index = this.instructors.findIndex((item) => item.id === id );
        if(index > -1){
          this.instructors[index] = response.data.updateInstructor;
        }
      }
    } catch (error) {
      window.alert("Error Updating instructor : ", error?.errors[0]?.message);
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
      console.log("Successfully deleted", response);
    } catch (error) {
      window.alert("Error Deleting Instructor : ", error?.errors[0]?.message);
    }
  },
};

export const useMgmtStore = defineStore("UseMgmtStore", {
  state,
  getters,
  actions,
});
