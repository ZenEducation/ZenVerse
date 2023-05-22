<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { mdiAccount, mdiAsterisk, mdiEye, mdiEyeOff, mdiMail } from "@mdi/js";
import SectionFullScreen from "@/components/Sections/SectionFullScreen.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import FormCheckRadio from "@/components/Forms/FormCheckRadio.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import AuthNotificationBar from "@/components/NotificationBars/AuthNotificationBar.vue";
import { useAuthStore } from "@/stores/authStore";
import { Auth } from 'aws-amplify'

const form = reactive({
  loginEmail: "zenithathang@gmail.com",
  password: "Zenithathang@gmail.com@99",
  remember: true,
});

const AuthStore = useAuthStore();
const errorMsg = ref('');
const router = useRouter();
const passwordFieldType = ref('password')
const passwordFieldIcon = ref(mdiEye)
const notificationModal = ref(false)
const toggleNotificationModal = (val) => {
  notificationModal.value = val
}

const togglePasswordField = () => {
  if (passwordFieldType.value === 'password') {
    passwordFieldType.value = 'text'
    passwordFieldIcon.value = mdiEyeOff
  } else {
    passwordFieldType.value = 'password'
    passwordFieldIcon.value = mdiEye
  }
}

const handleSubmit = async () => {
  try{
      // call the login method from the Authstore
      
      const user_from_amplify = await AuthStore.login({
        email: form.loginEmail,
        password: form.password,
      });
      console.log(user_from_amplify);
    
      // const response = await GraphqlAPIStore.createSuperAdmin({ input: {} });
      // console.log("response", response);
    
      if (user_from_amplify) {
        router.push("/dashboard");
        return;
      }
  } catch(err) {
    errorMsg.value = err;
    toggleNotificationModal(true)
  }
};
</script>

<template>
  <div>
    <NuxtLayout>
      <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
        <CardBox :class="cardClass">
          <AuthNotificationBar :isVisible="notificationModal" @toggle="toggleNotificationModal" color="danger" :icon="mdiMail">
          {{ errorMsg }} 
        </AuthNotificationBar>
          <FormField label="Login" help="Please enter your login">
            <FormControl
              v-model="form.loginEmail"
              :icon="mdiAccount"
              placeholder="user@example.com"
              name="login"
              autocomplete="username"
            />
          </FormField>

          <FormField label="Password" :route="{ to: '/auth/forgetpassword', title: 'Forget Password' }">
            <FormControl
              v-model="form.password"
              :iconPasswordEye="passwordFieldIcon"
              :type="passwordFieldType"
              name="password"
              autocomplete="current-password"
              @togglePasswordVisibility="togglePasswordField()"
            />
          </FormField>

          <FormCheckRadio
            v-model="form.remember"
            name="remember"
            label="Remember"
            :input-value="true"
          />

          
          <div class="flex justify-between">
            <BaseButton @click="() => Auth.federatedSignIn({provider: 'Google' })" color="info" outline label="Login with Google" />
            <BaseButton @click="() => Auth.federatedSignIn({provider: 'Facebook' })" color="info" outline label="Login with Facebook" />
          </div>

          <template #footer>
            <div class="flex justify-between">
              <BaseButtons>
                <BaseButton @click.prevent="handleSubmit" color="info" label="Login" />
                <BaseButton
                v-if="AuthStore.user"
                  to="/dashboard"
                  color="info"
                  outline
                  label="Dashboard"
                />
              </BaseButtons>
              <NuxtLink
                to="/auth/register"
                class="text-sm bg-gray-800 text-white p-3 rounded-md hover:bg-gray-600"
              >
                Don't have an account? Sign Up
              </NuxtLink>
            </div>
          </template>
        </CardBox>
      </SectionFullScreen>
    </NuxtLayout>
  </div>
</template>
