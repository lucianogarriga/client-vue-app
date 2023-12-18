<template>
  <section>
    <h3><span>Mis paneles</span> > {{ name }}</h3>
    <input
      type="text"
      placeholder="Añade una lista"
      v-model="listName"
      @keyup.enter="add()"
    />
    <div class="container">
        <column
            v-for="(list,i) in boardList" 
            :key="i" 
            :listId="list.id"
            :name="list.name"
        >
        </column>
    </div>
  </section>
</template>


<script>
import Column from '@/components/Column.vue';

export default {
  name: "BoardView",
  components: {
    Column
  },
  props: {
    name: String,
    id: String,
  },
  data(){
    return{
        listName: '',
        boardList: [
            {id: 1, name: 'Lista 1'}
        ]
    }
  },
  methods: {
    add(){
        this.boardList.push({name: this.listName})
    }
  },
};
</script>


<style lang="scss" scoped>
section {
  text-align: center;
}

h3 {
  color: #37474f;
  text-align: left;
  margin: 1.5rem;

  span {
    color: #546e7a;
  }
}
input {
  box-sizing: border-box;
  background-color: #546e7a;
  border: 2px solid #546e7a;
  border-radius: 3px;
  font-size: 1.1rem;
  outline: 0;
  padding: 0.5rem;
  transition: all 400ms ease;

  &:focus,
  &:active {
    background-color: white;
    color: #546e7a;
  }
  &::placeholder {
    color: white;
  }
}
</style>