import Vue from 'vue'
import Vuex from 'vuex'
// Importar un middleware p/ tener un pequeño login en la consola
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    strict: debug,
    plugins: debug ? [createLogger()] : [],
  
    state:{},
    getters:{},
    actions: {},
    mutations: {}
})