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
import moment from 'moment';

const formatod = 'DD/MM/YYYY';
const formatoh = 'HH:mm:ss'

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
      ],
      textoreport: [
        "EL INSTITUTO GEOFÍSICO DEL PERÚ informa, que a horas 02:08:05 (hora local) del día" + "hola",
        ", ocurrió un sismo de M4.6 con epicentro a 20 km al SE de Curibaya,",
        "Candarave, Tacna.El movimiento telúrico fue evaluado con las escalas de Mercalli Modificada",
        "MM / MSK, cuyos valores de intensidades son: "
      ]
    };
  },
  methods: {

    pdfedit: function (reporte) { // click del boton PDF
      moment.locale('es');
      var tim = reporte.horaEvento
      let setFecha = moment(new Date(tim)).format(formatod)
      let setFechalarga = moment(new Date(tim)).format('LL')
      let setHora = moment(new Date(tim)).format(formatoh)

      if (confirm("Ha seleccionado el evento '" + reporte.nreport + "' ¿desea realizar un pdf?")) {
        for (var i = 1; i <= reporte.nreport; i++) {
          if (reporte.nreport == i) {


            // --- desde aqui     
            var doc = new jsPDF();

            /*

            AQUI ENTRA LA IMAGEN Y EL LOGO 

            */

            // TITULO
            doc.setFont("helvetica", "bold");
            doc.setFontSize(30);
            doc.text("REPORTE SÍSMICO", 100, 40, null, null, 'center') // titulo

            // subtitulo - reporte numero 
            doc.setFont("helvetica", "bold");
            doc.setFontSize(12);
            doc.text(["Reporte IGP/CENSIS/RS 2022-" + this.$store.state.selevento], 20, 80, null, null, 'center') // titulo


            //BODY
            doc
              .setFont("helvetica", "normal")
              .setFontSize(12)
              .text(["EL INSTITUTO GEOFÍSICO DEL PERÚ informa, que a horas " + setHora + " (hora local) del día " + setFechalarga +
                ", ocurrió un sismo de M4.6 con epicentro a 20 km al " + reporte.referencia + ".El movimiento telúrico fue evaluado con las escalas de Mercalli Modificada",
                "MM / MSK, cuyos valores de intensidades son: "], 10, 90, { align: "left", maxWidth: "200" })


            //acroform
            var { TextField } = jsPDF.AcroForm;
            var textField = new TextField();
            textField.showWhenPrinted = true;
            textField.Rect = [10, 150, 15, 20];
            textField.fontSize = 12;
            textField.multiline = true;
            textField.value = "----------------"; //
            textField.fieldName = "TestTextBox";

            doc.addField(textField);






            doc.output('dataurlnewwindow');
          }
        }


        //this.$router.push('/pdfview/' + reporte)
      }
    },
    pdfedit2: function (reporte) { // click del boton PDF


      var tim = reporte.horaEvento
      let setFecha = moment(new Date(tim)).format(formatod)
      let setHora = moment(new Date(tim)).format(formatoh)





      console.log(tim)
      console.log("d::", setFecha, "y h: ", setHora)
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