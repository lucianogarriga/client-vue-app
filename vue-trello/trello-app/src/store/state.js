// NO es el Estado, pero sera como el Initial State

export default {
  user: null,
  fetchingData: true,
  // flag p/ mostrar u ocultar info mientras cargue datos de una peticion asincrona
  error: null,

  // Datos de la App
  boards: {
    /* 
        id: {
            id,
            owner,
            name
        }   
    */
  },
  lists: {
    /*
        id: {
            id, 
            board,
            name
        }
    */
  },
  tasks: {
    /*
        id: {
            id,
            list,
            title,
            completed
        }
    */
  },
};
