// CLIENTE

// Importamos el SDK/Api de nuestra app de Firebase
// Las db en firebase son Colecciones, y se puede acceder a ellas mediante referencias
import {db} from './firebase'
 
// Tendremos 3 colecciones

const boardsRef = db.ref('/boards') // Los paneles de la App
const listsRef = db.ref('/lists') // Todas las listas de los boards
const tasksRef = db.ref('/tasks') // Todas las tareas en si

// Exportar un objeto con funciones que haran peticiones a la DB
// Funciones que usaremos en nuestro codigo

export default {
    getBoardsByUser(userId = 1){
        const query = boardsRef.orderByChild('owner').equalTo(userId)
        return query.once('value')
    },

    postBoard(name, owner = 1){
        const id = boardsRef.push().key 
        const board = {
            id, name, owner
        }
        return boardsRef.child(id).set(board)
        .then(()=> board)
    },

    getListsFromBoard(boardId){
        const query = listsRef.orderByChild('Board').equalTo(boardId)
        return query.once('value')
    },

    postList(board,name){
        const id = listsRef.push().key
        const column = { id, name, board }
        return listsRef.child(id).set(column)
        .then(()=> column)
    },

    getTasksFromList(listId){
        const query = tasksRef.orderByChild('list').equalTo(listId)
        return query.once('value')
    },

    postTask(list,title){
        const id = tasksRef.push().key
        const task = { id, list, title, completed: false}
        return tasksRef.child(id).set(task)
        .then(()=> task)
    },

    deleteTask(taskId){
        return tasksRef.child(taskId).remove()
    },

    completedTask(taskId){
        const query = tasksRef.child(taskId).child('completed')
        return query.once('value')
        .then(()=> snap.val())
        .then(data => query.set(!data))
    }
}
