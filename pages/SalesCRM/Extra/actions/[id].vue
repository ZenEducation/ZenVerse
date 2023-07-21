<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <!-- landing section -->
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6 px-6 pt-6">
          <CardBox class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3">
            <div class="grid lg:grid-cols-12 sm:grid-cols-1  gap-4 bg-red w-full">
              <div class=" text-center h-full flex  w-full lg:col-span-3 md:col-span-3 sm:col-span-1">
                <UserAvatarCurrentUserWithUpload
                  class="w-24 h-24 md:w-36 md:h-36 mx-auto my-auto"
                />
              </div>
              <!-- ... -->
              <div class="lg:col-span-6 sm:col-span-6 ">
                <!-- name -->
                <div class="inpitfield">
                  <div class="flex">
                    <span class="mr-5 mt-3"> Name</span>
                    <PremFormField class="ml-10" horizontal>
                      <PremFormControl
                        help="Your full name"
                        placeholder="Name"
                      />
                    </PremFormField>
                    <span class="ml-5 mt-3"> Edit</span>
                  </div>
                </div>

                <!-- email -->

                <div class="inpitfield">
                  <div class="flex">
                    <span class="mr-5 mt-3">Email </span>
                    <PremFormField class="ml-11" horizontal>
                      <PremFormControl help="Email Id" placeholder="Email Id" />
                    </PremFormField>
                    <span class="ml-5 mt-3"> Edit</span>
                  </div>
                </div>

                <!-- phone -->

                <div class="inpitfield">
                  <div class="flex">
                    <span class="mr-5 mt-3">Phone</span>
                    <PremFormField class="ml-9" horizontal>
                      <PremFormControl help="Your Phone " placeholder="Phone" />
                    </PremFormField>
                    <span class="ml-5 mt-3"> Edit</span>
                  </div>
                </div>

                <!-- password -->

                <div class="inpitfield">
                  <div class="flex">
                    <span class="mr-5 mt-3"> Password</span>
                    <PremFormField class="ml-3" horizontal>
                      <PremFormControl
                        help="Your password"
                        placeholder="password"
                      />
                    </PremFormField>
                    <span class="ml-5 mt-3"> Edit</span>
                  </div>
                </div>

                <!-- subcrims  -->
                <div class="inpitfield">
                  <div class="flex">
                    <span class="mr-5 mt-3"> Subcrim's</span>
                    <PremFormField class="ml-3" horizontal>
                      <PremFormControl
                        help="Your Subcrim's"
                        placeholder="Subcrim's"
                      />
                    </PremFormField>
                    <span class="ml-5 mt-3"> Edit</span>
                  </div>
                </div>

                <!-- source  -->

                <div class="inpitfield">
                  <div class="flex">
                    <span class="mr-5 mt-3"> source</span>
                    <PremFormField class="ml-8" horizontal>
                      <PremFormControl help="source" placeholder="Source" />
                    </PremFormField>
                    <span class="ml-5 mt-3"> Edit</span>
                  </div>
                </div>
              </div>

              <!-- right dropdown -->
              <div class="lg:col-span-3 sm:col-span-3 xs:col-span-12 text-center ">
                <PremFormField help="" horizontal>
                  <PremFormControl
                    v-model="firstValue"
                    type="list"
                    :options="itemDropDown"
                  />
                </PremFormField>

                <!-- icon text section -->
                <div class="flex">
                  <div>
                    <BaseIcon :path="mdiSquareEditOutline" size="20" class="" />
                  </div>
                  <div class="ml-2">31-08-2023</div>
                </div>

                <div class="flex mt-2 text-red-500">
                  <div>
                    <BaseIcon :path="mdiTimerSand" size="22" class="" />
                  </div>

                  <div class="ml-2">11 Days Delay</div>
                </div>

                <!-- social icons -->

                <div class="flex mt-3">
                  <BaseIcon
                    :path="mdiEmailOutline"
                    size="30"
                    class=""
                    h="30"
                    w="30"
                  />
                  <BaseIcon
                    :path="mdiWhatsapp"
                    size="30"
                    h="30"
                    w="30"
                    class="ml-2 mr-1"
                  />
                  <BaseIcon :path="mdiShareVariant" size="30" h="30" w="30" />
                </div>
              </div>
            </div>
          </CardBox>
        </div>

        <!-- dropdown filter -->
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6 px-6">
          <CardBox class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3">
            <PremFormField help="" horizontal>
              <PremFormControl
                v-model="hybrideValue"
                type="list"
                :options="hybrideDropDownItems"
              />
            </PremFormField>
          </CardBox>
        </div>

        <!-- task summary -->
        <div
          class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6 px-6"
          v-if="hybrideValue == 'Task Summary'"
        >
          <CardBox class="mb-6 pb-4 lg:mb-0 lg:col-span-2 xl:col-span-3">
            <h2 class="text-center text-2xl">Task Summary</h2>

            <div class="flex justify-between items-center mt-6">
              <div>
                <div class="flex justify-between items-center">
                  <BaseIcon
                    :path="mdiMagnify"
                    size="22"
                    class="mr-2 text-red-500"
                  />
                  Filter Tasks
                </div>
                <div
                  class="teskfilter_Underline w-full h-0.5 mt-2 bg-red-500"
                ></div>
              </div>
              <div>Clear Filter</div>
            </div>

            <div class=" grid flex justify-between items-center lg:flex-row md:flex-col sm:flex-col xs:flex-col lg:grid-cols-2">
              <div class="flex justify-start items-center mt-4 w-full grid lg:grid-cols-2">
                <div class=" mt-2">
                  <PremFormField help="" horizontal label="Select Tasks">
                    <PremFormControl
                      v-model="tasks"
                      type="list"
                      :options="SelectTasksItems"
                    />
                  </PremFormField>
                </div>
                <div class="mt-2 xl:ml-2">
                  <PremFormField help="" label="Search By Subject" horizontal>
                    <PremFormControl placeholder="Search By Subject" />
                  </PremFormField>
                </div>
              </div>
              <div class="mt-6 text-right">
                <BaseButton
                  color="info"
                  label="CSV Export"
                  class="inline mx-1 my-1"
                />
                <BaseButton
                  color="info"
                  label="Task Report"
                  class="inline mx-1 my-1"
                />
              </div>
            </div>
          </CardBox>
        </div>

        <!-- Profiling -->
        <div>

  </div>
  <!-- What do you want to study Abroad ? -->

        <div
          class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6 px-6"
          v-if="hybrideValue == 'Profiling'"
        >
          <CardBox class="mb-6 pb-4 lg:mb-0 lg:col-span-2 xl:col-span-3">
            <h2 class="text-center text-2xl">
              What do you want to study Abroad ?
              <span class="text-underline">Select an Option</span>
            </h2>

            <div class="flex justify-center items-center mt-10">
    


              <div class="lg:mx-5 md:mx-3 sm:mx-2 xs:mx-1">
                <div class="iconHolder flex justify-center items-center"  @click="showFrom('blue')"
                :class="{ active: state.bgColor === 'blue' }"
                >
                  <BaseIcon
                    :path="mdiCompass"
                    size="50"
                    h="50"
                    w="50"
                    class="ml-2 mr-1 text-slate-500"
                    :class="{ active: state.bgColor === 'blue',border:state.bgColor === 'blue' }"
                  />
                </div>
                <div class="text-center mt-2 text-slate-500" :class="{ active: state.bgColor === 'blue',border:state.bgColor === 'blue' }">Bachelors</div>
              </div>
              <div class="lg:mx-5 md:mx-3 sm:mx-2 xs:mx-1 ">
                <div class="iconHolder flex justify-center items-center"
                @click="showFrom('green')"
                :class="{ active: state.bgColor === 'green' }"
                >
                  <BaseIcon
                    :path="mdiCompass"
                    size="50"
                    h="50"
                    w="50"
                    class="ml-2 mr-1 text-slate-500"
                    :class="{ active: state.bgColor === 'green',border:state.bgColor === 'green' }"
                  />
                </div>
                <div class="text-center mt-2 text-slate-500"   :class="{ active: state.bgColor === 'green',border:state.bgColor === 'green' }">Masters</div>
              </div>
              <div class="llg:mx-5 md:mx-3 sm:mx-2 xs:mx-1">
                <div class="iconHolder flex justify-center items-center"  @click="showFrom('red')"  :class="{ active: state.bgColor === 'red' }">
                  <BaseIcon
                    :path="mdiCompass"
                    size="50"
                    h="50"
                    w="50"
                    class="ml-2 mr-1 text-slate-500"
                    :class="{ active: state.bgColor === 'red',border:state.bgColor === 'red' }"
                  />
                </div>
                <div class="text-center mt-2 text-slate-500"  :class="{ active: state.bgColor === 'red',border:state.bgColor === 'red' }">Doctorial</div>
              </div>
            </div>
          </CardBox>
        </div>
