<template>
    <v-container>
        <v-row>

            <v-col cols="12" class="pa-1">
                <v-btn class="ma-1" color="grey" plain>
                    <v-icon>mdi-lock</v-icon>
                </v-btn>
                <v-btn color="blue" small dark>
                    <v-icon>mdi-arrow-up-bold</v-icon>
                </v-btn>
                <v-btn color="blue" small dark>
                    <v-icon>mdi-arrow-down-bold</v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="4">
                <v-subheader>Nº de reporte:</v-subheader>
            </v-col>
            <v-col md="8">
                <v-text-field single-line outlined hide-details></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-subheader>Fecha:</v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field type="date" min="2022-01-01" max="2022-12-31" single-line outlined hide-details>
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-subheader>Hora local:</v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field type="time" value="00:00" single-line outlined hide-details></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-subheader>Latitud:</v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field step="0.01" hide-details single-line outlined type="number">
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-subheader>Longitud:</v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field step="0.01" hide-details single-line outlined type="number">
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-subheader>Profundidad:</v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field step="10" hide-details single-line outlined type="number">
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-subheader>Magnitud:</v-subheader>
            </v-col>
            <v-col cols="4">
                <v-text-field step="0.1" hide-details single-line outlined type="number">
                </v-text-field>
            </v-col>

            <v-icon large color="red darken-2">
                mdi-circle
            </v-icon>

        </v-row>

        <v-row class="pa-3">
            <v-col cols="8">
                <v-chip color="orange" label x-large>Próximo: 472</v-chip>
            </v-col>
            <v-col cols="4">
                <v-btn color="blue" fab large dark title>
                    <v-icon>mdi-qrcode</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

</script>
