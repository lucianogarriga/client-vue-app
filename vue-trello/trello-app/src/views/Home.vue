<template>
    <div>
        <h3>Mis paneles</h3>
        <div class="boards-collection">
            <input 
            type="text" 
            placeholder="Añade un nuevo panel"
            v-model="boardName"
            @keyup.enter="add()"
            >

            <!-- Listado de paneles -->
            <BoardCard 
            v-for="(board,i) in boards" 
            :key="i"
            :name="board.name"
            :id="board.id.toString()"
            > 
            </BoardCard>
        </div>
    </div>
</template>

<script>
import BoardCard from '@/components/BoardCard.vue'

export default {
    name: 'Home',
    components:{
        BoardCard,
    },
    data(){
        return{
            boardName: '',
            boards: [
                {id: 1, name: 'Tareas'},
                {id: 2, name: 'Nueva tarea'},
                ]
        }
    },
    methods:{
        add( ){
            this.boards.push({name: this.boardName})
        }
    }
}
</script>

<style lang="scss" scoped>
h3{
    text-align: left;
    margin: 1.5rem;
}
.boards-collection{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1rem;
}
input{
    box-sizing: border-box;
    background-color: #546E7A;
    border: 2px solid #546E7A;
    border-radius: 3px;
    font-size: 1.1rem;
    outline: 0;
    padding: 0.5rem;
    transition: all 400ms ease; 

    &:focus,
    &:active{
        background-color: white;
        color: #546E7A;
    }
    &::placeholder{
        color: white;
    }
}
</style>