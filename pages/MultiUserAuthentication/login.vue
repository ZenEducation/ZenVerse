<template>
  <div class="">
    <NuxtLayout>
      <div class="bg-slate-900 flex mainSec  w-screen h-screen ">
        <div class="flex flex-1 justify-center items-center left_section">
          <div class="p-12 rounded  w-12/12 md:w-8/12  left_text_container">
            <div class="mb-6 ">
              <div class="flex justify-start items-center ">

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
        <div class="dark:bg-slate-800 flex justify-center flex-1 right_section items-center ">
          <div class="w-8/12 mx-auto px-2">
            <div class="w-full">
              <div class="text-2xl font-bold text-white text-center">Hay, hello
                <BaseIcon :path="mdiHandWaveOutline" size="20" h="" w=""
                  class=" cursor-pointer text-left text-yellow-400" />
              </div>
              <div class="text-[#ccc] text-center">
                Enter the information you entered while registering
              </div>
              <div class="">
                <PremFormField label="Email" horizontal class="text-white ">
                  <PremFormControl :icon-left="mdiMail" class="text-black" :icon-right="mdiCheck" type="email"
                    help="Your e-mail" placeholder="Email" />
                </PremFormField>
                <PremFormField label="Password" horizontal class="text-white mt-0">
                  <PremFormControl type="password" class="text-black" name="password" placeholder="Password" />
                </PremFormField>
                <div class="flex justify-between items-center password">
                  <FormCheckRadioGroup name="sample-checkbox-two" component-class="text-white" :options="checkboxOptions"
                    is-column />

                  <div class="text-blue-500 cursor-pointer">
                    Forget Password ?
                  </div>
                </div>
                <BaseButton label="Login" type="button" color="info" class="uppercase mt-1" :style="[]" :icon="mdiPlus"
                  widthFull />
                <div class="flex justify-center items-center">
                  <BaseDivider />
                  <div class=" text-[#ccc] ">or</div>
                  <BaseDivider />
                </div>
                <BaseButton label="Sign in with google" type="button" color="info" class="uppercase  text-center"
                  :style="[]" outline />

                <div class=" mt-2 mb-2 text-sm text-[#ccc] text-center ">
                  Don’ t have an account? Register
                  <!-- <div class=""></div> -->
                  <BaseIcon :path="mdiArrowDownThin" size="20" class=" cursor-pointer text-left" />
                </div>
                <div class="grid grid-cols-3 registerBtns gap-2 my-1 text-center">
                  <div class=" bottomBtn rounded text-sm" v-for="(item, idx) in catagories" :key="idx"
                    :class="'bg' + idx">

                    <div class="layer uppercase rounded py-3 font-bold text-[#ccc] flex items-center justify-center ">
                      {{ item.name }}
                    </div>

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

const checkboxOptions = { remember: "Remember Me" };

import { mdiMenuRight, mdiArrowDownThin, mdiHandWaveOutline } from "@mdi/js";
const passShowHideClicked = ref(false);

const catagories = [
  {
    id: 1,
    name: "Educator",
    link: "",
    img: "eductor.jpg"
  },
  {
    id: 2,
    name: "Educarer",
    link: "",
    img: "teacher2.jpg"

  }, {
    id: 3,
    name: "Student",
    link: "",
    img: "Student.jpg"

  }, {
    id: 4,
    name: "Guardian",
    link: "",
    img: "guardian.jpg"

  }, {
    id: 5,
    name: "Admin",
    link: "",
    img: "admin.jpg"

  }, {
    id: 6,
    name: "Development",
    link: "",
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
  height: 100%;

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
  flex-wrap: wrap;
  flex-direction: row;
}

.left_text_container {
  background: rgba(218, 211, 211, 0.253);

}

@media screen and (max-width: 900px) {
  .mainSec {
    display: flex;
    flex-direction: column;
    height: max-content;
  }

  .left_section {
    padding: 0.7em;
  }

  .right_section {
    padding: 0.7em;
  }

  .password {
    flex-direction: column;
    align-items: start;
    gap: 0.7em;
  }

  .layer {
    font-size: 0.8rem;

  }

  .registerBtns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
