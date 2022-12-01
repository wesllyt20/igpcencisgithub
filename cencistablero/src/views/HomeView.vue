<template>
  <v-app>

    <v-card class="pt-1" :color="color" fluid>
      <v-row>
        <v-col cols="2" id="public">
          <v-btn color="blue-grey" x-large class="ma-6 mx-10 white--text" :disabled="valorenable"
            @click.prevent="validate">
            Publicar <v-icon right dark> mdi-cloud-upload </v-icon>
          </v-btn>
        </v-col>

        <v-col cols="1" align="center" class="swtichtop">
          <b id="texto">Preliminar</b>
          <v-switch class="switch1" color="#000000" v-model="switch1" @change="setTheme" :readonly="disable1">
          </v-switch>
        </v-col>

        <v-col cols="1" align="center" class="swtichtop">
          <b id="texto">Simulación</b>
          <v-switch color="#000000" v-model="switch2" @change="setTheme2" :readonly="disable2" flat> </v-switch>
        </v-col>

        <v-col cols="1" align="center" class="swtichtop">
          <b id="texto">Simulacro</b>
          <v-switch color="#000000" v-model="switch3" @change="setTheme3" :readonly="disable3" flat> </v-switch>
        </v-col>



        <v-col cols="4">
          <v-btn color="blue-grey" x-large class="ma-6 mx-1 ml-0 white--text">
            <v-icon right dark class="mx-0"> mdi-plus-thick </v-icon>
            Evento manual
          </v-btn>
          <v-btn color="blue-grey" x-large class="ma-6 mx-1 white--text">
            <v-icon right dark class="mx-0"> mdi-format-list-bulleted </v-icon>
            Reportes
          </v-btn>
        </v-col>
        <carduser class="mt-10" />
      </v-row>

      <br />

      <v-row class="mx-1 ma-0 mt-n12 mb-n1" align="center">
        <btninstitute> </btninstitute> <!-- BTN institutos-->
        <v-app-bar-nav-icon x-large @click.stop="drawer = !drawer" class="pa-2 ml-12"></v-app-bar-nav-icon>
      </v-row>

    </v-card>
    <v-container fluid>
      <v-layout>
        <!--Detalle de evento-->
        <v-flex lg3 class="text-center ml-1">
          <detailearthq ref="form">
          </detailearthq>
          <!--aqui es -->

        </v-flex>

        <!--Referencias-->
        <v-flex lg4 class="px-2">
          <detailubication></detailubication>
          <br />
          <v-row>
            <v-col cols="6">
              <twitterpub class="mr-2 ml-auto"></twitterpub>
            </v-col>
            <v-col cols="6">
              <facebookpub></facebookpub>
            </v-col>
          </v-row>
        </v-flex>
        <!--Mapa y profundidad-->
        <v-flex lg4>
          <v-row>
            <v-col cols="12">
              <br>
              <geojsonmap></geojsonmap>
              <br>
              <br>
              <profundidadmap></profundidadmap>
            </v-col>
          </v-row>
        </v-flex>

        <!--Reporte AthenaXD-->
        <v-flex md2 fluid>
          <detailcharacter></detailcharacter>
        </v-flex>
      </v-layout>
    </v-container>
    <!--BAR NAVEGATION-->
    <v-navigation-drawer v-model="drawer" absolute bottom temporary right>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <barnavegation></barnavegation>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!--End Bar NAVEGATION-->
  </v-app>
</template>

<script>
import geojsonmap from "@/components/addons/geojsonmap.vue";
import detailearthq from "@/components/contents/columns/detailearthq.vue";
import detailubication from "@/components/contents/columns/detailubication.vue";
import profundidadmap from "@/components/addons/profundidadmap.vue";
import twitterpub from "@/components/contents/publisher/twitterpub.vue";
import facebookpub from "@/components/contents/publisher/facebookpub.vue";
import detailcharacter from "@/components/contents/columns/detailcharacter.vue";
import btninstitute from "@/components/header/buttons/btninstitute.vue";
import barnavegation from "@/components/header/barnav/barnavegation.vue";
import carduser from "@/components/header/barnav/carduser.vue";
import { mapState } from 'vuex';




export default {

  components: {
    geojsonmap,
    detailubication,
    profundidadmap,
    twitterpub,
    facebookpub,
    detailcharacter,
    btninstitute,
    barnavegation,
    detailearthq,
    carduser,
  },


  data: () => {
    return {
      switch1: true,
      switch2: false,
      switch3: false,
      color: "#E65100",
      disable1: true,
      disable2: false,
      disable3: false,
      drawer: false,
      group: null,
      selectevent: 570,
      valorenable: false,
      namereport: "RS"
    };
  },

  computed: {
    setTheme() {
      if (this.switch1 == true) {

        return (
          (this.switch2 = false),
          (this.switch3 = false),
          (this.color = "#E65100"),
          (this.disable1 = true),
          (this.disable2 = false),
          (this.disable3 = false),
          (this.selectevent = 570),
          (this.$store.state.selevento = this.selectevent),
          (this.namereport = "RS"),
          (this.$store.state.namereport = this.namereport)
        );
      }
    },
    setTheme2() {
      if (this.switch2 == true) {
        return (
          (this.switch1 = false),
          (this.switch3 = false),
          (this.color = "#FFB300"),
          (this.disable2 = true),
          (this.disable1 = false),
          (this.disable3 = false),
          (this.selectevent = 475),
          (this.$store.state.selevento = this.selectevent),
          (this.namereport = "DEFINITIVIO"),
          (this.$store.state.namereport = this.namereport)
        );
      }
    },
    setTheme3() {
      if (this.switch3 == true) {
        return (
          (this.switch2 = false),
          (this.switch1 = false),
          (this.color = "#53ad6c"),
          (this.disable3 = true),
          (this.disable2 = false),
          (this.disable1 = false),
          (this.selectevent = 90),
          (this.$store.state.selevento = this.selectevent),
          (this.namereport = "SIMULACRO"),
          (this.$store.state.namereport = this.namereport)
        );
      }
    },
    ...mapState({ valdata: state => state.changeval })

  },

  watch: {
    group() {
      this.drawer = false
    },

    valdata(val) {
      if (val == true) {
        this.valorenable = false;

      }
      if (val == false) {
        this.valorenable = true;
      }
    },

  },
  mounted() {
    this.$store.state.selevento = this.selectevent
    this.$store.state.namereport = this.namereport

  },
  methods: {
    validate() {
      this.$refs.form.validate()
      if (this.$store.state.profundidad != '' &&
        this.$store.state.reporte != '' &&
        this.$store.state.magnitud != '' &&
        this.$store.state.latitud != '' &&
        this.$store.state.longitud != '' &&
        this.$store.state.hora != '' &&
        this.$store.state.fecha != '') {

        document.querySelectorAll(".btnshare").forEach((boton) => boton.click())
        //if (moment(this.$store.state.hora, 'hh:mm').add(1, 'hour').format(formatoh) > moment().format('hh:mm')) {
        //console.log("Este no :v ")
        //}


      }
    },
  },
};
</script>
<style>
#public {
  margin-right: -120px !important;
}

#texto {
  color: #ffff;
  font-size: large;
}

.v-input__slot {
  justify-content: center !important;
}

.mdi-menu::before {
  color: rgb(88, 88, 88) !important;
}
</style>