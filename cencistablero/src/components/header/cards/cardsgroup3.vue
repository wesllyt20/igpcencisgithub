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
        <b class="ml-auto">Grupo 3</b>
      </v-list-item>
      <v-list-item-subtitle>
        <v-container>
          <v-row >
            <v-col cols="3" class="ml-1">
              <v-row>
                <btninstitute>
                  <v-img src="@/assets/icons/saspe.png" aspect-ratio="2.5" contain>
                  </v-img>
                  <template slot="tooltip">SISTEMA DE ALERTA SÍSMICA PERUANO</template>
                </btninstitute>
                <b class="ml-2">SASPE</b>
              </v-row>
            </v-col>
  
            <v-col cols="3">
              <v-row>
                <btninstitute>
                  <v-img src="@/assets/icons/facebook-logo-3-1.png" aspect-ratio="1.7" contain>
                  </v-img>
                  <template slot="tooltip">FaceBook</template>
                </btninstitute>
                <b class="ml-3">Face</b>
              </v-row>
            </v-col>
            <v-col cols="3">
              <v-row>
                <btninstitute>
                  <v-img src="@/assets/icons/twitter-logo-3.png" aspect-ratio="1.7" contain>
                  </v-img>
                  <template slot="tooltip">Twitter</template>
                </btninstitute>
                <b class="ml-2">Twitter</b>
              </v-row>
            </v-col>
            <v-col cols="2">
              <v-row>
                <btninstitute>
                  <v-img src="@/assets/icons/correo.png" aspect-ratio="1.7" contain>
                  </v-img>
                  <template slot="tooltip">Hotmail / Gmail</template>
                </btninstitute>
                <b class="ml-3">Email</b>
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