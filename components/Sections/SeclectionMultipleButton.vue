<script setup>
import {
  mdiCog,
  mdiAlertCircleOutline,
  mdiCheckboxBlankOutline,
} from "@mdi/js";
import { useSlots, computed } from "vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import IconRounded from "@/components/Display/IconRounded.vue";
import FormCheckRadio from "@/components/Forms/FormCheckRadio.vue";

defineProps({
  icon: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    required: true,
  },
  main: Boolean,
});
const isMobile = computed(() => {
  const width = window.innerWidth;
  return width < 768; // adjust breakpoint as needed
});
const volumeOn = ref(true);
const hasSlot = computed(() => useSlots().default);
</script>

<template>
  <section
    :class="{ 'pt-6': !main }"
    class="mb-6 flex items-center justify-between"
  >
    <div class="flex items-center justify-start">
      <IconRounded
        v-if="icon && main"
        :icon="icon"
        color="light"
        class="mr-3"
        bg
      />
      <BaseIcon
        v-else-if="mdiAlertCircleOutline"
        :path="mdiAlertCircleOutline"
        class="mr-2"
        size="20"
      />
      <h1 :class="main ? 'text-3xl' : 'text-2xl'" class="leading-tight">
        {{ title }}
      </h1>
    </div>

    <div :class="{ 'text-sm': isMobile }" class="flex items-center">
      <div class="flex" :class="{ draftContent: isMobile }">
        <FormCheckRadio
            v-model="userSwitchVal"
            name="notifications-switch"
            type="checkbox"
           
            :input-value="true"
          />
        <div style="margin-right: 0.5rem" :class="{ 'draft-text': isMobile }">
          Draft
        </div>
        <BaseIcon
          v-if="mdiAlertCircleOutline"
          :path="mdiAlertCircleOutline"
          class="mr-2"
          size="20"
        />
      </div>
      <slot v-if="hasSlot" />
      <BaseButton v-else :icon="mdiCog" color="whiteDark " />
    </div>
  </section>
</template>

<style>
/* adjust font size and margin based on screen width */
@media screen and (max-width: 767px) {
  .draftContent {
    margin-left: 1rem;
  }
  .text-sm {
    display: inline;
  }
  .draft-text {
    font-size: rem;
  }
}
</style>