<!-- forms  -->
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6 px-6" v-if="forms && hybrideValue == 'Profiling'">
          <CardBox class="mb-6 pb-4 lg:mb-0 lg:col-span-2 xl:col-span-3">
            <!-- Preferred Intake -->
            <div class="from_Holder">
              <div class="Panel">
                <div class="corner-ribbon">
                  <span class="cr-inner">
                    <span class="cr-text text-center"><strong>1</strong></span>
                  </span>
                </div>
              </div>
              <div class="text-md p-10 lg:ml-12">
                <PremFormField label="Preferred Intake" help="" horizontal>
                  <FormCheckRadioGroup
                    name="sample-radio-two"
                    type="radio"
                    :options="PreferredIntake"
                    is-column
                  />
                </PremFormField>
              </div>
            </div>
            <!-- Ypur combind score -->
            <div class="from_Holder mt-6">
              <div class="Panel">
                <div class="corner-ribbon">
                  <span class="cr-inner">
                    <span class="cr-text text-center"><strong>2</strong></span>
                  </span>
                </div>
              </div>
              <div class="text-md p-10 lg:ml-12">
                <PremFormField
              label="Your Combined score in 10th (*Mandatory)"
              help=""
              horizontal
            >
              <PremFormControl
               
                type="textarea"
                placeholder="Enter Your Answer"
              />
            </PremFormField>
              </div>
            </div>

                <!-- Your current status in 12th class -->
                <div class="from_Holder mt-6">
              <div class="Panel">
                <div class="corner-ribbon">
                  <span class="cr-inner">
                    <span class="cr-text text-center"><strong>3</strong></span>
                  </span>
                </div>
              </div>
              <div class="text-md p-10 lg:ml-12">
                <PremFormField label="Your current status of 12th Class" help="" horizontal>
                  <FormCheckRadioGroup
                    name="sample-radio-two"
                    type="radio"
                    :options="currentStatusIn12th"
                    is-column
                  />
                </PremFormField>
              </div>
            </div>

              <!-- Your combind score in 12th calss -->
              <div class="from_Holder mt-6">
              <div class="Panel">
                <div class="corner-ribbon">
                  <span class="cr-inner">
                    <span class="cr-text text-center"><strong>4</strong></span>
                  </span>
                </div>
              </div>
              <div class="text-md p-10 lg:ml-12">
                <PremFormField
              label="Your Combined score in 12th Class.If pursuing then expected score (*Mandatory)"
              help=""
              horizontal
            >
              <PremFormControl
               
                type="textarea"
                placeholder="Enter Your Answer"
              />
            </PremFormField>
              </div>
            </div>
 <!-- Subject Combinations in 12th class or IBDP -->
            <div class="from_Holder mt-6">
              <div class="Panel">
                <div class="corner-ribbon">
                  <span class="cr-inner">
                    <span class="cr-text text-center"><strong>5</strong></span>
                  </span>
                </div>
              </div>
              <div class="text-md p-10 lg:ml-12">
                <PremFormField
              label="Subject Combinations in 12th class or IBDP (*Mandatory)"
              help=""
              horizontal
            >
              <PremFormControl
               
                type="textarea"
                placeholder="Enter Your Answer"
              />
            </PremFormField>
              </div>
            </div>

                 <!-- Your board in 12th class -->
                 <div class="from_Holder mt-6">
              <div class="Panel">
                <div class="corner-ribbon">
                  <span class="cr-inner">
                    <span class="cr-text text-center"><strong>6</strong></span>
                  </span>
                </div>
              </div>
              <div class="text-md p-10 lg:ml-12">
                <PremFormField label="Your current status of 12th Class" help="" horizontal>
                  <FormCheckRadioGroup
                    name="sample-radio-two"
                    type="radio"
                    :options="boardIn12Class"
                    is-column
                  />
                </PremFormField>
              </div>
            </div>
                   <!-- Your IBDP point score (24-45) (if from IB board or else keep it blank) -->
                   <div class="from_Holder mt-6">
              <div class="Panel">
                <div class="corner-ribbon">
                  <span class="cr-inner">
                    <span class="cr-text text-center"><strong>7</strong></span>
                  </span>
                </div>
              </div>
              <div class="text-md p-10 lg:ml-12">
                <PremFormField label="Your IBDP point score (24-45) (if from IB board or else keep it blank)" help="" horizontal>
                  <FormCheckRadioGroup
                    name="sample-radio-two"
                    type="radio"
                    :options="IBDPscore"
                    is-column
                  />
                </PremFormField>
              </div>
            </div>

                    <!--Graduation(UG) Course type you pursuit -->
                    <div class="from_Holder mt-6">
              <div class="Panel">
                <div class="corner-ribbon">
                  <span class="cr-inner">
                    <span class="cr-text text-center"><strong>8</strong></span>
                  </span>
                </div>
              </div>
              <div class="text-md p-10 lg:ml-12">
                <PremFormField label="Graduation(UG) Course type you pursuit " help="" horizontal>
                  <FormCheckRadioGroup
                    name="sample-radio-two"
                    type="radio"
                    :options="graduationype"
                    is-column
                  />
                </PremFormField>
              </div>
            </div>

                      <!--Graduation(UG) Duration you pursult -->
                      <div class="from_Holder mt-6">
              <div class="Panel">
                <div class="corner-ribbon">
                  <span class="cr-inner">
                    <span class="cr-text text-center"><strong>9</strong></span>
                  </span>
                </div>
              </div>
              <div class="text-md p-10 lg:ml-12">
                <PremFormField label="Graduation(UG) Duration you pursult " help="" horizontal>
                  <FormCheckRadioGroup
                    name="sample-radio-two"
                    type="radio"
                    :options="graduationYear"
                    is-column
                  />
                </PremFormField>
              </div>
            </div>
                           <!--Your current status of graduation -->
                           <div class="from_Holder mt-6">
              <div class="Panel">
                <div class="corner-ribbon">
                  <span class="cr-inner">
                    <span class="cr-text text-center"><strong>10</strong></span>
                  </span>
                </div>
              </div>
              <div class="text-md p-10 lg:ml-12">
                <PremFormField label="Your current status of graduation" help="" horizontal>
                  <FormCheckRadioGroup
                    name="sample-radio-two"
                    type="radio"
                    :options="currentStatusOfGraduation"
                    is-column
                  />
                </PremFormField>
              </div>
            </div>

             <!-- Your score in Bachelors (% or CGPA).If pursuing then expected score -->
             <div class="from_Holder mt-6">
              <div class="Panel">
                <div class="corner-ribbon">
                  <span class="cr-inner">
                    <span class="cr-text text-center"><strong>11</strong></span>
                  </span>
                </div>
              </div>
              <div class="text-md p-10 lg:ml-12">
                <PremFormField
              label="Your score in Bachelors (% or CGPA).If pursuing then expected score"
              help=""
              horizontal
            >
              <PremFormControl
               
                type="textarea"
                placeholder="Enter Your Answer"
              />
            </PremFormField>
              </div>
            </div>
          </CardBox>
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>

