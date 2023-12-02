<template>
    <div>
        <h2>Contenedor de Directivas BIND</h2>
        <img :src="image" v-bind:alt="texto">

        <br><br><hr>
        <h2>Directiva v-bind para clases y estilos</h2>
        <p v-bind:class="classColor" :style="styles">Este es un subtitulo con v-bind</p>
        <br><hr>
        <div class="container">
            <h2>Directiva v-on</h2>
            <button v-on:click="saludar">Boton 1</button>
            <button @click="saludar">Boton 2</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DirectivasBind',
    data(){
        return{
            image:"https://picsum.photos/200/300",
            texto: "Este es el texto de la directiva",
            classColor: 'text',
            styles: {
                'font-size': '2em',
                'font-weight': 'bold',
                'background-color': 'darkblue',
                'color': 'aliceblue',
                'padding': '10px'
            }
        }
    },
    methods: {
        saludar(){
            return console.log("Aprestaste el boton para saludar!")
        }
    },
}
</script>

<style>

</style>