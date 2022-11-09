<template>
    <v-container>
        <v-dialog v-model="dialog" width="550">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="blue" fab large dark title v-bind="attrs" v-on="on">
                    <v-icon>mdi-qrcode</v-icon>
                </v-btn>
            </template>

            <v-card id="codigoqr">
                <v-card-title class="text-h5 grey lighten-2">
                    <b>TEXTO EN CÓDIGO QR</b>
                </v-card-title>

                <v-container>
                    <v-row>
                        <v-col cols="6">
                            <qr-code v-bind:text="qrtext"></qr-code>
                        </v-col>
                        <v-col cols="6">
                            <v-textarea id="textoqr" :value="qrtext" readonly rows="12" />
                        </v-col>
                    </v-row>
                </v-container>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" text @click="dialog = false">
                        Aceptar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import VueQRCodeComponent from 'vue-qrcode-component'
export default {
    data() {
        return {
            dialog: false,
        };
    },
    components: {
        'qr-code': VueQRCodeComponent,

    },
    computed: {
        qrtext() {
            return "REPORTE SÍSMICO: \n" +
                "IGP/CENSIS/" + this.$store.state.namereport + " 2022-0" + this.$store.state.reporte +
                "\n Fecha y Hora Local:" + this.$store.state.fecha + ", " + this.$store.state.hora +
                "\n Fecha y Hora UTC:" + this.$store.state.fecha + ", " + this.$store.state.hora +
                "\n Magnitud: " + this.$store.state.magnitud +
                "\n Profundidad: " + this.$store.state.profundidad +
                "Km\n Latitud: " + this.$store.state.latitud +
                "\n Longitud: " + this.$store.state.longitud +
                "\n Referencia: " + this.$store.state.referencia +
                "\nhttps://www.igp.gob.pe/servicios/centro-sismologico-nacional/evento/2022-0" + this.$store.state.reporte
        },
    }
}
</script>

<style>
#textoqr {
    font-family: arial, verdana, ms sans serif;
    font-size: 12pt;
    line-height: 1;
    padding: 5px;
    line-height: 20px;
    color: black;
}
</style>