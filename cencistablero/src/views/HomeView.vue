<template>
  <v-app>
    <v-card class="contenedor pt-1" :color="color" fluid>
      <v-row class="mb-n1">
        <v-col cols="2" class="mx-n3 pr-10" id="public">
          <v-btn color="blue-grey" x-large class="ma-6 mx-10 white--text px-5" :disabled="valorenable"
            @click.prevent="validate">
            Publicar <v-icon right dark> mdi-cloud-upload </v-icon>
          </v-btn>
        </v-col>

        <v-col cols="1" class="box mx-n12 mt-4">
          <p style="color: #ffff; font-size: large"><strong>Preliminar</strong></p>
          <v-switch class="" v-model="switch1" @change="setTheme()" color="#000000" :readonly="disable1">
          </v-switch>
        </v-col>

        <v-col cols="1" class="box mx-n5 mt-4">
          <b style="color: #ffff; font-size: large">Definitivo</b>
          <v-switch class="ml-10" v-model="switch2" @change="setTheme2()" color="#000000" :readonly="disable2" flat>
          </v-switch>
        </v-col>

        <v-col cols="1" class="box mx-n5 mt-4">
          <b style="color: #ffff; font-size: large">Simulación</b>
          <v-switch class="ml-10" v-model="switch3" @change="setTheme3()" color="#000000" :readonly="disable3" flat>
          </v-switch>
        </v-col>

        <!--<v-col cols="1" class="mx-n5 mt-4 text-center align-center justify-center">-->

        <v-col cols="4">
          <v-btn color="#9CCC65" x-large class="ma-6 mx-1 ml-0 white--text">
            <v-icon right dark class="mx-0"> mdi-plus-thick </v-icon>
            Evento manual
          </v-btn>
          <v-btn color="#E57373" x-large class="ma-6 mx-1 white--text">
            <v-icon right dark class="mx-0"> mdi-format-list-bulleted </v-icon>
            Reportes
          </v-btn>
        </v-col>
        <v-app-bar-nav-icon x-large @click.stop="drawer = !drawer" class="mb-10 ml-auto"></v-app-bar-nav-icon>
      </v-row>
      <br />

      <v-row class="mx-1 ma-0 mt-n12 mb-n1" align="center">
        <btninstitute> </btninstitute> <!-- BTN institutos-->
      </v-row>
    </v-card>

    <v-container fluid>
      <v-layout>
        <!--Detalle de evento-->
        <v-flex lg3 class="text-center ml-1">
          <detailearthq ref="form" @valid="valid=$event"></detailearthq>
          <!--aqui es -->
          <v-divider></v-divider>
          <reporteid></reporteid>
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
import reporteid from "@/components/contents/publisher/reporteid.vue";
import detailcharacter from "@/components/contents/columns/detailcharacter.vue";
import btninstitute from "@/components/header/buttons/btninstitute.vue";
import barnavegation from "@/components/header/barnav/barnavegation.vue";
import { mapState } from 'vuex';

export default {
  components: {
    geojsonmap,
    detailubication,
    profundidadmap,
    twitterpub,
    facebookpub,
    reporteid,
    detailcharacter,
    btninstitute,
    barnavegation,
    detailearthq,

  },


  data: () => {
    return {
      switch1: true,
      switch2: false,
      switch3: false,
      color: "#D81B60",
      disable1: true,
      disable2: false,
      disable3: false,
      drawer: false,
      group: null,
      selectevent: 570,
      valorenable: false,


    };
  },

  computed: {
    setTheme() {
      if (this.switch1 == true) {

        return (
          (this.switch2 = false),
          (this.switch3 = false),
          (this.color = "#D81B60"),
          (this.disable1 = true),
          (this.disable2 = false),
          (this.disable3 = false),
          (this.selectevent = 570),
          (this.$store.state.selevento = this.selectevent)
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
          (this.$store.state.selevento = this.selectevent)

        );
      }
    },
    setTheme3() {
      if (this.switch3 == true) {
        return (
          (this.switch2 = false),
          (this.switch1 = false),
          (this.color = "#42A5F5"),
          (this.disable3 = true),
          (this.disable2 = false),
          (this.disable1 = false),
          (this.selectevent = 90),
          (this.$store.state.selevento = this.selectevent)
        );
      }
    },


    ...mapState({
      valdata: state => state.changeval
    })

  },

  watch: {
    group() {
      this.drawer = false
    },

    valdata(val, old) {
      if (val === false) {
        this.valorenable = true;
      }
      if (val === true) {
        this.valorenable = false;
      }
    },

  },
  mounted() {
    this.$store.state.selevento = this.selectevent
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },

  },
};
</script>
<style>
#public {
  margin-right: -60px !important;
}
</style>