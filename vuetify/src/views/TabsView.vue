<template>
  <v-container :fluid="true">
    <h1 class="text-black-4">Tabs</h1>
    <!-- Pestañas / Tabs -->
    <v-tabs v-model="tabs" bg-color="indigo-darken-4">
      <v-tab value="1">Tab 1</v-tab>
      <v-tab value="2">Tab 2</v-tab>
      <v-tab value="3">Tab 3</v-tab>
    </v-tabs>

    <!-- Contenido de las Ventanas -->
    <v-window v-model="tabs">
      <v-window-item value="1">Contenido de Pestaña 1</v-window-item>
      <v-window-item value="2">Contenido de Pestaña 2</v-window-item>
      <v-window-item value="3">Contenido de Pestaña 3</v-window-item>
    </v-window>
  </v-container>
</template>

<script>
export default {
  name: "TabsView",
  data() {
    return {
      // Para determinar la Pestaña activa
      tabs: null,
    };
  },
};
</script>

<style scoped>
</style>