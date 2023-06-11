<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { mdiAccount, mdiEmail, mdiEye, mdiEyeOff, mdiMail } from "@mdi/js";
import CardBox from "@/components/Cards/CardBox.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import AuthNotificationBar from "@/components/NotificationBars/AuthNotificationBar.vue";
import { useMainStore } from "@/stores/main.js";
import PremSectionFormScreen from "@/components/Sections/SectionFormScreen.vue";

import { Auth } from "aws-amplify";
const props = defineProps({
    email: {
        type: String,
        default: null,
    }
})

const router = useRouter();
const AuthStore = useAuthStore();
const notificationModal = ref(false)
const toggleNotificationModal = (val) => {
  notificationModal.value = val
}
const emit = defineEmits(["setEmail"]);
const changeEmail = () => {
    emit("setEmail", null)
}

const userSubmitted = ref(false);
const errorMsg = ref("");

const form = reactive({
  otp_code: "",
});

const handleSubmit = async () => {
  console.log(
    "form.otp_code:",
    form.otp_code
  );

  try {
    const registrationConfirmed = await AuthStore.confirmRegistration({
      email: props.email,
      code: form.otp_code
    });

    if (registrationConfirmed) {
      console.log(registrationConfirmed);
      router.push("/auth/login");
    }
  } catch (err) {
    errorMsg.value = err;
    toggleNotificationModal(true)
    console.log("CONFIRMATION ERROR ", err);
  }
};
const resendCode = async() => {
    try {
      const data = await AuthStore.resendConfirmationCode({
        email: props.email
      })
    } catch(err) {
      errorMsg.value = err;
      toggleNotificationModal(true)
      console.log("CONFIRMATION ERROR ", err);
    }
  }
</script>

<template>
  <div>
    <PremSectionFormScreen v-slot="{ cardClass }" bg="yellowRed" has-promo>
      <CardBox :class="cardClass">
        <AuthNotificationBar :isVisible="notificationModal" @toggle="toggleNotificationModal" v-if="errorMsg" color="danger" :icon="mdiMail">
          {{ errorMsg }}
        </AuthNotificationBar>
        <div class="flex xl:pr-4 justify-between">
            <div>{{props.email}}</div>
            <div><button @click="changeEmail()" class="text-red-400 text-sm">Change Email</button></div>
        </div>
        <!-- <FormField label="Email" help="Please enter your email">
          <FormControl
            v-model="form.signUpEmail"
            :iconRight="mdiEmail"
            name="login"
            type="email"
            placeholder="user@example.com"
            autocomplete="email"
          />
        </FormField> -->
        <FormField label="Email" help="Please enter the verification Code sent to your email">
          <FormControl
            v-model="form.otp_code"
            :iconRight="mdiEmail"
            name="code"
            type="text"
            placeholder="enter code"
            autocomplete="code"
          />
        </FormField>
        <div><button @click="resendCode()" class="text-red-400 text-sm">Resend Code</button></div>
        <h3 class="font-bold">
          Verification link has been sent to your email!
        </h3>
        <h3 class="font-bold">Verify to proceed</h3>
        <template #footer>
          <BaseLevel mobile class="flex justify-between">
            <div class="flex">
              <BaseButton
                @click="
                  () => handleSubmit()
                "
                label="Send"
                type="login"
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
