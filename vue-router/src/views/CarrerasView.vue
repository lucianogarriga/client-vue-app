<template>
  <h1>Carreras</h1>
  <h4>Seleccione una sede</h4>
  <router-link
    v-for="(sede, i) in sedes"
    :key="i"
    :to="{ name: 'sede', params: { id: sede.id, sede: sede.nombre } }"
  >
  {{sede.nombre}}
  </router-link>
</template>

<script>
export default {
  name: "CarrerasView",
  data() {
    return {
      sedes: [
        { id: 1, nombre: "Santa Tecla" },
        { id: 2, nombre: "La Union" },
        { id: 3, nombre: "Santa Ana" },
        { id: 4, nombre: "San Miguel" },
      ],
    };
  },
};
</script>

<style scoped>
a{
    display: block;
    padding: 10px;
    border: 1px solid salmon;
    width: 30%;
    margin: auto;
    margin-bottom: 10px;
    border-radius: 20px;
    text-decoration: none;
    color: royalblue;
    font-weight: bold;
}
a:hover{
    color: aliceblue;
    background: darkred;
}
</style>