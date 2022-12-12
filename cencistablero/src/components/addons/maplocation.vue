<template>
    <div>
        <div>

            <l-map id="mapa" :zoom="zoom" :center="[$store.state.latLocation, $store.state.longLocation]"
                style="height: 400px; width: 100%">
                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <l-geo-json v-if="show" :geojson="geojson" :options="options" :options-style="styleFunction" />
                <l-marker :lat-lng="[$store.state.latLocation, $store.state.longLocation]" :icon="icon">
                    <l-popup>
                        <h4 class="text-primary text-center m-0 font-weight-bold">
                            <b> Región:</b> {{ $store.state.regionLocation }} <br />
                            <b>Provincia: </b> {{ $store.state.provinciaLocation }} <br />
                            <b>Ubicación:</b> {{ $store.state.nameLocation }}
                        </h4>
                        <br />
                        <b> Latitud: </b> {{ $store.state.latLocation }} <br />
                        <b> Longitud </b> {{ $store.state.longLocation }}
                    </l-popup>
                </l-marker>
            </l-map>
        </div>
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
        LPopup,
    },
    data() {
        return {
            loading: false,
            show: true,
            enableTooltip: true,
            zoom: 6,
            center: [],
            geojson: null,
            fillColor: "#e4ce7f",
            url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a href="https://ultimosismo.igp.gob.pe/"> Instituto Geofísico del Perú</a> Equipo de Desarrollo IGP,',
            marker: latLng(),
            icon: icon({
                iconUrl:
                    "https://media0.giphy.com/media/D0zsDFSYYprim87DeR/giphy.gif?cid=790b76119147eeee3075fbb5a1579bbff45a1c18b0d5d432&rid=giphy.gif&ct=s",
                iconSize: [32, 37],
                iconAnchor: [16, 37],
            })

        };
    },
    watch: {

    },
    computed: {
        options() {
            return {
                onEachFeature: this.onEachFeatureFunction,
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
                    fillOpacity: 1,
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
    methods: {

    },


    async created() {
        this.loading = true;
        const response = await fetch(
            "https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson"
        );
        const data = await response.json();
        this.geojson = data;
        this.loading = false;
    },

};
</script>
<style>
#mapa {
    z-index: 0;
}
</style>