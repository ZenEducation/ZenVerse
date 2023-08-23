<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/stores/main";
import {
  mdiTrashCan,
  mdiPencil,
  mdiDotsVertical,
  mdiAccountPlus,
  mdiWindowClose,
  mdiAccount,
  mdiMail,
  mdiCellphone,
  mdiAsterisk,
  mdiFormTextboxPassword,
  mdiPlus,
  mdiSchool,
  mdiMinusCircle,
} from "@mdi/js";
import CardBoxModal from "@/components/Cards/CardBoxModal.vue";
import TableLearnerEnabled from "@/components/Tables/TableLearnerEnabled.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import UserAvatar from "@/components/Avatars/UserAvatar";
import PremFormField from "@/components/Forms/PremFormField.vue";
import PremFormControl from "@/components/Forms/PremFormControl.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import FormCheckRadio from "@/components/Forms/FormCheckRadio.vue";
import { API } from "aws-amplify";
import {
  listMockTestLearners,
  listMockTestAdmins,
  listMockTestAffiliates,
  listMockTestInstructors,
  listMockTests,
} from "~~/src/graphql/queries";
import {
  deleteMockTestAdmin,
  deleteMockTestAffiliate,
  deleteMockTestInstructor,
  deleteMockTestLearner,
  createMockTestAdmin,
  createMockTestAffiliate,
  createMockTestInstructor,
  createMockTestLearner,
} from "~~/src/graphql/mutations";

const props = defineProps({
  checkable: { type: Boolean, default: false },
  isLearner: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  isAffiliate: { type: Boolean, default: false },
  isInstructor: { type: Boolean, default: false },
  id: { type: String, default: "" },
});
const deleteItemId = ref("");
const deleteItemVersion = ref(0);
const EnableItemId = ref("");

const isModalDangerActive = ref(false);
const isModalEnableActive = ref(false);

const items = ref([
  {
    id: "FC123",
    title: "Foundation Course",
    "Joined On": "Mar 03 , 2023",
    "Expiry Date": "Mar 07 , 2024",
    isEnabled: false,
  },
  {
    id: "NEET123",
    title: "NEET Course",
    "Joined On": "Mar 15 , 2023",
    "Expiry Date": "Mar 16 , 2024",
    isEnabled: true,
  },
]);
const existingItems = ref([]);
const existingListSelectedId = ref("");

const addNewHandler = async () => {};
const removeHandler = async () => {};

