<template>
  <h1>Calculadora</h1>
  <div class="card">
    <table>
      <tr>
        <td>Operaci&oacute;n</td>
        <td>
          <select v-model="operacion">
            <option
              v-for="(ope, index) in operaciones"
              :key="index"
              :value="ope.id"
            >
              {{ ope.nombre }}
            </option>
          </select>
        </td>
      </tr>
      <tr>
        <td>N&uacute;mero 1</td>
        <td>
          <input type="number" v-model="numero1" />
        </td>
      </tr>
      <tr>
        <td>N&uacute;mero 2</td>
        <td>
          <input type="number" v-model="numero2" />
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <hr />
          <button @click="calcular">Calcular</button>
        </td>
      </tr>
    </table>

    <br />
    <div class="respuesta">
      <h4>Respuesta: {{ resultado }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalculadoraView",
  data() {
    return {
      // Array para las opciones del Select
      operaciones: [
        { id: 1, nombre: "Suma" },
        { id: 2, nombre: "Resta" },
        { id: 3, nombre: "Multiplicar" },
        { id: 4, nombre: "Dividir" },
      ],
      // Var para Respuestas
      resultado: 0,
      // Var para guardar opcion del Select elegido
      operacion: 1,
      // Var para inputs
      numero1: 0,
      numero2: 0,
    };
  },
  methods: {
    calcular() {
      if (this.operacion == 1) {
        this.resultado = this.numero1 + this.numero2;
      } else if (this.operacion == 2) {
        this.resultado = this.numero1 - this.numero2;
      } else if (this.operacion == 3) {
        this.resultado = this.numero1 * this.numero2;
      } else if (this.operacion == 4) {
        this.resultado = this.numero1 / this.numero2;
      }
    },
  }, 
  watch: {
    // Ejecutar al Cambio de Opcion de Select
    operacion(nuevoValor, antiguoValor){
      if(nuevoValor != antiguoValor){
        this.calcular()
      }
    },
    // Ejecutar al cambio de input 1
    numero1(nuevoValor, antiguoValor){
      if(nuevoValor !== antiguoValor){
        this.calcular()
      }
    },
    // Ejecutar al cambio de input 2
    numero2(nuevoValor, antiguoValor){
      if(nuevoValor !== antiguoValor){
        this.calcular()
      }
    }
  }
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
button {
  border: 2px solid black;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: yellowgreen;
  color: black;
  font-weight: 700;
}
button:hover {
  background-color: rgb(4, 80, 4);
  color: azure;
  transition: 0.2s;
  cursor: pointer;
}
table {
  margin: auto;
}
select {
  width: 100%;
}
</style>