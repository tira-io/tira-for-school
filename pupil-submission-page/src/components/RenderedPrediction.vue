<template>
    <v-row justify="center" align="center">
        <v-col cols="4"><v-img :src="input_image.src" style="width: 100%;"/></v-col>
        <v-col cols="4"><v-img src="@/assets/prediction-with-ki.png" style="width: 100%"/></v-col>
        <v-col cols="4"><!--{{prediction}}-->
        <Bar :data="chartData" :options="chartOptions" />
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  props: ['input_image', 'prediction'],
  components: {Bar},
  data() {
    return {
      chartOptions: {
        indexAxis: 'y',
      }
    }
  },
  computed: {
    chartData() {
      return {
        labels: [ 'Vorfahrtsstra&szlig;e', 'Vorfahrt Gew&auml;hren'],
        datasets: [ { data: [80, 20] } ]
      }
    }
  }
}
</script>