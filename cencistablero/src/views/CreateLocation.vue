<template>
  <div>
    <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">


      <v-toolbar-title>
        <h1><b>CREAR LOCALIDAD</b></h1>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-row>
        <v-col cols="1" align="center" class="ml-auto ">
          <v-btn to="/" icon class="pa-8 ml-3">
            <v-icon>mdi-export</v-icon>
          </v-btn>

          <v-app-bar-nav-icon x-large @click.stop="drawer = !drawer" class="pa-8 ml-3"></v-app-bar-nav-icon>
        </v-col>
      </v-row>
    </v-toolbar>
    <br />
    <br />

    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="6">
            <v-row>
              <v-col cols="6">
                <v-select v-model="region" label="Región" :items="itemsreg" dense outlined
                  :rules="[v => !!v || 'Seleccionar la Región']" required></v-select>
              </v-col>
              <v-col cols="6">
                <v-select v-model="provincia" label="Provincia" :items="itemspro" dense outlined
                  :rules="[v => !!v || 'Seleccionar la Provincia']" required></v-select>
              </v-col>
            </v-row>
            <maplocation></maplocation>
          </v-col>
          <v-divider vertical></v-divider>

          <v-col cols="6">

            <v-row class="text-center mb-n10">
              <v-col cols="3">
                <b style="color: #00000; font-size: x-large">Latitud:</b>
              </v-col>
              <v-col cols="4">
                <v-text-field v-model="latitud" step="0.01" solo outlined dense type="number" required
                  :rules="latitudRules">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row class="text-center mb-n10">
              <v-col cols="3">
                <b style="color: #00000; font-size: x-large">Longitud:</b>
              </v-col>
              <v-col cols="4">
                <v-text-field v-model="longitud" step="0.01" solo outlined dense type="number" required
                  :rules="longitudRules">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row class="text-center">
              <v-col cols="3">
                <b style="color: #00000; font-size: x-large">Nombre:</b>
              </v-col>
              <v-col cols="4">
                <v-text-field v-model="nombre" solo outlined dense required :rules="nombreRuler"></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="2" align="center">
                <v-btn @click="validate" color="blue-grey" x-large class="white--text" :disabled="!valid">
                  Crear
                </v-btn>
              </v-col>
              <v-col cols="4" align="start">
                <v-btn @click="clear" color="blue-grey" x-large class="white--text">
                  Limpiar
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!--BAR NAVEGATION-->
        <v-navigation-drawer v-model="drawer" absolute bottom temporary right>
          <v-list nav dense>
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">

              <barnavegation></barnavegation>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <!--End Bar NAVEGATION-->
      </v-form>
    </v-container>
  </div>
</template>
<script>
import maplocation from "@/components/addons/maplocation.vue";
import barnavegation from "@/components/header/barnav/barnavegation.vue";
export default {
  components: {
    maplocation,
    barnavegation,
  },
  data() {
    return {
      latitudRules: [(v) => !!v || "Falta indicar Latitud."],
      longitudRules: [(v) => !!v || "Falta indicar Longitud."],
      nombreRuler: [(v) => !!v || "Falta indicar Nombre."],
      valid: true,
      latitud: null,
      longitud: null,
      nombre: "",
      drawer: false,
      group: null,
      dialog: false,
      region: null,
      provincia: null,
      itemsreg: [
        "Seleccione una Región",
        "AMAZONAS",
        "ANCASH",
        "APURIMAC",
        "AREQUIPA",
        "AYACUCHO",
        "CAJAMARCA",
        "CALLAO",
        "CUSCO",
        "HUANCAVELICA",
        "HUANUCO",
        "ICA",
        "JUNIN",
        "LA LIBERTAD",
        "LAMBAYEQUE",
        "LIMA",
        "LORETO",
        "MADRE DE DIOS",
        "MOQUEGUA",
        "PASCO",
        "PIURA",
        "PUNO",
        "SAN MARTIN",
        "TACNA",
        "TUMBES",
        "UCAYALI",
      ],
      itemspro: [
        "Seleccione una Localidad",
        "CHACHAPOYAS",
        "BAGUA",
        "BONGARA",
        "CONDORCANQUI",
        "LUYA",
        "RODRIGUEZ DE MENDOZA",
        "UTCUBAMBA",
        "HUARAZ",
        "AIJA",
        "ANTONIO RAYMONDI",
        "ASUNCION",
        "BOLOGNESI",
        "CARHUAZ",
        "CARLOS FERMIN FITZCARRALD",
        "CASMA",
        "CORONGO",
        "HUARI",
        "HUARMEY",
        "HUAYLAS",
        "MARISCAL LUZURIAGA",
        "OCROS",
        "PALLASCA",
        "POMABAMBA",
        "RECUAY",
        "SANTA",
        "SIHUAS",
        "YUNGAY",
        "ABANCAY",
        "ANDAHUAYLAS",
        "ANTABAMBA",
        "AYMARAES",
        "COTABAMBAS",
        "CHINCHEROS",
        "GRAU",
        "AREQUIPA",
        "CAMANA",
        "CARAVELI",
        "CASTILLA",
        "CAYLLOMA",
        "CONDESUYOS",
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate()
      if (this.nombre == null || this.latitud == null || this.longitud == null || this.region == null || this.provincia == null) {

        this.$fire({
          title: "Error",
          text: "Faltan llenar datos.",
          type: "error",
          timer: 3000
        }).then(r => {
          console.log("Falta llenar datos")
        });
      } else {
        this.$fire({
          title: "¡Nueva localidad agregada!",
          text: "Se agrego: " + this.region + "/" + this.provincia + "/" + this.nombre,
          type: "success",
          timer: 3000
        }).then(r => {
          this.clear()
          console.log("SE AÑADIO EXITOSAMENTE")
        });
      }
    },
    clear() {
      this.latitud = null
      this.longitud = null
      this.nombre = ""
      this.region = null
      this.provincia = null
    }
  },
  watch: {
    group() {
      this.drawer = false;
    },
    latitud(val) {
      this.$store.state.latLocation = val
    },
    longitud(val) {
      this.$store.state.longLocation = val
    },
    nombre(val) {
      console.log(val)
      this.$store.state.nameLocation = val
    },
    region(val) {
      console.log(val)
      this.$store.state.regionLocation = val
    },
    provincia(val) {
      console.log(val)
      this.$store.state.provinciaLocation = val
    }
  },
};
</script>