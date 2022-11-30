<template>
   <v-app id="inspire">
      <v-container fluid fill-height>
         <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
               <v-card class="elevation-8">
                  <v-toolbar dark color="blue-grey">
                     <v-toolbar-title>Formulario de inicio de sesión</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                     <v-form ref="form" v-model="valid" lazy-validation>
                        <v-row>
                           <v-col>
                              <v-select :items="items" v-model="user" label="Nombre de usuario" outlined
                                 prepend-icon="mdi-account" :rules="[v => !!v || 'Item is required']"
                                 required></v-select>
                              <v-select :items="items2" v-model="range" label="Cargo" outlined
                                 prepend-icon="mdi-badge-account-outline" :rules="[v => !!v || 'Item es requerido']"
                                 required></v-select>
                           </v-col>
                        </v-row>
                        <v-row>
                           <v-col align="center" class="mt-n5">
                              <v-btn :disabled="!valid" color="success" @click="validate">Acceder</v-btn>
                           </v-col>
                        </v-row>
                     </v-form>
                  </v-card-text>
               </v-card>
            </v-flex>
         </v-layout>
      </v-container>
   </v-app>
</template>
 
<script>
export default {
   name: 'Login',


   props: {
      source: String,
   },
   methods: {
      validate() {
         this.$refs.form.validate()
         if (this.user == null || this.range == null) {

            console.log("No puede ingresar")
         } else {
            console.log("Puede ingresar")
         }

      },


   },

   data: () => ({
      valid: true,
      items: ["Jacob Baños", "Efrain Fernandez", "Rolando Kcaña"],
      items2: ["Operador del CENSIS", "Responsable del CENSIS"],
      user: null,
      range: null,
   }),


};
</script>
 
<style>
.mdi-account::before,
.mdi-badge-account-outline::before {
   color: rgb(134, 134, 134) !important;
   ;
}
</style>
 