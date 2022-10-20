<template>
  <v-container>
    <div v-for="item in athena" :key="item.id">

      <v-btn>
        {{item.reporte}}
      </v-btn>

    </div>



    <v-card class="mx-auto" max-width="500">
      <v-toolbar color="teal" dark>
        <v-spacer></v-spacer>
        <v-toolbar-title>ATHENA - REPORTES</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>


      <v-list>
        <v-list-group v-for="item in item" :key="item.title" v-model="item.active" :prepend-icon="item.action"
          no-action>

          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>


          <v-list-item v-for="child in item.items" :key="child.title">
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>








          <div class="pa-2">
            <v-list-item-content>
              <v-btn block center color="green">
                <v-icon color="white" small>mdi-send </v-icon> Insertar
              </v-btn>
            </v-list-item-content>
          </div>

        </v-list-group>
      </v-list>
    </v-card>



  </v-container>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data:function(){ 
    return  {
      
    }
  },
  created: function () {
    this.$store.dispatch('getAthena')
  },
  computed: {
    ...mapState({
      athena: state => state.athena
    })
  }

}
</script> 