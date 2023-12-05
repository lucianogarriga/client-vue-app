<template>
  <div class="container">
    <h1>Nuevas tareas</h1>
    <input type="text" placeholder="Escribe una tarea" v-model="tarea"/>
    <button @click="agregar">Nueva tarea</button>
  </div>
  <br />
  <div class="container">
    <h2>Eliminar tareas</h2>
    <table>
      <tr>
        <th>Tarea</th>
        <th>Estado</th>
        <th>Accion</th>
      </tr>
      <!-- Recorrer Array de Tareas -->
      <tr v-for="(tarea, i) in this.$store.getters.getTareas" :key="i">
        <td>{{ tarea.nombre }}</td>
        <td>{{ tarea.estado }}</td>
        <td><button @click="eliminar(i)">Eliminar</button></td>
      </tr>
      <tr v-if="this.$store.getters.getTareas.length == 0">
        <td colspan="3">No existen tareas para mostrar</td>
      </tr>
    </table>
  </div>
  <br />
  <div id="autor">
    <p>Desarrollador por: {{ this.$store.getters.getAutor }}</p>
  </div>
</template>

<script>
export default {
  name: "TareaNueva",
  data(){
    return{
        tarea: ''
    }
  },
  methods:{
    agregar(){
        let tareaNueva = {nombre: this.tarea, estado: 'Pendiente'} 
        // Invocar funcion de la prop ACTIONS
        this.$store.dispatch('agregarTareaAccion', tareaNueva),
        this.tarea = ''
    },
    eliminar(index){
        this.$store.dispatch('eliminarTareaAccion', index)
    }
  }
};
</script>

<style scoped>
#container {
  margin: auto;
  width: 50%;
  padding: 50px;
  border-radius: 16px;
  background-color: lightblue;
}
table,
th,
td {
  margin: auto;
  border-collapse: collapse;
  border: 2px solid black;
  padding: 10px;
  width: 70%;
  background-color: white;
}
#autor {
  text-align: center;
  margin: auto;
  width: 40%;
  background-color: #defcf9;
  color: #213555;
  padding: 5px;
}
</style>