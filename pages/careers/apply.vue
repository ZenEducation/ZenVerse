<template>
  <NuxtLayout name="zen">
    <div class="font-nunito text-base">
      <!-- Start Hero -->
      <section
        class="relative table w-full py-36 lg:py-44 bg-no-repeat bg-center bg-cover"
      >
        <div class="absolute inset-0 bg-black opacity-80"></div>
        <div class="container">
          <div class="grid grid-cols-1 pb-8 text-center mt-12">
            <h3
              class="mb-4 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white"
            >
              Senior Web Developer
            </h3>

            <ul class="list-none">
              <li class="inline text-slate-400 ltr:mr-3 rtl:ml-3">
                <i
                  class="uil uil-map-marker text-white h6 ltr:mr-1 rtl:ml-1"
                ></i>
                London, UK - <span class="text-white">Full Time</span>
              </li>
            </ul>
          </div>
          <!--end grid-->
        </div>
        <!--end container-->
      </section>
      <!--end section-->

      <!-- End Hero -->

      <!-- Start Section-->
      <section class="relative md:py-24 py-16">
        <div class="container">
          <div class="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
            <div class="lg:col-start-2 lg:col-span-10">
              <div
                class="rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 p-6"
              >
                <form>
                  <div class="grid lg:grid-cols-12 gap-6">
                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField
                          label="Name"
                          help="Required. Your name"
                          :error="errorMsgs.name"
                        >
                          <FormControl
                            v-model="formData.name"
                            name="username"
                            required
                            autocomplete="username"
                          />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField
                          label="E-mail"
                          help="Required. Your e-mail"
                          :error="errorMsgs.email"
                        >
                          <FormControl
                            v-model="formData.email"
                            type="email"
                            name="email"
                            required
                            autocomplete="email"
                          />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField
                          label="Phone No"
                          help="Required. Phone No.:"
                          :error="errorMsgs.phone"
                        >
                          <FormControl
                            v-model="formData.phone"
                            name="phone"
                            required
                            autocomplete="phone"
                          />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField
                          label="Job Title:"
                          help="Required. Your Job Title:"
                          :error="errorMsgs.jobTitle"
                        >
                          <FormControl
                            v-model="formData.jobTitle"
                            type="email"
                            name="email"
                            required
                            autocomplete="email"
                          />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <FormField
                        label="Types of Job:"
                        help="Required. Your Job Type:"
                        :error="errorMsgs.jobType"
                      >
                        <FormControl
                          v-model="formData.jobType"
                          type="select"
                          name="email"
                          required
                          autocomplete="email"
                          :options="jobTypes"
                        />
                      </FormField>
                    </div>

                    <div class="lg:col-span-12">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField
                          label="Your Comment"
                          help="Required. Your comment"
                          :error="errorMsgs.comment"
                        >
                          <FormControl
                            v-model="formData.comment"
                            type="textarea"
                            name="email"
                            required
                            autocomplete="email"
                          />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-12">
                      <FormField label="Upload file:" help="Max 500kb">
                        <FormFilePicker label="Upload" accept=".pdf" />
                      </FormField>
                    </div>
                  </div>
                  <button
                    type="submit"
                    @click.prevent="submitHandler"
                    id="submit"
                    name="send"
                    class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4"
                  >
                    Send Message
                  </button>
                </form>
                <!--end form-->
              </div>
            </div>
          </div>
          <!--end grid-->
        </div>
        <!--end container-->
        <!-- {{ formData }} -->
      </section>
      <!--end section-->
      <!-- End Section-->
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useMainStore } from "@/stores/main";
import {
  mdiAccount,
  mdiMail,
  mdiAsterisk,
  mdiFormTextboxPassword,
  mdiCreditCardOutline,
} from "@mdi/js";
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import FormFilePicker from "@/components/Forms/FormFilePicker.vue";

const formData = ref({
  name: "",
  email: "",
  phone: "",
  jobTitle: "",
  jobType: "",
  comment: "",
  uploadFile: "",
});

const jobTypes = ref([
  "All Jobs",
  "Full Time",
  "Half Time",
  "Remote",
  "In Office",
]);

const errorMsgs = ref({
  name: "",
  email: "",
  phone: "",
  jobTitle: "",
  jobType: "",
  comment: "",
  uploadFile: "",
});

const submitHandler = () => {
  validateRequired("name", formData.value.name);
  validateRequired("jobTitle", formData.value.jobTitle);
  validateRequired("jobType", formData.value.jobType);
  validateEmail(formData.value.email);
  validatePhone(formData.value.phone);
};

const validateRequired = (field, val) => {
  if (!val) {
    errorMsgs.value[field] = "Required field";
    return false;
  }
  errorMsgs.value[field] = "";
  return true;
};

const validateEmail = (email) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRegex.test(email)) {
    errorMsgs.value.email = "Invalid email";
    return false;
  }
  errorMsgs.value.email = "";
  return true;
};

const validatePhone = (phone) => {
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    errorMsgs.value.phone = "Invalid phone";
    return false;
  }
  errorMsgs.value.phone = "";
  return true;
};
</script>

<style scoped src="@/assets/css/tailwind/techwind.css"></style>
