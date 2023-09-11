<template>
  <div :onclick="handleOnclick" class="flex justify-around w-full">
  <div class="avatar h-10 w-10">
    <img class="rounded-full" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="avatar" />
    <div
      class="absolute right-0 h-3 w-3 rounded-full border-2 border-white dark:border-navy-700"
      :class="chat.isOnline ? 'dark:bg-accent bg-primary' : 'bg-slate-300'"
    >
      <span
        v-show="chat.isOnline"
        class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80 dark:bg-accent"
      ></span>
    </div>
  </div>
  <div class="flex flex-1 flex-col">
    <div class="flex items-baseline justify-between space-x-1.5">
      <p
        class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
      >
        {{ chat?.name }}
      </p>
      <span class="font-light text-slate-400 dark:text-navy-300">{{getDateTimeforChat}}</span>
    </div>
    <div class="mt-1 flex items-center justify-between space-x-1">
      <p class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300">
        {{ chat.lastMessage }}
      </p>
      <div
        v-show="chat.unreadCount"
        :class="
          chat.isOnline
            ? 'bg-primary text-white'
            : 'bg-slate-200 text-slate-800 dark:bg-navy-450 dark:text-white'
        "
        class="flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full px-1.5 text-tiny+ font-medium leading-none"
      >
        {{ chat.unreadCount }}
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { getDateTime } from '@/components/helpers/helpers'
import { useMyStore } from '@/stores/chatName';

const myStore = useMyStore();

const props = defineProps(["chat"]);
const getDateTimeforChat = computed(()=> {
    return getDateTime(props.chat.date)
})
const handleOnclick=()=>{
  console.log("hello");
  // console.log("clicked on " + myStore.name);
  myStore.setName(props.chat.name);
  console.log("clicked on " + myStore.name );
  console.log("data :" + myStore.data);
}
</script>
