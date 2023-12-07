<template>
  <v-container :fluid="true">
    <h1 class="text-purple-darken-4">Formularios</h1>

    <!-- Creamos una fila y una columna -->
    <v-row>
      <v-col>
        <!-- Caja de texto -->
        <v-text-field
          label="Nombre"
          color="purple"
          type="text"
          counter
          clearable
          maxLength="18"
          prepend-inner-icon="mdi-account"
        >
        </v-text-field>
      </v-col>
      <v-col>
        <!-- Lista de opciones -->
        <v-select
          label="Pais"
          color="purple"
          clearable
          :items="paises"
          item-title="pais"
          v-model="paisSeleccionado"
        >
        </v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <!-- RadioButton -->
        <v-radio-group label="Sexo" v-model="sexo">
          <v-radio color="purple" label="Masculino" value="Masculino"></v-radio>
          <v-radio color="purple" label="Femenino" value="Femenino"></v-radio>
          <v-radio color="purple" label="Otro" value="Otro"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col>
        <!-- Checkbox -->
        <v-checkbox
          color="purple"
          label="Violeta"
          value="Violeta"
          v-model="colores"
        >
        </v-checkbox>
        <v-checkbox color="purple" label="Rojo" value="Rojo" v-model="colores">
        </v-checkbox>
        <v-checkbox
          color="purple"
          label="Amarillo"
          value="Amarillo"
          v-model="colores"
        >
        </v-checkbox>
      </v-col>
    </v-row>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
          <v-card>
            <v-card-title class="text-center"
              >Detalles del Usuario</v-card-title
            >
            <v-card-text>
              <p><strong>Nombre:</strong> {{ nombre }}</p>
              <p><strong>País:</strong> {{ paisSeleccionado }}</p>
              <p><strong>Sexo:</strong> {{ sexo }}</p>
              <p><strong>Color/es:</strong></p>
              <v-list-item v-for="(color, i) in colores" :key="i">
                <v-list-item-content
                  >{{ i + 1 }} - {{ color }}</v-list-item-content
                >
              </v-list-item>
              <!-- <v-row class="text-center">
                <v-col>
                  <v-btn color="purple" rounded >Bot&oacute;n 1</v-btn>
                </v-col>
                <v-col>
                  <v-btn color="purple" rounded disabled>Bot&oacute;n 2</v-btn>
                </v-col>
              </v-row> -->
              <v-row class="text-center">
                <v-col>
                  <v-btn color="blue" prepend-icon="mdi-check">Confirmar</v-btn>
                </v-col>
                <v-col>
                  <v-btn color="red-darken-4" prepend-icon="mdi-cancel">Cancelar</v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Botones -->
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "FormView",
  data() {
    return {
      paises: ["Argentina", "Brasil", "Chile", "Colombia", "Perú", "Uruguay"],
      paisSeleccionado: "Argentina",
      sexo: "Masculino",
      colores: ["Violeta"],
      nombre: "",
    };
  },
};
</script>

<style scoped>
.v-card {
  margin: 0 auto;
  background-color: rgba(149, 105, 206, 0.342);
  max-width: 600px;
}
.v-container{
  max-width: 890px;
}
</style>