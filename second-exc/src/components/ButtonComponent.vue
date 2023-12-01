<template>
  <div id="button">
    <a :href="url" target="_blank" class="button-p">Ir al sitio oficial</a>
  </div>
</template>

<script>
export default {
  name: "ButtonGo",
  props: {
    url: String,
  },
};
</script>

<style>
#button {
  background-color: rgb(63, 67, 175);
  font-size: 16px;
  padding: 2%;
  width: 30%;
  border-radius: 6px;
  align-items: center; 
}
.button-p{
  color: aliceblue;
}
</style>