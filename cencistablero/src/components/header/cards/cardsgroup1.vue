<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
    elevation="24"
    color="blue-grey lighten-4"
  >
    <v-list-item one-line>
      <btnpost> PUBLICAR</btnpost>
      <b class="ml-auto">Grupo 1</b>
    </v-list-item>
    <v-list-item-subtitle>
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-row>
              <btninstitute>
                <v-img src="@/assets/icons/igp.png" aspect-ratio="1.7" contain>
                </v-img>
              </btninstitute>
              <b class="ml-3">DHN</b>
            </v-row>
          </v-col>

          <v-col cols="3">
            <v-row>
              <btninstitute>
                <v-img src="@/assets/icons/igp.png" aspect-ratio="1.7" contain>
                </v-img>
              </btninstitute>
              <b class="ml-2">DHN2</b>
            </v-row>
          </v-col>
          <v-col cols="3">
            <v-row>
              <btninstitute>
                <v-img src="@/assets/icons/igp.png" aspect-ratio="1.7" contain>
                </v-img>
              </btninstitute>
              <b class="ml-1">INDECI</b>
            </v-row>
          </v-col>
          <v-col cols="3">
            <v-row>
              <btninstitute>
                <v-img src="@/assets/icons/igp.png" aspect-ratio="1.7" contain>
                </v-img>
              </btninstitute>
              <b >ACELDAT</b>
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