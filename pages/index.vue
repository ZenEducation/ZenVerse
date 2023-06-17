<script setup>
import { reactive } from "vue";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import { useRouter } from "vue-router";
import AuthNotificationBar from "@/components/NotificationBars/AuthNotificationBar.vue";
import SectionFullScreen from "@/components/Sections/SectionFullScreen.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import FormCheckRadio from "@/components/Forms/FormCheckRadio.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { useAuthStore } from "@/stores/authStore";

const form = reactive({
  email: "",
  password: "",
});
const router = useRouter();
const AuthStore = useAuthStore();
const errorMsg = ref('');

const notificationModal = ref(false)
const toggleNotificationModal = (val) => {
  notificationModal.value = val
}

const submit = async () => {
  try {
    const user_from_amplify = await AuthStore.login({
      email: form.email,
      password: form.password,
    });
    console.log(user_from_amplify);

    if (user_from_amplify) {
      router.push("/dashboard");
      return;
    }
  } catch (err) {
    errorMsg.value = err;
    toggleNotificationModal(true)
  }
};
</script>

<template>
  <div>
    <NuxtLayout>
      <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
        <CardBox :class="cardClass" is-form @submit.prevent="submit">
          <AuthNotificationBar :isVisible="notificationModal" @toggle="toggleNotificationModal" color="danger"
            :icon="mdiMail">
            {{ errorMsg }}
          </AuthNotificationBar>
          <FormField label="Login" help="Please enter your login">
            <FormControl v-model="form.email" :icon="mdiAccount" name="login" autocomplete="email" />
          </FormField>

          <FormField label="Password" help="Please enter your password">
            <FormControl v-model="form.password" :icon="mdiAsterisk" type="password" name="password"
              autocomplete="current-password" />
          </FormField>

          <FormCheckRadio v-model="form.remember" name="remember" label="Remember" :input-value="true" />

          <template #footer>
            <BaseButtons>
              <BaseButton type="submit" color="info" label="Login" />
              <BaseButton to="/register" color="info" outline label="Register" />
            </BaseButtons>
          </template>
        </CardBox>
      </SectionFullScreen>
    </NuxtLayout>
  </div>
</template>
