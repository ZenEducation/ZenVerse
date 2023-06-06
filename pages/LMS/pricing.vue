<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";
import {
  mdiDotsVertical,
  mdiTrashCan,
  mdiWindowClose,
  mdiPencil,
} from "@mdi/js";
import BaseIcon from "~~/components/Display/BaseIcon.vue";
import CardBoxModal from "~~/components/Cards/CardBoxModal.vue";
import BaseButtons from "~~/components/Buttons/BaseButtons.vue";
import FormCheckRadioGroup from "~~/components/Forms/FormCheckRadioGroup.vue";
const form = reactive({
  switchOne: ["one"],
});
const switchOptionFTP = { one: "Free Trail period" };
const switchOptionCFP = { one: "Custom first payment" };

const dripOptions = [
  {
    id: 1,
    label: "Free",
    information:
      "Offer free content to your subscribers. Optionally, you can set an enrollment duration that will limit the time students have access to your content.",
  },
  {
    id: 2,
    label: "One-time payment",
    information:
      "Charge students a one-time fee to access the content. Optionally, you can set an enrollment duration that will limit the time students have access to your content.",
  },
  {
    id: 3,
    label: "Subscription/Membership",
    information:
      "Charge students recurring monthly fees for access to course content. Great for membership sites",
  },
  {
    id: 4,
    label: "Monthly payment plan",
    information: "Split the full course price over several monthly payments",
  },
];
const dripSelected = ref(dripOptions[0].label);

const isDrip = ref(true);
const specificDate = ref();
const chapterList = ref([
  {
    chapterId: 1,
    title: "chapter 1",
    lessonList: [
      { id: 1, label: "Demo", date: "", days: 6 },
      { id: 2, label: "Video lesson", date: "", days: 8 },
    ],
  },
  {
    chapterId: 2,
    title: "chapter 2",
    lessonList: [
      { id: 3, label: "Audio lesson", date: "", days: 9 },
      { id: 4, label: "PDF lesson", date: "", days: 12 },
    ],
  },
]);

const list = ref([
  {
    id: 0,
    type: "one Time",
    amount: 15000,
    time: 4,
  },
  {
    id: 1,
    type: "Subscription",
    amount: 1000,
    time: 6,
  },
]);
const isAddDataActive = ref(false);
const NewFormData = ref({
  type: "",
  amount: 0,
  time: 0,
});

const newDataFormLabels = computed(() => {
  let labelAmount = "Amount";
  let labelTime = "Duration";

  if (NewFormData.value.type == "One Time") {
    labelAmount = "Amount";
    labelTime = "Validity";
  } else if (NewFormData.value.type == "Subscription") {
    labelAmount = "Price per Installment";
    labelTime = "Paid Every";
  } else if (NewFormData.value.type == "Monthly plan") {
    labelAmount = "Payment per payment";
    labelTime = "Total Months";
  }
  return { labelAmount, labelTime };
});

const addNewFormData = () => {
  list.value.push(NewFormData.value);
  isAddDataActive.value = false;
};
const EditItemId = ref(-1);
const isEditDataActive = ref(false);
const EditFormData = ref({
  type: "",
  amount: 0,
  time: 0,
});
const EditFormDataAction = () => {
  let temp = EditFormData.value;
  list.value[EditItemId.value] = temp;
  isEditDataActive.value = false;
};
const editItem = (popup, id) => {
  if (popup) {
    isEditDataActive.value = true;
    EditItemId.value = id;
    return;
  }
};

const deleteItemId = ref(-1);
const isModalDangerActive = ref(false);
const deleteItem = (popup, id) => {
  if (popup) {
    isModalDangerActive.value = true;
    deleteItemId.value = id;
    return;
  }
  if (deleteItemId.value !== -1) {
    list.value.splice(deleteItemId.value, 1);
  }
};
</script>

