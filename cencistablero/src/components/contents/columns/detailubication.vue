<template>
  <v-container>
    <v-card>
      <v-data-table v-model="selected" :headers="headers" :items="items" :single-select="singleSelect" item-key="id"
        show-select class="elevation-1" @input="enterSelect($event)">
        <template v-slot:top>
          <v-switch v-model="singleSelect" label="Selección Unica" class="pa-3"></v-switch>
        </template>
        <template v-slot:[`item.intensidad`]>
          <v-select style="margin-bottom: -25px" value="Sin intensidad" item-value="src" label="--"
            v-on:change="seleccionado" :items="selectinten" dense outlined>
          </v-select>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      singleSelect: true,
      selected: [],
      referencia: "",
      selint: "Sin intensidad",
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Intensidad", value: "intensidad" },
        { text: "Referencía", value: "referencia" },
        { text: "Telefonos", value: "telefono" },
      ],
      selectinten: [
        "Sin intensidad",
        "II",
        "II-III",
        "III",
        "III-IV",
        "IV",
        "IV-V",
        "V",
        "V-VI",
        "VI",
        "VI-VII",
        "VII",
        "VII-VIII",
        "VIII",
        "VIII-IX",
        "IX",
        "IX-X",
        "X",
      ]
    };
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    seleccionado(a) {
      this.selint = a
    },
    loadItems() {
      var self = this;
      this.items = [];
      axios
        .get("https://my-json-server.typicode.com/wesllyt20/eventosapi/db/")
        .then(function (response) {
          self.items = response.data.evento.map((item) => {
            return {
              id: item.id,
              referencia: item.referencia,
              telefono: item.telefono,
              lati: item.lati,
              longi: item.longi,
              ...item.fields,
            };
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    enterSelect(values) {
      var ref = values.map(function (value) { return value.referencia }) // Manda Referencia 
      console.log("valor: ", ref)
      this.$store.state.referencia = ref
      if (this.selint != "Sin intensidad") {
        var latit = values.map(function (value) { return value.lati }) // Manda Latitud 
        console.log("valor Latitud: ", latit.toString())
        this.$store.state.lati = latit.toString()
        this.$store.dispatch('addlatiAction')

        var longit = values.map(function (value) { return value.longi }) // Manda Longitud 
        console.log("valor longitud: ", longit.toString())
        this.$store.state.long = longit.toString()
        this.$store.dispatch('addlongAction')
      }
    },
  },
  watch: {
    selint(val, old) {
      if (val = "Sin intensidad") {
        this.$store.state.lati = 0
        this.$store.state.long = 0
      }
    }
  }
};
</script>
<style>
.theme--light.v-data-table tbody tr.v-data-table__selected {
  background: #a5d6a7 !important;
}

.theme--light.v-icon {
  color: rgba(43, 112, 46, 0.418) !important;
}
</style>