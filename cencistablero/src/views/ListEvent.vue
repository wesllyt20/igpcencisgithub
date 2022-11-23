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

            // --- desde aqui INICIO PAGINA 1/2
            var doc = new jsPDF();

            // AQUI ENTRA LA IMAGEN Y EL LOGO 
            var img = new Image()
            img.src = 'https://i.postimg.cc/fbccmJCN/Logo-Reporte.png'
            doc.addImage(img, "PNG", 45, 20, 118, 20);

            doc
              .setFont("helvetica", "bold")
              .setFontSize(18)
              .text("REPORTE SÍSMICO", 100, 52, null, null, 'center') // titulo

              // subtitulo - reporte numero 
              .setFont("helvetica", "bold")
              .setFontSize(12)
              .text(["Reporte IGP/CENSIS/RS 2022-" + reporte.nreport], 10, 67) // titulo

              //BODY  
              .setFont("helvetica", "normal")
              .setFontSize(12)
              .text(["EL INSTITUTO GEOFÍSICO DEL PERÚ informa, que a horas " + setHora + " (hora local) del día " + setFechalarga +
                ", ocurrió un sismo de M4.6 con epicentro a 20 km al " + reporte.referencia + ". El movimiento telúrico fue evaluado con las escalas de Mercalli Modificada" +
                "MM / MSK, cuyos valores de intensidades son: "], 10, 78, { align: "justify", maxWidth: "190" })
              .setFont("helvetica", "bold")
              .setFontSize(13)
              .text([reporte.intensidad + " en " + reporte.ubicacion], 10, 103)

            //acroform - R
            var { TextField, ComboBox, ListBox } = jsPDF.AcroForm; // INYECTAR ACROFORMS

            var ub = 97
            for (var ii = 0; ii <= 5; ii++) {
              ub = ub + 10
              var textField = new TextField();

              textField.showWhenPrinted = false;
              textField.multiline = false;
              textField.fontStyle = "bold";
              textField.fontSize = 13;
              textField.maxFontSize = 13;
              textField.Rect = [10, ub, 180, 6];
              textField.value = "-------     en     --------------------------------------------------------------------";
              textField.fieldName = "TestTextBox" + ii;
              doc.addField(textField);
            }

            //FIRMA
            doc
              .setFont("helvetica")
              .setFontSize(12)
              .text(["Camacho, " + moment().format('LL')], 10, 173, null, null, 'left') // firma


            var comboBox = new ComboBox();
            comboBox.fieldName = "ChoiceField1";
            comboBox.topIndex = 1;
            comboBox.fontSize = 10
            comboBox.Rect = [162, 172, 32, 8];
            comboBox.setOptions(["Jacob Baños", "Efrain Fernandez", "Rolando Kcaña"]);
            comboBox.value = "- Seleccionar -";
            doc.addField(comboBox);
            doc.text("--------------------------------", 153, 181)

            var comboBox = new ComboBox();
            comboBox.fieldName = "ChoiceField12";
            comboBox.topIndex = 1;
            comboBox.fontSize = 10
            comboBox.Rect = [158, 180, 40, 7];
            comboBox.setOptions(["Operador del CENSIS", "Responsable del CENSIS"]);
            comboBox.value = "- Seleccionar -";
            doc.addField(comboBox);



            //CELDAS
            doc
              .rect(10, 198, 192, 9)
              .rect(10, 207, 192, 9)
              .rect(10, 216, 192, 9)
              .rect(10, 225, 192, 9)
              .rect(10, 234, 192, 9)
              .rect(10, 243, 192, 9)
              .rect(10, 252, 192, 9)
              //-- Seccion de arriba
              .setLineWidth(0.3)
              .line(53, 225, 53, 207)
              .line(82, 225, 82, 207)
              .line(112, 225, 112, 207)
              .line(142, 225, 142, 207)
              .line(185, 225, 185, 207)


            doc
              .setFont("helvetica", "bold")
              .setFontSize(14)
              .text("PARÁMETROS FOCALES", 105, 204, null, null, 'center')
              .setFontSize(12)
              .text("Fecha UTC", 12, 213, null, null, 'left')
              .text("Hora Origen UTC", 12, 222, null, null, 'left')
              .text("Latitud", 84, 213, null, null, 'left')
              .text("Longitud", 84, 222, null, null, 'left')
              .text("Magnitud (ML)", 144, 213, null, null, 'left')
              .text("Profundidad (KM)", 144, 222, null, null, 'left')


              // -- Seccion de abajo
              .line(43, 234, 43, 261)
              .line(142, 234, 142, 261)
              .line(175, 234, 175, 261)

              // RELLENO
              .setFontSize(14)
              .text("COMUNICACIÓN", 105, 231, null, null, 'center')
              .setFontSize(12)
              .text("Entidad", 12, 240, null, null, 'left')
              .text("DHN", 12, 249, null, null, 'left')
              .text("INDECI", 12, 258, null, null, 'left')
              .text("Receptor", 84, 240, null, null, 'left')
              .text("Fecha Local", 144, 240, null, null, 'left')
              .text("Hora Local", 177, 240, null, null, 'left')





            // paginacion
            doc
              .setDrawColor(0)
              .setFillColor(203, 221, 227)
              .rect(10, 271, 192, 6, "F")
              .setFont("helvetica")
              .setFontSize(10)
              .text(["Fecha (Local) de la publicación: " + moment().format('DD/MM/YYYY')], 12, 275, null, null, 'left')
              .text(["Hora (Local): " + moment().format('HH:mm:ss')], 199, 275, null, null, 'right')

            var textField = new TextField();
            textField.Rect = [105, 280, 9, 7];
            textField.fontSize = 11;
            textField.value = "----"; //
            textField.fieldName = "TestTextBox";
            doc
              .addField(textField)
              .setFont("helvetica", "normal")
              .setFontSize(11)
              .text("Página 1 / 2", 179, 285)

            // PAGINA 2/2 
            doc.addPage("a4");
            // Titulo y subs
            doc
              .setFont("helvetica", "bold")
              .setFontSize(14)
              .text("OBSERVACIONES", 15, 22, null, null, 'left')
              .text("EVALUACIÓN DE INTENSIDADES (MM/MSK)", 15, 62, null, null, 'left')

            //CELDAS
            doc
              .rect(10, 25, 192, 30)
              .rect(15, 65, 187, 212)
              //-- lines horizontal
              .setLineWidth(0.3)
              .line(15, 72, 202, 72)
              .line(15, 230, 202, 230)
              .line(15, 242, 202, 242)
              .line(15, 254, 202, 254)
              .line(15, 266, 202, 266)

              // -- lineas vertical 
              .line(145, 65, 145, 230)
              .line(53, 242, 53, 277)
              .line(84, 242, 84, 266)
              .line(115, 242, 115, 266)
              .line(145, 242, 145, 266)
              .line(182, 242, 182, 266)


            // Relleno
            doc
              .setFont("helvetica", "bold")
              .setFontSize(13)
              .text("DATOS DE LA EVALUACIÓN", 50, 70, null, null, 'left')
              .text("INFORMANTE", 158, 70, null, null, 'left')
              .setFontSize(14)
              .text("REPORTE SÍSMICO REPROCESADO", 105, 238, null, null, 'center')
              .setFontSize(12)
              .text("Fecha UTC", 17, 250, null, null, 'left')
              .text("Hora Origen UTC", 17, 262, null, null, 'left')
              .text("Epicentro", 17, 273, null, null, 'left')

              .text("Latitud", 86, 250, null, null, 'left')
              .text("Longitud", 86, 262, null, null, 'left')
              .text("Magnitud", 147, 250, null, null, 'left')
              .text("Profundidad(km)", 147, 262, null, null, 'left')

            //paginacion
            doc
              .setFont("helvetica", "normal")
              .setFontSize(11)
              .text("Página 2 / 2", 179, 285)

            doc.output('dataurlnewwindow') // PUBLICADOR
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
              intensidad: item.intensidad,
              ubicacion: item.ubicacion,
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