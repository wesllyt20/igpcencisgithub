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
        lati: 0,
        longs: [],
        long: 0,
        athena: [],
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
        },
        setAthena(state, payload) {
            state.athena = payload
        }
    },
    actions: {
        addlatiAction(context) {
            context.commit('addLati');
        },
        addlongAction(context) {
            context.commit('addLong');
        },
        async getAthena({ commit }) {
            try {
                const res = await fetch('https://api.npoint.io/02e2e5b73f813dea421c')
                const athena = await res.json()
                console.log("vuex:", athena[0])
                commit('setAthena',athena[0])
            } catch (error) {
                console.log(error)
            }
            
        }

    },
    getters: {

    }

});