<script setup>
import { ref, watch, computed, onMounted } from "vue";
// The following code is working in development but is giving error during the build process in AWS Hosting, as well as the npm run generate (nuxt generate) command

  //                <VerticalBarChart :labels='["Italy", "France", "Spain", "USA", "Argentina"]' :datasets='[
  // {
  //                     label: "Dataset 1",
  //                     data: [55, 49, 44, 24, 15],
  //                     backgroundColor: "blue",
  //                   },
  //                   {
  //                       label: "Dataset 2",
  //                       data: [55, 49, 44, 24, 15],
  //                       backgroundColor: "red",
  //                     },
  //                 ]'   />
import {
  Chart,
  BarElement,
  BarController,
  LineElement,
  PointElement,
  LineController,
  LinearScale,
  CategoryScale,
  Tooltip,
} from "chart.js";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  labels:{
    type:Array,
    default:()=>[]
  },
  datasets:{
    type: Array,
    required:true,
  }

});

const barColors = ["red", "green","blue","orange","brown"];
const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];

const newData = {
  labels: props.labels,
  datasets: props.datasets
}

const root = ref(null);

Chart.register(
  BarElement,
  BarController,
  LineElement,
  PointElement,
  LineController,
  LinearScale,
  CategoryScale,
  Tooltip
);
let chart;



onMounted(() => {
  chart = new Chart(root.value, {
    type: "bar",
    data: newData,
    options: {
    indexAxis: 'y',
  }

  })
});

const chartData = computed(() => props.data);

watch(chartData, (data) => {
  if (chart) {
    chart.data = data;
    chart.update();
  }
});
</script>

<template>
  <canvas ref="root" />
</template>
