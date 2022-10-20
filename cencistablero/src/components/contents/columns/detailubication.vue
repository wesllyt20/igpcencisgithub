<template>
  <v-container>
    <v-card>
      <v-data-table v-model="selected" :headers="headers" :items="items" :single-select="singleSelect" item-key="id"
        show-select class="elevation-1" @click:row="rowClick" @input="enterSelect($event)">

        <template v-slot:top>
          <v-switch v-model="singleSelect" label="Selección Unica" class="pa-3"></v-switch>
        </template>

        <template v-slot:[`item.intensidad`]="{ item }">
          <v-select style="margin-bottom: -25px" label="--" :items="selectinten" dense outlined :value=item.intensidad>
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
      select: ["--"],
      selectinten: [
        "Sin intensidad",
        "nivel 1",
        "nivel 2",
        "nivel 3",
        "nivel 4",
        "nivel 5",
        "nivel 6",
        "nivel 7",
        "nivel 8",
      ]
    };
  },
  mounted() {
    this.loadItems();
  },
  methods: {
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
              intensidad: item.intensidad,
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
    enterSelect() {
      this.$store.state.referencia = this.selected.map(e => e.referencia);
      //this.$store.state.lati = this.selected.map(e => e.lati); -- convertir a objeto
      //this.$store.dispatch('addlatiAction');
      //this.$store.state.long = this.selected.map(e => e.longi);
      //this.$store.dispatch('addlongAction');
      console.log("valor: ")
    },

    rowClick: function (items, row) {
      row.select(true)
      this.$store.state.lati = items.lati
      this.$store.dispatch('addlatiAction')
      this.$store.state.long = items.longi
      this.$store.dispatch('addlatiAction')
    },
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