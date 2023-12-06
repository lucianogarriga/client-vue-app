<template>
  <!-- Este componente mostrara una Barra de App -->
  <v-app-bar scroll-behavior="hide" color="purple-darken-4">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-app-bar-title>Vuetify</v-app-bar-title>
    <!-- Boton p/ navegar a la ruta -->
    <v-btn icon="mdi-home" to="/"></v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
}
</script>

<style scoped>
</style>