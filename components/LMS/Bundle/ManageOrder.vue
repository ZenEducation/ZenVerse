<template>
  <div>
    <p class="font-bold text-xl">Manage Order</p>
    <p class="text-sm mb-6">Change the order of the products based on priority</p>
  </div>
  <table>

    <VueDraggableNext class="dragArea list-group w-full" @change="log" tag="tbody" :list="items">
      <tr v-for="(item, index) in items" :key="item.id" class="cursor-move">

        <td data-label="Drag">
          <DisplayBaseIcon :path="mdiDotsGrid" />
        </td>
        <td data-label="Index">
          {{ index + 1 }}
        </td>
        <td data-label="name">
          <img :src="image" class="h-12 inline pr-2" alt="" />
          {{ item.name }}
        </td>
        <td data-label="Price">
          <template v-if="item.isFree"> Free </template>
          <template v-else>
            {{ item.price }}
          </template>
        </td>
        <td data-label="Settings">
          <DisplayBaseIcon :path="mdiDotsVertical" />
        </td>
      </tr>
    </VueDraggableNext>
  </table>
</template>

<script setup>
import { ref } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import image from '@/assets/img/bundleImage.png'
import { mdiDotsGrid, mdiDotsVertical } from "@mdi/js";
import { API , graphqlOperation} from "aws-amplify";
import { getTestSeries } from "~~/src/graphql/queries";
import { updateTestSeries } from "~~/src/graphql/mutations";
const props = defineProps({
  postId: {
    type: String,
    default: null,
  },
  checkable: { type: Boolean, default: false },
});


const list = ref([
  { name: "John", id: 1 },
  { name: "Joao", id: 2 },
  { name: "Jean", id: 3 },
  { name: "Gerard", id: 4 },
]);

const items = ref([


]);

const version = ref(0);

onMounted(async () => {
  const myQuery = `
  query MyQuery($id: ID!) {
    getTestSeries(id: $id) {
      MockTests {
        items {
          _version
          mockTest {
            id
            name
            price
            isFree
          }
        }
      }
      orders {
        id
        order
      }
      id
      _version
    }
  }
`;

  const response = await API.graphql(
    graphqlOperation(myQuery, { id: props.postId })
  );
  console.log(response.data.getTestSeries);
  orders.value = response?.data?.getTestSeries?.orders || [];
  version.value = response?.data?.getTestSeries?._version;

  items.value = response.data.getTestSeries.MockTests.items.map((element) => { return { ...element.mockTest , order:null } });

  orders.value.forEach((order) => {
    let index = items.value.findIndex(item => item.id == order.id)
    items.value[index].order = order.order;
  })

  items.value.sort((a, b) => {
    const nameA = a?.order || ""; // ignore upper and lowercase
    const nameB = b?.order || ""; // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  })
  
  console.log(items.value);
  log()
})

onUnmounted(async () => {
  try {
    
    let input = { id: props.postId, _version: version.value, orders: orders.value.map((item)=>{return {...item}}) }
    console.log(input);
    let update = await API.graphql({
      query: updateTestSeries,
      variables: { input: input }
    })
    console.log(update.data.updateTestSeries);
  } catch (error) {
    console.error(error);
  }
})

const orders = ref([])

function log(event) {
  console.log(list.value);
  orders.value = items.value.map((item , index) => {
    return {
      id: item.id,
      order: index + 1
    }
  })
  console.log(orders.value);
}
</script>
