import Vuex from 'vuex'
// Importar un middleware p/ tener un pequeño login en la consola
import {createLogger} from  'vuex';

import state from './state'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    strict: debug, // Strict Mode Si estamos en desarrollo
    plugins: debug ? [createLogger()] : [], 
    state,
    getters:{},
    actions: {},
    mutations: {}
})

