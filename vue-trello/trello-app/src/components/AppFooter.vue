<template>
  <footer>
    <span
      >Developed by
      <a href="https://github.com/lucianogarriga">Luciano Garriga</a> with
      <a href="//vuejs.org">Vue.js</a> in Córdoba, Argentina.</span
    >
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style lang="scss" scoped>
footer {  
  max-width: 1280px; 
  background-color: #cfd8dc;
  color: #545454;
  font-weight: 500;
  bottom: 0;
  padding: 1rem;
  position: fixed;
  width: 100%;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #219065;
  }  
}
</style>