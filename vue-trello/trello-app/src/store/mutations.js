// import Vue from 'vue'
import * as types from './mutations-types'

// LAS MUTACIONES SON LAS QUE CAMBIAN EL ESTADO
export default {
    // Fetch de Paneles creados por el user
    // Todas las mutaciones reciben el Estado y un Payload
    [types.FETCH_BOARDS_REQUEST](state){
        state.fetchingData = true
        state.error = null
    },

    // Destructuring del boards
    [types.FETCH_BOARDS_SUCCESS](state, { boards}){
        state.fetchingData = false
        state.error = null
        // Traemos los anteriores y sumamos el nuevo
        state.boards = {...boards}
    },

    [types.FETCH_BOARDS_FAILURE](state, {error}){
        state.fetchingData = false
        state.error = error
    },



    // Fetch de Listas de un determinado panel
    [types.FETCH_LISTS_REQUEST](state){
        state.fetchingData = true
        state.error = null
    },

    // Destructuring del boards
    [types.FETCH_LISTS_SUCCESS](state, {lists}){
        state.fetchingData = false
        state.error = null
        // Traemos los anteriores y sumamos el nuevo
        state.lists = {...lists}
    },

    [types.FETCH_LISTS_FAILURE](state, {error}){
        state.fetchingData = false
        state.error = error
    },



    // Fetch de TAREAS de una Lista
    [types.FETCH_TASKS_REQUEST](state){
        state.fetchingData = true
        state.error = null
    },

    // Destructuring del boards
    [types.FETCH_TASKS_SUCCESS](state, { tasks}){
        state.fetchingData = false
        state.error = null
        // Traemos los anteriores y sumamos el nuevo
        state.tasks = {...tasks}
    },

    [types.FETCH_TASKS_FAILURE](state, {error}){
        state.fetchingData = false
        state.error = error
    },



    // CREAR UN NUEVO PANEL
    [types.ADD_BOARD](state, {board}){
        // P/ setear un objeto sera mas sencillo usar vue.set
        Vue.set(state.boards, board.id, board)
    },

    
    // Crear NUEVA LISTA DE TAREAS
    [types.ADD_COLUMN](state, {column}){
        Vue.set(state.lists, column.id, column)
    },


    // AÑADIR NUEVA TAREA A UNA LISTA
    [types.ADD_TASK](state, {task}){
        Vue.set(state.tasks, task.id, task)
    },


    // ELIMINAR UNA TAREA de una LISTA de tareas
    [types.DELETE_TASK](state, {taskId}){
        state.tasks = Object.values(state.tasks)
        .filter(task => task.id !== taskId)
    },


    // Marca como COMPLETADA una tarea
    [types.MASK_AS_COMPLETED](state, {task}){
        task.completed = !task.completed
    }
}