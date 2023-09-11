<template>
  <div
    class="grow overflow-y-auto px-[calc(var(--margin-x)-.5rem)] py-5 transition-all duration-[.25s]"
  >
    <div
      class="space-y-5"
      v-for="(message, index) in getUserMessages"
      :key="index"
    >
      <div v-if="getDay(index)" class="mx-4 flex items-center space-x-3">
        <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        <p>{{ getDay(index) }}</p>
        <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      </div>

      <!-- reciever message -->
      <div
        v-if="message.sender !== 1"
        class="flex items-start space-x-2.5 sm:space-x-5"
      >
        <div v-if="isAvatarVisible(index)" class="avatar">
          <img
            class="rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="avatar"
          />
        </div>

        <div class="flex flex-col items-start mt-4 space-y-3.5">
          <div class="mr-4 max-w-lg sm:mr-10">
            <div
              v-if="message.message"
              class="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-sm dark:bg-navy-700 dark:text-navy-100"
            >
              {{ message.message }}
            </div>
            <div
              v-if="message.images && message.images.length"
              class="grid grid-cols-12 gap-2"
            >
              <div
                class="group relative"
                :class="
                  message.images.length === 1
                    ? 'col-span-12'
                    : message.images.length === 2
                    ? 'col-span-12 sm:col-span-6'
                    : 'col-span-12 sm:col-span-4'
                "
                v-for="(image, index) in message.images"
                :key="index"
              >
                <img
                  class="h-full rounded-lg object-cover"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="image"
                />
                <div
                  class="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  <button
                    class="inline-flex h-9 w-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 m-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <p
              v-if="getTime(index)"
              class="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300"
            >
              {{ getTime(index) }}
            </p>
          </div>
        </div>
      </div>
      <!-- sender's messages -->
      <div
        v-if="message.sender === 1"
        class="flex items-start justify-end space-x-2.5 sm:space-x-5"
      >
        <div class="flex flex-col items-end space-y-3.5">
          <div class="ml-4 max-w-lg sm:ml-10">
            <div
              v-if="message.message"
              class="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white"
            >
              {{ message.message }}
            </div>
            <div
              v-if="message.images && message.images.length > 0"
              class="grid grid-cols-12 gap-2"
            >
              <div
                :class="
                  message.images.length === 1
                    ? 'col-span-12'
                    : message.images.length === 2
                    ? 'col-span-12 sm:col-span-6'
                    : 'col-span-12 sm:col-span-4'
                "
                class="group relative"
              >
                <img
                  class="h-48 rounded-lg object-cover"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="image"
                />
                <div
                  class="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  <button
                    class="inline-block h-9 w-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 m-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <p
              v-if="getTime(index)"
              class="mt-1 ml-auto text-left text-xs text-slate-400 dark:text-navy-300"
            >
              {{ getTime(index) }}
            </p>
          </div>
          <div class="ml-4 max-w-lg sm:ml-10"></div>
        </div>
        <div v-if="isAvatarVisible(index)" class="avatar">
          <img
            class="rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue";
import { useChatStore } from "@/stores/chat";
import {
  getHoursMin,
  getFullDay,
  areSameDays,
} from "@/components/helpers/helpers";
import { storeToRefs } from "pinia";
import { useMyStore } from '@/stores/chatName';

const store = useChatStore();
// const { getUserMessages } = storeToRefs(store);
const {} = store;
const myStore = useMyStore();

const getUserMessages = ref(myStore.data);

// Watch for changes in myStore.data and update getUserMessages
watchEffect(() => {
  getUserMessages.value = myStore.data;
  console.log(getUserMessages.value);
});


const getTime = (index) => {
  if (
    index + 1 === getUserMessages.value.length ||
    getUserMessages.value[index + 1].sender !==
      getUserMessages.value[index].sender ||
    !areSameDays(
      getUserMessages.value[index + 1].date,
      getUserMessages.value[index].date
    )
  ) {
    return getHoursMin(getUserMessages.value[index].date);
  }
  return null;
};
const getDay = (index) => {
  let date = getUserMessages.value[index].date;
  console.log(date);
  if (!index || !areSameDays(date, getUserMessages.value[index - 1].date)) {
    return getFullDay(date);
  } else {
    return null;
  }
};
const isAvatarVisible = (index) => {
  // if (
  //   index === 0 ||
  //   getUserMessages.value[index].sender !==
  //     getUserMessages.value[index - 1].sender
  // )
  //   return true;
  // return false;
  return true;
};
</script>
