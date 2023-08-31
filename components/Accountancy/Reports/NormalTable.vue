<template>
  <table>
    <thead>
      <tr>
        <th v-for="(item, idx) in heads" :key="idx">
          {{ item.Value }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, idx) in bodyValues" :key="idx">
        <td data-label="Date" v-for="(data, index) in value.items" :key="index">
          {{ data }}
        </td>
      </tr>

     
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps(["heads", "bodyValues"]);
</script>

<style></style>
