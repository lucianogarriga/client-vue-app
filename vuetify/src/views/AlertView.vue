<template>
    <v-container :fluid="true">
        <h1 class="text-green-darken-4">Alert</h1>
        <v-btn
            prepend-icon="mdi-bell-ring"
            color="indigo"
            rounded="xl"
            @click="alertState = !alertState"
        >
        Mostrar alerta
        </v-btn>
        <br>
        <!-- Alerta -->
        <v-alert
            closable
            v-model="alertState"
            icon="mdi-information"
            title="Respuesta"
            text="El producto ha sido guardado" 
            class="mt-3"
        >

        </v-alert>
    </v-container>
</template>

<script>
export default {
    name: 'AlertView',
    data(){
        return {
            alertState: false
        }
    }
}
</script>

<style scoped>
.v-container{
  max-width: 890px;
}
</style>