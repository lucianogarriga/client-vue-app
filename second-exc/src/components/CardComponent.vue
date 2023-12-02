<template>
    <div class="card">
        <img :src="image" alt="vue-logo" srcset="">
        <p id="title">{{title}}</p>
        <ButtonGo :url="sitio"/>
    </div>
</template>

<script>
import ButtonGo from './ButtonComponent.vue'

export default {
    name: 'Card',
    props: {
        image: String,
        title: String,
        sitio: String
    },
    components:{
        ButtonGo,
    }
}
</script>

<style scoped>
    img{
        width: 14%;
    }
    #title{
        color: rgb(63, 67, 175);
        font-weight: bold;
        font-size: 24px;
    }
    .card{
        background-color: aliceblue;
        border: 1px solid #78C1F3;
        width: 65%;
        margin: 15px;
        border-radius: 20px;
        text-align: center; 
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>