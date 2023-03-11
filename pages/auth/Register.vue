
<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { mdiAccount, mdiEmail } from "@mdi/js";
import CardBox from "@/components/Cards/CardBox.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import { useMainStore } from "@/stores/main.js";
import PremSectionFormScreen from "@/components/Sections/SectionFormScreen.vue";
import {
  mdiMail,
  mdiCheck,
  mdiReload,
} from "@mdi/js";
import { Auth } from 'aws-amplify'

const router = useRouter();
const AuthStore = useAuthStore();

const userSubmitted = ref(false);
const errorMsg = ref('');

const form = reactive({
  userName: "",
  signUpEmail: "",
  password: "",
  otp_code: "",
  // Sample User is as follows:
  // AakashShendage
  // paathshala.connect@gmail.com
  // AakashShendage@99
});

const handleSubmit = async () => {
  // call the login method from the Authstore
  if (!form.otp_code && !userSubmitted.value) {
    try {
      const user_to_register_in_amplify = await AuthStore.register({
        email: form.signUpEmail,
        password: form.password,
      }); 
    console.log("Sent user", user_to_register_in_amplify);
    if (user_to_register_in_amplify) {
      userSubmitted.value = true;
      return;
      // use return statements to change the UI
    }
   }catch(err) {
    errorMsg.value = err;
    console.log("REGISTRATION ERROR ", err)
   }
  }

  if (form.otp_code) {
    // form.signUpEmail = user_to_register_in_amplify.username;
    //console.log("Username:", user_to_register_in_amplify.username);

    console.log(
      "form.signUpEmail for comfirming registration:",
      form.signUpEmail,
      "form.otp_code:",
      form.otp_code
    );
    
    try {
      const registrationConfirmed = await AuthStore.confirmRegistration({
        email: form.signUpEmail,
        code: form.otp_code,
      });

      if (registrationConfirmed) {
        console.log(registrationConfirmed)
        // try{
        //   const currentUser = await AuthStore.confirmRegistration({ email: form.signUpEmail, code: form.otp_code, });
        //   console.log("CurrentUser", currentUser);
        //   console.log("Confirmed the OTP successfully");
          router.push("/dashboard");
        // } catch(err) {
        //    errorMsg.value = err;
        //   console.log('CODE ERROR ', err)
        // }
  
      // } else {
      //   console.log("OTP Confirmation was unsuccessfull");
      }

    } catch(err) {
       errorMsg.value = err;
      console.log('CONFIRMATION ERROR ',err)
    }
  }  
};

</script>

<template>
  <NuxtLayout>
    
    <PremSectionFormScreen v-slot="{ cardClass }" bg="yellowRed" has-promo>
      
      <CardBox :class="cardClass" is-form @submit.prevent="handleSubmit">
        <NotificationBar v-if="errorMsg" color="danger" :icon="mdiMail">
          {{ errorMsg }} 
        </NotificationBar>
        <FormField v-if="!userSubmitted" label="Username" help="Please enter your new username">
            <FormControl v-model="form.userName" :icon-right="mdiAccount" name="login" placeholder="johndoe"
              autocomplete="username" />
        </FormField>
        <FormField label="Email" help="Please enter your email">
            <FormControl v-model="form.signUpEmail" :icon-right="mdiEmail" name="login" type="email"
              placeholder="user@example.com" autocomplete="email" />
          </FormField>

          <FormField v-if="!userSubmitted" label="Password" help="Click icon to show/hide">
            <FormControl v-model="form.password" type="password" name="password" placeholder="Password"
              autocomplete="new-password" />
          </FormField>

          <h3  v-if="userSubmitted" class="font-bold">Verification link has been sent to your email!</h3>
          <h3  v-if="userSubmitted" class="font-bold">Verify to proceed</h3>

          <div class="flex justify-between">
            <BaseButton v-if="!userSubmitted" @click="() => Auth.federatedSignIn({provider: 'Google' })" color="info" outline label="Login with Google" />
            <BaseButton v-if="!userSubmitted" @click="() => Auth.federatedSignIn({provider: 'Facebook' })" color="info" outline label="Login with Facebook" />
          </div>
          
          
          <template #footer>
            <BaseLevel mobile class="flex justify-between">
              <div class="flex">
                <BaseButton v-if="!userSubmitted" label="Signup" type="submit" color="info" />
                <BaseButton v-if="userSubmitted" @click="() => {router.push('/auth/login')}" label="Login" type="login" color="info" /> 
                <!-- <BaseButton v-if="userSubmitted" label="Sign Up Again" type="submit" color="info"
                  @click="() => {router.push}" /> -->
                </div>

                <NuxtLink to="/auth/login" class="text-sm bg-gray-800 text-white p-3 rounded-md hover:bg-gray-600">
                  Have an account? Sign In
                </NuxtLink>
              </BaseLevel>
            </template>
      </CardBox>
    </PremSectionFormScreen>  
  </NuxtLayout>
</template>