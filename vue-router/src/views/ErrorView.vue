<template>
    <img src="https://media2.giphy.com/media/C21GGDOpKT6Z4VuXyn/giphy.gif" width="350" height="350" frameBorder="0"/> 
    <router-link to='/inicio'>
        <div>
            <button class="gohome">Volver al inicio</button>
        </div>
    </router-link>
</template>

<script>
export default {
    
}
</script>

<style>
.gohome{
    background-color: darkred;
    border: none;
    width: 110px;
    height: 35px;
    border-radius: 10px;
    color: aliceblue;
}
.gohome:hover{
    background: rgb(208, 91, 99);
    color: rgb(62, 62, 62);
    transition: 0.2s;
}
</style>