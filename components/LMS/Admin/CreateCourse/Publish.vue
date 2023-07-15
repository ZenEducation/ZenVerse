<template>
  <div class="w-8/12 mx-auto mt-10 shadow">
    <CardBox>
      <div class="flex justify-between">
        <div class="my-auto text-2xl">Publish</div>
        <BaseButton type="submit" color="info" label="SAVE " />
      </div>

      <div class="mt-2 text-xl">Course publish status</div>
      <div class="flex mt-3">
        <div class="">
          <FormCheckRadioGroup
            name="sample-radio-two"
            type="radio"
            :options="radioOptions"
            is-column
          />
        </div>
        <div class="pl-1">
          <div class="">Draft</div>
          <div class="mt-1 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            impedit eveniet debitis at nostrum animi molestiae nihil ipsum, unde
            quisquam excepturi
          </div>
        </div>
      </div>
      <div class="flex mt-3">
        <div class="">
          <FormCheckRadioGroup
            name="sample-radio-two"
            type="radio"
            :options="radioOptions"
            is-column
          />
        </div>
        <div class="pl-1">
          <div class="">Pre Order</div>
          <div class="mt-1 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            impedit eveniet debitis at nostrum animi molestiae nihil ipsum, unde
            quisquam excepturi
          </div>
        </div>
      </div>
      <div class="flex mt-3">
        <div class="">
          <FormCheckRadioGroup
            name="sample-radio-two"
            type="radio"
            :options="radioOptions"
            is-column
          />
        </div>
        <div class="pl-1">
          <div class="">Published</div>
          <div class="mt-1 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            impedit eveniet debitis at nostrum animi molestiae nihil ipsum, unde
            quisquam excepturi
          </div>
        </div>
      </div>
    </CardBox>
    <CardBox class="mt-5">
      <div class="text-xl">
        Anticipating a large number of sign-up at launch ?
      </div>
      <div class=" mt-2 text-gray-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore aliquid fugiat harum at velit animi quas dolores dolor, delectus minima assumenda earum sint, iure officia? Accusantium amet aperiam quia?
      </div>
      </CardBox>
  </div>
</template>

<script setup>
import BaseIcon from "@/components/Display/BaseIcon.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";
const radioOptions = { one: "" };
</script>

<style></style>
