<template>
    <v-card
      class="mx-auto"
      max-width="350"
      outlined
      elevation="24"
      id="rounded-card"
      color="blue-grey lighten-4"
    >
      <v-list-item one-line>
        <btnpost> PUBLICAR</btnpost>
        <b class="ml-auto">Grupo 2</b>
      </v-list-item>
      <v-list-item-subtitle>
        <v-container>
          <v-row>
            <v-col cols="3" class="ml-1">
              <v-row>
                <btninstitute>
                  <v-img src="@/assets/icons/igpsismos-32x32.png" aspect-ratio="1.7" contain>
                  </v-img>
                  <template slot="tooltip">Instituto Geofísico del Perú</template>
                </btninstitute>
                <b class="ml-1">Sismos</b>
              </v-row>
            </v-col>
  
            <v-col cols="3">
              <v-row>
                <btninstitute>
                  <v-img src="@/assets/icons/gobpe.png" aspect-ratio="1.7" contain>
                  </v-img>
                  <template slot="tooltip">Gobierno del Perú</template>
                </btninstitute>
                <b class="ml-2">Gob.pe</b>
              </v-row>
            </v-col>
            <v-col cols="3">
              <v-row>
                <btninstitute>
                  <v-img src="@/assets/icons/app-36x36.svg" aspect-ratio="1.7" contain>
                  </v-img>
                  <template slot="tooltip">APP MOVIL IGP</template>
                </btninstitute>
                <b class="ml-3">APP</b>
              </v-row>
            </v-col>
            <v-col cols="2">
              <v-row>
                <btninstitute>
                  <v-img src="@/assets/icons/igp.png" aspect-ratio="1.7" contain>
                  </v-img>
                  <template slot="tooltip">Ultimo sismo IGP</template>
                </btninstitute>
                <b class="ml-2">Ultimo</b>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-list-item-subtitle>
    </v-card>
  </template>
  <script>
  import btninstitute from "../buttons/btninstitute.vue";
  import btnpost from "../buttons/btnpost.vue";
  
  export default {
    components: {
      btninstitute,
      btnpost,
    },
  };
  </script>
    <style>
      #rounded-card{
      border-radius:10px;
  }
    </style>