<template>
  <v-container>
    <v-card class="mx-auto" max-width="500">
      <v-toolbar color="blue-grey" dark>
        <v-spacer></v-spacer>
        <v-toolbar-title >HYDRA - REPORTES</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-list>
        <v-list-group v-for="(item, index) in athena" :key="item.reporte" :prepend-icon="iconaction" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title> Tiempo: {{ item.datos[0].creado }} </v-list-item-title>
              <v-list-item-title>Profundidad: {{ item.datos[0].profundidad }} || Mag: {{ item.datos[0].magnitud }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Hora: {{ item.datos[0].hora }} </v-list-item-title>
              <v-list-item-title>Fecha: {{ item.datos[0].fecha }} </v-list-item-title>
              <v-list-item-title>Creado: {{ item.datos[0].creado }} </v-list-item-title>
              <v-list-item-title>Calculo: {{ item.datos[0].calculo }} </v-list-item-title>
              <v-list-item-title>Latitud: {{ item.datos[0].latitud }} </v-list-item-title>
              <v-list-item-title>Longitud: {{ item.datos[0].longitud }} </v-list-item-title>
              <v-list-item-title>Magnitud: {{ item.datos[0].magnitud }} </v-list-item-title>
              <v-list-item-title>Intensidad: {{ item.datos[0].intensidad }} </v-list-item-title>
              <v-list-item-title>Profundidad: {{ item.datos[0].profundidad }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item-content>
            <div class="pa-2">
              <v-btn class="white--text" block center color="green"
                @click="getValues($event, index + 1, item.datos[0])">
                <v-icon color="white" small>mdi-send </v-icon> Insertar
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
import moment from 'moment';

const formatod = 'DD/MM/YYYY';

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
  methods: {


    getValues: function (event, index, item) {



      for (var i = 1; i <= index; i++) {
        if (index == i) {
          var tim = item.fecha
          let setFecha = moment(tim, formatod).format(formatod)

          this.$store.state.fecha = setFecha;
          this.$store.state.hora = item.hora;
          this.$store.state.latitud = item.latitud;
          this.$store.state.longitud = item.longitud;
          this.$store.state.profundidad = item.profundidad;
          this.$store.state.magnitud = item.magnitud;
        }
      }
    }
  }
}
</script> 
<style>
.mdi-calendar-clock:before {
  color: #6d6d6d;

}
</style>
