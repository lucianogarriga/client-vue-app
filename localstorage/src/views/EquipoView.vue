<template>
  <v-container>
    <h1 class="text-purple-darken-2 mb-3" >Estudiante</h1>
    <v-row>
      <v-col>
        <v-text-field
          label="Nombre"
          placeholder="Ingrese su nombre"
          color="purple"
          clearable
        ></v-text-field>
      <v-text-field
        label="Edad"
        placeholder="Ingrese su edad"
        color="purple"
        type="number"
        clearable 
      ></v-text-field>
      <v-btn block color="purple-darken-2" prepend-icon="mdi-check"
        >Guardar datos</v-btn >
      </v-col>
      <v-col> 
        <v-card title="Equipo">
            <v-card-text>
                <v-btn append-icon="mdi-delete-forever" color="red" size="small">Borrar todo</v-btn>
                <v-table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Luciano</td>
                            <td>29</td>
                            <td><v-btn icon="mdi-delete" size="x-small" color="red"></v-btn></td>
                        </tr>
                    </tbody>
                </v-table>
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "EquipoView",
};
</script>

<style>
</style>