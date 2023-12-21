<template>
  <div>
    <h3>Mis paneles</h3>
    <div class="boards-collection">
      <input
        type="text"
        placeholder="Añade un nuevo panel"
        v-model="boardName"
        @keyup.enter="add()"
      /> 
      <!-- Listado de paneles -->
      <BoardCard
        v-for="(board, i) in boards"
        :key="i"
        :name="board.name"
        :id="board.id"
      >
      </BoardCard>
    </div>
  </div>
</template>

<script>
import BoardCard from "@/components/BoardCard.vue";

export default {
  name: "Home",
  components: {
    BoardCard,
  },
  data() {
    return {
      boardName: "",
      boards: [
        { id: '1', name: "Tareas" },
        { id: '2', name: "Nueva tarea" }
      ],
    };
  },
  methods: {
    add() {
      const newBoard = {
        id: (this.boards.length + 1).toString(),
        name: this.boardName
      }
      this.boards.push(newBoard);
      this.boardName = '';
      this.$emit('boardAdded', newBoard);
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  text-align: left;
  margin: 1.5rem;
}
.boards-collection {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 5rem;
  gap: 1rem;
}
input {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
  background-color: #546e7a;
  border: 2px solid #546e7a;
  border-radius: 3px;
  font-size: 1.1rem;
  outline: 0;
  padding: 0.5rem;
  margin: 0.5rem;
  transition: background-color 0.4s ease, color 0.4s ease;
  cursor: pointer; 
  max-width: 300px;
  z-index: 1;

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