<template>
  <header></header>
  <h1>App View</h1>
  <AppHeader/>
  <AppFooter/>
  <router-view class="container"></router-view>
  <footer></footer>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: "App",
  components:{
    AppHeader, AppFooter
  }
}
</script>
 
<style>
.container {
  margin: 2rem;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
