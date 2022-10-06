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
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="4">
          <b style="color: #00000; font-size: large">Nº de reporte:</b>
        </v-col>
        <v-col md="6">
          <v-text-field v-model="reporte" :rules="reporteRules" required solo type="number" outlined dense
            :value=addReporte() :text=txtReporte :disabled=show
            oninput="if(Number(this.value) > Number(this.max)) this.value = this.max" max="1000" min="0"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <b style="color: #00000; font-size: large">Fecha:</b>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="fecha" required type="date" min="2022-01-01" max="2022-12-31" solo outlined dense
            :rules="fechaRules" :value=addFecha()>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <b style="color: #00000; font-size: large">Hora local:</b>
        </v-col>
        <v-col cols="6">
          <v-text-field :value=addTiempo() v-model="tiempo" required :rules="tiempoRules" type="time" solo outlined
            dense>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <b style="color: #00000; font-size: large">Latitud:</b>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="latitud" required :rules="latitudRules" solo outlined dense :value=addLatitud()>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <b style="color: #00000; font-size: large">Longitud:</b>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="longitud" :rules="longitudRules" required solo outlined dense :value=addLongitud()>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <b style="color: #00000; font-size: large">Profundidad:</b>
        </v-col>
        <v-col cols="6">
          <v-text-field :value=addReProfundidad() v-model="profundidad" :rules="profundidadRules" required step="10"
            solo outlined dense type="number" suffix="km">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
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
    <v-row class="pa-3">
      <v-col cols="5">
        <v-chip color="orange" label x-large><b>Próximo: {{ this.reporte + 1}}</b></v-chip>
      </v-col>
      <v-col cols="4">
        <v-dialog v-model="dialog" width="550">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="blue" fab large dark title v-bind="attrs" v-on="on">
              <v-icon>mdi-qrcode</v-icon>
            </v-btn>
          </template>

          <v-card id="codigoqr">
            <v-card-title class="text-h5 grey lighten-2">
              <b>TEXTO EN CÓDIGO QR</b>
            </v-card-title>

            <v-container>
              <v-row>
                <v-col cols="6">
                  <qr-code v-bind:text="qrtext"></qr-code>
                </v-col>
                <v-col cols="6">
                  <v-textarea id="texto" :value="qrtext" readonly rows="12" />
                </v-col>
              </v-row>
            </v-container>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="success" text @click="dialog = false">
                Aceptar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
import VueQRCodeComponent from 'vue-qrcode-component'
export default {
  components: {
    'qr-code': VueQRCodeComponent
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
      latitud: -12.167424,
      longitud: -76.941945,
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

      if (+val > 1000) {
        this.reporte = 1000;
      }
      if (+val < 0) {
        this.reporte = 0;
      }
    },
    valid(val, old) {

      {
        if (val == true) {
          this.$store.state.changeval = this.valid
        }
        if (val == false) {
          this.$store.state.changeval = this.valid
        }
      }
    }
  },

  methods: {
    validate() {
      this.$refs.form.validate()
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

    qrtext() {
      return "REPORTE SÍSMICO: \n" +
        "IGP/CENSIS/RS 2022-0" + this.$store.state.reporte +
        "\n Fecha y Hora Local:" + this.$store.state.fecha + ", " + this.$store.state.hora +
        "\n Fecha y Hora UTC:" + this.$store.state.fecha + ", " + this.$store.state.hora +
        "\n Magnitud: " + this.$store.state.magnitud +
        "\n Profundidad: " + this.$store.state.profundidad +
        "Km\n Latitud: " + this.$store.state.latitud +
        "\n Longitud: " + this.$store.state.longitud +
        "\n Referencia: " + this.$store.state.referencia +
        "\nhttps://www.igp.gob.pe/servicios/centro-sismologico-nacional/evento/2022-" + this.$store.state.reporte
    },
    txtReporte() {
      return this.reporte = this.$store.state.selevento
    },

  },
  update() {

  },
  mounted() {

    this.$store.state.changeval = this.valid
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
