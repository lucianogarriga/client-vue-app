<template>
  <v-container fluid>
    <h1 class="text-purple-darken-2">Color</h1>
    <v-row>
      <v-col>
        <v-text-field
          label="Color"
          placeholder="Ingresa un color"
          color="purple"
        >
        </v-text-field>
        <v-btn prepend-icon="mdi-check" color="purple-darken-2">Guardar Color</v-btn>
      </v-col>
      <v-col>
        <v-card title="Color" color="deep-purple-lighten-4">
            <v-card-actions>
                <v-btn icon="mdi-delete" color="red"></v-btn>
            </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ColoresView",
};
</script>

<style>
.v-container{
    max-width: 990px;
    margin: 0 auto;
}
</style>