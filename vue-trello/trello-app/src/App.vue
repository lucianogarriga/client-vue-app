<template> 
  <AppHeader/>
  <h1 class="title">App View</h1>

  <router-view class="container"></router-view> 
  
  <AppFooter/>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: "App",
  components:{
    AppHeader, 
    AppFooter
  }
}
</script>
 
<style>
.container {
  margin: 2rem;
}
.title{
  margin: 10px;
}  
</style>