const start = async () => {
  let list = [];

  if (props.isLearner) {
    let response = await API.graphql({
      query: listMockTestLearners,
      variables: {
        filter: { learnerId: { eq: props.id }, _deleted: { ne: true } },
      },
    });
    console.log("responce ", response?.data?.listMockTestLearners?.items);
    response = response?.data?.listMockTestLearners?.items
      .filter((item) => {
        return !item.mockTest._deleted;
      })
      .map((item) => {
        let expiryDate = new Date();
        console.log(
          item?.mockTest?.isValidityDays,
          item?.mockTest.validityDays
        );
        if (item?.mockTest.isValidityDays && item?.mockTest.validityDays) {
          expiryDate = new Date(item.createdAt);
          expiryDate = expiryDate.setDate(
            expiryDate.getDate() + item?.mockTest.validityDays
          );
          console.log("object ", expiryDate);
        } else {
          expiryDate = item.mockTest.expiryDate;
        }

        return {
          relationID: item.id,
          type: "MockTest",
          id: item.mockTest.shortId,
          title: item.mockTest.name,
          "Joined On": item.createdAt,
          "Expiry Date": new Date(expiryDate).toDateString(),
          version: item._version,
          mockTestId: item.mockTest.id,
        };
      });
    console.log(response);
    list = response.map((item) => {
      return item.mockTestId;
    });
    items.value = response;
  }
  if (props.isAdmin) {
    let response = await API.graphql({
      query: listMockTestAdmins,
      variables: {
        filter: { adminId: { eq: props.id }, _deleted: { ne: true } },
      },
    });
    console.log("responce ", response?.data?.listMockTestAdmins?.items);
    response = response?.data?.listMockTestAdmins?.items
      .filter((item) => {
        return !item.mockTest._deleted;
      })
      .map((item) => {
        let expiryDate = new Date();
        console.log(
          item?.mockTest?.isValidityDays,
          item?.mockTest.validityDays
        );
        if (item?.mockTest.isValidityDays && item?.mockTest.validityDays) {
          expiryDate = new Date(item.createdAt);
          expiryDate = expiryDate.setDate(
            expiryDate.getDate() + item?.mockTest.validityDays
          );
          console.log("object ", expiryDate);
        } else {
          expiryDate = item.mockTest.expiryDate;
        }

        return {
          relationID: item.id,
          type: "MockTest",
          id: item.mockTest.shortId,
          title: item.mockTest.name,
          "Joined On": item.createdAt,
          "Expiry Date": new Date(expiryDate).toDateString(),
          version: item._version,
          mockTestId: item.mockTest.id,
        };
      });
    console.log(response);
    list = response.map((item) => {
      return item.mockTestId;
    });
    items.value = response;
  }
  if (props.isAffiliate) {
    let response = await API.graphql({
      query: listMockTestAffiliates,
      variables: {
        filter: { affiliateId: { eq: props.id }, _deleted: { ne: true } },
      },
    });
    console.log("responce ", response?.data?.listMockTestAffiliates?.items);
    response = response?.data?.listMockTestAffiliates?.items
      .filter((item) => {
        return !item.mockTest._deleted;
      })
      .map((item) => {
        let expiryDate = new Date();
        console.log(
          item?.mockTest?.isValidityDays,
          item?.mockTest.validityDays
        );
        if (item?.mockTest.isValidityDays && item?.mockTest.validityDays) {
          expiryDate = new Date(item.createdAt);
          expiryDate = expiryDate.setDate(
            expiryDate.getDate() + item?.mockTest.validityDays
          );
          console.log("object ", expiryDate);
        } else {
          expiryDate = item.mockTest.expiryDate;
        }

        return {
          relationID: item.id,
          type: "MockTest",
          id: item.mockTest.shortId,
          title: item.mockTest.name,
          "Joined On": item.createdAt,
          "Expiry Date": new Date(expiryDate).toDateString(),
          version: item._version,
          mockTestId: item.mockTest.id,
        };
      });
    console.log(response);
    list = response.map((item) => {
      return item.mockTestId;
    });
    items.value = response;
  }
  if (props.isInstructor) {
    let response = await API.graphql({
      query: listMockTestInstructors,
      variables: {
        filter: { instructorId: { eq: props.id }, _deleted: { ne: true } },
      },
    });
    console.log("responce ", response?.data?.listMockTestInstructors?.items);
    response = response?.data?.listMockTestInstructors?.items
      .filter((item) => {
        return !item.mockTest._deleted;
      })
      .map((item) => {
        let expiryDate = new Date();
        console.log(
          item?.mockTest?.isValidityDays,
          item?.mockTest.validityDays
        );
        if (item?.mockTest.isValidityDays && item?.mockTest.validityDays) {
          expiryDate = new Date(item.createdAt);
          expiryDate = expiryDate.setDate(
            expiryDate.getDate() + item?.mockTest.validityDays
          );
          console.log("object ", expiryDate);
        } else {
          expiryDate = item.mockTest.expiryDate;
        }

        return {
          relationID: item.id,
          type: "MockTest",
          id: item.mockTest.shortId,
          title: item.mockTest.name,
          "Joined On": item.createdAt,
          "Expiry Date": new Date(expiryDate).toDateString(),
          version: item._version,
          mockTestId: item.mockTest.id,
        };
      });
    console.log(response);
    list = response.map((item) => {
      return item.mockTestId;
    });
    items.value = response;
    console.log(list);
  }
  console.log(list);
  let response = await API.graphql({
    query: listMockTests,
    variables: { filter: { _deleted: { ne: true } } },
  });
  response = response.data.listMockTests.items.filter((item) => {
    return (
      list.findIndex((t) => {
        return t === item.id;
      }) == -1
    );
  });
  console.log(response);
  existingItems.value = response;
};

onMounted(async () => {
  // get list of courses
  await start();
});

const isAddCourseModelActive = ref(false);
const addCourse = ref({
  id: "",
  title: "",
  "Joined On": "",
  "Expiry Date": "",
  isEnabled: true,
});

