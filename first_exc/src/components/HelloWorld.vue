<template>
  <div class="hello">
   <div class="texto">
    <h1 >	{{msg}}</h1> 
   </div>
   <a href="https://vuejs.org/" class="button" target="_blank">Ir al sitio oficial de Vue</a>
   <p class="size-m">Mi nombre es {{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: #068FFF;
}
.texto{
  color: rgb(170, 114, 30);
  padding-bottom: 40px;
  font-weight: 700;
}
.button{
  background: #068FFF;
  color: antiquewhite;
  font-weight: 600;
  padding: 15px 20px;
  border-radius: 18px;
  text-decoration: none;
}
.size-m{
  font-size: 18px;
  margin-top: 34px;
}
</style>
