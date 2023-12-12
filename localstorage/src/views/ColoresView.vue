<template>
  <v-container fluid>
    <h1 class="text-purple-darken-2">Color</h1>
    <v-row>
      <v-col>
        <v-text-field
          label="Color"
          placeholder="Ingresa un color"
          color="purple"
          v-model="color"
        >
        </v-text-field>
        <v-btn
          prepend-icon="mdi-check"
          color="purple-darken-2"
          @click="agregarColor"
          >Guardar Color</v-btn
        >
      </v-col>
      <v-col>
        <v-card title="Color" color="deep-purple-lighten-4" :text="colorGuardado" v-if="colorGuardado !==''">
          <v-card-actions>
            <v-btn icon="mdi-delete" color="red" @click="eliminarColor"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ColoresView",
  data() {
    return {
      // Variable p/ guardar color que ingrese x text-box
      color: "",
      // Variable p/ guardar color obtenido del localStorage
      colorGuardado: "",
    };
  },
  methods: {
    // Metodo que agrega colores al localStorage
    agregarColor() {
      // Agregar item a LS
      localStorage.setItem("color", this.color);
      // Invocar metodo p/ leer color
      this.leerColor();
      // Vaciar la variable color
      this.color = "";
    },
    leerColor() {
      // Obtener item del LS
      let data = localStorage.getItem("color");
      // Verificacion
      data ? (this.colorGuardado = data) : (this.colorGuardado = "");
    },
    eliminarColor() {
      localStorage.removeItem("color");
      this.leerColor();
    },
    created(){
      // Extraer datos del LS
      this.leerColor();
    }
  },
};
</script>

<style>
.v-container {
  max-width: 990px;
  margin: 0 auto;
}
</style>