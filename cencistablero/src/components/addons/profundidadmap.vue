<template>
  <div>
    <Bubble :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
      :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
    <v-btn @click="setIntensidad"></v-btn>
  </div>
</template>

<script>
import { Bubble } from "vue-chartjs/legacy";
import { mapState } from 'vuex';

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
      res: 950,
      chartData: {
        datasets: [
          {
            label: "Superficial", // 0-60
            backgroundColor: "#FF1744",
            data: [
              {
                x: 200,
                y: -50,
                r: 4,
              },
              {
                x: 300,
                y: -40,
                r: 4,
              },
              {
                x: 450,
                y: -20,
                r: 4,
              },
              {
                x: 375,
                y: -10,
                r: 4,
              },
            ],
          },
          {
            label: "Intermedio", // 61 - 300
            backgroundColor: "#76FF03",
            data: [
              {
                x: 200,
                y: -90,
                r: 4,
              },
              {
                x: 300,
                y: -150,
                r: 4,
              },
              {
                x: 450,
                y: -290,
                r: 4,
              },
              {
                x: 375,
                y: -100,
                r: 4,
              },
            ],
          },
          {
            label: "Profundos", //301 - 800
            backgroundColor: "#FFEB3B",
            data: [
              {
                x: 900,
                y: -600,
                r: 4,
              },
              {
                x: 800,
                y: -650,
                r: 4,
              },
              {
                x: 750,
                y: -690,
                r: 4,
              },
              {
                x: 875,
                y: -720,
                r: 4,
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
  created: function () {
    this.$store.dispatch('getAthena')
  },
  computed: {
    ...mapState({
      athena: state => state.athena
    })
  },
  methods: {
    setIntensidad() {
      //contador de items
      var superficial = 0
      var intermedio = 0
      var profundo = 0
      var verga = 0
      //Creador de array
      const sup = []
      const inter = []
      const prof = []
      const vrg = []
      for (var i = 0; i <= 7; i++) {

        var getProfundidad = this.athena[i].datos[0].profundidad

        if (getProfundidad <= 60) {
          console.log("->", getProfundidad, " soy menor a 61")

          sup.push(getProfundidad)
          superficial++
        }
        if (getProfundidad >= 61 && getProfundidad <= 300) {
          console.log("->", getProfundidad, " soy mayor a 60 y menor a 301")

          inter.push(getProfundidad)
          intermedio++
        }
        if (getProfundidad >= 301 && getProfundidad <= 800) {
          console.log("->", getProfundidad, " soy mayor a 300 y menor a 800")

          prof.push(getProfundidad)
          profundo++
        }
        if (getProfundidad >= 801) {
          console.log("->", getProfundidad, " soy mayor a 800 y menor a el infinito y mas alla")

          vrg.push(getProfundidad)
          verga++
        }
      }
      console.log("superficiales: ", superficial, ", intermedios: ", intermedio, ", profundos: ", profundo, " y nada ", verga)
      console.log("ARRAYS: [superficiales: ", sup, ", intermedios: ", inter, ", profundos: ", prof, " y nada ", vrg, "]")

    }
  }
}


</script>