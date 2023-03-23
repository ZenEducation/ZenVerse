<template>
  <table>
    <thead>
      <tr>
        <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td v-for="(value, key) in item" :key="key">
          <template v-if="typeof value === 'object'">
            <td v-for="(subValue, subKey) in value" :key="subKey">{{
              subValue
            }}</td>
          </template>
          <template v-else>
            {{ value }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const items = ref([
      { id: 1, name: "John", address: { street: "Main St", city: "New York" } },
      {
        id: 2,
        name: "Jane",
        address: { street: "Broadway", city: "Los Angeles" },
      },
      {
        id: 3,
        name: "Bob",
        address: { street: "Market St", city: "San Francisco" },
      },
    ]);
    const columns = ref(["ID", "Name", "Street", "City"]);

    return { items, columns };
  },
};
</script>
<style>
table {
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
</style>
