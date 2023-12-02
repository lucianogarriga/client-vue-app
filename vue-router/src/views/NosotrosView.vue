<template> 
        <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt="foto"
        />
        <h1>Valores</h1>
        <ValoresCard v-for="(valor, index) in valores" :key="index" :detalle="valor"/>
</template>

<script>
import ValoresCard from '../components/ValoresCard.vue'
export default {
    name: 'NosotrosView',
    data(){
        return{
            valores: [
                'Excelencia','Integridad','Espiritualidad','Cooperacion'
            ]
        }
    },
    components:{
        ValoresCard
    }
}
</script>

<style scoped> 
    h3{
        color: salmon;
    }
    img{
        width: 100%;
    }
</style>