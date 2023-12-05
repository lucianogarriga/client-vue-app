import { createStore } from 'vuex'

export default createStore({
  state: {
    // VAR p/ almacenar Autor
    autor: 'Luciano Garriga',
    // Array p/ almacenar tareas
    tareas: [
      {nombre: 'Realizar ejercicio Vue', estado: 'Pendiente'}
    ]
  },
  getters: {
    getTareas(state){
      return state.tareas
    },
    getAutor(state){
      return state.autor
    }
  },
  mutations: {
    agregarTarea(state, tarea){
      state.tareas.push(tarea)
    },
    eliminarTarea(state,index){
      state.tareas.splice(index,1)
    }
  },
  actions: {
    agregarTareaAccion(context, tarea){
      //invocamos la mutation
      context.commit('agregarTarea',tarea)
    },
    eliminarTareaAccion(context,tarea){
      context.commit('eliminarTarea', tarea)
    }
  },
  modules: {
  }
})
