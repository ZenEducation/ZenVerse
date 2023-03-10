<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import SectionFullScreen from "@/components/Sections/SectionFullScreen.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import FormCheckRadio from "@/components/Forms/FormCheckRadio.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import { useAuthStore } from "@/stores/authStore";
import { useGraphqlAPIStore } from "@/stores/graphqlAPI";

const form = reactive({
  loginEmail: "",
  password: "",
  code: "",
});

// const form = reactive({
//   loginEmail: "shahzain30196@gmail.com",
//   password: "Zenithathang@gmail.com@99",
//   remember: true,
// });

const router = useRouter();

const AuthStore = useAuthStore();

const userSubmitted = ref(false);
const GraphqlAPIStore = useGraphqlAPIStore();

const handleSubmit = async () => {
  if(userSubmitted.value) {
    try {
        const reset_password = await AuthStore.forgotPasswordSubmit({
        email: form.loginEmail,
        code: form.code,
        new_password: form.password
      });
      console.log(reset_password)
      router.push('/auth/login')
    }catch (err) {
        console.log(err)
    }
 }
  // call the login method from the Authstore
  if(!userSubmitted.value) {
    try{
        const user_from_amplify = await AuthStore.forgetPassword({
          email: form.loginEmail,
        });
        console.log(user_from_amplify)
        
        if (user_from_amplify) {
          userSubmitted.value = true
        }
    }catch(err) {
        console.log(err)
    }
  }

};
</script>

<template>
  <div>
    <NuxtLayout>
      <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
        <CardBox :class="cardClass" is-form @submit.prevent="handleSubmit">
          <FormField label="Email" help="Please enter your Email">
            <FormControl
              v-model="form.loginEmail"
              :icon="mdiAccount"
              name="Email"
              autocomplete="username"
            />
          </FormField>

          <FormField v-if="userSubmitted" label="Code" help="Click icon to show/hide">
            <FormControl v-model="form.code" type="text" name="code" placeholder="Enter Code"
              autocomplete="code" />
          </FormField>

          <FormField v-if="userSubmitted" label="New Password" help="Click icon to show/hide">
            <FormControl v-model="form.password" type="password" name="password" placeholder="New Password"
              autocomplete="new-password" />
          </FormField>

          <template #footer>
            <div class="flex justify-between">
              <BaseButtons>
                <BaseButton type="submit" color="info" label="Send" />
              </BaseButtons>
            </div>
          </template>
        </CardBox>
      </SectionFullScreen>
    </NuxtLayout>
  </div>
</template>
