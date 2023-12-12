<template>
  <v-container>
    <h1 class="text-purple-darken-2 mb-3">Estudiante</h1>
    <v-row>
      <v-col>
        <v-text-field
          label="Nombre"
          placeholder="Ingrese su nombre"
          color="purple"
          clearable
          v-model="nombre"
        ></v-text-field>
        <v-text-field
          label="Edad"
          placeholder="Ingrese su edad"
          color="purple"
          type="number"
          clearable
          v-model="edad"
        ></v-text-field>
        <v-btn
          block
          color="purple-darken-2"
          prepend-icon="mdi-check"
          @click="guardarDatos"
          >Guardar datos</v-btn
        >
      </v-col>
      <v-col>
        <v-card title="Equipo">
          <v-card-text>
            <v-btn
              append-icon="mdi-delete-forever"
              color="red"
              size="small"
              @click="eliminarTodo"
              v-if="equipo.length !== 0"
              >Borrar todo</v-btn
            >
            <v-table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Edad</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(persona, index) in equipo" :key="index">
                  <td>{{ persona.nombre }}</td>
                  <td>{{ persona.edad }}</td>
                  <td>
                    <v-btn
                      icon="mdi-delete"
                      size="x-small"
                      color="red"
                      @click="eliminar(index)"
                    ></v-btn>
                  </td>
                </tr>
                <tr v-if="equipo.length === 0">
                  <td colspan="3" class="text-center">
                    No hay estudiantes cargados
                  </td>
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
  data() {
    return {
      // Var p/ almacenar datos del Form
      nombre: "",
      edad: ' ',
      // Arreglo de estudiantes
      equipo: [],
    };
  },
  methods: {
    // Almacenar datos en el LS
    guardarDatos() {
      let persona = { nombre: this.nombre, edad: this.edad };
      // Agregar Persona al Array (Equipo)
      this.equipo.push(persona);
      // Agregar Array al LS
      localStorage.setItem("equipo", JSON.stringify(this.equipo));
      console.log(persona);
      // Limpiar variables del Formulario
      this.nombre = "";
      this.edad = '' ;
    },
    leer() {
      // Obtener item del LS
      let data = JSON.parse(localStorage.getItem("equipo"));
      // Verificar
      if (data) {
        this.equipo = data;
      }
    },
    created() {
      this.leer();
    },
    eliminarTodo() {
      localStorage.removeItem("equipo");
      this.equipo = [];
      console.log(this.equipo);
    },
    eliminar(index) {
      // Eliminar el estudiante x 1
      this.equipo.splice(index, 1);
      // Actualizar en LS
      localStorage.setItem("equipo", JSON.stringify(this.equipo));
    },
  },
};
</script>

<style>
</style>