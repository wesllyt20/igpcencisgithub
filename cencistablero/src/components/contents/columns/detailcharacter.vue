<template>
  <v-card class="mx-auto" width="300">
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>REPORTES</v-list-item-title>
      </v-list-item>



      <v-list-group :value="false" prepend-icon="mdi-account-circle">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Reporte 01</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>

      <v-list-group :value="false" prepend-icon="mdi-account-circle">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Reporte 02</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
      <v-list-group :value="false" prepend-icon="mdi-account-circle">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Reporte 03</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>

      <v-list-group :value="false" prepend-icon="mdi-account-circle">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Reporte 04</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>

      <v-list-group :value="false" prepend-icon="mdi-account-circle">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Reporte 05</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>


    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    admins: [
    
    ['Magnitud', 'mdi-cog-outline'],
      ['Latitud', 'mdi-account-multiple-outline'],
      ['Longitud', 'mdi-cog-outline'],
      ['Profundidad', 'mdi-cog-outline'],  
      ['Magnitud', 'mdi-cog-outline'],
    ],
    cruds: [
      ['Create', 'mdi-plus-outline'],
      ['Read', 'mdi-file-outline'],
      ['Update', 'mdi-update'],
      ['Delete', 'mdi-delete'],
    ],
  }),
}
</script>