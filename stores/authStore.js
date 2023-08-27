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

  async register({ name, email, password, address, pincode, role }) {
    const user = await Auth.signUp({
      username: email,
      password,
      attributes: {
        name,
        address,
        "custom:pincode": pincode,
        "custom:role": role,
      },
    });
    return user;
  },

  async confirmRegistration({ email, code }) {
    return await Auth.confirmSignUp(email, code);
  },

  async resendConfirmationCode({ email }) {
    await Auth.resendSignUp(email);
  },

  async login({ email, password }) {
    const userfromAmplify = await Auth.signIn(email, password);
    console.log(userfromAmplify.signInUserSession.accessToken.jwtToken);
    localStorage.setItem(
      "authToken",
      userfromAmplify.signInUserSession.accessToken.jwtToken
    );
    localStorage.setItem("User-profile", JSON.stringify(userfromAmplify));

    this.user = userfromAmplify;
    this.isAuthenticated = true;
    return this.user;
  },

  async logout() {
    await Auth.signOut();
    if (this.isAuthenticated === true) {
      this.isAuthenticated = false;
    }
    localStorage.removeItem("authToken");
    navigateTo("/");
    this.user = null;
    if (!this.user) {
      console.log("User successfully logged out");
      localStorage.removeItem("User-profile");
      console.log("removed user-profile ");
    }
  },

  async forgetPassword({ email }) {
    const forgetInfo = await Auth.forgotPassword(email)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
    return forgetInfo;
  },

  async forgotPasswordSubmit({ email, code, new_password }) {
    try {
      const newPasswordInfo = await Auth.forgotPasswordSubmit(
        email,
        code,
        new_password
      );
      console.log(newPasswordInfo);
      return newPasswordInfo;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};

export const useAuthStore = defineStore("authStore", {
  state,
  getters,
  actions,
});
