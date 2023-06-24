<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";

const dripOptions = [
  {
    id: 1,
    label: "Student Enrollment Date",
    information:
      "Tests will be released based on students enrollment date. Each student will have different start dates ",
  },
  {
    id: 3,
    label: "Fixed Start Date",
    information:
      "Tests will be released based on planned dates. All the students will have same start dates",
  },
];
const dripSelected = ref(dripOptions[0].label);
const dropdown = ref(true);
const selected = ref(-1);
const isDrip = ref(true);
const specificDate = ref();
const item = ref({
  title: "Set 1",
  tests: [
    {
      title: "Test 1",
      Days: 0,
    },
    {
      title: "Test 2",
      Days: 0,
    },
    {
      title: "Test 3",
      Days: 0,
    },
    {
      title: "Test 4",
      Days: 0,
    },
  ],
});
</script>

<template>
  <div>
    <div class="absolute top-0 left-0 w-full min-h-[48px] bg-white">
      <div class="border-b w-full flex justify-between items-center px-5 py-2">
        <NuxtLink to="/examportal/tests/edit-test">
          <div
            class="text-[13px] flex items-center justify-center cursor-pointer"
          >
            <img
              class="w-[14px] h-[14px]"
              src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/cb_back.svg"
              alt=""
            />
            <p class="p-2.5">Tedy</p>
          </div>
        </NuxtLink>
        <div class="pr-16"></div>
      </div>
    </div>
    <div class="h-screen flex pt-14 max-md:block">
      <div class="w-1/3 max-md:w-full border-r-2 pt-6 px-4">
        <p class="font-semibold text-xl uppercase">CONTENT DRIPPING</p>
        <p class="py-1 text-sm">
          Content Dripping is the gradual pre scheduled release of tests in a
          test series. It is effective for delivering larger amounts of tests
          into manageable chunks without overwhelming the students. In addition
          content dripping is a good strategy for keeping students engaged and
          interested.
        </p>
        <br />

        <input type="radio" name="isdrip" id="" value="Enable" /><span
          class="px-2"
          >Enable</span
        ><br />
        <input type="radio" name="isdrip" id="" value="Disable" /><span
          class="px-2"
          >Disable</span
        >
        <br />
        <BaseButton label="Save" class="pt-4" color="info" />
      </div>
      <div class="w-2/3 max-md:w-full pt-6 px-4 overflow-scroll scrollbar-none">
        <p class="font-semibold text-xl uppercase pb-6">Tedy</p>
        <div>
          <template v-for="i in dripOptions">
            <input type="radio" v-model="dripSelected" :value="i.label" />
            {{ i.label }}
            <br />
            <p class="text-sm pl-6 mb-4">{{ i.information }}</p>
          </template>
        </div>
        <FormsFormField
          label="Select Start Date"
          v-if="dripSelected == 'Fixed Start Date'"
        >
          <FormsFormControl
            type="date"
            class="max-w-sm"
            v-model="specificDate"
          />
        </FormsFormField>

        <div
          class="section-add m-3 pb-[1px] mt-20"
        >
          <div
            @click="
              () => {
                dropdown = !dropdown;

                selected = i.id;
              }
            "
            class="p-5 flex justify-between"
          >
              Set 1
            <div class="flex items-center">

              <!-- add delete btn -->
                <p>4 Tests</p>

              <!-- add arror -->
              <img
                class="collapse-status-668700"
                id="collapse-status"
                style="margin: 2px 20px 0 15px; width: 8px"
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/cb_collapse.svg"
              />
            </div>
          </div>

          <Transition name="slider">
            <div v-if="dropdown">
              <div>
                <div
                  class="border-l-[3px] border-[#3a79df] rounded-sm box-shadow w-lg flex py-2 justify-between"
                  v-for="test in item.tests"
                >
                  <div class="flex">
                    <span class="mr-2.5"
                      ><img
                        src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png"
                        alt=""
                    /></span>
                    <span>{{ test.title }}</span>
                  </div>
                  <div class="pr-8">
                    <p>Relese <input class="w-16" type="number" name="" id="" value="0"> Days After <span v-if="dripSelected!=='Student Enrollment Date'">Start </span> <span v-else>Enrollment </span> Date</p>
                  </div>
                </div>
              </div>

            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>
