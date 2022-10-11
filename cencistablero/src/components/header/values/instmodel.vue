<template>
  <v-container fluid>










  </v-container>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      btns: [],

    };
  },
  components: {
    btninstitute
  },
  mounted: function () {
    axios
      .then((r) => {
        this.btns = r.data;
      });
  },
  methods:{
    listbuttons(){
axios
.get("https://api.npoint.io/0401632c71f28605c506/botones/")

    }
  }
}
</script>