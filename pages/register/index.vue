
<script setup>
import { reactive, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import SignUp from "@/components/Auth/Register/SignUp.vue";
import EmailVerification from "@/components/Auth/Register/EmailVerification.vue";

import { Auth } from 'aws-amplify'

const router = useRouter();
const AuthStore = useAuthStore();
const verificationPage = ref(false);
const userEmail = ref()
const setEmail = (email) => {
  console.log(email)
  userEmail.value = email
}
onUnmounted(() => {
  console.log('unmounted hit')
  userEmail.value = null
  verificationPage.value = false
})
</script>

<template>
  <NuxtLayout>
    <SignUp v-if="!userEmail" @setEmail = "setEmail"/>
    <EmailVerification v-else :email="userEmail" @setEmail = "setEmail"/>
  </NuxtLayout>
</template>