const addNewCourse = async () => {
  try {
    if (props.isAdmin) {
      let relation = await API.graphql({
        query: createMockTestAdmin,
        variables: {
          input: {
            mockTestId: existingListSelectedId.value,
            adminId: props.id,
          },
        },
      });
    }
    if (props.isAffiliate) {
      let relation = await API.graphql({
        query: createMockTestAffiliate,
        variables: {
          input: {
            mockTestId: existingListSelectedId.value,
            affiliateId: props.id,
          },
        },
      });
    }
    if (props.isLearner) {
      let relation = await API.graphql({
        query: createMockTestLearner,
        variables: {
          input: {
            mockTestId: existingListSelectedId.value,
            learnerId: props.id,
          },
        },
      });
    }
    if (props.isInstructor) {
      let relation = await API.graphql({
        query: createMockTestInstructor,
        variables: {
          input: {
            mockTestId: existingListSelectedId.value,
            instructorId: props.id,
          },
        },
      });
    }
    await start();
    isAddCourseModelActive.value = false;
  } catch (error) {
    console.error("Error Creating admin:", error);
  }
};

const isEditCourseModelActive = ref(false);
const editCourseId = ref();
const editCourseInputValues = ref({
  "Joined On": "",
  "Expiry Date": "",
});

const editCourse = () => {
  items.value.find((item) => {
    return item["id"] == editCourseId.value;
  })["Joined On"] = editCourseInputValues.value["Joined On"];

  items.value.find((item) => {
    return item["id"] == editCourseId.value;
  })["Expiry Date"] = editCourseInputValues.value["Expiry Date"];

  isEditCourseModelActive.value = false;
};

const openEdit = (id) => {
  let course = items.value.find((item) => {
    return item["id"] == id;
  });

  let joiningDate = new Date(course["Joined On"]);
  let expiryDate = new Date(course["Expiry Date"]);

  editCourseId.value = id;
  editCourseInputValues.value["Joined On"] = new Date(
    joiningDate.getTime() - joiningDate.getTimezoneOffset() * 60000
  )
    .toISOString()
    .split("T")[0];
  editCourseInputValues.value["Expiry Date"] = new Date(
    expiryDate.getTime() - expiryDate.getTimezoneOffset() * 60000
  )
    .toISOString()
    .split("T")[0];
  isEditCourseModelActive.value = true;
};

const joinDateOptions = ["all", "before", "on", "after", "between"];
const membershipOptions = ["all", "enabled", "disabled"];
const membershipSelectedFilter = ref("all");
const searchQuery = ref("");
const joinedFilterOption = ref("all");
const joinedFilterDate = ref("");
const joinedFilterStartDate = ref("");
const joinedFilterEndDate = ref("");
const expiryFilterOption = ref("all");
const expiryFilterDate = ref("");
const expiryFilterStartDate = ref("");
const expiryFilterEndDate = ref("");
const perPage = 25;
const totalPages = ref(1);
const currentPage = ref(0);
const JoinedOnFilterModelActive = ref(false);
const MembershipFilterModelActive = ref(false);
const expiryFilterModelActive = ref(false);

const resetfilter = () => {
  membershipSelectedFilter.value = "all";
  joinedFilterOption.value = "all";
  expiryFilterOption.value = "all";
  JoinedOnFilterModelActive.value = false;
  MembershipFilterModelActive.value = false;
  expiryFilterModelActive.value = false;
};

