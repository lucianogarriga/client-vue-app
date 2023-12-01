<template>
  <div class="container">
    <h1 class="main-title">Single-File Component (SFC)</h1>
    <h2 class="subtitle">Comunicación entre componentes / Props de padres a hijos / Reutilización de código</h2>
    <!-- Show the component -->
    <Card title="Vue JS" :image="'/vue.svg'" sitio="https://vuejs.org/"/>
    <Card title="React JS" :image="'/React-icon.svg.png'" sitio="https://es.react.dev/"/>
    <Card title="Angular JS" :image="'/angular.png'" sitio="https://angular.io/"/>
  </div>
</template>

<script>
import Card from "./components/CardComponent.vue";

export default {
  name: "App",
  components: {
    Card,
  },
};
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-title{
    font-size: 36px;
  }
  .subtitle{
    font-size: 18px;
    font-weight: 500;
  }
</style>
