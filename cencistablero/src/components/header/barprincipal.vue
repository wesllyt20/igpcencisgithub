<template>
  <div>
    <v-card class="contenedor pt-3" :color="color" fluid>
      <v-row>
        <v-btn color="blue-grey" x-large class="ma-6 mx-5 white--text">
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
              <b style="color: #ffff; font-size: large">Simulacro</b>
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

        <v-btn color="blue-grey" x-large class="ma-6 mx-1 ml-0 white--text">
          <v-icon right dark class="mx-0"> mdi-plus-thick </v-icon>
          Evento manual
        </v-btn>
        <v-btn color="blue-grey" x-large class="ma-6 mx-4 white--text">
          <v-icon right dark class="mx-0"> mdi-download </v-icon>
          Athena
        </v-btn>
        <v-btn color="blue-grey" x-large class="ma-6 mx-1 white--text" to="/createlocation">
          <v-icon right dark class="mx-0"> mdi-format-list-bulleted </v-icon>
          Reportes
        </v-btn>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import AboutView from "@/views/AboutView.vue";
export default {
  data: () => {
    return {
      switch1: true,
      switch2: false,
      switch3: false,
      color: "#DE0000",
      disable1: true,
      disable2: false,
      disable3: false,
    };
  },
  computed: {
    setTheme() {
      if (this.switch1 == true) {
        console.log("swtich1");
        return (
          (this.switch2 = false),
          (this.switch3 = false),
          (this.color = "#DE0000"),
          (this.disable1 = true),
          (this.disable2 = false),
          (this.disable3 = false)
        );
      }
    },
    setTheme2() {
      if (this.switch2 == true) {
        console.log("swtich2");
        return (
          (this.switch1 = false),
          (this.switch3 = false),
          (this.color = "#66BB6A"),
          (this.disable2 = true),
          (this.disable1 = false),
          (this.disable3 = false)
        );
      }
    },
    setTheme3() {
      if (this.switch3 == true) {
        console.log("swtich3");
        return (
          (this.switch2 = false),
          (this.switch1 = false),
          (this.color = "#42A5F5"),
          (this.disable3 = true),
          (this.disable2 = false),
          (this.disable1 = false)
        );
      }
    },
  },
  components: { AboutView },
};
</script>
<style>
</style>