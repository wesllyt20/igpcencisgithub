<template>


  <div >
    <v-card class="contenedor pt-3" :color="color" fluid>
      <v-row>
        <v-btn color="blue-grey" x-large class="ma-2 mx-5 white--text">
          Publicar
          <v-icon right dark>
            mdi-cloud-upload
          </v-icon>
        </v-btn>
<v-col >
        <v-switch v-model="picked" id="sw1" value="sw1" flat></v-switch>
        <v-switch v-model="picked" id="sw2" value="sw2" flat></v-switch>
        <v-switch v-model="picked" id="sw3" value="sw3" flat></v-switch>
</v-col>
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
    </v-card>
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
      switch (this.value) {
        case 1: return '#3D5AFE'
        case 2: return '#FF5722'
        case 3: return '#2E7D32'
        default: return 'warning'
      }
    },
  },
}
</script>
<style>




</style>