<script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import UserAvatarCurrentUserWithUpload from "@/components/Avatars/UserAvatarCurrentUserWithUpload.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";

import {
  mdiBallot,
  mdiBallotOutline,
  mdiAccount,
  mdiMail,
  mdiCheck,
  mdiProgressCheck,
  mdiReload,
  mdiCreditCardOutline,
  mdiChevronDown,
  mdiSquareEditOutline,
  mdiTimerSand,
  mdiEmailOutline,
  mdiWhatsapp,
  mdiShareOutline,
  mdiShareVariant,
  mdiMagnify,
  mdiCompass,
} from "@mdi/js";

import { ref } from "vue";
import { reactive } from 'vue';
const itemDropDown = ["Followup", "Item 2"];
const hybrideDropDownItems = [
  "Task Summary",
  "Profiling",
  "Documents",
  "Add Recommendations",
  "Generate Invoice",
  "Forms Responses",
];
const SelectTasksItems = ["All History", "Item2"];
const hybrideValue = ref("Task Summary");
const firstValue = ref("Followup");
const tasks = ref("All History");

const PreferredIntake = {
  one: "Sep 2022",
  two: "Jan 2023",
  three: "May 2023",
  four: "Later",
};
const currentStatusIn12th = ["Completed","Pursuing"]
const boardIn12Class =["CBSE Board","ICSE Board","IB Board","State Board","Other Board"]
const IBDPscore =["24-31 points","32-38 points","39-45","N/A"]
const graduationype=["Degree","Diploma","Others"]
const graduationYear =["4 Years","3 Years","2 Years","Lesser than 2 Yearss"]
const currentStatusOfGraduation =["Completed","Pursuing final year"]

