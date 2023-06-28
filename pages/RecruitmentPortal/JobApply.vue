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
                        <FormField label="Monthly Rate" help="Required. Monthly Rate" :error="errorMsgs.monthlyrate">
                          <FormControl v-model="formData.monthlyrate" name="monthlyrate" required type="Number"
                            autocomplete="monthlyrate" />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField label="Country" help="Required. Your country" :error="errorMsgs.country">
                          <FormControl v-model="formData.country" name="usercountry" required
                            autocomplete="usercountry" />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField label="City" help="Required. Your city" :error="errorMsgs.city">
                          <FormControl v-model="formData.city" name="city" required autocomplete="city" />
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
                        <FormField label="Links" help="Required. Social Media Links such as LinkedIn, GitHub."
                          :error="errorMsgs.linked">
                          <FormControl v-model="formData.linked" name="userlinks" required autocomplete="username" />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField label="Job Title:" help="Required. Your Job Title:" :error="errorMsgs.jobTitle">
                          <FormControl v-model="formData.jobTitle" type="text" name="jobTitle" required
                            autocomplete="jobTitle" />
                        </FormField>
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <FormField label="Types of Job:" help="Required. Your Job Type:" :error="errorMsgs.jobType">
                        <FormControl v-model="formData.jobType" type="select" name="jobType" required
                          autocomplete="jobType" :options="jobTypes" />
                      </FormField>
                    </div>

                    <div class="lg:col-span-12">
                      <div class="ltr:text-left rtl:text-right">
                        <FormField label="Your address" help="Required. Your address" :error="errorMsgs.address">
                          <FormControl v-model="formData.address" type="textarea" name="address" required
                            autocomplete="address" />
                        </FormField>
                      </div>
                    </div>
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
                  <button type="submit" @click.prevent="createApplicant" id="submit" name="send"
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



const jobTypes = ref([
  "Full_Time",
  "Half_Time",
  "Part_Time",
  "Internship",
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
const generateRandomId = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];
  }
  return id;
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

const formData = ref({
  name: "",
  email: "",
  mobile: "",
  cover: "",
  resumeUri: "",
  applicantJobId: "jobId123", // Replace with the actual job ID
});

const createApplicant = async () => {
  const applicantId = generateRandomId();
  const mutation = `
    mutation CreateApplicant($input: CreateApplicantInput!) {
      createApplicant(input: $input) {
        applicantId
        name
        email
        mobile
        cover
        address
        country
        city
        resumeUri
        jobTitle
        jobType
        monthlyRate
        comment
        createdAt
        skills

      }
    }
  `;

  const variables = {
    input: {
      applicantId,
      name: formData.value.name,
      email: formData.value.email,
      mobile: formData.value.phone,
      cover: formData.value.cover,
      city: formData.value.city,
      country: formData.value.country,
      address: formData.value.address,
      resumeUri: formData.value.linked,
      applicantJobId: formData.value.applicantJobId,
      jobTitle: formData.value.jobTitle,
      jobType: formData.value.jobType,
      monthlyRate: formData.value.monthlyrate,
      comment: formData.value.comment,
      skills: ['PHP', 'Python']
    },
  };

  const response = await fetch('https://aljw4fgbzrgkjkntp2yvc2dzgm.appsync-api.ap-south-1.amazonaws.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'da2-abaq7ccxdnf6vb7w4tux65kg5q',
    },
    body: JSON.stringify({ query: mutation, variables }),
  });

  const { data } = await response.json();
  console.log(data.createApplicant); // Handle the response data as needed
};

// const submitHandler = () => {
//   // Validate form fields before creating the applicant
//   if (validateForm()) {
//     createApplicant();
//   }
// };

const validateForm = () => {
  // Perform form validation here
  // Return true if the form is valid, otherwise false
};

// Other form validation and helper functions

</script>