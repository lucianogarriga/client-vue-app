<template>
  <div id="container">
    <h1>Tareas</h1>
    <table>
      <tr>
        <th>Tarea</th>
        <th>Estado</th>
      </tr>
      <!-- Funcion p/ acceder al Array de Tareas -->
      <tr v-for="(tarea, i) in this.$store.getters.getTareas" :key="i">
        <!-- Indicamos que ira a 'Store'-'State'-'Tareas' -->
        <td>{{ tarea.nombre }}</td>
        <td>{{ tarea.estado }}</td>
      </tr>
      <!-- Mostrar el num de Tareas -->
      <tr v-if="this.$store.getters.getTareas.length == 0">
        <td colspan="3">No existen tareas para mostrar</td>
      </tr>
    </table>
  </div>
  <br />
  <div id="autor">
    <p><b>Desarrollado por: </b>
        {{this.$store.getters.getAutor}}
    </p>
  </div>
</template>

<script>
export default {
  name: "TareasList",
};
</script>

<style scoped>
#container {
  margin: auto;
  width: 60%;
  padding: 30px;
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