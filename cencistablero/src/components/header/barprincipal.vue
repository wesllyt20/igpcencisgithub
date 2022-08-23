<template>
  <div>
    <v-card class="contenedor pt-3" :color="color" fluid>
      <v-row>
        <v-btn color="blue-grey" x-large class="ma-2 mx-5 white--text">
          Publicar
          <v-icon right dark> mdi-cloud-upload </v-icon>
        </v-btn>

        <v-switch
          label="Preliminar"
          v-model="switch1"
          @change="setTheme()"
          :disabled="disable1"
          flat
        ></v-switch>
        <v-switch
          label="Simulacro"
          v-model="switch2"
          @change="setTheme2()"
          :disabled="disable2"
          flat
        ></v-switch>
        <v-switch
          label="Simulacro"
          v-model="switch3"
          @change="setTheme3()"
          :disabled="disable3"
          flat
        ></v-switch>

        <v-btn color="blue-grey" x-large class="ma-2 mx-1 white--text">
          <v-icon right dark class="mx-0"> mdi-plus-thick </v-icon>
          Evento manual
        </v-btn>
        <v-btn color="blue-grey" x-large class="ma-2 mx-1 white--text">
          <v-icon right dark class="mx-0"> mdi-download </v-icon>
          Athena
        </v-btn>
        <v-btn color="blue-grey" x-large class="ma-2 mx-1 white--text">
          <v-icon right dark class="mx-0"> mdi-format-list-bulleted </v-icon>
          Reportes
        </v-btn>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      switch1: true,
      switch2: false,
      switch3: false,
      color: "#7986CB",
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
          (this.color = "#7986CB"),
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
          (this.color = "#FF5722"),
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
          (this.color = "#2E7D32"),
          (this.disable3 = true),
          (this.disable2 = false),
          (this.disable1 = false)
        );
      }
    },
  },
};
</script>
<style></style>