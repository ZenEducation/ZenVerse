<template>
  <div>
    <!-- table section  -->
    <table>
      <thead>
        <tr>
          <th class="text-center">Sr No</th>
          <th class="text-center">Setting Name</th>
          <th class="text-center">Channel Name</th>
          <th class="text-center">Date & Time</th>

          <th class="text-center">Delayed By</th>

          <th class="text-center">Status</th>

          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in data" :key="idx">
          <td class="text-center" data-label="Sr No">
            {{ idx + 1 }}
          </td>
          <td data-label="Setting Name">
            {{ item.settingName }}
          </td>

          <td data-label="Channel Name">
            {{ item.channelName }}
            <p class="text-primary">
              {{ item.extraChannels }}
            </p>
          </td>
          <td data-label="Date & Time" class="">
            <p>
              {{ item.date }}
            </p>
            <p>
              {{ item.time }}
            </p>
          </td>
          <td data-label="Date & Time" class="text-center">
            {{ item.delayedBy }}
          </td>
          <td data-label="Status">
            <PremFormField label="" :help="item.someHelpText" horizontal>
              <PremFormControl
                type="list"
                :options="listBoxOptions"
                v-model="item.status"
              />
            </PremFormField>
          </td>

          <td class="lg:w-1 whitespace-nowrap" data-label="Action">
            <BaseButton
              color="warning"
              label="Tags"
              small
              class="inline mx-1 my-1"
            />
            <BaseButton
              color="success"
              label="Apply"
              small
              class="inline mx-1 my-1"
            />
            <BaseButton
              color="info"
              label="Actions"
              small
              class="inline mx-1 my-1"
              @click="goToAction(item.id)"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <!-- end table  -->

    <!-- pagination  -->
    <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
      <BaseLevel>
        <BaseButtons>
          <BaseButton
            v-for="page in pagesList"
            :key="page"
            :active="page === currentPage"
            :label="page + 1"
            :color="page === currentPage ? 'lightDark' : 'whiteDark'"
            small
            @click="currentPage = page"
          />
        </BaseButtons>
        <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
      </BaseLevel>
    </div>
    <!-- end pagination -->
  </div>
</template>

<script setup>
// imports
import { mdiEye } from "@mdi/js";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { defineProps, computed } from "vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import { useRouter } from "vue-router";
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
const router = useRouter();
const items = props.data;

// status list

const listBoxOptions = [
  "Pending",
  "Followup",
  "Recommendation Given",
  "Documents Pending",
  "Documents Submitted",
  "Offer Letter Received",
  "Visa Process Started",
];

const isModalActive = ref(false);

const isModalDangerActive = ref(false);

const perPage = ref(5);

const currentPage = ref(0);

const checkedRows = ref([]);

const itemsPaginated = computed(() =>
  items.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() => Math.ceil(items.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }

  return pagesList;
});



// goto action page 

const goToAction=(id)=>{
 
  router.push('/salesCRM/actions/'+id)

}


</script>

<style></style>
