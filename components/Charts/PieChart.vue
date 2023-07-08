<script setup>
import { ref, watch, computed, onMounted } from "vue";
// The following code is working in development but is giving error during the build process in AWS Hosting, as well as the npm run generate (nuxt generate) command

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
  DoughnutController,
  PieController,
  ArcElement
} from "chart.js";

Chart.register(ArcElement);


const props = defineProps({
  data:{
    type: Object,
    required:true,
  }
});

const root = ref(null);

Chart.register(
  BarElement,
  DoughnutController,
  PieController,
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
    type: 'pie',
    data: props.data,
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
<!-- <DounutChart  :data="{
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  }"   /> -->