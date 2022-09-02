<template>
  <v-card height="100px" width="250">
    <v-card class="mx-auto" color="#26c6da" dark max-width="400">
      <v-card-title>
        <v-icon large left> mdi-twitter </v-icon>
        <span class="text-h6 font-weight-light">Twitter</span>
        <v-btn @click="copy" color="white" icon class="pa-2 ml-auto">
          <v-icon>mdi-content-copy</v-icon>
        </v-btn>
      </v-card-title>
      <v-textarea
        class="pa-3"
        id="texto"
        rows="11"
        v-on:focus="$event.target.select()"
        ref="myinput"
        value="REPORTE SÍSMICO
IGP/CENSIS/RS 2022-0529
Fecha y Hora Local: 20/08/2022 06:50:15
Magnitud: 3.8
Profundidad: 48km
Latitud: -13.56
Longitud: -76.31
Intensidad: III Tambo De Mora
Referencia: 18 km al SO de Tambo De Mora, Chincha - Ica"
      ></v-textarea>
    </v-card>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      text: "This will get copied!",
    };
  },
  methods: {
    copy() {
      this.$refs.myinput.focus();
      document.execCommand("copy");
    },
  },
};
</script>
<style>
#texto {
  font-family: arial, verdana, ms sans serif;
  font-size: 12pt;
  line-height: 1;
}
</style>