<template>
  <v-container fluid class="ml-5">
    <v-row ALIGN="center">
      <v-col cols="12" class="pa-1">
        <v-btn class="ma-1" color="grey" plain>
          <v-icon>mdi-lock</v-icon>
        </v-btn>
        <v-btn color="blue" small dark>
          <v-icon>mdi-arrow-up-bold</v-icon>
        </v-btn>
        <v-btn color="blue" small dark>
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
            :value=addReporte()></v-text-field>
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
          <v-text-field :value=addTiempo() v-model="tiempo" required :rules="tiempoRules" type="time"  solo outlined dense>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <b style="color: #00000; font-size: large">Latitud:</b>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="latitud" required :rules="latitudRules" solo outlined dense  :value=addLatitud()>
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
          <v-text-field  :value=addReProfundidad() v-model="profundidad" :rules="profundidadRules" required step="10" solo outlined dense
            type="number" suffix="km">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <b style="color: #00000; font-size: large">Magnitud:</b>
        </v-col>
        <v-col cols="4">
          <v-text-field :value=addMagnitud() v-model="magnitud" :rules="magnitudRules" required step="0.1" solo outlined dense type="number"
            oninput="if(Number(this.value) > Number(this.max)) this.value = this.max" max="10" min="0">
          </v-text-field>
        </v-col>
        <v-icon class="mb-5" v-if="(magnitud >= 0) & (magnitud <= 4.9)" large color="green">mdi-circle</v-icon>
        <v-icon class="mb-5" v-if="(magnitud >= 5) & (magnitud <= 6.9)" large color="warning">mdi-circle</v-icon>
        <v-icon class="mb-5" v-if="magnitud >= 7" large color="red">mdi-circle</v-icon>


      </v-row>
    </v-form>
    <v-row class="pa-3">
      <v-col cols="5">
        <v-chip color="orange" label x-large><b>Próximo: {{ $store.state.reporte }}</b></v-chip>
      </v-col>
      <v-col cols="4">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="blue" fab large dark title v-bind="attrs" v-on="on">
              <v-icon>mdi-qrcode</v-icon>
            </v-btn>
          </template>

          <v-card id="codigoqr">
            <v-card-title class="text-h5 grey lighten-2">
              TEXTO EN CÓDIGO QR
            </v-card-title>

            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>REPORTE SÍSMICO</v-list-item-title>
                      <v-list-item-subtitle>
                        IGP/CENSIS/RS 2022-0529</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        Fecha y Hora Local: 20/08/2022
                        06:50:15</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        Magnitud: 3.8</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        Profundidad: 48km</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        Latitud: -13.56</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        Longitud: -76.31</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        Intensidad: III Tambo De Mora</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        Referencia: 18 km al SO de Tambo De Mora, Chincha -
                        Ica</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="6">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>REPORTE SÍSMICO</v-list-item-title>
                      <v-list-item-subtitle>
                        IGP/CENSIS/RS 2022-0529</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        Fecha y Hora Local: 20/08/2022
                        06:50:15</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        Magnitud: 3.8</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        Profundidad: 48km</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        Latitud: -13.56</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        Longitud: -76.31</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        Intensidad: III Tambo De Mora</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        Referencia: 18 km al SO de Tambo De Mora, Chincha -
                        Ica</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card-text>

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
export default {
  data() {
    return {
      valid: true,
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
      reporte: 475,
      latitud: -12.167424,
      longitud: -76.941945,
      profundidad: "",
    };
  },
  watch: {
    magnitud(val, old) {
      console.log(val, old);
      if (+val > 10) {
        this.magnitud = 10;
      }
      if (+val < 0) {
        this.magnitud = 0;
      }
    },
  },

  methods: {
    validate() {
      this.$refs.form.validate(), console.log("testeo");
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

};
</script>
<style>
#codigoqr {
  z-index: 1;
}
</style>
