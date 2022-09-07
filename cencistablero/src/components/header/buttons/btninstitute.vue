<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">

        <v-btn
          :loading="loading5"
          :disabled="loading5"
          color="light-green lighten-4"
          fab
          normal
          icon
          @click="loader = 'loading5'"
          v-bind="attrs"
          v-on="on"
          v-for="item in data"
        :key="item.id"
        >
        <slot name="iconos"></slot>
        {{data['botones'][0]['nombre']}}
        <!--  img v-bind:src="'./img/' + item[0].img" width="30px" />-->
        </v-btn>
</template>
<span><slot name="tooltip"></slot></span>
    </v-tooltip>


</template>
<script>
import btninst from "@/assets/data/btninst.json";
export default {
  data() {
    return {
      loader: null,
      loading5: false,
      data: btninst,
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
</style>