const filteredItems = computed(() => {
  let filtered = items.value;
  const search = new RegExp(searchQuery.value, "i");

  if (searchQuery.value) {
    filtered = filtered.filter((item) => {
      return search
        ? item["id"].match(search) || item["title"].match(search)
        : true;
    });
  }

  if (joinedFilterOption.value !== "all") {
    filtered = filtered.filter((item) => {
      const joinedDate = new Date(item["Joined On"]);

      if (joinedFilterOption.value === "on" && joinedFilterDate.value != "") {
        const filterDate = new Date(joinedFilterDate.value);
        return joinedDate.toDateString() === filterDate.toDateString();
      } else if (
        joinedFilterOption.value === "before" &&
        joinedFilterDate.value != ""
      ) {
        console.log("object");
        const filterDate = new Date(joinedFilterDate.value);
        return joinedDate < filterDate;
      } else if (
        joinedFilterOption.value === "after" &&
        joinedFilterDate.value != ""
      ) {
        const filterDate = new Date(joinedFilterDate.value);
        return joinedDate > filterDate;
      } else if (
        joinedFilterOption.value === "between" &&
        joinedFilterStartDate.value &&
        joinedFilterEndDate.value
      ) {
        const startDate = new Date(joinedFilterStartDate.value);
        const endDate = new Date(joinedFilterEndDate.value);
        return joinedDate >= startDate && joinedDate <= endDate;
      } else {
        return true;
      }
    });
  }

  if (expiryFilterOption.value !== "all") {
    filtered = filtered.filter((item) => {
      const expiryDate = new Date(item["Expiry Date"]);

      if (expiryFilterOption.value === "on" && expiryFilterDate.value) {
        const filterDate = new Date(expiryFilterDate.value);
        return expiryDate.toDateString() === filterDate.toDateString();
      } else if (
        expiryFilterOption.value === "before" &&
        expiryFilterDate.value
      ) {
        const filterDate = new Date(expiryFilterDate.value);
        return expiryDate < filterDate;
      } else if (
        expiryFilterOption.value === "after" &&
        expiryFilterDate.value
      ) {
        const filterDate = new Date(expiryFilterDate.value);
        return expiryDate > filterDate;
      } else if (
        expiryFilterOption.value === "between" &&
        expiryFilterStartDate.value &&
        expiryFilterEndDate.value
      ) {
        const startDate = new Date(expiryFilterStartDate.value);
        const endDate = new Date(expiryFilterEndDate.value);
        return expiryDate >= startDate && expiryDate <= endDate;
      } else {
        return true;
      }
    });
  }
  totalPages.value = Math.ceil(filtered.length / perPage);
  const start = currentPage.value * perPage;
  const end = (currentPage.value + 1) * perPage;

  return filtered.slice(start, end);
});

// const EnableItem = (popup, id) => {
//   if (popup) {
//     isModalEnableActive.value = true;
//     EnableItemId.value = id;
//     return;
//   }
//   const index = items.value.findIndex(
//     (item) => item["id"] === EnableItemId.value
//   );
//   console.log("index is", index);
//   if (index !== -1) {
//     items.value[index].isEnabled = !items.value[index].isEnabled;
//   }
// };

