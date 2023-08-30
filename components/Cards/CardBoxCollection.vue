<script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import UserAvatar from "@/components/Avatars/UserAvatar.vue";
import { useCollectionStore } from "~~/stores/collections";

const router = useRouter();

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  cat: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: null,
  },
  item: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const collectionStore = useCollectionStore()[props.cat];
function handleClick() {
  collectionStore.userName = props.name;
  collectionStore.email = props.email;

  router.push(`${props.cat}/${props.id}`);
}
</script>

<template>
  <CardBox class="mb-6 last:mb-0">
    <div id="top" @click="handleClick">
      <BaseLevel type="justify-start">
        <UserAvatar class="w-12 h-12 mr-6" :username="name" />
        <div class="text-center md:text-left overflow-hidden">
          <h4 is-hoverable class="text-xl text-ellipsis">
            {{ name }}
          </h4>
          <p class="text-gray-500 dark:text-slate-400">
            {{ date }} | {{ email }}
          </p>
        </div>
      </BaseLevel>
    </div>
  </CardBox>
</template>

<style>
#top:hover {
  cursor: pointer;
}
</style>
