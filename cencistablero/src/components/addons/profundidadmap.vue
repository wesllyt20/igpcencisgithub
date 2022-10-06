<template>
  <Bubble :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
    :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>

<script>
import { Bubble, LineController } from "vue-chartjs/legacy";


import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale)

export default {
  name: "BubbleChart",
  components: {
    Bubble,
    LineController
  },
  props: {
    chartId: {
      type: String,
      default: "bubble-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => { },
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartData: {

        datasets: [

          {
            label: "Altos",
            backgroundColor: "#f87979",
            data: [
              {
                x: 200,
                y: 0,
                r: 7,
              },
              {
                x: 300,
                y: 50,
                r: 7,
              },
              {
                x: 450,
                y: 190,
                r: 7,
              },
              {
                x: 375,
                y: 20,
                r: 7,
              },
            ],
          },
          {
            label: "Bajos",
            backgroundColor: "#7C8CF8",
            data: [
              {
                x: 900,
                y: -600,
                r: 7,
              },
              {
                x: 800,
                y: -650,
                r: 7,
              },
              {
                x: 750,
                y: -690,
                r: 7,
              },
              {
                x: 875,
                y: -620,
                r: 7,
              },
            ],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            max: 0,
            min: -800,
            ticks: {
              stepSize: 100
            }
          },
          x: {
            max: 1100,
            min: 0,
            ticks: {
              stepSize: 100
            }
          },

        }
      },
    };
  },
};
</script>