<template>
  <v-container>
    <v-row>
      <div>
        <v-col>
          <v-btn-toggle tile multiple shaped >
            <v-btn class="btnshare" color="#3b5998" @click="grupo1()">
              <v-icon color="white">mdi-share</v-icon>
            </v-btn>
            <div v-for="(item, r ) in data1" :key="item.id">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="sharegr1" @click="activador1($event, r + 1)" v-bind="attrs" v-on="on">
                    <img v-bind:src="'./img/' + item.img" width="35px" />
                  </v-btn>
                </template>
                <span>{{ item.descripcion }}</span>
              </v-tooltip>
            </div>
          </v-btn-toggle>
        </v-col>
      </div>
      <div class="mx-4">
        <v-col>
          <v-btn-toggle tile multiple shaped >
            <v-btn class="btnshare" color="#3b5998" @click="grupo2()">
              <v-icon color="white">mdi-share</v-icon>
            </v-btn>
            <div v-for="(item, r ) in data2" :key="item.id">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="sharegr2" @click="activador2($event, r + 1)" v-bind="attrs" v-on="on">
                    <img v-bind:src="'./img/' + item.img" width="35px" />
                  </v-btn>
                </template>
                <span>{{ item.descripcion }}</span>
              </v-tooltip>
            </div>
          </v-btn-toggle>
        </v-col>
      </div>
      <div class="mx-4">
        <v-col>
          <v-btn-toggle tile multiple shaped>
            <v-btn class="btnshare" color="#3b5998" @click="grupo3()">
              <v-icon color="white">mdi-share</v-icon>
            </v-btn>
            <div v-for="(item, r ) in data3" :key="item.id">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="sharegr3" @click="activador3($event, r + 1)" v-bind="attrs" v-on="on">
                    <img v-bind:src="'./img/' + item.img" width="35px" />
                  </v-btn>
                </template>
                <span>{{ item.descripcion }}</span>
              </v-tooltip>
            </div>
          </v-btn-toggle>
        </v-col>
      </div>
      <div class="mx-4">
        <v-col>
          <v-btn-toggle tile multiple shaped>
            <v-btn class="btnshare" color="#3b5998" @click="grupo4()">
              <v-icon color="white">mdi-share</v-icon>
            </v-btn>
            <div v-for="(item, r ) in data4" :key="item.id">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="sharegr4" @click="activador4($event, r + 1)" v-bind="attrs" v-on="on">
                    <img class="ml-auto" v-bind:src="'./img/' + item.img" width="35px" />
                  </v-btn>

                </template>
                <span>{{ item.descripcion }}</span>
              </v-tooltip>

            </div>
          </v-btn-toggle>

        </v-col>
      </div>
    </v-row>

    <v-row class="text-center">
      <v-col cols="2" class="mr-16 mt-n6 ml-10">
        <div class="nombres" id="nom1" v-for="item in data1" :key="item.id">
          <b class="pl-5"> {{ item.nombre }}</b>
        </div>
      </v-col>
      <v-col cols="2" class="mr-16 mt-n6 ml-n1">
        <div class="nombres" id="nom2" v-for="item in data2" :key="item.id">
          <b class="pl-6"> {{ item.nombre }}</b>
        </div>
      </v-col>
      <v-col cols="2" class="mr-16 mt-n6 ml-n7">
        <div class="nombres" id="nom3" v-for="item in data3" :key="item.id">
          <b class="pl-8"> {{ item.nombre }}</b>
        </div>
      </v-col>
      <v-col cols="3" class="mr-n10 mt-n6 ml-n11 ">
        <div class="nombres" id="nom4" v-for="item in data4" :key="item.id">
          <b class="pl-3"> {{ item.nombre }}</b>
        </div>
      </v-col>

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
      cangr: [],
      text: 'center',
      pubestado: 2,
      color: 4,
      setcolor: '',
      pubestado: 3,

    };
  },
  async created() {
    await axios.get("https://api.npoint.io/520e36dd9eea13e0d4cb").then(r => this.data = r.data),
      this.data1 = this.data[0].grupo
    this.data2 = this.data[1].grupo
    this.data3 = this.data[2].grupo
    this.data4 = this.data[3].grupo

  },
  methods: {
    test() {
      console.log("->", this.data)
    },

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
    acttest() {
      // TEST EVENT
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
    },
    pubestado2(val, old) {
      switch (this.pubestado) {
        case "1":
          return console.log("Estado: enviando"),
            this.setcolor2 = 'yellow';
        case "2":
          return console.log("Estado: enviado"),
            this.setcolor2 = 'green';
        case "3":
          return console.log("Estado: no enviado"),
            this.setcolor2 = 'red';
        default:
          return console.log("Estado: original"),
            this.setcolor2 = 'white';
      }
    },

  }
}
</script>
<style>
.sharegr3.v-btn--active::before,
.sharegr3.v-btn--active:hover::before,
.sharegr3.v-btn--active,
.sharegr4.v-btn--active::before,
.sharegr4.v-btn--active:hover::before,
.sharegr4.v-btn--active {
  opacity: 1 !important;
  background-color: yellow;
}

.sharegr1.v-btn--active::before,
.sharegr1.v-btn--active:hover::before,
.sharegr1.v-btn--active {

  opacity: 1 !important;
  background-color: green;

}

.sharegr2.v-btn--active::before,
.sharegr2.v-btn--active:hover::before,
.sharegr2.v-btn--active {
  opacity: 1 !important;
  background-color: red;
}

.v-btn-toggle>.v-btn.v-btn {
  opacity: 0;
}

.theme--light.v-btn:focus::before {
  opacity: 0;
}

.sub-name {
  text-justify: auto;
}

.nombres {
  clear: both;
  display: inline-block;
}

#nom1 {
  margin-left: 3px;
}

#nom4 {
  width: auto;
}
</style>
