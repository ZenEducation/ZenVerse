<template>
    <div class="p-5">
    <Pie :data="chartData" :options="chartOptions" height="150" width="150" class="" />
</div>
</template>


<script >
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Pie } from 'vue-chartjs'


ChartJS.register(ArcElement, Tooltip)

export default {
  name: 'App',
  components: {
    Pie
  },
  data() {
    return {
        chartData:{
  labels: ['VueJs', 'EmberJs', 'ReactJs'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#0080ff', '#00D8FF'],
      data: [50, 25, 25]
    }
  ]
},
chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        }
    }
  }
}
</script>