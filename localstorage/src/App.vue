<template>
  <v-app>
    <v-app-bar class="bg-deep-purple-darken-4">
      <v-app-bar-title>LocalStorage</v-app-bar-title>
      <v-btn prepend-icon="mdi-palette" color="deep-purple-lighten-5" to='/colores'>Colores</v-btn>
      <v-btn prepend-icon="mdi-account-group" color="deep-purple-lighten-5" to='/equipo'>Equipo</v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
