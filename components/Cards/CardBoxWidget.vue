<script setup>
import { mdiCog } from "@mdi/js";
import CardBox from "@/components/Cards/CardBox.vue";
import NumberDynamic from "@/components/Display/NumberDynamic.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import PillTagTrend from "@/components/Display/PillTagTrend.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";

defineProps({
  number: {
    type: Number,
    default: 0,
  },
  icon: {
    type: String,
    default: null,
  },
  prefix: {
    type: String,
    default: null,
  },
  suffix: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  color: {
    type: String,
    default: null,
  },
  trend: {
    type: String,
    default: null,
  },
  trendType: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <CardBox>
    <BaseLevel v-if="trend" class="mb-3" mobile>
      <PillTagTrend :trend="trend" :trend-type="trendType" small />
      <BaseButton
        :icon="mdiCog"
        icon-w="w-4"
        icon-h="h-4"
        color="lightDark"
        small
      />
    </BaseLevel>
    <BaseLevel mobile class="">
      <div>
        <h1 class="text-3xl mx-2 leading-tight font-semibold text-black dark:text-white">
          <NumberDynamic :value="number" :prefix="prefix" :suffix="suffix" />
        </h1>
        <h3 class="text-lg mx-2 leading-tight text-gray-500 dark:text-slate-200">
          {{ label }}
        </h3>
      </div>
      <BaseIcon
        v-if="icon"
        :path="icon"
        size="60"
        w=""
        h="h-16"
        :class="color"
      />
    </BaseLevel>
  </CardBox>
</template>
