<template>
  <img
    src="https://assets-global.website-files.com/63a9fb94e473f36dbe99c1b1/651bc8a55cd18b44ca69f0be_WQyiBeQTeiDdoyXRXw5B.png"
    alt="logo"
  />
  <h1>Bienvenido</h1>
  <button @click="nosotros" class="gohome" >Ir a Nosotros</button>
  <button @click="carreras" class="gohome">Ir a Carreras</button>
  <div class="container">
    <h2>Proyecto Vue-Router</h2>
    <p class="subtitle">Utilización de tecnolog&iacute;as como:</p>
    <p v-for="(item, index) in tech" :key="index">- {{ item }}</p>
    <br />
    <hr />

    <p class="subtitle">Utilización de directivas como:</p>
    <p v-for="(item, index) in directivas" :key="index">
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  name: "InicioView",
  methods:{
    nosotros(){
      this.$router.push('/nosotros')
    },
    carreras(){
      this.$router.push('/carreras')
    }
  },
  data() {
    return {
      tech: [
        "Rutas",
        "Router-link",
        "Rarámetros de URL",
        "Rutas Dinámicas",
        "404 Error Page",
      ],
      directivas: ["v-for", "v-if"],
    };
  },
};
</script>

<style scoped>
img {
  width: 75%;
  max-width: 550px;
  padding: 20px;
  margin-top: 25px;
}
.container {
  margin: auto;
  width: 80%;
  max-width: 550px;
  border: 2px solid salmon;
  border-radius: 10px;
  margin-bottom: 40px;
  margin-top: 20px;
}
.subtitle {
  color: darkblue;
  font-size: 18px;
  font-weight: 600;
}
</style>