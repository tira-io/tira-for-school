<template>
    <v-row justify="center" align="center">
        <v-col cols="4"><v-img :src="input_image.src" style="margin: 0 auto" width="250"/></v-col>
        <v-col cols="4"><v-img src="@/assets/prediction-with-ki.png" style="width: 100%"/></v-col>
        <v-col cols="4"><Bar :data="chartData" :options="chartOptions" /></v-col>
    </v-row>
</template>

<script lang="ts">
import { Bar } from 'vue-chartjs'
import {label_vorfahrt_strasse, label_vorfahrt_gewaehren} from '@/datasets.ts'
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
        datasets: [
          {label: 'Vorfahrtsstra&szlig;e', backgroundColor: '#f87979', data: [this.prediction['confidences']['' + label_vorfahrt_strasse]*100, 0]},
          {label: 'Vorfahrt Gew&auml;hren', backgroundColor: '#4F7942', data: [0, this.prediction['confidences']['' + label_vorfahrt_gewaehren]*100] }
        ]
      }
    }
  }
}
</script>