<template>
  <div>
    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <h1><b>LISTA DE EVENTOS SÍSMICOS PUBLICADOS </b></h1></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn to="/" icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card>
      <v-card-title>
        <v-col cols="3">
          <h1>REPORTES</h1>
        </v-col>
        <v-col cols="3" class="ml-auto">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
      </v-card-title>

      <v-data-table
        class="mx-5"
        :headers="headers"
        :items="desserts"
        :search="search"
        header-props="width=30"
      >
        <template v-slot:[`item.profundidad`]="{ item }">
          <v-chip :color="getColor(item.profundidad)" dark>
            {{ item.profundidad }}
          </v-chip>
        </template>
        <template v-slot:[`item.reporte`]="{ item }">
          <v-icon color="red" large class="mr-2" @click="editItem(item)">
            mdi-file-pdf-box
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
    </v-card>
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
  </div>
</template>
<script>
  import barnavegation from '@/components/header/barnav/barnavegation.vue';
export default {
  data() {
    return {
      drawer: false,
      group: null,
      search: "",
      headers: [
        {
          text: "N° Rep.",
          align: "start",
          filterable: false,
          value: "nreport",
          sortable: false,
        },
        { text: "Hora Envio", value: "horaEnvio" },
        { text: "Hora Evento", value: "horaEvento" },
        { text: "Latitud", value: "latitud" },
        { text: "Longitud", value: "longitud" },
        { text: "Profundidad (km)", value: "profundidad" },
        { text: "Magnitud", value: "magnitud" },
        { text: "Referencia", value: "referencia" },
        { text: "Percibido", value: "percibido" },
        { text: "Reporte", value: "reporte", sortable: false },
      ],
      desserts: [
        {
          nreport: 1,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 100,
          magnitud: "ML",
          referencia: "902 km al SO de Ilo, Ilo - Moquegua",
          percibido: "Sí",
        },
        {
          nreport: 2,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 100,
          magnitud: "ML",
          referencia: "952 km al SO de Ilo, Ilo - Moquegua",
          percibido: "Sí",
        },
        {
          nreport: 3,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 35,
          magnitud: "ML",
          referencia: "13 km al SO de Atico, Caraveli - Arequipa",
          percibido: "Sí",
        },
        {
          nreport: 4,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 60,
          magnitud: "ML",
          referencia: "53 km al S de Salaverry, Trujillo - La Libertad",
          percibido: "Sí",
        },
        {
          nreport: 5,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 17,
          magnitud: "ML",
          referencia: "32 km al O de Omate, General Sanchez Cerro - Moquegua",
          percibido: "Sí",
        },
        {
          nreport: 6,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 604,
          magnitud: "ML",
          referencia: "122 km al N de Esperanza, Purus - Ucayali",
          percibido: "Sí",
        },
        {
          nreport: 7,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 27,
          magnitud: "ML",
          referencia: "97 km al S de Pisco, Pisco - Ica",
          percibido: "Sí",
        },
        {
          nreport: 8,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 14,
          magnitud: "ML",
          referencia: "10 km al NE de Vitor, Arequipa - Arequipa",
          percibido: "Sí",
        },
        {
          nreport: 9,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 34,
          magnitud: "ML",
          referencia: "100 km al SO de Pisco, Pisco - Ica",
          percibido: "Sí",
        },
        {
          nreport: 10,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 20,
          magnitud: "ML",
          referencia: "87 km al SO de Ica, Ica - Ica",
          percibido: "Sí",
        },
        {
          nreport: 11,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 15,
          magnitud: "ML",
          referencia: "36 km al O de Omate, General Sanchez Cerro - Moquegua",
          percibido: "Sí",
        },
        {
          nreport: 12,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 12,
          magnitud: "ML",
          referencia: "5 km al SE de Cabanaconde, Caylloma - Arequipa",
          percibido: "Sí",
        },
        {
          nreport: 13,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 12,
          magnitud: "ML",
          referencia: "5 km al SE de Cabanaconde, Caylloma - Arequipa",
          percibido: "Sí",
        },
        {
          nreport: 14,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 66,
          magnitud: "ML",
          referencia:
            " 	50 km al SE de Zorritos, Contralmirante Villar - Tumbes",
          percibido: "Sí",
        },
        {
          nreport: 15,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 17,
          magnitud: "ML",
          referencia: "36 km al O de Omate, General Sanchez Cerro - Moquegua",
          percibido: "Sí",
        },
        {
          nreport: 16,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 15,
          magnitud: "ML",
          referencia: "38 km al O de Omate, General Sanchez Cerro - Moquegua",
          percibido: "Sí",
        },
        {
          nreport: 17,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 15,
          magnitud: "ML",
          referencia: "19 km al SO de Arequipa, Arequipa - Arequipa",
          percibido: "Sí",
        },
        {
          nreport: 18,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 50,
          magnitud: "ML",
          referencia: "106 km al SE de Lagunas, Alto Amazonas - Loreto ",
          percibido: "Sí",
        },
        {
          nreport: 19,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "9/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 144,
          magnitud: "ML",
          referencia: "248 km al NO de Pastaza, Alto Amazonas - Loreto",
          percibido: "Sí",
        },
        {
          nreport: 20,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: 152,
          magnitud: "ML",
          referencia: "30 km al N de Pucallpa, Coronel Portillo - Ucayali",
          percibido: "Sí",
        },
      ],
    };
  },
  methods: {
    getColor(profundidad) {
      if (profundidad > 300) return "blue";
      else if (profundidad > 60) return "green";
      else return "red";
    },
  },
  components:{
    barnavegation,
  },
  watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>