<template>
<v-app><barprincipal></barprincipal>
  <v-container fluid>
    <v-layout justify-start>
      <v-flex lg4 class="text-center">
        <br>
        <br>
        <detailearthq></detailearthq>
        <v-divider></v-divider>
        <br>

        <reporteid></reporteid>
      </v-flex>

      <v-flex lg6>
        <v-container>
          <detailubication></detailubication>

          <v-row>
            <v-col cols="6">
              <twitterpub class="mr-2 ml-auto"></twitterpub>
            </v-col>
            <v-col cols="6">
              <facebookpub></facebookpub>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
      <v-flex lg5>
        <v-row>
          <v-container>
            <v-col cols="12">
              <geojsonmap></geojsonmap>
              <profundidadmap></profundidadmap>

            </v-col>
          </v-container>
        </v-row>
      </v-flex>
      <v-flex  lg2>
        <detailcharacter></detailcharacter>
      </v-flex>
    </v-layout>
    <br>
    <br>
    <br>
  </v-container>

</v-app>
</template>

<script>
import geojsonmap from '@/components/addons/geojsonmap.vue';
import detailearthq from '@/components/contents/columns/detailearthq.vue';
import detailubication from '@/components/contents/columns/detailubication.vue';
import profundidadmap from '@/components/addons/profundidadmap.vue';
import twitterpub from '@/components/contents/publicators/twitterpub.vue';
import facebookpub from '@/components/contents/publicators/facebookpub.vue';
import reporteid from '@/components/contents/publicators/reporteid.vue';
import detailcharacter from '@/components/contents/columns/detailcharacter.vue';
import barprincipal from '@/components/header/barprincipal.vue';
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
    barprincipal
  },
  data() {
    return {

    }
  },
}
</script>
<style>
</style>
