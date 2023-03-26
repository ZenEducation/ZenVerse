<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { mdiAccount, mdiEmail, mdiEye, mdiEyeOff, mdiMail, mdiMapMarker, mdiCity } from "@mdi/js";
import CardBox from "@/components/Cards/CardBox.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import { useMainStore } from "@/stores/main.js";
import PremSectionFormScreen from "@/components/Sections/SectionFormScreen.vue";
import AuthNotificationBar from "@/components/NotificationBars/AuthNotificationBar.vue";
import { Auth } from "aws-amplify";
const emit = defineEmits(["setEmail"]);

const router = useRouter();
const AuthStore = useAuthStore();

const userSubmitted = ref(false);
const errorMsg = ref("");
const passwordFieldType = ref("password");
const passwordFieldIcon = ref(mdiEye);

const notificationModal = ref(false)
const toggleNotificationModal = (val) => {
  notificationModal.value = val
}

const togglePasswordField = () => {
  if (passwordFieldType.value === "password") {
    passwordFieldType.value = "text";
    passwordFieldIcon.value = mdiEyeOff;
  } else {
    passwordFieldType.value = "password";
    passwordFieldIcon.value = mdiEye;
  }
};

const form = reactive({
  userName: "",
  signUpEmail: "",
  password: "",
  address: "",
  pincode: ""
});

const handleSubmit = async () => {
  // call the login method from the Authstore
  try {
    const user_to_register_in_amplify = await AuthStore.register({
      name: form.userName,
      email: form.signUpEmail,
      password: form.password,
      address: form.address,
      pincode: form.pincode.toString()
    });
    console.log("Sent user", user_to_register_in_amplify);
    
    
    if (user_to_register_in_amplify) {
        emit("setEmail", form.signUpEmail)
      return;
      // use return statements to change the UI
    }
  } catch (err) {
    errorMsg.value = err;
    toggleNotificationModal(true)
    console.log("REGISTRATION ERROR ", err);
  }
};
</script>
<template>
  <div>
    <PremSectionFormScreen v-slot="{ cardClass }" bg="yellowRed" has-promo>
      <CardBox :class="cardClass">
        <AuthNotificationBar :isVisible="notificationModal" @toggle="toggleNotificationModal" color="danger" :icon="mdiMail">
          {{ errorMsg }}
        </AuthNotificationBar>
        <FormField label="Username" help="Please enter your new username">
          <FormControl
            v-model="form.userName"
            :iconRight="mdiAccount"
            name="login"
            placeholder="johndoe"
            autocomplete="username"
          />
        </FormField>
        <FormField label="Email" help="Please enter your email">
          <FormControl
            v-model="form.signUpEmail"
            :iconRight="mdiEmail"
            name="login"
            type="email"
            placeholder="user@example.com"
            autocomplete="email"
          />
        </FormField>
        <FormField label="Password" help="Click icon to show/hide">
          <FormControl
            v-model="form.password"
            :iconPasswordEye="passwordFieldIcon"
            :type="passwordFieldType"
            @togglePasswordVisibility="togglePasswordField()"
            name="password"
            placeholder="Password"
            autocomplete="new-password"
          />
        </FormField>
        <FormField label="Address" help="Please enter your address">
          <FormControl
            v-model="form.address"
            :iconRight="mdiMapMarker"
            name="address"
            placeholder="address"
            autocomplete="address"
          />
        </FormField>
        <FormField label="Pincode" help="Please enter your pincode">
          <FormControl
            v-model="form.pincode"
            :iconRight="mdiCity"
            name="pincode"
            type="number"
            placeholder="pincode"
            autocomplete="pincode"
          />
        </FormField>
        <div class="flex justify-between">
          <BaseButton
            @click="() => Auth.federatedSignIn({ provider: 'Google' })"
            color="info"
            outline
            label="Login with Google"
          />
          <BaseButton
            @click="() => Auth.federatedSignIn({ provider: 'Facebook' })"
            color="info"
            outline
            label="Login with Facebook"
          />
        </div>
        <template #footer>
          <BaseLevel mobile class="flex justify-between">
            <div class="flex">
              <BaseButton
                @click.prevent="handleSubmit"
                label="Signup"
                color="info"
              />
            </div>
            <NuxtLink
              to="/auth/login"
              class="text-sm bg-gray-800 text-white p-3 rounded-md hover:bg-gray-600"
            >
              Have an account? Sign In
            </NuxtLink>
          </BaseLevel>
        </template>
      </CardBox>
    </PremSectionFormScreen>
  </div>
</template>
