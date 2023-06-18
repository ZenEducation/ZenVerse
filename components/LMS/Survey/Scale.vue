<template>
    <div class="">
      <div class="flex justify-between">
        <div>Low</div>
        <div>
            High
        </div>
  
      </div>
      <div class="flex justify-between w-full mt-3 gap-2">
            <div class="flex justify-center items-center w-4/12 h-12 p-10 cursor-pointer rounded  border dark:border-slate-600 " v-for="(item,idx) in [1,2,3]" :key="idx"
            @click="selectItem(idx)"
            :class="[{active_class:idx==seclecId}]"
            >
  {{ idx+1 }}
            </div>
        </div>
    </div>
</template>

<script setup>
const seclecId=ref(null)
const emit = defineEmits(['onAction'])
const selectItem =(id) =>{
    seclecId.value=id
    emit('onAction') 
}

</script>


<style scoped>
.active_class{
    border:2px rgb(143, 142, 142) solid;

}
</style>





