<template>
  <div class="">
    <NuxtLayout>
      <div class="bg-slate-900 grid grid-cols-1 md:grid-cols-2 w-screen h-screen ">
        <div class="hidden md:flex justify-center items-center left_section">
          <div class="p-12 rounded  w-12/12 md:w-9/12  left_text_container">
            <div class="mb-6 ">
              <div class="flex justify-start items-center ">
                <!-- <BaseIcon
          :path="mdiMenuRight "
          size="60"
          h=""
          w=""
          class=" cursor-pointer text-left"
        /> -->
                <div class="text-4xl font-bold">Digital</div>
              </div>
              <div class="text-4xl font-bold mt-1">Platform</div>
              <div class="text-4xl font-bold mt-1">for distance</div>
              <div class="text-4xl font-bold mt-1 text-slate-900">learing</div>
              <div class="mt-8">You will never know everything</div>
              <div class="mt-1">But you will know more</div>
            </div>
          </div>
        </div>

        <div class="dark:bg-slate-800 flex justify-start items-center p-3 ">

          <div class="w-10/12 mx-auto px-1">
            <AuthNotificationBar class="p-1" :isVisible="notificationModal" @toggle="toggleNotificationModal"
              color="danger" :icon="mdiMail">
              {{ errorMsg }}
            </AuthNotificationBar>
            <div class="w-full">
              <div class="text-2xl font-bold">Hay, hello
                <BaseIcon :path="mdiHandWaveOutline" size="20" h="" w=""
                  class=" cursor-pointer text-left text-yellow-400" />
              </div>
              <div class="">
                Enter the information you entered while registering
              </div>
              <div class="mt-2" is-form @submit.prevent="submit">
                <PremFormField label="Email" horizontal>
                  <PremFormControl :icon-left="mdiMail" :icon-right="mdiCheck" v-model="form.email" name="login"
                    :icon="mdiAccount" autocomplete="email" placeholder="Enter your email" />
                </PremFormField>
                <PremFormField label="Password" horizontal>
                  <PremFormControl v-model="form.password" :icon="mdiAsterisk" type="password" name="password"
                    autocomplete="current-password" placeholder="Password" />
                </PremFormField>
                <div class="flex justify-between items-center">
                  <FormCheckRadioGroup :options="checkboxOptions" is-column v-model="form.remember" name="remember"
                    label="Remember" :input-value="true" />

                  <div class="text-blue-500 cursor-pointer">
                    Forget Password ?
                  </div>
                </div>
                <BaseButton label="Login" type="button" @click="submit()" color="info"
                  class="uppercase mt-4 w-9/12 mx-auto rounded" :style="[]" :icon="mdiPlus" widthFull />
                <div class="flex justify-center items-center">
                  <BaseDivider />
                  <div class="">or</div>
                  <BaseDivider />
                </div>
                <div class="flex justify-center items-center">
                  <BaseButton label="Google" @click="() => Auth.federatedSignIn({ provider: 'Google' })" type="button"
                    color="info" class="uppercase text-center m-1" :style="[]" outline>
                    <i class="fab fa-google"></i> Google
                  </BaseButton>

                  <BaseButton label="Facebook" @click="() => Auth.federatedSignIn({ provider: 'Facebook' })" type="button"
                    color="info" class="uppercase text-center m-1" :style="[]" outline>
                    <i class="fab fa-facebook"></i> Facebook
                  </BaseButton>
                </div>
                <div class="flex items-center justify-start mt-2">
                  Don’ t have an account? Register
                  <div class=""></div>
                  <BaseIcon :path="mdiArrowDownThin" size="20" h="" w="" class=" cursor-pointer text-left" />
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 p-1 gap-1 mt-2 text-center">

                  <div class=" bottomBtn rounded" v-for="(item, idx) in catagories" :key="idx" :class="'bg' + idx">
                    <NuxtLink :to="item.link">
                      <div class=" p-5 layer uppercase rounded font-bold ">
                        {{ item.name }}
                      </div>
                    </NuxtLink>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import BaseIcon from "@/components/Display/BaseIcon.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
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
import { useAuthStore } from "@/stores/authStore";
import { mdiMenuRight, mdiArrowDownThin, mdiHandWaveOutline } from "@mdi/js";
import login from "@/components/Auth/login/login.vue"
import { Auth } from 'aws-amplify'
const getSession = () => {
  Auth.currentSession().then(() => navigateTo('/dashboard'))
}
onMounted(() => {
  getSession()
})
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
    console.log("hello working");
    const user_from_amplify = await AuthStore.login({
      email: form.email,
      password: form.password,
    });
    console.log(user_from_amplify);

    if (user_from_amplify) {
      router.push(`/dashboard/${user_from_amplify.attributes["custom:role"]}`);
      return;
    }
  } catch (err) {
    errorMsg.value = err;
    toggleNotificationModal(true)
  }
};


const checkboxOptions = { remember: "Remember Me" };


const passShowHideClicked = ref(false);

const catagories = [
  {
    id: 1,
    name: "Educator",
    link: "/register/educator",
    img: "eductor.jpg"
  },
  {
    id: 2,
    name: "Educarer",
    link: "/register/educarer",
    img: "teacher2.jpg"

  }, {
    id: 3,
    name: "Student",
    link: "/register/student",
    img: "Student.jpg"

  }, {
    id: 4,
    name: "Guardian",
    link: "/register/guardian",
    img: "guardian.jpg"

  }, {
    id: 5,
    name: "Admin",
    link: "/register/admin",
    img: "admin.jpg"

  }, {
    id: 6,
    name: "Developer",
    link: "/register/developer",
    img: "dev.jpg"

  },

]



const backgroundImage = (name) => {
  return `url("${'@/assets/img/MultiUserAuthentication/' + name}")`
}


</script>

<style scoped>
.bottomBtn {
  background-image: url('@/assets/img/MultiUserAuthentication/dev.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
}

.layer {
  background: rgba(0, 0, 0, 0.685);
}

.bg0 {
  background-image: url('@/assets/img/MultiUserAuthentication/eductor.jpg');

}

.bg1 {
  background-image: url('@/assets/img/MultiUserAuthentication/teacher2.jpg');

}

.bg2 {
  background-image: url('@/assets/img/MultiUserAuthentication/Student.jpg');

}

.bg3 {
  background-image: url('@/assets/img/MultiUserAuthentication/guardian.jpg');

}

.bg4 {
  background-image: url('@/assets/img/MultiUserAuthentication/admin.jpg');

}

.bg5 {
  background-image: url('@/assets/img/MultiUserAuthentication/dev.jpg');

}

.left_section {
  background-image: url('@/assets/img/MultiUserAuthentication/login-background.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.left_text_container {
  background: rgba(218, 211, 211, 0.253);

}
</style>
