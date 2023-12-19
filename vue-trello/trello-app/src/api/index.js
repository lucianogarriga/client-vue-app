// Client
// Importamos el SDK/Api de nuestra app de Firebase
import {db} from './firebase'

// Las db en firebase son Colecciones, y se puede acceder a ellas mediante referencias
// 3 colecciones

const boardsRef = db.ref('/boards')
const listRef = db.ref('/lists')
const tasksRef = db.ref('/tasks')

// Exportar un objeto con funciones que haran peticiones a la DB
// Funciones que usaremos en nuestro codigo

export default {
    postBoard(name){},
    getListsFromBoard (boardId){},
    postList(board,name){},
    getTasksFromList(listId){},
    postTask(list,title){},
    deleteTask(taskId){},
    completedTask(taskId){}
}
