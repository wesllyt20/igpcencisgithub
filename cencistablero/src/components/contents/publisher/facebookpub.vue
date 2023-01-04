<template>
  <v-card height="100px" width="250">
    <v-card class="mx-auto" color="#3b5998" dark max-width="400">
      <v-card-title>
        <v-icon large left> mdi-facebook </v-icon>
        <span class="text-h6 font-weight-light">Facebook</span>
        <v-btn @click="copy" color="white" icon class="pa-2 ml-auto">
          <v-icon>mdi-content-copy</v-icon>
        </v-btn>
      </v-card-title>
      <v-textarea class="pa-2" id="texto2" rows="11" v-on:focus="$event.target.select()" ref="myinput"
        background-color="#FFFFFF" v-bind:value=textopub></v-textarea>
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
  computed: {
    textopub() {
      return "REPORTE SÍSMICO: \n" +
        "IGP/CENSIS/" + this.$store.state.namereport + " 2023-0" + this.$store.state.reporte +
        "\n Fecha y Hora Local:" + this.$store.state.fecha + ", " + this.$store.state.hora +
        "\n Fecha y Hora UTC:" + this.$store.state.horautc +
        "\n Magnitud: " + this.$store.state.magnitud +
        "\n Profundidad: " + this.$store.state.profundidad +
        "Km\n Latitud: " + this.$store.state.latitud +
        "\n Longitud: " + this.$store.state.longitud +
        "\n Referencia: " + this.$store.state.referencia +
        "\nhttps://www.igp.gob.pe/servicios/centro-sismologico-nacional/evento/2022-0" + this.$store.state.reporte
    }
  }
};
</script>
<style>
#texto2 {
  font-family: arial, verdana, ms sans serif;
  font-size: 12pt;
  line-height: 1;
  padding: 5px;
  line-height: 20px;
  color: black;
}
</style>