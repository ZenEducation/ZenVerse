<template>
  <div class="pt-5">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      :height="80"
      
    /></div>
  </template>
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip,BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    props:['value','labels','color'],
    components: { Bar },
    data() {
      return {
        chartData: {
          labels:this.labels,

          datasets: [
             {
              label: 'Revenue',
               data: this.value,
               backgroundColor:  this.color
             }
             ]
        },
        chartOptions: {
          responsive: true,

        }
      }
    }
  }
  </script>