<template>
  <v-container :fluid="true">
    <h1 class="text-black-4">Table</h1>
    <v-table hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>Luciano</td>
            <td>Garriga</td>
            <td><v-btn icon="mdi-close" size="small" color="red"></v-btn></td>
        </tr>
        <tr>
            <td>Francisco</td>
            <td>Gomez</td>
            <td><v-btn icon="mdi-pencil" size="small" color="blue"></v-btn></td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.v-container {
  max-width: 890px;
}
</style>