<template>
  <v-layout justify-start>
    <v-list dense>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="@/assets/images/developer.png"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Raphael Murphy Ramos
          </v-list-item-title>
          <v-list-item-subtitle>otidg02@igp.gob.pe</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item link to="/">
        <v-list-item-icon>
          <v-icon class="mdi-icon">mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Tablero principal</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link to="/createlocation">
        <v-list-item-icon>
          <v-icon class="mdi-icon">mdi-plus-box</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Crear Localidad</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/searchlocation">
        <v-list-item-icon>
          <v-icon class="mdi-icon">mdi-magnify</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Buscar Localidades</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link to="/listevent">
        <v-list-item-icon>
          <v-icon class="mdi-icon">mdi-file-chart</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Reporte de eventos sísmicos</v-list-item-title>
      </v-list-item>
      <br />
      <v-row justify="center">
        <div class="pa-2">
          <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark v-bind="attrs" v-on="on" block> Salir</v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5">
                Cerrar sesión
              </v-card-title>
              <v-card-text>¿Desea salir de la sesión actual?</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" text @click="dialog = false">
                  Cancelar
                </v-btn>
                <v-btn color="green darken-1" text to="/userlogin" @click="dialog = false">
                  Aceptar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-row>
    </v-list>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
<style>
.mdi-plus-box::before,
.mdi-home::before,
.mdi-magnify::before,
.mdi-file-chart::before {
  color: #6200ea !important;
}
</style>