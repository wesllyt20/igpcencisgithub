<template>
  <v-container>
    <v-simple-table fixed-header height="800px">
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
        <tbody ALIGN=center>
            
          <tr v-for="item in atributos" :key="item.referencia">
            <td></td>
            <td>
                
              <v-select style="margin-bottom: -25px" label="--" :items="items" dense outlined></v-select>
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
          telefono: 947669135,
        },
        {
          referencia: "Ice cream sandwich",
          telefono: 237,
        },
        {
          referencia: "Eclair",
          telefono: 262,
        },
        {
          referencia: "Cupcake",
          telefono: 305,
        },
        {
          referencia: "Gingerbread",
          telefono: 356,
        },
        {
          referencia: "Jelly bean",
          telefono: 375,
        },
        {
          referencia: "Lollipop",
          telefono: 392,
        },
        {
          referencia: "Honeycomb",
          telefono: 408,
        },
        {
          referencia: "Donut",
          telefono: 452,
        },
        {
          referencia: "KitKat",
          telefono: 518,
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
</script>