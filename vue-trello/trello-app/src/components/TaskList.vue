<template>
  <ul>
    <li
      v-for="(task, i) in tasks"
      :key="i"
      :class="{ completed: task.completed }"
    >
      {{ task.title }}
    </li>
    <input
      type="text"
      placeholder="Añade una nueva tarea..."
      v-model="title"
      @keyup.enter="add()"
    />
  </ul>
</template>


<script>
export default {
  name: "TaskList",
  props: {
    listId: String,
    tasks: Array,
  },
  data() {
    return {
      title: "",
    };
  },
  methods: {
    add() {
      // Al usar VueX, NO emitiremos eventos de components hacia arriba
      // this.tasks.push(this.title)
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  background-color: #fafafa;
  color: #3d3d3d;
  border-radius: 3px;
  border-bottom: 1px solid #ccc;
  margin: 0.25rem 0;
  padding: 1rem;

  &.completed {
    background-color: #cfd8dc;
    color: #90a4ae;
  }
}
input {
  background-color: #426c80;
  box-sizing: border-box;
  border-radius: 3px;
  border: none;
  outline: 0;
  margin: 0.25rem 0;
  padding: 1rem;
  transition: background-color 600ms ease;
  width: 100%;

  &:focus,
  &:active {
    background-color: #fafafa;
    border-bottom: 1px solid #ccc;
  }

  &::placeholder {
    color: #90a4ae;
    padding: 0.5rem;
  }
}
</style>