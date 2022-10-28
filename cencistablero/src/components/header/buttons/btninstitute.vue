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
                  <v-btn class="sharegr1" @click="activador1($event, r + 1)" v-bind="attrs" v-on="on">
                    <img v-bind:src="'./img/' + item.img" width="35px" />
                  </v-btn>
                </template>
                <span>{{ item.nombre }}</span>
              </v-tooltip>
            </div>
          </v-btn-toggle>
        </v-col>
      </div>
      <div class="mx-4">
        <v-col cols="3">
          <v-btn-toggle tile multiple shaped>
            <v-btn class="btnshare" color="#01579B" @click="grupo2()">
              <v-icon color="white">mdi-share</v-icon>
            </v-btn>
            <div v-for="(item, r ) in data2" :key="item.id">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="sharegr2" @click="activador2($event, r + 1)" v-bind="attrs" v-on="on">
                    <img v-bind:src="'./img/' + item.img" width="35px" />
                  </v-btn>
                </template>
                <span>{{ item.nombre }}</span>
              </v-tooltip>
            </div>
          </v-btn-toggle>
        </v-col>
      </div>
      <div class="mx-4">
        <v-col cols="3">
          <v-btn-toggle tile multiple shaped>
            <v-btn class="btnshare" color="#01579B" @click="grupo3()">
              <v-icon color="white">mdi-share</v-icon>
            </v-btn>
            <div v-for="(item, r ) in data3" :key="item.id">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="sharegr3" @click="activador3($event, r + 1)" v-bind="attrs" v-on="on">
                    <img v-bind:src="'./img/' + item.img" width="35px" />
                  </v-btn>
                </template>
                <span>{{ item.nombre }}</span>
              </v-tooltip>
            </div>
          </v-btn-toggle>
        </v-col>
      </div>
      <div class="mx-4">
        <v-col cols="3">
          <v-btn-toggle tile multiple shaped>
            <v-btn class="btnshare" color="#01579B" @click="grupo4()">
              <v-icon color="white">mdi-share</v-icon>
            </v-btn>
            <div v-for="(item, r ) in data4" :key="item.id">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="sharegr4" @click="activador4($event, r + 1)" v-bind="attrs" v-on="on">
                    <img v-bind:src="'./img/' + item.img" width="35px" />
                  </v-btn>
                </template>
                <span>{{ item.nombre }}</span>
              </v-tooltip>
            </div>
          </v-btn-toggle>
          <!--<v-text-field v-model="pubestado"> </v-text-field> txt_ingresarEstado-->
        </v-col>
      </div>
      <v-btn class="igptest" large icon>
        <img v-bind:src="'./img/igp.png'" width="30px" />
      </v-btn>
    </v-row>
  </v-container>
</template>
<script>
import axios from 'axios';
//mr-auto mt-4 <--- margin
export default {
  data() {
    return {
      data: [],
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      test: "",
      cangr: [],
      text: 'center',
      pubestado: 0,
      color: 4,
      setcolor: '',
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
      document.querySelectorAll(".sharegr1").forEach((boton) => boton.click())
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
      document.querySelectorAll(".sharegr2").forEach((boton) => boton.click())
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
      document.querySelectorAll(".sharegr3").forEach((boton) => boton.click())
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
      document.querySelectorAll(".sharegr4").forEach((boton) => boton.click())
    },
  },
  watch: {
    pubestado(val, old) {
      switch (this.pubestado) {
        case "1":
          return console.log("Estado: enviando"),
            this.setcolor = 'yellow';
        case "2":
          return console.log("Estado: enviado"),
            this.setcolor = 'green';
        case "3":
          return console.log("Estado: no enviado"),
            this.setcolor = 'red';
        default:
          return console.log("Estado: original"),
            this.setcolor = 'white';
      }
    }
  }
}
</script>
<style scoped>
.sharegr1.v-btn--active::before,
.sharegr1.v-btn--active:hover::before,
.sharegr1.v-btn--active,
.sharegr2.v-btn--active::before,
.sharegr2.v-btn--active:hover::before,
.sharegr2.v-btn--active,
.sharegr3.v-btn--active::before,
.sharegr3.v-btn--active:hover::before,
.sharegr3.v-btn--active,
.sharegr4.v-btn--active::before,
.sharegr4.v-btn--active:hover::before,
.sharegr4.v-btn--active {
  opacity: 1 !important;
  background-color: v-bind(setcolor);
  ;
}

.igptest:active {
  opacity: 1 !important;
  background: v-bind(setcolor);
}

.v-btn-toggle>.v-btn.v-btn {
  opacity: 1;
}

.theme--light.v-btn:focus::before {
  opacity: 0;
}
</style>
