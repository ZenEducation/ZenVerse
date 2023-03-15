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
                                        <label for="name" class="font-semibold">Your Name:</label>
                                        <input v-model="formData.name" name="name" id="name" type="text" class="form-input mt-3" placeholder="Name :">
                                    </div>
                                </div>

                                <div class="lg:col-span-6">
                                    <div class="ltr:text-left rtl:text-right">
                                        <label for="email" class="font-semibold">Your Email:</label>
                                        <input v-model="formData.email" name="email" id="email" type="email" class="form-input mt-3" placeholder="Email :">
                                    </div>
                                </div>

                                <div class="lg:col-span-6">
                                    <div class="ltr:text-left rtl:text-right">
                                        <label for="subject" class="font-semibold">Phone No.:</label>
                                        <input v-model="formData.phone" name="number" id="phonenumber" class="form-input mt-3" placeholder="Phone No. :">
                                    </div>
                                </div>

                                <div class="lg:col-span-6">
                                    <div class="ltr:text-left rtl:text-right">
                                        <label for="subject" class="font-semibold">Job Title:</label>
                                        <input v-model="formData.jobTitle" name="subject" id="subject" class="form-input mt-3" placeholder="Job title :">
                                    </div>
                                </div>

                                <div class="lg:col-span-6">
                                    <label for="typejob" class="font-semibold">Types of Job:</label>
                                    <select v-model="formData.jobType" id="typejob" class="form-input mt-3">
                                        <option>All Jobs</option>
                                        <option>Full Time</option>
                                        <option>Half Time</option>
                                        <option>Remote</option>
                                        <option>In Office</option>
                                    </select>
                                </div>

                                <div class="lg:col-span-12">
                                    <div class="ltr:text-left rtl:text-right">
                                        <label for="comments" class="font-semibold">Your Comment:</label>
                                        <textarea v-model="formData.comment" name="comments" id="comments" class="form-input mt-3 h-28" placeholder="Message :"></textarea>
                                    </div>
                                </div>

                                <div class="lg:col-span-12">
                                    <label class="font-semibold" for="resumefile">Upload file:</label>
                                    <input  class="form-input mt-3" id="resumefile" type="file">
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
        {{ formData }}
    </section>
    <!--end section-->
    <!-- End Section-->
</div>
</template>

<script>
export default {
    name:'ApplyNewJob',
    data(){
        return{
            formData:{
                name:"",
                email:"",
                phone:"",
                jobTitle:"",
                jobType:"",
                comment:"",
                uploadFile:""
            }
        }
    },
    methods:{
        submitHandler(){
            console.log(this.formData);
        }
    }


}
</script>

<style scoped src="@/assets/css/tailwind/techwind.css">

</style>
