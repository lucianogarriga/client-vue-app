<template>
    <h1>Carreras por Sede</h1>
    <div id='container'>
        <!-- Renderizar el id que envian por url -->
        <h1>{{$route.params.id}}</h1>
        <!-- Renderizar la sede -->
        <h4>{{$route.params.sede}}</h4>

        <div v-if="sede==1">
            <p v-for='(carrera,i) in sede1' :key="i">{{carrera}} </p>
        </div>
        <div v-if="sede==2">
            <p v-for='(carrera,i) in sede2' :key="i">{{carrera}} </p>
        </div>
        <div v-if="sede==3">
            <p v-for='(carrera,i) in sede3' :key="i">{{carrera}} </p>
        </div>
        <div v-if="sede==4">
            <p v-for='(carrera,i) in sede4' :key="i">{{carrera}} </p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'CarrerasSede',
    // computed:{
    //     sede() {
    //         return this.$route.params.id;
    //     }
    // },
    data(){
        return{ 
            sede: this.$route.params.id,
            sede1: ['Ing. Civil', 'Arquitectura', 'Redes Informaticas'],
            sede2: ['Gastronomia', 'Mecatronica', 'Desarrollo de Software'],
            sede3: ['Ing. Industrial', 'Electronica', 'Mecatronica'],
            sede4: ['Ing. Mecanica', 'Arquitectura', 'Ambiental'] 
        }
    }
}
</script>

<style scoped>
#container{
    padding: 10px;
    border: 1px solid salmon;
    width: 80%;
    margin: auto;
    margin-top: 20px;
    border-radius: 20px;
}
</style>