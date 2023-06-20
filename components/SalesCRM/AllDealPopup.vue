<template>
    <div class="all_deal w-full p-5">
        <div class="search_sec  w-full ">
            <FormField label="" >
              <FormControl
                :icon="mdiMagnify"
                name="search"
                type="search"
                placeholder="Search saved lists..."
              />
            </FormField>
     
        </div>

        <div class="flex my-8">
            <div class="font-bold text-gray-800 dark:text-gray-100">All deals </div>
            <div class="uppercase font-sm ml-6 font-thin ">Default List </div>

        </div>

        <div class="flex">
            <BaseIcon
                   :path="mdiMenuRight"
                   class="text-gray-500 "
                   size="25"
                   h="25"
                   w="25"
                 />
                 <div class="">
                   <b class="text-gray-500"> My List </b>(12)
                 </div>
        </div>

        <div class=" text-right mt-6">

            <BaseButton
              :icon="mdiPlus"
                label="Create New List"
                type="button"
                color="info"
                class="uppercase"
                :style="[]"
              />
        </div>
    </div>
</template>


<script setup>
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import {
    mdiMenuRight,
    mdiPlus,
  mdiMagnify

} from "@mdi/js";
</script>


<style scoped>

</style>
