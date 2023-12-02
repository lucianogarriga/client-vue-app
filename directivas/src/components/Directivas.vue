<template>
  <div class="v-text-div">

    <h3>Directivas v-text</h3>
    <p>{{ texto }}</p>
    <p v-text="texto"></p>
    <br />
    <hr />

    <h3>Directiva v-html</h3>
    <p v-html="html"></p> 
    <p v-html="link"></p>
    <br />
    <hr />

    <h3>Directiva v-model</h3>
    <p>P/ elementos de entrada. Campos de texto, de verificación. Se enlaza con el valor de una variable, podemos darle valor a un input, text area.</p>
    Libro: <input type="text" v-model="libro">
    <br>
    <br>
    Descripci&oacute;n: <textarea name="" id="" cols="30" rows="3" v-model="descripcion"></textarea>
  </div>
</template>

<script>
export default {
  name: "Directivas",
  data() {
    return {
      texto: "Hola mundo, soy una directiva de texto",
      html: "Parecida a v-text. Renderiza contenido HTML. Puede presentar riesgos p/ seguridad. Inserta HTML sin procesarlo (internamente utiliza inner.HTML) ",
      link: '<a href="https://www.google.com/">Visitar google</a>',
      libro: 'UML 24 horas',
      descripcion: 'Este es un libro para aprender análisis y diseño de sistemas'
    };
  },
};
</script>

<style scoped> 
.v-text-div {
  background-color: rgb(29, 29, 29);
  border-radius: 6px;
  padding: 10px;
  color: rgb(224, 224, 224);
}
</style>