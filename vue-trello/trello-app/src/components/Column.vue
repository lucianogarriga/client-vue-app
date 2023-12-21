<template>
  <section>
    <header>
      <h3>{{ name }}</h3>
    </header>
    <TaskList
      :listId="listId"
      :tasks="tasksList"
    >

    </TaskList>
  </section>
</template>

<script>
import TaskList from './TaskList.vue';

export default {
  name: "Column",
  components:{
    TaskList
  },
  props: {
    name: String,
    listId: String,
  },
  data() {
    return {
      tasksList: [
        {id: '1', title: 'Aprender Vue', completed: false} 
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: #579aaaa6;
  box-shadow: 0 0 0 0.5px rgba(49, 49, 93, 0.03), 
  0 1px 2px 0;
  box-sizing: border-box;
  border-radius: 3px;
  color: white; 
  padding: 1rem; 
  width: 100%;  
  margin: 0 auto; 
  @media screen and (min-width: 600px) {
    width: calc(50% - 2rem - 2px);
  }
  @media screen and (min-width: 1024) {
    width: calc(33% - 2rem - 2px);
  }
}
</style>