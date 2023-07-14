<template>
  <div>
    <div class="flex justify-between mb-10">
      <div>
        <NuxtLink to="./ArticleCreatePage">
          <button class="flex items-center">
            <BaseIcon :path="mdiArrowLeftBold" class="cursor-pointer" />
            <p>Back</p>
          </button>
        </NuxtLink>
      </div>
      <ul class="flex justify-start gap-0">
        <p id="year"></p>
        <p id="month"></p>
        <p id="day"></p>
      </ul>
    </div>

    <CardBox>
      <div v-html="content.content" class="w-full h-auto"></div>
    </CardBox>
  </div>
</template>

<script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import TableCheckboxCell from "@/components/Tables/TableCheckboxCell.vue";
// import DropDown from "~~/components/helpKnowledgeAndDocs/DropDown.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import { mdiCalendarAccountOutline } from "@mdi/js";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { mdiArrowLeftBold, mdiLink } from "@mdi/js";
import BaseIcon from "@/components/Display/BaseIcon.vue";
// import BaseIcon from "@/components/Display/BaseIcon.vue"

const likes = ref(0)
const dislikes = ref(0)
const content = ref('')

onMounted(() => {
  console.log('editor')
  console.log(localStorage.getItem('content'))
  content.value = JSON.parse(localStorage.getItem('content'))

  //   Date created

  const y = new Date();

  content.year = y.getFullYear() + '/';
  content.month = y.getMonth() + 1 + '/';
  content.day = y.getDate();

  document.getElementById('year').innerHTML = content.year
  document.getElementById('month').innerHTML = content.month
  document.getElementById('day').innerHTML = content.day

  console.log(content.year)
  console.log(content.month)
  console.log(content.day)
})
</script>