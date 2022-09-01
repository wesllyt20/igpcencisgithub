<template>
  <div>
    <v-card class="contenedor pt-3" :color="color" fluid>
      <v-row>
        <v-btn color="#2196F3" x-large class="ma-6 mx-10 white--text">
          Publicar
          <v-icon right dark> mdi-cloud-upload </v-icon>
        </v-btn>
        <v-col sm="1">
          <v-list-item-content>
            <v-list-item-title>
              <b style="color: #ffff; font-size: large">Preliminar</b>
            </v-list-item-title>
            <v-list-item-action>
              <v-switch
                v-model="switch1"
                @change="setTheme()"
                color="#76FF03"
                :disabled="disable1"
              >
              </v-switch
            ></v-list-item-action>
          </v-list-item-content>
        </v-col>
        <v-col sm="1">
          <v-list-item-content>
            <v-list-item-title>
              <b style="color: #ffff; font-size: large">Definitivo</b>
            </v-list-item-title>
            <v-list-item-action>
              <v-switch
                v-model="switch2"
                @change="setTheme2()"
                color="#D50000"
                :disabled="disable2"
                flat
              >
              </v-switch
            ></v-list-item-action>
          </v-list-item-content>
        </v-col>

        <v-col sm="1">
          <v-list-item-content>
            <v-list-item-title>
              <b style="color: #ffff; font-size: large">Simulación</b>
            </v-list-item-title>
            <v-list-item-action>
              <v-switch
                v-model="switch3"
                @change="setTheme3()"
                color="#D50000"
                :disabled="disable3"
                flat
              >
              </v-switch
            ></v-list-item-action>
          </v-list-item-content>
        </v-col>
        <v-col sm="1">
          <v-list-item-content>
            <v-list-item-title>
              <b style="color: #ffff; font-size: large">Simulacro</b>
            </v-list-item-title>
            <v-list-item-action>
              <v-switch
                v-model="switch4"
                @change="setTheme4()"
                color="#D50000"
                :disabled="disable4"
                flat
              >
              </v-switch
            ></v-list-item-action>
          </v-list-item-content>
        </v-col>

        <v-btn
          color="#9CCC65"
          x-large
          class="ma-6 mx-1 ml-0 white--text"
          to="/searchlocation"
        >
          <v-icon right dark class="mx-0"> mdi-plus-thick </v-icon>
          Evento manual
        </v-btn>
        <v-btn
          color="blue-grey"
          x-large
          class="ma-6 mx-4 white--text"
          to="/createlocation"
        >
          <v-icon right dark class="mx-0"> mdi-download </v-icon>
          Athena
        </v-btn>
        <v-btn
          color="#E57373"
          x-large
          class="ma-6 mx-1 white--text"
          to="/listevent"
        >
          <v-icon right dark class="mx-0"> mdi-format-list-bulleted </v-icon>
          Reportes
        </v-btn>
      </v-row>

      <v-row class="mx-5" align="center">
        <v-col cols="2" class="ml-auto">
          <cardsgroup1></cardsgroup1>
        </v-col>

        <v-col cols="2">
          <cardsgroup2></cardsgroup2>
        </v-col>

        <v-col cols="2">
          <cardsgroup3></cardsgroup3>
        </v-col>

        <v-col cols="2">
          <cardsgroup4></cardsgroup4>
        </v-col>
        <v-col sm="1" cols="1" class="ml-auto">
        <v-list-item-content>
          <v-list-item-title class="ml-4">
            <b style="color: #ffff; font-size: large">TESTEO</b>
          </v-list-item-title>
          <v-list-item-action>
            <v-btn fab large>
              <v-img
                src="@/assets/icons/peru.png"
                aspect-ratio="1.7"
                contain
              ></v-img> </v-btn
          ></v-list-item-action>
        </v-list-item-content>
      </v-col>
      </v-row>

      
    </v-card>
  </div>
</template>

<script>
import AboutView from "@/views/AboutView.vue";
import cardsgroup1 from "./cards/cardsgroup1.vue";
import cardsgroup2 from "./cards/cardsgroup2.vue";
import cardsgroup3 from "./cards/cardsgroup3.vue";
import cardsgroup4 from "./cards/cardsgroup4.vue";

export default {
  data: () => {
    return {
      switch1: true,
      switch2: false,
      switch3: false,
      switch4: false,
      color: "#FF1744",
      disable1: true,
      disable2: false,
      disable3: false,
      disable4: false,
    };
  },
  computed: {
    setTheme() {
      if (this.switch1 == true) {
        console.log("swtich1");
        return (
          (this.switch2 = false),
          (this.switch3 = false),
          (this.switch4 = false),
          (this.color = "#FF1744"),
          (this.disable1 = true),
          (this.disable2 = false),
          (this.disable3 = false),
          (this.disable4 = false)
        );
      }
    },
    setTheme2() {
      if (this.switch2 == true) {
        console.log("swtich2");
        return (
          (this.switch1 = false),
          (this.switch3 = false),
          (this.switch4 = false),
          (this.color = "#66BB6A"),
          (this.disable2 = true),
          (this.disable1 = false),
          (this.disable3 = false),
          (this.disable4 = false)
        );
      }
    },
    setTheme3() {
      if (this.switch3 == true) {
        console.log("swtich3");
        return (
          (this.switch4 = false),
          (this.switch2 = false),
          (this.switch1 = false),
          (this.color = "#42A5F5"),
          (this.disable3 = true),
          (this.disable2 = false),
          (this.disable1 = false),
          (this.disable4 = false)
        );
      }
    },
    setTheme4() {
      if (this.switch4 == true) {
        console.log("swtich3");
        return (
          (this.switch3 = false),
          (this.switch2 = false),
          (this.switch1 = false),
          (this.color = "#FFB300"),
          (this.disable4 = true),
          (this.disable3 = false),
          (this.disable2 = false),
          (this.disable1 = false)
        );
      }
    },
  },
  components: {
    AboutView,
    cardsgroup1,
    cardsgroup2,
    cardsgroup3,
    cardsgroup4,
  },
};
</script>
<style>
</style>