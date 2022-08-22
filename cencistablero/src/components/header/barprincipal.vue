<template>


  <div>
    <v-container fluid warning>
      <v-row>
        <v-btn color="blue-grey" x-large class="ma-2 mx-5 white--text">
          Publicar
          <v-icon right dark>
            mdi-cloud-upload
          </v-icon>
        </v-btn>

        <v-switch v-model="switch1" flat></v-switch>
        <v-switch v-model="switch2" flat></v-switch>
        <v-switch v-model="switch3" flat></v-switch>
        <v-btn color="blue-grey" x-large class="ma-2 mx-1 white--text">
          <v-icon right dark class="mx-0">
            mdi-plus-thick
          </v-icon>
          Evento manual
        </v-btn>
        <v-btn color="blue-grey" x-large class="ma-2 mx-1 white--text">
          <v-icon right dark  class="mx-0">
            mdi-download
          </v-icon>
          Athena
        </v-btn>
        <v-btn color="blue-grey" x-large class="ma-2 mx-1 white--text">
          <v-icon right dark  class="mx-0">
            mdi-format-list-bulleted
          </v-icon>
          Reportes
        </v-btn>
      </v-row>
    </v-container>
  </div>


</template>

<script>
export default {
  data: () => {
    return {
      switch1: true,
      switch2: false,
      switch3: false,
    };


  },


  computed: {
    color() {
      switch (this.switch1) {
        case 1: return '#3D5AFE'
        case 2: return '#FF5722'
        case 3: return '#2E7D32'
        default: return '#3D5AFE'
      }
    },
  },
}
</script>