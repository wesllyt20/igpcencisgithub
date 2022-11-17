<template>
  <div>
    <Bubble :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
      :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
  </div>
</template>

<script>
import { Bubble } from "vue-chartjs/legacy";
import { mapState, mapActions } from 'vuex';


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
  computed: {
    ...mapState(['athena'])
  },
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
      chartData: {
        datasets: [
          {
            label: "Superficial", // 0-60
            backgroundColor: "#FF1744",
            data: [],
          },
          {
            label: "Intermedio", // 61 - 300
            backgroundColor: "#76FF03",
            data: [],
          },
          {
            label: "Profundos", //301 - 800
            backgroundColor: "#FFEB3B",
            data: [],
          },
        ],
      },
      chartOptions: {
        elements: {
          line: {
            tension: 0,
            borderWidth: 3,
            backgroundColor: "#ff0000",
          }
        },

        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            label: 'profundidad (km)',
            ticks: {
              stepSize: 100
            }
          },
          x: {
            max: 1100,
            min: 0,
            ticks: {
              stepSize: 100
            },
            label: 'Distancia (km)',
          },

        }
      },
    };
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
      const datos = []
      for (var i = 0; i <= 7; i++) {

        var getProfundidad = this.athena[i].datos[0].profundidad
        var r = 4
        var x = this.athena[i].datos[0].distancia * 1

        if (getProfundidad <= 60) {
          var y = getProfundidad * -1
          sup.push(getProfundidad)
          superficial++
          this.chartData.datasets[0].data.push({ x: x, y: y, r: r })
        }

        if (getProfundidad >= 61 && getProfundidad <= 300) {
          var y = getProfundidad * -1
          inter.push(getProfundidad)
          intermedio++
          this.chartData.datasets[1].data.push({ x: x, y: y, r: r })
        }

        if (getProfundidad >= 301 && getProfundidad <= 800) {
          var y = getProfundidad * -1
          prof.push(getProfundidad)
          profundo++
          this.chartData.datasets[2].data.push({ x: x, y: y, r: r })
        }

        if (getProfundidad >= 801) {
          var y = getProfundidad * -1
          vrg.push(getProfundidad)
          verga++
        }
      }
      console.log("->", this.$store.state.athena)
    },
  },

  async mounted() {
    await this.$store.dispatch('getAthena')
    this.setIntensidad()
  }
}


</script>