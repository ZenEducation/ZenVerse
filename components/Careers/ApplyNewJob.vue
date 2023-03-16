<template>
<div class="font-nunito text-base text-black dark:text-white dark:bg-slate-900">
    <!-- Start Hero -->
    <section class="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/job/job.jpg')] bg-no-repeat bg-center bg-cover">
        <div class="absolute inset-0 bg-black opacity-80"></div>
        <div class="container">
            <div class="grid grid-cols-1 pb-8 text-center mt-12">
                <h3 class="mb-4 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Senior Web Developer</h3>

                <ul class="list-none">
                    <li class="inline text-slate-400 ltr:mr-3 rtl:ml-3"><i class="uil uil-map-marker text-white h6 ltr:mr-1 rtl:ml-1"></i> London, UK - <span class="text-white">Full Time</span></li>
                </ul>
            </div>
            <!--end grid-->
        </div>
        <!--end container-->
        {{ formData }}
    </section>
    <!--end section-->
    <div class="relative">
        <div class="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden text-white dark:text-slate-900">
            <svg class="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
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
                                        <FormField label="Name" help="Required. Your name">
                                            <FormControl
                                              v-model="formData.name"
                                              name="username"
                                              required
                                              autocomplete="username"
                                            />
                                          </FormField>                                    </div>
                                </div>

                                <div class="lg:col-span-6">
                                    <div class="ltr:text-left rtl:text-right">
                                        <FormField label="E-mail" help="Required. Your e-mail">
                                            <FormControl
                                              v-model="formData.email"
                                              type="email"
                                              name="email"
                                              required
                                              autocomplete="email"
                                            />
                                          </FormField>                                    </div>
                                </div>

                                <div class="lg:col-span-6">
                                    <div class="ltr:text-left rtl:text-right">
                                        <FormField label="Phone No" help="Required. Phone No.:">
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
                                        <FormField label="Job Title:" help="Required. Your Job Title:">
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
                                    <FormField label="Types of Job:" help="Required. Your Job Title:">
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
                                        <FormField label="Your Comment" help="Required. Your comment">
                                            <FormControl
                                              v-model="formData.comment"
                                              type="textarea"
                                              name="email"
                                              required
                                              autocomplete="email"
                                            />
                                          </FormField>                                      </div>
                                </div>

                                <div class="lg:col-span-12">
                                        <FormField label="Upload file:" help="Max 500kb">
                                            <FormFilePicker label="Upload" />
                                        </FormField>
                                </div>
                            </div>
                            <button type="submit" @click.prevent="submitHandler" id="submit" name="send" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4">Send Message</button>
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
</template>


<script setup>
import { ref ,reactive } from "vue";
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
// import 

    const formData = ref({
      name: "",
      email: "",
      phone: "",
      jobTitle: "",
      jobType: "",
      comment: "",
      uploadFile: ""
    });

    const jobTypes = ref([
        "All Jobs","Full Time","Half Time","Remote","In Office"
    ])

    const submitHandler = () => {
        console.log(formData.value)
      if (validateRequired(formData.value.name) && validateEmail(formData.value.email) && validatePhone(formData.value.phone)) {
        console.log('Form submitted with data:', formData.value);
      } else {
        console.log('Invalid form');
      }
    };

    const validateRequired = (field) => {
      return !!field;
    };

    const validateEmail = (email) => {
        console.log(email)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        console.log(phone)
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone);
    };


</script>


<style scoped src="@/assets/css/tailwind/techwind.css">

</style>
