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
        latis: [],
        lati: null,
        longs: [],
        long: null,
    },
    mutations: {
        getChangeval(state, payload) {
            state.changeval = payload.changeval
        },
        addLati(state) {
            state.latis = [state.lati, ...state.latis]
        },
        addLong(state) {
            state.longs = [state.long, ...state.longs]
        }
    },
    actions: {
        addlatiAction(context) {
            context.commit('addLati');
        },
        addlongAction(context) {
            context.commit('addLong');
        }

    },
    getters: {

    }

});