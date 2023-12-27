import Vuex from 'vuex'
// Importar un middleware p/ tener un pequeño login en la consola
import {createLogger} from  'vuex';

import state from './state'
    // Las ACTIONS son las encargadas de hacer peticiones asincronas
    // P/ que se actualice el estado de FIREBASE, y ya no solo local
    // Y notificar a la STORE mediante las MUTATIONS
import mutations from './mutations'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    strict: debug, // Strict Mode Si estamos en desarrollo
    plugins: debug ? [createLogger()] : [], 
    state,
    getters:{},
    actions: {},
    mutations: mutations
})

