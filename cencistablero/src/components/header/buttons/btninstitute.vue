<template>
  <v-container>
    <v-row> 
      <div class="mx-4">
        <v-col cols="3">
          <v-btn-toggle tile multiple shaped>
            <v-btn class="btnshare" color="#01579B" @click="grupo1()">
              <v-icon color="white">mdi-share</v-icon>
            </v-btn>
            <div v-for="(item, r ) in data1" :key="item.id">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn @click="activador1($event, r+1)" v-bind="attrs" v-on="on">
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
            <v-btn class="btnshare" color="#01579B" @click="grupo2()">
              <v-icon color="white">mdi-share</v-icon>
            </v-btn>
            <div v-for="(item, r ) in data2" :key="item.id">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn @click="activador2($event, r+1)" v-bind="attrs" v-on="on">
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
            <v-btn class="btnshare" color="#01579B" @click="grupo3()">
              <v-icon color="white">mdi-share</v-icon>
            </v-btn>
            <div v-for="(item, r ) in data3" :key="item.id">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn @click="activador3($event, r+1)" v-bind="attrs" v-on="on">
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
            <v-btn class="btnshare" color="#01579B" @click="grupo4">
              <v-icon color="white">mdi-share</v-icon>
            </v-btn>
            <div v-for="(item, r ) in data4" :key="item.id">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn @click="activador4($event, r+1)" v-bind="attrs" v-on="on">
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

  },
  methods: {
    // Activadores Grupo 1 de botones
    activador1: function (event, r) {
      switch (r) {
        case 1:
          return console.log("grupo 1: soy 1");
        case 2:
          return console.log("grupo 1: soy 2");
        case 3:
          return console.log("grupo 1: soy 3");
        case 4:
          return console.log("grupo 1: soy 4");
        default:
          return console.log("grupo 1: aeaaa");
      }
    },
    grupo1() {
      this.activador1(event, 1)
      this.activador1(event, 2)
      this.activador1(event, 3)
      this.activador1(event, 4)
    },

    // Activadores Grupo 2 de botones
    activador2: function (event, r) {
      switch (r) {
        case 1:
          return console.log("grupo 2: soy 1");
        case 2:
          return console.log("grupo 2: soy 2");
        case 3:
          return console.log("grupo 2: soy 3");
        case 4:
          return console.log("grupo 2: soy 4");
        default:
          return console.log("grupo 2: aeaaa");
      }
    },
    grupo2() {
      this.activador2(event, 1)
      this.activador2(event, 2)
      this.activador2(event, 3)
      this.activador2(event, 4)
    },

    // Activadores Grupo 3 de botones
    activador3: function (event, r) {
      switch (r) {
        case 1:
          return console.log("grupo 3: soy 1");
        case 2:
          return console.log("grupo 3: soy 2");
        case 3:
          return console.log("grupo 3: soy 3");
        case 4:
          return console.log("grupo 3: soy 4");
        default:
          return console.log("grupo 3: aeaaa");
      }
    },

    grupo3() {
      this.activador3(event, 1)
      this.activador3(event, 2)
      this.activador3(event, 3)
      this.activador3(event, 4)
    },

    // Activadores Grupo 4 de botones
    activador4: function (event, r) {
      switch (r) {
        case 1:
          return console.log("grupo 4: soy 1");
        case 2:
          return console.log("grupo 4: soy 2");
        case 3:
          return console.log("grupo 4: soy 3");
        case 4:
          return console.log("grupo 4: soy 4");
        default:
          return console.log("grupo 4: aeaaa");
      }
    },
    grupo4() {
      this.activador4(event, 1)
      this.activador4(event, 2)
      this.activador4(event, 3)
      this.activador4(event, 4)
    },
    // Todo los botones
    totalgroup() {
      this.grupo1()
      this.grupo2()
      this.grupo3()
      this.grupo4()
    }

  }
}
</script>
<style scoped>
.share {
  color: "blue" !important;
  background-color: "blue";

}
</style>
