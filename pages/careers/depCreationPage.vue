<template>
  <section class="relative md:py-24 py-16">
    <div class="container">
      <div class="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
        <div class="lg:col-start-2 lg:col-span-10">
          <div
            class="rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 p-6"
          >
            <form @submit.prevent="submitForm">
              <div class="grid lg:grid-cols-12 gap-6">
                <div class="lg:col-span-6">
                  <div class="ltr:text-left rtl:text-right">
                    <label for="name" class="font-semibold">Name:</label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      class="form-input mt-3"
                      placeholder="Name :"
                      v-model="name"
                    />
                    <div v-if="nameError" class="error-message">
                      {{ nameError }}
                    </div>
                  </div>
                </div>

                <div class="lg:col-span-12">
                  <div class="ltr:text-left rtl:text-right">
                    <label for="description" class="font-semibold"
                      >Description:</label
                    >
                    <textarea
                      name="description"
                      id="description"
                      class="form-input mt-3 h-28"
                      placeholder="Message :"
                      v-model="description"
                    ></textarea>
                    <div v-if="descriptionError" class="error-message">
                      {{ descriptionError }}
                    </div>
                  </div>
                </div>
                <div class="lg:col-span-12">
                  <label class="font-semibold" for="resumefile"
                    >Upload file:</label
                  >
                  <input
                    class="form-input mt-3"
                    id="resumefile"
                    type="file"
                    accept="image/*"
                    size="5242880"
                  />
                </div>
              </div>
              <button
                @clcik="submit"
                type="submit"
                id="submit"
                name="send"
                class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4"
              >
                Department
              </button>
            </form>
            <!--end form-->
          </div>
        </div>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
    <!--end container-->
  </section>
  <!--end section-->
</template>

<script>
import * as Yup from "yup";

export default {
  data() {
    return {
      name: "",
      description: "",
      nameError: "",
      descriptionError: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required("Name is required"),
          description: Yup.string().required("Description is required"),
        });

        await schema.validate(
          { name: this.name, description: this.description },
          { abortEarly: false }
        );

        alert("Form is valid! Submitting data...");
        // Submit form data to server or perform other actions
      } catch (error) {
        if (error.name === "ValidationError") {
          error.inner.forEach((fieldError) => {
            if (fieldError.path === "name") {
              this.nameError = fieldError.message;
            } else if (fieldError.path === "description") {
              this.descriptionError = fieldError.message;
            }
          });
        } else {
          console.error(error);
        }
      }
    },
  },
};
</script>

<style>
@import "../../assets/css/tailwind/tailwind.css";
@import "../../assets/css/tailwind/icons.css";
.error-message {
  color: red;
  font-size: 1rem;
  font-weight: 500;
  background: rgba(250, 234, 234);
  padding: 0.5rem;
  border: 1px rgba(255, 0, 0, 0.5) solid;
  margin-top: 0.5rem;
  border-radius: 5px;
}
</style>
