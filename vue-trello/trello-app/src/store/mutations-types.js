// TIPOS DE MUTACION
// Cambian el estado a traves de eventos que emitamos en la App

// ASINCRONAS
// Todas las peticiones async deben tener 3 tipos de mutacion
// 1 - llamada / 2 - resultado exitoso / 3 - Rdo con error

export const FETCH_BOARDS_REQUEST = 'FETCH_BOARDS_REQUEST'
export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS'
export const FETCH_BOARDS_FAILURE = 'FETCH_BOARDS_FAILURE' 

export const FETCH_LISTS_REQUEST = 'FETCH_LISTS_REQUEST'
export const FETCH_LISTS_SUCCESS = 'FETCH_LISTS_SUCCESS'
export const FETCH_LISTS_FAILURE = 'FETCH_LISTS_FAILURE' 

export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST'
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS'
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE' 

// NO SON ASINCRONAS

export const ADD_BOARD = 'ADD_BOARD'
export const ADD_COLUMN = 'ADD_COLUMN'
export const ADD_TASK = 'ADD_TASK' 
export const DELETE_TASK = 'DELETE_TASK'
export const MASK_AS_COMPLETED = 'MASK_AS_COMPLETED' 