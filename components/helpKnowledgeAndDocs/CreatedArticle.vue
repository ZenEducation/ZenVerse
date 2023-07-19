<template>
    <div>
        <div class="flex justify-between mb-10">
            <div>
               
                  <button @click="goBack" class="flex items-center" >
                    <BaseIcon :path="mdiArrowLeftBold" class="cursor-pointer"/>
                    <p>Back to</p>
                  </button>
               
            </div>
            <ul class="flex justify-start gap-0">
               <p id="year"></p>
               <p id="month"></p>
               <p id="day"></p>
            </ul>
        </div>

        <CardBox>
            <div id="Content_data" class="w-full h-auto"></div>
        </CardBox>
    </div>
</template>

<script setup>
import CardBox from "@/components/Cards/CardBox.vue";
import TableCheckboxCell from "@/components/Tables/TableCheckboxCell.vue";
import DropDown from "~~/components/helpKnowledgeAndDocs/DropDown.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import { mdiCalendarAccountOutline } from "@mdi/js";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { mdiArrowLeftBold, mdiLink } from "@mdi/js";
import BaseIcon from "@/components/Display/BaseIcon.vue";
// import BaseIcon from "@/components/Display/BaseIcon.vue"
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const goBack = () => {
  router.back();
};
// const post = ref(props.content);
const likes = ref(0)
const dislikes = ref(0)
const content = ref({})

onMounted(() => {
  // console.log(localStorage.getItem('content'))
 const data = JSON.parse(localStorage.getItem('content'))
console.log(data);
//   Date created

  const y = new Date();
  
  content.year = y.getFullYear() + '/';
  content.month = y.getMonth() + 1 + '/';
  content.day = y.getDate();

  document.getElementById('year').innerHTML = content.year
  document.getElementById('month').innerHTML = content.month
  document.getElementById('day').innerHTML = content.day

  document.getElementById("Content_data").innerHTML = data

//   console.log(content.year)
//   console.log(content.month)
//   console.log(content.day)
})
</script>