<template>
    <v-card height="100px" width="250">
        <v-card class="mx-auto" color="#3b5998" dark max-width="400">
            <v-card-title>
                <v-icon large left>
                    mdi-facebook
                </v-icon>
                <span class="text-h6 font-weight-light">Facebook</span>
                <v-btn color="white" icon class="pa-2 ml-auto">
                    <v-icon>mdi-content-copy</v-icon>
                </v-btn>
            </v-card-title>
            <v-textarea class="pa-3" id="texto2" rows="11" value="REPORTE SÍSMICO:
IGP/CENSIS/RS 2022-0529 
Fecha y Hora Local: 20/08/2022,06:50:15 
Fecha y Hora UTC: 20/08/2022,11:50:15 
Magnitud: 3.8 
Profundidad: 48 km 
Latitud: -13.56 
Longitud: -76.31 
Intensidad: III Tambo De Mora 
Referencia: 18 km al SO de Tambo De Mora, Chincha - Ica 
https://www.igp.gob.pe/.../centro.../evento/2022-0529"></v-textarea>
        </v-card>
    </v-card>
</template>
<style>
#texto2 {
    font-family: arial, verdana, ms sans serif;
    font-size: 12pt;
    line-height: 1;

}
</style>