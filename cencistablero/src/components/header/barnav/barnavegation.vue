<template>
  <v-layout justify-start>
    <v-list dense>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="@/assets/icons/igp.png"></v-img>
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
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Tablero principal</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link to="/createlocation">
        <v-list-item-icon>
          <v-icon>mdi-plus-box</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Crear Localidad</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/searchlocation">
        <v-list-item-icon>
          <v-icon>mdi-magnify</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Buscar Localidades</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link to="/listevent">
        <v-list-item-icon>
          <v-icon>mdi-file-chart</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Reporte de eventos sísmicos</v-list-item-title>
      </v-list-item>
 
    </v-list>
  </v-layout>
</template>