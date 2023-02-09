<template>
  <v-layout justify-start>
    <v-list dense>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img v-bind:src="require('@/assets/images/' + myFilename)"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ user }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ range }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item link to="/home">
        <v-list-item-icon>
          <v-icon class="mdi-icon">mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Tablero principal</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link to="/createlocation">
        <v-list-item-icon>
          <v-icon class="mdi-icon">mdi-plus-box</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Crear Localidad</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/searchlocation">
        <v-list-item-icon>
          <v-icon class="mdi-icon">mdi-magnify</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Buscar Localidades</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link to="/listevent">
        <v-list-item-icon>
          <v-icon class="mdi-icon">mdi-file-chart</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Reporte de eventos sísmicos</v-list-item-title>
      </v-list-item>
      <br />
      <v-row justify="center">
        <div class="pa-2">
          <v-btn dark @click="accionSalir" block> Salir</v-btn>
        </div>
      </v-row>
    </v-list>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      user: localStorage.getItem('user'),
      range: localStorage.getItem('range'),
      myFilename: "igp.png"

    };
  },
  mounted() {
    if (localStorage.getItem('user') == "Jacob Baños") {
      this.myFilename = "developer.png"
    }
    if (localStorage.getItem('user') == "Efrain Fernandez") {
      this.myFilename = "trabajador1.png"
    }
    if (localStorage.getItem('user') == "Rolando Kcaña") {
      this.myFilename = "trabajador2.png"
    }
  },
  methods: {
    accionSalir() {

      this.$confirm(
        "¿Desea salir de la sesión actual?",
        "Cerrar Sesión",
        "question"
      ).then(r => {
        this.$router.push('/userlogin')
      });

    },
  }
};
</script>
<style>
.mdi-plus-box::before,
.mdi-home::before,
.mdi-magnify::before,
.mdi-file-chart::before {
  color: #6200ea !important;
}
</style>