<template>
  <h1>Calculadora</h1>
  <div class="card">
    <table>
      <tr>
        <td>Operaci&oacute;n</td>
        <td>
          <select>
            <option></option>
          </select>
        </td>
      </tr>
      <tr>
        <td>N&uacute;mero 1</td>
        <td>
          <input type="number" />
        </td>
      </tr>
      <tr>
        <td>N&uacute;mero 2</td>
        <td>
          <input type="number" />
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <hr />
          <button>Calcular</button>
        </td>
      </tr>
    </table>

    <br />
    <div class="respuesta">
      <h4>Respuesta:</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalculadoraView",
};
</script> 

<style scoped>
.card {
  border: 1px solid yellowgreen;
  border-radius: 10px;
  margin: auto;
  width: 50%;
  padding: 20px;
}
button {
  border: 1px solid darkolivegreen;
  width: 100%;
  padding: 10px;
  background-color: yellowgreen;
  color: black;
}
table {
  margin: auto;
}
select {
  width: 100%;
}
</style>