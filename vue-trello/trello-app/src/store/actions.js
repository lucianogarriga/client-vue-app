import * as types from './mutations-types'
import API from '@/api'

export default {
    // Function - Fetch via AJAX de Paneles del User
    // Actions reciben 2 params (state, payload) - store y datos del componente
    fetchBoards({commit}, {user}){
        // con commit despachamos la action hacia las mutations
        // y store se encarga de hacer las mutaciones del Estado
        commit(types.FETCH_BOARDS_REQUEST)

        API.getBoardsByUser(user)
        // despachamos la mutation
        .then(snap => commit(types.FETCH_BOARDS_SUCCESS, {boards: snap.val()}))
        .catch(error => commit(types.FETCH_BOARDS_FAILURE, {error}))
    },

    // Fetch via AJAX de Listas asociadas a un Panel
    fetchLists({commit}, {board}){
        commit(types.FETCH_LISTS_REQUEST)

        API.getListsFromBoard(board)
        .then(snap => commit(types.FETCH_LISTS_SUCCESS, {lists: snap.val()}))
        .catch(error => commit(types.FETCH_LISTS_FAILURE, {error}))
    },

    // Fetch via AJAX de Tareas de una lista
    fetchTasks({commit}, {list}){
        commit(types.FETCH_TASKS_REQUEST)

        API.getTasksFromList(list)
        .then(snap => commit(types.FETCH_TASKS_SUCCESS, {tasks: snap.val()}))
        .catch(error => commit(types.FETCH_TASKS_FAILURE, {error}))
    },

    // Añadir un nuevo panel (Sincrono pero Asincrono p/ hacer el cambio)
    addBoard({commit}, {name}){
        API.postBoard(name)
        .then(board => commit(types.ADD_BOARD, {board}))
    },

    addColumn({commit}, {board,name}){
        API.postList(board,name)
        .then(column => commit(types.ADD_COLUMN, {column}))
    },

    addTask({commit}, {list,title}){
        API.postTask(list,title)
        .then(task => commit(types.ADD_TASK, {task}))
    },

    deleteTask({commit}, {taskId}){
        API.deleteTask(taskId)
        .then(() => commit(types.DELETE_TASK, {taskId}))
    },

    markAsCompleted({commit}, {task}){
        API.completedTask(task.id)
        .then(()=> commit(types.MASK_AS_COMPLETED, {task}))
    }

}