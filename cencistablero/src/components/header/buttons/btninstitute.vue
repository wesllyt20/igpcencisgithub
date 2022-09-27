<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
      id="buttonlogos"
        :loading="loading5"
        :disabled="loading5"
        color="#F0F4C3"
        @click="loader = 'loading5'"
        v-bind="attrs"
        v-bind:class="{'white': !clicked, 'green': clicked}"
        v-on:click ="clicked = !clicked"
        largue
        v-on="on"
      >
        <slot name="iconos"></slot>
      </v-btn> 
  </template>
<span><slot name="tooltip"></slot></span>
    </v-tooltip>
</template>
<script>
export default {
  data() {
    return {
      loader: null,
      loading5: false,
      clicked: false
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
};
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
#buttonlogos:hover {
  color: #002646 !important;
}
#buttonlogos::before{
  background-color: rgb(255, 238, 0);
}
</style>