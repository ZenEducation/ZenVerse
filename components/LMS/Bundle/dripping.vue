<script setup>

import BaseButton from "@/components/Buttons/BaseButton.vue";
import { API , graphqlOperation} from "aws-amplify";
const props = defineProps({
  data: Object,
});
const emit = defineEmits(["form-data-changes-dripping"]);
const formData = ref(props.data);

console.log(formData.value);
let { isDripping,
  isDrippingFixedDate,
  drippingFixedDate,
  drippings, id } =
  formData.value;

const emitFormDataChanges = () => {
  console.log("emit", mockTests.value);
  let x = mockTests.value.map((item) => {
    return {
      id: item.id,
      days: item.days,
    }
  })
  console.log("x" , x );

  emit("form-data-changes-dripping", {
    isDripping : isDrip.value,
    isDrippingFixedDate : dripSelected.value,
    drippingFixedDate : specificDate.value,
    drippings:x,
  });
};
const isLoaded = ref(false);
const mockTests = ref([]);
onMounted(async () => {
  const myQuery = `
  query MyQuery($id: ID!) {
    getTestSeries(id: $id) {
      MockTests {
        items {
          _version
          mockTest {
            id
            name
          }
        }
      }
    }
  }
`;

  const response = await API.graphql(
    graphqlOperation(myQuery, { id: id })
  );
  console.log(response.data.getTestSeries);
  mockTests.value = response.data.getTestSeries.MockTests.items.map((element) => { return { ...element.mockTest, days: 0 } });

  drippings?.forEach((drip) => {
    let index = mockTests.value.findIndex(item => item.id == drip.id)
    mockTests.value[index].days = drip.days;
  })
  console.log("mock", mockTests.value);
  emitFormDataChanges();
  isLoaded.value = true;
})

const dripOptions = [
  {
    id: 1,
    label: "Student Enrollment Date",
    value:false,
    information:
      "Tests will be released based on students enrollment date. Each student will have different start dates ",
  },
  {
    id: 3,
    label: "Fixed Start Date",
    value:true,
    information:
      "Tests will be released based on planned dates. All the students will have same start dates",
  },
];
const dripSelected = ref(isDrippingFixedDate || false);
const dropdown = ref(true);
const selected = ref(-1);
const isDrip = ref(isDripping || false);
const specificDate = ref(drippingFixedDate);
const item = ref({
  name: "Set 1",
  tests: [
    {
      name: "Test 1",
      days: 0,
    },
    {
      name: "Test 2",
      days: 0,
    },
    {
      name: "Test 3",
      days: 0,
    },
    {
      name: "Test 4",
      days: 0,
    },
  ],
});
</script>

<template>
  <div v-if="isLoaded">
    <div class="h-screen flex max-md:block">
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

        <input type="radio" name="isdrip" id="" v-model="isDrip" :value="true" @change="emitFormDataChanges" /><span class="px-2">Enable</span><br />
        <input type="radio" name="isdrip" id="" v-model="isDrip" :value="false" @change="emitFormDataChanges" /><span class="px-2">Disable</span>
        <br />
      </div>
      <div class="w-2/3 max-md:w-full pt-6 px-4 overflow-scroll scrollbar-none">
        <div>
          <template v-for="i in dripOptions">
            <input type="radio" v-model="dripSelected" :value="i.value" @change="emitFormDataChanges" />
            {{ i.label }}
            <br />
            <p class="text-sm pl-6 mb-4">{{ i.information }}</p>
          </template>
        </div>
        <FormsFormField label="Select Start Date" v-if="dripSelected">
          <FormsFormControl type="date" class="max-w-sm" v-model="specificDate" @change="emitFormDataChanges" />
        </FormsFormField>

        <div class="section-add m-3 pb-[1px] mt-20">
          <div @click="() => {
            dropdown = !dropdown;

            selected = i.id;
          }
            " class="p-5 flex justify-between">
            
            <div class="flex items-center">

              <!-- add delete btn -->
              <p>{{mockTests.length}} Tests</p>

              <!-- add arror -->
              <img class="collapse-status-668700" id="collapse-status" style="margin: 2px 20px 0 15px; width: 8px"
                src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/cb_collapse.svg" />
            </div>
          </div>

          <Transition name="slider">
            <div v-if="dropdown">
              <div>
                <div class="border-l-[3px] border-[#3a79df] rounded-sm box-shadow w-lg flex py-2 justify-between"
                  v-for="test in mockTests">
                  <div class="flex">
                    <span class="mr-2.5"><img
                        src="https://res-cdn.learnyst.com/pro/admin/coursebuilder/styles/images/grippy_large.png"
                        alt="" /></span>
                    <span>{{ test.name }}</span>
                  </div>
                  <div class="pr-8">
                    <p>Relese <input class="w-16" type="number" v-model="test.days" @change="emitFormDataChanges"> days After <span
                        v-if="dripSelected !== 'Student Enrollment Date'">Start </span> <span v-else>Enrollment </span>
                      Date
                    </p>
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
