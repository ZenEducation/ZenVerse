<template>
  <NuxtLayout name="zen">
    <div class="font-nunito text-base">
      <!-- Start Hero -->
      <section class="relative table w-full py-36 lg:py-44 bg-black opacity-80 bg-no-repeat bg-center bg-cover">
        <div>
          <div class="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 class="mb-4 md:text-4xl text-xl md:leading-normal leading-normal font-medium text-white">
              Web Developer
            </h3>
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
              <div class="rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 p-6">
                <form>
                  <div class="grid lg:grid-cols-12 gap-6">
                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField label="Name" help="Required. Your name" :error="errorMsgs.name">
                          <FormControl v-model="formData.name" name="username" required autocomplete="username" />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField label="E-mail" help="Required. Your e-mail" :error="errorMsgs.email">
                          <FormControl v-model="formData.email" type="email" name="email" required autocomplete="email" />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField label="Phone No" help="Required. Phone No.:" :error="errorMsgs.phone">
                          <FormControl v-model="formData.phone" name="phone" required autocomplete="phone" />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField label="Job Title:" help="Required. Your Job Title:" :error="errorMsgs.jobTitle">
                          <FormControl v-model="formData.jobTitle" type="email" name="email" required
                            autocomplete="email" />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <FormField label="Types of Job:" help="Required. Your Job Type:" :error="errorMsgs.jobType">
                        <FormControl v-model="formData.jobType" type="select" name="email" required autocomplete="email"
                          :options="jobTypes" />
                      </FormField>
                    </div>


                    <!-- New Fields start -->
                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField label="Skills:" help="Required. Your skills" :error="errorMsgs.skills">
                          <FormControl v-model="formData.skills" type="text" name="skills" required />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField label="Date Of Birth:" help="Required. Your date of birth"
                          :error="errorMsgs.dateOfBirth">
                          <FormControl v-model="formData.dateOfBirth" type="date" name="dateOfBirth" required />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField label="Address:" help="Required. Address:" :error="errorMsgs.address">
                          <FormControl v-model="formData.address" type="text" name="address" required />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField label="City:" help="Required. Your city" :error="errorMsgs.city">
                          <FormControl v-model="formData.city" type="text" name="city" required />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField label="Country:" help="Required. Your country" :error="errorMsgs.country">
                          <FormControl v-model="formData.country" type="text" name="country" required />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField label="Postal Code:" help="Required. Your postal code" :error="errorMsgs.postalCode">
                          <FormControl v-model="formData.postalCode" type="number" name="postalCode" required />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField label="LinkedIn:" help="Your LinkedIn profile" :error="errorMsgs.linkedIn">
                          <FormControl v-model="formData.linkedIn" type="text" name="linkedIn" />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField label="GitHub:" help="Your GitHub profile" :error="errorMsgs.gitHub">
                          <FormControl v-model="formData.gitHub" type="text" name="gitHub" />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <FormField label="Experience:" help="Your experience" :error="errorMsgs.experience">
                        <FormControl v-model="formData.experience" type="textarea" name="experience" required />
                      </FormField>
                    </div>

                    <div class="lg:col-span-6">
                      <FormField label="Projects links:" help="Your project links" :error="errorMsgs.projects">
                        <FormControl v-model="formData.projects" type="text" name="projects" required />
                      </FormField>
                    </div>
                    <!-- New Fields end -->

                    <div class="lg:col-span-12">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField label="Your Comment" help="Required. Your comment" :error="errorMsgs.comment">
                          <FormControl v-model="formData.comment" type="textarea" name="email" required
                            autocomplete="email" />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-12">
                      <FormField label="Upload file:" help="Max 500kb , pdf">
                        <FormFilePicker label="Upload" accept=".pdf" />
                      </FormField>
                    </div>
                  </div>
                  <button type="submit" @click.prevent="submitHandler" id="submit" name="send"
                    class="btn p-3 bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4">
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
import { ref } from "vue";
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
  // new fields
  skills: "",
  dateOfBirth: "",
  city: "",
  country: "",
  postalCode: "",
  linkedIn: "",
  gitHub: "",
  experience: "",
  projects: "",
  address: "",
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
  // new fields
  skills: "",
  dateOfBirth: "",
  city: "",
  country: "",
  postalCode: "",
  linkedIn: "",
  gitHub: "",
  experience: "",
  projects: "",
  address: "",
});

const submitHandler = () => {
  validateRequired("name", formData.value.name);
  validateRequired("jobTitle", formData.value.jobTitle);
  validateRequired("jobType", formData.value.jobType);
  validateEmail(formData.value.email);
  validatePhone(formData.value.phone);
  // validate new fields
  validateRequired("dateOfBirth", formData.value.dateOfBirth);
  validateRequired("city", formData.value.city);
  validateRequired("country", formData.value.country);
  validateRequired("postalCode", formData.value.postalCode);
  validateRequired("experience", formData.value.experience);
  validateRequired("projects", formData.value.projects);
  validateRequired("address", formData.value.address);
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
