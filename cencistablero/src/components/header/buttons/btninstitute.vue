<template>
  <v-container>
    <v-row>
      <div class="mx-4">
        <v-col cols="3">
          <v-btn-toggle>
            <v-btn color="blue">
              <v-icon color="white">mdi-share</v-icon>
            </v-btn>
            <div v-for="item in data1" :key="item.id">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on">
                    <img v-bind:src="'./img/' +item.img" width="35px" />
                  </v-btn>
                </template>
                <span>{{item.nombre}}</span>
              </v-tooltip>
            </div>
          </v-btn-toggle>
        </v-col>
      </div>
      <div class="mx-4">
        <v-col cols="3">
          <v-btn-toggle>
            <v-btn>
              <v-icon>mdi-share</v-icon>
            </v-btn>
            <div v-for="item in data2" :key="item.id">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on">
                    <img v-bind:src="'./img/' +item.img" width="35px" />
                  </v-btn>
                </template>
                <span>{{item.nombre}}</span>
              </v-tooltip>
            </div>
          </v-btn-toggle>
        </v-col>
      </div>
      <div class="mx-4">
        <v-col cols="3">
          <v-btn-toggle>
            <v-btn>
              <v-icon>mdi-share</v-icon>
            </v-btn>
            <div v-for="item in data3" :key="item.id">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on">
                    <img v-bind:src="'./img/' +item.img" width="35px" />
                  </v-btn>
                </template>
                <span>{{item.nombre}}</span>
              </v-tooltip>
            </div>
          </v-btn-toggle>
        </v-col>
      </div>
      <div class="mx-4">
        <v-col cols="3">
          <v-btn-toggle>
            <v-btn>
              <v-icon>mdi-share</v-icon>
            </v-btn>
            <div v-for="item in data4" :key="item.id">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on">
                    <img v-bind:src="'./img/' +item.img" width="35px" />
                  </v-btn>
                </template>
                <span>{{item.nombre}}</span>
              </v-tooltip>
            </div>
          </v-btn-toggle>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: [],
      data1: [],
      data2: [],
      data3: [],
      data4: [],

    };
  },

  created() {
    axios.get("https://api.npoint.io/0401632c71f28605c506/").then(r => this.data = r.data),
      axios.get("https://api.npoint.io/0401632c71f28605c506/0").then(r => this.data1 = r.data.grupo),
      axios.get("https://api.npoint.io/0401632c71f28605c506/1").then(r => this.data2 = r.data.grupo),
      axios.get("https://api.npoint.io/0401632c71f28605c506/2").then(r => this.data3 = r.data.grupo),
      axios.get("https://api.npoint.io/0401632c71f28605c506/3").then(r => this.data4 = r.data.grupo)

  }
}
</script>
<style scoped>
.share {
  color: "blue" !important;
  background-color: "blue";

}
</style>
