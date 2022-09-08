<template>

    <div >
        <l-map id="mapa" :zoom="zoom" :center="center" style="height: 400px; width: 100%">
            <l-tile-layer :url="url" :attribution="attribution" ></l-tile-layer>
            <l-geo-json v-if="show" :geojson="geojson" :options="options" :options-style="styleFunction" />
            <l-marker :lat-lng="marker" :icon="icon">
                <l-popup>
                    <h5 class="text-primary m-0 font-weight-bold">
                        Ubicación
                    </h5>
                    <br>
                    Casa de Nico XD
                  <!--  <b> Latitud: </b> -12 <br>
                    <b> Longitud: </b> -5-->
                </l-popup>

            </l-marker>
        </l-map>
    </div>

</template>

<script>
import { latLng, icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LGeoJson, LPopup } from "vue2-leaflet";

export default {
    name: "Example",
    components: {
        LMap,
        LTileLayer,
        LGeoJson,
        LMarker,
        LPopup
    },
    data() {
        return {
            loading: false,
            show: true,
            enableTooltip: true,
            zoom: 17,
            center: [-12.167424, -76.941945],
            geojson: null,
            fillColor: "#e4ce7f",
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a href="https://ultimosismo.igp.gob.pe/"> Instituto Geofísico del Perú</a> Equipo de Desarrollo IGP,',
            marker: latLng(-12.167424, -76.941945),
                  icon: icon({
        iconUrl: "https://media0.giphy.com/media/D0zsDFSYYprim87DeR/giphy.gif?cid=790b76119147eeee3075fbb5a1579bbff45a1c18b0d5d432&rid=giphy.gif&ct=s",
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
        };
    },
    computed: {
        options() {
            return {
                onEachFeature: this.onEachFeatureFunction
            };
        },
        styleFunction() {
            const fillColor = this.fillColor; 
            return () => {
                return {
                    weight: 2,
                    color: "#ECEFF1",
                    opacity: 1,
                    fillColor: fillColor,
                    fillOpacity: 1
                };
            };
        },
        onEachFeatureFunction() {
            if (!this.enableTooltip) {
                return () => { };
            }
            return (feature, layer) => {
                layer.bindTooltip(
                    "<div>code:" +
                    feature.properties.code +
                    "</div><div>nom: " +
                    feature.properties.nom +
                    "</div>",
                    { permanent: false, sticky: true }
                );
            };
        }
    },
    async created() {
        this.loading = true;
        const response = await fetch("https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson")
        const data = await response.json();
        this.geojson = data;
        this.loading = false;
    }
};
</script>
<style>
#mapa{
    z-index: 0;
}

</style>
