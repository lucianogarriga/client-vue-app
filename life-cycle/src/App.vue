<template>
  <nav>
    <router-link to="/">Animales</router-link> |
    <router-link to="/calculadora">Calculadora</router-link> 
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2a2a2a;
}
body{
  margin: 0;
  background: aliceblue; 
}
nav {
  padding: 24px;
  background-color: #2a2a2a;
}

nav a {
  font-weight: bold;
  color: rgb(177, 177, 177);
  text-decoration: none;
  border-color: gray;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: rgb(127, 173, 35);
  border-bottom: 2px solid yellowgreen;
}
</style>