<template>
  <CardBoxModal
    v-model="isModalDangerActive"
    title="Are you sure you want to delete this ?"
    button="danger"
    buttonLabel="Yes"
    has-cancel
    @confirm="deleteItem(false)"
  />

  <CardBoxModal v-model="isAddDataActive" :showFooter="false" title="">
    <header
      class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
    >
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Add New Pricing</h1>
      </div>
      <div
        class="text-gray-500 cursor-pointer"
        @click="isAddDataActive = false"
      >
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>
    <CardBox is-form @submit.prevent="submitProfile">
      <PremFormField label="Pricing Type">
        <PremFormControl
          v-model="NewFormData.type"
          :options="['One Time', 'Subscription', 'Monthly plan']"
        />
      </PremFormField>
      <PremFormField :label="newDataFormLabels.labelAmount">
        <PremFormControl v-model="NewFormData.amount" type="number" />
      </PremFormField>
      <PremFormField :label="newDataFormLabels.labelTime" help="In Months">
        <PremFormControl v-model="NewFormData.time" type="number" />
      </PremFormField>

      <div class="flex justify-end py-2">
        <BaseButtons>
          <BaseButton color="info" label="Submit" @click="addNewFormData" />
        </BaseButtons>
      </div>
    </CardBox>
  </CardBoxModal>

  <CardBoxModal v-model="isEditDataActive" :showFooter="false" title="">
    <header
      class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
    >
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Edit Pricing</h1>
      </div>
      <div
        class="text-gray-500 cursor-pointer"
        @click="isEditDataActive = false"
      >
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>
    <CardBox is-form @submit.prevent="submitProfile">
      <PremFormField label="Pricing Type">
        <PremFormControl
          v-model="EditFormData.type"
          :options="['One Time', 'Subscription', 'Monthly plan']"
        />
      </PremFormField>
      <PremFormField label="Amount / Price per payment">
        <PremFormControl v-model="EditFormData.amount" type="number" />
      </PremFormField>
      <PremFormField label="Enrollment Duration / Paid every" help="In Months">
        <PremFormControl v-model="EditFormData.time" type="number" />
      </PremFormField>

      <div class="flex justify-end py-2">
        <BaseButtons>
          <BaseButton color="info" label="Submit" @click="EditFormDataAction" />
        </BaseButtons>
      </div>
    </CardBox>
  </CardBoxModal>

  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4">
          <CardBox
            class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
            is-form
            @submit.prevent="submit"
          >
            <div class="flex justify-between">
              <h1 class="text-3xl">Pricing</h1>
              <BaseButton
                type="submit"
                to="/dashboard"
                color="info"
                label="SAVE"
              />
            </div>
            <BaseDivider />

            <b><h4 class="mt-3 text-xl">Primary Pricing</h4></b><br />

            <h4 class="mt-1">
              Set the initial pricing option that will be displayed on the
              course landing page.
            </h4>
            <br />

            <div>
              <template v-for="i in dripOptions">
                <input type="radio" v-model="dripSelected" :value="i.label" />
                <span class="pl-4 font-semibold">
                  {{ i.label }}
                </span>
                <br />
                <p class="text-xs pl-8 my-3">{{ i.information }}</p>
                <div
                  class="pl-8"
                  v-if="(i.id == 1) & (dripSelected == i.label)"
                >
                  <div class="w-full bg-slate-200 p-8">
                    <PremFormField
                      label="Days Untill Expiry"
                      help="Leave blank for unlimited access"
                    >
                      <PremFormControl
                        type="number"
                        placeholder="Days"
                        class="max-w-md"
                      />
                    </PremFormField>
                  </div>
                </div>
                <div
                  class="pl-8"
                  v-if="(i.id == 3) & (dripSelected == i.label)"
                >
                  <PremFormField label="Amount(Rs.)" class="sm:w-1/3">
                    <PremFormControl type="number" placeholder="50" />
                  </PremFormField>
                  <PremFormField label="Paid every " class="sm:w-1/2">
                    <div class="flex flex-row flex-nowrap">
                      <PremFormControl
                        type="number"
                        placeholder="50"
                        class="w-20"
                      />
                      <PremFormControl
                        :options="['Day(s)', 'Month(s)']"
                        placeholder="50"
                        class="w-36"
                      />
                    </div>
                  </PremFormField>

                  <div class="w-full bg-slate-200 p-8">
                    <PremFormField horizontal>
                      <FormCheckRadioGroup
                        v-model="form.switchTwo"
                        name="sample-switch-two"
                        type="switch"
                        :options="switchOptionFTP"
                        class="font-semibold"
                        component-class="check-radio-danger"
                      />
                      <p class="text-xs">
                        Regular payment will begin when the free trail ends in :
                      </p>
                      <div class="flex flex-row flex-nowrap mt-5">
                        <PremFormControl
                          type="number"
                          placeholder="50"
                          class="w-20"
                        />
                        <PremFormControl
                          :options="['Day(s)', 'Month(s)']"
                          placeholder="50"
                          class="w-36"
                        />
                      </div>
                    </PremFormField>
                    <PremFormField horizontal>
                      <FormCheckRadioGroup
                        v-model="form.switchTwo"
                        name="sample-switch-two"
                        type="switch"
                        :options="switchOptionCFP"
                        class="font-semibold"
                        component-class="check-radio-danger"
                      />
                      <p class="text-xs">
                        Student pay this amount in the first month of the
                        subscription.
                      </p>
                      <div class="flex flex-row flex-nowrap mt-5">
                        <PremFormControl type="number" placeholder="50" />
                      </div>
                    </PremFormField>
                  </div>
                </div>

                <div
                  class="pl-8"
                  v-if="(i.id == 2) & (dripSelected == i.label)"
                >
                  <div class="w-full bg-slate-200 p-8">
                    <PremFormField label="Price">
                      <PremFormControl
                        type="number"
                        placeholder="Price (Rs.)"
                        class="max-w-md"
                      />
                    </PremFormField>
                    <PremFormField
                      label="Enrollment Duration"
                      help="Leave blank for unlimited access"
                    >
                      <PremFormControl
                        type="number"
                        placeholder="Days"
                        class="max-w-md"
                      />
                    </PremFormField>
                  </div>
                </div>
                <div
                  class="pl-8"
                  v-if="(i.id == 4) & (dripSelected == i.label)"
                >
                  <div class="flex gap-4 flex-wrap">
                    <PremFormField
                      label="Payment per payment (Rs.)"
                      class="sm:w-1/2"
                    >
                      <PremFormControl type="number" placeholder="50" />
                    </PremFormField>
                    <PremFormField label="Total Months" class="sm:w-1/3">
                      <PremFormControl type="number" placeholder="4" />
                    </PremFormField>
                  </div>

                  <div class="w-full bg-slate-200 p-8">
                    <p class="text-xs mb-4">
                      Specify the number of days, after purchase, that a student
                      will be enrolled in the course.
                    </p>

                    <PremFormField
                      label="Enrollment duration(Days)"
                      help="Minimum:60 days"
                      class="w-1/2"
                    >
                      <PremFormControl type="number" placeholder="365" />
                    </PremFormField>
                    <p class="text-xs mb-4">
                      This text will be displayed on the Buy Button on the
                      course card and the course landing page.
                    </p>
                    <PremFormField
                      label='"Buy Button" text label'
                      help="Limit : 30 characters"
                      class="w-1/2"
                    >
                      <PremFormControl type="text" placeholder="$10/month" />
                    </PremFormField>
                  </div>
                </div>
              </template>
            </div>

            <p class="font-bold text-lg mt-4">Variable Pricing</p>
            <p class="text-xs mb-8">
              Set a variable pricing for your bundle based on different validity
            </p>

            <BaseButton
              :icon="mdiPlus"
              :label="'Add Pricing'"
              :color="'info'"
              @click="isAddDataActive = true"
              class="mb-4"
            />

            <table>
              <thead>
                <tr>
                  <th>Pricing Type</th>
                  <th>Amount / Price per payment</th>
                  <th>Enrollment duration / Paid every</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in list" :key="index">
                  <td data-label="Pricing Type">{{ item.type }}</td>
                  <td data-label="Amount / Price per payment">
                    Rs. {{ item.amount }}
                  </td>
                  <td data-label="Enrollment duration / Paid every">
                    {{ item.time }} months
                  </td>
                  <td>
                    <div class="flex gap-4">
                      <BaseButton
                        color="info"
                        :icon="mdiPencil"
                        small
                        @click="editItem(true, index)"
                      />

                      <BaseButton
                        color="danger"
                        :icon="mdiTrashCan"
                        small
                        @click="deleteItem(true, index)"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBox>
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