const deleteItem = async (popup, id, version) => {
  if (popup) {
    isModalDangerActive.value = true;
    deleteItemId.value = id;
    deleteItemVersion.value = version;
    return;
  }
  const index = items.value.findIndex(
    (item) => item["relationID"] === deleteItemId.value
  );
  if (index !== -1) {
    try {
      if (props.isAdmin) {
        await API.graphql({
          query: deleteMockTestAdmin,
          variables: {
            input: {
              id: deleteItemId.value,
              _version: deleteItemVersion.value,
            },
          },
        });
      } else if (props.isAffiliate) {
        await API.graphql({
          query: deleteMockTestAffiliate,
          variables: {
            input: {
              id: deleteItemId.value,
              _version: deleteItemVersion.value,
            },
          },
        });
      } else if (props.isInstructor) {
        await API.graphql({
          query: deleteMockTestInstructor,
          variables: {
            input: {
              id: deleteItemId.value,
              _version: deleteItemVersion.value,
            },
          },
        });
      } else if (props.isLearner) {
        await API.graphql({
          query: deleteMockTestLearner,
          variables: {
            input: {
              id: deleteItemId.value,
              _version: deleteItemVersion.value,
            },
          },
        });
      }

      items.value.splice(index, 1);
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<template>
  <CardBoxModal v-model="isAddCourseModelActive" :showFooter="false" title="">
    <header
      class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
    >
      <div class="text-gray-500">
        <BaseIcon v-if="mdiAccountPlus" :path="mdiAccountPlus" :size="32" />
      </div>
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Add Product</h1>
      </div>
      <div
        class="text-gray-500 cursor-pointer"
        @click="isAddCourseModelActive = false"
      >
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>
    <CardBox is-form @submit.prevent="submitProfile">
      <select v-model="existingListSelectedId">
        <option v-for="item in existingItems" :value="item.id">
          {{ item.name }}
        </option>
      </select>
      <div class="flex justify-end py-2">
        <BaseButtons>
          <BaseButton @click="addNewCourse" color="info" label="Submit" />
        </BaseButtons>
      </div>
    </CardBox>
  </CardBoxModal>

  <CardBoxModal v-model="isEditCourseModelActive" :showFooter="false" title="">
    <header
      class="flex justify-between p-3 border-b border-gray-300 items-center bg-gray-100 dark:bg-gray-700 rounded"
    >
      <div class="text-gray-500">
        <BaseIcon v-if="mdiAccountPlus" :path="mdiAccountPlus" :size="32" />
      </div>
      <div class="flex flex-col ml-5 mx-auto">
        <h1 class="font-bold">Edit Course</h1>
      </div>
      <div
        class="text-gray-500 cursor-pointer"
        @click="isEditCourseModelActive = false"
      >
        <BaseIcon v-if="mdiWindowClose" :path="mdiWindowClose" :size="32" />
      </div>
    </header>
    <CardBox is-form @submit.prevent="submitProfile">
      <FormField label="Joining Date">
        <FormControl
          :icon="mdiSchool"
          required
          type="date"
          v-model="editCourseInputValues['Joined On']"
        />
      </FormField>
      <FormField label="Expiry Date">
        <FormControl
          :icon="mdiSchool"
          required
          type="date"
          v-model="editCourseInputValues['Expiry Date']"
        />
      </FormField>

      <div class="flex justify-end py-2">
        <BaseButtons>
          <BaseButton @click="editCourse" color="info" label="Submit" />
        </BaseButtons>
      </div>
    </CardBox>
  </CardBoxModal>

  <CardBoxModal
    v-model="isModalDangerActive"
    title="Are you sure you want to delete this Course?"
    button="danger"
    buttonLabel="Yes"
    has-cancel
    @confirm="deleteItem(false)"
  />

  <CardBoxModal
    v-model="isModalEnableActive"
    title="Are you sure you want to Change status of this Course?"
    button="danger"
    buttonLabel="Yes"
    has-cancel
    @confirm="EnableItem(false)"
  />

  <form class="relative" @submit.prevent="submit">
    <label for="msg-search" class="sr-only">Search</label>
    <input
      id="msg-search"
      class="form-input w-full pl-9 focus:border-slate-300"
      type="search"
      v-model="searchQuery"
      placeholder="Search by Product Id and Title"
    />
    <button class="absolute inset-0 right-auto group" aria-label="Search">
      <svg
        class="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
        />
        <path
          d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
        />
      </svg>
    </button>
  </form>

  <div class="lg:flex justify-between my-8">
    <div class="flex items-start gap-y-4 flex-wrap">
      <div class="relative mr-4">
        <p>filter by:</p>
      </div>
      <div class="relative mr-4">
        <div
          @click="JoinedOnFilterModelActive = !JoinedOnFilterModelActive"
          class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
        >
          <p
            role=""
            tabindex="-1"
            class="break-words text-body text-darkSlate01 false flex-grow leading-none"
          >
            Joining Date
          </p>
        </div>
        <div
          class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black"
          v-if="JoinedOnFilterModelActive"
        >
          <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]">
            <PremFormControl
              :options="joinDateOptions"
              v-model="joinedFilterOption"
            />
          </PremFormField>
          <PremFormField
            class="min-w-[50%] xl:min-w-[20%] mt-3"
            v-if="
              joinedFilterOption != 'all' && joinedFilterOption != 'between'
            "
          >
            <PremFormControl v-model="joinedFilterDate" type="date" />
          </PremFormField>
          <PremFormField
            class="min-w-[50%] xl:min-w-[20%] mb-0"
            v-if="joinedFilterOption == 'between'"
            label="From"
          >
            <PremFormControl v-model="joinedFilterStartDate" type="date" />
          </PremFormField>
          <PremFormField
            class="min-w-[50%] xl:min-w-[20%] mb-0"
            v-if="joinedFilterOption == 'between'"
            label="To"
          >
            <PremFormControl v-model="joinedFilterEndDate" type="date" />
          </PremFormField>
        </div>
      </div>
      <div class="relative mr-4">
        <div
          @click="expiryFilterModelActive = !expiryFilterModelActive"
          class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
        >
          <p
            role=""
            tabindex="-1"
            class="break-words text-body text-darkSlate01 false flex-grow leading-none"
          >
            Expiry Date
          </p>
        </div>
        <div
          class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black"
          v-if="expiryFilterModelActive"
        >
          <PremFormField class="xl:mb-0 min-w-[50%] xl:min-w-[20%]">
            <PremFormControl
              :options="joinDateOptions"
              v-model="expiryFilterOption"
            />
          </PremFormField>
          <PremFormField
            class="mt-3 min-w-[50%] xl:min-w-[20%]"
            v-if="
              expiryFilterOption != 'all' && expiryFilterOption != 'between'
            "
          >
            <PremFormControl v-model="expiryFilterDate" type="date" />
          </PremFormField>
          <PremFormField
            class="xl:mb-0 min-w-[50%] xl:min-w-[20%]"
            v-if="expiryFilterOption == 'between'"
            label="From"
          >
            <PremFormControl v-model="expiryFilterStartDate" type="date" />
          </PremFormField>
          <PremFormField
            class="xl:mb-0 min-w-[50%] xl:min-w-[20%]"
            v-if="expiryFilterOption == 'between'"
            label="To"
          >
            <PremFormControl v-model="expiryFilterEndDate" type="date" />
          </PremFormField>
        </div>
      </div>
      <div class="relative mr-4">
        <div
          @click="MembershipFilterModelActive = !MembershipFilterModelActive"
          class="flex item-center justify-center p-3 cursor-pointer border border-black dark:border-white"
        >
          <p
            role=""
            tabindex="-1"
            class="break-words text-body text-darkSlate01 false flex-grow leading-none"
          >
            Status
          </p>
        </div>
        <div
          class="p-[0.5rem] mt-2 transition-all flex flex-col border border-black"
          v-if="MembershipFilterModelActive"
        >
          <PremFormControl
            :options="membershipOptions"
            v-model="membershipSelectedFilter"
          />
        </div>
      </div>
    </div>

    <div
      class="flex-end mr-4 p-[0.6rem] underline cursor-pointer leading-none"
      @click="resetfilter"
    >
      <p
        role=""
        tabindex="-1"
        class="break-words text-body text-darkSlate01 false"
      >
        Reset Fiters
      </p>
    </div>
    <BaseButton
      color="danger"
      :icon="mdiPlus"
      label="Add"
      @click="isAddCourseModelActive = true"
    />
  </div>

  <div class="text-gray-500 dark:text-white">
    <span>{{ filteredItems.length }} Courses </span>
  </div>

  <table>
    <thead>
      <tr>
        <th>Product Id</th>
        <th>Product title</th>
        <th>Joined On</th>
        <th>Expiry Date</th>
        <th />
        <th />
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in filteredItems" :key="item['id']">
        <td data-label="Product Id">
          {{ item["id"] }}
        </td>
        <td data-label="'Product title'">
          {{ item["title"] }}
        </td>

        <td data-label="Joined" class="lg:w-1 whitespace-nowrap">
          <small
            class="text-gray-500 dark:text-slate-400"
            :title="item['Joined On']"
            >{{ new Date(item["Joined On"]).toDateString() }}</small
          >
        </td>
        <td data-label="Expiry Date" class="lg:w-1 whitespace-nowrap">
          <small
            class="text-gray-500 dark:text-slate-400"
            :title="item['Expiry Date']"
            >{{ new Date(item["Expiry Date"]).toDateString() }}</small
          >
        </td>

        <td class="before:hidden lg:w-1 whitespace-nowrap">
          <BaseButtons type="justify-start lg:justify-end" no-wrap>
            <BaseButton
              color="danger"
              :icon="mdiMinusCircle"
              small
              @click="deleteItem(true, item['relationID'], item?.version)"
            />
          </BaseButtons>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
    <BaseLevel>
      <BaseButtons>
        <BaseButton
          v-for="page in totalPages"
          :key="page"
          :active="page - 1 === currentPage"
          :label="page"
          :color="page - 1 === currentPage ? 'lightDark' : 'whiteDark'"
          small
          @click="currentPage = page - 1"
        />
      </BaseButtons>
      <small>Page {{ currentPage + 1 }} of {{ totalPages }}</small>
    </BaseLevel>
  </div>
</template>
