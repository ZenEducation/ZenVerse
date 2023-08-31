<template>
  <div class="">
    <div class="flex w-full py-3">
      <div class="w-2/12 font-semibold px-2 ">Date</div>
      <div class="w-3/12 font-semibold">Particular</div>
      <div class="w-2/12 font-semibold">Vch. Name</div>
      <div class="w-1/12 font-semibold">Vch. No.</div>
      <div class="w-2/12 font-semibold">Debit Amt</div>
      <div class="w-2/12 font-semibold">Credit Amt</div>
    </div>
    <div class="" v-for="(value, idx) in tableValue" :key="idx">
      <div class="flex cursor-pointer border-b border-t  py-3 bg-gray-100 dark:bg-gray-900" @click="expand(idx+1)">
        <div class="w-2/12 px-2">{{ value.items[0] }}</div>
        <div class="w-3/12">{{ value.items[1] }}</div>
        <div class="w-2/12">{{ value.items[2] }}</div>
        <div class="w-1/12">{{ value.items[3] }}</div>
        <div class="w-2/12">{{ value.items[4] }}</div>
        <div class="w-2/12">{{ value.items[5] }}</div>
      </div>
      <div class="" v-if="value.expand">
        <div class="flex">
          <div class="w-2/12 p-3">{{ value.expandVale[0] }}</div>
          <div class="w-3/12 py-3">{{ value.expandVale[1] }}</div>
          <div class="w-2/12 py-3">{{ value.expandVale[2] }}</div>
          <div class="w-1/12 py-3">{{ value.expandVale[3] }}</div>
          <div class="w-2/12 py-3">{{ value.expandVale[4] }}</div>
          <div class="w-2/12 py-3">{{ value.expandVale[5] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["heads", "bodyValues"]);
const expandId = ref(null);
const exoandItem = ref(false);



const tableValue = ref(props.bodyValues)
const expand = (id) => {
  tableValue.value.map((item)=>{
    if(item.id==id){
  
      if(item.expand==true){
        item.expand=false
      } else{
        item.expand=true
      }
    }
    return item
  })


};

</script>

<style></style>
