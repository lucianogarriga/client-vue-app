 <template>
  <div class="container">
    <!-- <h1>Directivas Basicas</h1>  -->
    <!-- <Directivas/> -->
    <!-- <h1>Directivas Condicionales</h1> 
    <DirectivasCondicionales/> -->
    <!-- <h1>Directivas Bind</h1>
    <DirectivasBind/> -->
    <h1>Directivas Iterativas</h1>
    <DirectivasIterativas/>
  </div>
</template>

 <script>
import Directivas from "./components/Directivas.vue";
import DirectivasCondicionales from "./components/DirectivasCondicionales.vue";
import DirectivasBind from './components/DirectivasBind.vue';
import DirectivasIterativas from './components/DirectivasIterativas.vue';



export default {
  name: "App",
  components: {
    //Directivas,
    //DirectivasCondicionales,
    // DirectivasBind,
    DirectivasIterativas
  },
};
</script>

 <style scoped>
.container {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: aliceblue;
  color: black;
  padding: 10px;
  border-radius: 8px;
}
h1{
  font-size: 32px;
}
</style>