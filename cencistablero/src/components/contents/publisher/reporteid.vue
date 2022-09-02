<template>
  <v-container>
    <v-card color="#385F73" dark>
      <v-card-title class="pa-2 text-h5">
        <b>ID EVENTO:</b>
        <v-btn @click="copy" color="white" icon class="pa-2 ml-auto">
          <v-icon>mdi-content-copy</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>

      <v-text-field
        v-on:focus="$event.target.select()"
        ref="myinput"
        readonly
        type="text"
        class="pa-4 text-h6"
        placeholder="Placeholder"
        filled
        outlined
        dense
        :value="text"
      ></v-text-field>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      text: "62e1b828abeda2dc58de3859",
    };
  },
  methods: {
    copy() {
      this.$refs.myinput.focus();
      document.execCommand("copy");
    },
  },
};
</script>