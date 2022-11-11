<template>
  <div>
    <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" large></v-app-bar-nav-icon>

      <v-toolbar-title>
        <h1><b>LISTA DE EVENTOS SÍSMICOS PUBLICADOS </b></h1>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn to="/" icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card>
      <v-card-title>
        <v-col cols="3">
          <h1>REPORTES</h1>
        </v-col>
        <v-col cols="3" class="ml-auto">
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line hide-details>
          </v-text-field>
        </v-col>
      </v-card-title>

      <v-data-table v-model="selected" class="mx-5" :headers="headers" single-select :items="items" :search="search"
        @click:row="rowClick" item-key="nreport">
        <template v-slot:[`item.profundidad`]="{ item }">
          <v-chip :color="getColor(item.profundidad)" dark>
            {{ item.profundidad }}
          </v-chip>
        </template>
        <template v-slot:[`item.reporte`]="{ item }">
          <v-icon color="red" large class="mr-2" @click="pdfedit(item)">
            mdi-file-pdf-box
          </v-icon>
          <v-icon color="yellow" large class="mr-2" @click="pdfedit2(item)">
            mdi-lead-pencil
          </v-icon>
        </template>

      </v-data-table>
    </v-card>
    <!--BAR NAVEGATION-->
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <barnavegation></barnavegation>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!--End Bar NAVEGATION-->
  </div>
</template>
<script>
import barnavegation from '@/components/header/barnav/barnavegation.vue';
import axios from 'axios';
import { jsPDF } from "jspdf";

export default {
  data() {
    return {
      drawer: false,
      group: null,
      search: "",
      selected: [],
      items: [],
      rowsend: [],
      headers: [
        {
          text: "N° Rep.",
          align: "start",
          filterable: false,
          value: "nreport",
          sortable: false,
        },
        { text: "Hora Envio", value: "horaEnvio" },
        { text: "Hora Evento", value: "horaEvento" },
        { text: "Latitud", value: "latitud" },
        { text: "Longitud", value: "longitud" },
        { text: "Profundidad (km)", value: "profundidad" },
        { text: "Magnitud", value: "magnitud" },
        { text: "Referencia", value: "referencia" },
        { text: "Percibido", value: "percibido" },
        { text: "Reporte", value: "reporte", sortable: false },
      ]
    };
  },
  methods: {

    pdfedit: function (reporte) { // click del boton PDF
      if (confirm("Ha seleccionado el evento '" + reporte.nreport + "' ¿desea realizar un pdf?")) {
        for (var i = 1; i <= reporte.nreport; i++) {
          if (reporte.nreport == i) {
            console.log("Profundidad: ", reporte.profundidad)

            var doc = new jsPDF();
            var { ComboBox } = jsPDF.AcroForm;
            doc.text(20, 20, 'Hello world!');
            doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
            doc.addPage();
            doc.text(20, 20, 'Do you like that?' + reporte.referencia);

            doc.output('datauristring');

            var comboBox = new ComboBox();
            comboBox.fieldName = "ChoiceField1";
            comboBox.topIndex = 1;
            comboBox.Rect = [50, 100, 30, 10];
            comboBox.setOptions(["a", "b", "c"]);
            comboBox.value = "b";
            comboBox.defaultValue = "b";
            doc.addField(comboBox);

          }
        }
      }
    },
    pdfedit2(){
      console.log("aeaaaaaaaaaaaaaaa")
    },

    createpdf() {
      const columns = [
        { title: "" }
      ]
    }
    ,
    getColor(profundidad) {
      if (profundidad > 300) return "blue";
      else if (profundidad > 60) return "green";
      else return "red";
    },
    loadItems() {
      var self = this;
      this.items = [];
      axios
        .get("https://api.npoint.io/58259d98735ee7a58f25")
        .then(function (response) {
          self.items = response.data.reportes.map((item) => {
            return {
              nreport: item.nreport,
              horaEnvio: item.horaEnvio,
              horaEvento: item.horaEvento,
              latitud: item.latitud,
              longitud: item.longitud,
              profundidad: item.profundidad,
              magnitud: item.magnitud,
              referencia: item.referencia,
              percibido: item.percibido,
              reporte: item.reporte,
              ...item.fields,
            };
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    rowClick: function (items, row) { // al seleccionar un row
      row.select(true)
      // console.log("Numero de reporte: " + items.nreport)
      this.rowsend = items
    },
  },

  components: {
    barnavegation,
  },
  mounted() {
    this.loadItems();
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
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