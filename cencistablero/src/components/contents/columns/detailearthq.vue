<template>
  <v-container fluid class="ml-5">
    <v-row ALIGN="center">
      <v-col cols="12" class="pa-1">
        <v-btn class="ma-1" color="grey" plain icon @click="show = !show" v-bind:class="{'green': !show, 'red': show}">
          <v-icon id="lock">{{ !show ? 'mdi-lock-open-variant' : 'mdi-lock' }}</v-icon>
        </v-btn>
        <v-btn color="blue" small dark v-on:click="reporte += 1">
          <v-icon>mdi-arrow-up-bold</v-icon>
        </v-btn>
        <v-btn color="blue" small dark v-on:click="reporte -= 1">
          <v-icon>mdi-arrow-down-bold</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-form ref="form" v-model="valid" lazy-validation> <!--validacion pendeja aqui-->
      <v-row class="mb-n10">
        <v-col cols="4">
          <b style="color: #00000; font-size: large">Nº de reporte:</b>
        </v-col>
        <v-col md="6">
          <v-text-field v-model="reporte" :rules="reporteRules" required solo type="number" outlined dense
            :value=addReporte() :text=txtReporte :disabled=show
            oninput="if(Number(this.value) > Number(this.max)) this.value = this.max" max="5000" min="0"></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mb-n10">
        <v-col cols="4">
          <b style="color: #00000; font-size: large">Fecha local:</b>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="fecha" required type="date" min="2022-01-01" max="2022-12-31" solo outlined dense
            :rules="fechaRules" :value=addFecha()>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="mb-n10">
        <v-col cols="4">
          <b style="color: #00000; font-size: large">Hora local:</b>
        </v-col>
        <v-col cols="6">
          <v-text-field :value=addTiempo() v-model="tiempo" required :rules="tiempoRules" type="time" solo outlined
            dense>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="mb-n10">
        <v-col cols="4">
          <b style="color: #00000; font-size: large">Latitud:</b>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="latitud" required :rules="latitudRules" solo outlined dense :value=addLatitud()>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="mb-n10">
        <v-col cols="4">
          <b style="color: #00000; font-size: large">Longitud:</b>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="longitud" :rules="longitudRules" required solo outlined dense :value=addLongitud()>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="mb-n10">
        <v-col cols="4">
          <b style="color: #00000; font-size: large">Profundidad:</b>
        </v-col>
        <v-col cols="6">
          <v-text-field :value=addReProfundidad() v-model="profundidad" :rules="profundidadRules" required step="10"
            solo outlined dense type="number" suffix="km">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="mb-n10">
        <v-col cols="4">
          <b style="color: #00000; font-size: large">Magnitud:</b>
        </v-col>
        <v-col cols="4">
          <v-text-field :value=addMagnitud() v-model="magnitud" :rules="magnitudRules" required step="0.1" solo outlined
            dense type="number" oninput="if(Number(this.value) > Number(this.max)) this.value = this.max" max="10"
            min="0">
          </v-text-field>
        </v-col>
        <v-icon class="mb-5" :color="colcircle" large>mdi-circle</v-icon>
      </v-row>
    </v-form>
    <v-row class="pa-3 mb-n10">
      <v-col cols="5">
        <v-chip color="orange" label x-large><b>Próximo: {{ this.reporte + 1 }}</b></v-chip>
      </v-col>
      <v-col cols="4">
        <qrcode class="mt-n3"></qrcode>
      </v-col>
    </v-row>

    <v-btn @click="view"></v-btn>
  </v-container>
</template>

<script>

import qrcode from '../publisher/qrcode.vue';
export default {
 
  components: {
    qrcode,
  },
  data() {
    return {

      reporteRules: [(v) => !!v || "Falta colocar Reporte."],
      fechaRules: [(v) => !!v || "Falta colocar Fecha."],
      tiempoRules: [(v) => !!v || "Falta colocar Tiempo."],
      latitudRules: [(v) => !!v || "Falta indicar Latitud."],
      longitudRules: [(v) => !!v || "Falta indicar Longitud."],
      profundidadRules: [(v) => !!v || "Falta indicar Profundidad."],
      magnitudRules: [(v) => !!v || "Falta indica Magnitud."],

      dialog: false,
      color: "#76FF03",
      magnitud: 0,
      tiempo: "",
      fecha: "",
      reporte: null,
      latitud: -12.16,
      longitud: -76.94,
      profundidad: "",
      show: true,
      valid: true,
    };
  },

  watch: {
    magnitud(val, old) {

      if (+val > 10) {
        this.magnitud = 10;
      }
      if (+val < 0) {
        this.magnitud = 0;
      }
    },
    reporte(val, old) {

      if (+val > 5000) {
        this.reporte = 5000;
      }
      if (+val < 0) {
        this.reporte = 0;
      }
    },
    valid(val, old) {
      console.log("valor nuevo: ", val, "valor viejo: ", old)
      {
        if (val == false) {
          this.$store.state.changeval = this.valid

        }
        if (val == true) {
          this.$store.state.changeval = this.valid
        }

      }
    }
  },

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    view() {
      console.log("prop down: ",this.valid )
    },

    addReporte() {
      this.$store.state.reporte = this.reporte
    },
    addFecha() {
      this.$store.state.fecha = this.fecha
    },
    addTiempo() {
      this.$store.state.hora = this.tiempo
    },
    addLatitud() {
      this.$store.state.latitud = this.latitud
    },
    addLongitud() {
      this.$store.state.longitud = this.longitud
    },

    addReferencia() {
      this.$store.state.referencia = this.referencia
    },

    addReProfundidad() {
      this.$store.state.profundidad = this.profundidad
    },
    addMagnitud() {
      this.$store.state.magnitud = this.magnitud
    },


  },
  computed: {
    colcircle() {
      if (this.magnitud >= 0 && this.magnitud <= 4.9) {
        return "success"
      }
      if (this.magnitud >= 5 && this.magnitud <= 6.9) {
        return "warning"
      }
      if (this.magnitud >= 7) {
        return "danger"
      }
    },


    txtReporte() {
      return this.reporte = this.$store.state.selevento
    },

  },
  mounted() {

  }
}
</script>
<style>
#codigoqr {
  z-index: 1;
}

#texto {
  font-family: arial, verdana, ms sans serif;
  font-size: 12pt;
  line-height: 1;
  line-height: 20px;
  color: black;
}


#lock {
  color: black !important;

}
</style>
