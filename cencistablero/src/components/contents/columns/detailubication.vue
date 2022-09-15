<template>
  <v-card>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :single-select="singleSelect"
      item-key="name"
      show-select
      class="elevation-1"
    >
      <template v-slot:top>
        <v-switch
          v-model="singleSelect"
          label="Selección unica."
          class="pa-3"
        ></v-switch>
      </template>
      
    </v-data-table>
    <div >
    <v-btn @click="validar">
      {{adata["evento2"][0]["telefono"]}} <v-icon right dark> mdi-cloud-upload </v-icon>
    </v-btn>
  </div>
  </v-card>
</template>

<script>
import datos from "@/assets/data/tablerefer.json";

export default {
  data() {
    return {
      adata:datos,
      singleSelect: true,
      selected: [],
      headers: [
        {
          text: "Intensidad",
          align: "start",
          sortable: false,
          value: "intensidad",
        },
        { text: "Referencía", value: "referencia" },
        { text: "Telefonos", value: "telefono" },
      ],
      desserts: [
        {
          intensidad: this.$store.state.intensidad,
          referencia: "",
          telefono: "",
        },
        {
          intensidad: "",
          referencia: "",
          telefono: "",
        },
        {
          intensidad: "",
          referencia: "",
          telefono: "",
        },
      ],
    };
  },
  computed: {
    items() {
      return datos.map((item) => {
        return item;
      });
    },
  },
  methods: {
    validar() {
      console.log( item[1].evento1);
    },
  },
};
</script>
      <style>
.theme--light.v-data-table tbody tr.v-data-table__selected {
  background: #a5d6a7 !important;
}
</style>

<!--<template>
  <v-container>
    <v-simple-table fixed-header height="660px">
      <template v-slot:default>
        <thead>
          <tr>
            <th><b style="font-size: large">Seleccion</b></th>
            <th><b style="font-size: large">Intensidad</b></th>
            <th><b style="font-size: large">Publicar</b></th>
            <th><b style="font-size: large">Referencia</b></th>
            <th><b style="font-size: large">Telefono</b></th>
          </tr>
        </thead>
        <tbody ALIGN="center">
          <tr v-for="item in atributos" :key="item.referencia">
            <td></td>
            <td>
              <v-select
                style="margin-bottom: -25px"
                label="--"
                :items="items"
                dense
                outlined
              ></v-select>
            </td>
            <td>
              <v-switch inset></v-switch>
            </td>
            <td>{{ item.referencia }}</td>
            <td>{{ item.telefono }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      switch1: false,
      atributos: [
        {
          referencia: "952 km, al SO de ilo, ilo - Moquegua",
          telefono: "053-481151 481110 491555",
        },
        {
          referencia: "919 km al SO de Tacna, Tacna - Tacna ",
          telefono: "052-414141 318455 318269 245987 412031",
        },
        {
          referencia: "921 km al SO de Alto De La Alianza, Tacna - Tacna ",
          telefono: "953638729",
        },
        {
          referencia: "930 km al SO de Calana, Tacna - Tacna ",
          telefono: "052-471017",
        },
        {
          referencia: "932 km al S de Punta De Bombon, Islay - Arequipa ",
          telefono: "054-553025",
        },
        {
          referencia: "J932 km al SO de Locumba, Jorge Basadre - Tacna ",
          telefono: "052-505613",
        },
        {
          referencia: "939 km al S de Mollendo, Islay - Arequipa ",
          telefono: "054-533333 ",
        },
        {
          referencia: "960 km al S de Quilca, Camana - Arequipa ",
          telefono: "054-619409",
        },
        {
          referencia: "962 km al S de Camana, Camana - Arequipa ",
          telefono: "054-573460 571021 505116",
        },
        {
          referencia: "963 km al SO de Ilabaya, Jorge Basadre - Tacna ",
          telefono: "052-952922141",
        },
        {
          referencia: "965 km al SO de Moquegua, Mariscal Nieto - Moquegua ",
          telefono: "053-461271 461665 953694578",
        },
        {
          referencia: "967 km al SO de Toquepala, Jorge Basadre - Tacna ",
          telefono: "052-466111-2221",
        },
      ],
      select: ["---"],
      items: [
        "Sin intensidad",
        "Nivel 1",
        "Nivel 2",
        "Nivel 3",
        "Nivel 4",
        "--",
      ],
    };
  },
};
</script> -->