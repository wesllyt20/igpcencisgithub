<template>
  <v-container>
    <v-card class="mx-auto" max-width="500">
      <v-toolbar color="teal" dark>
        <v-spacer></v-spacer>
        <v-toolbar-title>HYDRA - REPORTES</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-list>
        <v-list-group v-for="(item, index) in athena" :key="item.reporte" :prepend-icon="iconaction" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title> Tiempo: {{ item.datos.creado }} </v-list-item-title>
              <v-list-item-title>Profundidad: {{ item.datos.profundidad }} || Mag: {{ item.datos.magnitud }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Hora: {{ item.datos.hora }} </v-list-item-title>
              <v-list-item-title>Fecha: {{ item.datos.fecha }} </v-list-item-title>
              <v-list-item-title>Creado: {{ item.datos.creado }} </v-list-item-title>
              <v-list-item-title>Calculo: {{ item.datos.calculo }} </v-list-item-title>
              <v-list-item-title>Latitud: {{ item.datos.latitud }} </v-list-item-title>
              <v-list-item-title>Longitud: {{ item.datos.longitud }} </v-list-item-title>
              <v-list-item-title>Magnitud: {{ item.datos.magnitud }} </v-list-item-title>
              <v-list-item-title>Intensidad: {{ item.datos.intensidad }} </v-list-item-title>
              <v-list-item-title>Profundidad: {{ item.datos.profundidad }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item-content>
            <div class="pa-2">
              <v-btn class="white--text" block center color="green">
                <v-icon color="white" @click="getValues($event, index)" small>mdi-send </v-icon> Insertar  {{ index }}
              </v-btn>
            </div>
          </v-list-item-content>
        </v-list-group>
      </v-list>
    </v-card>
  </v-container>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data: function () {
    return {
      iconaction: "mdi-calendar-clock",
    }
  },
  created: function () {
    this.$store.dispatch('getAthena')
  },
  computed: {
    ...mapState({
      athena: state => state.athena
    })
  },
  methods:{
    getValues(){
      
    }
  }
}
</script> 