const forms = ref(false)



const state = reactive({
        bgColor: null
      });
      const setBgColor = (color) => {
        state.bgColor = color;
      };

      const showFrom =(color)=>{
        if(color=='green'){
          forms.value=true
        }else{
          forms.value=false
        }

  setBgColor(color)
}
</script>

<style scoped>
.eskfilter_Underline {
  /* width:10% !important;
  height:5px !important;
  background: red; */
}

.iconHolder {
  /* background: red; */
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px grey solid;
  cursor: pointer;
}

.iconHolder2 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px #3b82f6 solid;
  cursor: pointer;
}
.mainColor {
  color: #3b82f6;
}

/* // forms */

.from_Holder {
  position: relative;
  border: 1px gray solid;
  overflow: hidden;
}

/**
 * Corner Ribbon Component
 */
.corner-ribbon {
  position: absolute;
  top: -3px;
  left: -3px;
  height: 5.5em;
  width: 5.5em;
  padding: 8px;
}

.cr-inner {
  position: absolute;
  inset: 0;
  background: #3b82f6;
  color: white;

  clip-path: polygon(0 0, 100% 0, 0 100%);
}
.cr-text {
  display: block;
  font-weight: bold;
  font-size: 0.8em;
  line-height: 1.3;
  transform: rotate(0deg) translateY(1em) translateX(-1em);
  font-size: 1.2rem;
}

strong {
  display: block;
  font-weight: normal;
  text-transform: uppercase;
}

.ActiveCalss{
  background:red
}

.active {

    color:#3b82f6 !important;
    border-color: #3b82f6;
  }
  .border{
    border: none;
  }
</style>
