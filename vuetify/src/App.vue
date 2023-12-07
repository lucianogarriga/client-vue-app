<template>
  <v-app>
    <!-- Crear menu lateral -->
    <v-navigation-drawer class="bg-purple-darken-4" theme="dark" permanent>
      <!-- Colocar items en el Menu -->
      <v-list-item
        link
        to="/"
        title="Grid"
        prepend-icon="mdi-grid"
      ></v-list-item>
      <v-list-item
        link
        to="/alert"
        title="Alert"
        prepend-icon="mdi-bell"
      ></v-list-item>
      <v-list-item
        link
        to="/card"
        title="Card"
        prepend-icon="mdi-card"
      ></v-list-item>
      <v-list-item
        link
        to="/form"
        title="Form"
        prepend-icon="mdi-form-textbox"
      ></v-list-item>
      <v-list-item
        link
        to="/table"
        title="Table"
        prepend-icon="mdi-table"
      ></v-list-item>
      <v-list-item
        link
        to="/tabs"
        title="Tabs"
        prepend-icon="mdi-tab"
      ></v-list-item>
    </v-navigation-drawer>
    <v-main>
      <AppBarVue />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBarVue from "./components/AppBar.vue"; 

export default {
  name: "App",

  components: {
    AppBarVue, 
  },
};
</script>
