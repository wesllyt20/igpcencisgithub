<template>
  <div>
    <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">


      <v-toolbar-title>
        <h1><b>Buscar Localidades</b></h1>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-row>
        <v-col cols="1" align="center" class="ml-auto ">
          <v-btn to="/" icon class="pa-8 ml-6">
            <v-icon>mdi-export</v-icon>
          </v-btn>

          <v-app-bar-nav-icon x-large @click.stop="drawer = !drawer" class="pa-8 ml-6"></v-app-bar-nav-icon>
        </v-col>
      </v-row>
    </v-toolbar>
    <br />

    <v-layout justify-start>
      <v-row class="pa-4">
        <v-col cols="2">
          <v-row class="ml-auto">
            <v-btn color="#26A69A" dark v-bind="attrs" v-on="on">
              Buscar
            </v-btn>
          </v-row>
          <v-row class="text-center">
            <v-col cols="3">
              <b style="color: #00000; font-size: x-large">Latitud:</b>
            </v-col>
            <v-col cols="7" class="ml-auto">
              <v-text-field step="0.01" solo outlined dense hide-details type="number">
              </v-text-field>
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col cols="3">
              <b style="color: #00000; font-size: x-large">Longitud:</b>
            </v-col>
            <v-col cols="7" class="ml-auto">
              <v-text-field step="0.000001" solo outlined dense hide-details type="number">
              </v-text-field>
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col cols="3">
              <label><b style="color: #00000; font-size: x-large">Nombre:</b></label>
            </v-col>
            <v-col cols="7" class="ml-auto">
              <v-text-field solo outlined dense hide-details> </v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="10" class="pa-1">
          <v-card-title>
            <v-col cols="9">
              <h1>Localidades encontradas</h1>
            </v-col>
            <v-col cols="3" class="ml-auto">
              <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line
                hide-details></v-text-field>
            </v-col>
          </v-card-title>
          <v-data-table :headers="headers" :items="desserts" :search="search">
            <template v-slot:[`item.editar`]="{ item }">
              <v-icon color="#FFC107" large class="mr-2" @click="editItem(item)">
                mdi-lead-pencil
              </v-icon>
            </template></v-data-table>
        </v-col>
      </v-row>
    </v-layout>
    <!--BAR NAVEGATION-->
    <v-navigation-drawer v-model="drawer" absolute bottom temporary right>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">

          <barnavegation></barnavegation>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!--End Bar NAVEGATION-->
  </div>
</template>
<script>
import barnavegation from "@/components/header/barnav/barnavegation.vue";
export default {
  data() {
    return {
      search: "",
      drawer: false,
      group: null,
      headers: [
        {
          text: "Localidad",
          align: "start",
          sortable: false,
          value: "localidad",
        },
        { text: "Provincia", value: "provincia" },
        { text: "Departamento", value: "departamento" },
        { text: "Latitud", value: "latitud" },
        { text: "Longitud", value: "longitud" },
        { text: "Editar", value: "editar", sortable: false },
      ],
      desserts: [
        {
          localidad: "Surco",
          provincia: "Lima",
          departamento: "Lima",
          latitud: 24,
          longitud: 4.0,
        },
      ],
    };
  },
  components: {
    barnavegation,
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style>
.mdi-menu::before {
  color: white !important
}
</style>