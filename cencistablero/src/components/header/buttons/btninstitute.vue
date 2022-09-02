<template>

<v-tooltip top>
      <template v-slot:activator="{ on, attrs }">

  <v-btn
    :loading="loading5"
    :disabled="loading5"
    color="light-green lighten-4"
    class="ma-2 white--text"
    fab
    small
    @click="loader = 'loading5'"
    v-bind="attrs"
          v-on="on"
  >
    <slot></slot>
  </v-btn>

</template>
      <span><slot name="tooltip"></slot></span>
    </v-tooltip>


</template>
<script>
    export default {
      data () {
        return {
          loader: null,
          loading5: false,
        }
      },
      watch: {
        loader () {
          const l = this.loader
          this[l] = !this[l]
  
          setTimeout(() => (this[l] = false), 3000)
  
          this.loader = null
        },
      },
    }
  </script>
  <style>
    .custom-loader {
      animation: loader 1s infinite;
      display: flex;
    }
    @-moz-keyframes loader {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
    @-webkit-keyframes loader {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
    @-o-keyframes loader {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
    @keyframes loader {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  </style>