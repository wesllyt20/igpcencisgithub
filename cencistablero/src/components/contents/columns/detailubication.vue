<template>
  <v-card>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="items"
      :single-select="singleSelect"
      item-key="id"
      show-select
      class="elevation-1"
    >
      <template v-slot:top>
        <v-switch
          v-model="singleSelect"
          label="Selección Unica"
          class="pa-3"
        ></v-switch>
      </template>

      <template v-slot:items="{ on, props }">
        <tr>
          <td>
            <v-simple-checkbox
              color="green"
              v-bind="props"
              v-on="on"
            ></v-simple-checkbox>
          </td>

          <td>{{ props.item.id }}</td>
          <td>{{ props.item.referencia }}</td>
          <td>{{ props.item.telefono }}</td>
          <td>
            <v-select
              style="margin-bottom: -25px"
              label="--"
              :items="selectinten"
              dense
              outlined
            ></v-select>
          </td>
        </tr>
      </template>
    </v-data-table>
    <v-select
              style="margin-bottom: -25px"
              label="--"
              :items="selectinten"
              dense
              outlined
            ></v-select>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      singleSelect: true,
      selected: [],
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
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
      ],
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
        .get("https://my-json-server.typicode.com/wesllyt20/eventosapi/db")
        .then(function (response) {
          self.items = response.data.evento.map((item) => {
            return {
              id: item.id,
              referencia: item.referencia,
              telefono: item.telefono,
              intensidad: item.intensidad,
              ...item.fields,
            };
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
      <style>
.theme--light.v-data-table tbody tr.v-data-table__selected {
  background: #a5d6a7 !important;
}
.theme--light.v-icon {
  color: blue !important;
}
.v-input--selection-controls__ripple.green--text {
  color: blue !important;
}
</style>