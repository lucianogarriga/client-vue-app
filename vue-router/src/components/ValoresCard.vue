<template>
    <div>
        <p class="detail-li">{{detalle}}</p>
    </div>
</template>

<script>
export default {
    name: 'ValoresCard',
    // enviar valores por props
    props: {
        detalle: String
    }
}
</script>

<style scoped> 
    .detail-li{
        padding: 10px;
        border: 1px solid salmon;
        margin: auto;
        width: 50%;
        margin-bottom: 12px;
        border-radius: 15px;
    }
    .detail-li:hover{
    color: aliceblue;
    background: darkred;
    transition: 0.2s;
    font-weight: 600;
}
</style>