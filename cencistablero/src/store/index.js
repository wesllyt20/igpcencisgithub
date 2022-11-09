import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // homeview, envia valor de swtich event
        selevento: null,
        namereport: null,

        // detailearthq 
        reporte: null,
        fecha: null,
        hora: null,
        latitud: 0,
        longitud: 0,
        profundidad: null,
        magnitud: null,
        horautc: null, // hora utc 
        changeval: null, // envia valor Booleano desde detailearthq al btn_publicar

        // detailubication
        referencia: null,
        intensidad: null,

        //Datos Array para mapa segun intensidad 
        lati: 0,
        long: 0,
        latis: [],
        longs: [],

        //APIs 
        athena: [], // Api de Reportes Hydra
    },

    mutations: {

        getReporte(state, payload) { state.reporte = payload.reporte },
        getFecha(state, payload) { state.fecha = payload.fecha },
        getHora(state, payload) { state.hora = payload.hora },
        getLatitud(state, payload) { state.latitud = payload.latitud },
        getLongitud(state, payload) { state.longitud = payload.longitud },
        getProfundidad(state, payload) { state.profundidad = payload.profundidad },
        getMagnitud(state, payload) { state.magnitud = payload.magnitud },
        getHorautc(state, payload) { state.horautc = payload.horautc },

        getChangeval(state, payload) { state.changeval = payload.changeval },
        setAthena(state, payload) { state.athena = payload },

        addLati(state) { state.latis = [state.lati, ...state.latis] },
        addLong(state) { state.longs = [state.long, ...state.longs] },

    },
    actions: {
        addlatiAction(context) { context.commit('addLati'); },
        addlongAction(context) { context.commit('addLong'); },
        async getAthena({ commit }) {
            try {
                const res = await fetch('https://api.npoint.io/02e2e5b73f813dea421c/')
                const athena = await res.json()
                commit('setAthena', athena)
            } catch (error) {
                console.log(error)
            }
        }

    },
    getters: {

    }

});