<template>
  <v-app>
    <barprincipal></barprincipal>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import barprincipal from './components/header/barprincipal.vue';

export default {
  components:{
    barprincipal
  },
 
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
