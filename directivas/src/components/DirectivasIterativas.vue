<template>
  <div>
    <h1>Directiva For en Arrays</h1>
    <h2>Listado de pa&iacute;ses</h2>
    <ul>
      <li v-for="(pais, index) in paises" :key="index">
        {{ index + 1 }} - {{ pais }}
      </li>
    </ul>
    <hr />
    <h2>Listado de colores</h2>
    <select>
      <option v-for="(color, index) in colores" :key="index" value="index">
        {{ color }}
      </option>
    </select>
    <hr>
    <h1>Directiva For en Array de Objetos</h1>
    <h2>Tabla de pa&iacute;ses</h2>
    <table class="container">
        <tr>
            <th>Pa&iacute;s</th>
            <th>Capital</th>
        </tr>
        <tr v-for="pais in paisesObj" :key="pais.code">
            <td>{{pais.nombre}}</td>
            <td>{{pais.capital}}</td>
        </tr>
    </table>
    <br><hr>
    <div>
        <h1>Directiva For en Objetos</h1>
        <h2>Propiedades de Objetos</h2>
        <ul>
            <li v-for="(valor, propiedad) in objeto" :key="valor">
               {{propiedad}} : {{valor}} 
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DirectivasIterativas",
  data() {
    return {
      paises: ["Argentina", "Colombia", "Brasil"],
      colores: ["Azul", "Blanco", "Rojo"],
      paisesObj:[
      { code:1, nombre: 'Argentina', capital: 'CABA'},
      { code:2, nombre: 'Colombia', capital: 'Bogota'},
      { code:3, nombre: 'Brasil', capital: 'Brasilia'}
      ],
      objeto:{
        tipo: 'Gato', nombre: "Gaturro", edad: 3
      }
    };
  },
};
</script>

<style>
    h2,
    ul {
    color: darkgreen;
    }
    h1{
        font-size: 36px;
    }
    .object{
        color: blue;
    } 
    table{
        border-collapse: collapse;
    }
    td{
        border: 1px solid blue;
        padding: 10px; 
    } 
</style>