<template>
    <v-container :fluid="true">
        <h1 class="text-black-4">Grid</h1>
        <!-- Filas -->
        <v-row>
            <!-- Columnas -->
            <v-col>Columna 1</v-col>
            <v-col>Columna 2</v-col>
            <v-col>Columna 3</v-col>
        </v-row>

        <v-row class="text-center">
            <v-col class="bg-blue-lighten-4 text-indigo">
                Columna 4
            </v-col>
            <v-col cols="6" class="bg-blue-lighten-4 text-indigo">Columna 5</v-col>
        </v-row>

        <v-row>
            <v-col>Columna 6</v-col>
            <v-col>Columna 7</v-col>
            <v-col>Columna 8</v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'GridView'
}
</script>

<style scoped>

</style>