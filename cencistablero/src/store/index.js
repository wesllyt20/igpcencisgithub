import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        reporte: null,
        fecha: null,
        hora: null,
        latitud: null,
        longitud: null,
        profundidad: null,
        magnitud: null,
        referencia: null,
        intensidad: null,
        selevento: null,
        hutc: null,
        changeval: null,
    },
    mutations: {
        getChangeval(state, payload) {
            state.changeval = payload.changeval
        }

    },
    actions: {

    },
    getters: {

    }

});