<template>
  <v-app>
    <barprincipal></barprincipal>
    <v-container fluid>
      <v-layout>
        <!--Detalle de evento-->
        <v-flex lg3 class="text-center">
          <detailearthq></detailearthq>
          <v-divider></v-divider>
          <reporteid></reporteid>
        </v-flex>

        <!--Referencias-->
        <v-flex lg4>
          <detailubication></detailubication>
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
                <geojsonmap></geojsonmap>
                <profundidadmap></profundidadmap>
              </v-col>
          </v-row>
        </v-flex>

        <!--Reporte Athena-->
        <v-flex lg1 fluid>
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
import barprincipal from "@/components/header/barprincipal.vue";
export default {
  components: {
    geojsonmap,
    detailearthq,
    detailubication,
    profundidadmap,
    twitterpub,
    facebookpub,
    reporteid,
    detailcharacter,
    barprincipal,
  },
  data() {
    return {};
  },
};
</script>
<style>
</style>
