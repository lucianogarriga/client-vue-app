<template>
  <nav>
    <router-link to="/">Tareas</router-link> |
    <router-link to="/agregar">Agregar Tarea</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding: 0;
  margin: 0;
}
nav {
  padding: 30px;
  background-color: #213555;
  margin-bottom: 24px;
  color: rgb(103, 195, 226);
}

nav a {
  font-weight: bold;
  color: #757575;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: rgb(103, 195, 226);
  transition: .2s;
  border-bottom: 2px solid rgb(103, 195, 226);
  padding-bottom: 10px;
}
</style>
