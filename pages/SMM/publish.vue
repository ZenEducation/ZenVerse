<template>
  <div>
    <NuxtLayout name="smm">
      <SectionMain>
        <div class="mx-6 pt-1">
          <div class="flex">
            <BaseButton
              v-for="(btn, idx) in tabs"
              :key="idx"
              :label="btn.name"
              :icon="btn.icon"
              :color="activeItem == btn.id ? 'info' : ''"
              class="mx-1"
              @click="getActem(btn.id)"
            />
          </div>
          <div class="my-3">
            <Publish v-if="activeItem==1" />
            <Queue  v-if="activeItem==2" />
            <Sent  v-if="activeItem==3" />
            <Drafts  v-if="activeItem==4" />
            <Schedule  v-if="activeItem==5" />
            <Import  v-if="activeItem==6" />
            <RSS  v-if="activeItem==7" />
          </div> 
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>

<script setup>
import {
  mdiBallot,
  mdiBallotOutline,
  mdiAccount,
  mdiMail,
  mdiCheck,
  mdiProgressCheck,
  mdiReload,
  mdiCreditCardOutline,
  mdiSendVariant,
  mdiPlusBoxMultiple,
  mdiFormatListBulletedSquare,
  mdiFile,
  mdiCalendarMonthOutline,
  mdiFileDownloadOutline,
  mdiRss,
  mdiImagePlus
} from "@mdi/js";

import Publish from "@/components/SMM/Publish/Publish.vue";
import Queue from "@/components/SMM/Publish/Queue.vue"
import Sent from "@/components/SMM/Publish/Sent.vue"
import Drafts from "~~/components/SMM/Publish/Drafts.vue";
import Schedule from "~~/components/SMM/Publish/Schedule.vue";
import Import from "~~/components/SMM/Publish/Import.vue";
import RSS from "~~/components/SMM/Publish/RSS.vue";





import BaseButton from "@/components/Buttons/BaseButton.vue";
const activeItem = ref(1);
const tabs = [
  {
    id: 1,
    name: "Publish",
    icon: mdiSendVariant,
  },
  {
    id: 2,
    name: "Queue",
    icon: mdiPlusBoxMultiple,
  },
  {
    id: 3,
    name: "Sent",
    icon: mdiFormatListBulletedSquare,
  },
  {
    id: 4,
    name: "Drafts",
    icon: mdiFile,
  },
  {
    id: 5,
    name: "Schedule",
    icon: mdiCalendarMonthOutline,
  },
  {
    id: 6,
    name: "Import",
    icon: mdiFileDownloadOutline,
  },
  {
    id: 7,
    name: "RSS",
    icon: mdiRss,
  },
];

const getActem = (id) => {
  activeItem.value = id;
};
const info = "info";
</script>
