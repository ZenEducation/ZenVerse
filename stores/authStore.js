

import { Auth } from "aws-amplify";
import { defineStore } from "pinia";

export const state = () => ({
  isAuthenticated: false,
  user: null,
});

const getters = {};

export const actions = {
  async loadAmplifyUser() {
    try {
      const userfromAmplify = await Auth.currentAuthenticatedUser();
      this.user = userfromAmplify;
      return user;
    } catch (error) {
      console.log(error);
      this.user = null;
    }
  },

  async register({ email, password }) {
    const user = await Auth.signUp({
      username: email,
      password,
    });
    return user;
  },

  async confirmRegistration({ email, code }) {
    return await Auth.confirmSignUp(email, code);
  },

  async login({ email, password }) {
    const userfromAmplify = await Auth.signIn(email, password);
    this.user = userfromAmplify;
    this.isAuthenticated = true;
    return this.user;
  },

  async logout() {
    await Auth.signOut();
    if (this.isAuthenticated === true) {
      this.isAuthenticated = false;
    }
    this.user = null;
    if (!user) {
      console.log("User successfully logged out");
    }
  },

  async forgetPassword({email}) {
      const forgetInfo = await Auth.forgotPassword(email)
      .then((data) => {return data})
      .catch((err) => {return err});
      return forgetInfo
  },

  async forgotPasswordSubmit({email, code, new_password}) {
    try{
      const newPasswordInfo = await Auth.forgotPasswordSubmit(email, code, new_password)
      console.log(newPasswordInfo)
    return newPasswordInfo;
    }catch(err) {
      console.log(err)
      return err
    }
  }
};

export const useAuthStore = defineStore("authStore", {
  state,
  getters,
  actions,
});
