<template>
  <router-link 
  v-bind:to="{ name: 'board', params: { id} }"
  class="board-card"
  >
    <span class="board-card-title">
        {{name}}
    </span>
  </router-link>
</template>

<script>
export default {
  name: "BoardCard",
  props: {
    id: String,
    name: String,
  },
};
</script>

<style lang="scss" scoped>
.board-card{
    background-color: #546E7A;
    box-shadow: 0 0 0 0.5px rgba(49,49,93,.03);
    box-sizing: border-box;
    border-radius: 3px;
    color: white;
    margin: 0.5rem 1.5rem;
    padding: 1rem;
    text-align: left;
    text-decoration: none;
    transition: all 600ms ease;
    width: 100%;
    height: 100px;

    &-title{
        font-size: 1.2rem;
    }
    &:hover{
        background-color: #90a4ae;
        font-weight: bold; 
    }

    @media screen and (min-width: 600px){
        width: 33%;
    }
    @media screen and (min-width: 1024){
        width: 250px;
    }
}
</style>