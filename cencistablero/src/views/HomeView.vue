<template>
  <v-app>
    <v-card class="contenedor pt-1" :color="color" fluid>
      <v-row class="mb-n1">
        <v-col cols="2" class="mx-n3 pr-10" id="public">
          <v-app-bar-nav-icon x-large @click.stop="drawer = !drawer" class="mb-10 mr-5"></v-app-bar-nav-icon>

          <v-btn color="blue-grey" x-large class="ma-6 mx-0 white--text px-5">
            Publicar <v-icon right dark> mdi-cloud-upload </v-icon>
          </v-btn>
        </v-col>




        <v-col cols="1" class="box mx-n5 mt-4">
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

        <v-col cols="1" class="box mx-n5 mt-4">
          <b style="color: #ffff; font-size: large">Simulacro</b>
          <v-switch class="ml-10" v-model="switch4" @change="setTheme4()" color="#000000" :readonly="disable4" flat>
          </v-switch>
        </v-col>

        <!--<v-col cols="1" class="mx-n5 mt-4 text-center align-center justify-center">-->






        <v-col cols="4">
          <v-btn color="#9CCC65" x-large class="ma-6 mx-1 ml-0 white--text">
            <v-icon right dark class="mx-0"> mdi-plus-thick </v-icon>
            Evento manual
          </v-btn>
          <v-btn color="blue-grey" x-large class="ma-6 mx-4 white--text">
            <v-icon right dark class="mx-0"> mdi-download </v-icon>
            Athena
          </v-btn>
          <v-btn color="#E57373" x-large class="ma-6 mx-1 white--text">
            <v-icon right dark class="mx-0"> mdi-format-list-bulleted </v-icon>
            Reportes
          </v-btn>
        </v-col>
      </v-row>
      <br />

      <v-row class="mx-1 ma-0" align="center">
        <instmodel></instmodel>
      </v-row>
    </v-card>
    <!--BAR NAVEGATION-->
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <barnavegation></barnavegation>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!--End Bar NAVEGATION-->
    <v-container fluid>
      <v-layout>
        <!--Detalle de evento-->
        <v-flex lg3 class="text-center ml-1">
          <detailearthq :selectevent="selectevent"></detailearthq>
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
        <v-flex lg3>
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
        <v-flex lg2 fluid>
          <detailcharacter></detailcharacter>
        </v-flex>
      </v-layout>
    </v-container>
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
import instmodel from "@/components/header/values/instmodel.vue";
import barnavegation from "@/components/header/barnav/barnavegation.vue";

export default {
  components: {
    geojsonmap,
    detailubication,
    profundidadmap,
    twitterpub,
    facebookpub,
    reporteid,
    detailcharacter,
    instmodel,
    barnavegation,
    detailearthq,
  },


  data: () => {
    return {
      switch1: true,
      switch2: false,
      switch3: false,
      switch4: false,
      color: "#D81B60",
      disable1: true,
      disable2: false,
      disable3: false,
      disable4: false,
      drawer: false,
      group: null,
      selectevent: 570,

    };
  },

  computed: {
    setTheme() {
      if (this.switch1 == true) {

        return (
          (this.switch2 = false),
          (this.switch3 = false),
          (this.switch4 = false),
          (this.color = "#D81B60"),
          (this.disable1 = true),
          (this.disable2 = false),
          (this.disable3 = false),
          (this.disable4 = false),
          (this.selectevent = 570),
          (this.$store.state.selevento = this.selectevent),
          console.log("swtich1", this.selectevent)

        );
      }
    },
    setTheme2() {
      if (this.switch2 == true) {
        return (
          (this.switch1 = false),
          (this.switch3 = false),
          (this.switch4 = false),
          (this.color = "#FFB300"),
          (this.disable2 = true),
          (this.disable1 = false),
          (this.disable3 = false),
          (this.disable4 = false),
          (this.selectevent = 475),
          (this.$store.state.selevento = this.selectevent),
          console.log("swtich2", this.selectevent)

        );
      }
    },
    setTheme3() {
      if (this.switch3 == true) {
        return (
          (this.switch4 = false),
          (this.switch2 = false),
          (this.switch1 = false),
          (this.color = "#42A5F5"),
          (this.disable3 = true),
          (this.disable2 = false),
          (this.disable1 = false),
          (this.disable4 = false),
          (this.selectevent = 90),
          (this.$store.state.selevento = this.selectevent),
          console.log("swtich3", this.selectevent)
        );
      }
    },
    setTheme4() {
      if (this.switch4 == true) {

        return (
          (this.switch3 = false),
          (this.switch2 = false),
          (this.switch1 = false),
          (this.color = "#66BB6A"),
          (this.disable4 = true),
          (this.disable3 = false),
          (this.disable2 = false),
          (this.disable1 = false),
          (this.selectevent = 25),
          (this.$store.state.selevento = this.selectevent),
          console.log("swtich4", this.selectevent)
        );
      }
    },
  },

  watch: {
    group() {
      this.drawer = false
    },
  },
  mounted() {
    this.$store.state.selevento = this.selectevent

  }
};
</script>
<style>
#public {
  margin-right: -60px !important;
}
</style>