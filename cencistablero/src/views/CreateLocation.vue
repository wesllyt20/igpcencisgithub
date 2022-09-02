<template>
  <div>
    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <h1><b>CREAR LOCALIDAD</b></h1></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn to="/" icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
    <br />
    <br />

    <v-container>
      <v-row>
        <v-col cols="6">
          <v-row>
            <v-col cols="6">
              <v-select
                label="Región"
                :items="itemsreg"
                dense
                outlined
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-select
                label="Provincia"
                :items="itemspro"
                dense
                outlined
              ></v-select>
            </v-col>
          </v-row>
          <geojsonmap></geojsonmap>
        </v-col>
        <v-divider vertical></v-divider>

        <v-col cols="6">
          <v-row class="ml-auto">
            <v-dialog v-model="dialog" persistent max-width="350">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="#26A69A" dark v-bind="attrs" v-on="on">
                  Crear
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="text-h4">
                  <b> ¿Seguro que desea crear la Localidad?</b>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn depressed color="error" @click="dialog = false">
                    Cancelar
                  </v-btn>
                  <v-btn cdepressed color="success" to="/"> Crear </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <v-row class="text-center">
            <v-col cols="3">
              <b style="color: #00000; font-size: x-large">Latitud:</b>
            </v-col>
            <v-col cols="4">
              <v-text-field
                step="0.01"
                solo
                outlined
                dense
                hide-details
                type="number"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col cols="3">
              <b style="color: #00000; font-size: x-large">Longitud:</b>
            </v-col>
            <v-col cols="4">
              <v-text-field
                step="0.000001"
                solo
                outlined
                dense
                hide-details
                type="number"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col cols="3">
              <b style="color: #00000; font-size: x-large">Nombre:</b>
            </v-col>
            <v-col cols="4">
              <v-text-field solo outlined dense hide-details> </v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!--BAR NAVEGATION-->
      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <barnavegation></barnavegation>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <!--End Bar NAVEGATION-->
    </v-container>
  </div>
</template>
<script>
import geojsonmap from "@/components/addons/geojsonmap.vue";
import barnavegation from "@/components/header/barnav/barnavegation.vue";
export default {
  components: {
    geojsonmap,
    barnavegation,
  },
  data() {
    return {
      drawer: false,
      group: null,
      dialog: false,
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
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>