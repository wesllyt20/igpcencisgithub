<template>
  <div>
    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <h1><b>LISTA DE EVENTOS SÍSMICOS PUBLICADOS </b></h1></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn to="/" icon>
        <v-icon >mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card>
      
      <v-card-title>
        
          <v-col cols="3">
            <h1>REPORTES</h1>
          </v-col>
          <v-col cols="3" class="ml-auto" >
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
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
      ></v-data-table>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "N° Rep.",
          align: "start",
          filterable: false,
          value: "nreport",
        },
        { text: "Hora Envio", value: "horaEnvio" },
        { text: "Hora Evento", value: "horaEvento" },
        { text: "Latitud", value: "latitud" },
        { text: "Longitud", value: "longitud" },
        { text: "Profundidad", value: "profundidad" },
        { text: "Magnitud", value: "magnitud" },
        { text: "Referencia", value: "referencia" },
        { text: "Percibido", value: "percibido" },
        { text: "Reporte", value: "reporte" },
      ],
      desserts: [
        {
          nreport: 1,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "902 km al SO de Ilo, Ilo - Moquegua",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 2,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "952 km al SO de Ilo, Ilo - Moquegua",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 3,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "13 km al SO de Atico, Caraveli - Arequipa",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 4,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "53 km al S de Salaverry, Trujillo - La Libertad",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 5,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "32 km al O de Omate, General Sanchez Cerro - Moquegua",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 6,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "122 km al N de Esperanza, Purus - Ucayali",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 7,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "97 km al S de Pisco, Pisco - Ica",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 8,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "10 km al NE de Vitor, Arequipa - Arequipa",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 9,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "100 km al SO de Pisco, Pisco - Ica",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 10,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "87 km al SO de Ica, Ica - Ica",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 11,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "36 km al O de Omate, General Sanchez Cerro - Moquegua",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 12,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "5 km al SE de Cabanaconde, Caylloma - Arequipa",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 13,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "5 km al SE de Cabanaconde, Caylloma - Arequipa",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 14,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia:
            " 	50 km al SE de Zorritos, Contralmirante Villar - Tumbes",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 15,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "36 km al O de Omate, General Sanchez Cerro - Moquegua",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 16,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "38 km al O de Omate, General Sanchez Cerro - Moquegua",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 17,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "19 km al SO de Arequipa, Arequipa - Arequipa",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 18,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "106 km al SE de Lagunas, Alto Amazonas - Loreto ",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 19,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "9/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "248 km al NO de Pastaza, Alto Amazonas - Loreto",
          percibido: "Sí",
          reporte: "hola",
        },
        {
          nreport: 20,
          horaEnvio: "8/22/2022, 1:23:14 PM",
          horaEvento: "8/22/2022, 1:11:00 PM",
          latitud: "-25",
          longitud: "-75",
          profundidad: "100 km",
          magnitud: "ML",
          referencia: "30 km al N de Pucallpa, Coronel Portillo - Ucayali",
          percibido: "Sí",
          reporte: "hola",
        },
      ],
    };
  },
};
</script>