<template>
  <h1>Lista de Animales</h1>
  <h3>Desarrollo del ciclo de vida de componentes en Vue</h3>
  <div class="card">
    <h3>Nuevo Animal</h3>
    <input type="text" placeholder="Escriba un animal" v-model="nuevoAnimal" />
    <br />
    <button id="btnAdd">Agregar</button>
  </div>
  <br />
  <div class="card">
    <h4>Animales</h4>
    <p v-for="(animal, index) in animales" :key="index">{{ animal }} <button class="delete" @click="eliminarAnimal"> X </button></p>
  </div>
</template>


<script>
export default {
  name: "AnimalesList",
  data() {
    return {
      // Array para almacenar animales
      animales: [],
      nuevoAnimal: "",
    };
  },
  methods: {
    agregarAnimal() {
      this.animales.push(this.nuevoAnimal);
      this.nuevoAnimal = "";
      alert("Animal agregado. Cantidad de animales: " + this.animales.length);
    },
    eliminarAnimal(index) {
      this.animales.splice(index, 1);
      alert("Animal eliminado");
    },
  },
  beforeCreate() {
    alert("Inicia la creación del componente");
  },
  created() {
    console.log("El componente se ha creado");
    // Var de animales guardados
    let guardados = ["Perro"];
    guardados.forEach((e) => {
      this.animales.push(e);
    });
  },
  beforeMount() {
    alert("El componente está por renderizarse (montaje)");
  },
  mounted() {
    console.log("El componente se ha renderizado");
    // Agregar evento click al boton
    let btnAdd = document.getElementById("btnAdd");
    btnAdd.addEventListener("click", this.agregarAnimal);
  },
  // P/ trabajar sobre el ciclo de vida de ACTUALIZACION
  beforeUpdate() {
    console.log("El componente ha sufrido un cambio en las props o Estado");
  },
  updated() {
    console.log("El componente se actualizó y el DOM se modificó");
  },
  // P/ destruccion o unmount en el ciclo de vida
  beforeUnmount() {
    alert("El componente comenzara a desmontarse");
  },
  unmounted() {
    console.log("El componente se ha desmontado");
  },
};
</script> 

<style scoped>
.card {
  border: 1px solid yellowgreen;
  border-radius: 10px;
  margin: auto; 
  width: 280px;
  padding: 10px;
}
#btnAdd {
  border: 1px solid darkolivegreen;
  width: 180px;
  padding: 10px;
  margin: 20px 0px;
  background-color: yellowgreen;
  border-radius: 10px;
  color: black;
}
.delete{
  background-color: rgb(205, 15, 15);
  color: azure;
  border: none;
  border-radius: 4px; 
  padding: 4px;
  margin: 4px;
}
.delete:hover{
  background-color: rgb(101, 6, 6);
  transition: .2s;
}
</style>