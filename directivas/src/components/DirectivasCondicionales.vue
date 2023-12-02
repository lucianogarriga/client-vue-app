<template>
  <div>
    <h3>Condicional v-if</h3>
    <p v-if="promedio >= 6">
      Usted ha aprobado. Su promedio es de {{ promedio }}
    </p>
    <br />
    <hr />
    <h3>Condicional v-else</h3>
    <p id="par" v-if="numero % 2 == 0">{{ numero }} es par</p>
    <p id="impar" v-else>{{ numero }} es impar</p>
    <br />
    <hr />
    <h3>Condicional v-else-if</h3>
    <p v-if="num === 0">{{ num }} es cero</p>
    <p v-else-if="num > 0">{{ num }} es positivo</p>
    <p v-else>{{ num }} es negativo</p>
    <br />
    <hr />
    <h3>Condicional v-show</h3>
    <span>Si el valor de la propiedad es True, se muestra. Si es false, no se muestra. </span>
    <h5>A diferencia del v-if, no elimina el elemento del DOM. Si es false, cambia la propiedad 'display'</h5>
    <p v-show="login">Sesi&oacute;n iniciada</p>
  </div>
</template>

<script>
export default {
  name: "DirectivasCondicionales",
  data() {
    return {
      promedio: 7,
      numero: 12,
      num: 10,
      login: true
    };
  },
};
</script>

<style scoped>
p {
  color: darkgreen;
  font-weight: 600;
}
#par {
  color: blue;
}
#impar {
  color: red;
}
</style>
 