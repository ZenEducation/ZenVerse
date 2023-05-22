<script setup>
import { computed } from "vue";
import { useCollectionStore } from "~~/stores/collections";
import { mdiTableOff, mdiBank, mdiCreditCardOutline } from "@mdi/js";
import SectionMain from "@/components/Sections/SectionMain.vue";
import NotificationBar from "@/components/NotificationBars/NotificationBar.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentEmpty from "@/components/Cards/CardBoxComponentEmpty.vue";
import CardBoxCollection from "@/components/Cards/CardBoxCollection.vue";

definePageMeta({
  middleware: ["route-check"],
});

const collectionStore = useCollectionStore();

const route = useRoute();

const category = toTitleCase(route.params.category);

const collectionItems = computed(
  () => collectionStore[route.params.category] || []
);

function toTitleCase(txt) {
  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
}
</script>

<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <SectionTitleLineWithButton :icon="mdiBank" :title="category" main>
          <BaseButton
            href="https://justboil.me/tailwind-admin-templates/vue-dashboard/"
            :label="`Add ${category}`"
            :icon="mdiCreditCardOutline"
            color="contrast"
            rounded-full
            small
          />
        </SectionTitleLineWithButton>
        <CardBoxCollection
          v-for="item in collectionItems"
          :key="item.id"
          :id="item.id"
          :cat="route.params.category"
          :item="item"
          :name="item.firstName + ' ' + item.middleName ?? '' + item.lastName"
          :email="item.email"
          :date="item.phone"
        />

        <SectionTitleLineWithButton
          :icon="mdiTableOff"
          title="Empty variation"
        />
        <NotificationBar color="danger" :icon="mdiTableOff">
          <b>Empty.</b> When there's nothing to show
        </NotificationBar>
        <CardBox>
          <CardBoxComponentEmpty />
        </CardBox>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
