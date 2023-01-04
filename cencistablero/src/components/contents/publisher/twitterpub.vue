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
      <v-textarea class="pa-2 mt-n4" id="texto3" rows="11" v-on:focus="$event.target.select()"
        background-color="#FFFFFF" ref="myinput" v-model=mens></v-textarea>
      <p :style="textStyle" class="ml-1 mt-n6 "> <b>{{ characterCount }} / 280 contador
          de Caracteres</b></p>
    </v-card>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      mens: ''
    };
  },
  methods: {
    copy() {
      this.$refs.myinput.focus();
      document.execCommand("copy");
    }
  },
  computed: {
    textopub() {
      return "REPORTE SÍSMICO: \n" +
        "IGP/CENSIS/" + this.$store.state.namereport + " 2023-0" + this.$store.state.reporte +
        "\n Fecha y Hora Local:" + this.$store.state.fecha + ", " + this.$store.state.hora +
        "\n Fecha y Hora UTC:" + this.$store.state.horautc +
        "\n Magnitud: " + this.$store.state.magnitud +
        "\n Profundidad: " + this.$store.state.profundidad +
        " Km\n Latitud: " + this.$store.state.latitud +
        "\n Longitud: " + this.$store.state.longitud +
        "\n Referencia: " + this.$store.state.referencia
    },
    characterCount() {
      return this.mens.length;
    },
    textStyle() {

      if (this.mens.length >= 280) {
        return { color: '#F44336' } //alert('EXCEDE EL LIMITE DE 280 DIGITOS EL TWITTER') 
      }
      if (this.mens.length <= 280) {
        return { color: '#FFFFFF' }
      }

    }
  }
  ,
  watch: {
    textopub(val) {
      this.mens = val
    }
  }
};
</script>
<style>
#texto3 {
  font-family: arial, verdana, ms sans serif;
  font-size: 12pt;
  line-height: 1;
  padding: 5px;
  line-height: 20px;
  color: black;
}
</style>